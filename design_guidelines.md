# Design Guidelines: Executive Portfolio for Platform & AI Leader

## Design Approach

**Selected Approach:** Hybrid - Drawing from Linear's typography precision + Stripe's restraint + Notion's content density, adapted for an executive portfolio that balances authority with approachability.

**Rationale:** This is an experience-focused portfolio requiring visual sophistication to convey executive credibility, combined with utility-focused interactive tools (PVM calculator, AI chat) that demand clarity and usability.

## Core Design Elements

### Typography

**Font Families:**
- Headlines: Inter (700-800 weight) - Sharp, authoritative
- Body: Inter (400-500 weight) - Highly readable
- Accent/Data: JetBrains Mono (500 weight) - Technical credibility for metrics

**Hierarchy:**
- Hero headline: text-6xl to text-7xl, font-bold
- Section headers: text-4xl to text-5xl, font-bold
- Subsection headers: text-2xl to text-3xl, font-semibold
- Body text: text-base to text-lg, leading-relaxed
- Metrics/data: text-3xl to text-5xl, font-mono

### Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, py-20, mb-12)

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto  
- Text-heavy content: max-w-4xl mx-auto
- Section padding: py-20 desktop, py-12 mobile

**Grid Systems:**
- Leadership Principles: 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Impact Timeline: Single column with side-by-side content elements
- PVM metrics: 3-column output display (grid-cols-1 md:grid-cols-3)

### Component Library

**Hero Section:**
- Asymmetric layout: Portrait circle (w-48 to w-64, rounded-full with gradient border) positioned upper-right or integrated into headline
- Portrait placeholder: Stylized gradient avatar with "SP" monogram, subtle glow effect
- Headline spans 60% width, portrait 30%, creating dynamic tension
- Two prominent CTAs: primary (solid) + secondary (outline), both with backdrop-blur on hero background
- Subtle gradient backdrop with mesh pattern or geometric elements

**Interactive Platform Value Multiplier:**
- Card-based module with elevated shadow (shadow-2xl)
- Three range sliders with custom track styling and value labels
- Real-time metric cards displaying calculated outputs with animated number count-ups
- Radial progress indicators or vertical bar charts that smoothly transition on slider change
- "How is this calculated?" button opens modal with formula breakdown
- Integrated security callout: horizontal card with shield icons, brief compliance copy (TCPA/CPRA, Responsible AI)

**Impact Timeline:**
- Vertical timeline with connecting line (border-l-4)
- Company cards with role title, dates, and key outcome bullets
- Timeline dots/badges at each milestone (rounded-full indicators)
- Staggered card alignment (alternating left-right on desktop optional)
- Achievement metrics highlighted with accent background

**Leadership Principles:**
- Three cards with icon headers (abstract geometric shapes or subtle illustrations)
- Card hover: subtle lift effect (hover:translate-y-[-4px])
- Icons should be simple, modern, geometric (not literal)

**AI Twin Chat Widget:**
- Fixed bottom-right bubble (z-50)
- Expands to chat panel (w-96, max-h-[600px])
- Message bubbles: user (right-aligned, accent bg) vs AI (left-aligned, muted bg)
- Input field with send button at bottom
- Collapse to bubble icon when minimized

**Value Prop Generator:**
- Simple form: single input field for organization name
- Generate button triggers output section reveal with slide-down animation
- Output displayed in quotable card format with subtle border accent

### Navigation

**Header:**
- Sticky navigation (sticky top-0 backdrop-blur-lg)
- Logo/name left, navigation links center, "Contact" CTA right
- Mobile: Hamburger menu with slide-in drawer

### Animations

**Entrance:** Staggered fade-up on scroll (50-100ms delays between elements)
**Interactions:** Subtle hover lifts on cards (4px), smooth slider transitions (300ms), number count-ups on metric changes
**Principle:** Motion enhances hierarchy but never distracts

## Images

**Hero Background:**
- Abstract gradient mesh or geometric pattern (not photograph)
- Dark base with subtle accent color highlights
- Low opacity to maintain text readability

**Portrait:**
- Circular cutout positioned in upper-right of hero, overlapping headline slightly
- Placeholder: Gradient circle (purple-to-blue) with "SP" monogram in geometric sans font
- Border: 4px accent gradient ring with subtle shadow
- Size: 192px to 256px diameter on desktop, 128px mobile

**Supporting Imagery:**
- Optional: Abstract "systems thinking" visualization near PVM (nodes/connections diagram, low opacity)
- Optional: Subtle iconography for timeline companies (logos if available, otherwise omit)
- All supporting images should be understated, never competing with content

## Visual Treatment Notes

Dark theme with strategic accent usage:
- Accent color for CTAs, active states, data highlights, and borders
- Backgrounds: Deep neutrals (gray-900, gray-950) with subtle gradients
- Text: High contrast whites/light grays for readability
- Cards: Slightly elevated from background (gray-800 with border-gray-700)

Consistent treatment:
- All interactive elements have clear hover/focus states
- Form inputs maintain same styling across site
- Buttons use backdrop-blur when placed over images/gradients