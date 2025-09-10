
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, MapPin, Users, Wifi, Crown, Zap, Shield } from "lucide-react";

const SpacesSection = () => {
  const plans = [
    {
      name: "Hot Desk",
      subtitle: "Flexibilidade Total",
      price: "R$ 350",
      originalPrice: "R$ 450",
      period: "/mês",
      description: "Perfeito para freelancers, consultores e profissionais que valorizam flexibilidade",
      features: [
        "Acesso completo ao coworking (7h-19h)",
        "Internet gigabit dedicada",
        "Área de café e cozinha completa",
        "4 horas/mês de sala de reunião",
        "Armário pessoal com chave",
        "Acesso a eventos e workshops",
        "App de reservas e networking",
        "Suporte técnico incluído"
      ],
      color: "brand-blue",
      popular: false,
      savings: "Economize R$ 100"
    },
    {
      name: "Desk Fixo",
      subtitle: "Seu Espaço Exclusivo",
      price: "R$ 650",
      originalPrice: "R$ 800",
      period: "/mês",
      description: "Mesa fixa personalizada em ambiente colaborativo premium",
      features: [
        "Mesa fixa exclusiva e personalizável",
        "Internet gigabit + Wi-Fi 6 prioritário",
        "Área de café premium ilimitada",
        "12 horas/mês de sala de reunião",
        "Armário com gaveta e fechadura",
        "Monitor 24\" Dell incluído",
        "Endereço comercial e CNPJ",
        "Recepção de correspondência",
        "Acesso 24/7 aos finais de semana",
        "Estacionamento com desconto 50%"
      ],
      color: "brand-orange",
      popular: true,
      savings: "Economize R$ 150"
    },
    {
      name: "Escritório Privado",
      subtitle: "Privacidade e Prestígio",
      price: "R$ 1.200",
      originalPrice: "R$ 1.500",
      period: "/mês",
      description: "Sala privativa completa para equipes de até 6 pessoas",
      features: [
        "Sala privativa mobiliada (15m²-25m²)",
        "Internet dedicada de 1GB",
        "Área de café executiva",
        "30 horas/mês de sala de reunião grande",
        "Móveis executivos inclusos",
        "2 monitores por estação",
        "Endereço comercial premium",
        "Recepção executiva de correspondência",
        "Acesso 24/7 completo",
        "2 vagas de estacionamento inclusas",
        "Serviço de limpeza diária",
        "Suporte técnico dedicado"
      ],
      color: "brand-green",
      popular: false,
      savings: "Economize R$ 300"
    }
  ];

  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop",
      title: "Open Space Moderno",
      description: "Ambiente amplo e iluminado com design contemporâneo, mesas ergonômicas e tecnologia integrada."
    },
    {
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=350&fit=crop",
      title: "Salas de Reunião Executive",
      description: "Equipadas com sistema de videoconferência 4K, quadros interativos e isolamento acústico profissional."
    },
    {
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&h=350&fit=crop",
      title: "Lounge & Networking",
      description: "Espaços confortáveis para relaxamento, reuniões informais e networking com outros profissionais."
    }
  ];

  return (
    <section id="spaces" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-4">
            <span className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold">
              Planos e Preços
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-brand-blue">Escolha Seu</span>{" "}
            <span className="text-brand-orange">Espaço Ideal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluções flexíveis e escaláveis para todos os tipos de profissionais. 
            Desde freelancers até grandes equipes, temos o ambiente perfeito para 
            o seu sucesso.
          </p>
          
          <div className="mt-8 inline-flex items-center space-x-4 bg-brand-green/10 px-6 py-3 rounded-full">
            <Crown className="h-5 w-5 text-brand-green" />
            <span className="text-brand-green font-semibold">Promoção de Lançamento - Até 25% OFF</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-brand-orange scale-105 lg:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-brand-orange text-white text-center py-3 font-semibold">
                  <Crown className="inline h-4 w-4 mr-2" />
                  MAIS ESCOLHIDO
                </div>
              )}
              
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className={`text-${plan.color} font-semibold mb-2`}>{plan.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-gray-400 line-through text-lg mr-3">{plan.originalPrice}</span>
                      <span className={`text-4xl font-bold text-${plan.color}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <Badge variant="secondary" className="bg-brand-green/10 text-brand-green">
                      {plan.savings}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 text-${plan.color} mr-3 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-brand-orange/90' 
                      : `bg-${plan.color} hover:bg-${plan.color}/90`
                  } text-white text-lg py-6`}
                  size="lg"
                >
                  {plan.popular ? "Começar Agora" : "Escolher Plano"}
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  ✓ Sem taxa de adesão • ✓ Cancele quando quiser
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-3xl p-8 text-white mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Benefícios Exclusivos Para Todos os Planos</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <Wifi className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="font-semibold mb-2">Internet Garantida</h4>
                <p className="opacity-90">SLA de 99.9% de uptime com backup redundante</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="font-semibold mb-2">Segurança Total</h4>
                <p className="opacity-90">Certificações internacionais e seguro patrimonial</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="font-semibold mb-2">Suporte 24/7</h4>
                <p className="opacity-90">Equipe técnica disponível sempre que precisar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities showcase */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Conheça Nossos <span className="text-brand-orange">Espaços</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group animate-fade-in">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="font-bold text-xl mb-2">{facility.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não Tem Certeza Qual Plano Escolher?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma visita gratuita e conheça todos os nossos espaços. 
              Nossa equipe vai te ajudar a encontrar a solução perfeita.
            </p>
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Agendar Visita Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
