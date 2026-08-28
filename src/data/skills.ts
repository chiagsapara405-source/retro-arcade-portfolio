export interface SkillCategory {
  id: string;
  title: string;
  level: string;
  percentage: number;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "FRONTEND SORCERY",
    level: "LVL: ADVANCED [90%]",
    percentage: 90,
    icon: "💻",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "GSAP Animations",
    ],
  },
  {
    id: "backend",
    title: "BACKEND CRAFTING",
    level: "LVL: PROFICIENT [85%]",
    percentage: 85,
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "CRUD Architecture",
    ],
  },
  {
    id: "ai",
    title: "AI & MODERN TECH",
    level: "LVL: EXPERIMENTAL [80%]",
    percentage: 80,
    icon: "🧠",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "LLM Integrations",
      "AI Automations",
    ],
  },
  {
    id: "tools",
    title: "DATABASE & TOOLS",
    level: "LVL: PROFICIENT [85%]",
    percentage: 85,
    icon: "📦",
    skills: [
      "MongoDB",
      "Git / GitHub",
      "Vite / npm",
      "Postman",
      "VS Code",
    ],
  },
];

export const marqueeTools: string[] = [
  "REACTION",
  "TYPESCRIPT",
  "NODE.JS",
  "GSAP 3",
  "MONGODB",
  "OPENAI",
  "EXPRESS",
  "VITE",
  "GIT",
  "WEBFLOW",
];
