# IMP-006: First Release Checklist

| Field            | Value               |
| ---------------- | ------------------- |
| **Document ID**  | IMP-006             |
| **Status**       | Draft               |
| **Owner**        | I own this document |
| **Last Updated** | 2026-08-03          |

## Purpose

This checklist is the final gate before the first public release. It exists to stop "nearly ready" from becoming a permanent state while still protecting quality, privacy and credibility.

## Product and scope

- [ ] the release matches `MVP-DEFINITION.md`;
- [ ] no post-MVP feature is required for ordinary navigation;
- [ ] the homepage clearly explains the engineering-notebook idea;
- [ ] at least three complete experiment stories are public;
- [ ] shorter experiment entries are labelled honestly;
- [ ] contact and repository-access paths are clear;
- [ ] known limitations are documented.

## Content

- [ ] DeliveryIQ is reviewed and publishable;
- [ ] Chronos is reviewed and publishable;
- [ ] Morris is reviewed and publishable;
- [ ] SafeNet and Token Burn do not overstate their maturity;
- [ ] About-page copy is first person and accurate;
- [ ] no placeholder text remains;
- [ ] claims have evidence or suitable qualification;
- [ ] employer, customer and private-repository details are safe to publish;
- [ ] spelling, grammar and rendered typography have been reviewed.

## Navigation and URLs

- [ ] all primary routes are reachable by keyboard;
- [ ] active navigation states are correct;
- [ ] not-found behaviour is deliberate;
- [ ] canonical URLs are correct;
- [ ] slugs are stable and lowercase;
- [ ] internal links and relationships resolve;
- [ ] external links use appropriate accessible wording.

## Accessibility

- [ ] heading structures are logical;
- [ ] landmarks are present;
- [ ] skip navigation works;
- [ ] focus is visible throughout;
- [ ] all controls have accessible names;
- [ ] images and diagrams have useful alternatives;
- [ ] colour is not the only indicator of state;
- [ ] reduced-motion preferences are respected;
- [ ] automated checks pass;
- [ ] manual keyboard and screen-reader smoke tests are complete.

## Responsive design

- [ ] homepage works at narrow mobile width;
- [ ] experiment cards remain readable without hover;
- [ ] long-form pages preserve comfortable measure;
- [ ] code blocks and diagrams do not break the viewport;
- [ ] navigation is usable with touch and zoom;
- [ ] no important information disappears at any breakpoint.

## Performance

- [ ] production build succeeds;
- [ ] route output is predominantly static or server-rendered;
- [ ] unnecessary client JavaScript has been removed;
- [ ] fonts, images and diagrams are optimised;
- [ ] layout shift is controlled;
- [ ] no decorative feature delays the primary content;
- [ ] performance results are recorded for representative pages.

## Privacy and security

- [ ] no secrets or private URLs are present in source or generated output;
- [ ] analytics complies with ADR-005;
- [ ] no cookie banner is required by an undisclosed tracker;
- [ ] security headers are configured appropriately;
- [ ] dependencies have no unresolved critical advisories;
- [ ] contact mechanisms do not expose unnecessary personal data;
- [ ] source maps and logs do not reveal sensitive information.

## Metadata and discovery

- [ ] every public page has a meaningful title and description;
- [ ] social-preview fallbacks render correctly;
- [ ] sitemap and robots behaviour are correct;
- [ ] structured metadata does not make unsupported claims;
- [ ] the root repository README points to the public site and key documentation.

## Operations

- [ ] the production domain is configured;
- [ ] HTTPS works correctly;
- [ ] deployment from `main` is reproducible;
- [ ] preview deployments are available for PRs where supported;
- [ ] rollback procedure is understood;
- [ ] custom-domain and DNS ownership are documented privately;
- [ ] error and uptime visibility are proportionate to the project.

## Release decision

The release may proceed when all blocking items are complete. Non-blocking imperfections should be recorded as issues rather than used as reasons to expand the MVP.

The final question is:

> Does this release give a truthful, useful and memorable account of how I approach engineering?

If yes, ship it.
