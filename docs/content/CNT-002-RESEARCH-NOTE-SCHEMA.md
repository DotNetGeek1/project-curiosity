# CNT-002: Research Note Schema

| Field | Value |
|---|---|
| **Status** | Draft |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | UX-006, CONTENT-STRATEGY, WRITING-RULES |

## Purpose

Define the content contract for research notes so they can be authored, related and revised without becoming a chronological blog.

## Required Front Matter

```yaml
id: NOTE-001
slug: adaptive-model-routing
name: Adaptive model routing in a small RAG service
premise: Can a service choose an appropriate model based on cost, latency and task shape without becoming unpredictable?
type: technical-spike
published: 2026-08-03
lastRevised: 2026-08-03
summary: A short explanation of the observation, test or conclusion.
relatedExperiments:
  - EXP-001
visibility: public
```

## Note Types

Allowed initial values:

- `observation`
- `technical-spike`
- `decision-summary`
- `failure-report`
- `benchmark`
- `implementation-pattern`
- `open-question`
- `retrospective`

New note types should be added only when the existing set cannot express a meaningful distinction.

## Field Rules

### `id`

Stable identifier in the form `NOTE-NNN`.

### `slug`

URL-safe and stable after publication.

### `name`

A descriptive title. Avoid clickbait or vague titles such as `Thoughts on AI`.

### `premise`

The question, observation or claim the note investigates.

### `type`

Sets reader expectations and supports future grouping.

### `published`

Date of first public publication.

### `lastRevised`

Date of the most recent meaningful change to evidence or conclusion.

### `summary`

One or two sentences stating the scope and usefulness of the note.

### `relatedExperiments`

Stable experiment IDs. At least one is recommended but not required for a genuinely independent note.

### `visibility`

Usually `public`; additional states follow CNT-004 where evidence or source is restricted.

## Optional Front Matter

```yaml
themes:
  - applied-ai
  - architecture
readingTime: 6
relatedNotes:
  - NOTE-003
evidence:
  - EVD-004
revisionNote: Updated after testing with a second workload.
seo:
  title: ...
  description: ...
```

Reading time should be generated when possible rather than manually maintained.

## Narrative Shape

A note should normally make the following visible:

1. context;
2. premise;
3. method or source of observation;
4. result or current view;
5. limitations;
6. implication;
7. related material.

An open question may end without a conclusion, but it must explain what evidence would move the investigation forward.

## Revision Rules

- Preserve the original `published` date.
- Update `lastRevised` only for meaningful changes.
- Add `revisionNote` when a conclusion materially changes.
- Do not silently remove inconvenient prior findings.
- Correct factual or typographical errors directly; a revision note is unnecessary unless meaning changes.

## Validation Rules

- `id` and `slug` are unique.
- `lastRevised` is not earlier than `published`.
- `relatedExperiments` and `relatedNotes` resolve to valid IDs.
- `benchmark` notes identify method and limitations.
- `failure-report` notes state the failure or changed assumption plainly.
- `open-question` notes do not present speculation as a result.

## Acceptance Criteria

- [ ] Notes are independent structured content records.
- [ ] Note types set useful expectations.
- [ ] Significant revisions are visible.
- [ ] Relationships use stable IDs.
- [ ] Validation prevents broken relationships and invalid dates.
- [ ] Notes do not require blog-style chronological navigation.
