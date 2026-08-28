import React from "react";
import { navLinks } from "../data/siteData";

interface HUDProps {
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
  activeSection?: string;
}

const HUD: React.FC<HUDProps> = ({
  onNavigate,
  onToggleMenu,
  activeSection,
}) => {
  return (
    <header className="retro-hud-header">
      <div className="hud-container">
        {/* Player Info Left */}
        <div className="hud-player-info" onClick={() => onNavigate("hero")}>
          <div className="hud-avatar">CS</div>
          <div className="hud-stats-group">
            <div className="hud-name-row">
              <span className="hud-player-name">CHIRAG SAPARA</span>
              <span className="hud-level-badge">LVL 3 BCA</span>
            </div>
            <div className="hud-bars-row">
              <div className="hud-bar-item hp">
                <span>HP</span>
                <div className="hud-mini-meter hp">
                  <div className="hud-mini-meter-fill"></div>
                </div>
              </div>
              <div className="hud-bar-item mp">
                <span>MP</span>
                <div className="hud-mini-meter mp">
                  <div className="hud-mini-meter-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hud-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`hud-nav-link${
                  activeSection === link.id ? " active" : ""
                }`}
                onClick={() => onNavigate(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions Right */}
        <div className="hud-actions-right">
          <button
            className="pixel-btn-quest"
            onClick={() => onNavigate("contact")}
          >
            [ HIRE DEV ]
          </button>
          <div
            className="hud-menu-btn"
            onClick={onToggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Scroll Progress XP Bar */}
      <div className="hud-scroll-bar">
        <div className="hud-scroll-fill"></div>
      </div>
    </header>
  );
};

export default HUD;
