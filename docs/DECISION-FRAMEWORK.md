# Decision Framework

| Field                 | Value                     |
| --------------------- | ------------------------- |
| **Document ID**       | STD-002                   |
| **Status**            | Accepted                  |
| **Version**           | 1.0                       |
| **Owner**             | I / repository maintainer |
| **Related documents** | ADR-001, PHL-001          |

## Purpose

This framework is the check I use before adding a feature, interaction, page, dependency or new layer of documentation.

## Core questions

Before committing to an idea, ask:

1. Does this help someone understand how I think?
2. Does it make the story clearer?
3. Does it improve the reader's experience?
4. Is it solving a real problem or mainly showing off?
5. Is the value obvious without me explaining it live?
6. Would a simpler implementation achieve the same outcome?
7. Does it remain useful on a modest phone and slow connection?
8. Can I defend the decision honestly in an interview?
9. Does it create leverage for future work?
10. What is the cost of maintaining it?

## Decision classes

### Build now

Use when the idea is required for the MVP, removes a clear blocker, or materially improves comprehension.

### Prototype first

Use when the idea may provide value but contains UX, technical or performance uncertainty.

### Document for later

Use when the idea is coherent but not required to prove the first release.

### Reject

Use when the idea primarily adds spectacle, duplicates another feature, creates disproportionate maintenance, or contradicts ADR-001.

## Evidence threshold

The more expensive or irreversible a decision is, the stronger the required evidence.

- copy changes may rely on editorial judgement;
- layout changes should be tested responsively;
- interaction changes should be prototyped;
- architectural dependencies should include trade-off analysis;
- public claims require evidence or clear qualification.

## Feature-creep test

A feature should normally be deferred when:

- it depends on several unfinished foundations;
- the MVP still lacks complete experiment stories;
- its main justification is that it would be technically interesting;
- it introduces a new service or runtime without solving a current problem;
- it makes the site harder to understand without materially improving the story.

## Acceptance criteria

- [ ] Significant features can be classified as build, prototype, defer or reject.
- [ ] Decisions reference the reader and the product purpose.
- [ ] Maintenance cost is considered alongside implementation cost.
- [ ] Experimental ideas do not silently become MVP requirements.

## Related documents

- ADR-001 — `adr/ADR-001-Engineering-Notebook.md`
- PHL-001 — `PROJECT-PHILOSOPHY.md`
