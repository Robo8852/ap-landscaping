# AYC Landscaping — SEO/GEO Spec

## Goal
Maximize visibility in both traditional search (Google, Bing) and AI search engines (ChatGPT, Perplexity, Gemini, Copilot, Claude) for local landscaping searches in Manatee and Sarasota counties, FL.

## Brand / NAP
- **Name:** AYC Landscaping
- **Address:** ⚠️ TBD — owner to provide
- **Phone:** ⚠️ TBD — owner to provide (currently placeholder `(555) 123-4567`)
- **Domain:** ayclandscaping.com
- **Service area:** Bradenton, Ellenton, Palmetto, Sarasota, Venice, Osprey, FL

## Final State: What "Done" Looks Like

### robots.txt
- `User-agent: *` with `Allow: /`
- Explicit allow entries for all major AI bots: `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Googlebot`, `Bingbot`
- Sitemap URL present

### sitemap.xml
- All 19 pages included (already done)
- `<lastmod>` dates added to each URL

### Root Layout (`src/app/layout.tsx`)
- `LocalBusiness` schema type (not `LandscapingBusiness` — invalid Schema.org type)
- Real phone number in schema
- Real address in schema
- `sameAs` links added when Google Business / Yelp profiles exist
- `og:image` added (1200×630px image — use hero image)
- Twitter card meta tags added
- All brand references say "AYC Landscaping"

### FAQ Page (`src/app/faq/page.tsx`)
- `FAQPage` JSON-LD schema added — wraps all 10 existing Q&As
- This is the single highest-impact GEO fix (+40% AI citation visibility)

### Service Pages (all 6)
- `Service` JSON-LD schema on each page
- Schema includes: name, description, provider (AYC Landscaping), areaServed

### Service Area Pages (all 6 cities)
- `LocalBusiness` schema scoped to that city
- Each page links back to relevant service pages

### Cleanup
- `/navbar/floating`, `/navbar/solid`, `/navbar/split`, `/navbar/top-bar` routes either deleted or marked `noindex`

## GEO Optimization Principles Applied
Based on Princeton GEO research (9 methods):
- Answer-first structure on all content pages ✅ (already mostly done)
- Statistics included in FAQ answers where applicable
- FAQPage schema (+40% AI visibility)
- Authoritative, specific language (no filler)
- No keyword stuffing

## Keywords Targeted
| Keyword | Type |
|---------|------|
| landscaping Bradenton FL | primary geo |
| lawn care Bradenton FL | service + geo |
| lawn care Sarasota FL | service + geo |
| landscape design Bradenton | service + geo |
| hardscaping Sarasota FL | service + geo |
| tree removal Bradenton Florida | service + geo |
| landscaping company Manatee County | county-level |
| AYC Landscaping | branded |
