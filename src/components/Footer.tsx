import React from "react";
import { footerNavLinks, githubUrl } from "../data/siteData";

interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-invite">
          <p>Thanks for making it this far.</p>
          <a href="mailto:chiragsapra405@gmail.com">Have a project in mind? Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-nav">
          {footerNavLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(event) => { event.preventDefault(); onNavigate(link.id); }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="massive-arcade-banner" aria-label="Chirag Sapara">CHIRAG<br /><span className="line">SAPARA</span></div>

        <div className="footer-credits-row">
          <div>[DEV_CREDITS]: DESIGNED &amp; DEVELOPED BY CHIRAG SAPARA</div>
          <div>
            © 2026 CHIRAG SAPARA // ALL RIGHTS RESERVED //{" "}
            <a
              className="footer-github-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              [GITHUB]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
