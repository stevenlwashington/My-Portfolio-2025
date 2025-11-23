# Product Backlog

## Enhancement: Interactive Systems Thinking Visualization

### User Story
As a recruiter or hiring manager visiting Steven's portfolio,  
I want to explore the Systems Thinking framework in an intuitive, visually engaging way,  
So that I can understand how Steven connects data, platforms, governance, and velocity without having to hover over icons and look elsewhere for details.

### Problem Statement
The current Systems Thinking section uses a hover-based interaction where users:
1. Hover over an icon (e.g., "Data")
2. Must look beneath the icons to find the associated card with more details
3. This creates a disconnected UX that feels clunky and unintuitive

This pattern forces users to visually hunt for information and doesn't provide the seamless, executive-level experience expected for a VP+ portfolio.

### Acceptance Criteria

#### Visual Design
- [ ] Replace hover-to-reveal card pattern with a more integrated visualization
- [ ] Ensure the connection between concept and detail is immediately clear
- [ ] Use professional data visualization patterns suitable for executive audiences
- [ ] Maintain visual consistency with the dark navy color palette (#0A0F1F background, light blue accents)

#### Interaction Design
- [ ] Users should be able to understand the relationship between all four elements (Data, Governance, Platform, Velocity) at a glance
- [ ] Details should be accessible without requiring precise cursor positioning
- [ ] Consider alternatives:
  - Click-to-expand cards in a 2x2 grid
  - Interactive diagram with connecting lines showing relationships
  - Tabbed interface with visual diagram + detail panels
  - Accordion-style vertical layout with icons
  - Interactive infographic with animated transitions

#### Content
- [ ] Preserve the existing content about:
  - **Data as a Strategic Asset**: Unified data foundations
  - **Governance as Infrastructure**: Policy-as-code, TCPA/CPRA compliance
  - **Platform as a Product**: Developer experience, adoption
  - **Velocity as a Multiplier**: GTM acceleration, deployment speed
- [ ] Ensure text remains scannable with appropriate hierarchy

#### Responsiveness
- [ ] Works seamlessly on desktop (primary audience)
- [ ] Gracefully adapts to tablet and mobile viewports
- [ ] Maintains readability at all screen sizes

#### Accessibility
- [ ] Keyboard navigable
- [ ] Screen reader friendly with appropriate ARIA labels
- [ ] Focus indicators clearly visible

### Design Exploration Ideas
1. **Connected Node Diagram**: Central "Platform" node with three satellite nodes (Data, Governance, Velocity) connected by lines. Click any node to reveal details in a side panel.
2. **Vertical Timeline**: Four sections arranged vertically with large icons and expandable accordion panels.
3. **Interactive Matrix**: 2x2 grid where clicking any quadrant expands it to show details while dimming the others.
4. **Radial Infographic**: Four segments arranged in a circle around a central concept, with click-to-focus behavior.

### Technical Notes
- Use Framer Motion for smooth transitions
- Leverage shadcn/ui components (Card, Accordion, Tabs) where applicable
- Ensure animations are performant (60fps)
- Add appropriate data-testid attributes for testing

### Priority
Medium - Deprioritized in favor of core portfolio features (Hero, Leadership Principles, Impact Timeline, Executive Summary)

### Status
Backlog - Not yet started
