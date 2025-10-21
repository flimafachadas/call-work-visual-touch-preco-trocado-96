import { Instagram, Mail, MapPin, Phone, Clock, Shield, Award, Users, Globe, Headphones, MessageCircle } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { memo } from "react";

interface Certification {
  icon: typeof Shield;
  text: string;
  color: string;
}

interface SocialMedia {
  href: string;
  icon: typeof Instagram;
  bgColor: string;
  label: string;
}

interface LinkItem {
  href: string;
  text: string;
}

const CERTIFICATIONS: Certification[] = [
  { icon: Shield, text: "ISO 27001 Certified", color: "brand-green" },
  { icon: Award, text: "Best Coworking 2024", color: "brand-orange" },
  { icon: Users, text: "500+ Members", color: "brand-blue" },
  { icon: Globe, text: "Rede Global", color: "brand-green" }
];

const SOCIAL_MEDIA: SocialMedia[] = [
  { href: SOCIAL_LINKS.instagram, icon: Instagram, bgColor: "brand-orange", label: "Instagram" }
];

const QUICK_LINKS: LinkItem[] = [
  { href: "#home", text: "Início" },
  { href: "#services", text: "Serviços" },
  { href: "#spaces", text: "Planos e Preços" },
  { href: "#contact", text: "Contato" },
  { href: "/blog", text: "Blog & Insights" },
  { href: "/events", text: "Eventos" },
  { href: "/community", text: "Comunidade" },
  { href: "/partnerships", text: "Parcerias" }
];

const LEGAL_LINKS: LinkItem[] = [
  { href: "/privacy", text: "Política de Privacidade" },
  { href: "/terms", text: "Termos de Uso" },
  { href: "/cookies", text: "Política de Cookies" },
  { href: "/accessibility", text: "Acessibilidade" },
  { href: "/lgpd", text: "LGPD" }
];

const CONTACT_EMAILS = [
  CONTACT_INFO.email
];

const WORKING_HOURS = [
  "Segunda a Sexta: 8h - 18h",
  "Sábado: 8h - 12h"
];

const CertificationItem = memo(({ cert }: { cert: Certification }) => {
  const IconComponent = cert.icon;
  return (
    <div className="flex items-center text-sm text-gray-400">
      <IconComponent className={`h-4 w-4 mr-2 text-${cert.color}`} />
      {cert.text}
    </div>
  );
});

CertificationItem.displayName = "CertificationItem";

const SocialMediaLink = memo(({ social }: { social: SocialMedia }) => {
  const IconComponent = social.icon;
  return (
    <a 
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-${social.bgColor} p-3 rounded-full hover:bg-${social.bgColor}/80 transition-all duration-300 group hover:scale-110`}
      aria-label={`Seguir no ${social.label}`}
    >
      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
    </a>
  );
});

SocialMediaLink.displayName = "SocialMediaLink";

const Footer = memo(() => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Estrela decorativa no footer */}
      <div className="absolute top-10 right-10 opacity-5" aria-hidden="true">
        <img 
          src="/lovable-uploads/f57fcdeb-858a-4f5c-a2bd-6d674631b6ba.png" 
          alt="" 
          className="w-40 h-40 animate-float"
          style={{ animationDelay: '4s' }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <img 
                src="/lovable-uploads/03b7580a-e063-48bd-bd9a-ec723ee86fec.png" 
                alt="Israel Coworking" 
                className="h-12 w-auto mb-6 brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Líder em coworking premium em Fortaleza, oferecendo infraestrutura 
                de classe mundial para profissionais e empresas que buscam 
                excelência, inovação e resultados extraordinários.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-4 mb-6">
                {CERTIFICATIONS.map((cert, index) => (
                  <CertificationItem key={index} cert={cert} />
                ))}
              </div>

              {/* Social media */}
              <div className="flex space-x-4">
                {SOCIAL_MEDIA.map((social, index) => (
                  <SocialMediaLink key={index} social={social} />
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold mb-6 text-brand-orange text-lg">Links Rápidos</h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-bold mb-6 text-brand-orange text-lg">Contato & Suporte</h4>
              <div className="space-y-4">
                <address className="flex items-start not-italic">
                  <MapPin className="h-5 w-5 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p className="font-semibold text-white mb-1">Endereço Principal</p>
                    <p>{CONTACT_INFO.address.street}</p>
                    <p>{CONTACT_INFO.address.neighborhood}, {CONTACT_INFO.address.city}</p>
                    <p>{CONTACT_INFO.address.zipCode}</p>
                    <p className="text-brand-green text-sm mt-1">Centro de Fortaleza</p>
                  </div>
                </address>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-blue mr-3" />
                  <div className="text-gray-400">
                    <p className="font-semibold text-white">{CONTACT_INFO.phone}</p>
                    <p className="text-sm flex items-center">
                      <MessageCircle className="h-4 w-4 text-green-500 mr-1" />
                      WhatsApp: {CONTACT_INFO.whatsapp}
                    </p>
                    <p className="text-sm text-brand-green">Atendimento comercial</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-blue mr-3" />
                  <div className="text-gray-400">
                    <p>{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-blue mr-3 mt-1" />
                  <div className="text-gray-400">
                    <p className="font-semibold text-white mb-1">Horário de Funcionamento</p>
                    {WORKING_HOURS.map((schedule, index) => (
                      <p key={index}>{schedule}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <Headphones className="h-5 w-5 text-brand-blue mr-3" />
                  <div className="text-gray-400">
                    <p className="font-semibold text-white">Central de Ajuda</p>
                    <p className="text-sm">WhatsApp disponível</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Israel Coworking Brasil Ltda. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90
            </p>
            
            <nav className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              {LEGAL_LINKS.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Israel Coworking é uma marca registrada no Brasil. Este site utiliza cookies para melhorar sua experiência. 
              Ao continuar navegando, você concorda com nossa política de cookies. 
              Certificado ISO 27001 para segurança da informação. Empresa em conformidade com a LGPD.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
