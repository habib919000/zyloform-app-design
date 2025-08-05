export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'time' | 'url' | 'password';
  label: string;
  placeholder?: string;
  helpText?: string;
  required: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    patternMessage?: string;
    min?: number;
    max?: number;
  };
  options?: { value: string; label: string }[]; // For select, radio, checkbox
  defaultValue?: string;
  width?: 'full' | 'half' | 'third' | 'quarter'; // Layout width
}

export interface FormTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  fields: FormField[];
  isCustom?: boolean;
  createdAt?: string;
  lastUsed?: string;
  tags?: string[];
  submitButtonText?: string;
  successMessage?: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface FormData {
  [key: string]: string | string[] | boolean;
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormTemplateState {
  selectedTemplate: FormTemplate | null;
  formData: FormData;
  validationErrors: FormValidationError[];
  isSubmitted: boolean;
}