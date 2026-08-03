# DSN-007: Diagrams and Illustration

| Field      | Value                     |
| ---------- | ------------------------- |
| Status     | Accepted                  |
| Version    | 1.0                       |
| Depends On | DSN-001, DSN-002, DSN-005 |

## Purpose

Diagrams and illustrations should help a visitor understand systems, flows, experiments and decisions. They are evidence and explanation, not filler.

## Diagram categories

- architecture and data flow;
- sequence and lifecycle;
- timeline and historical relationships;
- state and transition;
- comparison;
- conceptual model;
- experiment apparatus or simulation;
- annotated interface.

## Visual grammar

Use a consistent system of:

- labelled nodes;
- thin connectors;
- directional markers where direction matters;
- solid lines for established relationships;
- dashed lines for provisional, inferred or optional relationships;
- restrained accent highlights;
- clear legends only when the visual cannot explain itself.

Do not decorate diagrams with fake circuitry or unnecessary technical symbols.

## Accessibility

Every complex diagram requires:

- a concise accessible name;
- a nearby textual explanation;
- sufficient contrast;
- labels that do not rely on colour alone;
- readable text at zoom;
- logical keyboard behaviour if interactive.

A diagram must not be the sole location of essential facts.

## SVG rules

SVG is preferred for scalable diagrams.

- Text should remain text where practical.
- IDs must be unique and stable.
- Decorative SVGs are hidden from assistive technology.
- Meaningful SVGs receive appropriate accessible markup.
- Avoid enormous generated path data when a simpler shape will work.
- Inline SVG is used only when styling or interaction requires it.

## Mermaid

Mermaid may be used in repository documentation for maintainable technical diagrams. Public-site diagrams may be rendered from Mermaid at build time, but raw client-side rendering is not required.

Any Mermaid-derived public diagram must be reviewed for typography, contrast, responsiveness and textual alternatives.

## Illustration style

Original illustrations should resemble technical notebook marks rather than polished marketing artwork.

Possible motifs:

- labelled sketches;
- trajectories;
- measurement marks;
- specimen-style identifiers;
- field lines and constraints;
- layered system fragments;
- small hand-drawn annotations.

Avoid deliberate messiness that harms comprehension. The goal is human precision, not fake imperfection.

## Project identity

Each experiment may have a small visual motif:

- DeliveryIQ — flows, queues, signals and feedback loops;
- Chronos — timelines, temporal edges and layered events;
- Token Burn — grids, tokens and controlled game-state fragments;
- SafeNet — protocols, trust boundaries and network paths;
- Morris — symbolic structures, containment boundaries and emergent graphs.

Motifs should share the global grammar and not become separate mini-brand systems.

## Screenshots

Screenshots must:

- show relevant content rather than entire desktops;
- remove or obscure sensitive information;
- include a caption explaining what matters;
- be captured at adequate resolution;
- avoid unreadable text embedded at tiny scale;
- use device frames only when the device context is relevant.

## Interactive enhancement

Interaction may reveal detail, relationships or sequence. The complete static explanation remains available before enhancement.

## Acceptance criteria

- [ ] Every diagram has a defined explanatory purpose.
- [ ] Complex diagrams include textual alternatives.
- [ ] Diagram styling is consistent across experiments.
- [ ] Project motifs remain subordinate to the global visual language.
- [ ] Screenshots are cropped, captioned and reviewed for sensitive data.
- [ ] Static content remains complete without interactive enhancement.
