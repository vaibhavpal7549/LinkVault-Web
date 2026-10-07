import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PlusCircle, FolderHeart, CopyCheck, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Add Your Links',
      description: 'Save your frequently used professional links in LinkVault once during setup.',
      icon: <PlusCircle className="w-7 h-7 text-blue-400" />,
      accentColor: 'from-blue-600/20 to-blue-800/10',
      borderColor: 'border-blue-500/30',
    },
    {
      stepNumber: '02',
      title: 'Keep Them Organized',
      description: 'Keep your important career and profile links accessible from one central place.',
      icon: <FolderHeart className="w-7 h-7 text-sky-400" />,
      accentColor: 'from-sky-600/20 to-sky-800/10',
      borderColor: 'border-sky-500/30',
    },
    {
      stepNumber: '03',
      title: 'Copy in One Click',
      description: 'Copy the link you need and paste it wherever you need it during job applications.',
      icon: <CopyCheck className="w-7 h-7 text-indigo-400" />,
      accentColor: 'from-indigo-600/20 to-indigo-800/10',
      borderColor: 'border-indigo-500/30',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900/40 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple Workflow"
          title="How LinkVault Works"
          subtitle="Three simple steps to streamline link sharing during job applications and everyday professional work."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accentColor} border ${step.borderColor} flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-extrabold text-slate-700 group-hover:text-blue-400 transition">
                  {step.stepNumber}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition">
                {step.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
