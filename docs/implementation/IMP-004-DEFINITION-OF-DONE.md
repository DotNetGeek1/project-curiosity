# IMP-004: Definition of Done

| Field            | Value               |
| ---------------- | ------------------- |
| **Document ID**  | IMP-004             |
| **Status**       | Draft               |
| **Owner**        | I own this document |
| **Last Updated** | 2026-08-03          |

## Purpose

A task is not complete merely because it renders locally. This document defines the evidence required before implementation work is considered done.

## Universal completion gates

Every change must satisfy the applicable gates below.

### Requirement fidelity

- the governing specification is identified;
- the delivered behaviour matches the specification;
- deviations are documented rather than hidden;
- obsolete behaviour and documentation are removed or updated.

### Code quality

- TypeScript passes in strict mode;
- linting and formatting pass;
- names express intent;
- boundaries defined in TECH-001 and IMP-002 remain intact;
- no unnecessary dependency or abstraction was introduced;
- error cases are explicit and useful.

### Testing

- new behaviour has proportionate automated coverage;
- content validation tests cover schema changes;
- critical navigation and rendering paths have integration coverage;
- tests assert outcomes rather than implementation trivia;
- the complete CI command set passes locally or in the PR.

### Accessibility

- semantic HTML is used;
- all functionality is keyboard accessible;
- focus remains visible;
- headings are ordered logically;
- images and diagrams have appropriate alternatives;
- colour is not the only carrier of meaning;
- reduced-motion preferences are respected;
- automated accessibility checks pass, with manual review for material interfaces.

### Responsive behaviour

- content works at narrow mobile widths, ordinary laptop sizes and wide displays;
- text does not overflow;
- touch targets remain usable;
- layout does not depend on hover;
- diagrams remain understandable or provide an alternate presentation.

### Performance

- the change does not add unjustified client JavaScript;
- media is appropriately sized and lazy-loaded where suitable;
- no layout shift is introduced by missing dimensions;
- critical content remains server-rendered;
- performance regressions are measured and explained.

### Content and evidence

- copy follows the writing rules and first-person voice;
- claims have evidence or are clearly marked as hypotheses;
- private information has been removed;
- links and relationships resolve;
- dates, states and visibility metadata are accurate;
- sample or placeholder text is not presented as final content.

### Operations

- build and deployment paths remain reproducible;
- environment changes are documented;
- no secrets are committed;
- logging does not expose sensitive information;
- rollback remains possible through version control and deployment history.

## Page-level definition of done

A new public page is done when:

- it has a unique title and description;
- primary content is meaningful without JavaScript;
- canonical URL behaviour is correct;
- social metadata has a deliberate fallback;
- empty and missing states are handled;
- keyboard and screen-reader smoke tests have been completed;
- the page has been reviewed against its UX specification.

## Content-entry definition of done

A public experiment or note is done when:

- schema validation passes;
- the question or observation is clear;
- state and visibility are honest;
- evidence has been reviewed;
- related links are intentional;
- public/private boundaries are explicit;
- the entry has been proofread in rendered form;
- the entry does not reveal employer, customer or proprietary information.

## Pull-request evidence

The PR description should contain:

- governing documents;
- concise summary;
- screenshots for visual changes;
- test commands and results;
- accessibility notes;
- performance notes where relevant;
- known limitations;
- follow-up work that is deliberately out of scope.

## Acceptance criteria

- [ ] implementation tasks have objective completion evidence;
- [ ] accessibility, performance and privacy cannot be deferred silently;
- [ ] reviewers can distinguish complete work from a visual prototype;
- [ ] public content has a separate quality gate from code compilation.
