import React, { useState } from 'react';
import { Star, Send, ThumbsUp, MessageCircle, Plus, Calendar, Code, Users } from 'lucide-react';

export function FeedbackAndUpdatesPage() {
  const [activeTab, setActiveTab] = useState<'feedback' | 'features' | 'changelog'>('feedback');
  
  // Feedback state
  const [feedback, setFeedback] = useState({
    type: 'general',
    rating: 0,
    subject: '',
    message: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Feature requests state
  const [newRequest, setNewRequest] = useState({ title: '', description: '' });
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Suggestion' },
    { value: 'ui', label: 'UI/UX Feedback' },
    { value: 'performance', label: 'Performance Issue' }
  ];

  const featureRequests = [
    {
      id: 1,
      title: 'Dark Mode Support',
      description: 'Add dark mode theme options for better user experience in low-light environments.',
      votes: 47,
      comments: 12,
      status: 'In Progress',
      author: 'Sarah Johnson',
      date: 'Dec 10, 2024'
    },
    {
      id: 2,
      title: 'Custom Color Picker',
      description: 'Allow users to input custom hex, RGB, or HSL values for precise color control.',
      votes: 35,
      comments: 8,
      status: 'Under Review',
      author: 'Mike Chen',
      date: 'Dec 8, 2024'
    },
    {
      id: 3,
      title: 'Gradient Support',
      description: 'Enable gradient backgrounds and borders for form elements.',
      votes: 28,
      comments: 15,
      status: 'Planned',
      author: 'Emily Rodriguez',
      date: 'Dec 5, 2024'
    },
    {
      id: 4,
      title: 'Undo/Redo Functionality',
      description: 'Add ability to undo and redo color changes during customization.',
      votes: 22,
      comments: 6,
      status: 'Open',
      author: 'David Kim',
      date: 'Dec 3, 2024'
    },
    {
      id: 5,
      title: 'Color Accessibility Checker',
      description: 'Built-in tool to check color contrast ratios for accessibility compliance.',
      votes: 41,
      comments: 9,
      status: 'Open',
      author: 'Lisa Wang',
      date: 'Nov 28, 2024'
    }
  ];

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

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.subject && feedback.message) {
      console.log('Feedback submitted:', feedback);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedback({
          type: 'general',
          rating: 0,
          subject: '',
          message: '',
          email: ''
        });
      }, 3000);
    }
  };

  const handleSubmitRequest = () => {
    if (newRequest.title && newRequest.description) {
      console.log('New feature request:', newRequest);
      setNewRequest({ title: '', description: '' });
      setShowNewRequestForm(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Planned': return 'bg-green-100 text-green-800 hover:bg-green-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setFeedback(prev => ({ ...prev, rating: index + 1 }))}
        className={`w-8 h-8 ${
          index < feedback.rating ? 'text-yellow-400' : 'text-gray-300'
        } hover:text-yellow-400 transition-all duration-200 hover:scale-125 active:scale-110`}
      >
        <Star className="w-full h-full fill-current transition-transform duration-200" />
      </button>
    ));
  };

  const tabs = [
    { key: 'feedback', label: 'Feedback', icon: MessageCircle },
    { key: 'features', label: 'Feature Requests', icon: Users },
    { key: 'changelog', label: 'Changelog', icon: Calendar }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center">
        <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-md mx-auto text-center animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Thank you for your feedback!</h2>
          <p className="text-gray-600">
            We appreciate you taking the time to help us improve Zyloform. We'll review your feedback and get back to you if needed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feedback & Updates</h1>
          <p className="text-gray-600">
            Share your thoughts, request features, and stay updated with the latest changes to Zyloform.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'feedback' && (
            <div className="animate-in slide-in-from-right-2 duration-300">
              <form onSubmit={handleSubmitFeedback} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
                <div className="space-y-6">
                  {/* Feedback Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What type of feedback do you have?
                    </label>
                    <select
                      value={feedback.type}
                      onChange={(e) => setFeedback(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200 bg-white hover:bg-gray-50"
                    >
                      {feedbackTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How would you rate your overall experience?
                    </label>
                    <div className="flex gap-1">
                      {renderStars()}
                    </div>
                    {feedback.rating > 0 && (
                      <p className="text-sm text-gray-500 mt-1 animate-in slide-in-from-left-2 duration-300">
                        {feedback.rating} out of 5 stars
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={feedback.subject}
                      onChange={(e) => setFeedback(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200"
                      placeholder="Brief summary of your feedback"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your feedback *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={feedback.message}
                      onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200 resize-none"
                      placeholder="Please share your detailed feedback, suggestions, or report any issues you've encountered..."
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={feedback.email}
                      onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      We'll only use this to follow up on your feedback if needed
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
                    >
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      Send Feedback
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="animate-in slide-in-from-right-2 duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600">
                    Vote on existing features or submit your own ideas to help shape the future of Zyloform.
                  </p>
                </div>
                <button
                  onClick={() => setShowNewRequestForm(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
                >
                  <Plus className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />
                  New Request
                </button>
              </div>

              {showNewRequestForm && (
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in slide-in-from-top-4 duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Submit New Feature Request</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={newRequest.title}
                        onChange={(e) => setNewRequest(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors duration-200"
                        placeholder="Brief description of the feature"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={newRequest.description}
                        onChange={(e) => setNewRequest(prev => ({ ...prev, description: e.target.value }))}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors duration-200"
                        placeholder="Detailed description of how this feature would work and why it would be valuable"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={handleSubmitRequest}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        Submit Request
                      </button>
                      <button
                        onClick={() => setShowNewRequestForm(false)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {featureRequests.map((request) => (
                  <div 
                    key={request.id} 
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">{request.title}</h3>
                        <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-200">{request.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>by {request.author}</span>
                          <span>{request.date}</span>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-110 ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 hover:scale-105 group/vote">
                        <ThumbsUp className="w-4 h-4 transition-transform duration-200 group-hover/vote:scale-110" />
                        {request.votes} votes
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 hover:scale-105 group/comment">
                        <MessageCircle className="w-4 h-4 transition-transform duration-200 group-hover/comment:scale-110" />
                        {request.comments} comments
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="animate-in slide-in-from-right-2 duration-300">
              <div className="mb-6">
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
          )}
        </div>
      </div>
    </div>
  );
}