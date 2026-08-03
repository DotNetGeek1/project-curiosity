# SEO and Social Metadata

| Field            | Value          |
| ---------------- | -------------- |
| **Document ID**  | CNT-LAUNCH-005 |
| **Status**       | Draft          |
| **Version**      | 1.0            |
| **Last Updated** | 2026-08-03     |
| **Owner**        | Me             |

## Purpose

Define consistent metadata for launch pages without turning the site into keyword-driven marketing copy.

## Site-Level Defaults

**Site name**

Project Curiosity

**Public descriptor**

Things I Wondered About

**Default title template**

`%s — Project Curiosity`

**Default description**

An engineering notebook about difficult questions, prototypes, systems, mistakes and the things I learned while building them.

**Canonical domain**

`https://portfolio.dotnetgeek.co.uk`

## Core Pages

### Home

**Title**

Things I Wondered About — Engineering experiments by DotNetGeek

**Description**

An engineering notebook about difficult questions, prototypes, systems, mistakes and the things I learned while building them.

### Experiments

**Title**

Experiments — Project Curiosity

**Description**

Questions, prototypes and systems spanning product engineering, AI, knowledge graphs, games and speculative software architecture.

### Research Notes

**Title**

Research Notes — Project Curiosity

**Description**

Shorter observations, technical investigations and lessons connected to ongoing engineering experiments.

### About

**Title**

How I Ended Up Here — Project Curiosity

**Description**

How curiosity, technical leadership and a habit of building first shaped the way I approach engineering.

## Experiment Pages

Use this structure:

**Title**

`{Experiment name}: {short question fragment} — Project Curiosity`

**Description**

A concise statement of the question, what was explored and the current state. Keep it under approximately 160 characters where practical.

### Initial Drafts

**DeliveryIQ**

DeliveryIQ: Rethinking engineering delivery around AI — Project Curiosity

An experiment in redesigning engineering-delivery tools around context, flow and agent-assisted work rather than adding AI afterwards.

**Chronos**

Chronos: Exploring history as a temporal knowledge graph — Project Curiosity

A temporal knowledge-graph and mobile-app experiment for exploring connected people, events and periods across history.

**Morris**

Morris: Combining symbolic reasoning, models and agents — Project Curiosity

An evolving symbolic-AI experiment exploring how reasoning systems, generative models and agents can work together.

**SafeNet**

SafeNet: Rethinking protocols, identity and data rights — Project Curiosity

A speculative Rust and systems-design experiment exploring how the web might be rebuilt around different ownership assumptions.

**Token Burn**

Token Burn: Designing a simple mobile rogue-like — Project Curiosity

A mobile-game experiment in pacing, replayability and creating depth from a deliberately small set of mechanics.

## Social Preview Guidance

Each major page should have a purpose-built social image where practical.

### Required content

- page or experiment title;
- short question fragment;
- restrained project accent;
- Project Curiosity identifier;
- no technology-logo collage;
- no portrait requirement.

### Visual constraints

Social images must use the same warm-paper, charcoal-ink and muted-accent system as the site. They should resemble an annotated notebook cover or index card, not a SaaS advertisement.

## Structured Data

Use structured data only where it accurately describes the page.

Potential types:

- `WebSite` for the site root;
- `Person` for the About page or global author identity;
- `Article` for research notes;
- `CreativeWork` or `SoftwareSourceCode` for experiments where appropriate.

Do not mark private or inaccessible code as publicly available software.

## Indexing Rules

- index published pages only;
- exclude drafts and placeholder-only experiment pages;
- provide canonical URLs;
- generate a sitemap from publishable content;
- do not create thin tag pages solely for search engines;
- descriptions must remain human-readable and evidence-based.

## Acceptance Criteria

- [ ] Every published route has a unique title and useful description.
- [ ] Draft content is excluded from indexing.
- [ ] Experiment descriptions do not imply unsupported maturity or success.
- [ ] Social previews follow the visual language.
- [ ] Canonical URLs use the portfolio domain.
