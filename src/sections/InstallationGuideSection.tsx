import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CONFIG } from '../data/config';
import { Download, Code2, FolderOpen } from 'lucide-react';

export const InstallationGuideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'store' | 'dev'>('store');

  const webStoreSteps = [
    { num: '1', text: 'Open the official LinkVault Chrome Web Store page.' },
    { num: '2', text: 'Click the blue "Add to Chrome" button.' },
    { num: '3', text: 'Confirm the installation in the browser prompt.' },
    { num: '4', text: 'Pin LinkVault to your Chrome toolbar for fast 1-click access.' },
    { num: '5', text: 'Click the LinkVault vault icon to open the extension popup.' },
    { num: '6', text: 'Add your professional, resume, and coding profile links.' },
    { num: '7', text: 'Start copying links quickly whenever an application asks!' },
  ];

  const devBuildSteps = [
    { num: '1', text: 'Clone or download the LinkVault extension source folder to your local computer.' },
    { num: '2', text: 'Open Google Chrome and navigate to chrome://extensions in the URL bar.' },
    { num: '3', text: 'Enable the "Developer mode" toggle in the upper right corner.' },
    { num: '4', text: 'Click the "Load unpacked" button in the top toolbar.' },
    { num: '5', text: 'Select the directory containing manifest.json and the compiled build files.' },
    { num: '6', text: 'The LinkVault extension icon will appear in your Chrome toolbar.' },
  ];

  return (
    <section id="installation-guide" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Getting Started"
          title="How to Install LinkVault"
          subtitle="Follow these simple steps to install LinkVault on your Chrome browser in less than a minute."
        />

        {/* Installation Mode Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-sm">
            <button
              onClick={() => setActiveTab('store')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition cursor-pointer ${
                activeTab === 'store'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Chrome Web Store (Recommended)</span>
            </button>
            <button
              onClick={() => setActiveTab('dev')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition cursor-pointer ${
                activeTab === 'dev'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Development Build (Load Unpacked)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Chrome Web Store */}
        {activeTab === 'store' && (
          <div className="max-w-3xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Standard Installation from Web Store</h3>
              </div>
              <a
                href={CONFIG.CHROME_WEB_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Web Store</span>
              </a>
            </div>

            <div className="space-y-4">
              {webStoreSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <span className="text-sm text-slate-200">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Development Build */}
        {activeTab === 'dev' && (
          <div className="max-w-3xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <FolderOpen className="w-6 h-6 text-indigo-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Installing a Development Build</h3>
                <p className="text-xs text-slate-400">For developers loading unpacked extension builds locally.</p>
              </div>
            </div>

            <div className="space-y-4">
              {devBuildSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <span className="text-sm text-slate-200">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
