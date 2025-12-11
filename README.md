# AI Presentation: Vibe Coding vs Software Engineering 🚀

A comprehensive presentation exploring the tension between AI-assisted rapid development ("Vibe Coding") and traditional software engineering rigor. This project is an interactive web-based presentation featuring 21 slides covering the 4R Framework for responsible AI coding.

**Presented by**: Alejandro de la Fuente, Jose David  
**Duration**: 45-60 minutes  
**Live**: https://codigosinsiesta.github.io/ai-presentation/

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Topics](#key-topics)
- [The 4R Framework](#the-4r-framework)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Development](#development)
- [Presentation Flow](#presentation-flow)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This presentation tackles a critical challenge in modern software development: **85% of developers use AI for coding, but only 32% are confident in the quality of AI-generated code**.

We explore:
- The hidden costs of AI-assisted development (PR overhead, code churn, security risks)
- A practical framework for responsible AI coding (the **4R Framework**)
- Real-world case studies and proven tools
- Best practices for augmented code review and quality assurance

---

## 🎓 Key Topics

### Problem Statement (Slides 1-6)
- **Vibe Coding Paradox**: High adoption, low confidence
- **Metrics**: +154% PR size, +91% review time, +9% bugs escaped
- **Code Churn**: +41% churn, 211M LOC copy-pasted (GitClear study)
- **Security**: 30% of AI-generated code has vulnerabilities
- **METR 2025 Study**: AI impact on code quality

### The 4R Framework (Slides 7-11)
A structured approach to responsible AI coding:

1. **Risk** - Security assessment & vulnerability detection
2. **Readability** - Code quality standards & complexity metrics
3. **Reliability** - TDD with AI, test coverage, mutation testing
4. **Resilience** - Graceful degradation, circuit breakers, timeouts

### Practical Tools (Slides 12-14)
- Pre-commit hooks with Husky
- Stack PRs methodology (200-400 LOC limit)
- Human cognitive limits in code review (70% detection at 40-60 min)

### Advanced Techniques (Slides 15-19)
- Prompt guardrail structure
- Few-shot learning & Chain-of-Thought prompting
- Augmented reviewers (GitHub Copilot, CodeRabbit, Kudu Merge)
- Real case studies: Amazon Java migration, UK Government modernization

---

## 🔷 The 4R Framework

| Framework Element | Focus | Tools & Practices |
|------------------|-------|------------------|
| **Risk** | Security & vulnerability assessment | Static analysis, SAST, threat modeling |
| **Readability** | Code quality & maintainability | Linting, complexity metrics, peer review |
| **Reliability** | Testing & quality assurance | TDD, mutation testing, test coverage |
| **Resilience** | System robustness | Circuit breakers, graceful degradation, monitoring |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/CodigoSinSiesta/ai-presentation.git
cd ai-presentation

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The presentation will be available at **http://localhost:4321**

### Build for Production

```bash
# Type-check and build
pnpm run build

# Preview production build locally
pnpm run preview
```

---

## 📁 Project Structure

```
ai-presentation/
├── src/
│   ├── components/
│   │   ├── slides/           # 21 presentation slides (Astro + Svelte)
│   │   │   ├── Slide01Hero.astro
│   │   │   ├── Slide02Paradox.svelte
│   │   │   ├── Slide03Metrics.svelte
│   │   │   └── ... (18 more slides)
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.astro
│   │   │   └── Card.astro
│   │   └── Navigation.svelte # Custom slide navigation
│   ├── layouts/
│   │   └── PresentationLayout.astro
│   ├── pages/
│   │   └── index.astro       # Main entry point
│   ├── styles/
│   │   ├── global.css        # Design tokens & global styles
│   │   └── animations.css    # Animation definitions
│   ├── utils/
│   │   └── animations.ts     # GSAP animation utilities
│   └── env.d.ts              # TypeScript definitions
├── package.json
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS setup
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
└── README.md
```

---

## 🛠️ Technology Stack

### Core Framework
- **[Astro 4.x](https://astro.build)** - Static site generation & partial hydration
- **[Svelte 5.x](https://svelte.dev)** - Reactive components for interactive slides
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

### Styling & Animations
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Utility-first CSS
- **[GSAP 3.x](https://greensock.com/gsap/)** - Professional animations
- **CSS Custom Properties** - Design system & theming

### UI & Icons
- **[Lucide Svelte](https://lucide.dev)** - Icon library
- **[Swiper](https://swiperjs.com)** - Slide navigation patterns (custom implementation)

### Development
- **[PostCSS](https://postcss.org)** - CSS transformation
- **[Astro Check](https://docs.astro.build/en/reference/configuration-reference/#check)** - Type checking

---

## 💻 Development

### Available Commands

```bash
# Development
pnpm run dev      # Start dev server at http://localhost:4321

# Production
pnpm run build    # Type-check & build for production
pnpm run preview  # Preview production build locally

# Utilities
pnpm run astro    # Run astro CLI commands
pnpm install      # Install/update dependencies
```

### Component Strategy

**Astro Components** (static, CSS animations):
- `Slide01Hero.astro` - Introduction
- `Slide05Security.astro` - Security risks
- `Slide07Framework.astro` - 4R Framework intro
- `Slide09Readability.astro` - Code quality
- `Slide11Resilience.astro` - System patterns
- `Slide13StackPRs.astro` - Stack PRs methodology
- `Slide15Guardrails.astro` - Prompt guardrails
- `Slide18Closing.astro` - Action plan
- `Slide18B.astro` - Final thoughts

**Svelte Components** (interactive, GSAP animations):
- `Slide02Paradox.svelte` - Animated paradox counter
- `Slide03Metrics.svelte` - Dynamic metrics visualization
- `Slide04Churn.svelte` - Code churn analysis
- `Slide06METR.svelte` - Study results
- `Slide08Risk.svelte` - Risk assessment
- `Slide10Reliability.svelte` - TDD demonstration
- `Slide12Limits.svelte` - Review capacity indicators
- `Slide14Hooks.svelte` - Pre-commit hooks demo
- `Slide16Reviewers.svelte` - Reviewer tools showcase
- `Slide17Cases.svelte` - Case studies

### Navigation

- **Hash-based routing**: `#/hero`, `#/paradox`, `#/metrics`, etc.
- **Keyboard**: Arrow keys to navigate
- **Mouse**: Prev/Next buttons
- **Custom Svelte navigation** - Full control over transitions

---

## 🎨 Design System

### Color Palette (Monochrome Blue Theme)

```css
--color-base-dark: #0A1628           /* Deep navy background */
--color-primary-cobalt: #1E3A8A      /* Primary interactive elements */
--color-accent-bright: #3B82F6       /* Call-to-action elements */
--color-electric: #60A5FA            /* Highlights & accents */
--color-neutral-light: #FAF9F6       /* Text & light elements */
```

### Typography

- **Display (4-6rem)**: Space Grotesk 800-900 - Main headings
- **Subheaders (2-3rem)**: Bricolage Grotesque 600-700 - Section titles
- **Body (1-1.2rem)**: IBM Plex Sans 400-500 - Paragraphs & content
- **Monospace**: JetBrains Mono 500 - Code & statistics

### UI Components

- `.card-glass` - Glassmorphic cards with backdrop blur
- `.btn-primary`, `.btn-secondary`, `.btn-ghost` - Button variants
- Hover states: `scale(1.03)` + shadow lift
- All slides: 100vh full viewport height

### Animation Principles

- GSAP for all JavaScript animations (GPU-accelerated)
- CSS keyframes for simple hover/focus states
- Staggered children animations (0.1s delay)
- Smooth slide transitions with opacity & transform

---

## 📊 Key Statistics & Data Points

- **85%** of developers use AI, only **32%** are confident in quality
- **+154%** average PR size increase
- **+91%** code review time increase
- **+9%** bugs escaped to production
- **+41%** code churn increase
- **211M LOC** copy-pasted from AI sources (GitClear)
- **30%** of AI-generated code has vulnerabilities
- **70%** bug detection rate at 200-400 LOC per review
- **50%** human attention decay after 40-60 min reviews

---

## 🔗 Presentation Flow

1. **Hero Introduction** - Topic setup & speakers
2. **The Paradox** - Problem statement & contradiction
3. **Metrics** - Quantified overhead costs
4. **Code Churn** - Quality degradation analysis
5. **Security Risks** - Vulnerability landscape
6. **METR Study** - Academic research insights
7. **4R Framework** - Introducing the solution
8. **Risk Assessment** - Security in the 4R Framework
9. **Readability** - Code quality standards
10. **Reliability** - Testing & TDD with AI
11. **Resilience** - System design patterns
12. **Review Limits** - Human cognitive boundaries
13. **Stack PRs** - Practical size limits
14. **Pre-commit Hooks** - Automation tools
15. **Guardrails** - Prompt structure & best practices
16. **Advanced Prompts** - Few-shot & Chain-of-Thought
17. **Augmented Reviewers** - Tool ecosystem
18. **Case Studies** - Real-world implementations
19. **UK Government** - Deep dive case study
20. **Action Plan** - Next steps & takeaways
21. **Closing Thoughts** - Final metrics & success criteria

---

## 🤝 Contributing

We welcome contributions! Please feel free to:

- Report issues or bugs
- Suggest improvements or new slides
- Contribute code enhancements
- Improve documentation

**Guidelines**:
- Follow the existing code style and component patterns
- Ensure TypeScript types are correct
- Test animations in multiple browsers
- Keep the monochrome blue color scheme
- Respect the 100vh slide constraint

---

## 📝 License

This project is open source. Please check the LICENSE file for details.

---

## 🙋 Support & Feedback

- **GitHub Issues**: Report bugs or suggest features
- **Discussions**: Share ideas and ask questions
- **Direct Contact**: Open an issue with questions

---

## 🔗 Quick Links

- **Live Presentation**: https://codigosinsiesta.github.io/ai-presentation/
- **GitHub Repository**: https://github.com/CodigoSinSiesta/ai-presentation
- **Author Website**: https://tellmealex.dev

---

## 🎬 About This Presentation

This presentation was created to bridge the gap between the excitement of AI-assisted development and the realities of software engineering rigor. It's designed for:

- **Developers** learning to leverage AI responsibly
- **Tech Leads** implementing quality gates
- **Engineering Managers** making tool decisions
- **Architects** designing AI-aware systems

**Key Takeaway**: AI is a powerful tool, but it requires thoughtful integration with existing software engineering practices to deliver reliable, secure, maintainable code.

---

**Made with ❤️ by Código Sin Siesta**
