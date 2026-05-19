# AYC Landscaping — SEO/GEO Implementation Plan

Orchestrator: Claude | Architect: Owner
Each phase is self-contained. Mark `[x]` when complete. Talk with user before starting each phase.

---

## Phase 1 — NAP & Brand Correctness
**Status:** `[~] in progress`
**Needs human input before starting:** ~~Real phone number~~ ✅ 941-600-9879 | Real address ⚠️ TBD

### Tasks
- [x] Replace placeholder phone `(555) 123-4567` with `(941) 600-9879` across all files
- [ ] Add real address to `LocalBusiness` schema in `src/app/layout.tsx` ⚠️ waiting on owner
- [ ] Confirm all brand references say "AYC Landscaping" (audit all pages)

---

## Phase 2 — Schema Fixes (Root Layout)
**Status:** `[x] complete`
**Needs human input:** None (can run immediately)

### Tasks
- [x] Fix schema `@type` from `LandscapingBusiness` → `LocalBusiness` in `src/app/layout.tsx`
- [x] Add `og:image` pointing to `/images/hero.jpeg` in root metadata
- [x] Add Twitter card meta tags to root metadata
- [x] Add `lastmod` dates to all entries in `public/sitemap.xml`
- [x] Add explicit AI bot allow entries to `public/robots.txt`

---

## Phase 3 — FAQPage Schema (Highest GEO Impact)
**Status:** `[x] complete`
**Needs human input:** None (can run immediately)

### Tasks
- [x] Add `FAQPage` JSON-LD schema to `src/app/faq/page.tsx` wrapping all 10 existing Q&As
- [x] Verify schema is valid (structure matches Schema.org FAQPage spec)

---

## Phase 4 — Service Page Schemas
**Status:** `[x] complete`
**Needs human input:** None (can run after Phase 1 phone/address is done)

### Tasks
- [x] Add `Service` JSON-LD schema to `src/app/services/lawn-care/page.tsx`
- [x] Add `Service` JSON-LD schema to `src/app/services/landscape-design/page.tsx`
- [x] Add `Service` JSON-LD schema to `src/app/services/hardscaping/page.tsx`
- [x] Add `Service` JSON-LD schema to `src/app/services/tree-shrub-care/page.tsx`
- [x] Add `Service` JSON-LD schema to `src/app/services/tree-removal/page.tsx`
- [x] Add `Service` JSON-LD schema to `src/app/services/seasonal-cleanup/page.tsx`

---

## Phase 5 — Service Area Page Schemas
**Status:** `[x] complete`
**Needs human input:** None (can run after Phase 1)

### Tasks
- [x] Add city-scoped `LocalBusiness` schema to `src/app/service-area/bradenton/page.tsx`
- [x] Add city-scoped `LocalBusiness` schema to `src/app/service-area/sarasota/page.tsx`
- [x] Add city-scoped `LocalBusiness` schema to `src/app/service-area/palmetto/page.tsx`
- [x] Add city-scoped `LocalBusiness` schema to `src/app/service-area/ellenton/page.tsx`
- [x] Add city-scoped `LocalBusiness` schema to `src/app/service-area/venice/page.tsx`
- [x] Add city-scoped `LocalBusiness` schema to `src/app/service-area/osprey/page.tsx`

---

## Phase 6 — Cleanup
**Status:** `[~] in progress`
**Needs human input:** Google Business Profile / Yelp URLs for `sameAs` links

### Tasks
- [x] Delete `/navbar/floating`, `/navbar/solid`, `/navbar/split`, `/navbar/top-bar` routes
- [ ] Add `sameAs` links to root schema once Google Business Profile / Yelp are set up ⚠️ waiting on owner

---

## Completed Phases
- Phase 2 — Schema Fixes (Root Layout) ✅ 2026-03-25
- Phase 3 — FAQPage Schema ✅ 2026-03-25
- Phase 4 — Service Page Schemas ✅ 2026-03-25
- Phase 5 — Service Area Page Schemas ✅ 2026-03-25
