import { ServiceOption } from "@/types/global";

export const CONTACT_SERVICES: ServiceOption[] = [
  { value: "Endereço Fiscal", label: "Endereço Fiscal" },
  { value: "Salas Privativas", label: "Salas Privativas" },
  { value: "Estações de Trabalho Compartilhadas", label: "Estações de Trabalho Compartilhadas" },
  { value: "Sala de Reuniões", label: "Sala de Reuniões" },
  { value: "Outro", label: "Outro" }
] as const;

export const CONTACT_VALIDATION_MESSAGES = {
  REQUIRED_FIELDS: 'Por favor, preencha todos os campos obrigatórios.',
  INVALID_PHONE: 'Por favor, insira um número de WhatsApp válido.',
  MESSAGE_TOO_LONG: 'A mensagem deve ter no máximo 500 caracteres.',
  NAME_TOO_SHORT: 'O nome deve ter pelo menos 2 caracteres.',
} as const;

export const WHATSAPP_CONFIG = {
  PHONE_NUMBER: '5585988338969',
  MESSAGE_TEMPLATE: (data: { nome: string; servico: string; mensagem?: string; whatsapp: string }) => 
    `Olá! Meu nome é ${data.nome}. Tenho interesse no serviço: ${data.servico}.${data.mensagem ? ` Mensagem: ${data.mensagem}` : ''} Meu WhatsApp: ${data.whatsapp}`,
  URL_TEMPLATE: (message: string) => `https://wa.me/5585988338969?text=${encodeURIComponent(message)}`
} as const;