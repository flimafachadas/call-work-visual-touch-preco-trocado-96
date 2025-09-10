
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { handleWhatsAppClick } from "@/utils/socialUtils";
import { memo } from "react";
import type { PricingPlan } from "@/types/business";

interface PricingPlanCardProps {
  plan: PricingPlan;
}

const PricingPlanCard = memo(({ plan }: PricingPlanCardProps) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      green: { text: 'text-green-500', bg: 'bg-green-500', hover: 'hover:bg-green-600' },
      blue: { text: 'text-blue-500', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
      orange: { text: 'text-orange-500', bg: 'bg-orange-500', hover: 'hover:bg-orange-600' },
      red: { text: 'text-red-500', bg: 'bg-red-500', hover: 'hover:bg-red-600' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const colors = getColorClasses(plan.color);

  return (
    <Card 
      className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
        plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-semibold z-10">
          <span className="inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            MAIS POPULAR
          </span>
        </div>
      )}
      
      <CardHeader className={`${colors.bg} text-white p-6 ${plan.popular ? 'pt-12' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
            <p className="text-white/90 text-sm">{plan.subtitle}</p>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white">
            {plan.savings}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-2xl lg:text-3xl font-bold text-white">{plan.price}</span>
          </div>
        </div>
        
        <p className="text-white/90 text-sm leading-relaxed">
          {plan.description}
        </p>
      </CardHeader>

      <CardContent className="p-6 bg-white">
        <ul className="space-y-4 mb-8" role="list">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className={`h-5 w-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} aria-hidden="true" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={handleWhatsAppClick}
          className={`w-full ${colors.bg} ${colors.hover} text-white font-semibold py-3 hover-lift`}
          aria-label={`Escolher ${plan.name}`}
        >
          Solicitar Orçamento
        </Button>
        
        <p className="text-center text-xs text-gray-500 mt-4">
          ✓ Valores promocionais • ✓ Consulte condições
        </p>
      </CardContent>
    </Card>
  );
});

PricingPlanCard.displayName = "PricingPlanCard";

export default PricingPlanCard;
