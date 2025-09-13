import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { CVSection } from './components/cv-section';
import { ContactSection } from './components/contact-section';
import React from 'react';

export default function App() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:carlosjoan.6895@gmail.com?subject=Lets work together&body=Hi Carlos, I would like to get in touch with you regarding...';
  };

  const handlePortfolioClick = () => {
    window.open('https://github.com/CJ6895/AutomationUI', '_blank');
  };

  return (
    <div className="min-h-screen">
      <HeroSection 
        onEmailClick={handleEmailClick}
        onPortfolioClick={handlePortfolioClick}
      />
      <AboutSection />
      <CVSection />
      <ContactSection onEmailClick={handleEmailClick} />
    </div>
  );
}