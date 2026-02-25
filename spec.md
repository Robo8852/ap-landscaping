# AP Landscaping — Website Spec

## Overview
Local landscaping company website. **Mobile-first** design priority — most traffic will be phone users looking to call or request a quote.

## Brand Identity
- **Logo:** Circular mark with "AP" (leaf integrated into the "A"), "LANDSCAPING" below. Two-tone green on transparent background. Located at `/public/logo.png`.
- **Typography:**
  - Display/headings: DM Serif Display (serif, warm, editorial)
  - Body/UI: Outfit (clean sans-serif, modern)
- **Color palette (defined as Tailwind tokens in globals.css):**
  - `ap-forest`: #006B3D (dark green — primary brand)
  - `ap-green`: #4CAF50 (medium green — secondary brand)
  - `ap-lime`: #7CB342 (accent green — highlights)
  - `ap-sand`: #D4C5A9 (warm neutral — borders, subtle backgrounds)
  - `ap-warm`: #F5F0E8 (warm off-white — page backgrounds)
  - `ap-bark`: #3E2723 (dark brown — text, headers)
  - `ap-stone`: #78716C (muted — secondary text)

## Tech Stack
- Next.js 16 (App Router, `src/` directory)
- React 19
- TypeScript 5 (strict mode)
- Convex (backend database + real-time subscriptions)
- Tailwind CSS 4
- shadcn/ui (component library)
- Framer Motion (animations)
- Lucide React (icons)

## Design Principles
- **Mobile-first:** All components designed for phone viewport first, then scaled up to tablet/desktop.
- **Avoid generic AI aesthetics:** No stock photo heroes with white overlay text, no cookie-cutter service card grids, no template carousel testimonials.
- **Personality over polish:** Asymmetry, bold typography, intentional motion. Should look like a real designer built it for this specific business.
- **Conversion-focused:** Phone number and "Get a Free Quote" CTA must be immediately accessible, especially on mobile.
- **SEO-ready:** Service area pages, proper semantic HTML, structured data considerations.

## Site Sections (to be designed)
1. **Navbar** — 4 style mockups built (see implementation plan for status)
2. Hero section
3. Services overview
4. About / story
5. Gallery / portfolio
6. Testimonials
7. Service areas (SEO)
8. Contact / quote form
9. Footer

## Nav Links
Home, Services, About, Gallery, Contact

## Key CTAs
- "Get a Free Quote" (primary)
- "Call Now" / phone number: (555) 123-4567

## Approach: Bi-Directional Prompting
Building this iteratively — each section gets multiple style options presented visually in the browser, user picks a direction, then we refine and move on. Avoids the "generic mean" that LLMs default to.

## Source of Truth Rule
Any code or markup the user pastes directly into the conversation is the **source of truth** for that section. Adapt it to use project tokens/conventions (Tailwind brand colors, fonts, etc.) but preserve the structure, layout decisions, and intent. Do not redesign or second-guess pasted code — integrate it.
