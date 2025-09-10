import { ContactFormData, FormError, FormValidationRules } from "@/types/global";
import { CONTACT_VALIDATION_MESSAGES } from "@/constants/contact";

export const CONTACT_FORM_VALIDATION: FormValidationRules = {
  nome: {
    required: true,
    minLength: 2,
    maxLength: 100
  },
  whatsapp: {
    required: true,
    pattern: /^[\d\s\(\)\-\+]+$/,
    minLength: 10
  },
  servico: {
    required: true
  },
  mensagem: {
    maxLength: 500
  }
};

export class FormValidator {
  static validateField(fieldName: keyof ContactFormData, value: string, rules: FormValidationRules): FormError | null {
    const rule = rules[fieldName];
    if (!rule) return null;

    // Required validation
    if (rule.required && !value.trim()) {
      return {
        field: fieldName,
        message: CONTACT_VALIDATION_MESSAGES.REQUIRED_FIELDS
      };
    }

    // Skip other validations if field is empty and not required
    if (!value.trim() && !rule.required) return null;

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      if (fieldName === 'nome') {
        return {
          field: fieldName,
          message: CONTACT_VALIDATION_MESSAGES.NAME_TOO_SHORT
        };
      }
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      if (fieldName === 'mensagem') {
        return {
          field: fieldName,
          message: CONTACT_VALIDATION_MESSAGES.MESSAGE_TOO_LONG
        };
      }
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      if (fieldName === 'whatsapp') {
        return {
          field: fieldName,
          message: CONTACT_VALIDATION_MESSAGES.INVALID_PHONE
        };
      }
    }

    // Custom validation
    if (rule.custom && !rule.custom(value)) {
      return {
        field: fieldName,
        message: `${fieldName} não é válido.`
      };
    }

    return null;
  }

  static validateForm(formData: ContactFormData, rules: FormValidationRules): FormError[] {
    const errors: FormError[] = [];

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach(fieldName => {
      const error = this.validateField(fieldName, formData[fieldName], rules);
      if (error) {
        errors.push(error);
      }
    });

    return errors;
  }

  static hasErrors(errors: FormError[]): boolean {
    return errors.length > 0;
  }

  static getFieldError(fieldName: string, errors: FormError[]): string | undefined {
    return errors.find(error => error.field === fieldName)?.message;
  }
}