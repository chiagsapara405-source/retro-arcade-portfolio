import React from "react";
import SplitText from "./SplitText";
import GameBoy from "./GameBoy";

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-wrapper">
        <div className="hero-image-placeholder">
          <img
            className="hero-image"
            src="https://png.pngtree.com/thumb_back/fh260/background/20241231/pngtree-animated-gif-webcam-overlay-pixel-image_16531479.jpg"
            alt="Chirag Sapara - Retro Pixel Workspace"
            loading="eager"
          />
        </div>
      </div>

      <div className="hero-content-grid">
        {/* Left Column: Headline & Action Buttons */}
        <div className="hero-left">
          <div className="stage-badge">
            <span className="blinker"></span>
            STAGE 01 // PRESS START
          </div>

          <h1 className="hero-headline">
            <SplitText>
              Building <span className="highlight-green">Full-Stack</span>
              <br />
              applications with
              <br />
              <span className="highlight-cyan">clean pixel</span> code
            </SplitText>
          </h1>

          <p className="hero-subtitle">
            I am Chirag Sapara, a BCA student and full-stack developer from
            India. I forge web applications that solve real-world problems,
            with a specialized focus on AI-driven interfaces & scalable logic.
          </p>

          <div className="hero-actions">
            <button
              className="pixel-btn-primary"
              onClick={() => onNavigate("projects")}
            >
              ► SELECT QUESTS
            </button>
            <button
              className="pixel-btn-secondary"
              onClick={() => onNavigate("contact")}
            >
              ✉ JOIN PARTY
            </button>
          </div>
        </div>

        {/* Right Column: Game Boy Console */}
        <div className="hero-right">
          <GameBoy onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
