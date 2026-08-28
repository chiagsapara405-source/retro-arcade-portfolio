import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = (compRef: RefObject<HTMLDivElement | null>) => {
  // Main GSAP Animation Context
  useLayoutEffect(() => {
    if (!compRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Boot / Preloader Sequence
      const bootTl = gsap.timeline();
      bootTl
        .to(".pixel-loading-bar", {
          width: "100%",
          duration: 1.0,
          ease: "steps(12)",
        })
        .to(".preloader-box", {
          scale: 1.03,
          opacity: 0,
          duration: 0.35,
          delay: 0.1,
          ease: "steps(4)",
        })
        .to(".preloader", {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            const el = document.querySelector(".preloader") as HTMLElement;
            if (el) el.style.display = "none";
          },
        })
        // 2. HUD & Hero Entrance
        .fromTo(
          ".retro-hud-header",
          { y: -60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "steps(6)",
          },
          "-=0.1"
        )
        .fromTo(
          ".stage-badge",
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".hero-headline .word",
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.6,
            stagger: 0.03,
            ease: "steps(6)",
          },
          "-=0.2"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".hero-actions button",
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            ease: "steps(4)",
          },
          "-=0.2"
        )
        .fromTo(
          ".gameboy-shell",
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "steps(6)",
          },
          "-=0.3"
        );

      // 3. HUD Scroll Progress XP Bar
      gsap.to(".hud-scroll-fill", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });

      // 4. Hero Parallax Effects (Stronger)
      gsap.to(".hero-image", {
        yPercent: 30,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".gameboy-shell", {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content-grid", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 5. Stat Counter Animations
      gsap.fromTo(
        ".stat-box",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "steps(6)",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 85%",
            onEnter: () => {
              document
                .querySelectorAll(".stat-number[data-target]")
                .forEach((counter) => {
                  const target = +(counter.getAttribute("data-target") || 0);
                  gsap.to(counter, {
                    innerText: target,
                    duration: 1.4,
                    snap: { innerText: 1 },
                    ease: "power2.out",
                  });
                });
            },
          },
        }
      );

      // 6. Section Titles SplitText Reveals
      document
        .querySelectorAll("section:not(.hero) .split-text")
        .forEach((element) => {
          const words = element.querySelectorAll(".word");
          if (words.length > 0) {
            gsap.fromTo(
              words,
              { y: "110%", opacity: 0 },
              {
                y: "0%",
                opacity: 1,
                duration: 0.6,
                stagger: 0.03,
                ease: "steps(5)",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                },
              }
            );
          }
        });

      // 7. Project Cartridge Cards Entrance
      gsap.fromTo(
        ".project-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "steps(6)",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
        }
      );

      // 8. Skill Slots Stagger
      gsap.fromTo(
        ".skill-slot-card",
        { scale: 0.94, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "steps(5)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
          },
        }
      );

      // 9. About Dialogue Box Pop-In
      gsap.fromTo(
        ".dialogue-box-container",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "steps(6)",
          scrollTrigger: {
            trigger: ".dialogue-box-container",
            start: "top 85%",
          },
        }
      );

      // 10. Boss Card Pulsing Entrance
      gsap.fromTo(
        ".boss-fight-card",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "steps(6)",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
          },
        }
      );

      // 11. Footer Banner Parallax
      gsap.to(".massive-arcade-banner", {
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: "footer",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, compRef);

    return () => ctx.revert();
  }, [compRef]);
};
