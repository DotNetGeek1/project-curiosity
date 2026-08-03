# DSN-003: Typography

| Field | Value |
|---|---|
| Status | Accepted |
| Version | 1.0 |
| Depends On | DSN-001, DSN-002 |

## Purpose

Typography is the primary visual system for Project Curiosity. It must support fast scanning, long-form reading, technical precision and a recognisable editorial character without becoming literary theatre.

## Family roles

Use no more than three functional families:

1. **Editorial serif** for display headings, page titles and selected quotations.
2. **Practical sans-serif** for body copy, navigation, controls and most metadata.
3. **Monospace** for code, identifiers, measurements and compact technical labels.

The selected families must render reliably, include the required weights, and remain legible across platforms. Self-hosting is preferred where licensing permits and performance is controlled.

## Hierarchy

### Display

Used rarely for the homepage statement or major experiment question. It may be expressive, but must wrap predictably and remain readable on mobile.

### Page title

Names the page or experiment. It should be distinct from the primary question, which may use a larger or more editorial treatment.

### Section heading

Creates strong anchors in long pages. Section headings should communicate structure without overwhelming body content.

### Subsection heading

Supports local grouping. Avoid deep heading hierarchies; if content requires more than four visible levels, restructure it.

### Body large

Used for summaries, introductions and decisive statements. It must not become a default that makes every paragraph look important.

### Body

Optimised for sustained reading. Use comfortable line height and a measure of roughly 60–75 characters.

### Metadata

Compact but fully legible. Metadata may use uppercase or tracking only in short labels, never long sentences.

### Annotation

Used for side notes, captions and evidence context. It may be visually distinct, but must remain readable and selectable.

### Code

Code uses a monospace family with clear punctuation and distinguishable glyphs. Inline code should not create disruptive boxes around every term.

## Editorial rules

- Use sentence case for headings.
- Avoid title case except for proper document titles where already established.
- Do not use all caps for long labels.
- Keep paragraph lengths varied and natural.
- Use italics for emphasis sparingly.
- Use bold to aid scanning, not to decorate every paragraph.
- Links must remain identifiable without relying only on colour.
- Avoid centre-aligned body copy.

## Questions and quotations

The central question of an experiment is a first-class typographic element. It should feel like an invitation to investigate, not a marketing headline.

Block quotations should be used only for genuine quotations or statements that deserve isolation. Do not turn ordinary prose into quote cards.

## Numbers and identifiers

Document IDs, experiment states, dates, versions and measurements may use monospace or tabular numerals.

Numbers should be formatted consistently:

- dates use an explicit human-readable format in public content;
- technical timestamps may use ISO format in metadata;
- large numbers include separators where appropriate;
- percentages are not used as decorative skill indicators.

## Responsive typography

Use fluid sizing only within controlled limits. Large type must not produce single-word lines or force excessive scrolling on narrow screens.

Mobile requirements:

- body text remains comfortably readable without zoom;
- line height does not collapse;
- heading scale reduces proportionately;
- metadata wraps cleanly;
- code and long identifiers scroll or break safely.

## Font loading

- Use a small number of font files and weights.
- Preload only fonts required above the fold.
- Use `font-display` behaviour that avoids invisible text.
- Provide sensible fallbacks with similar metrics.
- Prevent layout shift where practical.

## Accessibility

- The root font size must respect browser preferences.
- Text must remain usable at 200% zoom.
- Content must not rely on text embedded in images.
- Letter spacing must not prevent user overrides.
- Justified body text is prohibited.

## Acceptance criteria

- [ ] The site uses no more than three functional font families.
- [ ] Long-form pages remain comfortable to read on desktop and mobile.
- [ ] Heading hierarchy maps correctly to semantic HTML.
- [ ] Font loading does not hide content or create major layout shifts.
- [ ] Metadata remains readable rather than ornamental.
- [ ] Questions are visually prominent without resembling advertising copy.
