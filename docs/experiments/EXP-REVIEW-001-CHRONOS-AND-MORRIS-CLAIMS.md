# EXP-REVIEW-001: Claims To Verify In The Chronos And Morris Write-Ups

| Field             | Value                                                |
| ----------------- | ---------------------------------------------------- |
| **Document ID**   | EXP-REVIEW-001                                       |
| **Title**         | Claims To Verify In The Chronos And Morris Write-Ups |
| **Status**        | Draft                                                |
| **Version**       | 1.0                                                  |
| **Owner**         | I own this document                                  |
| **Last Reviewed** | 2026-08-03                                           |
| **Related**       | EXP-002, EXP-003, CNT-001, WRITING-RULES             |

## Purpose

The Chronos and Morris pages were drafted from the briefs in EXP-002 and EXP-003 rather than
from the code, because the code is private and the detail lives in my head. The writing rules
forbid inventing outcomes, metrics, dates or failures, so this document lists every claim on
those two pages that I need to confirm, correct or delete before I treat them as published.

Nothing on either page states a measurement, a dataset size or a public availability claim.
The drafting deliberately stayed general wherever the briefs flagged a claim as requiring
verification. What remains to check is whether the general statements are the right general
statements.

The notes are kept here rather than as comments inside the MDX because Prettier's Markdown
formatter rewrites the asterisks in a JSX comment and breaks the build.

## How to use this

Work through each row. Confirm it, reword it, or delete the sentence. A sentence I cannot
defend in an interview should not survive this pass.

## Chronos — `content/experiments/chronos.mdx`

| Section         | Claim as drafted                                                                                           | What to check                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| The Question    | The project started with my wife wanting to see what was happening in different places at the same moment. | EXP-002 supports this. Confirm the wording is how I would describe the request.                                      |
| The Approach    | I modelled a single century in one region by hand before building anything.                                | EXP-002 says "early modelling experiments around events, entities, dates and uncertainty". Confirm the actual scope. |
| Architecture    | Neo4j holds the graph; a .NET service owns ingestion, entity resolution and the read API.                  | Inferred from the declared technologies. Confirm the service boundaries.                                             |
| Architecture    | PostgreSQL holds import batches, source metadata, provenance and the flat lookups behind search.           | Confirm what PostgreSQL is actually for. This is the least certain claim on the page.                                |
| Architecture    | The mobile application talks only to the .NET API, never to the graph directly.                            | Confirm. If the app ever touches the graph directly, the sentence has to go.                                         |
| Architecture    | Time is carried on relationships rather than on nodes.                                                     | Confirm. This is presented as the central modelling decision, so it needs to be true.                                |
| Architecture    | Every temporal value carries a precision and a confidence.                                                 | Confirm both are stored, not just precision.                                                                         |
| Architecture    | Facts are attached to the source asserting them, and contradictory claims are both retained.               | Confirm the graph really stores both sides of a contradiction.                                                       |
| Trade-offs      | Both stores are still in use.                                                                              | Confirm PostgreSQL and Neo4j both remain, rather than one having been retired.                                       |
| What Went Wrong | The first model stored dates as plain timestamps and discarded conflicting sources.                        | EXP-002 supports the difficulty. Confirm this specific early design.                                                 |
| What Went Wrong | The temporal rework was the largest rewrite in the project.                                                | A superlative. Confirm or soften to "a substantial rewrite".                                                         |
| What Went Wrong | Entity resolution by name and approximate date merged distinct people and split single people.             | Confirm this happened and that resolution is now review-gated.                                                       |
| Lessons         | The hand-modelled century is still the best thing I did on the project.                                    | A judgement, so it only needs to be one I hold. Delete if it is not.                                                 |
| Current State   | Ingestion runs and the mobile application supports the intended exploration pattern.                       | Confirm the current state honestly. "Growing" is the declared status, so partial is fine — say so if it is partial.  |
| Current State   | The repository is private mainly because source licensing and attribution need review.                     | EXP-002 flags licensing as the confidentiality risk. Confirm this is still outstanding.                              |

**Deliberately absent, and should stay absent unless verified:** graph or dataset size, the
accuracy of imported historical data, any claim of uniqueness, user feedback beyond the
original request, and any suggestion that the application is publicly available.

