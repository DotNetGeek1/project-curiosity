# Site Map

| Field                 | Value                      |
| --------------------- | -------------------------- |
| **Document ID**       | PRD-008                    |
| **Status**            | Accepted                   |
| **Version**           | 1.0                        |
| **Owner**             | I / repository maintainer  |
| **Related documents** | PRD-004, PRD-006, UX Rules |

## Primary navigation

- Home
- Experiments
- How I Ended Up Here
- Notes (when enough notes exist)
- Contact

GitHub and CV may appear as utility links rather than primary destinations.

## Information architecture

```text
Home
├── Featured questions
├── Selected experiments
├── How I work
├── Current obsessions
└── Contact / CV / GitHub

Experiments
├── DeliveryIQ
├── Chronos
├── Morris
├── SafeNet
└── Token Burn

How I Ended Up Here
├── Career path
├── Engineering approach
├── Physics and complex systems
└── What I am exploring now

Notes
├── By experiment
├── By theme
└── Recent investigations

Contact
├── Email
├── GitHub
├── LinkedIn, if used
└── CV
```

## Experiment page structure

Each experiment page should support:

1. question and title;
2. current state and last-investigated date;
3. concise summary;
4. why I cared;
5. problem and hypothesis;
6. what I built;
7. architecture and decisions;
8. failures and surprises;
9. lessons;
10. evidence and repository visibility;
11. where it might go next;
12. related notes and experiments.

The exact order may vary when the story demands it, but the reader must never lose the question or maturity context.

## URL strategy

Prefer stable, readable routes:

```text
/
/experiments
/experiments/delivery-iq
/experiments/chronos
/experiments/morris
/experiments/safenet
/experiments/token-burn
/about
/notes
/notes/<slug>
/contact
```

Public language may say `How I Ended Up Here`; the route may remain `/about` for clarity and durability.

## Navigation rules

- Primary navigation must remain conventional and keyboard accessible.
- Direct experiment links must be self-contained.
- Breadcrumbs are optional for MVP but useful on notes and deeper content.
- Related-content links should be contextual, not an infinite recommendation feed.
- No navigation depends on 3D, drag gestures or hidden hover states.

## Future extensions

The architecture may later support:

- topic pages;
- a timeline;
- backlinks between notes and experiments;
- semantic search;
- a visual knowledge graph.

These must extend the URL and content model rather than replace the clear hierarchy.

## Acceptance criteria

- [ ] Every MVP page has a defined place in the hierarchy.
- [ ] Primary navigation uses familiar interaction patterns.
- [ ] Experiment URLs are stable and shareable.
- [ ] Direct links provide enough context without visiting the homepage first.
- [ ] Future notes and graph features can be added without breaking core routes.

## Related documents

- PRD-004 — `USER-JOURNEYS.md`
- PRD-006 — `MVP-DEFINITION.md`
- UX Rules — `../foundations/UX-RULES.md`
