# TECH-001: Application Structure

| Field      | Value                     |
| ---------- | ------------------------- |
| Status     | Accepted                  |
| Version    | 1.0                       |
| Depends On | ADR-002, ADR-003, ADR-004 |

## Purpose

This document defines the initial repository and application structure. It is intended to give Cursor and other coding agents a stable target without over-prescribing implementation details that should emerge during scaffolding.

## Proposed structure

```text
app/
  routes and page composition
components/
  primitives/
  content/
  navigation/
  experiments/
content/
  experiments/
  notes/
  pages/
lib/
  content/
  metadata/
  validation/
  utilities/
public/
  images/
  diagrams/
styles/
  tokens/
  global/
  components/
tests/
  unit/
  integration/
  accessibility/
docs/
```

Names may adjust to framework conventions, but responsibilities must remain separated.

## Boundaries

### Routes

Routes compose pages from content and components. They should contain little business logic.

### Content layer

The content layer loads, validates, relates and sorts authored content. Page components should consume typed objects rather than parsing files directly.

### Components

Components are grouped by responsibility, not visual size. Shared primitives remain small; experiment-specific components do not leak into the global system without a proven repeat use.

### Library code

`lib` contains framework-independent validation, metadata and content functions where practical. Utilities must not become an unstructured dumping ground.

### Styles

Tokens are centralised. Global styles establish the baseline; component styles stay close to their component or follow one consistent project convention.

## Import rules

- Content may reference approved MDX components through a controlled map.
- Primitives must not import page-level components.
- Generic components must not depend on individual experiment content.
- Client components may import server-safe utilities only when those utilities contain no server-only dependencies.
- Circular dependencies fail linting or architecture checks where practical.

## Route model

Expected routes include:

- `/`
- `/experiments`
- `/experiments/[slug]`
- `/notes`
- `/notes/[slug]`
- `/about`

Draft content does not generate public routes.

## Configuration

- Environment variables are validated centrally.
- The MVP should require few or no secrets.
- Public configuration is distinct from server-only configuration.
- No environment variable is accessed ad hoc throughout components.

## Error handling

- Missing content produces a controlled not-found route.
- Validation errors fail development and CI with actionable messages.
- Unexpected runtime errors show a restrained error state without exposing internals.
- Broken optional evidence should not erase the surrounding story.

## Logging

Logging is minimal and structured. Production logs must not include secrets, private content or unnecessary visitor information.

## Dependency policy

Add a dependency only when it materially reduces risk or maintenance.

Before adding one, check:

- whether the platform already supplies the capability;
- bundle and runtime cost;
- maintenance activity;
- accessibility impact;
- licensing;
- whether a small local implementation is genuinely simpler.

## Acceptance criteria

- [ ] Routes, content, components and validation have clear boundaries.
- [ ] Content parsing is centralised.
- [ ] Experiment-specific code remains isolated.
- [ ] Environment configuration is typed and validated.
- [ ] The initial structure supports all MVP routes without speculative services.
