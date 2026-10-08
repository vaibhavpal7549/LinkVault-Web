import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExtensionMockup } from '../components/ExtensionMockup';
import { Copy, Search, Shield, Plus } from 'lucide-react';

interface ProductDemoSectionProps {
  onCopySuccess: (url: string) => void;
}

export const ProductDemoSection: React.FC<ProductDemoSectionProps> = ({ onCopySuccess }) => {
  return (
    <section id="demo" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Live Interactive Preview"
          title="Experience ProfiVault In Action"
          subtitle="Test out the real interface right here. Click any 'Copy' button below to simulate copied links."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Explanatory Labels & Feature Callouts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <Search className="w-4 h-4" />
                <span>1. Instant Search & Filtering</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Filter saved links by title, domain, or custom categories like Social, Coding, Docs, and Portfolio.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Copy className="w-4 h-4" />
                <span>2. One-Click Copy Action</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clicking Copy instantly places the target profile URL into your system clipboard with visual feedback.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <Plus className="w-4 h-4" />
                <span>3. Quick Add Link Dialog</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Add any title and URL in seconds. Links are stored locally in Chrome extension storage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Shield className="w-4 h-4" />
                <span>4. Optional Google Authentication</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If enabled in the extension build, users can sign in using Google account authentication.
              </p>
            </div>
          </div>

          {/* Right Showcase Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="p-4 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl relative">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                Interactive Simulator
              </div>
              <ExtensionMockup onCopySuccess={onCopySuccess} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
