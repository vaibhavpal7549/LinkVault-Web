import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { X, Check, Zap, Clock } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const beforeSteps = [
    'Search profile or bookmarks',
    'Open target website tab',
    'Locate exact URL & copy',
    'Return to job application tab',
    'Paste URL into form field',
    'Repeat for LinkedIn, GitHub, Resume...',
  ];

  const afterSteps = [
    'Open ProfiVault toolbar icon',
    'Find your saved link',
    'Click "Copy"',
    'Paste directly into your form',
  ];

  return (
    <section className="py-20 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Productivity Comparison"
          title="Before vs After ProfiVault"
          subtitle="See how ProfiVault removes tedious steps from your daily job application workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {/* BEFORE CARD */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-red-900/40 relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-red-950">
              <div className="flex items-center gap-2 text-red-400 font-bold text-lg">
                <div className="w-8 h-8 rounded-lg bg-red-950/80 flex items-center justify-center border border-red-900/50">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <span>BEFORE ProfiVault</span>
              </div>
              <span className="text-xs font-mono text-red-400/80 bg-red-950/60 px-2.5 py-1 rounded border border-red-900/30 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Slow & Repetitive
              </span>
            </div>

            <div className="space-y-3">
              {beforeSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-950 text-red-400 text-xs font-mono font-bold flex items-center justify-center border border-red-900/50 shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-300">{step}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-900 text-xs text-red-400/90 italic">
              Result: Wasted time, frustration, and open tab clutter.
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/40 relative overflow-hidden space-y-6 shadow-2xl shadow-blue-950/50">
            <div className="flex items-center justify-between pb-4 border-b border-blue-900/60">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/40">
                  <Check className="w-5 h-5 text-blue-400" />
                </div>
                <span>WITH ProfiVault</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-900/30 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Instant Copy
              </span>
            </div>

            <div className="space-y-3">
              {afterSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-mono font-bold flex items-center justify-center border border-blue-400/50 shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-100 font-semibold">{step}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-emerald-400 font-semibold">
              Result: 1-click access, effortless applications, stay in flow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
