# Zyloform App Design

## Overview
Zyloform is a form builder application that allows users to create, customize, and share forms with a focus on design and user experience. The application provides a variety of form templates and color customization options to create visually appealing forms.

## Features

### Form Templates
- Multiple pre-designed form templates across various categories
- Preview functionality to see how forms will look
- Ability to select and customize templates

### Color Customization
- Comprehensive color settings for all form elements
- Color picker with predefined palettes and custom color options
- Real-time preview of color changes

### Export Options
- Export forms as JSON for saving configurations
- Export forms as HTML for embedding in websites

### Accessibility
- WCAG 2.1 AA compliance
- Screen reader support with proper ARIA attributes
- Keyboard navigation support

## Project Structure

### Core Components
- `App.tsx` - Main application component
- `components/` - UI components
  - `ColorPicker.tsx` - Color selection component
  - `FormRenderer.tsx` - Form display component
  - `FormTemplateSelector.tsx` - Template selection component
  - `Navigation.tsx` - Navigation component
  - `pages/` - Page components
- `data/` - Data models and templates
  - `FormTemplates.ts` - Form template definitions
- `imports/` - Generated components from design tools
- `styles/` - Global styles and theme definitions
- `assets/` - Images and other static assets

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm start` or `yarn start`

## Usage

1. **Home Page**: View available features and get started
2. **Color Settings**: Customize form colors using predefined palettes or custom colors
3. **Form Templates**: Select from various form templates
4. **Preview**: See real-time changes to your form
5. **Export**: Export your form as JSON or HTML

## Accessibility

The application follows WCAG 2.1 AA guidelines with:
- Proper contrast ratios
- Keyboard navigation
- Screen reader support
- Semantic HTML structure

Refer to `accessibility-testing-checklist.md` for detailed accessibility requirements.

## Performance Optimization

The application implements performance best practices as outlined in `performance-optimization-guide.md`.

## Testing

Refer to `testing-strategy.md` and `qa-testing-plan.md` for information on testing approaches and requirements.

## License

This project is proprietary software. All rights reserved.