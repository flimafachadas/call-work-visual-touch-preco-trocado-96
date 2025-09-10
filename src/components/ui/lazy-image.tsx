
import { useState, useRef, useEffect, memo, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  loadingComponent?: React.ReactNode;
  priority?: boolean;
  retryAttempts?: number;
}

// Image cache to prevent repeated loads
const imageCache = new Set<string>();
const failedImages = new Set<string>();

const LazyImage = memo(({ 
  src, 
  alt, 
  fallback = '/placeholder.svg', 
  className, 
  onLoad, 
  onError,
  loadingComponent,
  priority = false,
  retryAttempts = 1,
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src));
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(() => failedImages.has(src));
  const [currentRetries, setCurrentRetries] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    imageCache.add(src);
    failedImages.delete(src);
    onLoad?.();
  }, [src, onLoad]);

  const handleError = useCallback(() => {
    if (currentRetries < retryAttempts) {
      setCurrentRetries(prev => prev + 1);
      // Retry after a delay
      setTimeout(() => {
        const img = imgRef.current;
        if (img) {
          img.src = src + `?retry=${currentRetries + 1}`;
        }
      }, 1000 * (currentRetries + 1));
    } else {
      setHasError(true);
      failedImages.add(src);
      onError?.();
    }
  }, [src, currentRetries, retryAttempts, onError]);

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
        rootMargin: '50px' 
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [priority, isInView]);

  // Preload image when in view
  useEffect(() => {
    if (!isInView || isLoaded || hasError) return;

    const img = new Image();
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [isInView, isLoaded, hasError, src, handleLoad, handleError]);

  const defaultLoadingComponent = (
    <div className={cn(
      "bg-gray-200 animate-pulse flex items-center justify-center",
      className
    )}>
      <div className="text-gray-400 text-sm">Carregando...</div>
    </div>
  );

  return (
    <div ref={imgRef} className={cn("overflow-hidden", className)}>
      {isInView && (
        <>
          {isLoaded && !hasError && (
            <img
              src={src}
              alt={alt}
              className={cn(
                "transition-opacity duration-300 opacity-100",
                className
              )}
              loading={priority ? "eager" : "lazy"}
              {...props}
            />
          )}
          
          {hasError && (
            <img
              src={fallback}
              alt={`${alt} (fallback)`}
              className={cn(
                "transition-opacity duration-300 opacity-100",
                className
              )}
              {...props}
            />
          )}
          
          {!isLoaded && !hasError && (
            loadingComponent || defaultLoadingComponent
          )}
        </>
      )}
      
      {!isInView && (defaultLoadingComponent)}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

export { LazyImage };

// Utility to clear cache (useful for development)
export const clearImageCache = () => {
  imageCache.clear();
  failedImages.clear();
};

// Utility to preload critical images
export const preloadImages = (urls: string[]) => {
  urls.forEach(url => {
    if (!imageCache.has(url)) {
      const img = new Image();
      img.onload = () => imageCache.add(url);
      img.src = url;
    }
  });
};
