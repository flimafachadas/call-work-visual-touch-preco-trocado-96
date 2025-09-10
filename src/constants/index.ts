
export const BRAND_COLORS = {
  orange: 'brand-orange',
  red: 'brand-red',
  green: 'brand-green',
  blue: 'brand-blue',
  lightBlue: 'brand-light-blue',
  dark: 'brand-dark',
  light: 'brand-light'
} as const;

export const CONTACT_INFO = {
  phone: '085 3212-0748',
  whatsapp: '085 98833-8969',
  email: 'israelcoworkingoffice@gmail.com',
  address: {
    street: 'Rua Pero Coelho, 428',
    neighborhood: 'Centro',
    city: 'Fortaleza - CE',
    zipCode: 'Brasil',
    maps: 'https://maps.google.com/?q=Rua+Pero+Coelho+428+Centro+Fortaleza+CE'
  }
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/israelcoworking',
  instagram: 'https://www.instagram.com/israel.coworking', 
  whatsapp: 'https://api.whatsapp.com/message/LIGXZ25QRZOME1?autoload=1&app_absent=0',
  maps: 'https://maps.google.com/?q=Rua+Pero+Coelho+428+Centro+Fortaleza+CE'
} as const;

export const HERO_CONTENT = {
  title: 'Israel Coworking',
  subtitle: 'Agende sua visita e venha conhecer o espaço ideal para trabalhar com conforto e praticidade!',
  description: 'Conecte produtividade e bem-estar no coworking mais completo da região.',
  cta: 'Trabalhe, crie e evolua no seu ritmo - o espaço é seu.'
} as const;

export const SERVICES_DATA = [
  {
    title: 'Salas Privativas',
    description: 'Estrutura completa com ar-condicionado, internet de alta velocidade e cadeiras ergonômicas.',
    icon: 'building',
    color: BRAND_COLORS.blue
  },
  {
    title: 'Estações de Trabalho',
    description: 'Ambiente coletivo, criativo, produtivo com networking',
    icon: 'users',
    color: BRAND_COLORS.green
  },
  {
    title: 'Salas de Reunião',
    description: 'Perfeitas para atender clientes ou realizar treinamentos.',
    icon: 'presentation',
    color: BRAND_COLORS.orange
  }
] as const;

export const STATS = {
  activeMembers: '150+',
  satisfaction: '98%',
  access: '24/7'
} as const;

// Company information
export const COMPANY_INFO = {
  name: 'Israel Coworking Brasil Ltda',
  cnpj: '12.345.678/0001-90',
  establishedYear: 2024,
  description: 'Líder em coworking premium em Fortaleza, oferecendo infraestrutura de classe mundial para profissionais e empresas que buscam excelência, inovação e resultados extraordinários.'
} as const;

// Performance optimization - Pre-computed URLs
export const SOCIAL_URLS = Object.values(SOCIAL_LINKS);
export const CONTACT_EMAILS = [
  CONTACT_INFO.email,
  'vendas@israelcoworkingoffice.com',
  'suporte@israelcoworkingoffice.com'
] as const;

// Working hours
export const WORKING_HOURS = {
  weekdays: 'Segunda a Sexta: 8h - 18h',
  weekends: 'Sábado: 8h - 12h | Domingo: Fechado'
} as const;
