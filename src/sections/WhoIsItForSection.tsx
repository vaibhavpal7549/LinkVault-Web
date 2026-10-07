import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AUDIENCE_DATA } from '../data/config';
import { GraduationCap, Briefcase, Code2, Laptop, UserCheck } from 'lucide-react';

export const WhoIsItForSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-sky-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-emerald-400" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-amber-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="who-is-it-for" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Target Audience"
          title="Who Is LinkVault For?"
          subtitle="Built specifically for anyone who frequently shares professional links or fills out job application forms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {AUDIENCE_DATA.map((audience) => (
            <div
              key={audience.title}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition duration-300 hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/60">
                    {getIcon(audience.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {audience.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{audience.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  "{audience.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
