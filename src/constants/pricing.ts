import type { PricingPlan } from "@/types/business";

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    name: "Endereço Fiscal",
    subtitle: "Legalização de CNPJ",
    price: "A partir de R$ 68,99",
    originalPrice: "",
    period: "",
    description: "Solução rápida e sem burocracia para legalização do seu negócio.",
    features: [
      "Rápido e sem burocracia",
      "Maior credibilidade para seu negócio",
      "Recebimento de correspondência e encomendas",
      "Protege seu endereço residencial",
      "Obrigatório para abrir CNPJ",
      "Pode ser diferente do local de funcionamento da empresa",
      "Permite emitir notas fiscais legalmente",
      "Custo-benefício em comparação ao aluguel de uma sala física"
    ],
    color: "green",
    bgColor: "bg-green-500",
    hoverBgColor: "hover:bg-green-600",
    popular: false,
    savings: "FISCAL"
  },
  {
    name: "Endereço Comercial",
    subtitle: "Presença profissional",
    price: "A partir de R$ 88,98",
    originalPrice: "",
    period: "",
    description: "Tenha um endereço estratégico para fortalecer sua presença comercial.",
    features: [
      "Recebimento de correspondência com segurança",
      "Tenha um endereço estratégico",
      "Utilize o endereço do coworking na divulgação de seu negócio",
      "Separe vida pessoal e profissional",
      "Protege seu endereço residencial",
      "Melhore sua presença on-line"
    ],
    color: "blue",
    bgColor: "bg-blue-500",
    hoverBgColor: "hover:bg-blue-600",
    popular: false,
    savings: "COMERCIAL"
  },
  {
    name: "Banco de horas",
    subtitle: "Pacote flexível",
    price: "A partir de R$ 220,00",
    originalPrice: "",
    period: "",
    description: "Solução flexível para quem precisa usar o espaço em determinados períodos com total liberdade.",
    features: [
      "Ambiente privativo ou coletivo",
      "Wi-Fi de alta velocidade",
      "Networking",
      "Cadeiras/Mobília confortável",
      "Ambiente climatizado",
      "Recepção",
      "Pacotes para sala privativa ou estações de trabalho",
      "Horários flexíveis"
    ],
    color: "orange",
    bgColor: "bg-orange-500",
    hoverBgColor: "hover:bg-orange-600",
    popular: false,
    savings: "FLEXÍVEL"
  },
  {
    name: "Estação de Trabalho",
    subtitle: "1 pessoa",
    price: "A partir de R$ 12,33",
    originalPrice: "",
    period: "",
    description: "Perfeito para profissionais independentes que buscam um ambiente produtivo e colaborativo.",
    features: [
      "Ambiente coletivo e criativo",
      "Wi-Fi de alta velocidade",
      "Networking natural",
      "Cadeiras ergonômicas",
      "Flexibilidade de horários"
    ],
    color: "green",
    bgColor: "bg-green-500",
    hoverBgColor: "hover:bg-green-600",
    popular: true,
    savings: "POPULAR"
  },
  {
    name: "Sala Privativa",
    subtitle: "Privacidade total",
    price: "A partir de R$ 20,00",
    originalPrice: "",
    period: "",
    description: "Estrutura completa com ar-condicionado e internet de alta velocidade para máximo conforto.",
    features: [
      "Ambiente privativo",
      "Ar-condicionado",
      "Internet de alta velocidade",
      "Cadeiras ergonômicas",
      "Controle total do ambiente"
    ],
    color: "blue",
    bgColor: "bg-blue-500",
    hoverBgColor: "hover:bg-blue-600",
    popular: false,
    savings: "PREMIUM"
  },
  {
    name: "Sala de Reunião Flip",
    subtitle: "até 4 pessoas",
    price: "A partir de R$ 55,00",
    originalPrice: "",
    period: "",
    description: "Ideal para reuniões pequenas, apresentações e atendimento a clientes.",
    features: [
      "Capacidade para 4 pessoas",
      "Equipamentos audiovisuais",
      "Mesa de reunião",
      "Ar-condicionado",
      "Ambiente profissional"
    ],
    color: "orange",
    bgColor: "bg-orange-500",
    hoverBgColor: "hover:bg-orange-600",
    popular: false,
    savings: "REUNIÕES"
  },
  {
    name: "Sala de Reunião Master",
    subtitle: "até 8 pessoas",
    price: "A partir de R$ 75,00",
    originalPrice: "",
    period: "",
    description: "Perfeita para grandes reuniões, treinamentos e apresentações corporativas.",
    features: [
      "Capacidade para 8 pessoas",
      "Equipamentos audiovisuais completos",
      "Mesa de reunião executiva",
      "Ar-condicionado",
      "Ambiente corporativo premium"
    ],
    color: "blue",
    bgColor: "bg-blue-600",
    hoverBgColor: "hover:bg-blue-700",
    popular: false,
    savings: "CORPORATIVO"
  }
] as const;