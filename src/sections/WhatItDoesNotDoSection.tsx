import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { XCircle, ShieldAlert, Info } from 'lucide-react';

export const WhatItDoesNotDoSection: React.FC = () => {
  const nonFeatures = [
    'LinkVault does not apply for jobs on the user\'s behalf.',
    'LinkVault does not automatically submit job applications.',
    'LinkVault does not scrape job websites.',
    'LinkVault does not automatically collect personal information from random websites.',
    'LinkVault does not modify job application forms automatically.',
    'LinkVault does not read the content of every website unnecessarily.',
    'LinkVault does not sell users\' professional links.',
    'LinkVault is not a job portal.',
    'LinkVault is not a recruitment platform.',
    'LinkVault is not an AI job application agent.',
    'LinkVault does not guarantee employment or job placement.',
  ];

  return (
    <section id="what-it-does-not-do" className="py-20 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Boundaries & Honesty"
          title="What LinkVault Does NOT Do"
          subtitle="We believe in total transparency. Here is a clear list of what our Chrome extension does NOT do."
        />

        <div className="max-w-4xl mx-auto mt-10">
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Transparent Scope of Functionality</h3>
                <p className="text-xs text-slate-400">
                  LinkVault is strictly a fast profile link copier and organizer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nonFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition"
                >
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Note box regarding accuracy & no fake claims */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-start gap-3 text-xs text-blue-300">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="font-semibold text-blue-200">Product Integrity Guarantee: </strong>
                LinkVault uses Chrome standard extension storage to store saved URLs locally. We do not claim unsupported capabilities such as background page scraping or automatic form auto-fill.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
