import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
    });
    lenisRef.current = lenis;

    const onLenisScroll = () => ScrollTrigger.update();
    const onGsapTick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", onLenisScroll);
    gsap.ticker.add(onGsapTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onGsapTick);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Initialize GSAP animations
  useGsapAnimations(compRef, introReady);


  // GSAP-powered smooth scroll navigation + active stage tracking
  const { scrollToSection: navigateToSection, activeSection } =
    useSmoothScrollNav(lenisRef);

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
