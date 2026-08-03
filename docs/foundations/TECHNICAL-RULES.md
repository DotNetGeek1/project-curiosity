# Project Curiosity — Technical Rules

| Field           | Value                                             |
| --------------- | ------------------------------------------------- |
| **Document ID** | FOUNDATION-TECH-001                               |
| **Status**      | Proposed                                          |
| **Version**     | 1.0                                               |
| **Date**        | 2026-08-03                                        |
| **Owner**       | Me                                                |
| **Extends**     | [ADR-001](../adr/ADR-001-Engineering-Notebook.md) |

## 1. Purpose

This document defines the technical guardrails for Project Curiosity before implementation begins.

It does not attempt to pre-design every component or lock the site to one framework forever. It establishes the constraints that protect the product vision: content-first architecture, progressive enhancement, strong accessibility, predictable performance and a codebase that remains easy to evolve.

## 2. Primary Technical Principle

> The implementation must make the content easier to create, understand and maintain. It must not become the main event.

Project Curiosity is allowed to contain technically ambitious experiments. The shell around those experiments must remain boring in the best possible way: stable, testable, observable and quick to load.

## 3. Proposed Baseline Stack

The initial implementation may use:

- Next.js with the App Router;
- TypeScript in strict mode;
- React Server Components by default;
- MDX or structured Markdown for authored content;
- CSS custom properties and a restrained styling layer;
- static generation for public content wherever practical;
- accessible SVG for diagrams;
- lightweight client components only where interaction is necessary.

The exact package choices require an implementation ADR once the repository is scaffolded.

Do not choose a dependency merely because Cursor generates it easily.

## 4. Architectural Boundaries

The repository should separate:

- **content** — experiment stories, notes and metadata;
- **presentation** — layouts, typography and components;
- **domain model** — experiment states, relations and validation;
- **enhancements** — interactive diagrams, search and future AI features;
- **infrastructure** — build, deployment, analytics and monitoring;
- **documentation** — decisions, rules and product specifications.

Content must not be embedded directly into page components except for small interface labels.

## 5. Content-First Architecture

Experiment stories are the core product data.

The content system must support at least:

```yaml
title: DeliveryIQ
slug: delivery-iq
question: What would engineering delivery look like if AI were designed into it from the beginning?
summary: Short editorial summary.
state: exploring
started: 2025-01-01
lastInvestigated: 2026-08-03
themes:
  - agentic systems
  - developer experience
technologies:
  - TypeScript
  - PostgreSQL
repository:
  visibility: private
  walkthroughAvailable: true
featured: true
relatedNotes: []
relatedExperiments: []
```

The final schema must be validated at build time.

The system should reject:

- unknown experiment states;
- malformed dates;
- duplicate slugs;
- missing required questions or summaries;
- broken internal references.

## 6. Rendering Strategy

Default to server rendering or static generation.

Client-side rendering is justified only for genuine interaction, such as:

- temporal graph exploration;
- architecture-diagram highlighting;
- interactive comparisons;
- future on-site search;
- carefully isolated project demonstrations.

A normal article, card, navigation bar or metadata panel does not need a client component.

The core site must remain useful if JavaScript fails after the HTML is delivered.

## 7. Progressive Enhancement

Every advanced capability needs a stable baseline.

Examples:

- an animated architecture diagram requires a static SVG or textual description;
- a Chronos timeline explorer requires a readable timeline summary;
- a Three.js experiment requires a poster or static fallback;
- a future Morris interface must not replace navigation or project content;
- client search should not prevent ordinary browsing.

The enhancement may be memorable. The fallback must be complete.

## 8. TypeScript Rules

- Enable strict mode.
- Avoid `any`; use `unknown` and narrow explicitly.
- Validate external and authored data at boundaries.
- Prefer discriminated unions for experiment states and content variants.
- Keep shared domain types independent of UI components.
- Do not duplicate frontmatter types manually across multiple modules.
- Prefer explicit return types on public utilities and domain functions.
- Treat compiler errors as design feedback, not obstacles to suppress.

