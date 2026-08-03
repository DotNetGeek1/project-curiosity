# IMP-003: Cursor and Agent Rules

| Field | Value |
|---|---|
| **Document ID** | IMP-003 |
| **Status** | Draft |
| **Owner** | I own this document |
| **Last Updated** | 2026-08-03 |
| **Depends On** | All accepted foundations, product, UX, design and architecture documents |

## Purpose

This document defines how coding agents should work in this repository. The goal is not to remove judgement. It is to stop tools from silently replacing documented decisions with fashionable defaults.

## Authority order

When instructions conflict, use this order:

1. accepted ADRs;
2. foundation rules;
3. product and UX specifications;
4. design and technical specifications;
5. implementation playbooks;
6. task-specific instructions;
7. framework defaults.

Framework defaults are last because this project is not a framework demo.

## Required behaviour

Before making a non-trivial change, an agent must:

1. identify the documents that govern the change;
2. state any genuine conflict or missing decision;
3. make the smallest change that satisfies the requirement;
4. preserve existing boundaries and terminology;
5. add or update tests where behaviour changes;
6. report assumptions clearly in the PR or commit summary.

## Prohibited behaviour

Agents must not:

- introduce a design library without an accepted decision;
- replace semantic tokens with arbitrary colours or spacing values;
- add client components merely for convenience;
- create global state for static content;
- invent testimonials, outcomes, metrics or project facts;
- expose private repository information;
- add analytics, cookies or trackers outside ADR-005;
- add Three.js, canvas, particle fields or scroll hijacking as decoration;
- write third-person copy about me;
- describe prototypes as production systems;
- create generic portfolio sections such as skill bars;
- rewrite accepted documents to justify an implementation shortcut;
- add dependencies without explaining why native or existing capabilities are insufficient.

## Change discipline

### Small commits

Keep commits focused. Documentation, scaffold, content migration and visual polish should not be bundled into an unreviewable change.

### No speculative abstractions

Create an abstraction only after at least two concrete uses demonstrate a stable common shape, unless an accepted specification already defines the abstraction.

### No silent schema drift

Changes to content fields, states, visibility or relationships require updates to the relevant content specification and migration of affected files.

### Preserve first-person voice

Public and repository prose should use I, me and my. It must sound like something I could honestly explain in an interview.

### Prefer deletion

When requirements change, remove obsolete code and documentation rather than leaving competing paths behind.

## Agent completion report

Every substantial implementation task should end with:

- files changed;
- requirements satisfied;
- tests run and results;
- accessibility or performance implications;
- assumptions made;
- known limitations;
- documents that may now need review.

## Escalation triggers

Stop and surface the issue rather than guessing when:

- two accepted documents conflict;
- a requested feature violates an ADR;
- a claim lacks evidence;
- private information may be exposed;
- the implementation would require a new service or significant dependency;
- accessibility would be materially reduced;
- a schema migration could break published URLs or relationships.

## Acceptance criteria

- [ ] agents can identify the correct authority order;
- [ ] public copy remains first person;
- [ ] architectural departures are explicit;
- [ ] dependency and client-side growth are controlled;
- [ ] generated implementation reports are useful for review;
- [ ] no agent can reasonably interpret the repository as permission to build a generic portfolio template.

## Related documents

- `docs/DECISION-FRAMEWORK.md`
- `docs/foundations/WRITING-RULES.md`
- `docs/foundations/TECHNICAL-RULES.md`
- `docs/implementation/IMP-004-DEFINITION-OF-DONE.md`
