
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Target, Award } from "lucide-react";
import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const AboutSection = memo(() => {
  const values = [
    {
      icon: Building2,
      title: "Flexibilidade",
      description: "Adaptar-se às necessidades de cada cliente, oferecendo soluções sob medida para diferentes perfis e estágios de negócio"
    },
    {
      icon: Target,
      title: "Praticidade",
      description: "Simplificar o dia a dia com serviços ágeis e eficientes, permitindo que nossos clientes foquem no que realmente importa"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Estimular conexões estratégicas que geram parcerias, negócios e novos caminhos profissionais"
    },
    {
      icon: Award,
      title: "Crescimento",
      description: "Apoiar o desenvolvimento pessoal e empresarial, criando um espaço que inspira inovação e evolução constante"
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

        {/* Layout de 3 colunas: História, Missão e Valores */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Nossa História */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Nossa História</h3>
            <div className="text-brand-dark/70 leading-relaxed space-y-4">
              <p>Nossa história começou com coragem.</p>
              <p>
                Em 2019, em meio às incertezas que a pandemia traria ao mundo, nasceu nosso coworking. 
                Um projeto que começou pequeno, mas cheio de propósito: criar um espaço acolhedor, onde 
                ideias se encontrassem e negócios florescessem — mesmo nos tempos mais difíceis.
              </p>
              <p>
                Desde então, seguimos crescendo. Um passo de cada vez, com muito trabalho, aprendendo, 
                aprimorando e, acima de tudo, buscando sempre oferecer o melhor atendimento e uma 
                experiência que faça cada pessoa se sentir parte de algo maior.
              </p>
              <p>Ainda temos muito a construir, e é uma alegria ter você nessa jornada com a gente.</p>
            </div>
          </div>

          {/* Nossa Missão */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Nossa Missão</h3>
            <p className="text-brand-dark/80 leading-relaxed">
              Oferecer um ambiente flexível e prático que impulsione profissionais e empresas, 
              promovendo conexões de valor e oportunidades de crescimento por meio do trabalho colaborativo.
            </p>
          </div>

          {/* Nossos Valores */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Nossos Valores</h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-brand-blue/10 p-2 rounded-lg flex-shrink-0 mt-1">
                      <IconComponent className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1 text-sm">{value.title}</h4>
                      <p className="text-brand-dark/70 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Imagem do ambiente */}
        <div className="mb-16 animate-fade-in">
          <OptimizedImage 
            src="/lovable-uploads/16cfd104-336c-4121-9a65-c19125385b93.png"
            alt="Israel Coworking - Ambiente moderno"
            className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto"
            progressive={true}
            sizes="(max-width: 768px) 100vw, 80vw"
            skeleton={
              <div className="w-full h-64 md:h-80 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-2xl max-w-4xl mx-auto" />
            }
          />
        </div>

        {/* Nosso Compromisso */}
        <div className="text-center animate-fade-in">
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
