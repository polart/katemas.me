# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is a personal website for Kate Mas (katemas.me), a career coaching business
called "Messy Careers". Built with Astro 7.x and styled with Tailwind CSS 4.x.

**Site URL**: https://katemas.me

## Common Commands

### Development

- `pnpm dev` or `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

### Code Quality

- `pnpm format` - Format all files with Prettier
- `pnpm format:check` - Check formatting without changes
- `pnpm typecheck` - Type-check `.astro` and TS files (`astro check`)
- `pnpm check` - Run format check, typecheck and build (run before committing)

## Architecture & Structure

### Framework & Styling

- **Astro 7.x** with static site generation
- **Tailwind CSS 4.x** using Vite plugin (`@tailwindcss/vite`)
- All styles defined in `src/styles/global.css` using Tailwind's `@theme`
  directive
- TypeScript with strict mode enabled

### Directory Structure

```
src/
├── layouts/
│   └── BaseLayout.astro    # Main layout with header, footer, and meta tags
├── pages/                  # File-based routing
│   ├── index.astro         # Homepage
│   ├── about.astro
│   ├── services.astro
│   ├── reviews.astro
│   ├── intro-call.astro
│   └── terms.astro
└── styles/
    └── global.css          # Tailwind config and custom CSS variables
public/
└── favicon.svg            # Site logo/favicon
```

### Design System

The site uses a custom design system defined in `src/styles/global.css`:

**Typography**:

- `font-serif`: DM Serif Display - used for main headings
- `font-sans`: Inter - used for body text and UI elements
- `font-accent`: Playfair Display italic - used for pull quotes and accent text

**Color Palette**:

- `--color-background`: Warm cream (`#FFFDE9`) — beige sections
- `--color-foreground`: Deep blue/dark — body text, footer background
- `--color-primary`: Electric blue (`#1023CE`) — blue sections, buttons, links
- `--color-primary-foreground`: Cream — text on blue backgrounds
- `--color-secondary`: Sky blue (`#86AFFA`) — accent labels, badges
- HSL format for all colors to enable easy theming

**Button & Link Utilities** (defined in `global.css`):

- `btn-primary` — blue button
- `btn-white` — white button (used on blue backgrounds)
- `btn-outline-white` — outlined white button (used on dark/photo backgrounds)
- `btn-lg` — large button modifier
- `link-arrow` — text link with arrow (used on beige/light backgrounds)
- `link-arrow-white` — text link with arrow (used on blue backgrounds)

**Components**:

- Rounded button styles with `rounded-full` class
- Fixed header with backdrop blur and scroll-triggered transparency on homepage
- Responsive design with mobile-first approach

### Layout Pattern

All pages use `BaseLayout.astro` which provides:

- Standard HTML structure with meta tags
- Fixed header with logo + nav links (About, Work with me, Products) hidden on
  mobile; only "Let's talk" CTA visible on mobile
- Transparent header on homepage (turns solid on scroll via JS)
- Footer with logo, ICF ACC + ICF Member credential badge, nav links, email,
  LinkedIn, and Paris location
- Title and description props for SEO

### Homepage Section Order (`index.astro`)

Sections alternate blue → beige strictly:

1. **Hero** — full-screen photo with gradient scrim, text bottom-anchored
   (`flex items-end`, `min-h-dvh`)
2. **Bio** — 🔵 Blue (`bg-primary`)
3. **People come to me when…** — 🟡 Beige (`bg-background`), quote pills are
   blue on cream
4. **Ways to work together** — 🔵 Blue (`bg-primary`)
5. **Client stories** — 🟡 Beige (`bg-background`)
6. **Final CTA** — 🔵 Blue (`bg-primary`)

### Key Mobile Decisions

- Hero uses `min-h-dvh` (not `min-h-screen`) to avoid browser chrome clipping
  content on iOS/Android
- Nav links hidden on mobile (`hidden sm:block`), only "Let's talk" CTA button
  visible
- Footer columns always side-by-side (`flex flex-row`) with `min-w-0` to prevent
  overflow
- Section padding: `py-16 sm:py-20 md:py-24`, horizontal: `px-5 sm:px-6`

### Reviews Page (`reviews.astro`)

Cards displayed in a 3-column grid (`md:grid-cols-3`). Includes:

- Client review cards with expandable full review (`<details>` element)
- "Share your story" CTA card (blue `bg-primary`) linking to Google Form:
  `https://docs.google.com/forms/d/1oJ6padQDu1aSiRP-96rQ1m67J_I6Fyrd5_D7S_K0xw4/viewform`

### Services Page (`services.astro`)

Three 1:1 coaching packages in a 3-column grid:

- **The Pivot Program** — 3 months, 6 sessions, €610 (most popular, blue card)
- **The Clarity Program** — 4 weeks, 4 sessions, €430
- **No Strings Attached** — single 70-min session, €120

Followed by a client quote section and Corporate Training section.

### Astro Configuration

Key config in `astro.config.mjs`:

- Sitemap generation enabled (`@astrojs/sitemap`)
- Prefetch all links enabled (`prefetchAll: true`)
- Tailwind CSS via Vite plugin
- `compressHTML: true` (Astro 7 defaults to `'jsx'`, which strips whitespace
  between inline elements)
- No adapter: static build deployed to Vercel

### Code Style

Prettier configuration (`.prettierrc`):

- Single quotes
- No trailing commas
- Tab width: 4 spaces (2 for markdown/YAML)
- Print width: 80 characters
- Astro plugin enabled
