# IMP-002: Repository Scaffold

| Field            | Value                      |
| ---------------- | -------------------------- |
| **Document ID**  | IMP-002                    |
| **Status**       | Draft                      |
| **Owner**        | I own this document        |
| **Last Updated** | 2026-08-03                 |
| **Depends On**   | ADR-002, ADR-003, TECH-001 |

## Purpose

This document defines the expected repository shape for the first implementation. It is a boundary map, not a demand that every folder contain code on day one.

## Target structure

```text
/
├── app/
│   ├── about/
│   ├── experiments/
│   │   └── [slug]/
│   ├── notes/
│   │   └── [slug]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── content/
│   ├── experiments/
│   ├── layout/
│   ├── notes/
│   └── ui/
├── content/
│   ├── experiments/
│   └── notes/
├── lib/
│   ├── content/
│   ├── metadata/
│   ├── relationships/
│   └── validation/
├── public/
│   ├── diagrams/
│   ├── images/
│   └── social/
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   └── utilities.css
├── tests/
│   ├── accessibility/
│   ├── content/
│   ├── integration/
│   └── unit/
├── docs/
├── .github/
│   └── workflows/
├── package.json
├── tsconfig.json
├── next.config.*
└── README.md
```

## Boundary rules

### `app/`

Owns routing, page composition, route metadata and framework-specific entry points. It must not contain content parsing or business rules.

### `components/`

Owns reusable rendering units. Components should receive validated data through typed props. A component must not read files, inspect the repository or decide publication visibility.

### `content/`

Owns authored experiment and note source files. Content is data, not application code. Embedded executable behaviour must be tightly constrained.

### `lib/content/`

Owns loading, parsing, validation, sorting and publication filtering.

### `lib/relationships/`

Owns backlinks, related items and graph-like relationships between content records. It must remain deterministic and build-time friendly.

### `styles/`

Owns semantic tokens and shared style foundations. Component styles may remain near components, but semantic values must not be duplicated as arbitrary literals.

### `tests/`

Owns automated checks grouped by intent rather than mirroring every source directory.

## Naming rules

- route segments use lowercase words;
- component filenames use PascalCase;
- utilities use descriptive lowercase or camel-case filenames consistently;
- content slugs are lowercase kebab-case;
- schema identifiers remain stable after publication;
- avoid folders named `common`, `misc`, `helpers` or `shared` unless their boundary is explicit.

## Import rules

- pages may import components and library functions;
- components may import lower-level components and pure utilities;
- content infrastructure may not import page components;
- no circular imports;
- avoid index-barrel files where they hide ownership or increase accidental coupling.

## Configuration rules

- keep configuration minimal and documented;
- use strict TypeScript;
- pin the package manager through repository metadata;
- commit the lockfile;
- do not add dependencies for trivial transformations;
- every runtime dependency must have a clear product reason.

## Acceptance criteria

- [ ] the initial scaffold follows these boundaries;
- [ ] content parsing is isolated from route components;
- [ ] semantic tokens have one authoritative definition;
- [ ] no speculative service or state layer exists;
- [ ] CI can validate the repository without production credentials;
- [ ] a new engineer or coding agent can locate routes, content, components and validation without reverse engineering the project.

## Related documents

- `docs/technical/TECH-001-APPLICATION-STRUCTURE.md`
- `docs/design/DSN-002-DESIGN-TOKENS.md`
- `docs/content/CNT-001-EXPERIMENT-SCHEMA.md`
