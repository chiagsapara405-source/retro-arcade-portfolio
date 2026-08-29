import React, { useEffect, useRef, useState } from "react";

const PixelCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let ringX = 0;
    let ringY = 0;
    let dotX = 0;
    let dotY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;

      const target = e.target as Element;
      const hoverable = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [tabindex], .hud-menu-btn, .pixel-btn-primary, .pixel-btn-secondary, .btn-cartridge-action, .btn-boss-action, .hud-nav-link, .gb-dpad-btn, .gb-action-btn, .gb-sys-btn'
      );
      setIsPointer(!!hoverable);
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    const loop = () => {
      // Ring trails the dot with easing
      ringX += (dotX - ringX) * 0.14;
      ringY += (dotY - ringY) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={`pixel-cursor-ring${isPointer ? " is-pointer" : ""}${isHidden ? " is-hidden" : ""}`}
        aria-hidden="true"
      />
      {/* Sharp dot */}
      <div
        ref={dotRef}
        className={`pixel-cursor-dot${isPointer ? " is-pointer" : ""}${isHidden ? " is-hidden" : ""}`}
        aria-hidden="true"
      />
    </>
  );
};

export default PixelCursor;
