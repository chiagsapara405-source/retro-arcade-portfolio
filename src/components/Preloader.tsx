import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    let completed = false;
    const finish = () => {
      if (!completed) {
        completed = true;
        setVisible(false);
        onComplete();
      }
    };
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });
      tl.fromTo(
        ".preloader-label",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: reduced ? 0.01 : 0.18, stagger: 0.05 },
      )
        .fromTo(
          ".preloader-name",
          { yPercent: 105 },
          { yPercent: 0, duration: reduced ? 0.01 : 0.38, ease: "power3.out" },
          "-=.04",
        )
        .fromTo(
          ".preloader-progress span",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: reduced ? 0.01 : 0.3,
            ease: "power1.inOut",
            transformOrigin: "left",
          },
          "-=.02",
        )
        .to(element, {
          yPercent: -100,
          duration: reduced ? 0.01 : 0.48,
          ease: "power3.inOut",
          delay: reduced ? 0 : 0.04,
        });
    }, element);
    const fallback = window.setTimeout(finish, 1600);
    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
    };
  }, [onComplete]);

  if (!visible) return null;
  return (
    <div ref={root} className="preloader" aria-hidden="true">
      <div className="preloader-top">
        <span className="preloader-label">CHIRAG SAPARA / PORTFOLIO</span>
        <span className="preloader-label">INDEPENDENT DIGITAL CRAFT</span>
      </div>
      <div className="preloader-title-mask">
        <div className="preloader-name">CHIRAG SAPARA</div>
      </div>
      <div className="preloader-bottom">
        <span className="preloader-label">
          DESIGNING &amp; BUILDING DIGITAL EXPERIENCES
        </span>
        <div className="preloader-progress">
          <span />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

