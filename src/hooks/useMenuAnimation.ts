import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

export const useMenuAnimation = (
  menuRef: RefObject<HTMLDivElement | null>,
  menuOpen: boolean
) => {
  useLayoutEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.to(menuRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "steps(8)",
      });
      gsap.fromTo(
        ".menu-link-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.08,
          delay: 0.15,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [menuOpen, menuRef]);
};
