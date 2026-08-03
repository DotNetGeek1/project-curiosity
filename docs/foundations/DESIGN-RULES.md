# Project Curiosity — Design Rules

| Field           | Value                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Document ID** | FOUNDATION-DESIGN-001                                                                           |
| **Status**      | Proposed                                                                                        |
| **Version**     | 1.0                                                                                             |
| **Date**        | 2026-08-03                                                                                      |
| **Owner**       | Me                                                                                              |
| **Extends**     | [ADR-001: Project Curiosity Is an Engineering Notebook](../adr/ADR-001-Engineering-Notebook.md) |

## 1. Purpose

This document is the visual-design constitution for Project Curiosity. It defines the character, constraints and decision tests that govern the public website.

It is intentionally more opinionated than a conventional style guide. Its job is not merely to specify fonts and colours. Its job is to stop the site drifting into a generic developer portfolio, a corporate SaaS landing page or a technically impressive but unreliable art experiment.

The design must communicate one central idea:

> This is the working notebook of a curious engineer.

## 2. Desired Character

The visual language should feel like a meeting point between:

- an engineering field notebook;
- an annotated research paper;
- a physics lab journal;
- a museum archive;
- a well-used but organised workshop.

The result should be intelligent, calm, tactile and slightly eccentric. It should feel designed, but not polished until all personality has been sanded away.

The intended reaction is:

> “This feels different because it has a point of view.”

Not:

> “This is trying very hard to look different.”

## 3. Core Design Principles

### 3.1 Clarity before spectacle

The content must remain readable and navigable before any decorative or interactive enhancement loads.

No visual effect is justified merely because it is technically interesting.

### 3.2 Editorial, not corporate

Pages should be composed like thoughtful articles, case studies and research notes rather than marketing funnels.

Use:

- strong typographic hierarchy;
- generous margins;
- figure captions;
- side notes;
- project metadata;
- diagrams integrated into the story.

Avoid:

- oversized conversion-focused hero sections;
- repeated feature-card grids;
- testimonial bands;
- logo walls;
- pricing-page visual language;
- “book a call” pressure.

### 3.3 Personality through detail

Distinctiveness should come from small, coherent details:

- experiment numbers;
- “last investigated” dates;
- state labels such as Exploring, Growing or Paused;
- restrained margin annotations;
- hand-drawn-style arrows used sparingly;
- diagram notation;
- project-specific accent colours;
- occasional dry humour.

Do not force personality into every component. A little mischief goes a long way.

### 3.4 Whitespace is structural

Whitespace is not unused space. It controls pace, separates ideas and helps complex material feel approachable.

Do not compress layouts merely to reduce scrolling. Long pages are acceptable when their structure remains clear.

### 3.5 The design must age well

The site should not depend on a short-lived visual trend. Experimental details may evolve, but the underlying editorial system should still feel credible in several years.

## 4. Colour Direction

### 4.1 Base palette

Use warm, quiet neutrals rather than pure white, blue-grey or dark navy.

Recommended starting tokens:

```css
--paper-0: #f6f2e8;
--paper-1: #eee8da;
--ink-0: #20201d;
--ink-1: #4c4a43;
--line: #cbc2b1;
--muted: #756f64;
```

These are starting points, not immutable values. Contrast testing takes priority.

### 4.2 Accent palette

Use muted, natural colours:

- rust;
- moss;
- mustard;
- faded burgundy;
- slate-green;
- burnt orange.

Each experiment may have one primary accent. Accents should help orientation and identity, not create a rainbow interface.

### 4.3 Forbidden colour patterns

Avoid:

- corporate blue as the dominant colour;
- neon cyan, electric purple or magenta glows;
- black backgrounds with fluorescent highlights;
- multi-colour AI gradients;
- decorative gradients without information value;
- low-contrast beige-on-beige text.

## 5. Typography

### 5.1 Typeface roles

Use three complementary roles:

1. **Editorial serif** for major headings and expressive statements.
2. **Highly readable sans-serif** for body text, navigation and controls.
3. **Monospace** for code, metadata, labels and technical notation.

A possible family set is:

- headings: Fraunces, Instrument Serif or another restrained editorial serif;
- body: Atkinson Hyperlegible, IBM Plex Sans or Source Sans;
- technical: IBM Plex Mono or Source Code Pro.

Font selection must consider licensing, loading performance and character coverage.

### 5.2 Typographic behaviour

- Body text should usually sit between 17px and 20px on desktop.
- Reading columns should generally remain between 65 and 78 characters.
- Heading scale should create hierarchy without billboard-sized typography.
- Line height should favour sustained technical reading.
- Italics should be used for observations and “I wondered if...” statements, not whole paragraphs.
- Monospace must not become the default personality shortcut.

### 5.3 Typography anti-patterns

Do not use:

- 100px hero headlines merely because the viewport allows them;
- all-caps body copy;
- terminal-style text for ordinary content;
- excessively small metadata;
- more than three primary type families;
- code fonts as a substitute for engineering credibility.

## 6. Layout System

### 6.1 Global structure

The layout should use a responsive editorial grid with:

- a main reading column;
- an optional metadata or annotation rail;
- wide figure regions for diagrams and screenshots;
- generous outer margins on large screens.

### 6.2 Homepage

The homepage should prioritise questions and experiment stories.

A recommended sequence:

1. concise identity and premise;
2. featured questions;
3. experiment index;
4. current obsessions;
5. short explanation of how I work;
6. invitation to explore or make contact.

