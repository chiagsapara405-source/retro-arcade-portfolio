import React, { useRef, useState } from "react";
import "./index.css";

import HUD from "./components/HUD";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import { useGsapAnimations } from "./hooks/useGsapAnimations";
import { useSmoothScrollNav } from "./hooks/useSmoothScrollNav";

export const App: React.FC = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [introReady, setIntroReady] = useState(false);

  // Initialize GSAP animations
  useGsapAnimations(compRef, introReady);


  // GSAP-powered smooth scroll navigation + active stage tracking
  const { scrollToSection: navigateToSection, activeSection } =
    useSmoothScrollNav();

  // Smooth Section Scroll
  const scrollToSection = (id: string) => {
    navigateToSection(id);
  };

  // Copy Email to Clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chiragsapra405@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div ref={compRef} className="retro-app-root">
      <Preloader onComplete={() => setIntroReady(true)} />
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Retro Heads-Up Display (HUD) Navigation */}
      <HUD
        onNavigate={scrollToSection}
        onToggleMenu={() => scrollToSection("contact")}
        activeSection={activeSection}
      />

      <main id="main">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Projects />
        <Skills />
        <Contact copiedEmail={copiedEmail} onCopyEmail={handleCopyEmail} />
      </main>

      {/* Footer / Arcade Game Credits */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;
