
import { Button } from "@/components/ui/button";
import { handleWhatsAppClick } from "@/utils/socialUtils";
import { memo } from "react";
import { usePerformanceMonitoring } from "@/hooks/usePerformance";
import { PRICING_PLANS } from "@/constants/pricing";
import { PricingContainer } from "@/components/ui/pricing-container";

const PricingSection = memo(() => {
  usePerformanceMonitoring('PricingSection');

  // Converter os planos existentes para o formato do novo componente
  const newFormatPlans = PRICING_PLANS.map((plan, index) => ({
    name: plan.name,
    monthlyPrice: parseInt(plan.price.replace('A partir de R$ ', '').replace(',', '.').split(' ')[0]),
    features: [...plan.features], // Convert readonly array to mutable array
    isPopular: index === 0, // Define o primeiro plano como popular (Estação de Trabalho)
    accent: index === 0 ? "bg-green-500" : 
            index === 1 ? "bg-blue-500" : 
            index === 2 ? "bg-orange-500" : 
            "bg-blue-600"
  }));

  return (
    <section id="precos" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Estrela decorativa */}
      <div className="absolute top-20 right-10 opacity-10">
        <img 
          src="/lovable-uploads/f57fcdeb-858a-4f5c-a2bd-6d674631b6ba.png" 
          alt="Decoração estrela" 
          className="w-32 h-32 lg:w-48 lg:h-48 animate-float"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <PricingContainer
          title="A solução está aqui. Pode escolher."
          plans={newFormatPlans}
          className="bg-transparent"
        />

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Temos soluções corporativas e planos customizados para equipes. 
              Fale conosco para criar o plano perfeito para sua necessidade.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              aria-label="Solicitar proposta personalizada"
            >
              Solicitar Proposta Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = "PricingSection";

export default PricingSection;
