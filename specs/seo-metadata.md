# SEO Metadata

## What

The SEO/GEO metadata surface for the site:

- **Root metadata** — `metadataBase`, default title/description, keywords,
  OpenGraph, Twitter, robots (set once in the root layout, inherited)
- **Per-page metadata** — `title`, `description`, `alternates.canonical`
  (set per page; everything else inherits from root)
- **Structured data (JSON-LD)** — `LocalBusiness` (root), `FAQPage`,
  `Service`, `LocalBusiness + OfferCatalog` (per page)
- **Site-level SEO files** — `public/robots.txt`, `public/sitemap.xml`

Framework: Next.js App Router metadata API + inline JSON-LD `<script>`
tags. No central metadata helper — each page declares its own.

**Out of scope:** brand colors, copy tone, the routing surface itself
(a future `routing.md` would cover that). The current canonical domain
lives in `src/lib/site.ts` (`SITE_URL`); see `specs/domains.md`.

**Source-of-truth docs for intent:**

- `seo-spec.md` — final-state design spec
- `seo-imp.md` — phased implementation plan with done/pending checkboxes

## Where

### Root layout — `src/app/layout.tsx`

- **Metadata export:** `layout.tsx:19-62`
  - `metadataBase` — line 20 (`new URL(SITE_URL)`)
  - `title.default` + `title.template` — lines 22-23
  - `description` — line 25
  - `keywords` — lines 27-34
  - `openGraph` (title, description, type, locale, siteName, images
    [1200×630 hero]) — lines 35-50
  - `twitter` (card, title, description, images) — lines 51-57
  - `robots` (index, follow) — lines 58-61
- **Global JSON-LD `LocalBusiness`** — defined `layout.tsx:64-94`,
  rendered at line 105
  - Fields: `name`, `description`, `address`, `telephone`, `areaServed`
    (6 cities), `openingHoursSpecification`, `sameAs` (currently empty —
    pending per seo-imp.md Phase 6)

### Page-level metadata

Every page sets `title`, `description`, and `alternates.canonical`. All
other keys (`metadataBase`, `openGraph`, `twitter`, `robots`) inherit
from the root layout.

| Route | File | Lines |
|---|---|---|
| `/` | `src/app/page.tsx` | 12-16 (canonical only — title/description inherited) |
| `/about` | `src/app/about/page.tsx` | 7-13 |
| `/contact` | `src/app/contact/page.tsx` | 7-14 |
| `/faq` | `src/app/faq/page.tsx` | 7-13 |
| `/privacy` | `src/app/privacy/page.tsx` | 5-12 |
| `/testimonials` | `src/app/testimonials/page.tsx` | 7-13 |
| `/services` | `src/app/services/page.tsx` | 7-14 |
| `/services/hardscaping` | `src/app/services/hardscaping/page.tsx` | 8-15 |
| `/services/landscape-design` | `src/app/services/landscape-design/page.tsx` | 8-15 |
| `/services/lawn-care` | `src/app/services/lawn-care/page.tsx` | 8-15 |
| `/services/seasonal-cleanup` | `src/app/services/seasonal-cleanup/page.tsx` | 8-15 |
| `/services/tree-removal` | `src/app/services/tree-removal/page.tsx` | 8-15 |
| `/services/tree-shrub-care` | `src/app/services/tree-shrub-care/page.tsx` | 8-15 |
| `/service-area` | `src/app/service-area/page.tsx` | 7-14 |
| `/service-area/bradenton` | `src/app/service-area/bradenton/page.tsx` | 8-15 |
| `/service-area/ellenton` | `src/app/service-area/ellenton/page.tsx` | 8-15 |
| `/service-area/osprey` | `src/app/service-area/osprey/page.tsx` | 8-15 |
| `/service-area/palmetto` | `src/app/service-area/palmetto/page.tsx` | 8-15 |
| `/service-area/sarasota` | `src/app/service-area/sarasota/page.tsx` | 8-15 |
| `/service-area/venice` | `src/app/service-area/venice/page.tsx` | 8-15 |

### Per-page JSON-LD

- **FAQ:** `src/app/faq/page.tsx:58-77` — `FAQPage` schema generated
  from the `faqs` array at lines 15-56
- **6 service pages:** `src/app/services/{slug}/page.tsx:47-73` —
  `Service` schema with nested `LocalBusiness` provider; `areaServed`
  covers all 6 cities
- **6 city pages:** `src/app/service-area/{slug}/page.tsx:17-46` —
  `LocalBusiness` schema with `OfferCatalog` listing all 6 services

### Pages WITHOUT per-page JSON-LD

(Inherit only the root `LocalBusiness` from `layout.tsx`.)

`/`, `/about`, `/contact`, `/testimonials`, `/services` (index),
`/service-area` (index), `/privacy`.

Note: `seo-spec.md` does not mandate schema on these pages. Treat as
intentional unless the spec changes.

### Site-level files

- `public/robots.txt` — AI bots explicitly allowed (per seo-spec.md)
- `public/sitemap.xml` — all 19 pages with `<lastmod>` entries

### `SITE_URL` constant

- **Defined:** `src/lib/site.ts` — `SITE_URL = "https://ayclandscaping.com"`
- **Imported by:** `layout.tsx`, all 6 service pages, all 6 city pages
  (used in JSON-LD URL construction)

## How

### Invariants (from seo-spec.md)

- **Use `LocalBusiness`, not `LandscapingBusiness`.** The latter is not
  a valid schema.org type.
- **`og:image` is 1200×630.** Hero image. Update both the asset and the
  `openGraph.images` entry in `layout.tsx`.
- **Every page must have an `alternates.canonical`.** Currently true
  for all 20 pages.
- **AI bots must be allowed** in `robots.txt`: `GPTBot`, `ChatGPT-User`,
  `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Googlebot`, `Bingbot`.
- **`sitemap.xml` requires `<lastmod>`** on every URL entry.

### Conventions

- Page metadata is declared as `export const metadata: Metadata`
  (static). No `generateMetadata` anywhere — keep it that way unless a
  page needs request-time data.
- JSON-LD is emitted inline:
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`.
  No helper module — each page declares its own `const schema = {…}`.
- Any JSON-LD that references the site URL **imports `SITE_URL` from
  `@/lib/site`** and interpolates it. Never hardcode the domain in a
  schema block.

### Pending work (from seo-imp.md)

- **Phase 1** — Real business address (owner input needed; `seo-imp.md:14`)
- **Phase 6** — `sameAs` links: populate `layout.tsx:64-94` `sameAs`
  array once the Google Business Profile / Yelp URLs are available

### Adding a new page

1. Add `export const metadata` with at minimum `title`, `description`,
   and `alternates: { canonical: "/the-path" }`.
2. Add the URL to `public/sitemap.xml` with a `<lastmod>` date.
3. Decide if it needs page-specific JSON-LD; if yes, inline it and
   import `SITE_URL` for any URL fields.
4. Update the "Page-level metadata" table in this spec in the same commit.