**Frontmatter:** `lastUpdated` is not set, because I do not know when Chronos was last
genuinely worked on and the field renders as "Last investigated". Add it once you know.

## Morris — `content/experiments/morris.mdx`

Every claim in the "What Morris Cannot Do" section is a safety claim. If any of them is an
intention rather than an enforced property, it must be reworded as an intention or removed.
An overstated safety claim is worse than no safety claim.

| Section              | Claim as drafted                                                                                                                                                 | What to check                                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Question         | Morris grew out of physics simulation work.                                                                                                                      | EXP-003 supports this. Confirm the framing.                                                                                                                                                    |
| The Approach         | The first version was a model proposing an answer and a simulation checking it.                                                                                  | Confirm, and confirm the language and command-line environment came before the agent layer.                                                                                                    |
| Callout: implemented | The language, command-line environment, evaluator with inspectable derivations, model-assisted translation, narrow agents and 3D-vision-to-facts all work today. | Confirm each item individually. This list is the page's factual backbone; anything aspirational belongs in the hypotheses paragraph.                                                           |
| Architecture         | Four layers, with models unable to write to the knowledge base and agents unable to extend their own tool list.                                                  | Confirm these boundaries are enforced in code, not merely intended.                                                                                                                            |
| Architecture         | Perception is the least developed layer.                                                                                                                         | Confirm.                                                                                                                                                                                       |
| Cannot do            | No mechanism exists for an agent to add tools, request elevation or discover capabilities at runtime.                                                            | Confirm. Safety claim.                                                                                                                                                                         |
| Cannot do            | Self-modification was removed, not restricted, and code generation now produces artefacts I apply by hand.                                                       | Confirm. Safety claim, and EXP-003 lists self-source modification as requiring verification.                                                                                                   |
| Cannot do            | No general network access, no ambient credentials, no filesystem access beyond a defined working area.                                                           | Confirm. Safety claim. Do not add configuration detail when confirming it.                                                                                                                     |
| Cannot do            | No persistent memory or state across sessions, and no self-adjusting rules.                                                                                      | Confirm. Safety claim, and it is what makes the accumulated-reasoning idea speculation rather than a feature.                                                                                  |
| What Went Wrong      | Self-applied changes accumulated gradually across runs until behaviour became unattributable.                                                                    | EXP-003 supports instability and containment mattering. Confirm the drift was gradual rather than one incident.                                                                                |
| What Went Wrong      | The development environment "came off badly, more than once".                                                                                                    | EXP-003 lists the number and nature of laptop failures as requiring verification. Kept vague on purpose. Do not add specifics you cannot stand behind, and do not let the joke imply autonomy. |
| Trade-offs           | Removing self-modification cost the most interesting demo in the project.                                                                                        | A judgement. Keep only if I agree.                                                                                                                                                             |
| Current State        | Not evaluated against a simpler baseline, so the hybrid claim is unsupported.                                                                                    | Confirm this is still true. If an evaluation exists, the page understates the work.                                                                                                            |
| Current State        | The repository is private partly as a safety decision.                                                                                                           | Confirm that is the actual reason.                                                                                                                                                             |

**Deliberately absent, and should stay absent:** any claim of general intelligence, autonomy
or reliability; the quality of generated applications; performance against simpler approaches;
credentials, paths or configuration; and any operational instruction that would help someone
build an unrestrained self-modifying system. A unit test in `src/lib/content.test.ts` asserts
several of these exclusions, so reintroducing them will fail the build.

**Frontmatter:** `order: 5` and `featured: false`, whereas the approved index copy in
`../content/launch/EXPERIMENT-INDEX-COPY.md` places Morris third. Left unchanged because
reordering affects the whole index, but it needs a decision.

## Acceptance criteria

- [ ] Every row above is confirmed, reworded or deleted.
- [ ] No safety claim in the Morris page remains that is an intention rather than an enforced property.
- [ ] No superlative or measurement survives that I cannot support.
- [ ] `lastUpdated` is set on Chronos, or deliberately left unset.
- [ ] The Morris index order is decided against the approved launch copy.

## Related documents

- EXP-002 — `EXP-002-CHRONOS.md`
- EXP-003 — `EXP-003-MORRIS.md`
- Experiment schema — `../content/CNT-001-EXPERIMENT-SCHEMA.md`
- Writing rules — `../foundations/WRITING-RULES.md`
