import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SupportPage } from './pages/SupportPage';
import { AboutPage } from './pages/AboutPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleCopySuccess = (url: string) => {
    setToastMessage(url);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case '/terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case '/support':
        return <SupportPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/':
      default:
        return <HomePage onCopySuccess={handleCopySuccess} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      
      <div className="flex-grow">{renderPage()}</div>

      <Footer onNavigate={handleNavigate} />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
