import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FeatureCard } from '../components/FeatureCard';
import { FEATURES_DATA } from '../data/config';
import {
  FolderKanban,
  Copy,
  Send,
  Terminal,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderKanban':
        return <FolderKanban className="w-6 h-6" />;
      case 'Copy':
        return <Copy className="w-6 h-6" />;
      case 'Send':
        return <Send className="w-6 h-6" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Copy className="w-6 h-6" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Capabilities"
          title="Designed for Productivity"
          subtitle="ProfiVault includes essential features built specifically to make copying your professional profile links quick and hassle-free."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {FEATURES_DATA.map((feat) => (
            <FeatureCard
              key={feat.title}
              title={feat.title}
              description={feat.description}
              icon={getIcon(feat.iconName)}
              tag={feat.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
