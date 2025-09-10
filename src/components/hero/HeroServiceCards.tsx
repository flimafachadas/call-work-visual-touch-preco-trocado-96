
import { Button } from "@/components/ui/button";
import { Building, Users, Presentation, BookOpen, Calculator, MapPin, Building2, Clock, ArrowRight } from "lucide-react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const HeroServiceCards = memo(() => {
  const navigate = useNavigate();

  const services = [
    {
      icon: MapPin,
      title: "Endereço Fiscal",
      description: "Use nosso endereço fiscal para registrar sua empresa com segurança, evitando riscos em um local apropriado e aceito pela Receita Federal.",
      link: "/endereco-fiscal",
      color: "company-blue-light"
    },
    {
      icon: Building2,
      title: "Endereço Comercial",
      description: "Endereço comercial no coworking é praticidade com imagem profissional sem custos de uma sala física.",
      link: "/endereco-comercial",
      color: "company-green-dark"
    },
    {
      icon: Clock,
      title: "Banco de horas",
      description: "Solução flexível para quem precisa usar o espaço em determinados períodos. É economia com liberdade para trabalhar quando e como quiser.",
      link: "/banco-de-horas",
      color: "company-orange"
    },
    {
      icon: Building,
      title: "Salas Privativas",
      description: "Tenha sua própria sala privativa em um ambiente profissional, ideal para foco, reuniões e total privacidade no seu dia a dia.",
      link: "/salas-comerciais",
      color: "company-orange"
    },
    {
      icon: Users,
      title: "Estações de Trabalho",
      description: "Trabalhe em um ambiente que estimula sua criatividade e produtividade, além de ampliar seu networking.",
      link: "/estacoes-trabalho",
      color: "company-red"
    },
    {
      icon: Presentation,
      title: "Sala de Reuniões",
      description: "Sala de reuniões para atender seu cliente com conforto, praticidade e credibilidade. Atendimentos profissionais. Feche negócios!",
      link: "/reunioes-eventos",
      color: "company-green-dark"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 -mt-8 sm:-mt-10">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index}
              className="group services-card glass-morphism rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 glow-on-hover stagger-item backdrop-blur-xl aspect-square sm:aspect-auto sm:min-h-[240px] flex flex-col overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className={`relative bg-gradient-to-br from-${service.color}/20 to-${service.color}/30 p-3 rounded-2xl w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 text-${service.color} drop-shadow-lg`} />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-white text-xs sm:text-sm lg:text-base mb-2 leading-tight group-hover:text-company-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-2xs sm:text-xs lg:text-sm text-white/80 leading-relaxed mb-3 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <Button
                    onClick={() => navigate(service.link)}
                    variant="outline"
                    size="sm"
                    className="text-white border-white/30 hover:bg-white hover:text-company-blue text-2xs sm:text-xs font-medium w-auto sm:w-full mx-auto sm:mx-0 py-2 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
                  >
                    Saiba mais
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

HeroServiceCards.displayName = "HeroServiceCards";

export default HeroServiceCards;
