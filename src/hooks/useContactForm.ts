import { useState, useCallback, useMemo } from 'react';
import { ContactFormData, FormError } from '@/types/global';
import { FormValidator, CONTACT_FORM_VALIDATION } from '@/utils/formValidation';
import { WHATSAPP_CONFIG } from '@/constants/contact';
import { useToast } from '@/hooks/use-toast';

const INITIAL_FORM_DATA: ContactFormData = {
  nome: '',
  whatsapp: '',
  servico: '',
  mensagem: ''
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field error on change
    if (errors.length > 0) {
      setErrors(prev => prev.filter(error => error.field !== name));
    }
  }, [errors.length]);

  const handleServiceChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      servico: value
    }));

    // Clear service error on change
    if (errors.length > 0) {
      setErrors(prev => prev.filter(error => error.field !== 'servico'));
    }
  }, [errors.length]);

  const validateAndSubmit = useCallback(async () => {
    setIsSubmitting(true);
    
    try {
      // Validate form
      const validationErrors = FormValidator.validateForm(formData, CONTACT_FORM_VALIDATION);
      
      if (FormValidator.hasErrors(validationErrors)) {
        setErrors(validationErrors);
        toast({
          variant: "destructive",
          title: "Erro no formulário",
          description: validationErrors[0].message,
        });
        return false;
      }

      // Clear any existing errors
      setErrors([]);
      
      // Generate WhatsApp message and URL
      const message = WHATSAPP_CONFIG.MESSAGE_TEMPLATE(formData);
      const whatsappUrl = WHATSAPP_CONFIG.URL_TEMPLATE(message);
      
      // Open WhatsApp in new tab
      const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      if (!opened) {
        // Fallback: try to open in same window
        window.location.href = whatsappUrl;
      }

      // Reset form on successful submission
      setFormData(INITIAL_FORM_DATA);
      
      toast({
        title: "Redirecionamento para WhatsApp",
        description: "Você será redirecionado para o WhatsApp para continuar o contato.",
      });

      return true;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
      });
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);

  const getFieldError = useCallback((fieldName: keyof ContactFormData) => {
    return FormValidator.getFieldError(fieldName, errors);
  }, [errors]);

  const isFormValid = useMemo(() => {
    return FormValidator.validateForm(formData, CONTACT_FORM_VALIDATION).length === 0;
  }, [formData]);

  const hasRequiredFields = useMemo(() => {
    return !!(formData.nome.trim() && formData.whatsapp.trim() && formData.servico);
  }, [formData.nome, formData.whatsapp, formData.servico]);

  return {
    formData,
    errors,
    isSubmitting,
    isFormValid,
    hasRequiredFields,
    handleInputChange,
    handleServiceChange,
    validateAndSubmit,
    getFieldError,
    clearForm: () => setFormData(INITIAL_FORM_DATA),
    setFormData
  };
}