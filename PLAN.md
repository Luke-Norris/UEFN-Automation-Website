# WellVersed — Product & Website Plan

> AI-Powered UEFN Development Platform
> **Domain:** wellversed.ai

---

## 1. Brand Identity

**Name: WellVersed**

Wordplay on Verse (UEFN's scripting language), implies expertise, no trademark risk.

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
| **Architecture Review** | Senior-dev-level feedback on project structure, Verse patterns, and scalability | Enterprise (Coming Soon) |
| **Priority Processing** | Faster response times and higher usage limits | Pro / Enterprise |
| **Team Collaboration** | Shared workspace, team member seats, project history | Enterprise (Coming Soon) |

**How we describe the tech (without revealing it):**

> "WellVersed uses proprietary AI models fine-tuned for UEFN workflows, combined with deep project analysis that goes beyond surface-level code reading. We parse, understand, and reason about your actual project structure."

- **Never mention:** UAssetAPI, MCP, Anthropic, Claude, specific libraries
- **Do mention:** "proprietary analysis engine," "project-aware AI," "deep integration," "purpose-built models"

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

### Tiers

#### Free — $0/mo
- 50 Verse script generations per month
- Basic syntax validation
- Community support
- Single project
- **Purpose:** Funnel. Get creators hooked, demonstrate value.

#### Pro — $29/mo ($24/mo annual)
- 500 AI operations per month
- All core features (Verse gen, device validation, procedural assist, QA)
- Project-aware analysis via companion app
- Up to 5 projects
- Standard processing speed
- Email support
- **Purpose:** Core revenue driver. Solo creators and small teams.

#### Enterprise — $79/mo ($66/mo annual) — *Coming Soon*
- Unlimited AI operations
- Everything in Pro
- Architecture review
- Team workspace (up to 10 seats, +$15/seat beyond)
- Priority processing
- Dedicated support channel
- Custom integrations / API access
- **Purpose:** Studios and professional teams. Ships after Free + Pro are validated.

### Revenue Projections (Conservative)

| Metric | Month 6 | Month 12 |
|---|---|---|
| Free users | 500 | 2,000 |
| Pro subscribers | 50 | 200 |
| Enterprise subscribers | — | 20 |
| MRR | $1,450 | $7,380 |

**Profitability note:** Primary costs are API compute (Anthropic usage), hosting, and Stripe fees (~2.9% + $0.30). At Pro tier, each user's API cost should stay under $5-8/mo with smart caching and rate limiting, yielding healthy margins.

---

## 4. Tech Stack

### Web App (Frontend + Backend)
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **State:** Zustand (lightweight, minimal boilerplate)
- **Theme:** next-themes (dark/light toggle)
- **API:** Next.js API Routes + tRPC (type-safe client-server)
- **Auth:** NextAuth.js (GitHub, Google, email/password)
- **Database:** PostgreSQL via Supabase
- **ORM:** Prisma
- **Payments:** Stripe (Checkout + Customer Portal + Webhooks)
- **Rate Limiting:** Upstash Redis

### Desktop Companion App (Windows)
- **Framework:** Tauri v2
  - ~5MB install vs ~150MB+ for Electron
  - Rust backend for file watching, WebSocket comms, process management
  - Built-in auto-updater and system tray support
  - Frontend is web tech (React/TS) — shares UI code with the main site
- **Role:** Thin secure bridge between local UEFN project files and cloud service
- **Responsibilities:**
  - Watch UEFN project directory for changes
  - Maintain authenticated WebSocket connection to WellVersed cloud
  - Serve file contents on demand when the cloud AI requests them
  - Display connection status + notifications via system tray
  - Auto-update silently
- **Does NOT do:**
  - AI processing (all AI stays server-side — protects IP, simplifies updates)
  - Store sensitive data beyond auth tokens
  - Modify project files without explicit user action

### Infrastructure
- **Hosting:** Vercel (frontend + API routes)
- **Database:** Supabase (Postgres + Row Level Security)
- **Companion Distribution:** GitHub Releases or custom installer via wellversed.ai/download
- **Monitoring:** Vercel Analytics + Sentry

### AI Service Layer (Black-boxed)
- Internal API that wraps your UAssetAPI + MCP tooling
- Exposed to the frontend only through your own API endpoints
- Cloud service requests project data from companion app via WebSocket
- Users never see or interact with underlying services directly
- Rate limited and metered per subscription tier

---

## 5. Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    wellversed.ai                         │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────────┐ │
│  │ Landing  │  │ Dashboard│  │ Project Workspace     │ │
│  │ Page     │  │          │  │ (Chat + Results)      │ │
│  └──────────┘  └────┬─────┘  └──────────┬────────────┘ │
│                     │                    │              │
│              ┌──────┴────────────────────┴──────┐      │
│              │     Next.js API / tRPC            │      │
│              │     (Auth, Metering, Routing)     │      │
│              └──────┬───────────────────┬───────┘      │
│                     │                   │              │
│              ┌──────┴──────┐    ┌───────┴────────┐    │
│              │  Supabase   │    │  AI Service    │    │
│              │  (Postgres) │    │  Layer         │    │
│              │  Users,     │    │  (Black-boxed) │    │
│              │  Projects,  │    │  UAssetAPI +   │    │
│              │  Usage      │    │  MCP + Models  │    │
│              └─────────────┘    └───────┬────────┘    │
│                                         │              │
└─────────────────────────────────────────┼──────────────┘
                                          │
                                   WebSocket (secure)
                                          │
                    ┌─────────────────────┴──────────────┐
                    │     Tauri Companion App (Windows)   │
                    │                                     │
                    │  ┌─────────────┐  ┌──────────────┐ │
                    │  │ File Watcher│  │ System Tray  │ │
                    │  │ + Indexer   │  │ Status       │ │
                    │  └─────────────┘  └──────────────┘ │
                    │                                     │
                    │  ┌──────────────────────────────┐  │
                    │  │ UEFN Project Directory       │  │
                    │  │ (local filesystem)            │  │
                    │  └──────────────────────────────┘  │
                    └────────────────────────────────────┘
```

---

## 6. Website Pages & Structure

### Public Pages
1. **Landing / Waitlist Page** (`/`)
   - Hero: bold headline, tagline, CTA to join waitlist
   - Feature showcase (core capabilities with visuals)
   - "How it works" section (3-step: Install companion → Connect project → Start building)
   - Social proof section (placeholder for testimonials / user count)
   - Pricing preview (Free + Pro live, Enterprise "Coming Soon")
   - FAQ
   - Footer

2. **Pricing** (`/pricing`)
   - Tier comparison table
   - Feature matrix
   - Enterprise "Coming Soon" with notify CTA
   - FAQ about billing
   - CTA to sign up / upgrade

3. **Docs** (`/docs`)
   - Getting started guide (install companion, connect project)
   - Feature deep-dives
   - Verse scripting reference
   - Changelog

4. **Download** (`/download`)
   - Companion app installer for Windows
   - System requirements
   - Installation guide

### Authenticated Pages
5. **Dashboard** (`/dashboard`)
   - Project overview
   - Companion app connection status
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
   - Companion app management (connected devices)

8. **Auth Pages**
   - Sign in (`/login`)
   - Sign up (`/signup`)
   - Forgot password (`/reset-password`)

---

## 7. User Flow

```
wellversed.ai → Join Waitlist → Get Invite Code
    → Sign Up → Download Companion App → Install
        → Open Companion → Point to UEFN project directory
            → Companion connects to WellVersed cloud
    → Dashboard → Select/Create Project
        → Workspace: Chat with AI about your project
            ├── Generate Verse scripts
            ├── Validate device configs
            ├── Run QA checks
            └── Procedural generation assist
        → View results, copy code, export reports
    → Settings → Manage subscription via Stripe
```

---

## 8. Launch Strategy

### Phase 0 — Waitlist (Pre-Launch)
- Landing page live on wellversed.ai
- Waitlist form collects: email, UEFN experience level, team size, what they build
- Discord server live — link from waitlist confirmation email
- Use waitlist data to prioritize invites (power users first = better feedback)
- Target channels: UEFN subreddits, Fortnite Creative Discord servers, YouTube/Twitch UEFN creators

### Invite Waves
- Wave 1: 20 users — stress test, gather critical feedback
- Wave 2: 50 users — validate pricing, test companion app at scale
- Wave 3: 200 users — public beta readiness check
- Open launch after Wave 3 stability

### Founding Member Perks
- Users in Waves 1-3 get a permanent **"Founder"** badge on their profile
- **30% lifetime discount** on Pro tier ($20/mo instead of $29/mo)
- Creates urgency for the waitlist ("limited founding spots")
- Early adopters become evangelists

---

## 9. Key Technical Decisions

1. **Companion app, not file upload** — Tauri v2 desktop app watches the UEFN project locally and serves files to the cloud on demand via WebSocket. No massive uploads, instant access, real-time sync.

2. **Black-boxed AI layer** — All AI/analysis logic lives behind your own API. The frontend calls `/api/analyze`, `/api/generate`, etc. The implementation details are never exposed to the client or the companion app.

3. **Thin companion, fat cloud** — All intelligence stays server-side. The companion is just a secure file bridge. This means you can improve the AI without users ever updating the app.

4. **Metered usage via middleware** — Every AI operation decrements from the user's monthly quota. Tracked in the database, enforced in API middleware.

5. **Stripe webhooks for subscription state** — Subscription status lives in your DB, synced via Stripe webhooks. No client-side trust of payment state.

6. **Desktop-first** — This is a developer tool. Desktop-first responsive design. Mobile should be functional but isn't the priority.

7. **Free + Pro at launch, Enterprise later** — Validate the core product and pricing with two tiers before adding team complexity.

---

## 10. Build Order

### Phase 1 — Foundation (Website)
- [ ] Next.js project scaffold with TypeScript + Tailwind + shadcn
- [ ] Dark/light theme system
- [ ] Landing page with waitlist form
- [ ] Auth system (NextAuth)
- [ ] Database schema (users, projects, subscriptions, usage, waitlist)

### Phase 2 — Companion App
- [ ] Tauri v2 project scaffold
- [ ] System tray integration
- [ ] Project directory selector + file watcher
- [ ] WebSocket client (connects to cloud)
- [ ] File serving protocol (respond to cloud requests for project data)
- [ ] Auto-updater
- [ ] Windows installer / distribution

### Phase 3 — Core Product
- [ ] Dashboard layout
- [ ] Project creation flow (link to companion app)
- [ ] Companion connection status in dashboard
- [ ] Workspace UI (chat interface + results panel)
- [ ] API layer that bridges frontend ↔ AI service ↔ companion app
- [ ] Usage metering middleware

### Phase 4 — Monetization
- [ ] Stripe integration (checkout, portal, webhooks)
- [ ] Tier enforcement (rate limiting per plan)
- [ ] Pricing page
- [ ] Invite code system

### Phase 5 — Polish & Launch
- [ ] Docs site (getting started, companion install guide)
- [ ] Download page for companion app
- [ ] Onboarding flow
- [ ] Error handling + loading states
- [ ] SEO + meta tags
- [ ] Analytics
- [ ] Discord community setup

### Phase 6 — Post-Launch
- [ ] Enterprise tier (team workspaces, seats, API keys)
- [ ] Architecture review feature
- [ ] Usage analytics dashboard for users
- [ ] Public API (Enterprise)
