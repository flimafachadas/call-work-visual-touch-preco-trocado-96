import { memo, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface InputFieldProps extends FormFieldProps {
  type?: 'text' | 'email' | 'tel';
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextareaFieldProps extends FormFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

interface SelectFieldProps extends FormFieldProps {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

const FormField = memo(({ label, error, required, className, children }: FormFieldProps) => (
  <div className={cn("space-y-2", className)}>
    {label && (
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )}
    {children}
    {error && (
      <div className="flex items-center space-x-2 text-red-600 text-sm">
        <AlertCircle className="h-4 w-4" />
        <span>{error}</span>
      </div>
    )}
  </div>
));

FormField.displayName = "FormField";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, required, className, type = 'text', name, placeholder, value, onChange, ...props }, ref) => (
    <FormField label={label} error={error} required={required} className={className}>
      <Input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "border-brand-blue/20 focus:border-brand-blue bg-white/90",
          error && "border-red-500 focus:border-red-500"
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
    </FormField>
  )
);

InputField.displayName = "InputField";

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, required, className, name, placeholder, value, onChange, rows = 4, ...props }, ref) => (
    <FormField label={label} error={error} required={required} className={className}>
      <Textarea
        ref={ref}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={cn(
          "border-brand-blue/20 focus:border-brand-blue bg-white/90",
          error && "border-red-500 focus:border-red-500"
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
    </FormField>
  )
);

TextareaField.displayName = "TextareaField";

const SelectField = memo(({ 
  label, 
  error, 
  required, 
  className, 
  placeholder, 
  value, 
  onValueChange, 
  options 
}: SelectFieldProps) => (
  <FormField label={label} error={error} required={required} className={className}>
    <Select value={value} onValueChange={onValueChange} required={required}>
      <SelectTrigger 
        className={cn(
          "border-brand-blue/20 focus:border-brand-blue bg-white/90",
          error && "border-red-500 focus:border-red-500"
        )}
        aria-invalid={!!error}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </FormField>
));

SelectField.displayName = "SelectField";

export { FormField, InputField, TextareaField, SelectField };