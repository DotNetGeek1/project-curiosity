# IMP-007: Implementation Reconciliation

| Field            | Value                                        |
| ---------------- | -------------------------------------------- |
| **Document ID**  | IMP-007                                      |
| **Status**       | Accepted                                     |
| **Owner**        | Me                                           |
| **Last Updated** | 2026-08-03                                   |
| **Depends On**   | ADR-002, ADR-003, ADR-004, TECH-001, IMP-001 |

## Purpose

This document defines how accepted specifications are compared with the working application now that a real scaffold exists.

The goal is not to force the code to match every sentence literally. The goal is to identify meaningful differences, decide whether the documentation or implementation is wrong, and record the outcome.

## Current Implemented Baseline

The base setup currently includes:

- Next.js 16 App Router;
- static export to `out/`;
- strict TypeScript;
- Tailwind CSS v4 with semantic tokens;
- MDX content validated through Content Collections and Zod;
- five experiment stubs and one research-note stub;
- Vitest and Testing Library;
- Playwright end-to-end tests;
- CI quality, build and end-to-end jobs;
- Azure Static Web Apps deployment and pull-request previews;
- Husky, lint-staged, commitlint and repository formatting rules.

This is the reference point for all subsequent implementation planning.

## Reconciliation Categories

Each reviewed area receives one category.

### Aligned

The implementation satisfies the intent of the accepted documents.

### Acceptable Variation

The implementation differs in detail but preserves the intended outcome. No change is required, but the difference may be documented.

### Documentation Drift

The implementation exposed a better or necessary approach. The relevant documentation should be updated.

### Implementation Gap

The accepted behaviour is not implemented or is implemented incompletely.

### Unrecorded Decision

The implementation introduces a material architectural or product decision not covered by an ADR or accepted specification.

### Premature Implementation

A feature or abstraction exists before the MVP needs it and creates cost, confusion or risk.

## Review Areas

### Repository structure

Compare the actual folders, boundaries and aliases with TECH-001 and IMP-002.

Check:

- route ownership;
- component grouping;
- content and schema locations;
- shared helpers;
- generated artefacts;
- public assets;
- test structure.

### Rendering and runtime

Confirm that routes remain statically renderable and that no server actions, route handlers or runtime fetches have entered the implementation.

### Content model

Compare the implemented frontmatter schema with CNT-001, CNT-002 and CNT-003.

Pay particular attention to status values, dates, evidence, visibility and relationships.

### Design system

Compare semantic tokens, typography, layout and components with DSN-001 through DSN-007.

### UX journeys

Exercise the routes defined in UX-001 through UX-006 at mobile and desktop widths.

### Accessibility

Verify semantic landmarks, heading order, keyboard access, focus visibility, reduced motion and image alternatives.

### Quality and operations

Compare scripts, CI, tests and deployment with TECH-002 and TECH-003.

### Voice and content

Compare rendered copy with WRITING-RULES and the launch copy pack. Flag any third-person wording, generic portfolio language or unsupported claims.

## Reconciliation Record

For each gap, record:

```text
Area:
Category:
Observed implementation:
Expected intent:
Impact:
Decision:
Required change:
Owner:
Evidence of completion:
```

Small gaps may be tracked in the implementation backlog. Material changes to accepted architecture require an ADR update or replacement.

## Priority Rules

Reconciliation work is prioritised in this order:

1. broken builds, deployment or content generation;
2. accessibility and privacy defects;
3. incorrect or unsupported public claims;
4. failures in primary reader journeys;
5. divergence from static rendering or content authority;
6. visual-system inconsistencies;
7. maintainability and developer-experience improvements;
8. optional polish.

## Exit Criteria

Reconciliation is complete when:

- [ ] the implemented routes and folders are mapped;
- [ ] the content schema has been compared with accepted contracts;
- [ ] all material differences have a category and decision;
- [ ] critical and high-impact gaps are in the build backlog;
- [ ] documentation drift has been corrected;
- [ ] no unrecorded architectural decision remains;
- [ ] the first vertical-slice milestone is defined from actual gaps.

## Related Documents

- `docs/IMPLEMENTATION-MANIFEST.md`
- `docs/implementation/IMP-001-IMPLEMENTATION-SEQUENCE.md`
- `docs/implementation/IMP-002-REPOSITORY-SCAFFOLD.md`
- `docs/implementation/IMP-008-FIRST-VERTICAL-SLICE.md`
- `docs/implementation/IMP-009-BUILD-BACKLOG.md`
