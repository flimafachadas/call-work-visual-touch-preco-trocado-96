import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Shield, Award, Users, Globe, Headphones } from "lucide-react";
import type { SocialMediaLink, ContactInfo, NavigationLink, Certification } from "@/types/common";
import { CONTACT_INFO, SOCIAL_LINKS } from "./index";

export const FOOTER_CERTIFICATIONS: Certification[] = [
  { icon: Shield, text: "ISO 27001 Certified", color: "brand-green" },
  { icon: Award, text: "Best Coworking 2024", color: "brand-orange" },
  { icon: Users, text: "500+ Members", color: "brand-blue" },
  { icon: Globe, text: "Rede Global", color: "brand-green" }
];

export const FOOTER_SOCIAL_MEDIA: SocialMediaLink[] = [
  { href: SOCIAL_LINKS.linkedin, icon: Linkedin, bgColor: "brand-blue", label: "LinkedIn" },
  { href: SOCIAL_LINKS.instagram, icon: Instagram, bgColor: "brand-orange", label: "Instagram" }
];

export const FOOTER_QUICK_LINKS: NavigationLink[] = [
  { href: "#home", text: "Início" },
  { href: "#services", text: "Serviços" },
  { href: "#spaces", text: "Planos e Preços" },
  { href: "#contact", text: "Contato" },
  { href: "/blog", text: "Blog & Insights" },
  { href: "/events", text: "Eventos" },
  { href: "/community", text: "Comunidade" },
  { href: "/careers", text: "Trabalhe Conosco" },
  { href: "/partnerships", text: "Parcerias" }
];

export const FOOTER_LEGAL_LINKS: NavigationLink[] = [
  { href: "/privacy", text: "Política de Privacidade" },
  { href: "/terms", text: "Termos de Uso" },
  { href: "/cookies", text: "Política de Cookies" },
  { href: "/accessibility", text: "Acessibilidade" },
  { href: "/lgpd", text: "LGPD" }
];

export const FOOTER_CONTACT_EMAILS: string[] = [
  CONTACT_INFO.email,
  "vendas@israelcoworkingoffice.com",
  "suporte@israelcoworkingoffice.com"
];

export const FOOTER_WORKING_HOURS: string[] = [
  "Segunda a Sexta: 8h - 18h",
  "Sábado e Domingo: Fechado"
];

export const FOOTER_CONTACT_INFO: ContactInfo[] = [
  {
    icon: MapPin,
    content: [
      CONTACT_INFO.address.street,
      `${CONTACT_INFO.address.neighborhood}, ${CONTACT_INFO.address.city}`,
      CONTACT_INFO.address.zipCode
    ],
    label: "Endereço Principal",
    color: "brand-blue"
  },
  {
    icon: Phone,
    content: [CONTACT_INFO.phone, `WhatsApp: ${CONTACT_INFO.whatsapp}`],
    label: "Telefones",
    color: "brand-blue"
  },
  {
    icon: Mail,
    content: FOOTER_CONTACT_EMAILS,
    label: "E-mails",
    color: "brand-blue"
  },
  {
    icon: Clock,
    content: FOOTER_WORKING_HOURS,
    label: "Horário de Funcionamento",
    color: "brand-blue"
  },
  {
    icon: Headphones,
    content: ["WhatsApp disponível"],
    label: "Central de Ajuda",
    color: "brand-blue"
  }
];
