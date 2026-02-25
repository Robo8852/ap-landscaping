# How To Build This From Scratch

A plain-English walkthrough of every step, so you could rebuild this site (or one like it) from zero.

---

## Table of Contents

1. [The Big Picture](#the-big-picture)
2. [Step 1: Create the Next.js Project](#step-1-create-the-nextjs-project)
3. [Step 2: Install Dependencies](#step-2-install-dependencies)
4. [Step 3: Set Up the Brand (Colors, Fonts, Tokens)](#step-3-set-up-the-brand)
5. [Step 4: Understand the File Structure](#step-4-understand-the-file-structure)
6. [Step 5: The Layout — The Wrapper Around Everything](#step-5-the-layout)
7. [Step 6: The Page — Where Components Come Together](#step-6-the-page)
8. [Step 7: Build Each Component](#step-7-build-each-component)
9. [Step 8: The "use client" Rule](#step-8-the-use-client-rule)
10. [Step 9: How Tailwind Custom Colors Work](#step-9-how-tailwind-custom-colors-work)
11. [Step 10: How Framer Motion Animations Work](#step-10-how-framer-motion-animations-work)
12. [Step 11: How shadcn/ui Components Work](#step-11-how-shadcnui-components-work)
13. [Step 12: Images and Static Files](#step-12-images-and-static-files)
14. [Step 13: Mobile-First Design Patterns](#step-13-mobile-first-design)
15. [Step 14: Run It](#step-14-run-it)
16. [The Full Component Inventory](#the-full-component-inventory)
17. [Vite vs Next.js — What Actually Changes](#vite-vs-nextjs)

---

## The Big Picture

This is a **single-page marketing website**. There's one URL (`/`), and users scroll through sections: hero, services, about, testimonials, contact, etc. Every section is its own React component file. The main page file just stacks them top-to-bottom.

**Tech stack:**
- **Next.js 16** — the framework (handles routing, server rendering, bundling)
- **React 19** — the UI library (components, state, events)
- **TypeScript** — type-safe JavaScript
- **Tailwind 4** — utility-class CSS (no separate CSS files needed)
- **Framer Motion** — animations
- **shadcn/ui** — pre-built UI components (buttons, sheets, etc.)
- **Lucide React** — SVG icon library
- **Convex** — backend/database (installed, not heavily used yet)

---

## Step 1: Create the Next.js Project

```bash
npx create-next-app@latest ap-landscaping
```

During setup, you say yes to: TypeScript, Tailwind CSS, App Router, and `src/` directory. This gives you a working project with all the boilerplate already configured.

---

## Step 2: Install Dependencies

npm installs everything the project needs. Here's what we added beyond the defaults:

```bash
# Animation library
npm install framer-motion

# Icon library
npm install lucide-react

# shadcn/ui prerequisites (for pre-built components)
npm install class-variance-authority clsx tailwind-merge radix-ui

# shadcn CLI (for generating components)
npx shadcn@latest init

# Backend (for future use)
npm install convex

# Animation CSS helpers
npm install -D tw-animate-css
```

**What each one does:**
- `framer-motion` — makes things fade in, slide up, hover-scale, etc.
- `lucide-react` — provides icons like `<Phone />`, `<MapPin />`, `<Menu />` as React components
- `class-variance-authority` (CVA) — lets you define button/component "variants" (different sizes, colors)
- `clsx` + `tailwind-merge` — utilities for combining Tailwind classes without conflicts
- `radix-ui` — the accessibility layer under shadcn/ui components
- `convex` — real-time database (ready for when the contact form needs to save data)

---

## Step 3: Set Up the Brand

This is where a generic Next.js project becomes **your** site. Two things to configure:

### 3a. Custom Colors in `globals.css`

Open `src/app/globals.css`. Inside the `@theme inline` block, we defined custom color tokens:

```css
@theme inline {
  --color-ap-forest: #006B3D;   /* Dark green — primary brand color */
  --color-ap-green: #4CAF50;    /* Medium green — buttons, accents */
  --color-ap-lime: #7CB342;     /* Light green — highlights, hover states */
  --color-ap-sand: #D4C5A9;     /* Warm tan — borders, subtle backgrounds */
  --color-ap-warm: #F5F0E8;     /* Off-white — page background */
  --color-ap-bark: #3E2723;     /* Dark brown — heading text */
  --color-ap-stone: #78716C;    /* Gray — body text */
  --font-sans: var(--font-outfit);
  --font-serif: var(--font-dm-serif);
}
```

Once defined here, you can use them anywhere as Tailwind classes:
- `bg-ap-forest` — forest green background
- `text-ap-bark` — dark brown text
- `border-ap-sand` — tan border
- `hover:bg-ap-lime` — lime green on hover

### 3b. Custom Fonts in `layout.tsx`

```tsx
import { DM_Serif_Display, Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});
```

Next.js downloads these fonts at build time (no flicker, no external requests). The `variable` names connect to the CSS tokens above. Then in the `<body>` tag:

```tsx
<body className={`${outfit.variable} ${dmSerif.variable} font-sans antialiased`}>
```

- `font-sans` = Outfit (body text, set in globals.css)
- `font-serif` = DM Serif Display (headings, used per-element)

---

## Step 4: Understand the File Structure

```
ap-landscaping/
├── public/                      ← Static files (images, logo, favicon)
│   ├── images/
│   │   ├── hero.jpeg
│   │   ├── service-lawn.jpeg
│   │   ├── service-design.jpeg
│   │   └── ... (6 service images)
│   └── logo.png
├── src/
│   ├── app/                     ← Next.js routing layer
│   │   ├── layout.tsx           ← Global wrapper (fonts, metadata, <html>)
│   │   ├── page.tsx             ← The homepage (assembles all components)
│   │   ├── globals.css          ← Tailwind config + brand tokens
│   │   └── favicon.ico
│   ├── components/              ← All the UI pieces
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── trust-bar.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   ├── cta.tsx
│   │   ├── testimonials.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   └── ui/                  ← shadcn/ui generated components
│   │       ├── button.tsx
│   │       ├── sheet.tsx
│   │       └── navigation-menu.tsx
│   └── lib/
│       └── utils.ts             ← Helper: cn() function for merging classes
├── package.json                 ← Dependencies and scripts
├── next.config.ts               ← Next.js configuration
└── tsconfig.json                ← TypeScript configuration
```

**Key insight:** In Next.js, the `app/` folder IS your routing. `app/page.tsx` = the `/` route. If you made `app/about/page.tsx`, that would be the `/about` route. We only have one page because it's a single-page site.

---

## Step 5: The Layout — The Wrapper Around Everything

`src/app/layout.tsx` wraps every page on the site. It's where you put things that should appear on ALL pages:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

`{children}` is whatever page content Next.js is rendering. For our site, that's always `page.tsx` since we only have one page.

This file also sets the page `<title>` and `<meta>` description:

```tsx
export const metadata: Metadata = {
  title: "AP Landscaping",
  description: "Professional landscaping services",
};
```

---

## Step 6: The Page — Where Components Come Together

`src/app/page.tsx` is the actual homepage. It's beautifully simple — just imports and stacking:

```tsx
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import About from "@/components/about";
import CTA from "@/components/cta";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-ap-warm pb-24 md:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

That's it. Each component is self-contained — it has its own layout, data, and styling. The page just decides the order.

Notice `pb-24 md:pb-0` — that's 6rem of bottom padding on mobile (to make room for the sticky bottom CTA bar) and zero padding on desktop.

---

## Step 7: Build Each Component

Every section follows the same pattern:

1. **Create a file** in `src/components/` (e.g., `hero.tsx`)
2. **Export a default function** that returns JSX (HTML-like syntax)
3. **Import it** in `page.tsx`

Here's the simplest component as an example — the Trust Bar:

```tsx
import { Shield, Star, ThumbsUp } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4">
          <div className="bg-ap-forest/10 p-3 rounded-xl text-ap-forest">
            <Shield size={28} />
          </div>
          <div>
            <h3 className="font-bold text-ap-bark text-lg">Licensed & Insured</h3>
            <p className="text-ap-stone text-sm">Full coverage for your peace of mind.</p>
          </div>
        </div>
        {/* ... two more items ... */}
      </div>
    </section>
  );
}
```

**Notice:** No `"use client"` at the top. This component has no interactivity (no clicks, no state, no animations), so it runs as a **server component** — rendered on the server, sent as HTML. Fastest possible delivery.

---

## Step 8: The "use client" Rule

This is the **biggest difference between Vite and Next.js**.

In **Vite**, everything runs in the browser. You can use `useState`, `onClick`, `useEffect`, animations — whatever, wherever.

In **Next.js**, components are **server components by default**. They render on the server and arrive as static HTML. This is faster but it means:

- **No `useState` or `useEffect`** (those are browser-only)
- **No `onClick` or event handlers** (those need a browser)
- **No Framer Motion** (animations need a browser)

**The fix:** Add `"use client"` as the very first line of any component that needs browser features.

Here's how it breaks down in our site:

| Component | Has `"use client"`? | Why? |
|---|---|---|
| `trust-bar.tsx` | No | Pure HTML, no interactivity |
| `hero.tsx` | Yes | Uses Framer Motion animations |
| `navbar.tsx` | Yes | Uses `useState` for scroll detection and mobile menu |
| `services.tsx` | Yes | Uses Framer Motion `whileInView` |
| `about.tsx` | Yes | Uses Framer Motion animations |
| `cta.tsx` | Yes | Uses Framer Motion animations |
| `testimonials.tsx` | Yes | Uses Framer Motion animations |
| `contact.tsx` | Yes | Uses Framer Motion animations |
| `footer.tsx` | Yes | (Could be server component, but marked client) |

**Rule of thumb:** If a component needs to respond to the user or animate, it needs `"use client"`. If it's just displaying static content, leave it as a server component.

---

## Step 9: How Tailwind Custom Colors Work

Instead of writing CSS like this:

```css
.hero-button {
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
}
```

Tailwind lets you write it inline:

```tsx
<a className="bg-ap-green text-white px-8 py-4 rounded-full">
  Get Your Free Estimate
</a>
```

The `ap-green` part works because we defined `--color-ap-green: #4CAF50` in `globals.css`. Tailwind automatically creates `bg-ap-green`, `text-ap-green`, `border-ap-green`, etc.

**Common patterns we use:**

```
bg-ap-forest          → dark green background
bg-ap-forest/10       → dark green at 10% opacity (for tinted backgrounds)
text-ap-bark          → dark brown text (headings)
text-ap-stone         → gray text (body copy)
hover:bg-ap-lime      → lime green on hover
border-ap-sand        → tan border
bg-ap-warm            → warm off-white page background
```

**Responsive prefixes:**
```
grid-cols-1 md:grid-cols-3    → 1 column on mobile, 3 on tablet+
hidden md:flex                → hidden on mobile, flex on desktop
text-3xl md:text-5xl          → smaller text on mobile, larger on desktop
py-3 md:py-5                  → less padding on mobile
```

---

## Step 10: How Framer Motion Animations Work

Framer Motion makes elements animate when they appear. Instead of a regular `<div>`, you use `<motion.div>`:

```tsx
import { motion } from "framer-motion";

// Fade in + slide up when the element scrolls into view
<motion.div
  initial={{ opacity: 0, y: 20 }}       // Start: invisible, 20px below
  whileInView={{ opacity: 1, y: 0 }}    // End: fully visible, normal position
  viewport={{ once: true }}              // Only animate once (don't re-trigger)
  transition={{ delay: i * 0.1 }}        // Stagger cards by 0.1s each
>
  {/* content */}
</motion.div>
```

**Patterns we use:**

1. **Fade up on scroll** (`whileInView`) — used on services cards, about section, testimonials
2. **Fade in on page load** (`animate`) — used on the hero section
3. **Slide from left/right** (`x: -30` / `x: 30`) — used on the about and contact split layouts
4. **Animate presence** (`AnimatePresence`) — used for the mobile menu open/close
5. **Hover effects** — done with plain Tailwind (`hover:-translate-y-1`, `hover:shadow-xl`)

---

## Step 11: How shadcn/ui Components Work

shadcn/ui is different from most libraries. Instead of importing from `node_modules`, it **generates component files directly into your project** at `src/components/ui/`.

```bash
npx shadcn@latest add button
```

This creates `src/components/ui/button.tsx` — a file YOU own and can modify. It uses:
- **CVA** (class-variance-authority) for defining variants (sizes, styles)
- **Radix UI** underneath for accessibility (keyboard navigation, ARIA attributes)
- **cn()** helper to merge Tailwind classes safely

The Button component supports variants:
```tsx
<Button variant="default">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
```

In practice, we mostly used custom `<a>` tags with Tailwind classes for our CTAs instead of the Button component, because our designs were very specific. But the Button is there for any standard UI needs.

---

## Step 12: Images and Static Files

Anything in the `public/` folder is served directly. No imports needed — just reference the path:

```tsx
<img src="/images/hero.jpeg" alt="Beautiful landscaped garden" />
<img src="/logo.png" alt="AP Landscaping logo" />
```

Our image structure:
```
public/
├── logo.png                    ← Circular AP logo (transparent background)
└── images/
    ├── hero.jpeg               ← Full-width hero background
    ├── service-lawn.jpeg       ← Service card images
    ├── service-design.jpeg
    ├── service-hardscape.jpeg
    ├── service-tree.jpeg
    ├── service-removal.jpeg
    └── service-cleanup.jpeg
```

These are real AI-generated images, not stock placeholders (except the about section, which still uses a picsum placeholder).

---

## Step 13: Mobile-First Design Patterns

Since this is a local business site, most visitors will be on phones. Several patterns make this work:

### Responsive grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```
1 column on phone → 2 on tablet → 3 on desktop.

### Hide/show elements by screen size
```tsx
{/* Desktop top bar — hidden on mobile */}
<div className="hidden md:flex bg-ap-forest ...">

{/* Mobile bottom CTA bar — hidden on desktop */}
<div className="md:hidden fixed bottom-0 ...">
```

### Sticky mobile bottom bar
The navbar includes a fixed bottom bar on mobile with "Call Now" and "Free Quote" buttons — always one tap away:
```tsx
<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white ...">
  <a href="tel:5551234567">Call Now</a>
  <a href="#contact">Free Quote</a>
</div>
```

### Safe area padding
For phones with gesture bars (notch/home indicator), we added:
```css
.safe-bottom {
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}
```

### Touch targets
All tappable elements have `min-h-[44px]` and `min-w-[44px]` — Apple's recommended minimum touch target size.

---

## Step 14: Run It

```bash
# Development (with hot reload — changes appear instantly)
npm run dev

# Production build (optimized, minified)
npm run build

# Start the production build
npm start
```

`npm run dev` starts a local server at `http://localhost:3000`. Every time you save a file, the page updates automatically.

---

## The Full Component Inventory

| Component | File | What it does |
|---|---|---|
| **Navbar** | `navbar.tsx` | Top contact bar (desktop), sticky nav with logo + links, mobile hamburger menu, sticky bottom CTA bar (mobile) |
| **Hero** | `hero.tsx` | Full-bleed background image, gradient overlay, headline, two CTA buttons |
| **Trust Bar** | `trust-bar.tsx` | Floating white card overlapping the hero, 3 trust items with icons |
| **Services** | `services.tsx` | Section header + 6-card grid with images, descriptions, and "Learn more" links |
| **About** | `about.tsx` | Split layout: image with experience badge (left) + text with trust checklist (right) |
| **CTA** | `cta.tsx` | Dark green banner with decorative blur circles, headline, two buttons |
| **Testimonials** | `testimonials.tsx` | 3-card grid with quote icons, star ratings, review text, avatar initials |
| **Contact** | `contact.tsx` | Split layout: contact info with icons (left) + form with service dropdown (right) |
| **Footer** | `footer.tsx` | 4-column grid: branding, quick links, services, social links + copyright bar |

---

## Vite vs Next.js — What Actually Changes

When we took designs built in Vite and brought them into this project, here's specifically what changed:

| Aspect | Vite | Next.js |
|---|---|---|
| **First line of file** | Nothing special | `"use client"` needed for interactive components |
| **Routing** | Manual (React Router) | File-based (just create files in `app/`) |
| **Page wrapper** | You build `App.tsx` yourself | `layout.tsx` handles it |
| **Fonts** | `<link>` tags or CSS imports | `next/font/google` (auto-optimized) |
| **Images** | Regular `<img>` with relative paths | Same, but from `public/` folder |
| **Component code** | Standard React | **Identical** — React is React |
| **Tailwind classes** | Same syntax | Same syntax |
| **Framer Motion** | Works directly | Works, but needs `"use client"` |
| **Build output** | Static HTML + JS bundle | Server-rendered HTML + JS hydration |

**The bottom line:** The React code inside components is the same. The framework wrapper around them is different. That's why the piece-by-piece approach worked — you handed over the rooms, and we just reconnected the plumbing.

---

*Built with the bi-directional prompting workflow: design in any tool, paste the code, adapt to project tokens, ship.*
