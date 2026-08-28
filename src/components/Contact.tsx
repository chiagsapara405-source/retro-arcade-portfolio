import React from "react";
import SplitText from "./SplitText";
import { githubUrl } from "../data/siteData";

interface ContactProps {
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

const Contact: React.FC<ContactProps> = ({ copiedEmail, onCopyEmail }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="boss-fight-card">
          <div className="boss-badge">STAGE 06 // FINAL STAGE: QUEST DISPATCH</div>
          <h2 className="contact-headline">
            <SplitText>Ready to build something legendary?</SplitText>
          </h2>
          <p className="contact-sub">
            I am open to software engineering internships, freelance projects,
            and high-impact collaborations. If you need someone who ships with
            passion and speed, dispatch your quest now!
          </p>

          <div className="contact-actions-grid">
            <a
              href="mailto:chiragsapra405@gmail.com"
              className="btn-boss-action primary"
            >
              ✉ SEND QUEST [EMAIL]
            </a>
            <button className="btn-boss-action danger" onClick={onCopyEmail}>
              📋 {copiedEmail ? "EMAIL COPIED!" : "COPY DISPATCH ID"}
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-boss-action primary"
              style={{ background: "var(--pixel-cyan)", color: "#000" }}
            >
              ⌨ SOURCE CODE [GITHUB]
            </a>
            <a
              href="#hero"
              className="btn-boss-action primary"
              style={{ background: "var(--pixel-gold)", color: "#000" }}
            >
              📄 VIEW RESUME
            </a>
          </div>

          {copiedEmail && (
            <div className="contact-toast">
              ★ DISPATCH ID (chiragsapra405@gmail.com) COPIED TO CLIPBOARD!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
