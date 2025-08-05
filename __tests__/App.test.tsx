import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the home page by default', () => {
    render(<App />);
    
    // Check for home page content
    expect(screen.getByText(/create beautiful forms/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('navigates to color settings page when Get Started is clicked', () => {
    render(<App />);
    
    // Click the Get Started button
    const getStartedButton = screen.getByRole('button', { name: /get started/i });
    fireEvent.click(getStartedButton);
    
    // Check for color settings page content
    expect(screen.getByText(/customize your form colors/i)).toBeInTheDocument();
  });

  it('navigates between pages using navigation links', () => {
    render(<App />);
    
    // Click on the Feedback & Updates link
    const feedbackLink = screen.getByText(/feedback & updates/i).closest('button');
    if (feedbackLink) {
      fireEvent.click(feedbackLink);
    }
    
    // Check for feedback page content
    expect(screen.getByText(/feedback and updates/i)).toBeInTheDocument();
    
    // Click on the Share link
    const shareLink = screen.getByText(/share/i).closest('button');
    if (shareLink) {
      fireEvent.click(shareLink);
    }
    
    // Check for share page content
    expect(screen.getByText(/export your form/i)).toBeInTheDocument();
  });

  it('maintains color settings state across page navigation', () => {
    render(<App />);
    
    // Navigate to color settings
    const colorSettingsLink = screen.getByText(/color settings/i).closest('a');
    if (colorSettingsLink) {
      fireEvent.click(colorSettingsLink);
    }
    
    // Change a color setting
    const colorPickers = screen.getAllByRole('button', { name: /color picker/i });
    fireEvent.click(colorPickers[0]);
    
    // Select a color from the picker
    const colorSwatches = screen.getAllByRole('button', { name: /color swatch/i });
    fireEvent.click(colorSwatches[0]);
    
    // Navigate to another page and back
    const homeLink = screen.getByText(/home/i).closest('a');
    if (homeLink) {
      fireEvent.click(homeLink);
    }
    
    if (colorSettingsLink) {
      fireEvent.click(colorSettingsLink);
    }
    
    // The color setting should be maintained
    expect(colorPickers[0]).toHaveStyle('background-color: #3B82F6');
  });
});