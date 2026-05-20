# Implementation Plan — AYC Landscaping Pre-Launch

Working doc for the domain → email → launch sequence. Mirrors the session task tracker; edit freely as we go.

Status: `[ ]` pending · `[~]` in progress · `[x]` done · `[!]` blocked

---

## Snapshot (2026-05-19)

Done this session:
- §1 Domain registered (ICANN-verified, attached to `ap-landscaping` project, auto-renews 2027-05-19, WHOIS privacy on, billing address fixed)
- §2 DNS + TLS verified — apex resolves to Vercel IPs (`64.29.17.65`, `216.198.79.1`), HTTP/2 200, HSTS active, `noindex, nofollow` confirmed on new domain
- §3 `www.ayclandscaping.com` explicit-attached in Vercel as 308 permanent redirect to apex (was 307 via auto-handling); curl confirms `HTTP/2 308`
- §4 HANDOFF.md updated to reflect live apex domain
- §5 Business Gmail created — `ayclandscaping@gmail.com` (free Gmail, interim; Workspace migration deferred until revenue justifies $7/mo)
- §6 Resend domain auth complete — DNS verified, API key generated, from-address = `quotes@ayclandscaping.com`
- §7 Email wiring restored — `convex/emails.ts` back from HEAD with `OWNER_INBOX` now reading `process.env.OWNER_EMAIL` (fallback to `ayclandscaping@gmail.com`); `convex/quotes.ts` schedules `notifyOwner` after insert with honeypot short-circuit intact; prod env vars set on `hallowed-dog-166`; deployed; both end-to-end tests passed (real submission → email landed; honeypot mutation call → no email, no row)
- §8 Honeypot wired (`website` field in form + early-return in `submitQuote` mutation)
- §9 Privacy link verified — footer Quick Links + bottom bar both link `/privacy`; page returns 200 on apex

In progress / partial:
- §5 recovery: recovery **email** set to Leo's personal address (phone skipped due to Google reuse cap). 2FA still off — open follow-up before launch.

Pending — your action:
- §10 Flip `noindex` when launch-ready.

Working tree (uncommitted):
- `HANDOFF.md`, `IMP.md`, `src/app/contact/ContactForm.tsx`, `convex/quotes.ts`, `convex/emails.ts` (all modified)

---

## 1. Register `ayclandscaping.com` via Vercel UI  `[x]`

**Owner:** Leo (paid action, UI clicks)

Steps:
1. Open `vercel.com/leo-reyes-projects/ap-landscaping → Settings → Domains`
2. Click **Buy**, search `ayclandscaping.com`
3. Pay (~$20/yr)
4. At checkout, confirm:
   - Auto-renew is **ON**
   - WHOIS privacy is **ON** (free with Vercel)
5. After purchase: domain auto-attaches to this project. When prompted "which is primary?" → pick **apex** (`ayclandscaping.com`), `www` redirects to apex.

Definition of done: domain shows in Project → Domains list, status "Valid Configuration."

---

## 2. Verify DNS resolves + SSL provisions  `[x]`

**Owner:** Claude (CLI checks)

Steps:
1. `dig ayclandscaping.com +short` → expect Vercel IPs (e.g. `76.76.21.21`)
2. `curl -sI https://ayclandscaping.com/` → expect `HTTP/2 200`, valid TLS cert
3. `curl -s https://ayclandscaping.com/ | grep -oE 'name="robots"[^>]*'` → confirm `noindex, nofollow` still present
4. Pages render correctly (visual spot-check by Leo)

Definition of done: TLS valid, site loads on apex, noindex confirmed on new domain.

---

## 3. Set apex as canonical, `www` → apex 308  `[x]` complete 2026-05-19

**Owner:** Leo (Vercel UI) + Claude (verify)

Done: `www.ayclandscaping.com` explicit-attached in Vercel project Domains as a 308 permanent redirect to `ayclandscaping.com`. `curl -sI https://www.ayclandscaping.com/` returns `HTTP/2 308` with `location: https://ayclandscaping.com/`. `SITE_URL` in `src/lib/site.ts` is `https://ayclandscaping.com` — matches canonical.

Trap avoided: Vercel's "Add Existing" dialog offers a top-level checkbox labeled "Redirect ayclandscaping.com → www.ayclandscaping.com (Recommended)" that would flip canonical to www. Leave that **unchecked** for apex-canonical setups.

---

## 4. Update HANDOFF.md line 3  `[x]`

**Owner:** Claude

Done: HANDOFF.md line 3 now reads "Site is live at `https://ayclandscaping.com` (apex canonical, `www` 307s to apex). `noindex, nofollow` is active until launch-ready (see IMP.md §10)."

---

## 5. Create dedicated business Gmail  `[x]`

**Owner:** Leo (account creation)

Done 2026-05-19: `ayclandscaping@gmail.com` created as free Gmail (not Workspace). Leo's phone was at Google's reuse cap, so account was created without phone verification. Workspace migration ($7/mo, gives `quotes@ayclandscaping.com` as a real inbox + alias capability) deferred until revenue justifies it.

