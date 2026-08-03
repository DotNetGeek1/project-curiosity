# IMP-009: Build Backlog

| Field | Value |
|---|---|
| **Document ID** | IMP-009 |
| **Status** | Active |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Source** | Current scaffold, accepted documentation and first vertical slice |

## Purpose

This is the implementation backlog for the working site. It is intentionally derived from the repository that now exists, not from hypothetical future features.

Items should be removed when complete, split when they become too large, and challenged when they no longer contribute to the first release.

## Priority 0 — Protect the Baseline

### Confirm CI and deployment

- verify the quality, build and end-to-end jobs pass on `main`;
- confirm Azure Static Web Apps production deployment is healthy;
- confirm pull-request preview teardown works;
- document any required repository secrets without exposing values.

### Reconcile current documentation paths

The scaffold references older paths such as `docs/02-project--spec/...` in agent and PR guidance. Replace or map these references to the accepted documentation structure so contributors and agents are not sent to stale files.

### Remove third-person identity from agent rules

The current agent rules include wording such as "how does Alex think?". Replace this with first-person or product-centred language consistent with the accepted writing rules.

## Priority 1 — Complete the First Reader Journey

### Wire approved launch copy

- homepage;
- About page;
- experiment index;
- navigation and footer;
- metadata and social descriptions.

### Complete DeliveryIQ content

- gather verified facts;
- write the full narrative;
- add at least two evidence artefacts;
- perform confidentiality review;
- set honest state and visibility metadata.

### Validate the experiment schema

Compare implemented status values and frontmatter fields with the accepted content contracts. Decide whether to update the schema or documentation where terms differ.

### Finish primary routes

- homepage;
- `/experiments`;
- `/experiments/deliveryiq`;
- `/about`;
- research-note index or intentional placeholder.

## Priority 2 — Reconcile Design and Components

### Inventory existing components

Map current layout, UI and MDX components to DSN-005. Mark each as aligned, missing, premature or duplicated.

### Check token usage

- remove raw colours where semantic tokens exist;
- confirm warm paper and charcoal contrast;
- check spacing and typography against DSN-002 through DSN-004;
- ensure project accents do not overpower the shared system.

### Motion review

- identify all client components;
- confirm motion has a reader benefit;
- respect `prefers-reduced-motion`;
- remove decorative animation that does not explain state or hierarchy.

## Priority 3 — Accessibility and Quality

### Accessibility pass

- landmarks and heading hierarchy;
- skip link;
- visible focus;
- keyboard reachability;
- link purpose;
- image alternatives;
- code-block readability;
- reduced motion;
- mobile text size and target size.

### Test the vertical slice

Add or verify tests for:

- homepage renders the approved headline;
- featured experiment links work;
- experiment index lists all public experiments;
- DeliveryIQ route renders required sections;
- navigation works at mobile and desktop sizes;
- static 404 works;
- metadata is present.

### Performance pass

- inspect client JavaScript boundaries;
- check font loading;
- optimise images and SVGs;
- remove unused dependencies;
- confirm static pages remain fast on a modest mobile connection.

## Priority 4 — Content Breadth

After the first vertical slice is complete:

1. complete Chronos;
2. complete Morris with careful claim boundaries;
3. expand SafeNet;
4. expand Token Burn;
5. publish the first useful research note.

Do not complete all pages superficially before one page is genuinely strong.

## Deferred

The following remain outside the first-release backlog:

- AI companion;
- repository indexing;
- semantic or vector search;
- graph visualisation;
- comments or accounts;
- custom CMS;
- complex Three.js navigation;
- live data integrations;
- automated project-status inference;
- anything that gives Morris write access to the deployment pipeline.

## Backlog Item Template

```text
Title:
Priority:
Problem:
Evidence:
Expected outcome:
Relevant documents:
Acceptance criteria:
Out of scope:
```

## Exit Criteria

This backlog has served its purpose when:

- [ ] Priority 0 items are complete;
- [ ] the first vertical slice meets IMP-008;
- [ ] remaining work is based on observed user or implementation needs;
- [ ] deferred ideas have not leaked into MVP scope;
- [ ] the site is credible enough to use in real applications.

## Related Documents

- `docs/IMPLEMENTATION-MANIFEST.md`
- `docs/implementation/IMP-007-IMPLEMENTATION-RECONCILIATION.md`
- `docs/implementation/IMP-008-FIRST-VERTICAL-SLICE.md`
- `docs/implementation/IMP-006-FIRST-RELEASE-CHECKLIST.md`
