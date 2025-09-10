
import { SOCIAL_LINKS } from "@/constants";
import { APP_CONFIG } from "@/constants/app";

interface LinkOpenOptions {
  newTab?: boolean;
  trackEvent?: boolean;
  fallbackUrl?: string;
}

class LinkManager {
  private static readonly openedLinks = new Set<string>();
  private static readonly isDevelopment = process.env.NODE_ENV === 'development';
  
  static openExternalLink(url: string, options: LinkOpenOptions = {}): void {
    const { newTab = true, trackEvent = true, fallbackUrl } = options;
    
    try {
      // Validar URL antes de abrir
      new URL(url);
      
      const openedWindow = window.open(
        url, 
        newTab ? '_blank' : '_self', 
        newTab ? 'noopener,noreferrer' : undefined
      );
      
      // Fallback se a janela não abrir (bloqueador de popup)
      if (!openedWindow && fallbackUrl) {
        window.location.href = fallbackUrl;
      }
      
      // Rastrear links abertos de forma otimizada
      if (trackEvent) {
        this.trackOpenedLink(url);
      }
      
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to open external link:', error);
      }
      
      if (fallbackUrl) {
        window.location.href = fallbackUrl;
      }
    }
  }
  
  private static trackOpenedLink(url: string): void {
    this.openedLinks.add(url);
    
    // Limitar o tamanho do Set para evitar vazamentos de memória
    if (this.openedLinks.size > APP_CONFIG.PERFORMANCE.MAX_TRACKED_LINKS) {
      const firstItem = this.openedLinks.values().next().value;
      if (firstItem) {
        this.openedLinks.delete(firstItem);
      }
    }
    
    if (this.isDevelopment) {
      console.log(`External link opened: ${url}`);
    }
  }
  
  static getOpenedLinksCount(): number {
    return this.openedLinks.size;
  }
  
  static clearOpenedLinks(): void {
    this.openedLinks.clear();
  }
}

// Export das funções otimizadas
export const openExternalLink = LinkManager.openExternalLink.bind(LinkManager);

// Handlers específicos com melhor tratamento de erros
export const handleWhatsAppClick = (): void => {
  const phoneNumber = SOCIAL_LINKS.whatsapp.replace(/\D/g, '');
  LinkManager.openExternalLink(SOCIAL_LINKS.whatsapp, {
    trackEvent: true,
    fallbackUrl: `tel:${phoneNumber}`
  });
};

export const handleInstagramClick = (): void => {
  LinkManager.openExternalLink(SOCIAL_LINKS.instagram, {
    trackEvent: true
  });
};

export const handleMapsClick = (): void => {
  LinkManager.openExternalLink(SOCIAL_LINKS.maps, {
    trackEvent: true
  });
};

export const handleLinkedInClick = (): void => {
  LinkManager.openExternalLink(SOCIAL_LINKS.linkedin, {
    trackEvent: true
  });
};

// Função utilitária otimizada para múltiplos links
export const openMultipleLinks = (links: string[], delay = 100): void => {
  if (!Array.isArray(links) || links.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('openMultipleLinks: Invalid links array provided');
    }
    return;
  }

  links.forEach((link, index) => {
    if (typeof link !== 'string') {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`openMultipleLinks: Invalid link at index ${index}`);
      }
      return;
    }

    setTimeout(() => {
      LinkManager.openExternalLink(link);
    }, index * delay);
  });
};

// Exportar utilitários do LinkManager
export const { getOpenedLinksCount, clearOpenedLinks } = LinkManager;
