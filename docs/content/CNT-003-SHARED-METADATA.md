# CNT-003: Shared Metadata

| Field            | Value                             |
| ---------------- | --------------------------------- |
| **Status**       | Draft                             |
| **Owner**        | Me                                |
| **Last Updated** | 2026-08-03                        |
| **Depends On**   | CNT-001, CNT-002, TECHNICAL-RULES |

## Purpose

Define metadata shared across experiments, notes and future content types so relationships remain consistent and implementation-specific duplication is avoided.

## Stable Identifiers

Every structured record must have a stable ID independent from title, slug or file path.

Initial prefixes:

- `EXP-NNN` — experiment;
- `NOTE-NNN` — research note;
- `EVD-NNN` — evidence item;
- `ADR-NNN` — architecture decision;
- `RFC-NNN` — proposal;
- `PRN-NNN` — principle;
- `UX-NNN` — UX specification;
- `CNT-NNN` — content specification.

IDs must never be reused after deletion or retirement.

## Shared Dates

Use ISO 8601 dates in source metadata.

Common fields:

- `published` — first public publication;
- `lastRevised` — meaningful content revision;
- `firstInvestigated` — beginning of substantive work;
- `lastInvestigated` — most recent substantive investigation.

Formatting for readers is a presentation concern. Source dates remain machine-readable.

## Themes

Themes express durable subject relationships rather than implementation details.

Good examples:

- `applied-ai`
- `product-engineering`
- `developer-tools`
- `temporal-data`
- `distributed-systems`
- `game-design`
- `symbolic-ai`
- `physics`

Avoid uncontrolled variants such as `AI`, `artificial-intelligence`, `gen-ai` and `generative-ai` representing the same theme.

A central theme registry should define:

```yaml
id: applied-ai
label: Applied AI
description: Practical use of machine learning and generative models inside products and engineering systems.
```

## Technologies

Technologies are optional metadata and should not drive the primary navigation.

Use canonical display names, for example:

- `TypeScript`
- `React`
- `PostgreSQL`
- `Rust`
- `.NET`

Technologies may support technical orientation and search, but themes remain the preferred relationship model.

## SEO Metadata

Content may define:

```yaml
seo:
  title: DeliveryIQ — Project Curiosity
  description: A concise, truthful description suitable for search and sharing.
  image: /images/social/deliveryiq.png
```

Rules:

- Titles and descriptions must describe existing content honestly.
- Do not stuff technology keywords.
- Social images are optional and must not contain essential information unavailable as text.
- Canonical URLs must be stable.

## Reading Time

Reading time should normally be generated from rendered prose. It is guidance, not a performance promise.

Exclude code, navigation and metadata where practical. Do not show reading time on very short records where it adds noise.

## Related Content

Relationships use stable IDs:

```yaml
relatedExperiments:
  - EXP-005
relatedNotes:
  - NOTE-003
relatedDecisions:
  - ADR-001
```

The build must validate that referenced records exist.

Relationships are editorial, not automatically inferred merely because two records share a technology.

## Status and Visibility

Content status and evidence visibility are separate concepts.

Examples:

- an experiment may be `prototype` while its repository is public;
- a shipped system may have private source;
- a dormant experiment may still have extensive public evidence.

Do not collapse maturity and access into a single field.

## Deprecation and Redirects

When a slug changes after publication:

- preserve the stable ID;
- add a redirect from the old URL;
- update internal links;
- retain aliases in metadata where useful.

When content is retired:

- prefer an explanatory archived page over a silent 404 when external links may exist;
- preserve the reason and successor where relevant.

## Validation Requirements

The build or CI must detect:

- duplicate IDs;
- duplicate slugs within a content type;
- invalid date ordering;
- missing related IDs;
- unsupported states or visibility values;
- malformed URLs;
- missing required summaries;
- missing accessible text for required images.

## Acceptance Criteria

- [ ] IDs remain stable independently from slugs.
- [ ] Shared date semantics are consistent.
- [ ] Themes use a controlled registry.
- [ ] Technology metadata remains secondary.
- [ ] Relationships resolve during build validation.
- [ ] Slug changes can preserve external links.
