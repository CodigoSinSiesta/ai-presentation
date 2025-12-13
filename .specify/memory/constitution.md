<!--
Sync Impact Report (Version 1.0.0 - Initial Ratification)
=========================================================
Version Change: N/A → 1.0.0 (Initial constitution)
Modified Principles: N/A (New constitution)
Added Sections:
  - Core Principles (5 principles based on 4R Framework + Architecture)
  - Quality Gates (mandatory checks)
  - Development Workflow (PR limits, hooks, review process)
  - Governance (amendment procedures)

Templates Requiring Updates:
  ✅ plan-template.md - Constitution Check section already prepared for principles
  ✅ spec-template.md - Requirements alignment with quality standards present
  ✅ tasks-template.md - Task categorization supports independent testing

Follow-up TODOs: None - all placeholders filled with project-specific values
-->

# AI Presentation Constitution

## Core Principles

### I. Risk Assessment (NON-NEGOTIABLE)
Every code change MUST be evaluated for security vulnerabilities before merge:
- Secrets and credentials MUST NOT be committed to version control
- Input validation MUST be implemented for all user-facing interactions
- Dependencies MUST be scanned for known vulnerabilities
- Pre-commit hooks MUST block commits that fail security checks

**Rationale**: The presentation advocates for the "Risk" pillar of the 4R Framework
as the first line of defense. 30% of AI-generated code contains vulnerabilities;
automated gates prevent these from reaching production.

### II. Readability Standards
Code MUST be maintainable and understandable by the team in 6 months:
- Linters and formatters (ESLint, Prettier) MUST be configured and enforced
- Naming conventions MUST be clear and consistent across the codebase
- Cyclomatic complexity MUST remain below 10 per function
- Comments MUST explain "why" decisions were made, not "what" code does
- Component architecture MUST follow documented patterns (Astro static/Svelte
  interactive split per CLAUDE.md)

**Rationale**: The presentation emphasizes human cognitive limits in code review
(70% bug detection at 200-400 LOC). Clear, readable code accelerates reviews and
reduces cognitive load.

### III. Reliability Through Testing (NON-NEGOTIABLE)
TDD practices MUST be applied to critical functionality:
- Tests MUST be written before implementation (Red-Green-Refactor cycle)
- Tests MUST fail initially to prove they catch the intended behavior
- User-facing features MUST have acceptance criteria with testable scenarios
- Integration tests MUST cover component interactions and state transitions
- Pre-commit hooks MUST block commits if tests fail

**Rationale**: The "Reliability" pillar of the 4R Framework. AI generates code
for ideal conditions; TDD ensures edge cases and production scenarios are
covered. Automated testing catches regressions before merge.

### IV. Resilience Patterns
Systems MUST gracefully handle resource constraints and failures:
- Animation performance MUST NOT block user interaction (GSAP GPU-accelerated)
- Navigation MUST have fallback behavior if GSAP fails to load
- Error boundaries MUST be implemented for component failures
- Loading states MUST be provided for async operations
- Logging MUST capture errors with sufficient context for debugging

**Rationale**: The "Resilience" pillar of the 4R Framework. Presentation websites
must work across browsers, devices, and network conditions. Graceful degradation
ensures core functionality remains accessible.

### V. Architecture Consistency
Component architecture MUST follow the hybrid Astro/Svelte strategy:
- Static content slides MUST use `.astro` components with CSS animations
- Interactive slides MUST use `.svelte` components with GSAP animations
- Design system tokens MUST be defined in `src/styles/global.css`
- Path aliases (`@/*`) MUST be used for imports to maintain portability
- The monochrome blue palette MUST be preserved for brand consistency

**Rationale**: Documented in CLAUDE.md lines 20-24, 76-124. Consistent
architecture enables parallel development, reduces cognitive overhead, and
ensures optimal performance (11 Astro slides / 10 Svelte slides balance).

## Quality Gates

All pull requests MUST pass these automated checks before merge:

1. **Security Scan**: Pre-commit hooks check for secrets, vulnerable patterns
2. **Linting**: ESLint validates code style and catches common errors
3. **Type Checking**: `astro check` validates TypeScript types
4. **Build Verification**: `pnpm run build` succeeds without errors
5. **Manual Review**: At least one senior developer reviews code

**Gate Violations**: If a quality gate must be bypassed (e.g., urgent hotfix),
it requires explicit justification in the PR description and post-merge
remediation within 24 hours.

## Development Workflow

### Stack PRs (200-400 LOC Limit)
- Pull requests MUST be limited to 200-400 lines of code (as advocated in
  the presentation, slides 13 and 29-32)
- Large features MUST be broken into sequential PRs (stack PRs methodology)
- Each PR MUST be independently reviewable and testable
- Use GitHub's native stack PR support or feature flags for incremental delivery

**Rationale**: Human attention decays 50% after 40-60 minutes of review;
detection rate is 70-90% at 200-400 LOC but drops sharply beyond that
(presentation slides 12, 29).

### Pre-Commit Hooks (Mandatory)
- Husky MUST be configured to run linting, formatting, and security checks
- Hooks MUST block commits that fail quality standards
- Installation and setup MUST take less than 5 minutes for new contributors
- Hook configuration lives in `.husky/` directory

**Rationale**: Pre-commit hooks are a core recommendation in the presentation
(slides 14, 37-38). They catch issues before code review, reducing reviewer
cognitive load and accelerating the feedback loop.

### Code Review Standards
- Reviews MUST focus on logic, security risks, and architectural alignment
- Reviewers MUST NOT approve PRs exceeding 400 LOC without justification
- AI-assisted review tools (GitHub Copilot, CodeRabbit, Kudu) MAY be used
  to flag risks, but human decision is final
- Review comments MUST be constructive and reference specific principles
  or patterns from CLAUDE.md

**Rationale**: Presentation advocates for augmented reviewers (slides 16, 44-47)
to provide risk guidance in ~30 seconds, while senior developers make final
decisions. +90% satisfaction, -40% review time when properly implemented.

## Governance

### Amendment Procedure
1. Proposed changes MUST be documented in a PR to this constitution file
2. Amendments MUST include rationale and impact analysis
3. Constitution changes require approval from project maintainers
4. Version MUST be bumped per semantic versioning:
   - MAJOR: Backward-incompatible principle removals or redefinitions
   - MINOR: New principles/sections added or materially expanded guidance
   - PATCH: Clarifications, wording fixes, non-semantic refinements

### Versioning Policy
- Constitution version follows MAJOR.MINOR.PATCH format
- `LAST_AMENDED_DATE` MUST be updated with each change (ISO 8601 format)
- `RATIFICATION_DATE` remains unchanged after initial adoption
- Sync Impact Report MUST be prepended as HTML comment with each update

### Compliance Review
- All PRs MUST verify alignment with applicable constitution principles
- Template files (plan-template.md, spec-template.md, tasks-template.md)
  MUST reference constitution principles in their "Constitution Check" sections
- Complexity or deviations MUST be explicitly justified in plan.md with
  alternatives considered

### Living Document
- This constitution reflects the project's current understanding and practices
- It MUST be reviewed quarterly to ensure alignment with evolving best practices
- The constitution supersedes all other guidance documents (CLAUDE.md is
  operational guidance; constitution is governance)

**Version**: 1.0.0 | **Ratified**: 2025-12-09 | **Last Amended**: 2025-12-09
