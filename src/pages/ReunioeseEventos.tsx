
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ReunioeseEventos = () => {
  const navigate = useNavigate();

  const handleContractNow = () => {
    window.open('https://api.whatsapp.com/message/LIGXZ25QRZOME1?autoload=1&app_absent=0', '_blank');
  };

  const benefits = [
    "Salas totalmente equipadas",
    "Localização privilegiada e estratégica",
    "Flexibilidade de horários",
    "Suporte técnico incluído",
    "Utilização por hora, turno e diária",
    "Ambiente profissional e moderno"
  ];

  const steps = [
    { step: 1, title: "Consulte disponibilidade", description: "Verifique datas e horários disponíveis" },
    { step: 2, title: "Reserve sua sala", description: "Escolha o espaço ideal para seu evento" },
    { step: 3, title: "Confirmação", description: "Finalizamos os detalhes do seu evento" },
    { step: 4, title: "Realize seu evento", description: "Tudo pronto para o seu sucesso!" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-brand-light-blue to-brand-blue text-white">
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
              <BookOpen className="h-12 w-12 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">Sala de Reuniões</h1>
            </div>
            
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl">
              Sala de reuniões para atender seu cliente com conforto e praticidade, transmitindo credibilidade. Atendimento profissional. Feche negócios!!
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
                    <div className="bg-brand-light-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
            <h2 className="text-3xl font-bold mb-6">Reserve seu espaço para eventos!</h2>
            <p className="text-xl mb-8 opacity-90">
              Salas equipadas e prontas para receber seus clientes e eventos corporativos.
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

export default ReunioeseEventos;
