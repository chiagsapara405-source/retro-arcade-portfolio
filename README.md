# Retro Pixel Gaming Portfolio

An arcade-style developer portfolio for **Chirag Sapara** — the classic single-page portfolio rebuilt as an 8-bit/16-bit retro gaming experience, complete with CRT scanlines, RPG dialogue boxes, a HUD navigation system, and a playable Game Boy console.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Animation | GSAP 3 (ScrollTrigger, ScrollToPlugin) |
| Fonts | Press Start 2P, Pixelify Sans, VT323, Space Mono |
| Styling | Hand-rolled pixel-art CSS design system |

## Features

- **Boot sequence** — 8-bit preloader with a stepped loading bar
- **HUD navigation** — fixed retro header with HP/MP meters, scroll-progress XP bar, and GSAP smooth-scroll navigation with active-stage highlighting
- **Stage 01 // Hero** — typewriter split-text headline reveal, parallax backdrop, Game Boy console with live character stats
- **Stage 02 // Stats** — RPG character sheet with scroll-triggered counters
- **Stage 03 // Quest Log** — project cartridge cards linking to live demos and source code
- **Stage 04 // Power-Ups** — skill tree grid and infinite tools marquee
- **Stage 05 // NPC Lore** — about section styled as an RPG dialogue box
- **Stage 06 // Final Boss** — contact terminal with email copy-to-clipboard
- **CRT FX** — scanline overlay and screen vignette across the whole app
- **SEO** — Open Graph, Twitter cards, and JSON-LD structured data (`Person` + `WebSite`)

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check + production build
npm run build

# preview the production build
npm run preview

# lint
npm run lint
```

Requires Node.js 20+.

## Project Structure

```
src/
├── App.tsx              # Root component — composes all stages
├── components/          # One component per section (HUD, Hero, Stats, ...)
├── data/                # Content separated from UI
│   ├── siteData.ts      # Nav links, stats, GitHub URLs
│   ├── projects.ts      # Quest log entries
│   └── skills.ts        # Skill tree + marquee tools
├── hooks/               # GSAP animation hooks + smooth-scroll navigation
└── styles/              # Modular CSS: variables, per-section, CRT effects
```

Content (projects, skills, stats, links) lives entirely in `src/data/` — edit those files to update the site without touching components.

## Links

- GitHub: https://github.com/chiagsapara405-source
- Live projects: [QuickPay](https://quick-pays.vercel.app/) · [Caffeine](https://caffeineco.vercel.app/)

## License

© 2026 Chirag Sapara. All rights reserved.
