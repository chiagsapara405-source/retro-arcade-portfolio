import React from "react";
import { footerNavLinks, githubUrl } from "../data/siteData";

interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          {footerNavLinks.map((link) => (
            <a key={link.id} onClick={() => onNavigate(link.id)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="massive-arcade-banner">CHIRAG SAPARA</div>

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
