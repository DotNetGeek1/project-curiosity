# TECH-002: Quality Strategy

| Field      | Value                                               |
| ---------- | --------------------------------------------------- |
| Status     | Accepted                                            |
| Version    | 1.0                                                 |
| Depends On | TECHNICAL-RULES, UX specifications, content schemas |

## Purpose

This document defines the checks required to keep the site reliable, accessible and honest as content and interaction grow.

## Quality priorities

1. Content validity.
2. Accessibility.
3. Correct navigation and relationships.
4. Responsive rendering.
5. Performance.
6. Visual consistency.
7. Behaviour of bounded interactions.

## Static checks

CI should run:

- TypeScript strict checking;
- linting;
- formatting verification;
- content-schema validation;
- duplicate ID and slug detection;
- internal-link validation where practical;
- production build;
- dependency and secret scanning appropriate to a public repository.

## Unit tests

Unit tests focus on deterministic logic:

- content parsing and validation;
- relationship resolution;
- sorting and filtering;
- date and state formatting;
- metadata generation;
- visibility rules;
- utility functions with meaningful branching.

Do not chase arbitrary coverage percentages.

## Component and integration tests

Test components whose behaviour can fail in consequential ways:

- navigation menu;
- disclosures;
- table of contents;
- evidence and visibility labels;
- code-copy controls;
- error and not-found states;
- content rendering for representative MDX constructs.

Tests should assert user-observable behaviour rather than implementation details.

## Accessibility testing

Use a layered approach:

- semantic component design;
- automated accessibility checks;
- keyboard walkthroughs;
- screen-reader spot checks;
- zoom and reflow checks;
- reduced-motion verification;
- contrast review.

Automated tools do not replace manual testing.

## Browser and viewport coverage

The site should be checked in current evergreen browsers and Safari. Representative viewport tests include narrow mobile, tablet/small laptop and desktop.

Do not build browser-specific experiences unless a real compatibility issue requires it.

## Visual regression

Visual regression is valuable for:

- typography changes;
- token updates;
- experiment cards;
- long-form content;
- responsive navigation;
- evidence layouts;
- representative diagram pages.

Baseline updates require review and must not be accepted automatically.

## Performance checks

Track:

- initial JavaScript;
- largest content element;
- layout shift;
- image sizes;
- font loading;
- route-level bundle changes.

Budgets should begin modestly and tighten after the scaffold establishes realistic baselines.

## Content fixtures

Maintain representative fixtures for:

- a fully populated experiment;
- an experiment with only required fields;
- long titles and questions;
- multiple evidence types;
- private repository visibility;
- a research note;
- draft content excluded from production.

## Release gate

A change is ready when:

- static checks pass;
- required tests pass;
- new interactions receive keyboard review;
- content changes satisfy schemas and editorial rules;
- screenshots or visual review confirm responsive behaviour;
- no sensitive content is exposed.

## Acceptance criteria

- [ ] CI validates code and content.
- [ ] Accessibility testing includes manual checks.
- [ ] Important user behaviour has integration coverage.
- [ ] Representative visual states are regression-tested.
- [ ] Quality gates focus on risk rather than vanity coverage.
