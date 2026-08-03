# ADR-003: Structured Content

| Field      | Value                            |
| ---------- | -------------------------------- |
| Status     | Accepted                         |
| Version    | 1.0                              |
| Date       | 2026-08-03                       |
| Depends On | ADR-001, CNT-001 through CNT-004 |

## Decision

Experiments and research notes will be stored as repository-local Markdown or MDX documents with validated front matter. The content directory is the source of truth. Type-safe schemas validate metadata at build time.

A headless CMS, database and remote content API are excluded from the MVP.

## Context

The site depends on rich authored narratives, structured metadata, diagrams and occasional interactive examples. Content must be reviewable through Git, portable and available to coding agents without relying on a hosted editorial service.

Plain Markdown alone is insufficient for typed metadata and selected bespoke evidence components. A fully dynamic CMS would introduce authentication, external dependencies and data migration work with little value for a single-author site.

## Content boundaries

Front matter stores structured metadata such as:

- ID;
- slug;
- title;
- primary question;
- summary;
- state;
- dates;
- tags and technologies;
- evidence visibility;
- related content;
- accent identity;
- publication flags.

The body stores authored narrative and semantic components.

## MDX rules

MDX may be used for approved presentational components such as:

- evidence figures;
- callouts;
- architecture diagrams;
- timelines;
- code evidence;
- controlled interactive demonstrations.

MDX content may not import arbitrary application modules. The allowed component map is explicit and narrow.

## Validation

- Schemas are centralised and version-controlled.
- Invalid required metadata fails the build.
- Duplicate IDs and slugs fail the build.
- Broken internal relationships are detected where practical.
- Draft content is excluded from production output.
- Unknown state values fail visibly.

## Directory model

A likely structure is:

```text
content/
  experiments/
  notes/
  pages/
  assets/
```

Exact paths may change during scaffold work, but content must remain clearly separated from application components.

## Alternatives

### Headless CMS

Rejected for the MVP because it adds accounts, external availability, preview complexity and schema duplication. It may be reconsidered if authoring expands beyond one person.

### Database-backed content

Rejected because there is no request-time querying requirement and Git review is more valuable than dynamic storage.

### Hard-coded page components

Rejected because content changes would require implementation changes and would violate the content contracts.

### JSON-only content

Rejected because long-form narrative is cumbersome and less readable in review.

## Asset handling

- Assets live near or are clearly associated with their content.
- File names are stable and descriptive.
- Sensitive source material is never copied into the public content tree.
- Images include dimensions and alt-text metadata where the implementation benefits.
- Public content may refer to private repositories without embedding private code.

## Consequences

### Positive

- content and implementation are independently reviewable;
- Git history records editorial evolution;
- schemas create reliable page data;
- local builds contain the complete public site;
- migration remains straightforward.

### Negative

- authors need repository access;
- previews require a local or branch deployment workflow;
- MDX can become an uncontrolled programming surface without guardrails.

## Review triggers

Review this ADR if:

- multiple non-technical authors need regular access;
- content volume makes build-time processing impractical;
- scheduled publishing becomes important;
- a public API becomes a genuine product requirement.

## Acceptance criteria

- [ ] Content is stored outside page component files.
- [ ] Front matter is validated against shared schemas.
- [ ] Duplicate IDs, slugs and invalid relationships fail CI.
- [ ] Only approved MDX components are available.
- [ ] Draft and private content cannot leak into production builds.
