# Deepti Shukla — Portfolio

Personal portfolio website for Deepti Shukla — Independent Freelance Developer
(Python backend engineering, data engineering, AI/ML integration, full-stack product development).

Built with **React 19 + TypeScript + Vite**. No backend required — fully static.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy

The site is a static SPA — deploy `dist/` to any static host.

- **Render** — New → Static Site → build command `npm run build`, publish directory `dist`.
  Add a rewrite rule: `/*` → `/index.html` (needed for case-study URLs like `/projects/mobi`).
  A `public/_redirects` file is included for Netlify-style hosts.
- **Netlify / Vercel** — same build command; `_redirects` handles SPA routing automatically.

## Updating content

All site content lives in two files — edit these, no other changes needed:

| File | Contents |
|---|---|
| `src/data/site.ts` | Name, title, contact info, skill groups, experience, education, capabilities |
| `src/data/projects.ts` | Project records — overview, contribution, stack, features, screenshots, status |

To add a project: append an object to `projects` in `src/data/projects.ts`
(slug, category, status `live`/`dev`/`proto`, screenshots under `public/assets/`).
A case-study page at `/projects/<slug>` is generated automatically.

## Structure

```
public/assets/           photos, screenshots, resume PDF
src/components/          Layout, ProjectCard, ArchDiagram, Reveal, icons
src/pages/               Home, Projects (filters), CaseStudy
src/data/                site.ts, projects.ts  ← edit me
```

## Notes

- Contact form opens the visitor's mail client (mailto) — no backend needed.
  To use a form service instead, point the form at Formspree/EmailJS.
- Project status labels are honest: **Live** (deployed & reachable),
  **Development Work** (built, not publicly deployed), **Prototype**.
- `public/_redirects` provides SPA fallback on Netlify/Render.
