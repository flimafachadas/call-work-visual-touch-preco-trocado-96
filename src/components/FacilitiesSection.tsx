import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Wifi, 
  Armchair, 
  Coffee, 
  Bath, 
  Snowflake, 
  Sparkles, 
  MapPin, 
  Shield, 
  Car 
} from "lucide-react";
import { memo } from "react";

const facilities = [
  { icon: Users, title: "Recepção", description: "Atendimento profissional e acolhedor" },
  { icon: Wifi, title: "Internet Rápida", description: "Conexão de alta velocidade garantida" },
  { icon: Armchair, title: "Mesas e Cadeiras funcionais", description: "Mobiliário confortável para sua produtividade" },
  { icon: Coffee, title: "Copa (café)", description: "Espaço para café e relaxamento" },
  { icon: Bath, title: "WC (masculino e feminino)", description: "Banheiros completos e higienizados" },
  { icon: Snowflake, title: "Salas Climatizadas", description: "Ambiente sempre na temperatura ideal" },
  { icon: Sparkles, title: "Limpeza especializada", description: "Higienização constante de todos os espaços" },
  { icon: MapPin, title: "Fácil Acesso no Centro de Fortaleza", description: "Localização privilegiada e acessível" },
  { icon: Shield, title: "Segurança Eletrônica 24hrs", description: "Monitoramento contínuo para sua tranquilidade" },
  { icon: Car, title: "Estacionamento Rotativo*", description: "Vagas disponíveis na região" }
];

const FacilitiesSection = memo(() => {
  return (
    <section id="facilidades" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-brand-blue">Em Nosso</span>{" "}
            <span className="text-brand-orange">Espaço Você Tem Acesso</span>
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Todas as facilidades pensadas para oferecer a melhor experiência de trabalho
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="overview" className="text-sm md:text-base">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="text-sm md:text-base">
              Infraestrutura
            </TabsTrigger>
            <TabsTrigger value="services" className="text-sm md:text-base">
              Serviços
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card key={index} className="group hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="bg-blue-50 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-brand-blue" />
                      </div>
                      <h3 className="font-bold text-brand-dark mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-brand-dark/70 text-sm leading-relaxed">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-brand-blue mb-6">Tecnologia & Conforto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Wifi className="h-5 w-5 text-brand-green" />
                      <span>Internet com alta velocidade</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Armchair className="h-5 w-5 text-brand-green" />
                      <span>Salas mobiliadas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Snowflake className="h-5 w-5 text-brand-green" />
                      <span>Salas climatizadas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-brand-orange mb-6">Segurança & Localização</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-brand-green" />
                      <span>Monitoramento 24 horas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-brand-green" />
                      <span>Centro de Fortaleza - fácil acesso</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="h-5 w-5 text-brand-green" />
                      <span>Estacionamento rotativo disponível*</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Recepção Profissional</h3>
                  <p className="text-brand-dark/70">
                    Nossa equipe está sempre pronta para recebê-lo com o melhor atendimento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Coffee className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Copa Completa</h3>
                  <p className="text-brand-dark/70">
                    Área de café equipada para suas pausas e momentos de networking.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Sparkles className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Limpeza especializada</h3>
                  <p className="text-brand-dark/70">
                    Ambiente sempre limpo e higienizado para seu bem-estar.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-brand-dark/60">
                * Estacionamento rotativo sujeito à disponibilidade na região
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
});

FacilitiesSection.displayName = "FacilitiesSection";

export default FacilitiesSection;
