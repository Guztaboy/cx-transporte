import React from 'react';
import Header from './components/Header';
import SideNavDots from './components/SideNavDots';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import { useFullpage } from './hooks/useFullpage';

const SECTION_IDS = ['hero', 'benefits', 'services', 'why-cx', 'how-it-works', 'cta', 'footer'];

function App() {
  const { activeSection, scrollToSection } = useFullpage(SECTION_IDS);

  return (
    <div className="selection:bg-brand selection:text-darkerBg">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <SideNavDots sections={SECTION_IDS} activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <BenefitsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
