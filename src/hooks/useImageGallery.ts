import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ImageAsset } from '@/types/global';
import { useImagePreloader } from '@/hooks/useImagePreloader';

interface UseImageGalleryOptions {
  preloadAll?: boolean;
  priority?: boolean;
}

export function useImageGallery(images: ImageAsset[], options: UseImageGalleryOptions = {}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { preloadAll = true, priority = false } = options;

  // Extract all image URLs for preloading
  const imageUrls = useMemo(() => images.map(img => img.src), [images]);
  
  // Use image preloader hook if preloadAll is enabled
  const { getImageStatus } = useImagePreloader(
    preloadAll ? imageUrls : [], 
    { priority }
  );

  const openImage = useCallback((src: string) => {
    setSelectedImage(src);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedImage) {
      closeImage();
    }
  }, [selectedImage, closeImage]);

  // Set up keyboard listener
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedImage, handleKeyDown]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return {
    selectedImage,
    openImage,
    closeImage,
    getImageStatus: preloadAll ? getImageStatus : undefined,
    isModalOpen: !!selectedImage
  };
}