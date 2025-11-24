# Steven Washington's Portfolio

## Overview
Modern, executive-focused portfolio showcasing Steven Washington as a Principal/Director-level Platform & AI Product Leader. Features identity-first hero, interactive Platform Value Multiplier calculator, comprehensive impact timeline with STAR-format case study modals, clickable/flippable leadership principle cards, strategic capabilities showcase, contact form modal, and streamlined navigation with custom branding icon.

## Recent Changes (November 24, 2025)

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
  - `Hero.tsx` - Identity-first hero section
  - `Header.tsx` - Navigation with custom icon, social links, contact modal trigger
  - `ContactForm.tsx` - Modal form with validation (react-hook-form + zod)
  - `Footer.tsx` - Footer with social links
  - Additional components in `client/src/components/`
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
