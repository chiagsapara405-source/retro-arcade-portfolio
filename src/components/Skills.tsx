import React from "react";
import SplitText from "./SplitText";
import { skillCategories } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header-badge">
          <span className="retro-tag">STAGE 04</span>
          <span
            style={{
              color: "var(--pixel-gold)",
              fontFamily: "var(--font-terminal)",
              fontSize: "1.2rem",
            }}
          >
            // POWER-UPS & ARSENAL
          </span>
        </div>

        <h2 className="section-title">
          <SplitText>Skill Tree & Inventory</SplitText>
        </h2>
        <p className="section-desc">
          Weapons and spell proficiencies equipped for full-stack engineering.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-slot-card">
              <div className="skill-slot-header">
                <div className="skill-icon-box">{category.icon}</div>
                <div>
                  <div className="skill-title">{category.title}</div>
                  <div className="skill-badge-level">{category.level}</div>
                </div>
              </div>
              <div className="skill-bar-outer">
                <div
                  className="skill-bar-inner"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <div className="skill-tags-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
