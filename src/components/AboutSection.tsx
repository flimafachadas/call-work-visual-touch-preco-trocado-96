
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Target, Award } from "lucide-react";
import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const AboutSection = memo(() => {
  const values = [
    {
      icon: Building2,
      title: "Inovação",
      description: "Sempre buscando as melhores soluções para nossos clientes"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Conectando pessoas e criando oportunidades de networking"
    },
    {
      icon: Target,
      title: "Excelência", 
      description: "Comprometidos com a qualidade em todos os nossos serviços"
    },
    {
      icon: Award,
      title: "Confiança",
      description: "Construindo relacionamentos duradouros baseados na transparência"
    }
  ];

  return (
    <section id="quem-somos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-brand-blue">Quem</span>{" "}
            <span className="text-brand-orange">Somos</span>
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
            O Israel Coworking nasceu da visão de transformar a forma como as pessoas trabalham, 
            criando um ecossistema de inovação que conecta empreendedores, profissionais liberais 
            e empresas em um ambiente colaborativo e inspirador.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Nossa História</h3>
            <p className="text-brand-dark/70 mb-4 leading-relaxed">
              Nossa história começou com coragem.
            </p>
            <p className="text-brand-dark/70 mb-4 leading-relaxed">
              Em 2019, em meio às incertezas que a pandemia traria ao mundo, nasceu nosso coworking. 
              Um projeto que começou pequeno, mas cheio de propósito: criar um espaço acolhedor, onde 
              ideias se encontrassem e negócios florescessem — mesmo nos tempos mais difíceis.
            </p>
            <p className="text-brand-dark/70 mb-4 leading-relaxed">
              Desde então, seguimos crescendo. Um passo de cada vez, com muito trabalho, aprendendo, 
              aprimorando e, acima de tudo, buscando sempre oferecer o melhor atendimento e uma 
              experiência que faça cada pessoa se sentir parte de algo maior.
            </p>
            <p className="text-brand-dark/70 leading-relaxed">
              Ainda temos muito a construir, e é uma alegria ter você nessa jornada com a gente.
            </p>
          </div>
          
          <div>
            <OptimizedImage 
              src="/lovable-uploads/16cfd104-336c-4121-9a65-c19125385b93.png"
              alt="Israel Coworking - Ambiente moderno"
              className="rounded-2xl shadow-lg w-full h-auto"
              progressive={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              skeleton={
                <div className="w-full h-64 md:h-80 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-2xl" />
              }
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-blue/10 p-4 rounded-xl w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h4 className="font-bold text-brand-dark mb-2">{value.title}</h4>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Nosso Compromisso</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Estamos comprometidos em ser mais que um coworking. Somos parceiros no seu crescimento, 
              oferecendo não apenas espaço físico, mas um ecossistema completo para o seu sucesso profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
