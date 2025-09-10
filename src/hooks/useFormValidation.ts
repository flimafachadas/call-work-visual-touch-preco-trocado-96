import { useState, useCallback, useMemo } from 'react';
import { FormError, FormValidationRules } from '@/types/global';

interface UseFormValidationOptions<T> {
  validationRules: FormValidationRules;
  validateOnChange?: boolean;
  debounceMs?: number;
}

export function useFormValidation<T extends Record<string, string>>(
  initialData: T,
  options: UseFormValidationOptions<T>
) {
  const [data, setData] = useState<T>(initialData);
  const [errors, setErrors] = useState<FormError[]>([]);
  const [touched, setTouched] = useState<Set<keyof T>>(new Set());

  const { validationRules, validateOnChange = true } = options;

  const validateField = useCallback((fieldName: keyof T, value: string): FormError | null => {
    const rule = validationRules[fieldName as string];
    if (!rule) return null;

    // Required validation
    if (rule.required && !value.trim()) {
      return {
        field: fieldName as string,
        message: `${String(fieldName)} é obrigatório.`
      };
    }

    // Skip other validations if field is empty and not required
    if (!value.trim() && !rule.required) return null;

    // Min length validation  
    if (rule.minLength && value.length < rule.minLength) {
      return {
        field: fieldName as string,
        message: `${String(fieldName)} deve ter pelo menos ${rule.minLength} caracteres.`
      };
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      return {
        field: fieldName as string,
        message: `${String(fieldName)} deve ter no máximo ${rule.maxLength} caracteres.`
      };
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return {
        field: fieldName as string,
        message: `${String(fieldName)} tem formato inválido.`
      };
    }

    // Custom validation
    if (rule.custom && !rule.custom(value)) {
      return {
        field: fieldName as string,
        message: `${String(fieldName)} não é válido.`
      };
    }

    return null;
  }, [validationRules]);

  const validateAll = useCallback((): FormError[] => {
    const allErrors: FormError[] = [];

    (Object.keys(data) as Array<keyof T>).forEach(fieldName => {
      const error = validateField(fieldName, data[fieldName]);
      if (error) {
        allErrors.push(error);
      }
    });

    return allErrors;
  }, [data, validateField]);

  const updateField = useCallback((fieldName: keyof T, value: string) => {
    setData(prev => ({ ...prev, [fieldName]: value }));
    setTouched(prev => new Set(prev).add(fieldName));

    if (validateOnChange) {
      const fieldError = validateField(fieldName, value);
      setErrors(prev => {
        const filtered = prev.filter(error => error.field !== fieldName);
        return fieldError ? [...filtered, fieldError] : filtered;
      });
    }
  }, [validateField, validateOnChange]);

  const validate = useCallback((): boolean => {
    const allErrors = validateAll();
    setErrors(allErrors);
    return allErrors.length === 0;
  }, [validateAll]);

  const reset = useCallback(() => {
    setData(initialData);
    setErrors([]);
    setTouched(new Set());
  }, [initialData]);

  const getFieldError = useCallback((fieldName: keyof T) => {
    return errors.find(error => error.field === fieldName)?.message;
  }, [errors]);

  const isFieldTouched = useCallback((fieldName: keyof T) => {
    return touched.has(fieldName);
  }, [touched]);

  const isValid = useMemo(() => errors.length === 0, [errors]);
  
  const hasErrors = useMemo(() => errors.length > 0, [errors]);

  return {
    data,
    errors,
    isValid,
    hasErrors,
    updateField,
    validate,
    reset,
    getFieldError,
    isFieldTouched,
    setData,
    setErrors
  };
}