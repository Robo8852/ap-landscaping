# Handoff — Next Session

Resume after commit `65548bc` (mobile "Call Now" button labels). Site is live at `https://ap-landscaping.vercel.app`.

---

## What shipped this session (recap)

- `cab61b3` — Footer copyright → "Alex y Carmen Landscaping" (legal name)
- `76dbd01` — Real phone `(941) 600-9879` wired into every CTA across the site (navbar, mobile nav, sticky bottom bar, CTA banner, all 6 service pages, all 6 service-area pages)
- `0b36baa` — Deleted `/navbar/{floating,solid,split,top-bar}` mockup pages (were unlinked + indexable with placeholder numbers)
- `65548bc` — Mobile drawer call buttons relabeled "Call Now" (were rendering the digits as the button text)

Live state confirmed: zero `(555) 123-4567` anywhere in the codebase. Every callable CTA dials the real number.

---

## Read first — working tree state

There's uncommitted work sitting in the tree from prior sessions. **All of it is SEO-related**:

```
M public/robots.txt
M public/sitemap.xml
M src/app/faq/page.tsx
M src/app/service-area/{bradenton,ellenton,osprey,palmetto,sarasota,venice}/page.tsx
M src/app/services/{hardscaping,landscape-design,lawn-care,seasonal-cleanup,tree-removal,tree-shrub-care}/page.tsx
```

Each page file adds a JSON-LD `Service` or `LocalBusiness` schema block. Most of it references absolute URLs and **is gated on the domain decision (§3)**. Do not commit blindly — read `seo-imp.md` against `seo-spec.md` first.

Untracked planning docs (`!IMPORTANT.md`, `CLAUDE.md`, `HANDOFF.md`, `seo-imp.md`, `seo-spec.md`, `skills-lock.json`, `.agents/`) — leave alone.

---

## 1. Un-blocked work — can ship anytime

### 1a. Form spam protection (~20 lines)

**Status:** `convex/quotes.ts:submitQuote` is a public mutation with no rate limit, no captcha, no honeypot. A public quote-form endpoint will eventually attract bot submissions.

**Minimal fix:**
- Honeypot — add a hidden `website` (or `company`) input to the form. If a submission has a non-empty value for it, the mutation silently no-ops. Bots auto-fill all fields; humans don't see it. ~10 lines total.
- Optional follow-up: per-IP rate limit via `@convex-dev/ratelimiter`. Only add if abuse actually appears.

Start with honeypot. Skip the rate limit unless needed.

### 1b. Privacy notice (one paragraph)

**Status:** Quote form collects name, phone, email, address. Nowhere on the site says what's done with it.

Not legally required in FL for a small landscaping business, but standard trust signal. One short paragraph on `/contact` (under the form, or linked footer): what's collected, what it's used for (responding to the inquiry, nothing else), how to request deletion.

**Needs user sign-off on wording before shipping.**

---

## 2. Blocked on client-side decisions

### 2a. Domain (resolved)

Domain decision resolved to `ayclandscaping.com` (was: `acplandscaping.com`, `bradentonlandscaping.com`).

Blocks: most of the uncommitted SEO work, email sender domain (§2b), GMB schema (§2c).

### 2b. Form notification emails

**Status:** Quote submissions land in Convex `quotes` table only. No email goes out. Client has to log into the Convex dashboard to see leads.

**Blocked on (in order):**
1. Domain (§2a) — for sender DNS records
2. Client business email — none provisioned yet
3. Email service signup — recommend Resend (3K emails/mo free, Convex's documented pairing)

**Implementation when unblocked:**
1. `npx convex env set RESEND_API_KEY <key>`
2. New `convex/emails.ts` — internal action that calls Resend with all form fields + a reply-to mailto
3. `convex/quotes.ts:submitQuote` → `await ctx.scheduler.runAfter(0, internal.emails.notifyOwner, args)` after the insert (action vs mutation: mutations can't  make external API calls; actions can; scheduling lets the form return fast while email goes out async)

### 2c. Google Business Profile

Not created. Required for `sameAs` in LocalBusiness schema and (separately) for local-pack rankings. Requires a verifiable business address. Client task.

---


---

## Project pointers

- **GitHub:** `Robo8852/ap-landscaping` — **public repo**, push to `main` auto-deploys
- **Vercel:** `leo-reyes-projects/ap-landscaping`, CLI authed as `robo8852`
- **Convex prod:** `hallowed-dog-166` (US East)
- **Convex dev:** `artful-vole-550` (run `npx convex dev` to restore `.env.local`)
- **Convex team:** `leoreyes`
- **Phone (confirmed real, public):** `(941) 600-9879`
- **Brand:** marketing = "AYC Landscaping" (logo, headings, schema `name`); legal = "Alex y Carmen Landscaping" (footer copyright only)
