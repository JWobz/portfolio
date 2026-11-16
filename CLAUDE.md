# Portfolio site — project plan

@AGENTS.md


## Tech stack
- **Next.js** (App Router) with **TypeScript**
- **Plain CSS / CSS Modules**, no Tailwind for now, so I learn real CSS
- **Markdown (or MDX) files** for project write-ups, so adding a project = adding a file
- **Git + GitHub** for version control (default branch: `main`)
- **Vercel** for hosting (free Hobby plan), auto-deploy on push to `main`
- Custom domain later (e.g. `myname.dev`)
- Editor: **VS Code**

## Site structure
- **Home:** short intro, the roles I'm targeting, 3–4 featured projects
- **Projects:** list of all projects, filterable by type (games / web / tools)
- **Project detail page:** one per project, with the problem, my role, the tech stack, the result, and a video/GIF. Frame game projects around transferable engineering problems (networking, performance, tooling, etc.)
- **About:** background, skills, CV download link
- **Contact:** email + GitHub + LinkedIn (a contact form can come later as a server-feature learning exercise)

## Content decisions (from portfolio research)
Recruiters skim, often on a phone, for under a minute. Design for two readers: the **skimmer** (30 seconds) and the **deep reader** (an engineer in a later interview round).

- **Quality over quantity:** 3–6 strong projects, best first. Cut tutorial clones.
- **Every project card answers in one glance:** what it is, my role, tech, status (released / jam / prototype / in development), and one outcome line.
- **Project detail page layout:**
  1. Summary box at the top (role, team size, duration, stack, status, links) plus a short looping video.
  2. 2–3 sentence overview: problem → what I did → result.
  3. **Feature sections as expandable `<details>`/`<summary>` blocks**, each with a one-line summary visible when collapsed. Each feature: the problem, my approach and decisions, the result (numbers where possible), and a clip or screenshot.
  4. Short retrospective: what worked, what I'd do differently.
- Use native `<details>` for expanding sections: no JavaScript, keyboard-accessible, and readable by search engines. Only build a custom accordion if there's a real need.
- Be honest about my role on team projects. Name the systems I built.
- Every project links to something real: a playable build, a live demo, a repo, or a video.
- Keep GitHub tidy; reviewers check it.

## Game-dev extras
- Short looping MP4/WebM clips instead of GIFs
- Embed playable WebGL builds (via itch.io embeds, or hosted directly)
- Optional: one or two technical breakdown / devlog posts

## Quality standards
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), not div soup
- Accessible: alt text, keyboard navigation, good colour contrast, visible focus states
- Responsive: looks good on phones (recruiters often check on mobile)
- Fast: optimised images, small videos, minimal client-side JavaScript

## Milestones
1. **Setup:** check Node.js is installed, create the Next.js app, tour the generated files, first commit, push to GitHub
2. **Deploy early:** connect the repo to Vercel so every push goes live from day one
3. **Layout:** shared header/nav/footer, global styles, basic typography and colours
4. **Pages:** Home, About, Contact
5. **Projects system:** Markdown project files → projects list page → dynamic project detail pages
6. **Content:** write up my real projects (I will add details later)
7. **Polish:** responsive design, accessibility pass, video embeds, SEO metadata, Open Graph image
8. **Side lesson:** a short plain-JavaScript DOM exercise (`querySelector`, event listeners) so I understand what React does for me
9. **Domain:** buy and connect a custom domain
