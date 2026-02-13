# WellVersed — Product & Website Plan

> AI-Powered UEFN Development Platform

---

## 1. Brand Identity

**Primary Name Options (in preference order):**
- **WellVersed** — Safest from copyright, strong wordplay on Verse (UEFN's scripting language), implies expertise
- fnForge — Catchy but "fn" ties directly to Fortnite branding, potential trademark risk
- FortniteForge — Almost certain trademark conflict with Epic Games

**Recommendation: WellVersed** — It's clever, defensible, and immediately signals Verse/UEFN expertise to the target audience without touching Epic's IP.

**Tagline Ideas:**
- "Your UEFN development team, on demand."
- "Ship better Fortnite experiences, faster."
- "The platform that understands your project."

**Visual Direction:**
- Dark-first design, light mode toggle
- Minimalist UI with subtle tech/gaming accents
- Accent color palette: electric blue or violet against dark charcoal (#0D0D0D / #1A1A2E)
- Monospace/code-forward typography for headings, clean sans-serif for body
- No cartoonish gaming aesthetics — professional tool, not a toy

---

## 2. Service Offering (Public-Facing Language)

**What WellVersed does (how we talk about it):**

WellVersed is a specialized AI platform purpose-built for UEFN development. It's not a chatbot wrapper — it's a deeply integrated tool that understands your actual project files, your device configurations, and your Verse codebase.

**Core Capabilities:**

| Feature | Description (public) | Tier |
|---|---|---|
| **Verse Script Generation** | Generate, refactor, and debug Verse scripts with full language-aware context | Free (limited) / Pro / Enterprise |
| **Device Configuration Validation** | Analyze in-level device setups, catch misconfigurations, suggest fixes | Pro / Enterprise |
| **Procedural Level Assistance** | AI-assisted procedural generation of level segments, layouts, and populations | Pro / Enterprise |
| **Project-Aware QA** | Automated quality checks across your entire project — logic errors, broken references, performance flags | Pro / Enterprise |
| **Architecture Review** | Senior-dev-level feedback on project structure, Verse patterns, and scalability | Enterprise |
| **Priority Processing** | Faster response times and higher usage limits | Pro / Enterprise |
| **Team Collaboration** | Shared workspace, team member seats, project history | Enterprise |

**How we describe the tech (without revealing it):**

> "WellVersed uses proprietary AI models fine-tuned for UEFN workflows, combined with deep project analysis that goes beyond surface-level code reading. We parse, understand, and reason about your actual project structure."

- Never mention: UAssetAPI, MCP, Anthropic, Claude, specific libraries
- Do mention: "proprietary analysis engine," "project-aware AI," "deep integration," "purpose-built models"

---

## 3. Subscription Tiers & Pricing

### Pricing Strategy

The UEFN creator economy ranges from hobbyists to studios earning significant revenue through Creator Code / UEFN islands. Pricing should reflect value delivered while staying accessible.

**Comparable market references:**
- GitHub Copilot: $10–39/mo
- Cursor Pro: $20/mo
- Replit Core: $25/mo
- Unity AI tools: $30/mo+

WellVersed offers more specialized value than general coding assistants, justifying a premium over Copilot but staying below enterprise dev-tool pricing.

### Recommended Tiers

#### Free — $0/mo
- 50 Verse script generations per month
- Basic syntax validation
- Community support
- Single project
- **Purpose:** Funnel. Get creators hooked, demonstrate value.

#### Pro — $29/mo ($24/mo annual)
- 500 AI operations per month
- All core features (Verse gen, device validation, procedural assist, QA)
- Project-aware analysis (user provides project path)
- Up to 5 projects
- Standard processing speed
- Email support
- **Purpose:** Core revenue driver. Solo creators and small teams.

#### Enterprise — $79/mo ($66/mo annual)
- Unlimited AI operations
- Everything in Pro
- Architecture review
- Team workspace (up to 10 seats, +$15/seat beyond)
- Priority processing
- Dedicated support channel
- Custom integrations / API access
- **Purpose:** Studios and professional teams.

### Revenue Projections (Conservative)

| Metric | Month 6 | Month 12 |
|---|---|---|
| Free users | 500 | 2,000 |
| Pro subscribers | 50 | 200 |
| Enterprise subscribers | 5 | 20 |
| MRR | $1,845 | $7,380 |

**Profitability note:** Primary costs are API compute (Anthropic usage), hosting, and Stripe fees (~2.9% + $0.30). At Pro tier, each user's API cost should stay under $5-8/mo with smart caching and rate limiting, yielding healthy margins.

---

## 4. Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **State:** Zustand (lightweight, minimal boilerplate)
- **Theme:** next-themes (dark/light toggle)

### Backend
- **API:** Next.js API Routes + tRPC (type-safe client-server)
- **Auth:** NextAuth.js (GitHub, Google, email/password)
- **Database:** PostgreSQL via Supabase or PlanetScale
- **ORM:** Prisma
- **Payments:** Stripe (Checkout + Customer Portal + Webhooks)
- **Rate Limiting:** Upstash Redis

### Infrastructure
- **Hosting:** Vercel (frontend + API routes)
- **Database:** Supabase (Postgres + Row Level Security)
- **File Handling:** User provides local project path — no file uploads needed at launch
- **Monitoring:** Vercel Analytics + Sentry

### AI Service Layer (Black-boxed)
- Internal API that wraps your UAssetAPI + MCP tooling
- Exposed to the frontend only through your own API endpoints
- Users never see or interact with underlying services directly
- Rate limited and metered per subscription tier

---

## 5. Website Pages & Structure

### Public Pages
1. **Landing Page** (`/`)
   - Hero: bold headline, tagline, CTA to sign up
   - Feature showcase (the 6 core capabilities, with visuals)
   - Social proof section (placeholder for testimonials / user count)
   - Pricing preview
   - FAQ
   - Footer

2. **Pricing** (`/pricing`)
   - Tier comparison table
   - Feature matrix
   - FAQ about billing
   - CTA to sign up / upgrade

3. **Docs** (`/docs`)
   - Getting started guide
   - Feature deep-dives
   - Verse scripting reference
   - API docs (Enterprise)
   - Changelog

4. **Blog** (`/blog`) — optional at launch
   - UEFN tips, updates, case studies

### Authenticated Pages
5. **Dashboard** (`/dashboard`)
   - Project overview
   - Usage stats (operations used / remaining)
   - Quick actions (new analysis, new script, etc.)

6. **Project Workspace** (`/dashboard/project/[id]`)
   - Chat/interaction interface with the AI
   - Project file browser (read-only view of analyzed structure)
   - Results panel (generated scripts, QA reports, etc.)
   - History of past operations

7. **Settings** (`/dashboard/settings`)
   - Account management
   - Subscription / billing (Stripe Customer Portal)
   - Team management (Enterprise)
   - API keys (Enterprise)

8. **Auth Pages**
   - Sign in (`/login`)
   - Sign up (`/signup`)
   - Forgot password (`/reset-password`)

---

## 6. User Flow

```
Landing Page → Sign Up → Onboarding (connect project path)
    → Dashboard → Select/Create Project
        → Workspace: Chat with AI about your project
            ├── Generate Verse scripts
            ├── Validate device configs
            ├── Run QA checks
            ├── Get architecture feedback
            └── Procedural generation assist
        → View results, copy code, export reports
    → Settings → Manage subscription via Stripe
```

---

## 7. Key Technical Decisions

1. **Project path, not file upload** — Users provide their local UEFN project path. The service connects to analyze it. This avoids massive file uploads and keeps the UX fast.

2. **Black-boxed AI layer** — All AI/analysis logic lives behind your own API. The frontend calls `/api/analyze`, `/api/generate`, etc. The implementation details (UAssetAPI, MCP, Anthropic) are never exposed to the client.

3. **Metered usage via middleware** — Every AI operation decrements from the user's monthly quota. Tracked in the database, enforced in API middleware.

4. **Stripe webhooks for subscription state** — Subscription status lives in your DB, synced via Stripe webhooks. No client-side trust of payment state.

5. **No mobile-first** — This is a developer tool. Desktop-first responsive design. Mobile should work but isn't the priority.

---

## 8. Launch Priorities (Build Order)

### Phase 1 — Foundation
- [ ] Next.js project scaffold with TypeScript + Tailwind + shadcn
- [ ] Dark/light theme system
- [ ] Landing page
- [ ] Auth system (NextAuth)
- [ ] Database schema (users, projects, subscriptions, usage)

### Phase 2 — Core Product
- [ ] Dashboard layout
- [ ] Project creation flow (provide project path)
- [ ] Workspace UI (chat interface + results panel)
- [ ] API layer stub (endpoints that will connect to your AI backend)
- [ ] Usage metering middleware

### Phase 3 — Monetization
- [ ] Stripe integration (checkout, portal, webhooks)
- [ ] Tier enforcement (rate limiting per plan)
- [ ] Pricing page

### Phase 4 — Polish & Launch
- [ ] Docs site
- [ ] Onboarding flow
- [ ] Error handling + loading states
- [ ] SEO + meta tags
- [ ] Analytics

---

## 9. Open Questions

1. **Project connection method** — When a user provides their project path, how does the service access it? Options:
   - Desktop companion app that runs locally and communicates with the web service
   - CLI tool the user runs that syncs relevant project metadata
   - Direct path input assumes the AI service has filesystem access (only works if user is running something locally)

2. **Team features at launch?** — Ship Enterprise tier from day one, or start with Free + Pro and add teams later?

3. **Domain** — wellversed.dev? wellversed.ai? getwellversed.com?

4. **Beta strategy** — Invite-only launch, public beta, or waitlist?
