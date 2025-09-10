import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  skip?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const {
    triggerOnce = false,
    skip = false,
    root = null,
    rootMargin = '0px',
    threshold = 0,
  } = options;

  useEffect(() => {
    if (skip || !ref.current) return;

    const element = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
        
        if (triggerOnce && isElementIntersecting) {
          observer.unobserve(element);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce, skip, hasIntersected]);

  return {
    ref,
    isIntersecting,
    hasIntersected,
  };
};

// Hook específico para lazy loading
export const useLazyLoad = (options: UseIntersectionObserverOptions = {}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return {
    ref,
    shouldLoad: isIntersecting || hasIntersected,
  };
};