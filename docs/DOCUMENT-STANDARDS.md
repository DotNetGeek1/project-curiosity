# Documentation Standards

| Field           | Value                       |
| --------------- | --------------------------- |
| **Document ID** | STD-001                     |
| **Status**      | Accepted                    |
| **Version**     | 1.0                         |
| **Owner**       | I / repository maintainer   |
| **Applies to**  | All documents under `docs/` |

## Purpose

I am treating the documentation as part of the product. These standards keep the repository coherent when documents are written by me, drafted with AI, or implemented by coding agents.

## Required document header

Every substantial specification, principle, ADR or RFC must begin with a metadata table containing:

- Document ID
- Title
- Status
- Version
- Owner
- Last reviewed date
- Related documents

Short README files may use a reduced header.

## Document IDs

Use stable prefixes:

- `ADR` — accepted architectural or product decisions
- `RFC` — proposals under discussion
- `STD` — repository or documentation standards
- `PHL` — project philosophy
- `PRN` — guiding principles
- `PRD` — product definition
- `UX` — user-experience specifications
- `DSN` — visual and design-system specifications
- `TECH` — technical specifications
- `CNT` — content specifications
- `EXP` — individual experiment specifications
- `AI` — AI and Morris-related specifications

IDs must not be reused after a document is removed or superseded.

## Status values

Use one of:

- Draft
- Proposed
- Accepted
- Implemented
- Superseded
- Rejected
- Archived

A document may be implemented while remaining accepted. `Implemented` is useful where completion itself matters.

## Required structure

A substantial document should include, where relevant:

1. Purpose
2. Context
3. Goals
4. Non-goals
5. Rules or decisions
6. Examples
7. Risks and trade-offs
8. Acceptance criteria
9. Open questions
10. Related documents

Do not add empty sections merely to satisfy the template.

## Writing perspective

Write in the first person where the document describes my beliefs, preferences, decisions or work.

Use:

> I prefer clear navigation over clever navigation.

Do not use:

> Alex prefers clear navigation over clever navigation.

Repository-wide rules may use direct imperative language.

## Writing quality

- Write like an engineer, not a marketer.
- Explain why before how.
- Use plain English where it is more precise.
- Preserve necessary technical language.
- Avoid inflated claims.
- State uncertainty honestly.
- Do not invent evidence.
- Never write anything I could not honestly defend in an interview.

## Cross-references

Reference documents by ID and relative path when possible.

Example:

> This follows ADR-001 (`../adr/ADR-001-Engineering-Notebook.md`).

Links must remain valid after rendering on GitHub.

## Acceptance criteria

Acceptance criteria must describe observable outcomes. Avoid vague statements such as "looks good" or "works well".

Preferred:

- [ ] The page remains usable with JavaScript disabled.
- [ ] Every experiment has a question, state and last-investigated date.

## Diagrams

Use Mermaid for conceptual diagrams when GitHub rendering is sufficient. Use accessible SVG specifications for diagrams intended for the public site.

Diagrams must have surrounding text explaining what they show. A diagram must not be the only representation of critical information.

## AI-authored content

AI may draft documents, but the final wording must be reviewed as if I wrote it myself.

An AI agent must not:

- invent project history;
- turn hypotheses into outcomes;
- imply production maturity without evidence;
- write about me in the third person;
- add generic corporate language;
- create new product decisions without identifying them as proposals.

## Versioning

Increase the version when meaning changes:

- patch-level wording corrections need not change the document version;
- minor structural or rule additions increment the minor version;
- a materially changed decision increments the major version or produces a superseding document.

Git remains the authoritative history.

## Review cadence

Review documents when:

- implementation exposes ambiguity;
- a related ADR changes;
- user feedback contradicts assumptions;
- the site changes audience or purpose;
- six months have passed for active foundational documents.

## Acceptance criteria

- [ ] New substantial documents use a stable ID.
- [ ] Personal statements use first person.
- [ ] Decisions are distinguishable from proposals.
- [ ] Acceptance criteria are observable.
- [ ] Cross-references use IDs and valid paths.
- [ ] AI-generated drafts receive human review.

## Related documents

- ADR-001 — `adr/ADR-001-Engineering-Notebook.md`
- Writing Rules — `foundations/WRITING-RULES.md`
- Technical Rules — `foundations/TECHNICAL-RULES.md`
