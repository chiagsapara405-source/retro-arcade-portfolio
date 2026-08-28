import { retroPortfolioUrl } from "./siteData";

export interface Project {
  id: number;
  title: string;
  badge: string;
  icon: string;
  description: string;
  tags: string[];
  actions: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "QUICKPAY",
    badge: "[QUEST #01 // FINTECH]",
    icon: "💸",
    description:
      "Closed-loop UPI-style payment simulator. Real Supabase auth with OTP login, virtual wallets, 4-digit PIN protection with lockout, full transaction ledgers, and shareable receipts.",
    tags: ["Next.js 16", "Supabase", "React 19", "Tailwind CSS 4", "PLpgSQL"],
    actions: [
      {
        label: "► DEMO QUEST",
        url: "https://quick-pays.vercel.app/",
        primary: true,
      },
      {
        label: "</> CODE",
        url: "https://github.com/chiagsapara405-source/QuickPay",
      },
    ],
    status: "★ CLEAR",
  },
  {
    id: 2,
    title: "RASOI",
    badge: "[QUEST #02 // FOOD APP]",
    icon: "🍲",
    description:
      "Gujarati spice & thali ordering experience — browse authentic regional menus, customize spice levels, and place orders through a warm, food-first interface.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    actions: [
      {
        label: "</> CODE",
        url: "https://github.com/chiagsapara405-source/gujarati-spice-order",
        primary: true,
      },
    ],
    status: "★ CLEAR",
  },
  {
    id: 3,
    title: "CAFFEINE",
    badge: "[QUEST #03 // FULL-STACK]",
    icon: "☕",
    description:
      "Full-stack coffee ordering app — JWT auth, drink customization, cart with undo, loyalty stamp cards, and an admin dashboard. Express + MongoDB API with server-side pricing, deployed serverless on Vercel.",
    tags: ["React 19", "GSAP", "Express 5", "MongoDB", "Vercel"],
    actions: [
      {
        label: "► DEMO QUEST",
        url: "https://caffeineco.vercel.app/",
        primary: true,
      },
      {
        label: "</> CODE",
        url: "https://github.com/chiagsapara405-source/coffee-ordering-app",
      },
    ],
    status: "★ CLEAR",
  },
  {
    id: 4,
    title: "RETRO ARCADE PORTFOLIO",
    badge: "[QUEST #04 // INTERACTIVE]",
    icon: "🕹️",
    description:
      "This site. 8-bit/16-bit arcade portfolio with GSAP ScrollTrigger animation pipelines, CRT scanline FX, RPG dialogue boxes, a HUD navigation system, and a playable Game Boy console.",
    tags: ["React 19", "GSAP 3", "TypeScript", "Pixel Art"],
    actions: [
      {
        label: "</> CODE",
        url: retroPortfolioUrl,
        primary: true,
      },
    ],
    status: "★ CLEAR",
  },
];
