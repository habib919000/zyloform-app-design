import React from 'react';

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to create professional forms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced form building capabilities with enterprise-grade features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">50+ Templates</h3>
            <p className="text-gray-600">Professional form templates for every business need</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Colors</h3>
            <p className="text-gray-600">Advanced color picker with professional palettes</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Preview</h3>
            <p className="text-gray-600">See changes instantly with real-time rendering</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Ready</h3>
            <p className="text-gray-600">HTML, JSON, CSS exports for immediate deployment</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Template Gallery
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Choose from our extensive collection of professionally designed form templates. Each template is optimized for conversions and user experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-full h-24 bg-blue-50 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-medium">Contact Form</span>
                </div>
                <h4 className="font-medium text-gray-900 text-sm">Basic Contact</h4>
                <p className="text-gray-500 text-xs">4 fields</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-full h-24 bg-green-50 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-green-600 text-xs font-medium">Registration</span>
                </div>
                <h4 className="font-medium text-gray-900 text-sm">User Registration</h4>
                <p className="text-gray-500 text-xs">6 fields</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Advanced Color Customization
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Create stunning forms with our professional color picker. Choose from preset palettes or create your own unique color schemes.
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Color Palettes</h4>
                <span className="text-sm text-gray-500">4 presets</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2"></div>
                  <span className="text-xs text-gray-600">Ocean</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2"></div>
                  <span className="text-xs text-gray-600">Forest</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-2"></div>
                  <span className="text-xs text-gray-600">Mountain</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-2"></div>
                  <span className="text-xs text-gray-600">Desert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}