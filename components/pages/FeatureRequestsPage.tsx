import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Plus } from 'lucide-react';

export function FeatureRequestsPage() {
  const [newRequest, setNewRequest] = useState({ title: '', description: '' });
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Planned': return 'bg-green-100 text-green-800 hover:bg-green-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const handleSubmitRequest = () => {
    if (newRequest.title && newRequest.description) {
      // In a real app, this would submit to an API
      console.log('New feature request:', newRequest);
      setNewRequest({ title: '', description: '' });
      setShowNewRequestForm(false);
      // Show success message
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Feature Requests</h1>
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
    </div>
  );
}