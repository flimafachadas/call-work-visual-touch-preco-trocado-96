
import { useEffect, useRef } from 'react';

interface FloatingElementConfig {
  selector: string;
  animationDelay?: string;
  duration?: number;
  distance?: number;
}

export const useFloatingElements = (elements: FloatingElementConfig[]) => {
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Criar observer para animações baseadas em visibilidade
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Aplicar configurações aos elementos
    elements.forEach(({ selector, animationDelay }) => {
      const element = document.querySelector(selector);
      if (element) {
        if (animationDelay) {
          (element as HTMLElement).style.animationDelay = animationDelay;
        }
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [elements]);
};

// Hook para otimizar animações CSS
export const useOptimizedAnimations = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detectar preferência do usuário por movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionPreference = (e: MediaQueryListEvent | MediaQueryList) => {
      const elements = document.querySelectorAll('[class*="animate-"]');
      elements.forEach((element) => {
        if (e.matches) {
          element.classList.add('motion-reduced');
        } else {
          element.classList.remove('motion-reduced');
        }
      });
    };

    handleMotionPreference(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionPreference);
    };
  }, []);
};
