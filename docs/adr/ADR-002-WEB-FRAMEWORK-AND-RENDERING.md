# ADR-002: Web Framework and Rendering Model

| Field | Value |
|---|---|
| Status | Accepted |
| Version | 1.0 |
| Date | 2026-08-03 |
| Depends On | ADR-001, TECHNICAL-RULES |

## Decision

The initial implementation will use a modern React framework with TypeScript and static-first rendering. Next.js is the default choice unless implementation discovery reveals a material constraint.

Pages should be statically generated wherever content permits. Server rendering may be used for routes that genuinely require request-time work. Client components are introduced only for bounded interaction.

## Context

The site is primarily authored content with a small amount of interaction. It needs excellent accessibility, predictable SEO, fast first render and a maintainable path to future interactive experiments.

A full single-page application would add hydration and navigation complexity without improving the core reading experience. A completely static generator could work, but the likely future use of React-based interactive examples, structured content and selective server features makes a React meta-framework a practical middle ground.

## Drivers

- static content and metadata should render without client JavaScript;
- TypeScript should validate application and content contracts;
- MDX or equivalent authored content should integrate cleanly;
- route-level code splitting should be automatic;
- future interactive experiments should be isolated rather than forcing an application-wide rewrite;
- deployment should remain simple.

## Alternatives

### Astro

Strong static-first behaviour and content support. Rejected as the default because the expected implementation workflow and future React-based interactive features make Next.js a more familiar single-framework choice. This decision may be revisited before scaffold creation if Astro offers a clearly simpler result.

### Eleventy or another static-site generator

Excellent for content and low JavaScript. Rejected because interactive React experiments would require a more fragmented integration model.

### Vite React SPA

Simple development model. Rejected because static metadata, initial rendering and content routing would require rebuilding capabilities already supplied by a meta-framework.

### Bespoke .NET web application

Technically viable and aligned with my background. Rejected for the initial public site because it introduces more hosting and application surface than the content experience requires.

## Rendering rules

- Static generation is the default.
- Server components are preferred for content and layout.
- Client components require an explicit interaction need.
- No global client state library is included in the scaffold.
- Navigation must function as ordinary links.
- Content must be available when client JavaScript fails.
- Build-time content validation must fail the build on invalid required metadata.

## Consequences

### Positive

- fast initial pages;
- strong SEO and social metadata support;
- familiar React component model;
- progressive path to interactive examples;
- straightforward hosting on common platforms.

### Negative

- framework conventions can encourage unnecessary client components;
- upgrades and runtime choices require maintenance;
- a static-first content site may use only a fraction of the framework.

## Guardrails

- Do not add client boundaries for convenience.
- Do not fetch local content from internal HTTP APIs.
- Do not introduce authentication, databases or server actions into the MVP.
- Do not use framework-specific image or font features without checking portability and build behaviour.

## Review triggers

Review this ADR if:

- the site becomes predominantly interactive;
- deployment constraints make the framework impractical;
- content builds become unacceptably slow;
- Astro or another option materially simplifies the implementation before scaffold commitment.

## Acceptance criteria

- [ ] Core pages are statically generated.
- [ ] Initial content appears without client JavaScript.
- [ ] Client components are isolated and documented.
- [ ] TypeScript strict mode is enabled.
- [ ] The build validates content metadata and links where practical.
