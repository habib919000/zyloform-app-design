import { render, screen } from '@testing-library/react';
import { FormRenderer } from '../components/FormRenderer';
import { describe, it, expect } from 'vitest';

describe('FormRenderer', () => {
  const mockColors = {
    formBackgroundColor: '#f8fafc',
    formBackgroundBorderColor: '#e2e8f0',
    fieldBorderColor: '#cbd5e1',
    fieldBackgroundColor: '#ffffff',
    fieldLabelTextColor: '#1e293b',
    placeholderTextColor: '#64748b',
    inputTextColor: '#0f172a',
    helpTextColor: '#475569',
    buttonBG: '#3b82f6',
    buttonBorder: '#2563eb',
    buttonTextColor: '#ffffff',
  };

  const mockFormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  it('renders the form with default fields', () => {
    render(
      <FormRenderer 
        colors={mockColors} 
        formData={mockFormData} 
      />
    );
    
    // Check for default field labels
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    
    // Check for submit button
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('applies the correct colors to form elements', () => {
    render(
      <FormRenderer 
        colors={mockColors} 
        formData={mockFormData} 
      />
    );
    
    const form = screen.getByRole('form');
    expect(form).toHaveStyle(`background-color: ${mockColors.formBackgroundColor}`);
    expect(form).toHaveStyle(`border-color: ${mockColors.formBackgroundBorderColor}`);
    
    // Check button styling
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toHaveStyle(`background-color: ${mockColors.buttonBG}`);
    expect(submitButton).toHaveStyle(`color: ${mockColors.buttonTextColor}`);
  });
});