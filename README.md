# Jack Warburton — Portfolio

My personal portfolio: three shipped VR sports games for Meta Quest (Unity, C#), plus my software projects.

**Live site:** https://portfolio-seven-rho-gl7mkstymk.vercel.app/

## Tech stack

- **Next.js** (App Router) with **TypeScript**
- **Plain CSS Modules**: no Tailwind, no CSS-in-JS
- **react-icons** for the tool logos (the only extra dependency)
- Deployed on **Vercel**, with automatic deploys from `main`

## Highlights

- **Static by default:** every page, including one case study per game (`/work/[slug]`), is pre-rendered at build time with `generateStaticParams`.
- **Small client bundle:** almost everything is a Server Component. Only the hero animation runs in the browser.
- **Accessible animation:** the hero name decodes from scrambled letters and the role line cycles. Screen readers get the real text instead, and the motion:
  - follows the visitor's `prefers-reduced-motion` setting
  - can be paused with a button, and the choice is remembered
  - pauses by itself when the tab is hidden or the hero is scrolled off-screen
- **No layout shift:** each scrambling letter sits in a slot sized to the real letter, so the name never changes width.
- **Content kept apart from code:** all text lives in typed data files in `data/`.

## Project structure

```
app/
  page.tsx              Homepage
  work/[slug]/          Case study pages and their components
  _components/home/     Homepage sections (hero/ holds the animation)
  _components/layout/   Header, footer, shared Section
  _hooks/               Motion pause, tab visibility, on-screen hooks
data/                   Site content: games, projects, tools, about
```

## Running it locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
