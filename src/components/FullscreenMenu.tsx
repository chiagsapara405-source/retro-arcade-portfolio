import React, { type RefObject } from "react";
import { menuLinks } from "../data/siteData";

interface FullscreenMenuProps {
  menuRef: RefObject<HTMLDivElement | null>;
  menuOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  menuRef,
  menuOpen,
  onClose,
  onNavigate,
}) => {
  return (
    <div
      ref={menuRef}
      className={`fullscreen-menu ${menuOpen ? "open" : ""}`}
    >
      <div className="menu-frame">
        <div className="menu-title-badge">QUEST MAP // STAGES</div>
        <button
          className="menu-close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          [X]
        </button>
        <ul className="menu-links">
          {menuLinks.map((link) => (
            <li key={link.id} className="menu-link-item">
              <a onClick={() => onNavigate(link.id)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullscreenMenu;
