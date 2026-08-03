# UX-005: Global Navigation and Footer

| Field | Value |
|---|---|
| **Status** | Draft |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | SITE-MAP, UX-RULES, DESIGN-RULES |

## Purpose

Global navigation should make the site immediately understandable and preserve normal web behaviour. It must not ask readers to learn a bespoke interface before they can access the work.

## Primary Navigation

Initial top-level items:

- Experiments;
- About;
- Notes, only when enough useful notes exist;
- Contact or a clearly labelled contact action.

The Project Curiosity wordmark links to the homepage.

## Naming Rules

- Prefer familiar labels in primary navigation.
- Distinctive terms such as `Things I Wondered About` belong in page headings and supporting copy.
- Do not use ambiguous icons without text for primary destinations.
- Do not add a top-level item merely because a folder exists in the repository.

## Desktop Behaviour

- Navigation remains compact and visually subordinate to page content.
- A sticky header is optional, but must not occupy excessive vertical space.
- The active section may be indicated with text styling, not colour alone.
- Dropdowns are unnecessary for the MVP.

## Mobile Behaviour

- Use a normal menu control with an accessible name and state.
- The menu works by keyboard, touch and assistive technology.
- Opening the menu manages focus sensibly; closing it returns focus to the trigger.
- Links remain large enough to select comfortably.
- The menu must not trap scrolling or leave the page in a broken state after resizing.

## Footer

The footer should contain:

- a short first-person or project statement;
- links to experiments, About and contact;
- relevant public profiles;
- copyright or licensing information where needed;
- repository link if useful;
- no oversized sitemap repeated across every page.

A small, natural piece of humour is acceptable. The footer must not become a dumping ground for unfinished ideas.

## External Links

- External destinations are labelled clearly when context is not obvious.
- Opening in a new tab should be exceptional, not the default.
- Public repository and profile links must use meaningful accessible names.

## Accessibility

- Include a skip link to main content.
- Use semantic `nav` landmarks with distinct labels where more than one exists.
- Current-page state uses `aria-current` where appropriate.
- Focus indicators remain visible.
- The menu does not depend on hover.

## Acceptance Criteria

- [ ] Every primary destination is reachable in one navigation interaction.
- [ ] Labels remain familiar and unambiguous.
- [ ] Mobile navigation is keyboard and screen-reader usable.
- [ ] The wordmark returns to the homepage.
- [ ] A skip link is present.
- [ ] The footer provides contact and relevant external routes without clutter.
