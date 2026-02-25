# AP Landscaping — Iteration Log

## How We Got Here

### The Challenge
User's friend (LLM researcher) challenged them to use Claude to build a frontend website using **bi-directional prompting**. The core problem: LLMs operate on a mean, which produces generic websites. The goal is to push toward the user's specific **edge case** — a real local landscaping business that doesn't look like every other AI-generated site.

### Step 1: Image First
User wiped the entire Next.js project clean on purpose — blank slate. Started by dropping their logo into the repo: a circular mark with "AP" (leaf in the A), "LANDSCAPING" below, two-tone green, transparent background. This became the design anchor.

### Step 2: Text Stack
User provided their tech stack:
- Next.js 16, React 19, TypeScript 5 (strict), Convex, Tailwind CSS 4, Framer Motion, Lucide React
- Added shadcn/ui shortly after

### Step 3: Bi-Directional Prompting Strategy
Instead of building the whole site at once (which guarantees generic output), we agreed to go **section by section**:
1. List what sections the site needs
2. Start with the navbar — nail the style before moving on
3. For each section: present multiple visual options → user picks → refine → next section

This forces the LLM off the mean by requiring user input at every decision point rather than letting it auto-complete an entire generic site.

### Step 4: Navbar Style Options
Discussed 4 navbar directions:
1. **Floating/Glass** — Detached, backdrop blur, premium feel
2. **Solid Bar** — Full-width, classic, well-executed simplicity
3. **Split Center** — Logo centered, links split either side
4. **Minimal Top + Sticky CTA** — Utility bar (phone, hours) + persistent quote button

User wanted to **see them visually**, not just read descriptions. So instead of linking to external references, we built all 4 as live routes in the project.

### Step 5: Scaffolding + Building Mockups
- Scaffolded Next.js project with full stack
- Configured brand colors as Tailwind tokens (`ap-forest`, `ap-green`, `ap-lime`, `ap-sand`, `ap-warm`, `ap-bark`, `ap-stone`)
- Chose fonts: DM Serif Display (display) + Outfit (body) — intentionally avoiding generic Inter/Roboto
- Built all 4 navbar variants with:
  - Scroll-triggered transitions
  - Framer Motion animations
  - shadcn Sheet mobile menus
  - Shared demo content for scroll testing
- Index page at `/` links to all 4 demos

### Step 6: Mobile-First Realization
User flagged that the site needs to be **mobile-first** — most traffic for a local landscaping company comes from phones. The current mockups were built desktop-first with mobile as an afterthought. This needs to be corrected.

### Step 7: Context Preservation
Running low on context window. Created:
- `spec.md` — Full brand/tech/design spec
- `implementation-plan.md` — Phased plan with status
- `iteration-log.md` — This file (how we got here)
- Memory file for auto-loading in new sessions

## Key Insight: The Bi-Directional Method
The whole point is that generic AI output comes from the LLM filling in gaps with statistical averages. By forcing a loop — **present options → human picks → refine** — at every design decision, you pull the output toward the human's actual taste instead of the model's default. The image (logo) and explicit brand tokens further constrain the output space away from generic.

## What's Next
1. Rebuild navbar mockups mobile-first (375px starting point)
2. User picks a navbar style
3. Move to hero section with same bi-directional approach
4. Continue through all site sections
