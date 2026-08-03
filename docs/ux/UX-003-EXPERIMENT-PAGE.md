# UX-003: Experiment Page

| Field | Value |
|---|---|
| **Status** | Draft |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | ADR-001, CONTENT-STRATEGY, WRITING-RULES, DESIGN-RULES, UX-RULES |

## Purpose

The experiment page is the core evidence surface of Project Curiosity. It must show how I moved from a question through uncertainty, implementation and learning without turning the page into a case-study template or code dump.

## Primary Outcome

The reader understands the problem, the reasoning and the evidence well enough to form a credible view of how I work.

## Required Page Structure

### 1. Experiment Header

Include:

- project name;
- motivating question;
- one-paragraph summary;
- current state;
- first investigated and last investigated dates where known;
- themes;
- repository visibility;
- primary evidence link where appropriate.

### 2. Why I Cared

Explain the human, product, engineering or intellectual trigger. This section should make clear why the problem was worth time and attention.

### 3. The Problem

Describe the problem as it was understood at the start. Distinguish known facts from assumptions.

### 4. Initial Hypothesis

State what I believed might work and why. Do not rewrite the hypothesis to match the final result.

### 5. What I Built

Explain the implemented or prototyped system at an appropriate level. Lead with capability and behaviour before technology.

### 6. Architecture and Technical Decisions

Use diagrams, decision summaries and selected implementation details. Explain why important choices were made, what alternatives existed and which constraints mattered.

### 7. What Failed or Changed

Record failed approaches, incorrect assumptions, limitations, safety incidents, abandoned branches or changes in direction.

### 8. What I Learned

Capture reusable lessons, not generic reflections. Separate technical learning from product or process learning where useful.

### 9. Current State and Next Questions

Explain what exists now, what does not exist and what I would investigate next.

### 10. Evidence

Provide selected evidence such as:

- public repository;
- demonstration;
- architecture record;
- code excerpt;
- benchmark;
- screenshot;
- test result;
- related research note;
- private walkthrough available on request.

### 11. Related Material

Link related experiments, research notes and decisions without creating an endless recommendation feed.

## Progressive Disclosure

The page must support three depths:

### Summary depth

Question, summary, state, strongest evidence and key lesson.

### Narrative depth

Problem, hypothesis, build, change and outcome.

### Technical depth

Architecture, decisions, code evidence, constraints and detailed failures.

Technical sections may be collapsible only when the content remains reachable and understandable without JavaScript. Prefer ordinary headings and in-page navigation over excessive accordions.

## In-Page Navigation

Long pages should provide a compact table of contents after the header. It must:

- use real anchors;
- show meaningful section names;
- remain usable on mobile;
- not obscure content with a large sticky panel;
- preserve browser history and normal linking.

## Diagram Rules

- Every diagram has a textual explanation.
- Avoid diagrams whose labels are unreadable on mobile.
- Architecture diagrams show boundaries and decisions, not every class or service.
- Decorative sketches may support tone but cannot carry required meaning alone.

## Repository Visibility

Use explicit states:

- Public repository;
- Selected public source;
- Private repository — walkthrough available;
- No repository — explanation provided.

Never imply that private employer or customer code can be shared.

## Credibility Rules

- Distinguish prototype, production and research status.
- State whether usage or performance figures are measured, estimated or illustrative.
- Do not describe future plans as completed capability.
- Avoid claiming causation when only correlation or personal observation exists.
- Explain significant limitations near the associated claim.

## Responsive Behaviour

- Maintain the narrative order.
- Wide diagrams may use contained horizontal scrolling with visible affordance.
- Code blocks scroll internally and never widen the viewport.
- Metadata wraps rather than shrinking to unreadable sizes.
- Sticky table of contents may become an inline disclosure on narrow screens.

## Accessibility

- A single `h1` contains the experiment name.
- The question is text, not embedded in an image.
- Diagrams use accessible names and descriptions.
- Code examples identify language where possible.
- Interactive demos have keyboard support, clear instructions and fallbacks.
- Colour is never the only indicator of state or relationship.

## Acceptance Criteria

- [ ] The page explains why the experiment began.
- [ ] The original hypothesis is distinguishable from the result.
- [ ] Current maturity is stated honestly.
- [ ] At least one meaningful failure, limitation or changed assumption is visible where applicable.
- [ ] Important technical decisions include rationale.
- [ ] The page provides evidence without exposing confidential material.
- [ ] A reader can complete a useful shallow read in under two minutes.
- [ ] Long-form navigation uses standard anchors.
- [ ] The page remains readable without client-side JavaScript.
