# DSN-002: Design Tokens

| Field | Value |
|---|---|
| Status | Accepted |
| Version | 1.0 |
| Depends On | DSN-001, DESIGN-RULES |

## Purpose

This document defines the semantic token model for colour, spacing, type, borders, radii, shadows and motion. It specifies intent rather than binding the implementation to one CSS methodology.

## Token principles

1. Components consume semantic tokens, not raw values.
2. Token names describe purpose, not appearance.
3. The default theme is warm and editorial.
4. Experiment accents extend the system without replacing it.
5. Accessibility wins over palette fidelity.
6. Dark mode is not part of the MVP unless implemented as a complete, tested theme.

## Colour roles

### Surfaces

- `surface-page` — primary warm paper background.
- `surface-raised` — slightly distinct paper surface for grouped evidence.
- `surface-muted` — metadata bands, code labels and subdued callouts.
- `surface-inverse` — rare dark surface for focused media or diagrams.

### Text

- `text-primary` — dark charcoal body and headings.
- `text-secondary` — quieter metadata and supporting explanation.
- `text-muted` — low-priority information that remains legible.
- `text-inverse` — content on inverse surfaces.
- `text-link` — accessible link colour, clearly distinguishable from body text.

### Borders and rules

- `rule-default` — ordinary separators.
- `rule-strong` — deliberate structural boundaries.
- `rule-subtle` — low-contrast grouping.
- `focus-ring` — highly visible keyboard focus.

### Semantic states

- `state-active`
- `state-prototype`
- `state-shipped`
- `state-paused`
- `state-dormant`
- `state-abandoned`
- `state-warning`
- `state-error`
- `state-success`

State colours must never be the only carrier of meaning. Labels or icons accompany them.

### Experiment accents

Initial accent families may include:

- rust;
- moss;
- mustard;
- burgundy;
- slate blue used sparingly.

Each family needs accessible foreground, subtle background and rule variants. Accent assignments belong in content metadata or a central experiment registry, not scattered through components.

## Initial palette guidance

Exact values may be tuned during implementation, but the system should remain close to the following characteristics:

- page: light warm cream;
- raised surface: warmer off-white;
- primary text: near-black charcoal;
- secondary text: warm grey;
- rules: low-contrast brown-grey;
- accents: muted, earthy and medium-dark enough for legible use.

Avoid pure white and pure black as dominant page colours.

## Contrast requirements

- Normal text must meet WCAG AA contrast.
- Large text must meet WCAG AA contrast.
- Focus rings must remain visible against every interactive surface.
- Muted text may not become decorative grey that cannot be read.
- Accent text must be tested on every intended background.

## Spacing scale

Use a restrained scale based on a small unit. Recommended semantic roles:

- `space-2xs` — icon and label details;
- `space-xs` — tightly related inline items;
- `space-sm` — internal control spacing;
- `space-md` — ordinary component spacing;
- `space-lg` — separation within a section;
- `space-xl` — major section separation;
- `space-2xl` — page-level breathing room;
- `space-3xl` — editorial pauses and hero spacing.

Do not use arbitrary spacing values in ordinary components. Exceptions should document the visual reason.

## Typography tokens

Define tokens for:

- display;
- page title;
- section heading;
- subsection heading;
- body large;
- body;
- body small;
- metadata;
- code;
- annotation;
- label.

Each token includes font family, size, line height, weight and letter spacing.

## Width tokens

Recommended semantic widths:

- `measure-body` — comfortable long-form line length, generally 60–75 characters;
- `measure-wide` — introductions and summaries;
- `measure-narrow` — annotations and metadata;
- `container-reading` — primary editorial column;
- `container-page` — full page composition;
- `container-wide` — diagrams and evidence.

## Border tokens

- Default rules should be one device-independent pixel where possible.
- Strong rules may be thicker only when hierarchy requires it.
- Dashed or dotted rules are reserved for provisional, inferred or incomplete relationships.
- Border styles must not imitate graph paper across entire pages.

## Radius tokens

Use a small radius family:

- `radius-none`;
- `radius-small`;
- `radius-medium`;
- `radius-round` for circular controls only.

Large pill-shaped cards are prohibited by default.

## Shadow tokens

Shadows are exceptional.

- `shadow-none` is the default.
- `shadow-subtle` may separate an overlay or floating control from content.
- `shadow-dialog` may support modal surfaces if introduced later.

Cards and evidence blocks should normally use spacing, surface contrast and rules rather than shadows.

## Motion tokens

Define semantic durations:

- `motion-instant` — state change with no meaningful travel;
- `motion-fast` — hover and focus feedback;
- `motion-standard` — disclosure and small transitions;
- `motion-deliberate` — explanatory diagrams only.

Easing should feel calm and physical, not elastic or theatrical.

Reduced-motion mode must remove non-essential travel, parallax, automatic animation and looping effects.

## Z-index tokens

Use named layers only:

- base;
- raised content;
- sticky navigation;
- overlay;
- modal;
- notification.

No component may introduce an arbitrary high z-index.

## Implementation contract

- Tokens must be centralised.
- Raw values may be used only inside the token definition layer or for genuinely content-derived values.
- Components must not encode experiment colours directly.
- Token changes must be visually regression-tested across representative pages.
- CSS custom properties are preferred for runtime theming and inspection.

## Acceptance criteria

- [ ] Every component consumes semantic tokens.
- [ ] Colour contrast is tested automatically where practical and manually where necessary.
- [ ] The spacing system prevents ad hoc values from proliferating.
- [ ] Experiment accents can be changed centrally.
- [ ] Focus styles remain visible across all surfaces.
- [ ] Reduced-motion tokens are implemented from the beginning.
