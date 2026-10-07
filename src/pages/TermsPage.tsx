import React from 'react';
import { CONFIG } from '../data/config';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to LinkVault Home</span>
        </button>

        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Legal Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            LinkVault Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: October 2026
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 flex items-start gap-3 text-xs text-amber-200">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Important Notice: </strong>
            These terms serve as product terms for the LinkVault Chrome extension. The final legal agreement should be reviewed by legal counsel before production deployment.
          </div>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By installing, accessing, or using the LinkVault Chrome extension ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please uninstall the extension.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h2 className="text-lg font-bold text-white">2. Scope of Service</h2>
            <p>
              LinkVault provides a browser extension interface for users to save, organize, and copy their profile and portfolio URLs. LinkVault is not a job portal, employment agency, recruitment service, or automated application bot.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h2 className="text-lg font-bold text-white">3. User Responsibilities</h2>
            <p>
              You are responsible for the accuracy of the profile links you save in LinkVault and for adhering to the terms of service of third-party job application portals where you paste your links.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h2 className="text-lg font-bold text-white">4. Disclaimer of Guarantees</h2>
            <p>
              LinkVault does not guarantee employment, job interviews, client proposals, or specific career outcomes. The extension is provided "as is" without warranties of any kind.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h2 className="text-lg font-bold text-white">5. Contact</h2>
            <p>
              For questions regarding these terms, contact us at <span className="text-blue-400 font-mono">{CONFIG.SUPPORT_EMAIL}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
