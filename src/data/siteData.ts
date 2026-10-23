export interface Stat {
  id: string;
  code: string;
  target?: number;
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    id: "projects",
    code: "[STAT: PROJS]",
    target: 15,
    value: "0",
    suffix: "+",
    label: "PROJECTS BUILT",
    description:
      "Full-stack applications, APIs, and AI tools shipped with functional code.",
  },
  {
    id: "experience",
    code: "[STAT: EXP]",
    target: 1,
    value: "0",
    suffix: "+",
    label: "YEARS CODING",
    description:
      "Continuous active coding, building projects, and exploring modern paradigms.",
  },
  {
    id: "semester",
    code: "[STAT: RANK]",
    value: "3",
    suffix: "RD",
    label: "SEMESTER BCA",
    description:
      "Pursuing Bachelor of Computer Applications with a strong focus on software engineering.",
  },
  {
    id: "dedication",
    code: "[STAT: MANA]",
    target: 100,
    value: "0",
    suffix: "%",
    label: "DEDICATION RATE",
    description:
      "Passionate problem solver eager to join ambitious teams and high-growth projects.",
  },
];

export const menuLinks = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export const navLinks = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export const footerNavLinks = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export const githubUrl = "https://github.com/chiagsapara405-source";
export const retroPortfolioUrl =
  "https://github.com/chiagsapara405-source/retro-arcade-portfolio";

export const gameBoyStats = [
  { key: "CLASS", dots: "··············", value: "DEV", color: "green" as const },
  { key: "LVL", dots: "················", value: "3 BCA", color: "gold" as const },
  { key: "WPN1", dots: "·············", value: "REACT", color: undefined },
  { key: "WPN2", dots: "············", value: "NODE.JS", color: undefined },
  { key: "SKILL", dots: "···········", value: "AI APPS", color: "green" as const },
  { key: "EXP", dots: "·········", value: "15+ QUESTS", color: "gold" as const },
];
