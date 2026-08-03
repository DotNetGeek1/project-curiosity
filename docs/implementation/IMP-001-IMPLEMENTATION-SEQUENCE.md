# IMP-001: Implementation Sequence

| Field | Value |
|---|---|
| **Document ID** | IMP-001 |
| **Status** | Draft |
| **Owner** | I own this document |
| **Last Updated** | 2026-08-03 |
| **Depends On** | ADR-002, ADR-003, TECH-001, UX-001 to UX-006 |

## Purpose

This document defines the order in which the first public version should be built. The sequence is designed to reduce rework by proving architecture, content loading and visual foundations before page polish.

## Sequence

### Phase 1 — Repository scaffold

Create the application shell, package configuration, linting, formatting, TypeScript strictness, test runner, CI workflow and deployment baseline.

Deliverables:

- application boots locally;
- production build succeeds;
- CI validates type checking, linting, tests and build;
- environment variables are documented;
- no visual design work beyond a basic shell.

### Phase 2 — Design foundations

Implement semantic tokens, typography, layout primitives, focus styles, link styles, spacing and the global document shell.

Deliverables:

- token definitions map directly to DSN-002;
- text remains readable without JavaScript;
- reduced-motion behaviour is present from the beginning;
- colour contrast and keyboard focus are testable.

### Phase 3 — Structured content pipeline

Implement schemas, validation, content loading, generated routes, draft exclusion, relationship resolution and build failures for invalid content.

Deliverables:

- one sample experiment and one sample note compile successfully;
- malformed metadata fails the build with a useful message;
- private and draft entries cannot appear in production;
- page components receive validated data rather than parsing files themselves.

### Phase 4 — Reusable components

Implement the minimum shared components needed by the MVP:

- site header;
- site footer;
- page intro;
- experiment card;
- state marker;
- metadata row;
- evidence block;
- note card;
- related-content list;
- prose and diagram containers.

Do not build speculative components for future graph, AI or simulation features.

### Phase 5 — Core routes

Build routes in this order:

1. experiment index;
2. experiment detail;
3. homepage;
4. About page;
5. research-note index and detail;
6. not-found and error states.

The experiment route comes first because it exercises the largest part of the content and component model.

### Phase 6 — Launch content

Author and review complete stories for DeliveryIQ, Chronos and Morris. Add shorter honest entries for SafeNet and Token Burn only where available evidence supports them.

### Phase 7 — Quality hardening

Complete:

- keyboard testing;
- screen-reader smoke testing;
- responsive review;
- performance review;
- metadata and social-preview validation;
- broken-link checks;
- privacy review;
- content proofreading;
- production deployment rehearsal.

### Phase 8 — Public release

Publish only after the first-release checklist is complete. Record known limitations rather than delaying indefinitely for post-MVP features.

## Sequencing rules

- Do not polish individual pages before the content model is validated.
- Do not introduce a CMS during the MVP.
- Do not add client state unless a documented interaction requires it.
- Do not add AI features to unblock ordinary content navigation.
- Do not build the graph before there is enough content to justify it.
- Do not allow temporary sample content to become permanent by accident.

## Exit criteria

This sequence is complete when the public MVP is deployed, all launch content is validated and the repository contains no undocumented architectural departure from accepted ADRs.

## Related documents

- `docs/implementation/IMP-002-REPOSITORY-SCAFFOLD.md`
- `docs/implementation/IMP-004-DEFINITION-OF-DONE.md`
- `docs/implementation/IMP-006-FIRST-RELEASE-CHECKLIST.md`
