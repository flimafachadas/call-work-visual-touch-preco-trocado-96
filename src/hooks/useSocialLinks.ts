
import { useCallback } from 'react';
import { handleWhatsAppClick, handleInstagramClick, handleMapsClick } from '@/utils/socialUtils';

export const useSocialLinks = () => {
  const handleWhatsApp = useCallback(() => {
    handleWhatsAppClick();
  }, []);

  const handleInstagram = useCallback(() => {
    handleInstagramClick();
  }, []);

  const handleMaps = useCallback(() => {
    handleMapsClick();
  }, []);

  return {
    handleWhatsApp,
    handleInstagram,
    handleMaps
  };
};
