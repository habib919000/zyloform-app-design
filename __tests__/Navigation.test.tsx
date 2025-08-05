import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../components/Navigation';
import { describe, it, expect, vi } from 'vitest';

type Page = 'home' | 'color-settings' | 'feedback-updates' | 'share';

describe('Navigation', () => {
  const mockOnPageChange = vi.fn();
  const currentPage: Page = 'home';
  
  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders navigation links correctly', () => {
    render(
      <Navigation 
        currentPage={currentPage} 
        onPageChange={mockOnPageChange} 
      />
    );
    
    // Check for navigation links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/color settings/i)).toBeInTheDocument();
    expect(screen.getByText(/feedback & updates/i)).toBeInTheDocument();
    expect(screen.getByText(/share/i)).toBeInTheDocument();
  });

  it('highlights the current page', () => {
    render(
      <Navigation 
        currentPage={currentPage} 
        onPageChange={mockOnPageChange} 
      />
    );
    
    // The home link should be highlighted
    const homeLink = screen.getByText(/home/i).closest('button');
    expect(homeLink).toHaveClass('bg-blue-100');
    
    // Other links should not be highlighted
    const colorSettingsLink = screen.getByText(/generate form/i).closest('button');
    expect(colorSettingsLink).not.toHaveClass('bg-blue-100');
  });

  it('calls setCurrentPage when a link is clicked', () => {
    render(
      <Navigation 
        currentPage={currentPage} 
        onPageChange={mockOnPageChange} 
      />
    );
    
    // Click on the generate form link
    const colorSettingsLink = screen.getByText(/generate form/i).closest('button');
    if (colorSettingsLink) {
      fireEvent.click(colorSettingsLink);
    }
    
    // Check if the mock function was called with the correct page
    expect(mockOnPageChange).toHaveBeenCalled();
    expect(mockOnPageChange.mock.calls[0][0]).toBe('color-settings');
  });

  it('renders the logo', () => {
    render(
      <Navigation 
        currentPage={currentPage} 
        onPageChange={mockOnPageChange} 
      />
    );
    
    // Check for the logo
    expect(screen.getByText(/zyloform/i)).toBeInTheDocument();
  });
});