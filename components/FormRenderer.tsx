import React, { useState } from 'react';
import { FormTemplate, FormField } from '../data/FormTemplates';

interface ColorSettings {
  formBackgroundColor: string;
  formBackgroundBorderColor: string;
  fieldBorderColor: string;
  fieldBackgroundColor: string;
  fieldLabelTextColor: string;
  placeholderTextColor: string;
  inputTextColor: string;
  helpTextColor: string;
  buttonBG: string;
  buttonBorder: string;
  buttonTextColor: string;
}

interface FormData {
  [key: string]: any;
}

interface FormRendererProps {
  colors: ColorSettings;
  formData: FormData;
  className?: string;
  template?: FormTemplate;
}

export function FormRenderer({ colors, formData, className = '', template }: FormRendererProps) {
  const [internalFormData, setInternalFormData] = useState<FormData>(formData || {});
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Default fields if no template is provided (legacy support)
  const defaultFields: FormField[] = [
    {
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your first name...',
      helpText: 'Please enter your first name',
      required: true
    },
    {
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter your last name...',
      helpText: 'Please enter your last name',
      required: true
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'user@example.com',
      helpText: 'We\'ll use this to send you updates',
      required: true
    },
    {
      id: 'message',
      name: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Type your message here...',
      helpText: 'Optional additional information',
      required: false
    }
  ];

  const fields = template?.fields || defaultFields;

  const handleInputChange = (fieldName: string, value: any) => {
    setInternalFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', internalFormData);
      setSubmissionStatus('success');
      
      // Reset to idle after showing success
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleReset = () => {
    setInternalFormData({});
    setSubmissionStatus('idle');
  };

  const renderField = (field: FormField) => {
    const value = internalFormData[field.name] || '';
    const hasValue = value && value.toString().trim() !== '';

    const baseFieldStyle = {
      backgroundColor: colors.fieldBackgroundColor,
      color: colors.inputTextColor
    };

    const labelStyle = {
      color: colors.fieldLabelTextColor
    };

    const helpStyle = {
      color: colors.helpTextColor
    };

    switch (field.type) {
      case 'textarea':
        return (
          <div key={field.id} className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <label 
                htmlFor={field.id}
                className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.5577px] text-left w-full cursor-pointer"
                style={labelStyle}
              >
                <span className="block leading-[25.1282px]">
                  {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
              </label>
            </div>
            <div 
              className="relative rounded-[12px] shrink-0 w-full overflow-hidden transition-all duration-200 ease-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20"
              style={{ backgroundColor: colors.fieldBackgroundColor }}
            >
              <textarea
                id={field.id}
                name={field.name}
                value={value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder || ''}
                required={field.required}
                rows={4}
                className="w-full h-full resize-none outline-none bg-transparent px-[20px] py-[16px] text-[16.5577px] leading-[25.1282px]"
                style={{
                  ...baseFieldStyle,
                  backgroundColor: 'transparent',
                  borderWidth: 0
                }}
              />
              <div 
                className="absolute border-[2px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all duration-200 ease-out"
                style={{ borderColor: colors.fieldBorderColor }}
              />
            </div>
            {field.helpText && (
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.899px] text-left w-full"
                  style={helpStyle}
                >
                  <p className="block leading-[20.1026px]">{field.helpText}</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'select':
        return (
          <div key={field.id} className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <label 
                htmlFor={field.id}
                className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-left w-full cursor-pointer"
                style={labelStyle}
              >
                <span className="block leading-[25.1282px]">
                  {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
              </label>
            </div>
            <div 
              className="relative rounded-[12px] shrink-0 w-full overflow-hidden transition-all duration-200 ease-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20"
              style={{ backgroundColor: colors.fieldBackgroundColor }}
            >
              <select
                id={field.id}
                name={field.name}
                value={value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required={field.required}
                className="w-full outline-none bg-transparent px-[20px] py-[16px] text-[16.2817px] appearance-none cursor-pointer"
                style={{
                  ...baseFieldStyle,
                  backgroundColor: 'transparent',
                  borderWidth: 0
                }}
              >
                <option value="">{field.placeholder || 'Select an option...'}</option>
                {field.options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: colors.placeholderTextColor }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div 
                className="absolute border-[2px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all duration-200 ease-out"
                style={{ borderColor: colors.fieldBorderColor }}
              />
            </div>
            {field.helpText && (
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left w-full"
                  style={helpStyle}
                >
                  <p className="block leading-[20.1026px]">{field.helpText}</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'radio':
        return (
          <div key={field.id} className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div 
                className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-left w-full"
                style={labelStyle}
              >
                <span className="block leading-[25.1282px]">
                  {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {field.options?.map((option, index) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    className="sr-only"
                  />
                  <div 
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ease-out"
                    style={{ 
                      borderColor: value === option.value ? colors.buttonBG : colors.fieldBorderColor,
                      backgroundColor: value === option.value ? colors.buttonBG : 'transparent'
                    }}
                  >
                    {value === option.value && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span 
                    className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left"
                    style={{ color: colors.inputTextColor }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {field.helpText && (
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left w-full"
                  style={helpStyle}
                >
                  <p className="block leading-[20.1026px]">{field.helpText}</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.id} className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div 
                className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-left w-full"
                style={labelStyle}
              >
                <span className="block leading-[25.1282px]">
                  {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {field.options?.map((option, index) => {
                const isChecked = Array.isArray(value) ? value.includes(option.value) : value === option.value;
                return (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option.value}
                      checked={isChecked}
                      onChange={(e) => {
                        if (Array.isArray(value)) {
                          const newValue = e.target.checked 
                            ? [...value, option.value]
                            : value.filter(v => v !== option.value);
                          handleInputChange(field.name, newValue);
                        } else {
                          handleInputChange(field.name, e.target.checked ? option.value : '');
                        }
                      }}
                      required={field.required}
                      className="sr-only"
                    />
                    <div 
                      className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ease-out"
                      style={{ 
                        borderColor: isChecked ? colors.buttonBG : colors.fieldBorderColor,
                        backgroundColor: isChecked ? colors.buttonBG : 'transparent'
                      }}
                    >
                      {isChecked && (
                        <svg className="w-3 h-3" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span 
                      className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left"
                      style={{ color: colors.inputTextColor }}
                    >
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
            {field.helpText && (
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left w-full"
                  style={helpStyle}
                >
                  <p className="block leading-[20.1026px]">{field.helpText}</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'file':
        return (
          <div key={field.id} className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <label 
                htmlFor={field.id}
                className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-left w-full cursor-pointer"
                style={labelStyle}
              >
                <span className="block leading-[25.1282px]">
                  {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
              </label>
            </div>
            <div 
              className="relative rounded-[12px] shrink-0 w-full border-2 border-dashed p-8 text-center overflow-hidden cursor-pointer transition-all duration-200 ease-out hover:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20"
              style={{ 
                borderColor: colors.fieldBorderColor,
                backgroundColor: colors.fieldBackgroundColor 
              }}
            >
              <input
                type="file"
                id={field.id}
                name={field.name}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  handleInputChange(field.name, file ? file.name : '');
                }}
                required={field.required}
                accept={field.accept}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-3 relative pointer-events-none">
                <svg 
                  className="w-10 h-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: colors.placeholderTextColor }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center"
                  style={{ color: hasValue ? colors.inputTextColor : colors.placeholderTextColor }}
                >
                  <p className="block leading-[20px]">
                    {hasValue ? value : (field.placeholder || 'Click to upload file')}
                  </p>
                </div>
              </div>
            </div>
            {field.helpText && (
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left w-full"
                  style={helpStyle}
                >
                  <p className="block leading-[20.1026px]">{field.helpText}</p>
                </div>
              </div>
            )}
          </div>
        );

      default: // text, email, tel, url, password, number, date, time, datetime-local
        return (
          <div key={field.id} className="box-border content-stretch flex flex-col gap-[5.026px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <label 
                htmlFor={field.id}
                className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.2817px] text-left w-full cursor-pointer"
                style={labelStyle}
              >
                <span className="block leading-[25.1282px]">
                  {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                </span>
              </label>
            </div>
            <div 
              className="relative rounded-[12px] shrink-0 w-full overflow-hidden transition-all duration-200 ease-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20"
              style={{ backgroundColor: colors.fieldBackgroundColor }}
            >
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                value={value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder || ''}
                required={field.required}
                autoComplete={field.type === 'email' ? 'email' : field.name.includes('first') ? 'given-name' : field.name.includes('last') ? 'family-name' : undefined}
                className="w-full outline-none bg-transparent px-[20px] py-[16px] text-[16.2817px]"
                style={{
                  ...baseFieldStyle,
                  backgroundColor: 'transparent',
                  borderWidth: 0
                }}
              />
              <div 
                className="absolute border-[2px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all duration-200 ease-out"
                style={{ borderColor: colors.fieldBorderColor }}
              />
            </div>
            {field.helpText && (
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div 
                  className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.1346px] text-left w-full"
                  style={helpStyle}
                >
                  <p className="block leading-[20.1026px]">{field.helpText}</p>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div 
      className={`
        bg-slate-50 relative rounded-[16px] w-[560px] overflow-hidden shadow-lg 
        ${className}
      `}
      style={{
        backgroundColor: colors.formBackgroundColor,
        borderColor: colors.formBackgroundBorderColor
      }}
    >
      <div 
        className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[16px]"
        style={{ borderColor: colors.formBackgroundBorderColor }}
      />
      
      {/* Form Header Accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ 
          background: `linear-gradient(90deg, ${colors.buttonBG}, ${colors.buttonBorder})` 
        }}
      />
      
      {/* Success Message */}
      {submissionStatus === 'success' && (
        <div className="absolute top-4 left-4 right-4 bg-green-50 border-2 border-green-200 rounded-lg p-4 z-10 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-green-800 font-medium">Form submitted successfully!</span>
          </div>
        </div>
      )}
      
      <div className="relative size-full">
        <form onSubmit={handleSubmit} className="box-border content-stretch flex flex-col items-start justify-start pb-[30.154px] pt-[28.718px] px-[30.154px] relative w-[560px]">
          <div className="box-border content-stretch flex flex-col gap-[18.667px] items-start justify-start p-0 relative shrink-0 w-[499.692px]">
            
            {/* Render Dynamic Fields */}
            {fields.map(field => renderField(field))}

            {/* Submit Buttons */}
            <div className="relative shrink-0 w-full">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row gap-[15.077px] items-start justify-start pb-0 pt-[20px] px-0 relative w-full">
                  <button 
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className="relative rounded-[12px] shrink-0 transition-all duration-200 ease-out hover:opacity-90 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: colors.buttonBG }}
                  >
                    <div className="flex flex-col items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-center gap-2 pb-[15px] pl-[25px] pr-[25px] pt-[15px] relative">
                        {submissionStatus === 'submitting' && (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        )}
                        <div 
                          className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.8337px] text-center text-nowrap"
                          style={{ color: colors.buttonTextColor }}
                        >
                          <span className="block leading-[25.1282px] whitespace-pre">
                            {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Form'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleReset}
                    className="relative rounded-[12px] shrink-0 transition-all duration-200 ease-out hover:bg-gray-50 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: colors.fieldBackgroundColor }}
                  >
                    <div 
                      className="absolute border-[2px] border-solid inset-0 pointer-events-none rounded-[12px]"
                      style={{ borderColor: '#d1d5dc' }}
                    />
                    <div className="flex flex-col items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-col items-center justify-center px-[25px] py-[15px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16.8337px] text-center text-nowrap">
                          <span className="block leading-[25.1282px] whitespace-pre">Clear Form</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}