## 9. React and Component Rules

### 9.1 Server-first

Use Server Components by default. Add `use client` at the smallest practical boundary.

### 9.2 Component responsibility

Components should own one meaningful responsibility and expose semantic interfaces.

Prefer:

```tsx
<ExperimentState state="exploring" />
```

Over:

```tsx
<Badge colour="orange" label="Exploring" icon="flask" />
```

The first preserves domain meaning. The second leaks presentation decisions into content usage.

### 9.3 Composition

Prefer composition over configuration-heavy mega-components.

Avoid components with dozens of boolean props controlling unrelated layouts.

### 9.4 Semantics

Use semantic HTML before ARIA. Interactive elements must use the correct native element.

A styled link is still a link. A button is for an action.

## 10. Styling Rules

The styling system must implement the design tokens defined in future design specifications.

Requirements:

- CSS custom properties for global tokens;
- responsive rules based on content needs, not device brand breakpoints;
- no runtime CSS-in-JS dependency unless justified by ADR;
- no hard-coded colours scattered through components;
- no arbitrary one-off spacing values when a token exists;
- visible focus states;
- reduced-motion support;
- print-friendly experiment articles where practical.

Tailwind may be used if the implementation remains consistent with the token system and readable in review. It must not become an excuse for enormous, duplicated class strings.

## 11. Accessibility Rules

Accessibility requirements are non-negotiable.

At minimum:

- semantic landmarks and heading order;
- keyboard support for every interactive feature;
- focus visibility and logical focus order;
- skip link;
- WCAG AA colour contrast;
- text reflow at 400% zoom;
- reduced-motion behaviour;
- alternative text and diagram descriptions;
- form labels and useful validation;
- no information communicated by colour alone;
- automated accessibility checks in CI;
- manual keyboard and screen-reader smoke testing before release.

Interactive experiments need an accessibility plan before implementation, not after.

## 12. Performance Budgets

The initial site should target:

- strong Core Web Vitals on representative mobile hardware;
- minimal JavaScript on content pages;
- no blocking third-party scripts;
- optimised images with known dimensions;
- font subsetting or carefully limited font files;
- no autoplay media;
- lazy loading for heavy project demonstrations;
- cached static assets;
- route-level bundle visibility during development.

Suggested initial budgets:

- content-page client JavaScript: under 100 KB compressed where practical;
- no individual decorative image above 250 KB without justification;
- no advanced experiment bundle loaded on unrelated pages;
- zero avoidable layout shift from fonts or media.

Budgets may change through an ADR based on measurement.

## 13. Image and Media Pipeline

- Store source assets separately from generated derivatives where practical.
- Use modern image formats with sensible fallbacks.
- Preserve original aspect ratios in metadata.
- Require useful alternative text or explicit decorative status.
- Keep screenshots free of secrets, personal data and employer-owned information.
- Prefer diagrams authored as accessible SVG or reproducible source formats.
- Do not embed text-heavy diagrams only as raster images.

## 14. Security and Privacy

The public application must never include:

- private GitHub tokens;
- repository deploy keys;
- unpublished source contents;
- employer credentials or data;
- unredacted logs;
- personal analytics identifiers;
- secrets in client environment variables.

Security rules:

- validate and sanitise content that can contain HTML;
- use a strict Content Security Policy where feasible;
- minimise third-party scripts;
- keep dependencies current;
- enable automated dependency scanning;
- use server-side handling for any contact form;
- rate-limit public write endpoints;
- avoid storing contact data unless necessary.

Any AI or repository-indexing feature requires a dedicated threat model and ADR.

## 15. Testing Strategy

### 15.1 Required layers

- unit tests for domain validation and utilities;
- component tests for interactive UI;
- integration tests for content loading and route generation;
- end-to-end smoke tests for primary journeys;
- accessibility automation;
- link checking;
- build-time content validation.

### 15.2 Critical journeys

Tests should cover:

