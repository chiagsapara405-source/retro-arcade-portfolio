import React from "react";
import { gameBoyStats } from "../data/siteData";

interface GameBoyProps {
  onNavigate: (id: string) => void;
}

const GameBoy: React.FC<GameBoyProps> = ({ onNavigate }) => {
  return (
    <div className="gameboy-shell">
      {/* Top brand bar */}
      <div className="gb-brand-bar">
        <span className="gb-brand-name">PIXEL BOY</span>
        <span className="gb-brand-model">COLOR™</span>
      </div>

      {/* Screen area */}
      <div className="gb-screen-housing">
        <div className="gb-screen-bezel">
          {/* Power LED */}
          <div className="gb-power-led">
            <span className="gb-led-dot"></span>
            <span className="gb-led-label">PWR</span>
          </div>
          {/* The actual screen */}
          <div className="gb-screen">
            <div className="gb-screen-scanlines" aria-hidden="true"></div>
            <div className="gb-screen-content">
              <div className="gb-screen-header">
                <span>★ PLAYER 1 STATS ★</span>
              </div>
              <div className="gb-stat-list">
                {gameBoyStats.map((stat, idx) => (
                  <div key={idx} className="gb-stat-line">
                    <span className="gb-stat-key">{stat.key}</span>
                    <span className="gb-stat-dots">{stat.dots}</span>
                    <span className={`gb-stat-val ${stat.color || ""}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="gb-screen-footer">
                <span className="gb-blink">▶ PRESS A TO HIRE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls area */}
      <div className="gb-controls">
        {/* D-Pad */}
        <div className="gb-dpad">
          <div className="gb-dpad-v">
            <div className="gb-dpad-btn up">▲</div>
            <div className="gb-dpad-center"></div>
            <div className="gb-dpad-btn down">▼</div>
          </div>
          <div className="gb-dpad-h">
            <div className="gb-dpad-btn left">◀</div>
            <div className="gb-dpad-center"></div>
            <div className="gb-dpad-btn right">▶</div>
          </div>
        </div>

        {/* Center buttons */}
        <div className="gb-center-btns">
          <button
            className="gb-sys-btn"
            onClick={() => onNavigate("about")}
          >
            SEL
          </button>
          <button
            className="gb-sys-btn"
            onClick={() => onNavigate("hero")}
          >
            STA
          </button>
        </div>

        {/* A/B Buttons */}
        <div className="gb-ab-group">
          <div className="gb-ab-labels">
            <span>B</span>
            <span>A</span>
          </div>
          <div className="gb-ab-btns">
            <button
              className="gb-action-btn b"
              onClick={() => onNavigate("projects")}
              title="View Quests"
            ></button>
            <button
              className="gb-action-btn a"
              onClick={() => onNavigate("contact")}
              title="Contact"
            ></button>
          </div>
        </div>
      </div>

      {/* Speaker grille */}
      <div className="gb-speaker">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="gb-speaker-dot"></span>
        ))}
      </div>

      {/* Bottom label */}
      <div className="gb-bottom-label">
        <span>CHIRAG SAPARA</span>
        <span className="gb-serial">S/N: CS-2026-FULLSTACK</span>
      </div>
    </div>
  );
};

export default GameBoy;
