import React from 'react';
import { CONFIG } from '../data/config';
import { Lock, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string, sectionId?: string) => {
    onNavigate(path);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-600/30">
                <Lock className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {CONFIG.PRODUCT_NAME}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "{CONFIG.PRODUCT_TAGLINE}"
            </p>
            <p className="text-xs text-slate-500 max-w-sm">
              {CONFIG.PRODUCT_DESCRIPTION}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Contact: </span>
              <a
                href={`mailto:${CONFIG.SUPPORT_EMAIL}`}
                className="text-blue-400 hover:underline font-mono"
              >
                {CONFIG.SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-heading">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'features')}
                  className="hover:text-blue-400 transition"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'how-it-works')}
                  className="hover:text-blue-400 transition"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'demo')}
                  className="hover:text-blue-400 transition"
                >
                  Interactive Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'permissions')}
                  className="hover:text-blue-400 transition"
                >
                  Browser Permissions
                </button>
              </li>
              <li>
                <a
                  href={CONFIG.CHROME_WEB_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition inline-flex items-center gap-1 text-blue-400 font-medium"
                >
                  Chrome Web Store
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-heading">
              Trust & Transparency
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/privacy')}
                  className="hover:text-blue-400 transition"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/terms')}
                  className="hover:text-blue-400 transition"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'what-it-does-not-do')}
                  className="hover:text-blue-400 transition"
                >
                  What ProfiVault Does NOT Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'privacy-section')}
                  className="hover:text-blue-400 transition"
                >
                  Security & Data Control
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-heading">
              Support & Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/support')}
                  className="hover:text-blue-400 transition"
                >
                  Support Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'installation-guide')}
                  className="hover:text-blue-400 transition"
                >
                  Installation Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'faq')}
                  className="hover:text-blue-400 transition"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/about')}
                  className="hover:text-blue-400 transition"
                >
                  About ProfiVault
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {CONFIG.PRODUCT_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Chrome Web Store is a trademark of Google LLC.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
