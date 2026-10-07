import React from 'react';
import { CONFIG } from '../data/config';
import { Download, ShieldCheck } from 'lucide-react';

const ChromeIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/60 border border-blue-500/30 shadow-2xl shadow-blue-950/50 space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto shadow-lg">
            <ChromeIcon />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Stop Searching for Your Links?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Install LinkVault and keep your professional links ready whenever you need them.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONFIG.CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 border border-blue-400/40 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-5 h-5" />
              <span>Add LinkVault to Chrome</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Standard Chrome Web Store Extension</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
