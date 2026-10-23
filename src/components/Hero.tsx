import React from "react";
import quickPayPreview from "../assets/quickpay.png";

interface HeroProps { onNavigate: (id: string) => void; }

const Hero: React.FC<HeroProps> = ({ onNavigate }) => (
  <section id="hero" className="hero">
    <div className="hero-content-grid">
      <div className="hero-left">
        <div className="stage-badge"><span className="blinker" />CHIRAG SAPARA / DEVELOPER IN PROGRESS</div>
        <h1 className="hero-headline"><span className="hero-line">I BUILD FOR</span><span className="hero-line">THE WEB.</span><span className="hero-line highlight-green">EXPLORING AI.</span></h1>
        <p className="hero-subtitle">I&apos;m Chirag, a BCA student building full-stack applications and exploring how AI can make software more useful.</p>
        <div className="hero-actions">
          <button className="pixel-btn-primary" onClick={() => onNavigate("projects")}>Explore selected work <span aria-hidden="true">↗</span></button>
          <button className="pixel-btn-secondary" onClick={() => onNavigate("contact")}>Let&apos;s connect <span aria-hidden="true">↗</span></button>
        </div>
      </div>
      <a className="hero-feature" href="#projects" aria-label="View QuickPay in selected work">
        <div className="hero-feature-meta"><span>01 / SELECTED WORK</span><span>FINTECH</span></div>
        <div className="hero-feature-image"><img src={quickPayPreview} alt="QuickPay project interface preview" loading="eager" /></div>
        <div className="hero-feature-caption"><div><h2>QuickPay</h2><p>Closed-loop payment simulator</p></div><span className="hero-feature-arrow" aria-hidden="true">↗</span></div>
        <div className="hero-feature-stack">NEXT.JS&nbsp;&nbsp; / &nbsp;&nbsp;SUPABASE&nbsp;&nbsp; / &nbsp;&nbsp;REACT</div>
      </a>
    </div>
  </section>
);

export default Hero;
