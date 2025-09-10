
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    zipCode: string;
  };
}

export interface SocialLinks {
  linkedin: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
}

export interface Stats {
  activeMembers: string;
  internetSpeed: string;
  access: string;
  satisfaction: string;
  rating: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  badge?: string;
}

export interface Plan {
  name: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  period: string;
  description: string;
  features: string[];
  color: string;
  popular: boolean;
  savings: string;
}

export interface Facility {
  image: string;
  title: string;
  description: string;
}
