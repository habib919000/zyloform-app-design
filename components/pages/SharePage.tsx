import React, { useState } from 'react';
import { Copy, Check, Link, Twitter, Facebook, Mail } from 'lucide-react';

export function SharePage() {
  const [copied, setCopied] = useState(false);
  const shareUrl = 'https://zyloform.com';
  const shareText = 'Check out Zyloform - Create beautiful form color schemes in minutes!';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent('Zyloform - Color Scheme Designer');
    const body = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const embedCode = `<iframe src="${shareUrl}" width="100%" height="600" frameborder="0"></iframe>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Zyloform</h1>
          <p className="text-gray-600">
            Help others discover this tool and create beautiful form designs together!
          </p>
        </div>

        <div className="space-y-6">
          {/* Share Link */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Share Link</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              />
              <button
                onClick={copyToClipboard}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 ${
                  copied 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Share on Social Media</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={shareOnTwitter}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <Twitter className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                Twitter
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <Facebook className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                Facebook
              </button>
              <button
                onClick={shareByEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                Email
              </button>
            </div>
          </div>

          {/* Embed Code */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Embed on Your Website</h2>
            <p className="text-gray-600 mb-3">
              Add Zyloform to your website with this embed code:
            </p>
            <div className="bg-gray-100 rounded-md p-3 font-mono text-sm overflow-x-auto hover:bg-gray-200 transition-colors duration-200">
              <code>{embedCode}</code>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(embedCode)}
              className="mt-3 flex items-center gap-2 px-3 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Copy className="w-4 h-4" />
              Copy Embed Code
            </button>
          </div>

          {/* Why Share */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">Why Share Zyloform?</h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2 hover:text-blue-900 transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                Help designers and developers create better forms
              </li>
              <li className="flex items-start gap-2 hover:text-blue-900 transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                Support the development of free design tools
              </li>
              <li className="flex items-start gap-2 hover:text-blue-900 transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                Build a community around accessible web design
              </li>
              <li className="flex items-start gap-2 hover:text-blue-900 transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                Spread awareness about the importance of good UX
              </li>
            </ul>
          </div>

          {/* Thank You */}
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You for Sharing!</h3>
            <p className="text-gray-600">
              Every share helps us reach more people and build better design tools for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}