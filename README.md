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

Content is inlined directly in page and section components. Only global config (name, nav, social links) lives in [`lib/site.ts`](lib/site.ts).

---

## Project structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Home — composes all sections
├── not-found.tsx           # Styled 404 page
└── project/
    └── emulator/
        └── page.tsx        # Project case study

components/
├── ui/                     # Primitives (Section, Card, Chip, Timeline, …)
├── layout/                 # Header, Footer
├── home/                   # Landing page sections
├── project/                # Composable project blocks
└── effects/
    └── particle-grid.tsx   # Canvas hero background

lib/
├── site.ts                 # Global site config
└── cn.ts                   # Tailwind class merge helper
```

---

## Component approach

Small, composable building blocks assembled directly in page files — no monolithic layout wrappers, no separate data layer.

**UI primitives:** `Container` · `Section` · `SectionHeader` · `Chip` · `Card` · `Button` · `TextLink` · `ImageFrame` · `TwoColumn` · `StatGrid` · `FeatureGrid` · `QuoteBlock` · `Timeline` · `ProjectCard` · `CodeBlock`

**Project blocks:**

| Component | Purpose |
|-----------|---------|
| `ProjectHero` | Title, tags, year, duration, status, back link |
| `ProjectDescription` | Two-column text + screenshot |
| `ProjectFeatures` | Feature cards + stat grid |
| `ProjectGallery` | Image grid |
| `ProjectNav` | Previous / next project links |

---

## Design system

Dark theme with amber accents. Tokens in [`app/globals.css`](app/globals.css):

| Token | Value | Usage |
|-------|-------|-------|
| `deep-space` | `#0f0e0c` | Page background |
| `charcoal` | `#1a1917` | Alternate sections |
| `amber` | `#e86101` | Accent, CTAs, tags |
| `text-primary` | `#e8e6e3` | Body text |
| `text-secondary` | `#8a8680` | Muted text |

**Fonts:** Space Grotesk (display) · Inter (body) · IBM Plex Mono (labels, code)

Utility classes: `.chip` · `.section-label` · `.text-link` · `.code-block`

---

## License

All rights reserved.
