import React from "react";
import SplitText from "./SplitText";
import { stats } from "../data/siteData";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="section-container">
        <div className="section-header-badge">
          <span className="retro-tag">STAGE 02</span>
          <span
            style={{
              color: "var(--pixel-gold)",
              fontFamily: "var(--font-terminal)",
              fontSize: "1.2rem",
            }}
          >
            // ATTRIBUTES & EXPERIENCE
          </span>
        </div>

        <h2 className="section-title">
          <SplitText>The work is the proof</SplitText>
        </h2>
        <p className="section-desc">
          Measurable milestones and proven experience in building modern
          software.
        </p>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-box">
              <div className="stat-corner-notch"></div>
              <span className="stat-stat-code">{stat.code}</span>
              <div className="stat-number-wrap">
                <span
                  className="stat-number"
                  {...(stat.target !== undefined
                    ? { "data-target": stat.target }
                    : {})}
                >
                  {stat.value}
                </span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
