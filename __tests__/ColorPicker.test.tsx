import { render, screen, fireEvent } from '@testing-library/react';
import { ColorPicker } from '../components/ColorPicker';
import { describe, it, expect, vi } from 'vitest';

describe('ColorPicker', () => {
  const mockOnColorChange = vi.fn();
  const mockOnClose = vi.fn();
  const initialColor = '#3B82F6';
  
  beforeEach(() => {
    mockOnColorChange.mockClear();
    mockOnClose.mockClear();
  });

  it('renders correctly when open', () => {
    render(
      <ColorPicker 
        currentColor={initialColor}
        onColorChange={mockOnColorChange}
        onClose={mockOnClose}
        isOpen={true}
        fieldKey="testField"
      />
    );
    
    // Check for color picker elements
    expect(screen.getByText('Color Picker')).toBeInTheDocument();
    expect(screen.getByText('Created in this file')).toBeInTheDocument();
    expect(screen.getByText('Hex')).toBeInTheDocument();
    
    // Check for close button
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <ColorPicker 
        currentColor={initialColor}
        onColorChange={mockOnColorChange}
        onClose={mockOnClose}
        isOpen={false}
        fieldKey="testField"
      />
    );
    
    // Should not find color picker elements
    expect(screen.queryByText('Color Picker')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <ColorPicker 
        currentColor={initialColor}
        onColorChange={mockOnColorChange}
        onClose={mockOnClose}
        isOpen={true}
        fieldKey="testField"
      />
    );
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onColorChange when a color swatch is clicked', () => {
    render(
      <ColorPicker 
        currentColor={initialColor}
        onColorChange={mockOnColorChange}
        onClose={mockOnClose}
        isOpen={true}
        fieldKey="testField"
      />
    );
    
    // Find and click a color swatch
    const colorSwatches = screen.getAllByRole('button', { name: /color swatch/i });
    expect(colorSwatches.length).toBeGreaterThan(0);
    
    fireEvent.click(colorSwatches[0]);
    
    expect(mockOnColorChange).toHaveBeenCalledTimes(1);
  });
});