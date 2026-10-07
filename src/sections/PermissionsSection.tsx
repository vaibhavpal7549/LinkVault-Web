import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PERMISSIONS_DATA } from '../data/config';
import { HardDrive, Copy, UserCheck, Shield, Globe } from 'lucide-react';

export const PermissionsSection: React.FC = () => {
  const getIcon = (key: string) => {
    switch (key) {
      case 'storage':
        return <HardDrive className="w-5 h-5 text-blue-400" />;
      case 'clipboardWrite':
        return <Copy className="w-5 h-5 text-sky-400" />;
      case 'identity':
        return <UserCheck className="w-5 h-5 text-emerald-400" />;
      case 'activeTab':
        return <Globe className="w-5 h-5 text-amber-400" />;
      default:
        return <Shield className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="permissions" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Browser Manifest Integrity"
          title="Why Does LinkVault Need Permissions?"
          subtitle="We only request essential permissions required to deliver core functionality. No extra background tracking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {PERMISSIONS_DATA.map((perm) => (
            <div
              key={perm.permissionKey}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  {getIcon(perm.permissionKey)}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  "{perm.permissionKey}"
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{perm.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {perm.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
