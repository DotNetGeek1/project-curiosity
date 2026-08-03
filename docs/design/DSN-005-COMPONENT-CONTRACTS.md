# DSN-005: Component Contracts

| Field | Value |
|---|---|
| Status | Accepted |
| Version | 1.0 |
| Depends On | DSN-001 through DSN-004, UX specifications |

## Purpose

This document defines the initial component vocabulary and the behaviour each component must preserve. It is not a catalogue of visual variants. Components exist to express recurring content and interaction patterns.

## Component principles

1. Prefer semantic HTML before abstraction.
2. Create a component when behaviour, accessibility or visual rules genuinely repeat.
3. Keep content out of component implementations.
4. Avoid universal components with dozens of unrelated variants.
5. Every component must work without animation.
6. Components must tolerate realistic content lengths.

## Initial primitives

### PageShell

Provides the page container, global landmarks and consistent outer spacing.

Contract:

- renders semantic header, main and footer regions;
- accepts no page-specific content assumptions;
- does not own navigation data;
- supports skip links.

### Section

Creates a semantic page section with optional label, heading and description.

Contract:

- heading level is explicit or derived safely from context;
- section IDs are stable for linking;
- decorative wrappers are optional;
- does not force a card surface.

### Prose

Applies long-form typography to authored content.

Contract:

- styles semantic Markdown/MDX output;
- supports headings, lists, code, figures, tables and footnotes;
- does not override bespoke interactive components globally.

### MetadataList

Displays compact labelled values such as state, dates, role and technologies.

Contract:

- uses a description list where appropriate;
- wraps without truncating meaningful values;
- state is not communicated by colour alone.

### StatusLabel

Represents an experiment or document state.

Contract:

- visible text is always present;
- state mapping is centralised;
- unknown values fail visibly during development;
- humourous states remain content-level choices, not hidden component logic.

### ExperimentCard

Introduces an experiment in an index or related-content area.

Required content:

- project name;
- primary question;
- concise summary;
- current state;
- optional accent and last-investigated date.

Contract:

- the entire card may be clickable only when nested controls are absent;
- question is more prominent than technology metadata;
- cards remain comparable without becoming identical rectangles;
- no hover-only information.

### NoteCard

Introduces a research note.

Contract:

- differentiates notes from experiments through content and typography rather than arbitrary colour;
- shows note type and date where useful;
- supports related experiment links.

### QuestionStatement

Displays the central question for a page or experiment.

Contract:

- uses semantic heading or paragraph markup appropriate to context;
- handles long questions;
- contains no typing animation;
- may include a small label such as "I wondered if...".

### EvidenceFigure

Presents an image, diagram, benchmark or screenshot with context.

Contract:

- requires alt text or an explicit decorative designation;
- supports caption, source and visibility label;
- preserves intrinsic dimensions to reduce layout shift;
- provides a textual explanation for complex diagrams.

### ArchitectureDiagram

A specialised evidence figure for system diagrams.

Contract:

- SVG or semantic HTML is preferred;
- labels remain readable at zoom;
- colour is not the only relationship cue;
- a text description accompanies complex diagrams;
- interactive enhancement is optional.

### Callout

Highlights a warning, lesson, caveat or decision.

Contract:

- variants are semantic, not aesthetic;
- iconography never replaces a heading or label;
- callouts are used sparingly;
- ordinary paragraphs must not be converted into callouts for visual variety.

### Timeline

Displays meaningful chronological progression.

Contract:

- items remain in DOM order;
- dates are machine-readable where appropriate;
- mobile layout is linear;
- decorative trajectories do not obscure chronology.

### TableOfContents

Supports long experiment pages.

Contract:

- built from actual heading structure;
- current-section highlighting is progressive enhancement;
- sticky behaviour remains optional;
- accessible without client-side JavaScript.

### CodeBlock

Displays source or configuration evidence.

Contract:

- includes language metadata when known;
- copy controls are keyboard accessible;
- long lines scroll safely;
- syntax highlighting meets contrast requirements;
- code excerpts are short enough to support the surrounding explanation.

### ExternalLink

Provides consistent treatment for external destinations.

Contract:

- external status is apparent where useful;
- new-tab behaviour is used only when justified;
- no icon-only links without accessible names.

## Navigation components

Global navigation, breadcrumb and footer implementations must follow UX-005.

The mobile menu:

- uses a real button;
- exposes expanded state;
- manages focus correctly;
- closes predictably;
- does not require a full client application shell.

## Forms

The MVP should avoid complex forms. A future contact form must include labelled fields, explicit error summaries, anti-spam measures and a non-form contact alternative.

## Variant limits

A component should normally have no more than a small number of meaningful variants. When variant combinations multiply, split the abstraction or move the difference into composition.

## Story and test requirements

Each reusable component should have representative fixtures or stories covering:

- ordinary content;
- long text;
- missing optional fields;
- narrow viewport;
- keyboard focus;
- reduced motion where relevant;
- high zoom;
- state and error variants.

## Acceptance criteria

- [ ] Components map to recurring semantic patterns.
- [ ] Content data is not hard-coded into visual components.
- [ ] Every interactive component has keyboard and screen-reader behaviour defined.
- [ ] Long and missing content states are tested.
- [ ] The initial system avoids a universal card abstraction.
- [ ] Components remain usable without motion or client-side hydration where not required.
