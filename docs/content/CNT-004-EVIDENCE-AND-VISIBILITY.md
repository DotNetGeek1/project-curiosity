# CNT-004: Evidence and Repository Visibility

| Field | Value |
|---|---|
| **Status** | Draft |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |
| **Depends On** | ADR-001, CONTENT-STRATEGY, TECHNICAL-RULES |

## Purpose

Define how evidence is represented and how public pages describe repository access without exposing private source, credentials, employer material or misleading claims.

## Evidence Types

Initial supported evidence types:

- `repository`
- `demo`
- `architecture`
- `decision-record`
- `code-excerpt`
- `benchmark`
- `screenshot`
- `test-result`
- `research-note`
- `walkthrough`

Each evidence item should have a stable identifier when reused or referenced independently.

## Evidence Record

```yaml
id: EVD-001
type: architecture
label: DeliveryIQ system overview
summary: A diagram showing the main workflow, agent boundaries and data stores.
href: /experiments/deliveryiq#architecture
visibility: public
```

Optional fields:

```yaml
sourceDate: 2026-07-14
method: Measured against three representative workloads.
limitations: Results are from a prototype environment, not production traffic.
relatedExperiment: EXP-001
```

## Visibility States

### `public`

The evidence and any linked source are publicly accessible.

### `public-story-private-source`

The project story, diagrams and selected evidence are public, but the full repository is private.

### `selected-public-source`

Only approved excerpts or extracted examples are public.

### `walkthrough-available`

No public repository is provided, but a guided technical walkthrough may be offered where appropriate.

### `restricted`

The evidence cannot be shared because of confidentiality, security, ownership or licensing constraints.

### `not-applicable`

There is no useful source repository or evidence link, for example where the work is conceptual or the implementation no longer exists.

## Public Wording

Preferred wording:

- `Public repository`
- `Selected source is available publicly`
- `Private repository — technical walkthrough available on request`
- `Source cannot be shared because it contains employer or customer material`
- `No repository is available; the architecture and lessons are documented here`

Avoid wording that implies unrestricted private access or treats confidentiality as an inconvenience to bypass.

## Evidence Quality

Evidence must be proportionate to the claim it supports.

Examples:

- a screenshot supports the existence of an interface, not its usability;
- a code excerpt supports an implementation pattern, not production reliability;
- a benchmark supports only the tested workload and method;
- a diagram supports an architecture explanation, not proof that every component was implemented;
- a public repository supports inspection of the visible code, not claims about private deployments.

## Measurement Labelling

Quantitative evidence must state whether it is:

- measured;
- estimated;
- illustrative;
- simulated;
- externally reported.

Where possible, provide method, environment, date and limitations.

## Confidentiality Review

Before publication, evidence must be checked for:

- credentials, tokens and connection strings;
- customer, colleague or employer personal data;
- proprietary source or documentation;
- internal URLs, hostnames and account IDs;
- unreleased product information;
- security-sensitive architecture detail;
- third-party assets without suitable rights;
- metadata embedded in images or files.

Redaction must not leave enough surrounding detail to reconstruct sensitive information.

## Code Excerpts

Public excerpts should be:

- small enough to understand in context;
- representative rather than selectively perfect;
- licensed or owned appropriately;
- free from secrets and private identifiers;
- accompanied by an explanation of what the excerpt demonstrates.

Do not publish employer source merely because I authored it.

## Private Walkthroughs

A walkthrough may include:

- architecture explanation;
- screen sharing of a private development environment;
- selected source discussion;
- demonstration of a running prototype.

It must not include material I do not have the right to disclose. Access should be deliberate and revocable rather than a permanent public token or shared credential.

## Broken Evidence

The build should validate internal evidence links. External links should be checked periodically where practical.

When evidence disappears:

- update the record;
- preserve a description of what it previously demonstrated when honest and useful;
- do not leave a broken link as the sole support for a significant claim.

## Acceptance Criteria

- [ ] Every evidence item has a clear type and visibility state.
- [ ] Quantitative claims identify the nature of the measurement.
- [ ] Private repository wording does not imply uncontrolled access.
- [ ] Public code is reviewed for rights, secrets and identifiers.
- [ ] Evidence limitations are shown near the supported claim.
- [ ] Restricted evidence has an honest explanation where appropriate.
