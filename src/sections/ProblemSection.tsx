import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Clock, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    { label: 'Open LinkedIn', detail: 'Search profile tab & copy URL' },
    { label: 'Open GitHub', detail: 'Locate handle & copy URL' },
    { label: 'Find Portfolio', detail: 'Dig through bookmarks' },
    { label: 'Search Resume', detail: 'Find Google Drive share link' },
    { label: 'Coding Profiles', detail: 'LeetCode, CodeChef, HackerRank...' },
    { label: 'Paste & Repeat', detail: 'Switch back to job application form' },
  ];

  return (
    <section id="problem" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Application Friction"
          title="Tired of Searching for the Same Links Again and Again?"
          subtitle="Every job application, internship application, freelance proposal, or professional form asks for the exact same profile URLs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          {/* Left Pain Point Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/40 text-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-900/30 text-red-400 flex items-center justify-center shrink-0 border border-red-800/40">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-red-200">The Repetitive Manual Routine</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    When filling out job application portals, users routinely switch between 5 to 10 browser tabs just to find, copy, and paste their profile links one by one.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                The Typical Application Tab Search
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-mono text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-200 truncate">{item.label}</p>
                      <p className="text-[10px] text-slate-500 truncate">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Solution Statement Banner */}
          <div className="lg:col-span-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-900 border border-blue-500/30 shadow-2xl shadow-blue-950/50 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>The LinkVault Solution</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                LinkVault puts your frequently used professional links in one place.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Instead of jumping between open tabs, search histories, or text documents, open LinkVault directly from your Chrome toolbar and copy any profile link in a single click.
              </p>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-blue-400 font-medium">
                <span>Zero tab switching</span>
                <span className="text-slate-500">•</span>
                <span>Zero repetitive typing</span>
                <span className="text-slate-500">•</span>
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
