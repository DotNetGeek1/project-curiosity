# IMP-010: Component Inventory

| Field            | Value                      |
| ---------------- | -------------------------- |
| **Document ID**  | IMP-010                    |
| **Status**       | Active                     |
| **Owner**        | Me                         |
| **Last Updated** | 2026-08-03                 |
| **Depends On**   | DSN-005, TECH-001, IMP-007 |

## Purpose

This document records the implemented component surface and maps it to the accepted design-system contracts.

The initial scaffold already separates components into `layout`, `ui` and `mdx` groups. That boundary is a sensible starting point. The next task is to confirm what exists, what is missing and what should remain content-specific rather than becoming a reusable abstraction.

## Inventory Rules

For each component, record:

- path;
- category;
- purpose;
- server or client boundary;
- accepted contract it implements;
- variants and states;
- accessibility obligations;
- current tests;
- reconciliation category;
- action required.

## Categories

### Layout

Expected responsibilities include:

- site header;
- primary navigation;
- mobile navigation;
- footer;
- page shell;
- content-width containers;
- article layout;
- skip navigation.

Layout components own document structure, not experiment-specific content.

### UI

Expected reusable primitives include:

- experiment card;
- status badge;
- metadata list;
- section heading;
- evidence panel;
- callout;
- repository-visibility notice;
- related-content link;
- button and text-link treatments;
- tag or technology list.

Primitives should use semantic tokens and expose the smallest useful API.

### MDX

Expected rendering components include:

- figure;
- accessible diagram wrapper;
- code block;
- block quote;
- note or annotation;
- table wrapper;
- external-link handling;
- heading anchors where required.

MDX components must render sensible HTML and remain useful when enhanced behaviour is unavailable.

## Anti-Abstraction Rules

Do not create a reusable component merely because two current sections look similar.

A component is justified when at least one of the following is true:

- it carries accessibility behaviour;
- it enforces design tokens or spacing rules;
- it has meaningful variants or states;
- it is used in several places with the same semantic purpose;
- it isolates complex rendering or content behaviour;
- testing it independently provides useful confidence.

Keep one-off editorial compositions close to their page or MDX content.

## Initial Reconciliation Questions

1. Are all current routes using the shared page shell?
2. Is navigation semantic and keyboard accessible?
3. Is the site header a server component unless mobile interaction requires a client island?
4. Are experiment cards linked as a coherent interactive target?
5. Are statuses sourced from content metadata rather than hard-coded display text?
6. Do diagrams and figures have captions and alternatives?
7. Are raw colours, arbitrary spacing or default Tailwind palette values leaking into components?
8. Are client boundaries narrowly scoped?
9. Are component names based on semantic purpose rather than current visual appearance?
10. Are there components that exist only because a generator anticipated future needs?

## Inventory Table

Populate this table during code review.

| Component       | Path       | Category | Boundary         | Contract          | Status  | Action                         |
| --------------- | ---------- | -------- | ---------------- | ----------------- | ------- | ------------------------------ |
| Site header     | To inspect | Layout   | To inspect       | DSN-005 / UX-005  | Pending | Map implementation             |
| Footer          | To inspect | Layout   | Server preferred | DSN-005 / UX-005  | Pending | Map implementation             |
| Experiment card | To inspect | UI       | Server preferred | DSN-005 / UX-002  | Pending | Map metadata and states        |
| Status badge    | To inspect | UI       | Server           | CNT-001 / DSN-005 | Pending | Reconcile status vocabulary    |
| Figure          | To inspect | MDX      | Server preferred | DSN-007           | Pending | Check caption and alt handling |
| Code block      | To inspect | MDX      | Server preferred | DSN-005           | Pending | Check overflow and labels      |

## Completion Criteria

- [ ] every component under `src/components` is listed;
- [ ] all client components have a stated reason;
- [ ] design-system contracts are mapped;
- [ ] duplicate and premature abstractions are identified;
- [ ] accessibility behaviour is explicit;
- [ ] high-value missing components are added to IMP-009;
- [ ] no component is treated as complete solely because it renders.

## Related Documents

- `docs/design/DSN-005-COMPONENT-CONTRACTS.md`
- `docs/technical/TECH-001-APPLICATION-STRUCTURE.md`
- `docs/implementation/IMP-007-IMPLEMENTATION-RECONCILIATION.md`
- `docs/implementation/IMP-009-BUILD-BACKLOG.md`
