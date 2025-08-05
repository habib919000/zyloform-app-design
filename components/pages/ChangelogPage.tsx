import React from 'react';

export function ChangelogPage() {
  const changelogEntries = [
    {
      version: 'v2.1.0',
      date: 'December 15, 2024',
      changes: [
        'Added new color palette templates: Galaxy Purple, Sunshine Yellow, Lavender Mist',
        'Improved color picker with better accessibility',
        'Enhanced export functionality with HTML templates',
        'Fixed issues with color preview accuracy'
      ]
    },
    {
      version: 'v2.0.0',
      date: 'November 28, 2024',
      changes: [
        'Complete redesign of the color palette interface',
        'Added live preview functionality',
        'Introduced template-based color schemes',
        'New customization options for form elements',
        'Better responsive design for mobile devices'
      ]
    },
    {
      version: 'v1.5.2',
      date: 'November 10, 2024',
      changes: [
        'Fixed color export formatting issues',
        'Improved performance for large color palettes',
        'Added keyboard navigation support',
        'Updated accessibility features'
      ]
    },
    {
      version: 'v1.5.0',
      date: 'October 22, 2024',
      changes: [
        'Added form field customization',
        'New button styling options',
        'Introduced help text color controls',
        'Enhanced color validation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Changelog</h1>
          <p className="text-gray-600">
            Stay updated with the latest features, improvements, and bug fixes in Zyloform.
          </p>
        </div>

        <div className="space-y-8">
          {changelogEntries.map((entry, index) => (
            <div 
              key={entry.version} 
              className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">{entry.version}</h2>
                  <p className="text-sm text-gray-500">{entry.date}</p>
                </div>
                {index === 0 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 hover:scale-110 transition-all duration-200">
                    Latest
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start group/item">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-700 group-hover/item:scale-125 transition-all duration-200"></span>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}