import React from "react";
import { Button } from "./ui/button";
import { Mail, ExternalLink } from "lucide-react";
// Uncomment the line below and comment out the /assets/profile.jpg path if you prefer to import
// import profileImage from '../assets/profile.jpg';

interface HeroSectionProps {
  onEmailClick: () => void;
  onPortfolioClick: () => void;
}

export function HeroSection({
  onEmailClick,
  onPortfolioClick,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="../../src/images/profile.PNG"
            alt="Profile photo" 
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" 
          />
        </div>

        <h1 className="mb-4">Carlos Rodriguez</h1>
        <h2 className="text-muted-foreground mb-6">
          QA Automation Engineer
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Self-taught QA Automation Engineer with 3 years of
          experience in web, mobile, and API automation using
          C#, Selenium, Appium, and xUnit. Passionate about
          continuous learning and building robust test
          frameworks that ensure exceptional software quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onEmailClick}
            className="flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            onClick={onPortfolioClick}
            className="flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}