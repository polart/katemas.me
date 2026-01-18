# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Kate Mas (katemas.me), a career coaching business called "Messy Careers". Built with Astro 5.x and styled with Tailwind CSS 4.x.

**Site URL**: https://katemas.me

## Common Commands

### Development
- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Formatting
- `npx prettier --write .` - Format all files
- `npx prettier --check .` - Check formatting without changes

## Architecture & Structure

### Framework & Styling
- **Astro 5.x** with static site generation
- **Tailwind CSS 4.x** using Vite plugin (`@tailwindcss/vite`)
- All styles defined in `src/styles/global.css` using Tailwind's `@theme` directive
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
- `font-handwritten`: Caveat - used for accent text (e.g., "Messy Career")

**Color Palette**:
- Cream background (`--color-background`)
- Deep blue foreground (`--color-foreground`)
- Blue primary color (`--color-primary`)
- HSL format for all colors to enable easy theming

**Components**:
- Rounded button styles with `rounded-full` class
- Fixed header with backdrop blur
- Responsive design with mobile-first approach

### Layout Pattern

All pages use `BaseLayout.astro` which provides:
- Standard HTML structure with meta tags
- Fixed header navigation with logo and links (About Me, Services, Reviews)
- Footer with logo and terms of service link
- Title and description props for SEO

### Astro Configuration

Key config in `astro.config.mjs`:
- Sitemap generation enabled (`@astrojs/sitemap`)
- Prefetch all links enabled (`prefetchAll: true`)
- Tailwind CSS via Vite plugin
- Vercel adapter commented out (currently using static build)

### Code Style

Prettier configuration (`.prettierrc`):
- Single quotes
- No trailing commas
- Tab width: 4 spaces (2 for markdown/YAML)
- Print width: 80 characters
- Astro plugin enabled
