# Zyloform Development Guide

This guide provides information for developers working on the Zyloform project.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Run the setup script: `./scripts/setup.sh`
   - This will install dependencies, create necessary directories, build the application, and run tests
3. Start the development server: `npm run dev`

## Project Structure

- `components/` - React components
  - `ui/` - Reusable UI components
  - `pages/` - Page components
- `data/` - Data models and templates
- `imports/` - Generated components from design tools
- `styles/` - Global styles and theme definitions
- `assets/` - Images and other static assets
- `__tests__/` - Test files

## Development Workflow

1. Create a new branch for your feature or bug fix
2. Make your changes
3. Run tests: `npm test`
4. Build the application: `npm run build`
5. Submit a pull request

## Key Components

### App.tsx

The main application component that handles routing between pages and manages global state.

### ColorPicker.tsx

A component for selecting colors with a color wheel, color swatches, and hex input.

### FormRenderer.tsx

Renders forms based on templates and applies color settings.

### FormTemplateSelector.tsx

Allows users to select from available form templates.

## State Management

The application uses React's useState hook for state management. Key state includes:

- `currentPage` - The current page being displayed
- `colors` - The color settings for the form
- `formData` - The data entered in the form

## Styling

The application uses Tailwind CSS for styling. Global styles are defined in `styles/globals.css`.

## Testing

Tests are written using Vitest and React Testing Library. Run tests with:

```
npm test
```

For test coverage:

```
npm test -- --coverage
```

## Building for Production

Build the application for production with:

```
npm run build
```

The build output will be in the `dist` directory.

## Accessibility

The application follows WCAG 2.1 AA guidelines. Key accessibility features include:

- Proper ARIA attributes for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Screen reader support

Refer to `accessibility-testing-checklist.md` for detailed requirements.

## Performance

Refer to `performance-optimization-guide.md` for performance best practices.

## Troubleshooting

### Common Issues

- **Build fails**: Ensure all dependencies are installed with `npm install`
- **Tests fail**: Check for recent changes that might have broken existing functionality
- **Development server crashes**: Check console for error messages

### Getting Help

If you encounter issues not covered in this guide, please create an issue in the repository.