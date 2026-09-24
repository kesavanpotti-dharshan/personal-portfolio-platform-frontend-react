import React from "react";
import { useScrollTracking } from "./hooks/useScrollTracking";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App: React.FC = () => {
  const { activeSection, scrollProgress, showBackToTop } =
    useScrollTracking();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative bg-ground text-ink font-sans">
      <ScrollProgressBar progress={scrollProgress} />
      <Nav activeSection={activeSection} />
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <BackToTop visible={showBackToTop} onClick={scrollToTop} />
    </div>
  );
};

export default App;
