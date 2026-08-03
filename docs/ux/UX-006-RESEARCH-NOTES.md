# UX-006: Research Notes

| Field | Value |
|---|---|
| **Status** | Draft |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | CONTENT-STRATEGY, WRITING-RULES, SITE-MAP |

## Purpose

Research notes capture useful observations that are too focused for a full experiment story but valuable enough to preserve and connect.

They are not a publishing treadmill and should not make Project Curiosity feel like a chronological blog.

## Primary Outcome

A reader gains a useful technical or product insight and can see how it relates to a larger experiment.

## Note Types

Useful note types include:

- observation;
- technical spike;
- architecture decision summary;
- failure report;
- benchmark or comparison;
- implementation pattern;
- open question;
- retrospective.

The type should help set expectations, not create bureaucracy.

## Index Behaviour

The notes index should prioritise relevance and relationships over publication recency.

Each entry includes:

- title;
- concise premise;
- note type;
- related experiment where applicable;
- first published and last revised dates;
- reading time where genuinely useful.

Filters are unnecessary until there are enough notes to justify them.

## Note Page Structure

A note should usually contain:

1. premise or question;
2. context;
3. observation or result;
4. evidence;
5. limitations;
6. implication;
7. related experiment or note.

Not every note needs every section, but it must make its scope clear.

## Versioning

Notes are allowed to evolve.

When a significant conclusion changes:

- update the last revised date;
- preserve enough context to explain the change;
- avoid silently rewriting a prior claim into its opposite;
- use a short revision note when the change matters.

## Content Rules

- Notes must contain a useful idea, result or question.
- Do not publish release notes, daily logs or filler updates as research notes.
- Distinguish measured results from impressions.
- Link to evidence when the conclusion depends on it.
- Do not claim general applicability from a single local experiment.

## Relationship to Experiments

An experiment may have many notes. A note may relate to more than one experiment.

The relationship should support discovery without requiring a visual knowledge graph in the MVP.

## Accessibility and Reading

- Use ordinary article semantics.
- Provide descriptive headings.
- Code, diagrams and tables follow the same accessibility rules as experiment pages.
- Avoid narrow fixed-width code samples or tables that break mobile layouts.

## Acceptance Criteria

- [ ] Notes are clearly distinct from full experiments.
- [ ] Each note communicates its scope and evidence.
- [ ] Notes can link to one or more experiments.
- [ ] Revised notes expose meaningful changes honestly.
- [ ] The experience does not depend on chronological blog navigation.
