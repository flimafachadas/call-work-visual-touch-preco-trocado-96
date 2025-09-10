
import { MessageCircle, Instagram, MapPin } from "lucide-react";
import { handleWhatsAppClick, handleInstagramClick, handleMapsClick } from "@/utils/socialUtils";
import type { CTAButton, HeroFloatingElement, HeroBackgroundElement } from "@/types/hero";
import type { TrustIndicator } from "@/types/business";

export const HERO_TRUST_INDICATORS: readonly TrustIndicator[] = [
  {
    color: "brand-green",
    text: "Espaço Moderno"
  },
  {
    color: "brand-orange", 
    text: "Internet Gigabit"
  },
  {
    color: "brand-red",
    text: "Localização Prime"
  }
];

export const HERO_CTA_BUTTONS: CTAButton[] = [
  {
    onClick: handleWhatsAppClick,
    className: "bg-brand-green hover:bg-green-600 text-white font-medium px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover-lift group focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300",
    icon: MessageCircle,
    label: "WhatsApp",
    ariaLabel: "Entrar em contato via WhatsApp",
    hasArrow: true
  },
  {
    onClick: handleInstagramClick,
    className: "border-orange-600 text-white hover:text-white font-medium px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover-lift group bg-orange-600 hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300",
    icon: Instagram,
    label: "Instagram",
    ariaLabel: "Seguir no Instagram",
    variant: "outline" as const
  },
  {
    onClick: handleMapsClick,
    className: "border-red-600 text-white hover:text-white font-medium px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover-lift group bg-red-600 hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300",
    icon: MapPin,
    label: "Localização",
    ariaLabel: "Ver localização no mapa",
    variant: "outline" as const
  }
];

export const HERO_FLOATING_ELEMENTS: HeroFloatingElement[] = [
  {
    position: "-top-3 lg:-top-6 -right-3 lg:-right-6",
    content: {
      value: "98%",
      label: "Satisfação"
    }
  },
  {
    position: "-bottom-3 lg:-bottom-6 -left-3 lg:-left-6",
    content: {
      value: "Ambiente Colaborativo",
      label: ""
    },
    delay: "2s",
    maxWidth: "max-w-xs"
  }
];

export const HERO_BACKGROUND_ELEMENTS: HeroBackgroundElement[] = [
  {
    position: "top-20 right-20",
    size: "w-20 lg:w-40 xl:w-48 h-20 lg:h-40 xl:h-48",
    opacity: "bg-white/10",
    blur: "blur-2xl"
  },
  {
    position: "bottom-20 right-1/4",
    size: "w-16 lg:w-32 xl:w-40 h-16 lg:h-32 xl:h-40",
    opacity: "bg-white/5",
    blur: "blur-xl",
    delay: "3s"
  },
  {
    position: "top-1/3 left-1/3",
    size: "w-12 lg:w-24 xl:w-32 h-12 lg:h-24 xl:h-32",
    opacity: "bg-white/5",
    blur: "blur-lg",
    delay: "1s"
  }
];
