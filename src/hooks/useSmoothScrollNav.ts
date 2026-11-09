import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import type Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { menuLinks } from "../data/siteData";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SECTION_IDS = menuLinks.map((link) => link.id);

export const useSmoothScrollNav = (lenisRef: RefObject<Lenis | null>) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isNavigating = useRef(false);

  // Track which stage is currently in view
  useLayoutEffect(() => {
    const triggers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive && !isNavigating.current) setActiveSection(id);
        },
      });
    });

    // Snap active state to the final stage when scrolling near the page bottom
    const bottomTrigger = ScrollTrigger.create({
      start: () => ScrollTrigger.maxScroll(window) - 80,
      end: () => ScrollTrigger.maxScroll(window),
      onToggle: (self) => {
        if (self.isActive && !isNavigating.current) setActiveSection("contact");
      },
    });

    return () => {
      triggers.forEach((t) => t?.kill());
      bottomTrigger.kill();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    setActiveSection(id);

    const hud = document.querySelector<HTMLElement>(".retro-hud-header");
    const offset = id === "hero" ? 0 : (hud?.offsetHeight ?? 0) + 12;

    if (lenisRef.current) {
      isNavigating.current = true;
      lenisRef.current.scrollTo(id === "hero" ? 0 : target, {
        offset: -offset,
        duration: 1.2,
        onComplete: () => {
          isNavigating.current = false;
        },
      });
      return;
    }

    // Lenis is intentionally not initialized when reduced motion is enabled.
    // Avoid the GSAP fallback so navigation remains immediate as well.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const top =
        id === "hero"
          ? 0
          : window.scrollY + target.getBoundingClientRect().top - offset;
      window.scrollTo({ top, behavior: "auto" });
      return;
    }

    if (id === "hero") {
      isNavigating.current = true;
      gsap.to(window, {
        scrollTo: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          isNavigating.current = false;
        },
      });
      return;
    }

    const distance = Math.abs(target.getBoundingClientRect().top - offset);

    isNavigating.current = true;
    gsap.to(window, {
      scrollTo: { y: target, offsetY: offset, autoKill: false },
      duration: Math.min(1.6, Math.max(0.6, distance / 1800)),
      ease: "power2.inOut",
      onComplete: () => {
        isNavigating.current = false;
      },
    });
  };

  return { scrollToSection, activeSection };
};
