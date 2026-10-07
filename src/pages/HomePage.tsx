import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { WhatItDoesNotDoSection } from '../sections/WhatItDoesNotDoSection';
import { WhoIsItForSection } from '../sections/WhoIsItForSection';
import { UseCasesSection } from '../sections/UseCasesSection';
import { ProductDemoSection } from '../sections/ProductDemoSection';
import { BeforeAfterSection } from '../sections/BeforeAfterSection';
import { PrivacyTrustSection } from '../sections/PrivacyTrustSection';
import { PermissionsSection } from '../sections/PermissionsSection';
import { InstallationGuideSection } from '../sections/InstallationGuideSection';
import { FAQSection } from '../sections/FAQSection';
import { FinalCTASection } from '../sections/FinalCTASection';

interface HomePageProps {
  onCopySuccess: (url: string) => void;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onCopySuccess, onNavigate }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <HeroSection
        onCopySuccess={onCopySuccess}
        onSeeHowItWorksClick={() => scrollToSection('how-it-works')}
      />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <WhatItDoesNotDoSection />
      <WhoIsItForSection />
      <UseCasesSection />
      <ProductDemoSection onCopySuccess={onCopySuccess} />
      <BeforeAfterSection />
      <PrivacyTrustSection onReadPrivacyClick={() => onNavigate('/privacy')} />
      <PermissionsSection />
      <InstallationGuideSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};
