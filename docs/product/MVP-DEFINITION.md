# MVP Definition

| Field | Value |
|---|---|
| **Document ID** | PRD-006 |
| **Status** | Accepted |
| **Version** | 1.0 |
| **Owner** | I / repository maintainer |
| **Related documents** | PRD-001, PRD-005, PRD-009 |

## Purpose

The MVP must prove the engineering-notebook concept without becoming a platform project.

## Required for launch

### Core pages

- Homepage
- Experiment index
- At least three complete experiment stories
- `How I Ended Up Here`
- Current obsessions
- Contact path
- CV and GitHub links

### Initial experiments

Complete stories should prioritise:

1. DeliveryIQ
2. Chronos
3. Morris

SafeNet and Token Burn may launch as shorter entries if their full stories are not ready.

### Experience requirements

- clear navigation;
- strong mobile reading experience;
- accessible semantic structure;
- restrained editorial design;
- durable experiment URLs;
- fast static-first rendering;
- repository visibility clearly stated;
- reduced-motion support;
- usable core content without client-side JavaScript where practical.

### Content requirements

Each complete experiment must include:

- the question;
- the problem or trigger;
- current state;
- summary;
- approach;
- important technical decisions;
- evidence;
- failures or changed assumptions;
- learning;
- where it may go next.

## Explicitly excluded from MVP

- Morris as a public AI companion;
- repository indexing;
- RAG over private source;
- MCP integration;
- semantic or AI search;
- interactive project knowledge graph;
- account creation;
- comments;
- newsletter;
- live demos requiring expensive permanent infrastructure;
- Three.js navigation;
- custom CMS;
- complex animation framework;
- anything that risks becoming sentient before the homepage is finished.

## Optional only after core completion

- subtle page transitions;
- lightweight filtering;
- one small interactive diagram;
- project timeline visualisation;
- downloadable CV;
- privacy-conscious analytics.

These must not delay launch.

## Definition of done

The MVP is done when:

- a relevant reader can understand the proposition quickly;
- at least three experiments demonstrate the model end to end;
- the site is production-deployed at `portfolio.dotnetgeek.co.uk`;
- accessibility, performance and responsive checks pass;
- no placeholder copy is visible;
- every public claim has been reviewed;
- the site works without access to private repositories;
- adding another experiment is primarily a content task.

## Acceptance criteria

- [ ] MVP scope is implementable without AI services.
- [ ] Three complete experiment stories are launch blockers.
- [ ] Speculative features are explicitly deferred.
- [ ] Launch quality includes accessibility and performance.
- [ ] The site can grow without rebuilding the core information architecture.

## Related documents

- PRD-005 — `SUCCESS-METRICS.md`
- PRD-009 — `FEATURE-ROADMAP.md`
- ADR-001 — `../adr/ADR-001-Engineering-Notebook.md`
