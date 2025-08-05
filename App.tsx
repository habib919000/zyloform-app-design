import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { ColorSettingsPage } from './components/pages/ColorSettingsPage';
import { FeedbackAndUpdatesPage } from './components/pages/FeedbackAndUpdatesPage';
import { SharePage } from './components/pages/SharePage';

type Page = 'home' | 'color-settings' | 'feedback-updates' | 'share';

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

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [colors, setColors] = useState<ColorSettings>({
    formBackgroundColor: "#f8fafc",
    formBackgroundBorderColor: "#e2e8f0",
    fieldBorderColor: "#cbd5e1",
    fieldBackgroundColor: "#ffffff",
    fieldLabelTextColor: "#1e293b",
    placeholderTextColor: "#64748b",
    inputTextColor: "#0f172a",
    helpTextColor: "#475569",
    buttonBG: "#3b82f6",
    buttonBorder: "#2563eb",
    buttonTextColor: "#ffffff",
  });
  const [formData, setFormData] = useState<any>({});

  const handleGetStarted = () => {
    setCurrentPage('color-settings');
  };

  const handleColorsChange = (newColors: ColorSettings) => {
    setColors(newColors);
  };

  const handleFormDataChange = (newFormData: any) => {
    setFormData(newFormData);
  };

  const handleExportJSON = (colors?: ColorSettings, formData?: any, template?: any) => {
    const exportData = {
      colors: colors || colors,
      formData: formData || formData,
      template: template,
      timestamp: new Date().toISOString(),
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'zyloform-export.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleExportHTML = (colors?: ColorSettings, formData?: any, template?: any) => {
    // Generate HTML with inline styles based on colors
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zyloform Generated Form</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f3f4f6;
            padding: 20px;
            margin: 0;
        }
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: ${colors?.formBackgroundColor || '#ffffff'};
            border: 1px solid ${colors?.formBackgroundBorderColor || '#e5e7eb'};
            border-radius: 8px;
            padding: 32px;
        }
        .form-field {
            margin-bottom: 24px;
        }
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: ${colors?.fieldLabelTextColor || '#1f2937'};
        }
        .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid ${colors?.fieldBorderColor || '#d1d5db'};
            border-radius: 6px;
            background-color: ${colors?.fieldBackgroundColor || '#ffffff'};
            color: ${colors?.inputTextColor || '#1f2937'};
            font-size: 16px;
        }
        .form-input::placeholder {
            color: ${colors?.placeholderTextColor || '#6b7280'};
        }
        .form-help {
            margin-top: 4px;
            font-size: 14px;
            color: ${colors?.helpTextColor || '#6b7280'};
        }
        .form-button {
            background-color: ${colors?.buttonBG || '#3b82f6'};
            color: ${colors?.buttonTextColor || '#ffffff'};
            border: 1px solid ${colors?.buttonBorder || '#2563eb'};
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
        .form-button:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }
        textarea.form-input {
            min-height: 120px;
            resize: vertical;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1 style="color: ${colors?.fieldLabelTextColor || '#1f2937'}; margin-bottom: 24px;">
            ${template?.name || 'Generated Form'}
        </h1>
        <form>
            ${template?.fields?.map((field: any) => `
                <div class="form-field">
                    <label class="form-label" for="${field.name}">
                        ${field.label}${field.required ? ' *' : ''}
                    </label>
                    ${field.type === 'textarea' ? 
                        `<textarea class="form-input" id="${field.name}" name="${field.name}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>` :
                        `<input class="form-input" type="${field.type}" id="${field.name}" name="${field.name}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>`
                    }
                    ${field.helpText ? `<div class="form-help">${field.helpText}</div>` : ''}
                </div>
            `).join('') || ''}
            <button type="submit" class="form-button">Submit</button>
        </form>
    </div>
</body>
</html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zyloform-form.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onGetStarted={handleGetStarted} />;
      case 'color-settings':
        return (
          <ColorSettingsPage 
            onColorsChange={handleColorsChange}
            onFormDataChange={handleFormDataChange}
            onExportJSON={handleExportJSON}
            onExportHTML={handleExportHTML}
          />
        );
      case 'feedback-updates':
        return <FeedbackAndUpdatesPage />;
      case 'share':
        return <SharePage />;
      default:
        return <HomePage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
      />
      <main className="flex-1 w-full">
        <div className="w-full min-h-full">
          {renderCurrentPage()}
        </div>
      </main>
    </div>
  );
}

export default App;