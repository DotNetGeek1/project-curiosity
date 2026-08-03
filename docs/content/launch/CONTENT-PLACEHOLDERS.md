# Approved Content Placeholders

| Field | Value |
|---|---|
| **Document ID** | CNT-LAUNCH-006 |
| **Status** | Draft |
| **Version** | 1.0 |
| **Last Updated** | 2026-08-03 |
| **Owner** | Me |

## Purpose

Define placeholder language that may be used during implementation when evidence, imagery or final copy is not ready.

Placeholders must be explicit. They must never look like finished claims or invented project detail.

## Allowed Placeholder Categories

### Evidence pending

> Evidence for this section is still being prepared. The claim will not be published until it has been reviewed.

### Diagram pending

> Architecture diagram in progress. The written explanation should remain understandable without it.

### Screenshot pending

> Product image pending review for confidentiality and usefulness.

### Public-code decision pending

> Repository visibility is still being reviewed. Do not show a public-code link until confirmed.

### Outcome verification pending

> Outcome wording requires factual verification before publication.

### Story detail needed

> I need to add the specific moment, constraint or decision that makes this section useful.

### Confidentiality review pending

> This material requires confidentiality and ownership review before it can be published.

### Short entry by design

> This experiment currently has a brief note rather than a complete write-up. I have documented what is useful and left the missing evidence visible.

## Prohibited Placeholder Behaviour

Do not:

- invent figures, dates, outcomes or customer impact;
- use lorem ipsum in content-facing components;
- replace missing evidence with generic technology prose;
- publish `TODO` markers to production;
- silently omit a promised evidence section;
- imply a private repository will be shared automatically;
- use fabricated screenshots or diagrams as though they represent the real system.

## Implementation Rules

1. Development-only placeholders should be visually identifiable.
2. Placeholder text must be excluded from SEO descriptions and social metadata.
3. Production builds should fail or warn when unresolved blocking placeholders exist.
4. Non-blocking short-entry notices may remain when explicitly approved.
5. Placeholder state should be represented in structured metadata where practical.

## Suggested Validation Tokens

Blocking tokens:

- `CONTENT_REVIEW_REQUIRED`
- `EVIDENCE_REQUIRED`
- `CONFIDENTIALITY_REVIEW_REQUIRED`
- `LINK_CONFIRMATION_REQUIRED`

Non-blocking tokens:

- `SHORT_ENTRY_APPROVED`
- `DIAGRAM_OPTIONAL`
- `PRIVATE_SOURCE_CONFIRMED`

## Acceptance Criteria

- [ ] Missing evidence remains visible during authoring.
- [ ] No placeholder can be mistaken for a verified claim.
- [ ] Blocking placeholders are detectable automatically.
- [ ] Production copy contains no raw TODO markers.
- [ ] Short entries can ship honestly without fabricated depth.
