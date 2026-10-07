import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, HardDrive, Lock, ArrowRight } from 'lucide-react';

interface PrivacyTrustSectionProps {
  onReadPrivacyClick: () => void;
}

export const PrivacyTrustSection: React.FC<PrivacyTrustSectionProps> = ({
  onReadPrivacyClick,
}) => {
  return (
    <section id="privacy-section" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Data Integrity"
          title="Your Links. Your Control."
          subtitle="Transparent information on how LinkVault stores your saved links and handles browser storage."
        />

        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Browser Storage</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              LinkVault uses Chrome extension storage (<code className="text-xs font-mono text-blue-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">chrome.storage</code>) to keep your saved links and extension preferences locally accessible across your browser sessions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-600/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Google Sign-In Authentication</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              If Google Sign-In is enabled in your extension build, official Google OAuth authentication is used solely to authenticate your identity and associate your account settings.
            </p>
          </div>
        </div>

        {/* CTA to Privacy Policy */}
        <div className="mt-10 text-center">
          <button
            onClick={onReadPrivacyClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 font-semibold text-sm border border-slate-800 transition cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Read our Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
