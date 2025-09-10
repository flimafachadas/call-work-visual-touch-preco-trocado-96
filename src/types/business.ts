
export interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  period: string;
  description: string;
  features: readonly string[];
  color: 'blue' | 'green' | 'orange';
  bgColor: string;
  hoverBgColor: string;
  popular: boolean;
  savings: string;
}

export interface TrustIndicator {
  color: string;
  text: string;
}

export interface ServiceData {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    zipCode: string;
    maps: string;
  };
}

export interface SocialLinks {
  linkedin: string;
  instagram: string;
  whatsapp: string;
  maps: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}
