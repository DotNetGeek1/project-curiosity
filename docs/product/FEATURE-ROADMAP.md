# Feature Roadmap

| Field                 | Value                     |
| --------------------- | ------------------------- |
| **Document ID**       | PRD-009                   |
| **Status**            | Accepted                  |
| **Version**           | 1.0                       |
| **Owner**             | I / repository maintainer |
| **Related documents** | PRD-006, STD-002          |

## Purpose

This roadmap keeps the ambitious ideas visible without allowing them to block the first useful release.

## Phase 0: Foundations

- ADR-001
- design, writing, UX and technical rules
- documentation standards
- product definition
- experiment content schema

## Phase 1: MVP shell

- application scaffold
- design tokens
- typography and layout primitives
- navigation and footer
- homepage
- experiment index
- about and contact routes
- deployment pipeline
- baseline accessibility and performance checks

## Phase 2: Launch content

- DeliveryIQ story
- Chronos story
- Morris story
- shorter SafeNet and Token Burn entries
- current obsessions
- CV and GitHub integration
- diagrams and evidence assets

## Phase 3: Research notes

- structured note content type
- note index
- links between notes and experiments
- RSS or feed only if useful
- update discovery without converting the site into a chronological blog

## Phase 4: Rich experiment evidence

- carefully selected interactive diagrams
- temporal exploration for Chronos
- DeliveryIQ workflow visualisation
- Morris architecture and containment log
- lightweight project timelines

## Phase 5: Discovery

- filtering by theme and state
- search
- backlinks
- experiment and note relationships
- optional visual knowledge graph

## Phase 6: Morris companion

Subject to an accepted RFC and ADR:

- public corpus definition;
- retrieval over published site content;
- clear source citations;
- safe boundaries;
- no private repository access from the public site;
- graceful removal without damaging core navigation.

## Phase 7: Private interview mode

Potentially:

- time-limited private repository access;
- authenticated code walkthrough material;
- deeper architecture notes;
- interview-specific demos.

This is optional and must not become a security burden.

## Roadmap rules

- A later phase cannot delay an earlier phase unless it exposes a fundamental product flaw.
- Every new service or runtime requires a present problem, not a hypothetical future use.
- Content completion outranks optional interaction work.
- Roadmap phases describe order, not dates.
- Items may be rejected after prototyping.

## Acceptance criteria

- [ ] MVP work is separated from speculative capabilities.
- [ ] Morris is deferred until the core product is useful without it.
- [ ] Content delivery has a dedicated phase.
- [ ] Later phases extend rather than replace the core experience.
- [ ] Roadmap items remain subject to the decision framework.

## Related documents

- PRD-006 — `MVP-DEFINITION.md`
- STD-002 — `../DECISION-FRAMEWORK.md`
- RFC process — `../rfc/README.md`
