import React, { useState } from 'react';
import { formTemplates, getUniqueCategories } from '../data/FormTemplates';

interface FormTemplateSelectorProps {
  onFormDataChange: (formData: any, selectedTemplate?: any) => void;
}

export function FormTemplateSelector({ onFormDataChange }: FormTemplateSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const categories = ['All', ...getUniqueCategories()];
  
  const filteredTemplates = selectedCategory === 'All' 
    ? formTemplates 
    : formTemplates.filter(template => template.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedTemplate(0); // Reset selection when category changes
    
    // Update form data with the first template of the new category
    const templates = category === 'All' ? formTemplates : formTemplates.filter(t => t.category === category);
    if (templates.length > 0) {
      const template = templates[0];
      const initialFormData = template.fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {} as any);
      
      onFormDataChange(initialFormData, template);
    }
  };

  const handleTemplateSelect = (index: number) => {
    setSelectedTemplate(index);
    const template = filteredTemplates[index];
    
    // Generate initial form data based on template fields
    const initialFormData = template.fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {} as any);
    
    console.log('Template selected:', {
      template: template,
      initialFormData: initialFormData
    });
    
    onFormDataChange(initialFormData, template);
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      
      {/* Category Filter Dropdown */}
      <div className="relative shrink-0 w-full">
        <div className="relative w-full">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-900 transition-all duration-200 ease-out hover:bg-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 appearance-none cursor-pointer text-[14px]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Templates' : `${category} Templates`}
              </option>
            ))}
          </select>
          
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Templates Header */}
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-gray-900 text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              {selectedCategory === 'All' ? 'All Templates' : `${selectedCategory} Templates`}
            </p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-500 text-left text-nowrap">
            <p className="block leading-[20px] whitespace-pre">
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Templates Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-3 max-h-[920px] overflow-auto p-0 relative shrink-0 w-full">
        {filteredTemplates.map((template, index) => (
          <button
            key={`${selectedCategory}-${template.id}-${index}`}
            onClick={() => handleTemplateSelect(index)}
            className={`h-[116px] relative rounded-lg shrink-0 transition-all duration-200 hover:shadow-md ${
              selectedTemplate === index ? 'bg-blue-50 shadow-lg' : 'bg-[#ffffff] hover:bg-gray-50'
            }`}
          >
            <div className={`absolute border border-solid inset-0 pointer-events-none rounded-lg transition-all duration-200 ${
              selectedTemplate === index ? 'border-blue-500 border-2' : 'border-gray-200 hover:border-gray-300'
            }`} />
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col h-[116px] items-start justify-between p-[16px] relative w-full">
                
                {/* Template Header */}
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 flex-1 mr-2">
                      <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-gray-900 text-left w-full">
                        <p className="block leading-[20px] truncate">{template.name}</p>
                      </div>
                    </div>
                    {selectedTemplate === index && (
                      <div className="h-4 relative shrink-0 w-6 flex-shrink-0">
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-2 pr-0 py-0 relative w-6">
                            <div className="relative shrink-0 size-4">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <rect fill="#3B82F6" height="16" rx="8" width="16" />
                                <path
                                  d="M11.125 5.8125L6.75 10.1875L4.875 8.3125"
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.875"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-gray-600 text-left w-full">
                      <p className="block leading-[16px] line-clamp-2">{template.description}</p>
                    </div>
                  </div>
                </div>

                {/* Template Footer */}
                <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="capitalize flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-gray-500 text-left text-nowrap">
                      <p className="block leading-[16px] whitespace-pre">
                        {template.category.toLowerCase()}
                        {template.isPopular && (
                          <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            Popular
                          </span>
                        )}
                        {template.isFeatured && (
                          <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Featured
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-gray-500 text-left text-nowrap">
                      <p className="block leading-[16px] whitespace-pre">
                        {template.fields ? template.fields.length : 0} fields
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}