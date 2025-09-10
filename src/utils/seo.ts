// SEO utility functions
interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export class SEOManager {
  private static baseUrl = 'https://israelcoworking.com.br';
  private static defaultImage = 'https://cloud-1de12d.b-cdn.net/media/iW=1200&iH=630/3acb30ca2406f46bf415380a3436671d/image.jpg';
  private static siteName = 'Israel Coworking';

  static updateMetaTags(config: SEOConfig): void {
    // Update title
    document.title = config.title;

    // Update or create meta tags
    this.updateMetaTag('description', config.description);
    
    if (config.keywords?.length) {
      this.updateMetaTag('keywords', config.keywords.join(', '));
    }

    if (config.author) {
      this.updateMetaTag('author', config.author);
    }

    // Open Graph tags
    this.updateMetaProperty('og:title', config.title);
    this.updateMetaProperty('og:description', config.description);
    this.updateMetaProperty('og:type', config.type || 'website');
    this.updateMetaProperty('og:url', config.url || window.location.href);
    this.updateMetaProperty('og:image', config.image || this.defaultImage);
    this.updateMetaProperty('og:site_name', this.siteName);

    // Twitter tags
    this.updateMetaName('twitter:title', config.title);
    this.updateMetaName('twitter:description', config.description);
    this.updateMetaName('twitter:image', config.image || this.defaultImage);

    // Article specific tags
    if (config.type === 'article') {
      if (config.publishedTime) {
        this.updateMetaProperty('article:published_time', config.publishedTime);
      }
      if (config.modifiedTime) {
        this.updateMetaProperty('article:modified_time', config.modifiedTime);
      }
      if (config.author) {
        this.updateMetaProperty('article:author', config.author);
      }
    }

    // Update canonical URL
    this.updateCanonicalUrl(config.url || window.location.href);
  }

  private static updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private static updateMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private static updateMetaName(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private static updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  // Generate structured data for local business
  static generateLocalBusinessLD(): string {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CoworkingSpace",
      "name": "Israel Coworking",
      "description": "Conecte produtividade e bem-estar no coworking mais completo da região.",
      "url": this.baseUrl,
      "telephone": "+5585988338969",
      "email": "israelcoworkingoffice@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Pero Coelho, 428",
        "addressLocality": "Fortaleza",
        "addressRegion": "CE",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-3.7276689",
        "longitude": "-38.5282486"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "priceRange": "$$",
      "image": this.defaultImage,
      "sameAs": [
        "https://instagram.com/israelcoworking",
        "https://facebook.com/israelcoworking",
        "https://linkedin.com/company/israelcoworking"
      ]
    });
  }

  // Generate breadcrumb structured data
  static generateBreadcrumbLD(items: Array<{ name: string; url: string }>): string {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    return JSON.stringify(breadcrumbList);
  }

  // Inject structured data
  static injectStructuredData(data: string, id: string): void {
    // Remove existing script if present
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    // Create and inject new script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = data;
    document.head.appendChild(script);
  }
}

// Hook for React components
export const useSEO = (config: SEOConfig) => {
  const updateSEO = () => {
    SEOManager.updateMetaTags(config);
  };

  return { updateSEO };
};