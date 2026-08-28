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
                &ldquo;Greetings, adventurer! I am Chirag Sapara, a BCA
                third-semester student from India. I have forged over fifteen
                practical projects because I believe true mastery only comes
                from actively shipping code and solving real problems.&rdquo;
              </p>
              <p
                className="dialogue-text"
                style={{ color: "var(--pixel-cyan)" }}
              >
                &ldquo;Whether it is architecting an AI-powered conversational
                experience or structuring scalable backend APIs, I treat every
                project as an opportunity to raise the bar.&rdquo;
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
