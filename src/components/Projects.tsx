import React from "react";
import SplitText from "./SplitText";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const [featured, ...supporting] = projects;
  return <section id="projects" className="projects-section"><div className="section-container">
    <div className="section-header-badge"><span className="retro-tag">STAGE 03</span><span>// CARTRIDGE SLOTS</span></div>
    <h2 className="section-title"><SplitText>Selected Quest Logs</SplitText></h2>
    <p className="section-desc">A few things I’ve been building, from useful interfaces to full-stack applications.</p>
    {featured && <article className="featured-project">
      <a className="featured-project-image" href={featured.actions[0].url} target="_blank" rel="noopener noreferrer" aria-label="Open QuickPay demo"><img src={featured.image} alt="QuickPay application screenshot" loading="lazy"/><span>01 / FEATURED PROJECT ↗</span></a>
      <div className="featured-project-copy"><div className="featured-project-kicker">FINTECH / FULL-STACK</div><h3>{featured.title}</h3><p>{featured.description}</p><ul><li>OTP authentication and wallet flows</li><li>PIN protection with lockout</li><li>Transaction ledger and shareable receipts</li></ul><div className="project-tags">{featured.tags.map(tag=><span className="item-tag" key={tag}>{tag}</span>)}</div><div className="project-actions">{featured.actions.map(action=><a className={`btn-cartridge-action ${action.primary?"primary":"secondary"}`} href={action.url} key={action.url} target="_blank" rel="noopener noreferrer">{action.label}</a>)}</div></div>
    </article>}
    <div className="supporting-projects">{supporting.map(project=><article className="project-card" key={project.id}><div className={`project-screen${project.image?"":" project-screen--concept"}`}>{project.image?<img src={project.image} alt={`${project.title} screenshot`} className="project-screen-img" loading="lazy"/>:<div className="retro-project-cover" aria-label="Portfolio project cover, not an application screenshot"><span>CHIRAG / WEB</span><strong>RETRO<br/>ARCADE</strong><i>REACT&nbsp; × &nbsp;GSAP</i></div>}</div><div className="project-info"><div className="project-badge-slot">{project.badge}</div><h3 className="project-title">{project.title}</h3><p className="project-desc">{project.description}</p><div className="project-tags">{project.tags.map(tag=><span className="item-tag" key={tag}>{tag}</span>)}</div><div className="project-actions">{project.actions.map(action=><a className="btn-cartridge-action secondary" href={action.url} key={action.url} target="_blank" rel="noopener noreferrer">{action.label}</a>)}</div></div></article>)}</div>
  </div></section>;
};
export default Projects;
