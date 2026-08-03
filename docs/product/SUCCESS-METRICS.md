# Success Metrics

| Field | Value |
|---|---|
| **Document ID** | PRD-005 |
| **Status** | Accepted |
| **Version** | 1.0 |
| **Owner** | I / repository maintainer |
| **Related documents** | PRD-001, PRD-004, PRD-006 |

## Purpose

The site is not an advertising funnel, so success cannot be reduced to traffic volume. The useful question is whether relevant visitors understand the work and take appropriate next steps.

## Primary success signals

### Hiring relevance

- Interviewers mention or ask about specific experiments.
- Hiring managers use the site to understand my hands-on engineering work.
- The portfolio generates informed conversations rather than generic screening questions.
- Relevant visitors move from the homepage into at least one experiment story.

### Comprehension

- Test readers can explain the site's purpose after a short visit.
- Readers can distinguish shipped systems from prototypes and speculative research.
- Readers can describe at least one important decision or lesson from an experiment.

### Credibility

- Technical readers consider the diagrams, trade-offs and limitations believable.
- Public claims can be traced to evidence or clearly marked interpretation.
- The site itself is fast, accessible and reliable enough not to contradict the message.

### Maintainability

- A new experiment can be added through the content model without redesigning the site.
- Content updates do not require invasive application changes.
- Dependencies and build complexity remain proportionate to current features.

## Quantitative indicators

Analytics should be privacy-conscious and limited to decisions the data can inform.

Useful indicators may include:

- experiment-page visits;
- homepage-to-experiment navigation rate;
- return visits;
- outbound CV, GitHub and contact actions;
- performance and error telemetry;
- search terms, once search exists;
- depth-section expansion, only if implemented without invasive tracking.

These are indicators, not targets to game.

## Explicit non-metrics

The project should not optimise for:

- total page views;
- time on site by itself;
- newsletter subscriptions;
- social-media shares;
- GitHub stars;
- artificial engagement loops;
- the number of technologies displayed.

## Launch validation

Before public launch, ask at least three people representing different audiences to complete a short review:

1. What is this site for?
2. What kind of engineer do you think I am?
3. Which experiment would you discuss with me?
4. What felt unclear or overstated?
5. Was anything clever but annoying?

## Acceptance criteria

- [ ] Success measures include comprehension and hiring relevance.
- [ ] Analytics are limited and privacy-conscious.
- [ ] Performance and accessibility are treated as credibility measures.
- [ ] Launch includes qualitative review from representative readers.
- [ ] Metrics do not encourage content or interaction theatre.

## Related documents

- PRD-001 — `PRODUCT-VISION.md`
- PRD-004 — `USER-JOURNEYS.md`
- PRD-006 — `MVP-DEFINITION.md`
