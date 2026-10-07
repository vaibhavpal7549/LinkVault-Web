import React from 'react';
import { CONFIG } from '../data/config';
import { ShieldCheck, Mail, ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to LinkVault Home</span>
        </button>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Privacy Statement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            LinkVault Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: October 2026 | Effective for all LinkVault Chrome Extension Users
          </p>
        </div>

        {/* Policy Document Content */}
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          
          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              1. Information the Extension Handles
            </h2>
            <p>
              LinkVault is designed around user privacy and minimal data requirements. The extension handles only the user-provided profile titles and URLs that you explicitly save within the LinkVault extension interface.
            </p>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">2. Saved Links & Extension Settings</h2>
            <p>
              When you add professional profile links (such as LinkedIn, GitHub, portfolio, resume, LeetCode, CodeChef, HackerRank), these items are stored directly within your browser's extension storage environment (<code className="text-xs font-mono text-blue-300 bg-slate-950 px-1 py-0.5 rounded">chrome.storage</code>). Extension settings and preferences (such as category organization or layout view) are stored locally in the same manner.
            </p>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">3. Google Authentication (If Enabled)</h2>
            <p>
              If Google Sign-In is enabled in your version of the production Chrome extension, Google OAuth (<code className="text-xs font-mono text-blue-300 bg-slate-950 px-1 py-0.5 rounded">chrome.identity</code>) is used solely to authenticate your identity and associate your account settings. LinkVault does not access your Google emails, contacts, Google Drive files, or unrelated account data.
            </p>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">4. Browser Storage & Data Retention</h2>
            <p>
              All saved links remain stored in your local Chrome extension storage as long as the extension remains installed. If you delete a link from the LinkVault interface, it is instantly removed from storage. Uninstalling the Chrome extension completely purges all local storage entries created by LinkVault.
            </p>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">5. Clipboard Usage</h2>
            <p>
              LinkVault requests the <code className="text-xs font-mono text-blue-300 bg-slate-950 px-1 py-0.5 rounded">clipboardWrite</code> permission. This permission is invoked strictly when you manually click the "Copy" button next to a saved link in order to copy that specific URL to your system clipboard. LinkVault never reads your clipboard history or modifies clipboard data without user interaction.
            </p>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">6. Permissions Scope</h2>
            <p>
              LinkVault requests only the following permissions:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong className="text-white">storage:</strong> To save your links and preferences locally in Chrome.</li>
              <li><strong className="text-white">clipboardWrite:</strong> To copy URLs to your clipboard when you click Copy.</li>
              <li><strong className="text-white">identity:</strong> Used for Google account authentication only if Google Sign-In is enabled.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">7. Data Sharing & Third-Party Services</h2>
            <p>
              LinkVault does not sell, rent, monetize, or trade your saved links or personal data to third parties, recruiters, advertisers, or data brokers.
            </p>
          </section>

          <section className="space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold text-white">8. User Control & Data Deletion</h2>
            <p>
              You maintain total control over your saved links. You can edit, categorize, or delete any saved link at any time inside the Chrome extension popup.
            </p>
          </section>

          {/* Configurable Placeholders Section */}
          <section className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/60 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              9. Contact Information & Legal Inquiries
            </h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to contact our team:
            </p>
            <div className="space-y-2 text-xs font-mono bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300">
              <p>Support Contact: <span className="text-blue-400">[SUPPORT_EMAIL]</span> (Configured as: {CONFIG.SUPPORT_EMAIL})</p>
              <p>Privacy Inquiries: <span className="text-blue-400">[PRIVACY_POLICY_CONTACT]</span> (Configured as: {CONFIG.PRIVACY_EMAIL})</p>
              <p>Chrome Web Store Listing: <span className="text-blue-400">[CHROME_WEB_STORE_URL]</span> (Configured as: {CONFIG.CHROME_WEB_STORE_URL})</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
