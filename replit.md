# Steven Washington's Portfolio

## Overview
Modern, executive-focused portfolio showcasing Steven Washington as a Principal/Director-level Platform & AI Product Leader. Features identity-first hero, interactive Platform Value Multiplier calculator, comprehensive impact timeline with STAR-format case study modals, clickable/flippable leadership principle cards, strategic capabilities showcase, contact form modal, and streamlined navigation with custom branding icon.

## Recent Changes (December 11, 2025)

### Content & Card Refinements (December 11, 2025)
- **Leadership Principles Cards**: Removed icon rectangle backgrounds (cleaner icon-only design), tightened typography, increased card height to 380px
- **Engineer Count**: Fixed inconsistency - now uses "100+ engineers" consistently (removed conflicting 30+ reference)
- **Pendomonium Year**: Corrected to 2023
- **Job Title**: Updated to "Revenue Engineering and AI Platforms"
- **Strategic Alignment Check**: Added industry-tailored output with 18 known companies (Amazon, Zillow, Anthropic, Toast, etc.) mapped to industry, focus areas, and challenges
- **Footer Tagline**: Updated to match hero ("Product thinking. Engineering execution.")

### Design System Enhancements
- **Vibrant Gradient Brand Identity**: 3-color gradient (Electric Blue → Cyan → Neon Pink) applied to:
  - Hero "Product thinking" text with `.gradient-text` utility
  - CTA button border with `.gradient-border` utility
  - Section dividers with `.gradient-divider` utility (glowing line effect)
- **Font Improvements**: Inter font imported for body text, 16px minimum size, enhanced readability
- **Section Differentiation**: Alternating `.section-alt` backgrounds with glowing gradient dividers
- **Consistent Spacing**: Sections use py-24 md:py-32, headings use mb-16-20, text uses leading-relaxed

### Previous UI/UX Refresh
- **Color Palette**: Simplified to single vibrant cyan accent (HSL 190 70% 55%) for all interactive elements
- **Body Text**: Updated to white/light gray tones (text-white/80, text-white/70) for improved readability
- **Card Styling**: Consistent slate-800/50 backgrounds with cyan-500/20 glowing borders across all components
- **Section Headers**: All use text-cyan-400 for visual consistency
- **Icons & Badges**: Unified cyan-400 coloring throughout

### Director-Level Enhancements Complete
- **Hero Value Proposition**: Added bold, executive-targeted value proposition:
  - "I build secure, compliant, AI-ready enterprise platforms that improve engineering velocity, reduce operational cost, and unlock new revenue for global organizations."
  - Communicates scope, business value, clarity, and confidence in one sentence
- **DirectorSummary.tsx**: New combined component with two-column layout:
  - "What I Solve For" section (5 problem domains: Engineering Velocity, AI Governance, GTM Modernization, Developer Experience, Data Unification)
  - "Scope of Ownership" sticky sidebar (100+ engineers, 20+ systems, $11B+ GTM pipeline, 15+ engineering orgs)
- **Executive Alignment Examples**: Added to ImpactTimeline outcomes:
  - "Secured SVP+ alignment for multi-year modernization initiative through business case development, technical deep dives, and ROI framing"
  - "Invited to speak at Pendomonium 2024 on 'Transforming enterprise technology with product analytics'"
- **Leadership Principles Proof Statements**: Added evidence-backed proof to each principle card:
  - Platform as a Product: "Operationalized this principle by defining service boundaries, SLAs, and product operating mechanisms adopted across 100+ engineers at Zillow"
  - Responsible AI & Governance: "Built TCPA/CPRA-compliant data pipelines enabling 16 years of enterprise data to be used for AI training"
  - GTM Velocity: "Unified 4 Salesforce orgs into single platform supporting $1.5B+ revenue; reduced release cycles from days to minutes"

## Previous Changes (November 24, 2025)

### Contact Form Implementation
- Created ContactForm modal component following stack patterns (react-hook-form, zod validation, react-query mutation)
- Added shared schema validation in `shared/schema.ts` with minimum field requirements
- Backend route `/api/contact` with zod validation
- Currently logs submissions to console (email integration pending)
- **Email Delivery Status**: User dismissed Resend integration. Alternative email delivery method needed (credentials-based service like SendGrid, or other provider)

### AI Twin Feature Removal
- Completely removed AITwinChat component and all references
- Removed "Ask my AI Twin" button from Hero section
- Feature documented in Backlog.md for future consideration

### Header & Footer Enhancements
- Generated custom AI productivity brand icon (clicks to scroll to top)
- Added LinkedIn and GitHub social icons to Header and Footer
- Social links: https://www.linkedin.com/in/stevenlwashington/ and https://github.com/stevenlwashington
- Email link: stevenlwashington@gmail.com

## User Preferences
- Prefers modern, executive-level design aesthetics
- Focus on measurable business impact and leadership
- STAR-format case studies for showcasing achievements
- Interactive elements to demonstrate platform thinking

## Project Architecture

### Frontend (React + TypeScript + Vite)
- **Pages**: `client/src/pages/Home.tsx` - main landing page
- **Components**:
  - `Hero.tsx` - Identity-first hero section with portrait and gradient tagline
  - `DirectorSummary.tsx` - Combined "What I Solve For" + "Scope of Ownership" sidebar layout
  - `ImpactTimeline.tsx` - Career timeline with STAR-format case studies and executive alignment examples
  - `LeadershipPhilosophy.tsx` - Flippable principle cards with proof statements
  - `StrategicCapabilities.tsx` - Scroll-driven progressive reveal of capabilities
  - `Header.tsx` - Navigation with custom icon, social links, contact modal trigger
  - `ContactForm.tsx` - Modal form with validation (react-hook-form + zod)
  - `Footer.tsx` - Footer with social links
- **Styling**: Tailwind CSS with custom design in `client/src/index.css`
- **State Management**: React Query for server state, React hooks for local state

### Backend (Express + TypeScript)
- **Routes**: `server/routes.ts` - API endpoints including `/api/contact`
- **Storage**: In-memory storage interface in `server/storage.ts`
- **Validation**: Shared schemas in `shared/schema.ts` using Zod

### Shared
- **Schema**: `shared/schema.ts` - Type definitions and validation schemas

## Key Technical Decisions
- Using in-memory storage (no database required for static portfolio)
- Contact form submissions logged to console (email integration TODO)
- Custom brand icon represents AI/future thinking/productivity focus
- Stack: React + Express + TypeScript + Tailwind + shadcn/ui components

## Important Files
- `client/src/index.css` - Design system and color variables
- `client/src/pages/Home.tsx` - Main page structure
- `client/src/components/Header.tsx` - Navigation and contact modal
- `client/src/components/ContactForm.tsx` - Contact form with validation
- `shared/schema.ts` - Type definitions and validation schemas
- `server/routes.ts` - Backend API routes
- `Backlog.md` - Enhancement backlog with user stories

## Notes
- **Email Integration**: User dismissed Resend integration twice. For production email delivery to stevenlwashington@gmail.com, will need credentials-based service (SendGrid, Mailgun, etc.) or alternative approach. This is documented as TODO in server/routes.ts.
- Contact form currently functional but only logs to console
- All social media links verified and working
- Custom icon successfully integrated in header
