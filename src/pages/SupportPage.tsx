import React, { useState } from 'react';
import { CONFIG } from '../data/config';
import { LifeBuoy, Mail, HelpCircle, ArrowLeft, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface SupportPageProps {
  onNavigate: (path: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: CONFIG.WEB3FORMS_KEY,
          subject: `[ProfiVault Support] ${subject}`,
          from_name: 'ProfiVault Web Support',
          replyto: userEmail,
          email: userEmail,
          message: `Sender Email: ${userEmail}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch (err) {
      setErrorMessage('Failed to send message. Please check your internet connection or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const troubleTopics = [
    {
      title: 'Installation & Pinning Help',
      problem: 'Extension icon does not show up in the Chrome toolbar after installing.',
      solution: 'Click the puzzle piece icon (Extensions menu) in the top-right corner of Chrome, locate ProfiVault in the list, and click the Pin icon to keep it visible.',
    },
    {
      title: 'Google Sign-In Troubleshooting',
      problem: 'Google authentication popup closes or shows a sign-in error.',
      solution: 'Ensure you are signed into your primary Google Chrome profile. Check if third-party cookies or extensions are blocking Google OAuth popups.',
    },
    {
      title: 'Link Saving Problems',
      problem: 'A newly added link does not appear in the saved links list.',
      solution: 'Check that the URL begins with a valid prefix (e.g. https://). Ensure Chrome local storage is not restricted by private browsing extensions.',
    },
    {
      title: 'Copy Button Troubleshooting',
      problem: 'Clicking Copy does not copy the link to clipboard.',
      solution: 'Verify that Chrome has granted clipboard write permission to ProfiVault in chrome://extensions. Try restarting your browser.',
    },
  ];

  return (
    <div className="py-12 bg-slate-950 text-slate-200 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ProfiVault Home</span>
        </button>

        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <LifeBuoy className="w-4 h-4" />
            <span>Support Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            ProfiVault Support & Troubleshooting
          </h1>
          <p className="text-sm text-slate-400">
            Having trouble? Find common troubleshooting fixes or email our support team directly.
          </p>
        </div>

        {/* Troubleshooting Guides */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            Common Problems & Fixes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubleTopics.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <div className="text-xs text-red-300 bg-red-950/40 p-2.5 rounded-lg border border-red-900/40 font-mono">
                  Issue: {item.problem}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-emerald-400">Solution: </strong>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Contact Form */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <Mail className="w-6 h-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-bold text-white">Contact Support</h2>
              <p className="text-xs text-slate-400">
                Direct email: <span className="text-blue-400 font-mono">{CONFIG.SUPPORT_EMAIL}</span>
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-emerald-200">Support Request Sent</h3>
              <p className="text-xs text-slate-300">
                Thank you! We will get back to you at <span className="font-mono text-blue-300">{CONFIG.SUPPORT_EMAIL}</span> as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/50 border border-red-800/60 text-red-200 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Issue with clipboard copying"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your issue or feedback in detail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold text-xs shadow-lg transition cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Send Support Message</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
