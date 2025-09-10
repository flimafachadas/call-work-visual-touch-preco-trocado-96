import { useEffect, useCallback, useState } from 'react';

interface PreloadOptions {
  priority?: boolean;
  sizes?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

interface ImageStatus {
  loaded: boolean;
  error: boolean;
  loading: boolean;
}

// Global cache para evitar re-downloads
const imageCache = new Map<string, Promise<void>>();
const imageStatusCache = new Map<string, ImageStatus>();

export function useImagePreloader(
  urls: string[], 
  options: PreloadOptions = {}
) {
  const [loadingStates, setLoadingStates] = useState<Record<string, ImageStatus>>(() => {
    const initialState: Record<string, ImageStatus> = {};
    urls.forEach(url => {
      const cached = imageStatusCache.get(url);
      initialState[url] = cached || { loaded: false, error: false, loading: false };
    });
    return initialState;
  });

  const preloadImage = useCallback((url: string): Promise<void> => {
    // Retorna cache se já existe
    if (imageCache.has(url)) {
      return imageCache.get(url)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      // Atualiza estado para loading
      setLoadingStates(prev => ({
        ...prev,
        [url]: { loaded: false, error: false, loading: true }
      }));

      const img = new Image();
      
      img.onload = () => {
        const status = { loaded: true, error: false, loading: false };
        imageStatusCache.set(url, status);
        setLoadingStates(prev => ({ ...prev, [url]: status }));
        resolve();
      };

      img.onerror = () => {
        const status = { loaded: false, error: true, loading: false };
        imageStatusCache.set(url, status);
        setLoadingStates(prev => ({ ...prev, [url]: status }));
        reject(new Error(`Failed to load image: ${url}`));
      };

      // Configurações de performance
      if (options.crossOrigin) {
        img.crossOrigin = options.crossOrigin;
      }
      
      if (options.sizes) {
        img.sizes = options.sizes;
      }

      // Define fetchPriority se suportado pelo navegador
      if ('fetchPriority' in img && options.priority) {
        (img as any).fetchPriority = 'high';
      }

      img.src = url;
    });

    imageCache.set(url, promise);
    return promise;
  }, [options]);

  const preloadAll = useCallback(async () => {
    const priorityUrls = options.priority ? urls.slice(0, 2) : [];
    const regularUrls = options.priority ? urls.slice(2) : urls;

    try {
      // Carrega imagens prioritárias primeiro
      if (priorityUrls.length > 0) {
        await Promise.all(priorityUrls.map(url => preloadImage(url)));
      }

      // Carrega o resto em batches para não sobrecarregar a rede
      const batchSize = 3;
      for (let i = 0; i < regularUrls.length; i += batchSize) {
        const batch = regularUrls.slice(i, i + batchSize);
        await Promise.all(batch.map(url => preloadImage(url).catch(() => {})));
        
        // Pequeno delay entre batches para evitar sobrecarga
        if (i + batchSize < regularUrls.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    } catch (error) {
      console.warn('Some images failed to preload:', error);
    }
  }, [urls, preloadImage, options.priority]);

  // Inicia o preload quando o hook é usado
  useEffect(() => {
    preloadAll();
  }, [preloadAll]);

  const getImageStatus = useCallback((url: string): ImageStatus => {
    return loadingStates[url] || { loaded: false, error: false, loading: false };
  }, [loadingStates]);

  const isAllLoaded = Object.values(loadingStates).every(status => status.loaded || status.error);
  const loadedCount = Object.values(loadingStates).filter(status => status.loaded).length;
  const progress = urls.length > 0 ? (loadedCount / urls.length) * 100 : 0;

  return {
    loadingStates,
    getImageStatus,
    preloadImage,
    isAllLoaded,
    progress,
    loadedCount,
    totalCount: urls.length
  };
}

// Hook para preload automático de imagens críticas na inicialização
export function useCriticalImagePreloader() {
  useEffect(() => {
    // Preload de imagens críticas assim que possível
    const criticalImages = [
      '/lovable-uploads/d94e1b20-0b59-4780-b234-09c04cff5b01.png', // Logo
      '/lovable-uploads/b85f6cbf-08be-4e0f-9577-ff12af587cc8.png', // Hero desktop 1
      '/lovable-uploads/de4e9b0f-50b9-4910-83b7-4e525af20e5c.png', // Hero desktop 2
      '/lovable-uploads/8c23d73e-bdc0-423f-adc8-09c6862a9cc1.png', // Hero mobile 1
      '/lovable-uploads/e70639f8-99b2-4922-a13e-6ffb50c8b512.png', // Hero mobile 2
    ];

    // Preload agressivo usando link rel=preload para máxima prioridade
    criticalImages.forEach((url, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      
      // Também força o carregamento via Image() para garantir que está no cache
      const img = new Image();
      img.src = url;
    });

    return () => {
      // Cleanup preload links
      criticalImages.forEach(url => {
        const link = document.querySelector(`link[href="${url}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);
}