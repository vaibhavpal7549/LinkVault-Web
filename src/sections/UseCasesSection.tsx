import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FileCheck, Sparkles, Users, Code } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      title: 'Job Applications',
      quote: 'Copy your LinkedIn, GitHub, portfolio, or resume link whenever an application asks for it.',
      badge: 'Workforce',
      icon: <FileCheck className="w-5 h-5 text-blue-400" />,
    },
    {
      title: 'Internship Applications',
      quote: 'Keep all your important student and developer profiles ready.',
      badge: 'Students & Grads',
      icon: <Code className="w-5 h-5 text-sky-400" />,
    },
    {
      title: 'Freelance Proposals',
      quote: 'Quickly share your portfolio and professional profiles.',
      badge: 'Client Pitches',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Networking',
      quote: 'Access your professional profiles when connecting with someone.',
      badge: 'Events & Conferences',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Developer Profiles',
      quote: 'Share your coding and project profiles without searching for them.',
      badge: 'Tech Profiles',
      icon: <Code className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Real-World Workflows"
          title="Built for Everyday Professional Work"
          subtitle="Real practical scenarios where LinkVault eliminates friction and saves time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition duration-300 space-y-4 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/60">
                  {useCase.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {useCase.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed italic">
                  "{useCase.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
