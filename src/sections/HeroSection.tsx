import React from 'react';
import { CONFIG } from '../data/config';
import { ExtensionMockup } from '../components/ExtensionMockup';
import { ArrowRight, Shield, CheckCircle2, Zap, Download } from 'lucide-react';

interface HeroSectionProps {
  onCopySuccess: (url: string) => void;
  onSeeHowItWorksClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopySuccess,
  onSeeHowItWorksClick,
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>{CONFIG.PRODUCT_TAGLINE}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Stop Searching for Your Links.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Just Copy.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Save your LinkedIn, GitHub, portfolio, resume, and coding profiles in one place and access them instantly whenever you need them.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={CONFIG.CHROME_WEB_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 border border-blue-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                <span>Get LinkVault for Chrome</span>
              </a>

              <button
                onClick={onSeeHowItWorksClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all cursor-pointer"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One-Click Copy</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Local Storage</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Setup Delay</span>
              </div>
            </div>
          </div>

          {/* Right Hero Realistic Extension Preview Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse-glow"></div>
            <div className="relative">
              <ExtensionMockup onCopySuccess={onCopySuccess} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
