
interface ImageOptimization {
  src: string;
  srcSet?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  alt: string;
}

interface ResponsiveSizes {
  mobile: string;
  tablet: string;
  desktop: string;
}

export const createOptimizedImageProps = (
  src: string,
  alt: string,
  options: Partial<Omit<ImageOptimization, 'src' | 'alt'>> = {}
): ImageOptimization => {
  return {
    src,
    alt,
    loading: 'lazy',
    decoding: 'async',
    ...options
  };
};

export const generateSrcSet = (baseSrc: string, sizes: number[]): string => {
  if (!Array.isArray(sizes) || sizes.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('generateSrcSet: Invalid sizes array provided');
    }
    return baseSrc;
  }

  return sizes
    .filter(size => typeof size === 'number' && size > 0)
    .sort((a, b) => a - b)
    .map(size => `${baseSrc}?w=${size} ${size}w`)
    .join(', ');
};

export const getImageSizes = (breakpoints: Record<string, string>): string => {
  if (!breakpoints || typeof breakpoints !== 'object') {
    if (process.env.NODE_ENV === 'development') {
      console.warn('getImageSizes: Invalid breakpoints object provided');
    }
    return '100vw';
  }

  return Object.entries(breakpoints)
    .map(([media, size]) => `(${media}) ${size}`)
    .join(', ');
};

// Constantes otimizadas para tamanhos responsivos
export const RESPONSIVE_SIZES: Record<string, ResponsiveSizes> = {
  hero: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '600px'
  },
  gallery: {
    mobile: '100vw',
    tablet: '33vw',
    desktop: '25vw'
  },
  card: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '300px'
  }
} as const;

// Função para obter srcset padrão baseado no tipo de imagem
export const getDefaultSrcSet = (baseSrc: string, type: keyof typeof RESPONSIVE_SIZES): string => {
  const sizesMap = {
    hero: [400, 800, 1200, 1600],
    gallery: [300, 600, 900],
    card: [200, 400, 600]
  };

  return generateSrcSet(baseSrc, sizesMap[type] || sizesMap.card);
};

// Função para detectar se a imagem suporta WebP
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webp = new Image();
    webp.onload = webp.onerror = () => {
      resolve(webp.height === 2);
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};