**Follow-up still required on this account:**
- ✅ Recovery email set (Leo's personal Gmail) 2026-05-19
- Save credentials in password manager
- Decide later who holds 2FA (currently no 2FA — add before launch)

This account will:
- Own the Google Business Profile (parking-lot item)
- Receive Resend quote notifications (set as `OWNER_EMAIL` in Convex env in §7)

Definition of done: ✅ account created, address = `ayclandscaping@gmail.com`. Recovery + 2FA are open follow-ups before going live.

---

## 6. Resend domain auth: SPF + DKIM + DMARC  `[x]` complete 2026-05-19

Done:
- 4 DNS records in Vercel (DKIM TXT, SPF MX, SPF TXT, DMARC TXT)
- Resend domain `ayclandscaping.com` status = **Verified**
- API key generated in Resend (sending-access scope, restricted to ayclandscaping.com)
- From-address chosen: `quotes@ayclandscaping.com`

Sidebar follow-up (not blocking): existing Resend `test` key has Full access + recent activity — delete or downgrade post-launch once we confirm it's not powering anything live.

**Owner:** Leo (Resend dashboard + Vercel DNS) + Claude (verify)

Steps:
1. Add `ayclandscaping.com` as sending domain in Resend
2. Resend gives 3–4 DNS records (SPF TXT, DKIM CNAME ×2, return-path)
3. Add records in Vercel DNS panel (Project → Domains → ayclandscaping.com → DNS)
4. **Don't skip DMARC** — add `_dmarc` TXT: `v=DMARC1; p=quarantine; rua=mailto:<owner_email>`
5. Wait for Resend to verify (5–30 min)
6. Generate project-specific API key (not a global one)
7. Pick from-address: `quotes@ayclandscaping.com`

Definition of done: Resend shows domain "Verified," API key saved, from-address chosen.

---

## 7. Restore email wiring (HANDOFF §3c)  `[x]` complete 2026-05-19

**Owner:** Claude (with Leo's confirmation on env vars)

Steps:
1. `git restore --source=HEAD -- convex/emails.ts convex/quotes.ts` — brings back the stripped wiring
2. Edit `convex/emails.ts`:
   - Swap `OWNER_INBOX` → real owner inbox (business Gmail from #5)
   - Swap `FROM_ADDRESS` → `quotes@ayclandscaping.com`
3. Set Convex env vars:
   - `npx convex env set RESEND_API_KEY <key-from-#6>`
   - `npx convex env set OWNER_EMAIL <business-gmail-from-#5>`
4. Deploy
5. Submit test quote on production form → verify owner receives email from `quotes@ayclandscaping.com`
6. **Honeypot regression test** (added by §8): in browser DevTools console, run
   `document.querySelector('input[name=website]').value = 'spam'`
   then submit. Expect: UI shows success, but no DB row created and **no email arrives**. The early `return null` in `submitQuote` must short-circuit before email send.

Definition of done: end-to-end test passes (form submission → email lands in business Gmail) AND honeypot regression test passes (filled honeypot = no email, no DB write).

---

## 8. Add honeypot to quote form (HANDOFF §1a)  `[x]`

**Owner:** Claude

Steps:
1. Add hidden `website` (or `company`) input to quote form in `src/app/contact/ContactForm.tsx`. CSS-hide it (`aria-hidden`, `tabindex="-1"`, off-screen positioning).
2. In `convex/quotes.ts:submitQuote`, accept the new arg. If non-empty, silently return success without DB write or email.
3. ~10 lines total.

Skip rate limiter unless real abuse appears.

Definition of done: submission with honeypot filled does nothing visible to "user"; submission with honeypot empty works normally.

---

## 9. Verify `/privacy` is linked from footer/contact  `[x]`

**Owner:** Claude

Per yesterday's session, footer Quick Links + footer bottom-bar both got `/privacy` links. Worth one more pass to confirm.

Steps:
1. Read `src/components/footer.tsx` — confirm `<Link href="/privacy">` in Quick Links list and bottom-bar
2. Read `src/app/contact/page.tsx` — check if contact page also wants a privacy link (likely not — footer is enough)

Definition of done: privacy is reachable from every page via footer.

---

## 10. Flip `noindex` back to `true` when launch-ready  `[ ]`

**Owner:** Leo decides "when," Claude executes

Trigger: Leo's gut-check on "would I be proud if a Bradenton customer Googled us and clicked through right now?" is a confident yes.

Pre-launch checklist (suggested gates):
- [ ] All 10 tasks above (except #10 itself) done
- [ ] Owner has reviewed `/`, `/about`, `/services/*`, `/contact`, `/privacy`
- [ ] Real photos on services pages (if planned)
- [ ] GBP live (separately tracked)
- [ ] Phone number and address verified on the site

Steps:
1. Edit `src/app/layout.tsx:58-61`: `index: false, follow: false` → `index: true, follow: true`
2. Commit: "Enable indexing for launch"
3. Push → Vercel auto-deploys
4. Verify: `curl -s https://ayclandscaping.com/ | grep -oE 'name="robots"[^>]*'` → `index, follow`
5. Submit sitemap in Google Search Console (separate setup, may want to track)

Within days, Google starts crawling. First-page rankings come over weeks/months.

---

## Not yet in this plan (parking lot)

- **Google Business Profile setup** (HANDOFF §2c) — needs business Gmail (#5) first. Verifiable business address required. Drives local-pack rankings.
- **Google Search Console** — submit sitemap, verify domain ownership. Logical companion to #10.
- **Analytics** — Plausible or Umami (privacy-friendly, no cookie banner needed). Without it you launch blind.
- **Owner public-facing email** — separately from the recipient Gmail (#5), does owner want `alex@ayclandscaping.com` (Workspace $7/mo or Cloudflare Email Routing free)? Decide later.
- **JSX unescaped-entities cleanup** — ~25 `react/no-unescaped-entities` lint errors across ~24 files (apostrophes and quotes in JSX text). Not blocking `next build` (Next.js 15+ doesn't fail on lint by default), but they're real errors. Two paths: (a) fix them with `&rsquo;`/`&ldquo;`/`&rdquo;` for better typography, or (b) disable the rule project-wide if we don't care. Decide before launch so lint output is meaningful.
