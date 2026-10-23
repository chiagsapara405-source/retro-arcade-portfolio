import React from "react";
import SplitText from "./SplitText";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header-badge">
          <span className="retro-tag">STAGE 05</span>
          <span
            style={{
              color: "var(--pixel-mint)",
              fontFamily: "var(--font-terminal)",
              fontSize: "1.2rem",
            }}
          >
            // NPC DIALOGUE & LORE
          </span>
        </div>

        <h2 className="section-title">
          <SplitText>A developer who builds like it matters</SplitText>
        </h2>

        <div className="dialogue-box-container">
          <div className="dialogue-speaker-tab">CHIRAG SAPARA [DEV]</div>
          <div className="dialogue-layout">
            <div className="dialogue-portrait">
              <div className="dialogue-portrait-icon">🧙‍♂️</div>
              <div className="dialogue-portrait-tag">LVL 3 CODER</div>
            </div>
            <div className="dialogue-text-body">
              <p className="dialogue-text">
                I started programming with C, where I learned to think in terms
                of logic and problem-solving. Now I’m building on that foundation
                through modern web development and practical projects.
              </p>
              <p
                className="dialogue-text"
                style={{ color: "var(--pixel-cyan)" }}
              >
                I’m pursuing a BCA at RK University and exploring full-stack
                development and AI integration, one project at a time.
              </p>
              <div className="dialogue-cursor-indicator">▼</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
