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

### Resolution — 2026-08-03

The Morris page was rewritten from the RippleAI repository (formerly RippleNet) on the same
day this verification ran. The rewrite was not a correction of details; the page described a
different system from the one in the code. Every claim in "What Morris Cannot Do" was an
intention rather than an enforced property, so the section was removed and replaced with an
account of what the system can actually reach. The proposer-and-checker framing, the
declarative facts-and-rules language and the 3D vision layer were removed because none of
them exist. The physics simulation was promoted from origin story to the centre of the page,
because in the code it is the substrate everything else runs on.

`startYear` is corrected to 2025 and `lastUpdated` set to `2025-07`. The technologies list
drops "3D Vision" and "Agents" for PyTorch, RippleLang and Local LLMs. Two diagrams were
added under `public/images/experiments/morris/`. The unit tests in `src/lib/content.test.ts`
and the Playwright test in `e2e/navigation.spec.ts` asserted the false safety claims, so both
were updated; the unit test now asserts the _absence_ of absolute containment language.

### Verification results — checked against the code, 2026-08-03

Repository `RippleAI` (README branding RippleAI; `ripple_cpu.py` still says RippleNet).
177 commits, first `da828e2` 2025-05-26 "inital commit, buggy but works", last work
2025-07-18 on `origin/dvelopment`. Verdicts per row above:

| Claim                                                                   | Verdict                        | Evidence in the code                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grew out of physics simulation work                                     | **Confirmed, and understated** | `ripple_physics_engine.py` is a PyTorch phase-field simulation and `ripple_orchestrator.py` steps it alongside everything else. It is not the origin, it is the live substrate. The second commit is "is now working with the right math".                                                  |
| First version was a model proposing and a simulation checking           | Not supported                  | Nothing in the history shows a propose-and-check loop. The physics came first and the language model arrived last, wired only to translate natural language into macros.                                                                                                                    |
| Small declarative language for facts, rules and goals                   | **False**                      | RippleLang is imperative: `macro`, `seed`, `wait`, `if_gt`, `jump`, `label`, `return`, `call`, `action`, `plugin` (`shared/ripplelang/parser/enhanced_parser.py`, sample `basic.rl`). No facts, no goals, no unification. The rule system lives in Python (`symbolic_ai/symbolic_kb.py`).   |
| Command-line environment is what I actually use                         | Misleading                     | `shared/ripplelang/tools/repl.py` is a minimal read-parse-run loop. The real surfaces are ~17 FastAPI services under Docker, a React/Monaco IDE, a WebSocket gateway and a Windows voice client with a wake word.                                                                           |
| Evaluator produces inspectable derivations                              | Overstated                     | `SymbolicKB.infer()` fires a rule when all antecedents are in the active set. The VM keeps an instruction trace. Neither is a derivation tree, and there is no proof object.                                                                                                                |
| Model-assisted translation into the language                            | **Confirmed**                  | `macro-management-service/.../natural_language_to_ripplelang.py` and `shared/ripplelang/integration/llm_macro_proxy.py`. Provider is a locally hosted model by default; hosted providers are commented out.                                                                                 |
| Narrow agents with a fixed, externally declared tool set                | **False**                      | There is one agent (`morris/`). `plugin_system.py` `_discover_plugins()` globs `plugins/*.py` and imports whatever is on disk at start-up, so the capability list is the directory contents.                                                                                                |
| 3D vision feeding structured facts into the symbolic layer              | **False**                      | No vision code of any kind. No OpenCV, no torchvision, no depth or point-cloud handling. The perception that does exist is audio: speech synthesis and a wake word in the desktop client.                                                                                                   |
| No mechanism to add tools or discover capability at runtime             | **False**                      | See plugin discovery above. Safety claim, and the most serious error on the page.                                                                                                                                                                                                           |
| Self-modification removed, not restricted                               | Partly true, wrong subject     | Two real things: a `MODIFY` opcode in `ripple_cpu.py` writes a new instruction into instruction memory mid-run (`tests/test_cpu_self_modification.py`), and `symbolic_self_modification.py` pruned rules below a success cutoff. Neither patched source files. The rule pruner is orphaned. |
| No general network access, no ambient credentials, no filesystem access | **False**                      | `plugins/system_control_plugin.py` launches applications including a shell via `subprocess.Popen(..., shell=True)`; `file_manager_plugin.py` reads and writes files; `github_plugin.py` and `weather_plugin.py` make outbound calls. `security.sandbox_mode` defaults to `False`.           |
| No persistent memory or state across sessions                           | **False**                      | `morris/morris_memory.py` is a SQLite store of interactions, user preferences and learned patterns, loaded on start-up. `morris_selfopt.py` rewrites macros via the model and persists them. PostgreSQL and Redis throughout.                                                               |
| Self-applied changes drifted until behaviour was unattributable         | Cannot verify from code        | Plausible given the rule pruner, but no trace of the episode. The verifiable analogue is that several integration points fall back to mock components on import failure and log only at debug level, so a run can silently not be running what you think.                                   |
| Not evaluated against a simpler baseline                                | **Confirmed**                  | ~103 test files and `pytest-benchmark`, but no comparison against a plain rule engine or any external system. The central question is genuinely unanswered.                                                                                                                                 |
| Repository private partly as a safety decision                          | Reason cannot be verified      | Private confirmed. The defensible reason found in the repo is different: its own README carries pattern counts, pass rates and latency figures that are not reproducible from the code.                                                                                                     |
| `startYear: 2023`                                                       | **False**                      | First commit 2025-05-26. Ten weeks of work, ending 2025-07-18.                                                                                                                                                                                                                              |

**Omissions the checklist did not anticipate:** the simulated CPU whose registers are regions
of the phase field, which is the most original thing in the project and was absent from the
page; the seeding path that writes symbolic conclusions back into the field as a phase shift;
the ~17-service Docker composition with PostgreSQL, Redis and a message queue for a
single-user research system; the React/Monaco RippleLang IDE; and the Windows voice client.

**The finding that mattered most:** symbols are produced by hand-chosen thresholds on field
statistics (`symbolic_kb.py`, `extract_symbols_from_simulation`). The vocabulary the symbolic
layer reasons in was installed rather than discovered, which undercuts any claim about
emergent structure. The rewritten page leads its failure section with this.

## Acceptance criteria

- [x] Every row above is confirmed, reworded or deleted.
- [x] No safety claim in the Morris page remains that is an intention rather than an enforced property.
- [x] No superlative or measurement survives that I cannot support.
- [x] `lastUpdated` is set on Chronos, or deliberately left unset.
- [ ] The Morris index order is decided against the approved launch copy.

## Related documents

- EXP-002 — `EXP-002-CHRONOS.md`
- EXP-003 — `EXP-003-MORRIS.md`
- Experiment schema — `../content/CNT-001-EXPERIMENT-SCHEMA.md`
- Writing rules — `../foundations/WRITING-RULES.md`
