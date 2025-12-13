# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An Astro-based presentation website about "Vibe Coding vs Software Engineering" - exploring AI-assisted coding practices, the 4R Framework, and software engineering best practices. Built with Astro 4.x, Svelte components, Tailwind CSS, GSAP animations, and custom slide navigation (45-60 min talk, 21 slides).

## Development Commands

```bash
pnpm install        # Install dependencies
pnpm run dev        # Start dev server at http://localhost:4321
pnpm run build      # Type-check and build for production
pnpm run preview    # Preview production build
```

## Project Architecture

### Hybrid Component Strategy
- **Astro components** (`.astro`): Static slides with pure CSS animations (Slide01Hero, Slide05Security, Slide07Framework, etc.)
- **Svelte components** (`.svelte`): Interactive slides with reactive state, GSAP animations, and counters (Slide02Paradox, Slide03Metrics, etc.)
- Components requiring interactivity use `client:load` directive in index.astro
- 11 Astro slides / 10 Svelte slides balance for optimal performance

### Navigation System
- Custom Svelte-based navigation in `Navigation.svelte` (not using Swiper.js library)
- Hash routing: `#/hero`, `#/paradox`, `#/metrics`, etc. (21 slides total)
- Manual slide management with opacity transitions via GSAP
- Keyboard navigation (arrow keys), click navigation (prev/next buttons)
- All slides are absolutely positioned; only active slide has `swiper-slide-active` class

### Slide Structure
All 21 slides live in `src/components/slides/`:

**Introduction & Problem (1-6)**
1. `Slide01Hero.astro` - Hero/introduction
2. `Slide02Paradox.svelte` - Paradox of vibe coding (high adoption, low confidence)
3. `Slide03Metrics.svelte` - Overhead metrics with animated counters
4. `Slide04Churn.svelte` - Code churn analysis
5. `Slide05Security.astro` - Security risks
6. `Slide06METR.svelte` - METR 2025 study results

**4R Framework (7-11)**
7. `Slide07Framework.astro` - 4R framework introduction
8. `Slide08Risk.svelte` - R1: Security risk assessment
9. `Slide09Readability.astro` - R2: Code quality standards
10. `Slide10Reliability.svelte` - R3: TDD with AI
11. `Slide11Resilience.astro` - R4: System resilience patterns

**Practical Tools (12-14)**
12. `Slide12Limits.svelte` - Human cognitive limits in code review
13. `Slide13StackPRs.astro` - Stack PRs methodology
14. `Slide14Hooks.svelte` - Pre-commit hooks with Husky

**Tools & Cases (15-18)**
15. `Slide15Guardrails.astro` - Prompt guardrail structure
16. `Slide15B.svelte` - Advanced prompt techniques (Few-Shot, Chain-of-Thought)
17. `Slide16Reviewers.svelte` - Augmented reviewers (Copilot, CodeRabbit, Kudu)
18. `Slide17Cases.svelte` - Real case studies (Amazon, UK Government)
19. `Slide17B.svelte` - UK Government deep dive
20. `Slide18Closing.astro` - Action plan and conclusion
21. `Slide18B.astro` - Success metrics and final thoughts

Each slide is a `.swiper-slide` that becomes visible when active.

### Animation System
Animations are centralized in `src/utils/animations.ts`:
- `animateSlideEntrance()` - Orchestrates slide fade-in with staggered children
- `animateSlideExit()` - Handles slide transitions out
- `addButtonHoverAnimation()` - GSAP hover effects for buttons
- `animateCounter()` - Number counting animations
- `addParallaxEffect()` - Mousemove parallax for backgrounds
- All animations use GSAP for performance and consistency

### Design System
Defined in `src/styles/global.css` via CSS custom properties:

**Color Palette** (Monochrome blue theme):
```css
--color-base-dark: #0A1628        /* Deep navy background */
--color-primary-cobalt: #1E3A8A   /* Cobalt blue */
--color-accent-bright: #3B82F6    /* Bright blue */
--color-electric: #60A5FA         /* Electric blue */
--color-neutral-light: #FAF9F6    /* Off-white */
```

**Typography Hierarchy**:
- Display (4-6rem): Space Grotesk 800-900 - Used for h1 headers
- Subheaders (2-3rem): Bricolage Grotesque 600-700 - Used for h2/h3
- Body (1-1.2rem): IBM Plex Sans 400-500 - Used for paragraphs
- Monospace: JetBrains Mono 500 - Used for code/stats

**Key UI Patterns**:
- `.card-glass` - Glassmorphic cards with backdrop-filter blur
- `.btn-primary`, `.btn-secondary`, `.btn-ghost` - Button variants with glow effects
- All hover states use `scale(1.03)` transform + shadow lift

### Path Aliases
TypeScript path alias configured in tsconfig.json:
- `@/*` maps to `src/*`
- Example: `import Component from '@/components/Component.astro'`

## Key Technical Decisions

### Why No Real Swiper.js?
Despite naming conventions (`.swiper-slide`, `.swiper-wrapper`), the project uses custom Svelte-based navigation instead of Swiper.js library. Classes are kept for CSS compatibility.

