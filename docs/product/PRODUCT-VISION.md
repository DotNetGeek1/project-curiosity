# Product Vision

| Field                 | Value                         |
| --------------------- | ----------------------------- |
| **Document ID**       | PRD-001                       |
| **Status**            | Accepted                      |
| **Version**           | 1.0                           |
| **Owner**             | I / repository maintainer     |
| **Related documents** | ADR-001, PHL-001, PRN-001–005 |

## Vision

Project Curiosity is a public engineering notebook that helps people understand how I think, what kinds of problems attract me, and how I move from an uncertain question to working software.

The product should feel like entering a well-organised workshop: there is depth for people who want it, clear signposting for people who do not, and enough personality to make the work memorable without turning the site into a performance.

## Product promise

A visitor should be able to understand:

- what prompted each experiment;
- why the problem mattered;
- what I tried;
- what I built;
- what changed my mind;
- what failed;
- what I learned;
- where the work could go next.

## Core outcome

The site succeeds when a relevant reader finishes with a credible understanding of my engineering judgement, autonomy, curiosity and range.

The desired reaction is not merely:

> He knows a lot of technologies.

It is:

> I understand how he approaches unfamiliar problems, and I would trust him with something ambiguous and difficult.

## Product pillars

### Questions before projects

Experiments are introduced through the question or irritation that began them.

### Evidence before claims

The site supports statements with diagrams, prototypes, decisions, demonstrations and honest limitations.

### Depth without obstruction

Readers can skim quickly or investigate deeply without being forced through every detail.

### Personality without theatre

The experience should feel recognisably mine while remaining reliable, accessible and calm.

### A system that can grow

New experiments and notes should fit the product without requiring a redesign.

## Constraints

- The site complements the CV; it does not duplicate it.
- The site must remain useful without private source access.
- The site must remain useful without AI features.
- Content quality is more important than feature count.
- The first release must ship before the speculative platform features.

## Acceptance criteria

- [ ] The homepage explains the engineering-notebook concept within one screen and a short scroll.
- [ ] Experiments are discoverable by question and theme.
- [ ] At least three launch experiments contain complete stories.
- [ ] A hiring reader can find evidence of judgement, autonomy and technical depth.
- [ ] The product remains coherent without Morris, search or a knowledge graph.

## Related documents

- ADR-001 — `../adr/ADR-001-Engineering-Notebook.md`
- PRD-006 — `MVP-DEFINITION.md`
- PRD-007 — `CONTENT-STRATEGY.md`
