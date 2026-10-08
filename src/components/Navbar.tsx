import React, { useState } from 'react';
import { CONFIG } from '../data/config';
import { Menu, X, Download, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (path !== currentPath) {
      onNavigate(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            >
              <img
                src="/apple-touch-icon.png"
                alt="ProfiVault Logo"
                className="w-9 h-9 rounded-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition object-cover"
              />
              <div>
                <span className="font-heading font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
                  {CONFIG.PRODUCT_NAME}
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Chrome Extension
                  </span>
                </span>
                <span className="block text-[11px] text-slate-400 font-normal hidden sm:block">
                  Fast Profile Link Copier
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('/')}
              className={`hover:text-blue-400 transition cursor-pointer ${
                currentPath === '/' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/', 'features')}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('/', 'how-it-works')}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('/', 'what-it-does-not-do')}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              What It Doesn't Do
            </button>
            <button
              onClick={() => handleNavClick('/privacy')}
              className={`hover:text-blue-400 transition cursor-pointer ${
                currentPath === '/privacy' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              Privacy
            </button>
            <button
              onClick={() => handleNavClick('/', 'faq')}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('/support')}
              className={`hover:text-blue-400 transition cursor-pointer ${
                currentPath === '/support' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              Support
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className={`hover:text-blue-400 transition cursor-pointer ${
                currentPath === '/about' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              About
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONFIG.CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 border border-blue-400/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Get ProfiVault</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/', 'features')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Features</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/', 'how-it-works')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/', 'what-it-does-not-do')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>What ProfiVault Doesn't Do</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/privacy')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Privacy Policy</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/terms')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Terms of Service</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/', 'faq')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/support')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Support</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-blue-400 flex items-center justify-between"
            >
              <span>About ProfiVault</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <div className="pt-2 border-t border-slate-900">
            <a
              href={CONFIG.CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Get ProfiVault for Chrome</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
