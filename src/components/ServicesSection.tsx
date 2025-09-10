import { Building, Users, Presentation, Building2, Clock } from "lucide-react";
import { memo } from "react";
const additionalFeatures = ["Ar-Condicionado", "Internet Gigabit", "Móveis Funcionais", "Ambiente Moderno", "Networking", "Flexibilidade"] as const;
const ServicesSection = memo(() => {
  return <section id="servicos" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-brand-blue">Nossos</span>{" "}
            <span className="text-brand-orange">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Soluções completas e modernas para atender todas as suas necessidades profissionais.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square sm:aspect-auto sm:min-h-[280px] flex flex-col overflow-hidden">
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-company-blue-light/20 to-company-blue-light/30 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-6 w-6 text-company-blue-light drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-company-blue text-base lg:text-lg mb-3 leading-tight group-hover:text-company-orange transition-colors duration-300">
                    Endereço Fiscal
                  </h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Use nosso endereço fiscal para registrar sua empresa com segurança, evitando riscos em um local apropriado e aceito pela Receita Federal.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button onClick={() => window.location.href = '/endereco-fiscal'} className="text-company-blue border border-company-blue/30 hover:bg-company-blue hover:text-white text-sm font-medium w-auto sm:w-full px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 mx-auto">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square sm:aspect-auto sm:min-h-[280px] flex flex-col overflow-hidden">
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-company-green-dark/20 to-company-green-dark/30 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-6 w-6 text-company-green-dark drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-company-blue text-base lg:text-lg mb-3 leading-tight group-hover:text-company-orange transition-colors duration-300">
                    Endereço Comercial
                  </h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Endereço comercial no coworking é praticidade com imagem profissional sem custos de uma sala física.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button onClick={() => window.location.href = '/endereco-comercial'} className="text-company-blue border border-company-blue/30 hover:bg-company-blue hover:text-white text-sm font-medium w-auto sm:w-full px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 mx-auto">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square sm:aspect-auto sm:min-h-[280px] flex flex-col overflow-hidden">
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-company-orange/20 to-company-orange/30 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-company-orange drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-company-blue text-base lg:text-lg mb-3 leading-tight group-hover:text-company-orange transition-colors duration-300">
                    Banco de horas
                  </h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Solução flexível para quem precisa usar o espaço em determinados períodos. É economia com liberdade para trabalhar quando e como quiser.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button onClick={() => window.location.href = '/banco-de-horas'} className="text-company-blue border border-company-blue/30 hover:bg-company-blue hover:text-white text-sm font-medium w-auto sm:w-full px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 mx-auto">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square sm:aspect-auto sm:min-h-[280px] flex flex-col overflow-hidden">
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-company-orange/20 to-company-orange/30 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-6 w-6 text-company-orange drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-company-blue text-base lg:text-lg mb-3 leading-tight group-hover:text-company-orange transition-colors duration-300">
                    Salas Privativas
                  </h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Tenha sua própria sala privativa em um ambiente profissional, ideal para foco, reuniões e total privacidade no seu dia a dia.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button onClick={() => window.location.href = '/salas-comerciais'} className="text-company-blue border border-company-blue/30 hover:bg-company-blue hover:text-white text-sm font-medium w-auto sm:w-full px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 mx-auto">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square sm:aspect-auto sm:min-h-[280px] flex flex-col overflow-hidden">
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-company-red/20 to-company-red/30 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-company-red drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-company-blue text-base lg:text-lg mb-3 leading-tight group-hover:text-company-orange transition-colors duration-300">Estações de Trabalho</h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Trabalhe em um ambiente que estimula sua criatividade e produtividade, além de ampliar seu networking.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button onClick={() => window.location.href = '/estacoes-trabalho'} className="text-company-blue border border-company-blue/30 hover:bg-company-blue hover:text-white text-sm font-medium w-auto sm:w-full px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 mx-auto">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square sm:aspect-auto sm:min-h-[280px] flex flex-col overflow-hidden">
              <div className="text-center relative flex-1 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-company-green-dark/20 to-company-green-dark/30 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Presentation className="h-6 w-6 text-company-green-dark drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="font-bold text-company-blue text-base lg:text-lg mb-3 leading-tight group-hover:text-company-orange transition-colors duration-300">Salas de Reuniões</h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Sala de reuniões para atender seu cliente com conforto, praticidade e credibilidade. Atendimentos profissionais. Feche negócios!
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button onClick={() => window.location.href = '/reunioes-eventos'} className="text-company-blue border border-company-blue/30 hover:bg-company-blue hover:text-white text-sm font-medium w-auto sm:w-full px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 mx-auto">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 text-center">
          <div className="glass-effect rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-4">
              Tudo Pensado Para o Seu Sucesso
            </h3>
            <p className="text-brand-dark/70 mb-6 text-sm lg:text-base">
              Cada detalhe foi cuidadosamente planejado para proporcionar a melhor experiência de trabalho
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {additionalFeatures.map(item => <span key={item} className="bg-blue-50 text-brand-blue px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap">
                  ✓ {item}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
});
ServicesSection.displayName = "ServicesSection";
export default ServicesSection;