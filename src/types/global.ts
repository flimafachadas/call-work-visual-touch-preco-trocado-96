// Global type definitions
export interface ContactFormData {
  nome: string;
  whatsapp: string;
  servico: string;
  mensagem: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  id?: number | string;
}

export interface ContactInfo {
  title: string;
  value: string | string[];
  icon: React.ComponentType<any>;
  bgColor: string;
  iconColor: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
  bgColor: string;
  label: string;
}

export interface NavigationItem {
  title: string;
  url?: string;
  action?: () => void;
  items?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    url?: string;
    action?: () => void;
  }>;
}

export interface ServiceOption {
  value: string;
  label: string;
}

// Form validation types
export interface FormValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface FormValidationRules {
  [fieldName: string]: FormValidationRule;
}

export interface FormError {
  field: string;
  message: string;
}

// Performance monitoring types
export interface ComponentPerformanceData {
  name: string;
  renderTime: number;
  rerenderCount: number;
  lastRenderTime: number;
}

// Cache types
export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl?: number;
}

export interface CacheManager<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T, ttl?: number) => void;
  has: (key: string) => boolean;
  clear: () => void;
  size: () => number;
}