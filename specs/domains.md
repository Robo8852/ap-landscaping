# Domains & Former Brand Strings

## What

The site went through multiple brand and domain candidates before
landing on the current state:

- **Brand history:** AP Landscaping → ACP Landscaping → AYC Landscaping
  (current). "ACP" was the working name when `seo-spec.md` was first
  drafted; the final pick is AYC.
- **Domain history:** `acplandscaping.com` and `bradentonlandscaping.com`
  were both considered; landed on `ayclandscaping.com` (current).

This spec tracks where former-brand and former-domain strings still
appear in the repo. As of the 2026-05-18 brand cleanup pass, all
user-facing stale references have been scrubbed. The only remaining
occurrences are intentional internal infrastructure names and the
legacy "AP" logo mark, both documented below.

The current canonical domain lives in `src/lib/site.ts` (SITE_URL).
That file is the source of truth for the live domain — not this spec.

**Out of scope:** brand colors, typography, copy tone, legal business
name, the current-domain footprint.

## Where

### Stale references — none remaining

The 2026-05-18 cleanup pass scrubbed every user-facing stale reference
across `spec.md`, `implementation-plan.md`, `progress.md`,
`iteration-log.md`, `seo-spec.md`, `how-to-build-this-from-scratch.md`,
and `HANDOFF.md` §2a. If new stale references appear (e.g. a
re-imported doc, a fresh `seo-spec.md` draft), add them here as
subsections grouped by string.

### Intentional — do NOT scrub

#### Legacy "AP" logo mark

- **`public/logo.png`** — still shows the "AP" mark intentionally per
  CLAUDE.md. Do not edit or replace as part of a brand pass.
- **`how-to-build-this-from-scratch.md:436`** — a comment in a
  file-tree diagram describing the logo as the "AP logo".
  Technically accurate since the logo PNG still shows AP. Leave
  alone unless the logo itself is replaced.

#### `ap-*` CSS design tokens

`ap-forest`, `ap-green`, `ap-lime`, `ap-sand`, `ap-warm`, `ap-bark`,
`ap-stone` — defined in `src/app/globals.css`, referenced throughout
`src/`. The `ap-` prefix is legacy but the tokens *are* the visual
system. Renaming them is a full restyle, not a brand rename.

#### Internal infrastructure names

These reference the underlying GitHub repo / npm package / Vercel
project / Convex deployment. They are not user-facing (users see
`ayclandscaping.com`, not these names). Renaming them is a coordinated
multi-system operation. Leave as-is unless the user explicitly requests
a full infra rename.

- `package.json:2` — npm package `"name": "ap-landscaping"`
- `package-lock.json:2`, `package-lock.json:8` — mirror `package.json`
- `HANDOFF.md:3` — `https://ap-landscaping.vercel.app` (Vercel
  auto-generated URL)
- `HANDOFF.md:91` — `Robo8852/ap-landscaping` (GitHub repo path)
- `HANDOFF.md:92` — `leo-reyes-projects/ap-landscaping` (Vercel project
  name)
- `.env.local:5` — Convex project comment

## How

- **Before scrubbing any future "Stale" entry, update this spec.** If
  the spec drifts, the map is worthless. Same-commit updates only.
- **When the brand or domain changes again,** re-run one Explore swarm
  per stale string, populate the Where section, then patch the listed
  files (same commit).
- **Never rename `ap-*` CSS tokens** as part of a brand-scrub pass.
- **Never edit `public/logo.png`** as part of a brand-scrub pass.
- **Internal infrastructure renames** (npm package, GitHub repo,
  Vercel project, Convex deployment) touch external systems. Confirm
  with the user before doing any of those — they are not just text
  edits.
