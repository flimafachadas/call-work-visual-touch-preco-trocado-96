
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const SalasComerciais = () => {
  const navigate = useNavigate();

  const handleContractNow = () => {
    window.open('https://api.whatsapp.com/message/LIGXZ25QRZOME1?autoload=1&app_absent=0', '_blank');
  };

  const benefits = [
    "Melhor custo-benefício, conforto, estrutura completa e economia no mesmo lugar",
    "Mobília moderna",
    "Internet de alta velocidade",
    "Ambiente climatizado",
    "Recepção funcional e acolhedora",
    "Copa e área de descanso",
    "Flexibilidade de horários"
  ];

  const steps = [
    { step: 1, title: "Visita técnica", description: "Conheça nossos espaços e estrutura" },
    { step: 2, title: "Escolha sua sala", description: "Definimos a sala ideal para você" },
    { step: 3, title: "Assinatura", description: "Formalizamos o contrato" },
    { step: 4, title: "Mudança", description: "Você já pode começar a trabalhar!" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-brand-green to-brand-light-blue text-white">
          <div className="container mx-auto px-4">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-white hover:bg-white/20 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <div className="flex items-center mb-6">
              <Users className="h-12 w-12 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">Salas Privativas</h1>
            </div>
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl">
              Tenha sua própria sala privativa em um ambiente profissional, ideal para foco, reuniões e total privacidade no seu dia a dia.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-brand-blue">Vantagens de Contratar</span>{" "}
              <span className="text-brand-orange">com o Israel Coworking</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-1 flex-shrink-0" />
                    <p className="text-brand-dark">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Contract Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Como <span className="text-brand-orange">Contratar</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item) => (
                <Card key={item.step} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-brand-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-brand-dark/70 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-green to-brand-light-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Garanta sua sala comercial!</h2>
            <p className="text-xl mb-8 opacity-90">
              Tenha seu escritório completo e pronto para trabalhar no centro de Fortaleza.
            </p>
            <Button
              onClick={handleContractNow}
              size="lg"
              className="bg-white text-brand-green hover:bg-gray-100 font-bold px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              CONTRATE AGORA!
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default SalasComerciais;
