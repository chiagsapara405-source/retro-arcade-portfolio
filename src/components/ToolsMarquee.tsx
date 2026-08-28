import React from "react";
import { marqueeTools } from "../data/skills";

const ToolsMarquee: React.FC = () => {
  // Duplicate items for infinite loop effect
  const allItems = [...marqueeTools, ...marqueeTools];

  return (
    <section className="tools-marquee-section">
      <div className="marquee-track">
        {allItems.map((tool, idx) => (
          <div key={idx} className="marquee-item">
            {idx % 2 === 0 ? "✥ " : "◈ "}
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsMarquee;
