
import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const PartnersSection = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToCommunitySection = () => {
    // Se estamos na página inicial, apenas faz o scroll
    if (location.pathname === '/') {
      const element = document.getElementById('comunidade');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se estamos em outra página, navega para home e depois faz o scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('comunidade');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Logos de parceiros
  const partners = [
    { 
      name: "Conduz", 
      logo: (
        <div className="h-24 w-64 bg-white rounded-lg flex items-center justify-center p-3">
          <OptimizedImage 
            src="/lovable-uploads/943eed98-884e-4619-975b-1bc6070e16d7.png"
            alt="Conduz" 
            className="h-full w-full object-contain"
            sizes="200px"
            skeleton={<div className="h-full w-full bg-gray-200 animate-pulse rounded" />}
          />
        </div>
      )
    },
    { 
      name: "Santos & Arruda", 
      logo: (
        <div className="h-24 w-64 rounded-lg flex items-center justify-center p-2">
          <OptimizedImage 
            src="/lovable-uploads/eba24c9a-af44-4bee-818a-3389f9bb4e3d.png"
            alt="Santos & Arruda Advocacia" 
            className="h-full w-full object-contain rounded-lg"
            sizes="200px"
            skeleton={<div className="h-full w-full bg-gray-200 animate-pulse rounded-lg" />}
          />
        </div>
      )
    },
    { 
      name: "Redoma Digital", 
      logo: (
        <div className="h-24 w-64 bg-white rounded-lg flex items-center justify-center p-3">
          <OptimizedImage 
            src="/lovable-uploads/cf176dd1-f17b-4176-9d8a-e0f07981df16.png"
            alt="Redoma Digital" 
            className="h-full w-full object-contain"
            sizes="200px"
            skeleton={<div className="h-full w-full bg-gray-200 animate-pulse rounded" />}
          />
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-brand-blue">Nossos</span>{" "}
            <span className="text-brand-orange">Parceiros</span>
          </h2>
          <p className="text-brand-dark/70 max-w-2xl mx-auto">
            Trabalhamos com as melhores instituições para oferecer ainda mais valor aos nossos clientes
          </p>
        </div>

        <Marquee pauseOnHover speed={25}>
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center mx-8">
              {partner.logo}
            </div>
          ))}
        </Marquee>

        <div className="text-center mt-8">
          <p className="text-sm text-brand-dark/50 mb-4">
            * Parceiros em constante expansão para melhor atendê-lo
          </p>
          <Button 
            onClick={scrollToCommunitySection}
            className="bg-company-orange hover:bg-company-orange-2 text-white font-medium px-6 py-2 rounded-lg"
          >
            Ver Nossa Comunidade
          </Button>
        </div>
      </div>
    </section>
  );
});

PartnersSection.displayName = "PartnersSection";

export default PartnersSection;
