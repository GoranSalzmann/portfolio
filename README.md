# Mike Karl — Portfolio

Source code for my personal portfolio. This repo is a showcase of how I structure and write frontend code — not a template to self-host.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## Architecture

Single-scroll landing page with anchor navigation. Project case studies live on separate hardcoded routes — no CMS, no dynamic `[slug]` pages.

| Route | Description |
|-------|-------------|
| `/` | Landing — About, Hobbies, Projects, Timeline, Contact |
| `/project/emulator` | Example project case study |

All copy lives in [`lib/content.ts`](lib/content.ts) and [`lib/projects.ts`](lib/projects.ts); global config (name, nav, social links) in [`lib/site.ts`](lib/site.ts). Components only handle presentation.

---

## Project structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Home — cover sheet + numbered sections
├── not-found.tsx           # Styled 404 page
└── project/
    └── emulator/
        └── page.tsx        # Project case study

components/
├── site-header.tsx         # Sticky header + navigation
├── site-footer.tsx
├── theme-toggle.tsx        # Auto / Hell / Dunkel
├── section.tsx             # Numbered section with left rail heading
├── pinout.tsx              # Hero: navigation drawn as an IC pin diagram
├── career-diagram.tsx      # Career as a timing diagram on a year axis
└── project-sheet.tsx       # Layout for a project case study

lib/
├── content.ts              # Landing page copy
├── projects.ts             # Project case study data
├── site.ts                 # Global site config
├── theme.ts                # Theme preference storage
└── cn.ts                   # Tailwind class merge helper
```

Project images listed in `lib/projects.ts` are only rendered once the file exists under `public/`; prev/next links only when the target route is listed in `projectRoutes`.

---

## Design system

The site is laid out like a component datasheet: numbered sections, ruled tables, one spot colour. Light mode is the printed sheet, dark mode the circuit board. Tokens in [`app/globals.css`](app/globals.css):

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `paper` | `#f5f7f4` | `#06110d` | Page background |
| `sheet` | `#ffffff` | `#0a1913` | Raised surfaces |
| `ink` | `#0d1512` | `#e7f0ea` | Text, heavy rules |
| `muted` | `#55615b` | `#8ea69b` | Secondary text |
| `hair` | `#cdd5cf` | `#1e352b` | Hairline rules |
| `accent` | `#0a7a55` | `#46e0a0` | Spot colour |

**Fonts:** Archivo (variable width — condensed for display, normal for body) · DM Mono (labels, data)

Utility classes: `.display` · `.heading` · `.label` · `.prose-sheet` · `.hatch` · `.track`

---

## License

All rights reserved.
