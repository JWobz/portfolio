# Portfolio site — project plan

@AGENTS.md

## Goal
A portfolio that reads as "software developer who ships", with three shipped VR sports games (Meta Quest, Unity/C#, made at Evans Taylor Digital) as the proof. Aimed at general software roles as well as game roles. Visitors skim fast: the top of the page is light and memorable, and depth lives one click away in case studies.

## Tech stack
- **Next.js** (App Router) with **TypeScript**
- **Plain CSS / CSS Modules**. No Tailwind, no CSS-in-JS.
- **Content in TypeScript data files** under `data/`, kept out of components. No Markdown parser.
- **react-icons** for tech logos in the Toolbox (Simple Icons `si`, Devicon `di`, Tabler `tb` fallback). The only planned dependency.
- **Git + GitHub** (default branch `main`), **Vercel** Hobby plan with auto-deploy on push to `main`
- Custom domain later
- Editor: **VS Code** (`.vscode/settings.json` enforces LF line endings)

## Hard constraints
- **The games are owned by Evans Taylor Digital.** Don't overclaim. Case study footer: "Game assets © Evans Taylor Digital, shown with permission".
- **Static stats only.** No scraping or live store data. Stats are "only goes up" numbers (no dates or averages).
- **Not in v1:** blog, 3D, itch.io embeds, project filters, contact form.
- **Fast:** no video or large images in the hero, no heavy effect libraries (CSS for animations, no Framer Motion).
- **Vibe:** fun, dark, outlined. Dark theme only.

## Site structure
- **Homepage (`/`)**: one long page with numbered sections, linked from a sticky nav with in-page anchors (`#work`, `#projects`, `#about`, `#contact`) plus a Résumé button (PDF in `public/`).
  1. Hero: eyebrow "HELLO, I'M", name scramble-decodes once, role line cycles every 3.5s (GAME DESIGNER / SYSTEMS PROGRAMMER / SOFTWARE DEVELOPER / 3 VR TITLES SHIPPED), one-sentence pitch, two buttons, stat strip (3+ yrs · 3 titles shipped · 2,000+ player ratings).
  2. `01 / Shipped games` "Selected work": one wide featured card + two smaller cards. Poster image, short muted loop on hover.
  3. `02 / What I do` "Design brain, engineer's hands": three outlined cards, no tool tags.
  4. `03 / Software` "Projects" (on `--bg-alt`): growing grid of project cards, "All on GitHub ↗".
  5. `04 / Toolbox` "What I work with": label column + chips. No logos on the "Systems I have built" row.
  6. `05 / About` "From game feel to good software": bio + experience list + résumé download.
  7. `06 / Contact` "Let's build something.": big email button, LinkedIn / GitHub / Résumé.
  8. Footer: © year + name · "Source on GitHub" (links to the repo).
- **Case study (`/work/[slug]`)**, one per game, statically generated: back link + logo · eyebrow, title, pitch · trailer (muted, poster first, lazy) · facts `<dl>` (role, studio, platform, engine, released) · store button · `01 / Overview` · `02 / Systems I built` (2–3 blocks of Problem / Approach / Result + clip + 8–15 line C# snippet, titled in general software terms such as "real-time state sync" or "performance on constrained hardware") · `03 / Takeaways` (2 cards) · "Next project →" · footer with asset line.
- Removed on purpose, don't re-add: a "Right now / live" section, an intro line under "Selected work".

## Design tokens
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0E0F11` | page background |
| `--bg-alt` | `#121316` | alternating sections |
| `--surface` | `#15171A` | cards |
| `--media` | `#1B1E22` | image/video placeholders |
| `--border` | `#2A2E35` | 1px outlines on cards and between sections |
| `--text` / `--text-2` / `--text-3` | `#EDEDED` / `#A3A8B0` / `#7D838C` | primary / secondary / labels |
| `--accent` | `#00E58F` | the one accent; text on accent `#04140C` |
| `--scramble-dim` | `#3D4A44` | unresolved scramble glyphs (decorative) |

- Fonts via `next/font/google`: **Archivo Black** (display), **Inter** 400/500/600 (body), **JetBrains Mono** 400/500 (labels, eyebrows, role line, chips).
- Radius 16px big cards, 14px small cards, 8–10px buttons and chips. Card hover: border turns accent + `translateY(-4px)`.
- Section eyebrow: mono, 13px, letter-spacing 3px, accent, numbered ("01 / SHIPPED GAMES").
- Contrast checked: all text tokens pass 4.5:1 on `--bg`, `--bg-alt` and `--surface` (`--text-3` on `--surface` is the tightest at 4.7:1, so don't put it on `--media`).

## Content data (`data/`)
- `site.ts`: name, roles, hero sentence, email, links
- `stats.ts`: `{ value, label, accent? }[]`
- `games.ts`: slug, title, year, pitch, built[], storeUrl, poster, clip, featured, caseStudy
- `projects.ts`: name, blurb, stack[], liveUrl, codeUrl, image
- `tools.ts`: groups of `{ label, items: { name, icon? }[] }`

## Quality standards
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dl>`), not div soup. One `<h1>` per page.
- Accessible: alt text, keyboard navigation, visible focus states, contrast ≥ 4.5:1, a skip link.
- **Motion:** respect `prefers-reduced-motion` for every animation. A global "pause motion" toggle stops all animation (hero cycling now, background effects later), as WCAG 2.2.2 requires for content that auto-updates for more than 5 seconds. Animations also pause when off-screen or when the tab is hidden.
- Hero: final text is server-rendered; the scramble starts after hydration. Screen readers get the real text through visually hidden text, with the animated copy `aria-hidden`.
- Cards with more than one link: no links nested inside links (use one main link stretched over the card).
- Responsive: grids collapse to one column on phones; nav wraps.
- Fast: `next/image` for stills; clips are short MP4/WebM with `poster`, `muted playsInline loop`, `preload="none"`, played on hover/in view, static poster on touch devices. Minimal client-side JavaScript: push Client Components down the tree.

## Milestones
1. ~~Setup~~ ✓
2. ~~Deploy early~~ ✓
3. **Layout and styles:** tokens and fonts in `globals.css`, sticky nav with anchor links, footer, skip link, focus styles, motion toggle
4. **Homepage sections** built from `data/` files with placeholder content (hero static first)
5. **Scramble hero:** the role/name animation as a small Client Component
6. **Case studies:** `/work/[slug]` with `generateStaticParams`, "Next project" link
7. **Content:** real games, systems, projects, résumé
8. **Polish:** hover clips, `next/image`, SEO metadata, Open Graph image, accessibility and Lighthouse pass, phone testing
9. **Side lesson:** a plain-JavaScript DOM exercise (`querySelector`, event listeners) to see what React does for me
10. **Domain:** buy and connect a custom domain

## Later (not v1)
- Interactive constellation background in the hero: one `<canvas>` loaded with `next/dynamic({ ssr: false })` after first paint, capped node count, paused off-screen, when hidden, and by the motion toggle. Must never delay the name appearing.
- Fun personal facts in About (real ones only).
