# Implementation Manifest

> This repository is an attempt to answer a simple question: **how do you show someone how an engineer thinks?**

## Purpose

Project Curiosity is not only a website. It is a working demonstration of how I approach software engineering: define the problem, make assumptions visible, constrain the solution, build a thin vertical slice, inspect the evidence and refine from there.

The documentation is part of the product because it shows the reasoning behind the implementation. The implementation is part of the evidence because it shows whether those decisions survived contact with real code.

Neither is useful on its own.

## What Has Now Changed

The project has moved beyond architecture-by-document. A working application now exists with:

- Next.js App Router and static export;
- TypeScript in strict mode;
- MDX content validated through Zod-backed collections;
- Tailwind CSS v4 using semantic design tokens;
- unit, component and end-to-end tests;
- CI and Azure Static Web Apps deployment;
- initial experiment and research-note content stubs.

From this point onward, specifications must be reconciled with the repository rather than written as though implementation has not started.

## Working Rule

Every new decision must answer three questions:

1. **What does the accepted documentation require?**
2. **What does the current implementation actually do?**
3. **What is the smallest change that closes the meaningful gap?**

A difference between documentation and code is not automatically a defect. It becomes a defect when it weakens the product, introduces inconsistency, hides a trade-off or contradicts an accepted decision without recording why.

## Principles for the Build Phase

### Build evidence, not theatre

A polished interaction is valuable only when it improves understanding. The site must not become a catalogue of effects whose main purpose is proving that I can build effects.

### Keep content authoritative

Experiment narratives, metadata and evidence belong in the content layer. Page components render and organise them; they do not become a second source of truth.

### Prefer vertical slices

Implement one complete reader journey before expanding component breadth. A homepage, experiment index and one credible experiment page are more valuable than thirty disconnected components.

### Protect static rendering

The application is deliberately deployable as static output. New features must not introduce server-runtime dependencies unless an accepted ADR replaces that constraint.

### Treat accessibility and performance as architecture

Keyboard access, semantic structure, reduced motion, readable typography and modest payloads are completion criteria, not late-stage polish.

### Keep first-person authorship

The public voice is mine. Coding agents may draft and restructure, but they must not invent personal history, achievements, motivations or opinions.

## Definition of Useful Progress

A change is useful when it does at least one of the following:

- makes a reader understand the question or engineering journey more clearly;
- replaces placeholder content with verified evidence;
- closes a known implementation gap;
- removes unnecessary complexity;
- improves accessibility, reliability or performance;
- makes future content safer and easier to author;
- turns an accepted decision into tested behaviour.

A larger codebase is not evidence of progress.

## Current Phase

The current phase is **implementation reconciliation and first vertical slice**.

The priorities are:

1. confirm that the scaffold matches accepted ADRs and technical rules;
2. map existing components and routes to the UX specifications;
3. identify missing, duplicated or premature implementation;
4. replace generic or provisional copy with approved launch content;
5. complete one experiment story with real evidence;
6. establish the release backlog from observed gaps rather than imagined features.

## Completion Test

Before calling the first release complete, I should be able to answer yes to the following:

- Does the site clearly explain why it exists?
- Can a hiring reader understand my engineering approach within a few minutes?
- Is at least one experiment credible, specific and supported by evidence?
- Does the experience work without JavaScript-heavy interaction?
- Are the public claims accurate and defensible in an interview?
- Does the implementation reflect the accepted constraints?
- Would I be comfortable showing both the site and this repository to a senior engineer?

## Final Principle

The documentation should constrain the implementation without suffocating it. The implementation should challenge the documentation without quietly ignoring it.

The point is not to prove that I can write an enormous specification. The point is to show that I can turn structured thinking into clear, reliable software—and change my mind intelligently when the evidence demands it.
