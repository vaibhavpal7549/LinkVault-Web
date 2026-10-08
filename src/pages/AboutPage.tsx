import React from 'react';
import { ArrowLeft, Sparkles, Lock, Code, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-200 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ProfiVault Home</span>
        </button>

        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Product Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            About ProfiVault
          </h1>
          <p className="text-base text-slate-400">
            "ProfiVault was created to solve a simple problem: professional links are repeatedly requested, but finding them shouldn't be repetitive."
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white">Why We Built ProfiVault</h2>
            <p>
              Whether applying for jobs, submitting internship applications, sharing developer profiles, or pitching freelance clients, professionals constantly find themselves searching for the exact same set of links: LinkedIn, GitHub, portfolio, resume, LeetCode, CodeChef, and HackerRank.
            </p>
            <p>
              ProfiVault eliminates this daily friction by keeping your essential profile links ready inside a clean Chrome extension popup. Open the extension, click copy, and paste immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <Lock className="w-6 h-6 text-blue-400" />
              <h3 className="font-bold text-white">Focused Scope</h3>
              <p className="text-xs text-slate-400">
                We focus strictly on fast link copying without bloat or unwanted automation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <Code className="w-6 h-6 text-sky-400" />
              <h3 className="font-bold text-white">Developer Friendly</h3>
              <p className="text-xs text-slate-400">
                Built with developers, students, and active job applicants in mind.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white">Transparent Build</h3>
              <p className="text-xs text-slate-400">
                Minimal permissions, browser local storage, and honest functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
