import React from 'react';
import { Palette, Settings, Eye, Download } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      icon: Palette,
      title: 'Choose a Template',
      description: 'Start by selecting one of our pre-designed color templates that matches your style preferences.',
      details: [
        'Browse through 10+ professionally designed color palettes',
        'Each template includes colors for form backgrounds, fields, buttons, and text',
        'Templates are designed with accessibility and usability in mind'
      ]
    },
    {
      icon: Settings,
      title: 'Customize Colors',
      description: 'Fine-tune individual colors for form containers, fields, buttons, and text elements.',
      details: [
        'Adjust form background and border colors',
        'Customize field appearance including borders, backgrounds, and text',
        'Set button colors and text styling',
        'Modify help text and placeholder colors'
      ]
    },
    {
      icon: Eye,
      title: 'Preview Live',
      description: 'See your changes instantly in a real form preview with all your customizations applied.',
      details: [
        'Real-time preview shows exactly how your form will look',
        'Test different form elements including inputs, textareas, and buttons',
        'Preview includes proper labels, help text, and styling'
      ]
    },
    {
      icon: Download,
      title: 'Export & Use',
      description: 'Export your design as JSON or HTML to implement in your projects immediately.',
      details: [
        'JSON export includes all color values for easy integration',
        'HTML export provides ready-to-use CSS with your custom color scheme',
        'Easy integration with any web framework or CMS'
      ]
    }
  ];

  const features = [
    {
      title: 'Professional Templates',
      description: 'Start with carefully crafted color combinations that work well together and follow design best practices.'
    },
    {
      title: 'Real-time Preview',
      description: 'See your changes instantly without any delay. What you see is exactly what you get.'
    },
    {
      title: 'Comprehensive Customization',
      description: 'Control every aspect of your form styling from backgrounds to text colors and everything in between.'
    },
    {
      title: 'Easy Export',
      description: 'Get your customized colors in multiple formats ready for immediate use in your projects.'
    },
    {
      title: 'Accessibility Focused',
      description: 'All templates are designed with accessibility in mind to ensure your forms are usable by everyone.'
    },
    {
      title: 'Framework Agnostic',
      description: 'Use the exported colors with any web framework, CMS, or static site generator.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How Zyloform Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create beautiful, professional form color schemes in minutes with our intuitive design tool.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Simple 4-Step Process</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-200">Step {index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">{step.title}</h3>
                      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-200">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0 group-hover:bg-blue-700 group-hover:scale-125 transition-all duration-200"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Start creating beautiful form color schemes with Zyloform right now. No sign-up required, no downloads needed.
          </p>
          <button 
            onClick={() => window.location.hash = '#color-settings'}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start Designing Now
          </button>
        </div>
      </div>
    </div>
  );
}