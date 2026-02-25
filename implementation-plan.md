# AP Landscaping — Implementation Plan

## Current State
- Project scaffolded with full tech stack (Next.js 16, TS strict, Tailwind 4, shadcn, Framer Motion, Lucide, Convex installed)
- Brand colors and fonts configured in `globals.css` and `layout.tsx`
- 4 navbar style mockups built at `/navbar/floating`, `/navbar/solid`, `/navbar/split`, `/navbar/top-bar`
- Index page at `/` links to all 4 mockups
- Shared components: `demo-content.tsx` (placeholder page content), `mobile-nav.tsx` (Sheet-based mobile drawer)

## What Needs to Happen Next

### Phase 1: Navbar (COMPLETE)
**Final:** Top-bar style navbar at `src/components/navbar.tsx`. Green utility bar (desktop), sticky nav, mobile hamburger menu, sticky bottom CTA bar on mobile. Brand color `ap-forest` updated to `#006B3D`.

### Phase 2: Hero Section
- Present 3-4 hero style options (mobile-first)
- Consider: full-bleed image vs. illustration vs. gradient + typography-driven
- Must include CTA and phone number above the fold on mobile

### Phase 3: Services Section
- How to present service offerings without generic icon cards
- Consider: accordion, horizontal scroll, interactive grid

### Phase 4: Social Proof / Testimonials
- Avoid carousel cliché
- Consider: single featured review, quote wall, video testimonials

### Phase 5: Gallery / Portfolio
- Before/after comparisons
- Project showcases
- Mobile-friendly image viewing

### Phase 6: Service Areas (SEO)
- Individual pages per service area
- Local SEO structured data
- Map integration considerations

### Phase 7: Contact / Quote Form
- Convex-powered form submission
- Real-time confirmation
- Mobile-optimized form fields

### Phase 8: Footer
- Essential info, links, social
- Mobile: simplified, stacked

### Phase 9: SEO & Performance
- Meta tags, Open Graph
- Image optimization
- Core Web Vitals audit

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Navbar picker index (temporary)
│   ├── globals.css         # Brand tokens, Tailwind config
│   └── navbar/
│       ├── floating/page.tsx
│       ├── solid/page.tsx
│       ├── split/page.tsx
│       └── top-bar/page.tsx
├── components/
│   ├── demo-content.tsx    # Placeholder scroll content
│   ├── mobile-nav.tsx      # Shared mobile Sheet menu
│   └── ui/                 # shadcn components
│       ├── button.tsx
│       ├── sheet.tsx
│       └── navigation-menu.tsx
└── lib/
    └── utils.ts            # cn() utility
```

## Notes for Next Session
- Start by asking: "Which navbar style do you like?" or rebuild all 4 mobile-first
- Reference `spec.md` for brand details and design principles
- All brand colors are available as Tailwind classes: `bg-ap-forest`, `text-ap-green`, etc.
- The approach is bi-directional: present options → user picks → refine → next section
