import { render, screen, fireEvent } from '@testing-library/react';
import { FormTemplateSelector } from '../components/FormTemplateSelector';
import { describe, it, expect, vi } from 'vitest';

describe('FormTemplateSelector', () => {
  const mockOnFormDataChange = vi.fn();
  
  beforeEach(() => {
    mockOnFormDataChange.mockClear();
  });

  it('renders with default category selected', () => {
    render(<FormTemplateSelector onFormDataChange={mockOnFormDataChange} />);
    
    // Check for category buttons
    expect(screen.getByRole('button', { name: /all/i })).toHaveClass('bg-blue-600');
    
    // Check for template cards
    expect(screen.getAllByRole('button', { name: /select template/i }).length).toBeGreaterThan(0);
  });

  it('changes category when a category button is clicked', () => {
    render(<FormTemplateSelector onFormDataChange={mockOnFormDataChange} />);
    
    // Find and click a category button (not 'All')
    const categoryButtons = screen.getAllByRole('button');
    const contactButton = categoryButtons.find(button => button.textContent?.toLowerCase().includes('contact'));
    
    if (contactButton) {
      fireEvent.click(contactButton);
      expect(contactButton).toHaveClass('bg-blue-600');
      expect(mockOnFormDataChange).toHaveBeenCalled();
    }
  });

  it('selects a template when clicked', () => {
    render(<FormTemplateSelector onFormDataChange={mockOnFormDataChange} />);
    
    // Find and click a template card
    const templateButtons = screen.getAllByRole('button', { name: /select template/i });
    expect(templateButtons.length).toBeGreaterThan(0);
    
    fireEvent.click(templateButtons[1]); // Select the second template
    
    expect(mockOnFormDataChange).toHaveBeenCalled();
  });

  it('displays template details', () => {
    render(<FormTemplateSelector onFormDataChange={mockOnFormDataChange} />);
    
    // Check for template details
    expect(screen.getByText(/basic contact form/i)).toBeInTheDocument();
    expect(screen.getByText(/simple contact form with name, email, and message fields/i)).toBeInTheDocument();
  });
});