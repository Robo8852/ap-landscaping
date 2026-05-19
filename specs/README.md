# AYC Landscaping — Spec Map

Entry point for the spec map. Each spec in this folder describes one
cross-cutting concern using the What/Where/How framework (see
`../spec-maps-what-where-how.md`). Agents `@`-inject the relevant spec
instead of re-grepping the repo.

## What this codebase is

Marketing site for AYC Landscaping, a local landscaping company serving
Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey FL.
Mobile-first, conversion-focused (calls + quote form). Next.js 16 App
Router, React 19, Tailwind 4, Convex backend.

## Specs

- **`domains.md`** — Stale former-brand (`AP Landscaping`,
  `ACP Landscaping`, `ap-landscaping`) and former-domain
  (`acplandscaping`) strings: where they still live, which references
  are intentional (logo, CSS tokens), and the rule for keeping the map
  accurate when the brand or domain changes again.
- **`seo-metadata.md`** — Root + per-page metadata (`metadataBase`,
  canonicals, OpenGraph, Twitter, robots), JSON-LD schema across all
  pages, `robots.txt` / `sitemap.xml`, and invariants from `seo-spec.md`.

## Adding a spec

Follow What / Where / How. Add an entry to the list above in the same
commit that introduces the new spec.