### Astro vs Svelte Component Choice
- Use `.astro` for slides that are primarily static content with CSS animations
- Use `.svelte` for slides needing reactive state, complex interactions, or imperative animations
- The Navigation component must be `.svelte` to handle slide state/transitions

### Animation Strategy
- GSAP is the single source of truth for all JavaScript animations
- CSS animations (`@keyframes`) are only for simple hover/focus states
- Slide transitions are controlled via GSAP timeline in `animations.ts`
- Use staggered animations (0.1s delay) for child elements to create visual hierarchy

### Styling Approach
- Tailwind CSS for utility classes
- CSS variables in `global.css` for design tokens
- Component-scoped `<style>` blocks for component-specific overrides
- Never inline critical styles; keep them in CSS files for maintainability

## Common Development Patterns

### Adding a New Slide
1. Create `SlideXXName.astro` or `.svelte` in `src/components/slides/`
2. Add to `src/pages/index.astro` imports and Navigation children
3. Update `slideNames` array in `Navigation.svelte`
4. Update `totalSlides` variable in `Navigation.svelte`
5. Wrap content in `<div class="swiper-slide">`

### Working with Animations
```ts
// In Svelte component onMount or Astro <script>
import { animateSlideEntrance } from '@/utils/animations';

// Animate entrance when slide becomes active
animateSlideEntrance(slideElement);

// For counters/stats
animateCounter(element, 42, 2); // counts to 42 over 2 seconds

// For parallax backgrounds
const cleanup = addParallaxEffect(bgElement, 0.5);
```

### Creating Glassmorphic UI Elements
```astro
<div class="card-glass">
  <!-- Content with automatic blur, border, shadow -->
</div>

<button class="btn btn-primary">
  <!-- Automatic glow + hover scale -->
</button>
```

## Presentation Content & Key Concepts

### Main Theme
The presentation explores "Vibe Coding vs Software Engineering" - examining the tension between AI-assisted rapid development and traditional software engineering rigor.

### Core Framework: 4R
1. **Risk** - Security assessment, vulnerability detection
2. **Readability** - Code quality, naming, complexity metrics
3. **Reliability** - TDD with AI, test coverage, mutation testing
4. **Resilience** - Graceful degradation, circuit breakers, timeouts

### Key Data Points
- 85% developers use AI, but only 32% confident in quality
- +154% PR size, +91% review time, +9% bugs escaped
- +41% code churn, 211M LOC copy-pasted (GitClear study)
- 30% of AI-generated code has vulnerabilities
- 70% bug detection rate at 200-400 LOC per review
- Human attention decays 50% after 40-60 min review

### Practical Tools Covered
- Pre-commit hooks (Husky)
- Stack PRs (200-400 LOC limit)
- Guardrail prompts (context, task, scope, validation)
- Augmented reviewers (GitHub Copilot, CodeRabbit, Kudu Merge)
- Real cases: Amazon Java migration, UK Government modernization

## Project Constraints

- Dev server runs on port 4321 (configured in astro.config.mjs)
- All slides must be full viewport height (100vh)
- Maintain the monochrome blue palette for brand consistency
- Generous whitespace is intentional (design principle from PLAN.md)
- Animations should have purpose (avoid gratuitous motion)
- Responsive breakpoints: 768px (tablet), 480px (mobile)

## File Organization Rules

- Slides go in `src/components/slides/`
- Reusable UI components go in `src/components/ui/`
- Animation utilities stay in `src/utils/`
- Global styles in `src/styles/global.css`
- Animation-specific CSS in `src/styles/animations.css` (if needed beyond GSAP)

## Performance Considerations

- Astro partial hydration: only hydrate Svelte components with `client:load`
- GSAP uses GPU-accelerated properties (opacity, transform)
- Fonts are preloaded via Google Fonts with `display=swap`
- Backdrop-filter blur is intentionally used (glassmorphism) despite performance cost

## Deployment Configuration

- **Base Path**: `/ai-presentation` (configured in astro.config.mjs)
- **Site URL**: `https://codigosinsiesta.github.io`
- **Build Output**: Static files in `dist/` directory
- **GitHub Pages**: Automatic deployment via GitHub Actions workflow

## Known Issues & Debugging

### Navigation Debugging
The Navigation component includes comprehensive error handling and logging:
- Console logs for initialization, slide switching, and errors
- Fallback navigation without animations if GSAP fails
- Slide count verification against expected total
- Hash navigation with error handling

### Common Deployment Issues
1. **JavaScript Hydration**: Svelte components may not hydrate correctly
2. **Base Path**: Asset paths must include `/ai-presentation` prefix
3. **CSS Loading**: Component-scoped CSS must be bundled correctly
4. **Event Listeners**: Keyboard/click events may fail to attach

### Debugging Steps
1. Open browser console and look for JavaScript errors
2. Verify Navigation initialization logs appear
3. Test hash navigation manually (add `#/paradox` to URL)
4. Check that `swiper-slide-active` class is being applied/removed
5. Verify GSAP animations are not throwing errors