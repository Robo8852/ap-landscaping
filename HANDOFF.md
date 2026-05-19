# Handoff — Next Session

Resume after commit `aeba4a3` (contact page server/client split + privacy page). Site is live at `https://ap-landscaping.vercel.app` until domain registration (§3a) completes.

---

## What shipped since this doc was last updated

- `d41cd4a` — Quote form wired to Convex + Vercel production deploy
- `dfda747` — Quote submissions trigger Resend email to owner (initial wiring)
- `3cc4f02` — Resend test mode: emails route to personal inbox until domain is verified
- `0d9cfba` — Centralize `SITE_URL` and migrate domain to `ayclandscaping.com`
- `cfb7f05` — New `specs/` map (README + domains + seo-metadata) + finish AYC brand rename in planning docs
- `aeba4a3` — Contact page split into server + client (enables canonical metadata) + new `/privacy` page

---

## Read first — working tree state

Single meaningful uncommitted change:

```
 D convex/emails.ts
 M convex/quotes.ts
```

The Resend email wiring is **stripped in the working tree** but still functional at HEAD. Production keeps sending emails to `leoreyes@costadelsolweb.com` (test mode) because deployments read from HEAD. The strip is intentional — it'll be replaced via the agency-route Resend setup (§3b + §3c). Do not commit this strip without redoing the wiring first.

Untracked planning/config files (`!IMPORTANT.md`, `.agents/`, `contract.md`, `skills-lock.json`, `spec-maps-what-where-how.docx`) — leave alone.

---

## 1. Un-blocked work — can ship anytime

### 1a. Form spam protection (~20 lines)

**Status:** `convex/quotes.ts:submitQuote` is a public mutation with no rate limit, no captcha, no honeypot. A public quote-form endpoint will eventually attract bot submissions.

**Minimal fix:**
- Honeypot — add a hidden `website` (or `company`) input to the form. If a submission has a non-empty value for it, the mutation silently no-ops. Bots auto-fill all fields; humans don't see it. ~10 lines total.
- Optional follow-up: per-IP rate limit via `@convex-dev/ratelimiter`. Only add if abuse actually appears.

Start with honeypot. Skip the rate limit unless needed.

### 1b. Privacy notice (resolved via /privacy page)

**Status:** Done. `/privacy` page (`src/app/privacy/page.tsx`) shipped in `aeba4a3` covers what's collected, what it's used for, and how to request deletion.

**Remaining follow-up:** verify the footer or contact page links to `/privacy` so it's discoverable. The page exists at the URL but may not be linked from anywhere yet.

---

## 2. Blocked on client-side decisions

### 2a. Domain (decision resolved, registration pending)

Domain decision resolved to `ayclandscaping.com` (was: `acplandscaping.com`, `bradentonlandscaping.com`). Registration + Vercel setup is §3a.

Follow-on work: domain registration (§3a), Resend redo (§3b + §3c), GMB schema (§2c).

### 2b. Form notification emails

**Status:** Wired and functional at HEAD. Quote submissions trigger a Resend email to the owner via `convex/emails.ts:notifyOwner`. Currently routes to `leoreyes@costadelsolweb.com` from `onboarding@resend.dev` (Resend's test sender — works because the AYC domain isn't verified in Resend yet).

**Production-grade redo planned:** see §3b + §3c. Working tree currently has the wiring stripped pending the redo; production is unaffected (deploys from HEAD).

### 2c. Google Business Profile

Not created. Required for `sameAs` in LocalBusiness schema and (separately) for local-pack rankings. Requires a verifiable business address. Client task.

---

## 3. Deferred this session

### 3a. Domain registration + Vercel DNS

Decision is resolved (§2a) but `ayclandscaping.com` is not yet registered. When ready:

1. Register `ayclandscaping.com` — Vercel directly, or external registrar (Cloudflare / Porkbun / Namecheap) for portability
2. Add domain to Vercel project → Settings → Domains
3. DNS at the registrar:
   - Apex: A record → `76.76.21.21`
   - `www`: CNAME → `cname.vercel-dns.com`
   (or delegate nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`)
4. Wait for SSL auto-provision; configure canonical `www → apex` to match `SITE_URL`

After this is live, update line 3 of this doc (still points at `ap-landscaping.vercel.app`).

### 3b. Resend setup via agency-route pattern

Goal: one Resend account, multiple verified client domains. For AYC:

1. Add `ayclandscaping.com` as a sending domain in Resend
2. Add DNS at registrar: SPF, DKIM (2× CNAME), return-path
3. Generate a project-specific API key (don't reuse a global key)
4. Pick from-address — e.g. `quotes@ayclandscaping.com`
5. Get owner's real email (replaces `leoreyes@costadelsolweb.com` test placeholder)
6. `npx convex env set RESEND_API_KEY ...` + `OWNER_EMAIL ...`

### 3c. Re-wire quote-form email pipeline

After 3a + 3b: restore the wiring.

- `convex/emails.ts` exists at HEAD; currently deleted in working tree
- `convex/quotes.ts` at HEAD still schedules `internal.emails.notifyOwner`; working tree has the line stripped

Path: `git restore --source=HEAD -- convex/emails.ts convex/quotes.ts`, then edit `emails.ts` to swap `OWNER_INBOX` and `FROM_ADDRESS` to the verified setup. Current committed wiring still ships from production (sends test emails to `leoreyes@costadelsolweb.com`) so no rush.

---

## Project pointers

- **GitHub:** `Robo8852/ap-landscaping` — **public repo**, push to `main` auto-deploys
- **Vercel:** `leo-reyes-projects/ap-landscaping`, CLI authed as `robo8852`
- **Convex prod:** `hallowed-dog-166` (US East)
- **Convex dev:** `artful-vole-550` (run `npx convex dev` to restore `.env.local`)
- **Convex team:** `leoreyes`
- **Phone (confirmed real, public):** `(941) 600-9879`
- **Brand:** marketing = "AYC Landscaping" (logo, headings, schema `name`); legal = "Alex y Carmen Landscaping" (footer copyright only)
