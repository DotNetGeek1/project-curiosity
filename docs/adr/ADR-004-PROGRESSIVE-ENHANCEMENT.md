# ADR-004: Progressive Enhancement

| Field      | Value                     |
| ---------- | ------------------------- |
| Status     | Accepted                  |
| Version    | 1.0                       |
| Date       | 2026-08-03                |
| Depends On | ADR-001, ADR-002, DSN-006 |

## Decision

Project Curiosity will use progressive enhancement as the default interaction strategy. Core navigation, reading, metadata, diagrams and evidence must work before client-side JavaScript executes. JavaScript may enhance bounded experiences but must not become the delivery mechanism for ordinary content.

## Context

The site is an engineering notebook first. Most visitor value comes from reading and understanding. Heavy client-side architecture would increase performance, accessibility and failure risk without improving the primary experience.

At the same time, several experiments may eventually benefit from interactive diagrams, demonstrations or simulations. The implementation therefore needs a deliberate boundary between complete static content and optional enhanced behaviour.

## Enhancement ladder

### Level 0: semantic document

- meaningful HTML;
- ordinary links;
- headings and landmarks;
- readable images and diagrams;
- forms usable through native browser behaviour where present.

### Level 1: visual presentation

- design tokens;
- responsive layout;
- typography;
- accessible focus and state styling.

### Level 2: bounded interaction

- navigation menu on narrow screens;
- disclosures;
- copy controls;
- active table-of-contents state;
- controlled diagram highlighting.

### Level 3: experiment-specific enhancement

- simulations;
- product demonstrations;
- graph exploration;
- interactive sequences.

Level 3 features must remain isolated and lazy-loaded.

## Rules

- Content is present in server-rendered HTML.
- Links remain links and buttons remain buttons.
- Client components do not wrap entire pages without need.
- Enhancement failures do not blank or block content.
- Loading indicators are used only for genuine asynchronous work.
- Interactive diagrams have complete static representations.
- Feature detection is preferred to browser assumptions.

## Failure behaviour

When JavaScript fails:

- navigation remains possible;
- pages remain readable;
- anchor links work;
- diagrams show their complete static state;
- external links and contact details remain accessible;
- no hydration error is exposed as the main experience.

## Alternatives

### Client-first application

Rejected because it adds complexity and fragility to a content-led site.

### No client JavaScript

Not adopted as an absolute rule because selected interactions can genuinely improve explanation and demonstrate engineering work.

## Consequences

### Positive

- resilient content delivery;
- lower JavaScript cost;
- stronger accessibility baseline;
- easier SEO and archiving;
- interactive work remains intentional.

### Negative

- some components require both static and enhanced designs;
- developers must resist framework defaults that encourage hydration;
- interactive experiments require careful boundaries.

## Acceptance criteria

- [ ] Core routes are navigable with JavaScript disabled.
- [ ] Primary content exists in the initial HTML.
- [ ] Client bundles are limited to components that require interaction.
- [ ] Every interactive diagram has a static fallback.
- [ ] No loading state replaces content that could have been rendered at build time.
