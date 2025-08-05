import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

export function FeedbackPage() {
  const [feedback, setFeedback] = useState({
    type: 'general',
    rating: 0,
    subject: '',
    message: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Suggestion' },
    { value: 'ui', label: 'UI/UX Feedback' },
    { value: 'performance', label: 'Performance Issue' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.subject && feedback.message) {
      // In a real app, this would submit to an API
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
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feedback</h1>
          <p className="text-gray-600">
            We'd love to hear your thoughts! Your feedback helps us improve Zyloform and create a better experience for everyone.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
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
    </div>
  );
}