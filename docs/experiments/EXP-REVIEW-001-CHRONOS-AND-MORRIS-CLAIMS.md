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

### Resolution — 2026-08-03

The Chronos page was rewritten from the code on the same day this verification ran. The
Neo4j/.NET architecture, the "both stores" trade-off, the time-on-relationships decision,
the timestamps-first failure story and the hand-modelled century were removed or replaced
with what the code actually shows. The failure section now tells the true story: the
week-one schema reset (migration 001) that promoted participants from a JSON blob to real
edges and added the claims/evidence layer, the label-only entity merge, and the
container-filesystem media loss. The AI features (generated overviews, story beats, chat)
and the museum companion are now stated as shipped rather than hypothetical. I confirmed
the project began in 2025; `startYear` is corrected and `lastUpdated` is set to `2026-07`
(last meaningful commit 2026-07-30). The table below is the evidence trail.

### Verification results — checked against the code, 2026-08-03

I reviewed the actual repository (`everything-history`, README title "Chronos (formerly
Everything History / World History Map & Timeline)"). Verdicts per row above:

| Claim                                                                 | Verdict                                   | Evidence in the code                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wife's request as the origin                                          | Cannot verify from code                   | Personal history. The repo's own pitch matches the framing: "explore what was happening anywhere in the world at the same point in time" (`world-history-project.md`).                                                                                                                                                                                |
| Hand-modelled century before building                                 | Not supported                             | The first commits (2025-12-12) scaffold the whole platform from a written spec. Nothing in the repo shows a hand-modelled starting point. Only I can say whether this happened before the repo existed.                                                                                                                                               |
| Neo4j graph + .NET service                                            | **False**                                 | There is no Neo4j and no .NET anywhere. The API is Python/FastAPI; the graph lives in PostgreSQL (`core.entity`, `core.edge`, `core.claim`, `core.evidence`). The project spec lists C#/.NET 8 only as the rejected alternative.                                                                                                                      |
| PostgreSQL holds import batches, metadata, provenance, search lookups | Misleading                                | PostgreSQL holds _everything_, including the graph itself, plus PostGIS geo data and pgvector embeddings. It is the only store apart from Redis (cache/queue).                                                                                                                                                                                        |
| Mobile app talks only to the API                                      | Confirmed (except ".NET")                 | `apps/mobile/src/lib/api.ts` — all traffic goes through the HTTP API. The API is FastAPI, not .NET.                                                                                                                                                                                                                                                   |
| Time is carried on relationships                                      | **False — inverted**                      | Time lives on event _nodes_ (`core.event.start_year/end_year` + `precision` + `confidence`). Edges carry `confidence` and `weight`; only `held_position` edges carry years, in a JSONB `meta` field.                                                                                                                                                  |
| Every temporal value has precision and confidence                     | Partly confirmed                          | Both exist as first-class enum columns (`precision`: day/month/year/decade/century/approx; `confidence`: low/medium/high) — but on events, not relationships. Wikidata ingest genuinely maps source precision through.                                                                                                                                |
| Facts attached to sources, contradictions retained                    | Partly confirmed                          | `core.claim` + `core.evidence` with proposed/accepted/rejected statuses and a curator-gated review API (`routers/claims.py`). Contradicting claims can coexist in the claims layer; the event/edge itself ends up with one accepted value. Entities, events and edges also carry `sources` JSONB.                                                     |
| Both stores still in use                                              | **False**                                 | There is one store. The "graph versus relational" trade-off as written describes a decision that was never made — the real decision was the opposite: model the graph _inside_ Postgres.                                                                                                                                                              |
| First model stored dates as timestamps                                | Not supported                             | The earliest schema in the repo (2025-12-15) already stores years as integers with precision and confidence. No timestamp-based model, and no trace of the described rewrite, exists in this repo's history.                                                                                                                                          |
| Temporal rework was the largest rewrite                               | Not supported                             | See above. There _was_ a full schema reset (migration 001, "Implement data update schema upgrades", 2025-12-22) which added the claims/evidence layer — that is the true "largest rewrite" candidate.                                                                                                                                                 |
| Entity resolution merged/split people; now review-gated               | Partly confirmed                          | Real: migration 015 and `routers/entity_maintenance.py` merge auto-created entities with Wikidata ones, and `audit.merge_log` + `jobs.curation_queue` exist. But matching is by label only (not name + date), migration 015 ran as an automated bulk merge (2026-01-04), and the admin flow is preview-then-execute rather than per-candidate review. |
| Hand-modelled century is the best thing I did                         | Cannot verify                             | Judgement, but it depends on the hand-modelled century having happened — see above.                                                                                                                                                                                                                                                                   |
| Ingestion runs; mobile supports the exploration pattern               | Confirmed, but incomplete                 | The Wikidata dump miner is real and actively developed (resume support landed in migration 024). The mobile app has Explore/Timeline/Event/Person screens — and also a large museum-companion side (exhibit scanning, plaque OCR, tours) the page never mentions.                                                                                     |
| Repository private because of licensing review                        | Private: confirmed. Reason: cannot verify | Anonymous GitHub access returns 404. Licence columns exist throughout (`raw.raw_item.license`, `core.evidence.license`), so the concern is real in the data model; the motive is mine to confirm.                                                                                                                                                     |

**Additional problems the checklist did not anticipate:**

- **Frontmatter `startYear: 2022`** — the repository history starts 2025-12-12, with active
  work in Dec 2025, Jan 2026 and Jul 2026. Unless there was an earlier incarnation outside
  this repo, the year is wrong.
- **Frontmatter technologies** list Neo4j and .NET. Both must go; FastAPI/Python, Redis and
  React (web + Expo mobile) are the honest list.
- **The AI omission.** The page treats generated narrative as a future question ("where
  should the boundary sit between the authored graph and generated assistance?"). In the
  code it is a shipped feature: events store `ai_overview` and `story_beats` columns, there
  is an AI gateway service, an AI chat screen in the mobile app, LLM-based harvest from
  Wikipedia, LLM entity-kind inference, embeddings and semantic search, and AI causality/
  force mining. Presenting this as an open question misrepresents the system.
- **The scope omission.** The write-up says "I chose depth… one region, one century". The
  code is a _global_ map-and-timeline atlas ingesting whole Wikidata dumps, with eras from
  prehistory onwards. The depth-versus-scope trade-off as written describes the opposite of
  what was built.
- **Unmentioned surfaces.** Two React web apps (public map/timeline and admin curation) and
  the museum-companion features are absent from the page, which mentions only the mobile app.

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
