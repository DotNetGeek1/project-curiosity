# DSN-004: Layout and Spacing

| Field      | Value                     |
| ---------- | ------------------------- |
| Status     | Accepted                  |
| Version    | 1.0                       |
| Depends On | DSN-001, DSN-002, DSN-003 |

## Purpose

This document defines the page grid, reading measures, spacing rhythm and responsive behaviour for Project Curiosity.

## Layout model

The default desktop page uses three conceptual zones:

1. **context rail** for metadata, section labels and occasional annotations;
2. **reading column** for the principal narrative;
3. **evidence field** for diagrams, screenshots and wider technical material.

These are conceptual zones, not fixed columns on every page. Simple pages may use only the reading column.

## Page container

The page container must:

- centre the composition on large screens;
- retain generous but bounded outer margins;
- support full-bleed evidence within the safe page width;
- avoid excessively wide text;
- reduce cleanly to one column.

## Reading measures

- Body copy targets 60–75 characters per line.
- Introductory copy may be wider when short.
- Annotations use a narrower measure.
- Code examples and diagrams may exceed the body measure but must remain inside a controlled wide container.

## Vertical rhythm

Spacing should communicate relationships.

- Items within the same thought use small spacing.
- Paragraphs use consistent readable spacing.
- Subsections use medium separation.
- Major sections use generous separation.
- Important transitions may include an editorial pause with more whitespace.

Avoid inserting horizontal rules simply because spacing is insufficient.

## Grid behaviour

Desktop layouts may use a 12-column implementation grid, but components consume named layout regions rather than raw column numbers.

Recommended regions:

- full page;
- reading;
- reading plus rail;
- wide evidence;
- full-bleed within page;
- edge-to-edge media only where justified.

## Marginalia

Side notes and metadata should enhance rather than interrupt reading.

Rules:

- Do not place essential content only in a margin.
- Associate notes clearly with their source section.
- Avoid overlapping notes or dense stacks.
- Collapse notes into the main flow on smaller screens.
- Screen-reader order must follow the logical reading sequence.

## Section composition

A typical experiment section contains:

- an optional section identifier;
- a clear heading;
- a concise opening statement;
- body content;
- optional evidence or annotation;
- enough space before the next section to communicate a transition.

Do not wrap every section in a card or tinted panel.

## Evidence layouts

Evidence may use:

- inline figures;
- wide figures crossing the reading column;
- paired image and commentary;
- before-and-after comparisons;
- architecture diagrams with a caption and textual explanation;
- compact evidence lists.

Every figure must remain understandable when resized. Captions stay attached to their figure.

## Responsive breakpoints

Breakpoints should be content-driven rather than device-branded.

At minimum, account for:

- single-column narrow screens;
- comfortable tablet or small laptop widths;
- full editorial desktop composition;
- very wide screens where the page container stops growing.

## Mobile rules

- Preserve semantic order.
- Move metadata above or immediately below the relevant heading.
- Avoid horizontal scrolling except for code, tables or diagrams that cannot reflow safely.
- Provide visible affordances where horizontal scrolling is unavoidable.
- Maintain meaningful page margins.
- Do not reduce spacing so aggressively that the notebook character disappears.

## Sticky elements

Sticky navigation or table-of-contents elements may be used only when they do not obscure content or consume excessive viewport height.

- Sticky controls need clear boundaries.
- They must respect zoom and reduced viewport height.
- Mobile sticky elements should be minimal.

## Empty space

Whitespace is part of the content hierarchy. It may represent:

- a change in subject;
- uncertainty;
- a moment of emphasis;
- separation between narrative and evidence.

Do not automatically fill empty areas with decorative illustrations.

## Acceptance criteria

- [ ] Body copy remains within a comfortable reading measure.
- [ ] Pages reduce to a coherent single-column layout.
- [ ] Marginal content remains available and correctly ordered on mobile.
- [ ] Evidence can expand without breaking the page grid.
- [ ] Spacing uses semantic tokens rather than arbitrary values.
- [ ] No essential interaction depends on hover or desktop width.
