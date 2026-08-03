# UX-002: Experiment Index

| Field            | Value                                         |
| ---------------- | --------------------------------------------- |
| **Status**       | Draft                                         |
| **Owner**        | Me                                            |
| **Last Updated** | 2026-08-03                                    |
| **Depends On**   | ADR-001, SITE-MAP, CONTENT-STRATEGY, UX-RULES |

## Purpose

The experiment index helps readers discover work by question, theme and current state without reducing the projects to a technology grid.

## Primary Outcome

The reader chooses an experiment whose question or problem is relevant to them.

## Information Hierarchy

Each experiment entry must present:

1. motivating question;
2. project name;
3. concise explanation;
4. current state;
5. last investigated date where useful;
6. selected themes;
7. supporting visual;
8. descriptive link.

Technology may appear as tertiary metadata only.

## Default Organisation

The initial release should use a clear editorial list or generous grid ordered by editorial priority, not repository activity or alphabet.

Recommended initial order:

1. DeliveryIQ;
2. Chronos;
3. Morris;
4. SafeNet;
5. Token Burn.

The order can change as stories mature.

## Filtering

Filtering is optional for the MVP because five experiments do not require a control panel.

When the collection grows, useful filters may include:

- state;
- theme;
- product, platform, research or game;
- public code availability.

Do not add framework or language filters unless reader research shows value.

## Empty and Partial States

An experiment with an incomplete full story may still appear when it has:

- an honest state;
- a useful question;
- a concise summary;
- a clear indication that the record is still developing.

Do not publish empty cards intended only to imply breadth.

## Responsive Behaviour

- Preserve the question-first hierarchy.
- Avoid horizontal carousels as the only discovery mechanism.
- Filters, when introduced, must remain keyboard and touch accessible.
- Images must not force fixed card heights that create excessive empty space.

## Accessibility

- The index is a semantic list of articles or links.
- Experiment names and questions must form meaningful accessible names.
- State is always expressed as text.
- Focus order follows visual order.

## Acceptance Criteria

- [ ] Every experiment begins with a question or motivating observation.
- [ ] All entries show an honest current state.
- [ ] The index works without filtering or JavaScript.
- [ ] No card is primarily a stack or logo display.
- [ ] The initial order supports the strongest stories first.
- [ ] Incomplete experiments are clearly identified.
