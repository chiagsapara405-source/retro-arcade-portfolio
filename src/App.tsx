import React, { useRef, useState } from "react";
import "./index.css";

import Preloader from "./components/Preloader";
import FullscreenMenu from "./components/FullscreenMenu";
import HUD from "./components/HUD";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ToolsMarquee from "./components/ToolsMarquee";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PixelCursor from "./components/PixelCursor";

import { useGsapAnimations } from "./hooks/useGsapAnimations";
import { useMenuAnimation } from "./hooks/useMenuAnimation";
import { useSmoothScrollNav } from "./hooks/useSmoothScrollNav";

export const App: React.FC = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Initialize GSAP animations
  useGsapAnimations(compRef);

  // Initialize menu animation
  useMenuAnimation(menuRef, menuOpen);

  // GSAP-powered smooth scroll navigation + active stage tracking
  const { scrollToSection: navigateToSection, activeSection } =
    useSmoothScrollNav();

  // Smooth Section Scroll
  const scrollToSection = (id: string) => {
    setMenuOpen(false);
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
      {/* Custom pixel cursor */}
      <PixelCursor />

      {/* CRT Scanlines and Screen Vignette FX */}
      <div className="crt-overlay" aria-hidden="true"></div>
      <div className="crt-vignette" aria-hidden="true"></div>

      {/* 8-Bit Boot / Preloader Screen */}
      <Preloader />

      {/* Fullscreen Retro Menu */}
      <FullscreenMenu
        menuRef={menuRef}
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Retro Heads-Up Display (HUD) Navigation */}
      <HUD
        onNavigate={scrollToSection}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        activeSection={activeSection}
      />

      {/* Hero Section - STAGE 01 */}
      <Hero onNavigate={scrollToSection} />

      {/* Character Stats Section - STAGE 02 */}
      <Stats />

      {/* Quest Board - STAGE 03 (Selected Projects) */}
      <Projects />

      {/* Tech Arsenal & Power-Ups - STAGE 04 */}
      <Skills />

      {/* Tools Marquee Loop */}
      <ToolsMarquee />

      {/* About / NPC Lore - STAGE 05 */}
      <About />

      {/* Contact / Final Boss Stage - STAGE 06 */}
      <Contact copiedEmail={copiedEmail} onCopyEmail={handleCopyEmail} />

      {/* Footer / Arcade Game Credits */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;
