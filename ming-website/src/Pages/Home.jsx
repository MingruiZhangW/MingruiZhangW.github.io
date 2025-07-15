import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import SkillsSection from '../Components/SkillsSection';
import WorkExperienceSection from '../Components/WorkExperienceSection';
import InterestsSection from '../Components/InterestsSection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkExperienceSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}