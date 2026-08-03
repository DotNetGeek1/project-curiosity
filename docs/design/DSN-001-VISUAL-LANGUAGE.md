# DSN-001: Visual Language

| Field | Value |
|---|---|
| Status | Accepted |
| Version | 1.0 |
| Owner | I/me |
| Depends On | ADR-001, DESIGN-RULES, UX-RULES |

## Purpose

This document defines the visual language for Project Curiosity. It converts the engineering-notebook concept into a repeatable design system that can be implemented without drifting into a generic developer portfolio.

## Design intent

The site should feel like a thoughtful engineering notebook: warm, precise, tactile, editorial and slightly eccentric. It should look designed, but never styled for the sake of style.

The visual system should suggest:

- a carefully kept lab notebook;
- an annotated technical paper;
- an archive of experiments;
- a workshop where ideas are still being tested;
- confidence without corporate polish.

## Emotional target

A visitor should feel:

- invited rather than sold to;
- curious rather than dazzled;
- confident that the work is serious;
- comfortable reading deeply;
- aware that there is a real person behind the system.

## Core visual principles

### 1. Editorial before decorative

Typography, hierarchy and composition carry the design. Decorative assets support meaning and must not rescue weak structure.

### 2. Warm rather than sterile

Use paper-like neutrals, dark ink and restrained natural accents. Avoid cold application chrome.

### 3. Precision with visible humanity

Alignment, spacing and type should be disciplined. Small annotations, sketch-like diagrams and dry labels may provide character.

### 4. Distinction through restraint

The site should not rely on visual spectacle. Distinction comes from consistency, writing, illustration and unusual but clear editorial details.

### 5. Physics as an influence, not a theme

Ideas such as systems, fields, trajectories, constraints, emergence and observation may shape composition and illustration. Do not add atom icons, equations or quantum clichés merely to signal an interest in physics.

## Composition model

The dominant composition is a readable editorial column supported by optional marginal information.

Typical pages may include:

- a narrow metadata rail;
- a primary reading column;
- occasional wide diagrams or evidence panels;
- annotations connected through rules, numbering or labels;
- generous empty space around important ideas.

The page should still read correctly when reduced to a single column.

## Surface language

The default surface resembles uncoated paper rather than a white application canvas.

Use:

- warm neutral page backgrounds;
- slightly contrasting secondary paper surfaces;
- charcoal text rather than absolute black;
- thin ink-like rules;
- subtle texture only when it does not affect performance or legibility.

Avoid:

- glass panels;
- large floating cards everywhere;
- thick shadows;
- glowing borders;
- gradients used as decoration;
- heavily rounded application containers.

## Shape language

Most elements should be rectangular and calm.

- Border radii are small and intentional.
- Circles are reserved for diagrams, markers and controls that genuinely benefit from them.
- Pills are limited to compact status or taxonomy labels.
- Cards should be used for grouping, not as the universal layout primitive.

## Line language

Rules and connectors are important to the visual identity.

They may represent:

- relationships;
- timelines;
- experimental paths;
- metadata boundaries;
- annotations;
- states or transitions.

Lines should be thin, quiet and functional. Avoid circuit-board decoration.

## Accent strategy

The global palette uses a restrained family of muted accents such as rust, moss, mustard and burgundy.

Each experiment may adopt one primary accent. The accent should help orientation and identity, not recolour the whole page.

Recommended use:

- status markers;
- small headings;
- diagram highlights;
- links and focus indicators;
- selected rules;
- evidence labels.

Avoid using multiple loud accents in the same component.

## Imagery

Prefer original and evidential imagery:

- application screenshots;
- architecture diagrams;
- notebook sketches;
- graphs;
- timelines;
- interface fragments;
- prototype artefacts;
- photographs of relevant physical notes or experiments, where useful.

Do not use generic stock imagery or generated filler art to make sections feel complete.

## Character and humour

Visual humour is allowed in marginal details, status labels and experiment-specific annotations.

Examples include:

- a containment warning on Morris;
- an intentionally over-serious specimen label;
- a small "last known stable state" note;
- a footnote documenting an avoidable failure.

Humour must never obscure a control, weaken accessibility or trivialise a serious claim.

## Responsive behaviour

The desktop design may use asymmetry and marginalia. Mobile must preserve reading order and meaning.

On narrow screens:

- metadata moves into the main flow;
- side notes become labelled blocks;
- wide diagrams scroll or reflow safely;
- decorative rules simplify;
- spacing remains generous enough to feel deliberate.

Do not shrink desktop composition until it technically fits.

## Anti-goals

The design must not resemble:

- an AI SaaS landing page;
- a cyberpunk terminal;
- a developer-template hero with floating technology logos;
- a corporate consultancy brochure;
- a faux vintage scrapbook;
- a dashboard;
- a personal brand mood board.

## Review checklist

- Does the page remain readable without decoration?
- Is the visual hierarchy obvious within five seconds?
- Does each accent communicate something?
- Are cards being used because content is grouped, not by habit?
- Is the interface calm enough for long-form reading?
- Would this design still feel coherent in print?
- Does any element look like it was added simply to impress another developer?

## Acceptance criteria

- [ ] All public pages use the same editorial visual grammar.
- [ ] Typography and whitespace create the primary hierarchy.
- [ ] Accent colours remain restrained and meaningful.
- [ ] Mobile composition is designed rather than compressed.
- [ ] No banned portfolio or SaaS visual cliché appears in the MVP.
- [ ] Project-specific character does not weaken consistency.
- [ ] Core content remains understandable without imagery or motion.
