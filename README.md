# Light Path Afghanistan

A complete editorial rebuild of the Light Path Afghanistan website: React + Vite + Tailwind CSS, React Router, GSAP/ScrollTrigger for scroll storytelling, and Framer Motion for menu transitions.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production bundle + prerendered HTML
npm run preview  # serve the production build
npm run lint
```

The production build writes crawlable HTML, per-page metadata, `sitemap.xml`, `robots.txt` and a branded `404.html` into `dist/`. Serve it as a static site with directory indexes for clean URLs and use `404.html` as the error document (HTTP 404). `_redirects` is included for Netlify-style hosts. No secrets or server environment variables are required.

## Architecture

```
src/
  components/   Reusable UI (Navbar, Footer, Button, AnimatedText,
                PageTransition, ScrollManager, Stats, VideoFeature, ...)
  layouts/      MainLayout (nav + page slot + footer)
  pages/        Home, About, Programs, ProgramDetail, Impact, Gallery,
                GetInvolved, Contact, NotFound
  data/         i18n dictionaries, navigation, programs, impact, and site metadata
  hooks/        useGSAPAnimations, useLocale, useReducedMotion,
                useIsomorphicLayoutEffect
  utils/        contact delivery integration point
```

Shared interface copy is resolved via `t()`. English is available; Dari and Pashto dictionaries are intentionally empty until approved translations are supplied. `directionFor()` and `<html dir>` handle RTL layout automatically.

## Motion

- `useGSAPAnimations(scope, routeKey)` owns every ScrollTrigger for a page inside a `gsap.context`; a single `ctx.revert()` on unmount prevents duplicate triggers and leaks. Desktop-only pinned horizontal sequences use `gsap.matchMedia()`.
- `ScrollManager` uses `ScrollTrigger.clearScrollMemory('manual')` to prevent refresh from restoring the previous route's scroll position.
- `MotionConfig reducedMotion="user"` plus GSAP's reduced-motion guard provide a reduced-motion experience with the homepage chapters arranged vertically.

## Content and authenticity

See [ORGANIZATION-SOURCES.md](ORGANIZATION-SOURCES.md) for the evidence behind every factual claim and the open items, and [ASSET-INVENTORY.md](ASSET-INVENTORY.md) for media provenance and licensing. Placeholder content is explicitly labeled in the UI; no invented statistics, testimonials, staff members or outcomes are published.

The contact form is a **front-end prototype**: `src/utils/contact.js` opens a prepared email draft and is the single point to replace with a backend POST later. It does not send or store data.
