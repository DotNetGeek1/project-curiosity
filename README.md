# DotNetGeek Portfolio

## Vision

This is not a traditional developer portfolio.

It is an engineering notebook documenting projects that began with curiosity and evolved through experimentation.

The goal is to demonstrate _how I think_, not just what I know.

### Core principles

- Story before technology.
- Show the question before the solution.
- Explain the trade-offs.
- Celebrate failed experiments as learning.
- Make visitors feel like they're stepping into an engineer's workshop.

## Stack

| Concern   | Choice                                                         |
| --------- | -------------------------------------------------------------- |
| Framework | Next.js 16 (App Router), static export                         |
| Language  | TypeScript, strict                                             |
| Styling   | Tailwind CSS v4 with design tokens in `src/styles/globals.css` |
| Content   | MDX validated by Zod via Content Collections                   |
| Motion    | Motion (Framer Motion), used sparingly                         |
| Testing   | Vitest + Testing Library, Playwright for end-to-end            |
| Hosting   | Azure Static Web Apps                                          |

The site is fully pre-rendered: `next build` emits static HTML into `out/`. There is no
server runtime, so route handlers, server actions and runtime data fetching are off limits.

## Getting started

Requires Node 22 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev
```

The dev server runs at http://localhost:3000. Content Collections watches `content/` and
regenerates types on change.

## Scripts

| Script               | Purpose                                  |
| -------------------- | ---------------------------------------- |
| `pnpm dev`           | Development server                       |
| `pnpm build`         | Static export into `out/`                |
| `pnpm start`         | Serve the built `out/` directory locally |
| `pnpm content:build` | Regenerate content collection types      |
| `pnpm lint`          | ESLint, zero warnings tolerated          |
| `pnpm format`        | Prettier write                           |
| `pnpm typecheck`     | `tsc --noEmit`                           |
| `pnpm test`          | Unit and component tests                 |
| `pnpm test:coverage` | Unit tests with coverage                 |
| `pnpm test:e2e`      | Playwright, run `pnpm build` first       |

## Repository layout

```
content/            MDX source for experiments and research notes
docs/               Product, design and content specifications
e2e/                Playwright end-to-end tests
public/             Static assets, plus staticwebapp.config.json for Azure
src/app/            App Router routes
src/components/     layout/, ui/ and mdx/ components
src/lib/            Content queries, site config, helpers
src/styles/         Global stylesheet and design tokens
```

## Adding an experiment

Create `content/experiments/<slug>.mdx`. The frontmatter schema is defined in
`content-collections.ts` and validated at build time, so a missing or malformed field fails
the build rather than rendering blank.

```mdx
---
title: Example
question: I wondered if...
summary: One or two sentences describing what this is.
status: exploring # exploring | prototype | growing | shipped | paused | dormant | abandoned | escaped-containment
technologies:
  - .NET 8
startYear: 2025
featured: false
order: 6
---
```

Follow the section structure in `docs/content/CNT-001-EXPERIMENT-SCHEMA.md` and the tone
in `docs/foundations/WRITING-RULES.md`. Every write-up needs a section on what
went wrong.

## Conventions

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/); commitlint
  enforces this on commit, and allowed scopes are listed in `commitlint.config.mjs`.
- Husky runs lint-staged before each commit and typecheck plus unit tests before each push.
- Design and content rules live in `docs/` and are mirrored for the editor in
  `.cursor/rules/`.

## Deployment

Pushes to `main` build and deploy to Azure Static Web Apps via
`.github/workflows/deploy.yml`. Pull requests get a preview environment, which is torn down
when the pull request closes.

Azure routing, headers and the 404 fallback are configured in
`public/staticwebapp.config.json`, which Next copies into `out/` at build time.

### One-time setup

1. Create an Azure Static Web App resource with the deployment source set to "Other" so
   Azure does not generate its own workflow.
2. Copy the deployment token into the GitHub repository secret
   `AZURE_STATIC_WEB_APPS_API_TOKEN`.