- homepage to experiment;
- experiment index to story;
- navigation by keyboard;
- mobile navigation;
- contact path;
- 404 recovery;
- reduced-motion rendering;
- missing or malformed content failure.

Snapshot tests should be used sparingly. Prefer behavioural assertions.

## 16. Continuous Integration

A pull request should not be mergeable unless it passes:

- dependency installation with a locked package manager;
- formatting;
- linting;
- TypeScript compilation;
- unit and integration tests;
- content-schema validation;
- internal-link validation;
- production build;
- automated accessibility smoke checks;
- security and dependency checks appropriate to the stack.

Preview deployment is strongly recommended for visual review.

## 17. Repository and Branch Discipline

- `main` remains deployable.
- Changes should use short-lived branches.
- Product or architectural decisions require docs in the same PR or a preceding PR.
- Generated files should not be committed unless required for deployment or review.
- Lockfiles must be committed.
- Commit messages should describe intent.
- Large unrelated changes should not be bundled together.

## 18. Observability

The production site should expose enough information to diagnose failure without invasive tracking.

Recommended capabilities:

- deployment status;
- error reporting with source maps protected appropriately;
- basic uptime monitoring;
- Core Web Vitals or equivalent performance telemetry;
- privacy-respecting page and outbound-action analytics if justified.

Do not collect data merely because a platform provides it.

## 19. SEO and Metadata

Each experiment should provide:

- unique title and description;
- canonical URL;
- social preview metadata;
- structured data where genuinely applicable;
- indexable server-rendered content;
- meaningful heading structure.

SEO must not distort the writing into repetitive keyword copy.

## 20. Future AI Boundary

Morris, RAG search and repository-aware assistance are explicitly post-MVP.

When introduced, they must be isolated from the core site and satisfy:

- clear disclosure that responses are generated;
- source attribution;
- strict repository access controls;
- no training or retention assumption without consent;
- bounded tools and permissions;
- rate and cost controls;
- graceful removal without damaging the site;
- protection against prompt injection from indexed content.

Morris is not allowed write access to production, deployment or the public repository by default. We have laptops to protect.

## 21. Dependency Rules

Before adding a dependency, ask:

1. What problem does it solve?
2. Is the problem large enough to justify ownership of the dependency?
3. Can the platform or a small local utility solve it?
4. Is the package maintained and appropriately licensed?
5. What does it add to the client bundle?
6. Can it be removed later without rewriting the site?

Avoid packages that duplicate trivial browser or framework features.

## 22. Technical Decision Test

A proposed implementation should pass these questions:

1. Does it preserve the content-first model?
2. Is the complexity visible and justified?
3. Does it work without the enhancement?
4. Is it accessible?
5. Is it secure with realistic failure assumptions?
6. Is it testable?
7. Can another engineer understand it from the code and docs?
8. Does it keep `main` deployable?
9. Is it the simplest design that supports the expected evolution?
10. Are we solving a real current need, or entertaining future feature creep?

## 23. Acceptance Criteria

- [ ] Content is stored outside page components and validated at build time.
- [ ] Core pages are server-rendered or statically generated.
- [ ] Client components are isolated to genuine interactions.
- [ ] Advanced visuals have complete fallbacks.
- [ ] TypeScript strict mode is enabled.
- [ ] Accessibility checks are part of CI.
- [ ] Performance budgets are measured and enforced where practical.
- [ ] Secrets and private repository data cannot reach the client bundle.
- [ ] Primary journeys have automated smoke coverage.
- [ ] `main` remains deployable.
- [ ] Future Morris and RAG features remain optional and isolated.
- [ ] New dependencies and technical complexity require explicit justification.

## 24. Related Documents

- [ADR-001](../adr/ADR-001-Engineering-Notebook.md)
- [DESIGN-RULES.md](DESIGN-RULES.md)
- [WRITING-RULES.md](WRITING-RULES.md)
- [UX-RULES.md](UX-RULES.md)
- future project-structure specification
- future content-schema ADR
- future framework and deployment ADR
- future security threat model
