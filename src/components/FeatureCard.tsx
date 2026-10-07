import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  tag,
}) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            {icon}
          </div>
          {tag && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60 font-mono">
              {tag}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