Do not begin with a skills matrix.

### 6.3 Experiment pages

Experiment pages should support:

- opening question;
- short orientation summary;
- state, date and technical metadata;
- narrative sections;
- diagrams and evidence;
- failures and lessons;
- related notes;
- repository availability.

The page must work as a readable article even if every enhancement is removed.

### 6.4 Cards

Cards should be used sparingly. Avoid wrapping every piece of information in a rounded rectangle.

Experiment entries may use borders, ruled separators, paper blocks or asymmetric editorial compositions instead of generic cards.

## 7. Imagery, Diagrams and Illustration

### 7.1 Diagrams are first-class content

Architecture diagrams, timelines and conceptual models should be designed as part of the editorial system.

Preferred characteristics:

- thin charcoal strokes;
- restrained project accent colours;
- clear labels;
- numbered annotations;
- captions;
- accessible descriptions;
- SVG where practical.

### 7.2 Illustration style

Illustrations may resemble annotated technical sketches, but must not deliberately reduce legibility to imitate handwriting.

Use visual imperfection carefully. The site should feel human, not messy.

### 7.3 Screenshots

Screenshots should be cropped and annotated to support a specific point. Avoid galleries of unexplained interfaces.

### 7.4 Stock imagery

Do not use generic stock photography or illustrations of developers, robots, brains, glowing networks or people pointing at dashboards.

## 8. Motion

### 8.1 Purpose

Motion may:

- reveal the construction of a diagram;
- show change across time;
- explain relationships;
- provide subtle orientation feedback;
- make state transitions understandable.

Motion must not exist merely to make the page feel modern.

### 8.2 Rules

- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking.
- Avoid long entrance sequences.
- Avoid motion that delays reading.
- Keep hover effects subtle.
- Prefer opacity and small positional changes over large transforms.
- The page must remain understandable when animation is disabled.

### 8.3 Three.js and advanced visuals

Three.js may be used inside an experiment where spatial representation teaches something. It must not replace primary navigation or core content.

Any advanced visual needs:

- a static fallback;
- a clear purpose;
- mobile consideration;
- keyboard and reduced-motion behaviour;
- a performance budget.

## 9. Components

Core components should include:

- experiment entry;
- experiment state;
- question statement;
- observation callout;
- margin note;
- technical figure;
- caption;
- evidence panel;
- decision record link;
- related experiment link;
- repository-access note.

Every component must define:

- purpose;
- semantic HTML;
- responsive behaviour;
- accessibility requirements;
- content limits;
- permitted variants;
- anti-patterns.

Do not create a component merely because a block appears twice. Reuse must improve consistency without making editorial composition rigid.

## 10. Accessibility

Accessibility is part of the design, not a later audit.

Requirements include:

- WCAG AA contrast as a minimum;
- visible keyboard focus;
- semantic headings;
- accessible navigation landmarks;
- useful alternative text;
- diagram descriptions;
- no information conveyed by colour alone;
- comfortable touch targets;
- motion controls;
- zoom support;
- readable content at 320px width.

Decorative notebook details must never obstruct assistive technology or text selection.

## 11. Responsive Design

The small-screen experience is not a compressed desktop layout.

On mobile:

- reading order becomes primary;
- side notes move inline;
- diagrams may stack or become scrollable with explicit affordances;
- metadata remains readable;
- navigation remains conventional;
- decorative layers reduce;
- no critical hover-only behaviour is permitted.

The site should feel deliberately designed on mobile, not merely functional.

## 12. Explicitly Banned Defaults

Do not introduce the following without an accepted ADR:

- glassmorphism;
- glowing borders;
- animated particle fields;
- typing animations;
- skill percentage bars;
- rotating 3D project menus;
- smooth-scroll libraries that take over native scrolling;
- generic dark-mode-first developer styling;
- giant technology-logo grids;
- arbitrary rounded cards everywhere;
- stock AI imagery;
- carousels for core reading;
- autoplay video or audio;
- novelty cursors.

## 13. Design Decision Test

Before adding a visual treatment, ask:

1. Does it help explain the experiment or my way of thinking?
2. Does it improve orientation, hierarchy or comprehension?
3. Is it still useful without animation?
4. Does it remain credible to a senior engineer?
5. Is the simplest version good enough?
6. Will it work on a modest phone?
7. Is it distinctive because it is coherent, or merely unusual?

If the answer is weak, leave it out.

## 14. Acceptance Criteria

- [ ] The site reads as an engineering notebook rather than a SaaS landing page.
- [ ] The design is recognisable without depending on neon, glass or 3D navigation.
- [ ] Content is readable before decorative assets load.
- [ ] Questions and diagrams receive more visual emphasis than technology tags.
- [ ] Every experiment can have a distinct accent while remaining part of one system.
- [ ] Mobile layouts are intentionally composed.
- [ ] Reduced-motion mode preserves the complete experience.
- [ ] Core pages meet WCAG AA contrast and keyboard requirements.
- [ ] Components support editorial variation without visual inconsistency.
- [ ] The implementation passes the design decision test in Section 13.

## 15. Related Documents

- [ADR-001: Project Curiosity Is an Engineering Notebook](../adr/ADR-001-Engineering-Notebook.md)
- `WRITING-RULES.md`
- `UX-RULES.md`
- `TECHNICAL-RULES.md`
- future design-token specification
- future component specifications
