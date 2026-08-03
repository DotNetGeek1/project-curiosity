# UX-001: Homepage

| Field | Value |
|---|---|
| **Status** | Draft |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | ADR-001, PRD-001, UX-RULES, DESIGN-RULES, WRITING-RULES |

## Purpose

The homepage must explain the idea of Project Curiosity quickly, establish trust and make the experiments easy to enter.

A visitor should understand within the first screen that this is an engineering notebook about questions, experiments and the way I approach difficult problems.

## Reader Questions

The page must answer, in this order:

1. What is this?
2. Who made it?
3. Why should I care?
4. Where should I start?
5. What kind of engineer am I?
6. How can I learn more or contact me?

## Primary Outcome

The visitor opens an experiment story.

## Secondary Outcomes

- understands that the site supports my CV rather than repeating it;
- sees enough personality to remember me;
- visits the About page;
- follows a public repository link;
- contacts me or returns later.

## Page Structure

### 1. Site Header

Contains:

- Project Curiosity wordmark;
- primary navigation;
- optional short descriptor: `An engineering notebook`;
- accessible mobile navigation.

The header must not consume a large proportion of the first viewport.

### 2. Opening Statement

Recommended hierarchy:

- eyebrow: `Things I Wondered About`;
- primary heading explaining that interesting projects often begin with a question;
- concise first-person introduction;
- primary action: browse experiments;
- secondary action: understand how I work.

The opening must not use typing effects, rotating job titles, giant portrait photography or a technology-logo cloud.

### 3. Featured Experiments

Show three substantial entry points, initially:

- DeliveryIQ;
- Chronos;
- Morris.

Each entry includes:

- the motivating question;
- project name;
- one-sentence explanation;
- current state;
- one meaningful visual or diagram fragment;
- last investigated date where useful.

The card must sell the question and story, not the stack.

### 4. Working Pattern

A short section showing the recurring sequence:

`notice → question → prototype → evidence → iteration`

This may use an annotated diagram, but must remain understandable as text.

### 5. Current Obsessions

A lightweight, maintainable section for current areas of investigation. It should feel alive without creating a blogging obligation.

Each item should be short and dated. Do not include more than five.

### 6. Selected Evidence

A restrained section linking to evidence such as architecture notes, public repositories, demonstrations or specific technical discoveries.

Avoid GitHub activity graphs and raw contribution counts.

### 7. About Teaser

A short first-person explanation of how I ended up working across product engineering, architecture, cloud, AI and technical leadership.

The purpose is to create curiosity, not reproduce employment history.

### 8. Contact and Footer

Provide a clear contact route and links to relevant public profiles.

Private repository access should be described as available by request or walkthrough, without suggesting unrestricted access.

## Shallow and Deep Reading

### Thirty-second visit

A visitor should understand:

- this is an engineering notebook;
- I work through curiosity and prototypes;
- there are several credible experiments;
- where to click next.

### Five-minute visit

A visitor should additionally understand:

- the range of problems I explore;
- that I value evidence and honest trade-offs;
- that I am hands-on despite leadership experience;
- which experiment best matches their interests.

## Responsive Behaviour

- Preserve content order on mobile.
- Featured experiments become a vertical sequence, not a tiny horizontal carousel.
- Navigation must not rely on hover.
- Diagrams must reflow, scroll within their own region or provide a simplified alternative.
- The primary question and action must remain visible without excessive scrolling.

## Accessibility

- One clear `h1`.
- Heading order must reflect document structure.
- Cards use descriptive links, not repeated `Read more` labels.
- Visual experiment states include text.
- Motion respects `prefers-reduced-motion`.
- All content and actions are keyboard accessible.

## Content Constraints

- First-person voice only.
- No unsupported superlatives.
- No complete CV chronology.
- No generic skills inventory.
- No claim without nearby evidence or a path to it.

## Analytics Questions

Analytics should help answer:

- which featured experiment receives attention;
- whether visitors progress from homepage to experiment pages;
- whether About and contact paths are discoverable;
- whether mobile visitors encounter abnormal exits.

Do not collect invasive behavioural data merely because tooling makes it available.

## Acceptance Criteria

- [ ] The engineering-notebook idea is understandable in the first viewport.
- [ ] The page contains a clear route to the experiment index.
- [ ] At least three featured experiments lead with questions.
- [ ] The page supports a useful thirty-second read.
- [ ] Technology names are subordinate to project stories.
- [ ] Mobile content order remains coherent.
- [ ] Core content renders without client-side JavaScript.
- [ ] No banned portfolio cliché from DESIGN-RULES is introduced.
