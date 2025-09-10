import { useState, useRef, useEffect, memo, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  skeleton?: React.ReactNode;
  progressive?: boolean;
  sizes?: string;
  quality?: 'low' | 'medium' | 'high';
}

// Cache otimizado com LRU
class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private maxSize: number;

  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // Move para o final (mais recente)
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // Remove o mais antigo
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }
}

let imageCache = new LRUCache<string, boolean>(150);
const failedImages = new Set<string>();

// Skeleton otimizado com animação suave
const ImageSkeleton = memo(({ className }: { className?: string }) => (
  <div 
    className={cn(
      "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse",
      "relative overflow-hidden",
      className
    )}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  </div>
));

ImageSkeleton.displayName = "ImageSkeleton";

const OptimizedImage = memo(({ 
  src, 
  alt, 
  fallback = '/placeholder.svg', 
  className, 
  onLoad, 
  onError,
  priority = false,
  skeleton,
  progressive = false,
  sizes,
  quality = 'high',
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src));
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(() => failedImages.has(src));
  const [showLowRes, setShowLowRes] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  // Gera URL de baixa qualidade para progressive loading
  const getLowQualityUrl = useCallback((url: string) => {
    if (url.includes('lovable-uploads')) {
      return url; // Para uploads locais, usa a mesma imagem
    }
    return url + (url.includes('?') ? '&' : '?') + 'w=50&q=20';
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    imageCache.set(src, true);
    failedImages.delete(src);
    onLoad?.();
  }, [src, onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    failedImages.add(src);
    onError?.();
  }, [src, onError]);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' // Carrega um pouco antes de aparecer
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [priority, isInView]);

  // Progressive loading
  useEffect(() => {
    if (!progressive || !isInView || isLoaded || hasError) return;

    if (quality === 'high') {
      // Carrega versão de baixa qualidade primeiro
      const lowResImg = new Image();
      lowResImg.onload = () => setShowLowRes(true);
      lowResImg.src = getLowQualityUrl(src);
    }
  }, [progressive, isInView, isLoaded, hasError, src, getLowQualityUrl, quality]);

  // Preload da imagem principal
  useEffect(() => {
    if (!isInView || isLoaded || hasError) return;

    const img = new Image();
    img.onload = handleLoad;
    img.onerror = handleError;
    
    // Configurações de performance
    if (sizes) img.sizes = sizes;
    if ('fetchPriority' in img && priority) {
      (img as any).fetchPriority = 'high';
    }
    
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [isInView, isLoaded, hasError, src, handleLoad, handleError, priority, sizes]);

  const defaultSkeleton = (
    <ImageSkeleton className={className} />
  );

  const currentSrc = isLoaded ? src : (progressive && showLowRes ? getLowQualityUrl(src) : src);
  const imageOpacity = isLoaded ? 'opacity-100' : (progressive && showLowRes ? 'opacity-70' : 'opacity-0');

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {isInView && (
        <>
          {(isLoaded || (progressive && showLowRes)) && !hasError && (
            <img
              src={currentSrc}
              alt={alt}
              className={cn(
                "transition-all duration-500 w-full h-full object-cover",
                imageOpacity,
                isLoaded && "backdrop-blur-0",
                !isLoaded && progressive && "backdrop-blur-sm scale-105"
              )}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              sizes={sizes}
              {...props}
            />
          )}
          
          {hasError && (
            <img
              src={fallback}
              alt={`${alt} (fallback)`}
              className={cn(
                "transition-opacity duration-300 opacity-100 w-full h-full object-cover",
                className
              )}
              {...props}
            />
          )}
          
          {!isLoaded && !hasError && !(progressive && showLowRes) && (
            <div className="absolute inset-0">
              {skeleton || defaultSkeleton}
            </div>
          )}
        </>
      )}
      
      {!isInView && (
        <div className="absolute inset-0">
          {skeleton || defaultSkeleton}
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";

export { OptimizedImage };

// Utility para limpar cache
export const clearImageCache = () => {
  imageCache = new LRUCache(150);
  failedImages.clear();
};