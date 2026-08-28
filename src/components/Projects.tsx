import React from "react";
import SplitText from "./SplitText";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header-badge">
          <span className="retro-tag">STAGE 03</span>
          <span
            style={{
              color: "var(--pixel-cyan)",
              fontFamily: "var(--font-terminal)",
              fontSize: "1.2rem",
            }}
          >
            // CARTRIDGE SLOTS
          </span>
        </div>

        <h2 className="section-title">
          <SplitText>Selected Quest Logs</SplitText>
        </h2>
        <p className="section-desc">
          Real quests cleared — fintech simulators, real-time utilities, and
          developer tools shipped with working code on GitHub.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="cartridge-grip">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="project-screen">
                <div className="project-screen-scanline"></div>
                <div className="project-badge-slot">{project.badge}</div>
                <div className="project-pixel-art-icon">{project.icon}</div>
              </div>
              <div className="project-info">
                <h3 className="project-title">
                  <span>{project.title}</span>
                  <span style={{ color: "var(--pixel-mint)" }}>
                    {project.status}
                  </span>
                </h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="item-tag">
                      ⚡ {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.actions.map((action, idx) => (
                    <a
                      key={idx}
                      href={action.url}
                      className={`btn-cartridge-action ${
                        action.primary ? "primary" : "secondary"
                      }`}
                      {...(action.url.startsWith("http") && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
