# IMP-008: First Vertical Slice

| Field | Value |
|---|---|
| **Document ID** | IMP-008 |
| **Status** | Accepted |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | UX-001, UX-002, UX-003, IMP-007 |

## Objective

Complete one end-to-end reader journey through the working site before expanding breadth.

The slice begins on the homepage, moves through the experiment index and ends on one complete experiment story with verified evidence.

## Chosen Experiment

**DeliveryIQ** is the preferred first complete experiment because it most directly demonstrates:

- product thinking;
- autonomous technical discovery;
- applied AI and agent architecture;
- developer tooling;
- practical engineering leverage;
- current relevance to senior product-engineering roles.

Chronos is the fallback if DeliveryIQ evidence is not ready for public use.

## Required Journey

```text
Homepage
  -> Featured experiment card
  -> Experiment index
  -> DeliveryIQ experiment page
  -> Evidence or architecture section
  -> About page or contact route
```

A reader must be able to enter at any page and still understand where they are, what the experiment asks and how to continue.

## Scope

### Homepage

- approved first-person hero copy;
- concise explanation of the engineering notebook;
- three featured experiments;
- current-obsessions section;
- clear routes to experiments and About;
- no placeholder claims presented as final.

### Experiment index

- all five experiments represented;
- questions visible before technology labels;
- honest status and summary metadata;
- keyboard-accessible cards and links;
- useful empty or unavailable states where evidence is incomplete.

### DeliveryIQ page

Required sections:

1. question;
2. why I cared;
3. problem and constraints;
4. initial hypothesis;
5. what I built;
6. architecture or system view;
7. difficult or interesting decisions;
8. what failed or changed;
9. what I learned;
10. current state and next step;
11. evidence and repository visibility.

### About page

- first-person career narrative;
- hands-on engineering emphasis;
- curiosity and physics context;
- no generic skill inventory;
- credible contact path.

## Evidence Requirements

At least two forms of real evidence must be available for DeliveryIQ, such as:

- a redacted architecture diagram;
- a product or workflow screenshot;
- a selected source excerpt;
- an agent-flow diagram;
- a before-and-after workflow comparison;
- a technical decision record;
- a short demonstration.

Claims that cannot be evidenced must be softened, removed or explicitly labelled as hypothesis or planned work.

## Non-Scope

The first slice does not require:

- AI search;
- Morris as a site companion;
- graph navigation;
- advanced filtering;
- user accounts;
- comments;
- live repository indexing;
- custom CMS;
- elaborate page transitions;
- complete stories for all five experiments.

## Technical Completion

- all routes statically export;
- MDX schema validates at build time;
- no runtime fetch is required;
- navigation works with keyboard and without motion;
- content renders correctly at small and large viewport widths;
- automated tests cover primary navigation and the experiment route;
- metadata and social descriptions are present;
- no broken or misleading links remain.

## Editorial Completion

- first-person voice throughout;
- factual and confidentiality review complete;
- no unsupported superlatives;
- failures or changed assumptions included;
- terminology is consistent with the content schema;
- page summaries are useful without reading the full article.

## Acceptance Criteria

- [ ] a reader can complete the full journey without confusion;
- [ ] DeliveryIQ contains a complete narrative rather than a stub;
- [ ] at least two evidence artefacts are present;
- [ ] homepage and About copy are reviewed in my voice;
- [ ] all five experiment cards use honest states;
- [ ] mobile, keyboard and reduced-motion checks pass;
- [ ] CI and static export pass;
- [ ] remaining gaps are documented rather than hidden.

## Related Documents

- `docs/IMPLEMENTATION-MANIFEST.md`
- `docs/implementation/IMP-007-IMPLEMENTATION-RECONCILIATION.md`
- `docs/implementation/IMP-009-BUILD-BACKLOG.md`
- `docs/experiments/EXP-001-DELIVERYIQ.md`
