import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const BancoDeHoras = memo(() => {
  const navigate = useNavigate();

  const handleContractNow = () => {
    window.open('https://api.whatsapp.com/message/LIGXZ25QRZOME1?autoload=1&app_absent=0', '_blank');
  };

  const benefits = [
    "Flexibilidade de uso, escolha o tempo de utilização do espaço",
    "Custo reduzido pagando as horas utilizadas",
    "Acesso a estrutura profissional, salas, internet, café e recepção inclusa",
    "Sem contratos longos",
    "Ambiente produtivo e colaborativo",
    "Horários flexíveis para sua necessidade"
  ];

  const steps = [
    { step: 1, title: "Conheça o espaço", description: "Agende uma visita para conhecer" },
    { step: 2, title: "Escolha seu pacote", description: "Defina a quantidade de horas" },
    { step: 3, title: "Assinatura", description: "Formalizamos o contrato" },
    { step: 4, title: "Use quando quiser", description: "Flexibilidade total de horários!" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-brand-orange to-brand-red text-white">
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
              <Clock className="h-12 w-12 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">Banco de Horas</h1>
            </div>
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl">
              Solução flexível para quem precisa usar o espaço em determinados períodos. 
              Você adquire pacote com horas mensais e utiliza conforme sua necessidade. 
              É economia com liberdade para trabalhar quando e como quiser.
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
                    <div className="bg-brand-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
            <h2 className="text-3xl font-bold mb-6">Adquira seu banco de horas!</h2>
            <p className="text-xl mb-8 opacity-90">
              Trabalhe com total flexibilidade e pague apenas pelas horas que utilizar.
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
});

BancoDeHoras.displayName = "BancoDeHoras";

export default BancoDeHoras;