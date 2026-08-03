# CNT-001: Experiment Schema

| Field            | Value                             |
| ---------------- | --------------------------------- |
| **Status**       | Draft                             |
| **Owner**        | Me                                |
| **Last Updated** | 2026-08-03                        |
| **Depends On**   | ADR-001, UX-003, CONTENT-STRATEGY |

## Purpose

Define the structured metadata and narrative sections required to represent an experiment independently from its visual presentation.

## Recommended Storage

Use Markdown or MDX with validated front matter. The implementation may use a schema library such as Zod, but this document defines the content contract rather than a library choice.

## Implementation Mapping

The current implementation (`content-collections.ts`) validates the canonical `state`
vocabulary below under the front-matter key `status`, and records the investigation
period as `startYear`/`endYear` with an optional `lastUpdated` month. The value
vocabulary is shared verbatim; only these field names differ. Any further divergence
must be reconciled here rather than worked around in components.

## Required Front Matter

```yaml
id: EXP-001
slug: deliveryiq
name: DeliveryIQ
question: What would engineering delivery look like if AI was designed into the workflow from the beginning?
summary: A concise explanation of the experiment and why it matters.
state: prototype
firstInvestigated: 2025-01-01
lastInvestigated: 2026-08-03
themes:
  - applied-ai
  - developer-tools
  - product-engineering
featured: true
visibility: public-story-private-source
```

## Field Definitions

### `id`

Stable identifier in the form `EXP-NNN`. It must not change when the slug or project name changes.

### `slug`

Stable, lowercase, URL-safe path segment. Avoid technology names unless they are part of the project name.

### `name`

Public project name.

### `question`

The motivating question or observation. This is a primary content field, not decorative copy.

### `summary`

One or two sentences explaining the experiment in plain English. It must describe current reality rather than future ambition.

### `state`

One of:

- `exploring`
- `prototype`
- `growing`
- `shipped`
- `paused`
- `dormant`
- `abandoned`
- `escaped-containment`

`escaped-containment` is deliberately exceptional and should not be used outside an appropriate Morris context.

### `firstInvestigated`

ISO date when the work materially began. Approximate dates may use the first day of the known month or year only when the content clearly indicates that precision is approximate.

### `lastInvestigated`

ISO date of the most recent meaningful investigation or revision. Do not update it for formatting-only edits.

### `themes`

Controlled, human-readable topic identifiers used for relationships and future filtering. Themes should describe the problem area or engineering discipline, not every dependency.

### `featured`

Boolean indicating editorial prominence. It does not imply quality or maturity.

### `visibility`

One of the repository and evidence visibility states defined in CNT-004.

## Optional Front Matter

```yaml
shortName: DeliveryIQ
subtitle: Reimagining engineering delivery around AI-native workflows
heroVisual: /images/experiments/deliveryiq/overview.svg
accent: rust
repository:
  url: https://github.com/example/example
  label: Public repository
  access: public
primaryEvidence:
  type: architecture
  href: /experiments/deliveryiq#architecture
  label: View the architecture
technologies:
  - TypeScript
  - PostgreSQL
relatedNotes:
  - NOTE-004
relatedExperiments:
  - EXP-005
seo:
  title: DeliveryIQ — Project Curiosity
  description: ...
```

## Narrative Sections

The content body should support the following top-level sections:

1. `why-i-cared`
2. `problem`
3. `initial-hypothesis`
4. `what-i-built`
5. `architecture-and-decisions`
6. `failures-and-changes`
7. `lessons`
8. `current-state`
9. `next-questions`
10. `evidence`

Sections may be omitted when genuinely inapplicable, but `why-i-cared`, `problem`, `what-i-built`, `lessons` and `current-state` are expected for any published full experiment.

## Publication Levels

### Stub

Required:

- id;
- slug;
- name;
- question;
- summary;
- state;
- last investigated date;
- visibility.

A stub may appear in the index but must be labelled as developing.

### Complete Story

Includes the expected narrative sections and at least one useful evidence item.

### Deep Technical Story

Adds architecture, decisions, code or benchmark evidence and meaningful limitations.

The schema must not pretend every experiment has reached the same publication depth.

## Validation Rules

- `id` and `slug` are unique.
- `question` ends with a question mark unless it is explicitly an observation.
- `lastInvestigated` is not earlier than `firstInvestigated`.
- `featured: true` requires at least a complete story.
- `shipped` requires a clear explanation of where or how the work is used.
- `abandoned` requires a reason in the narrative.
- `public` repository access requires a valid repository URL.
- `private` visibility must not contain a private clone URL or access token.

## Example Type Shape

```ts
type ExperimentState =
  | 'exploring'
  | 'prototype'
  | 'growing'
  | 'shipped'
  | 'paused'
  | 'dormant'
  | 'abandoned'
  | 'escaped-containment';

interface ExperimentMetadata {
  id: `EXP-${string}`;
  slug: string;
  name: string;
  question: string;
  summary: string;
  state: ExperimentState;
  firstInvestigated?: string;
  lastInvestigated: string;
  themes: string[];
  featured: boolean;
  visibility: EvidenceVisibility;
  technologies?: string[];
  relatedNotes?: string[];
  relatedExperiments?: string[];
}
```

## Acceptance Criteria

- [ ] Experiment content is stored independently from page components.
- [ ] Required metadata is build-time validated.
- [ ] States match ADR-001.
- [ ] Publication depth is represented honestly.
- [ ] Relationships use stable IDs rather than titles.
- [ ] Private source details cannot be exposed through metadata.
