# Project Curiosity — Writing Rules

| Field           | Value                                             |
| --------------- | ------------------------------------------------- |
| **Document ID** | FOUNDATION-WRITING-001                            |
| **Status**      | Proposed                                          |
| **Version**     | 1.0                                               |
| **Date**        | 2026-08-03                                        |
| **Owner**       | Me                                                |
| **Extends**     | [ADR-001](../adr/ADR-001-Engineering-Notebook.md) |

## 1. Purpose

This document defines how Project Curiosity should sound.

The site must read like me explaining an interesting problem to another intelligent person: direct, curious, technically precise, honest about uncertainty and occasionally amused by the consequences of my own experiments.

The writing should never sound like a marketing department, a generated case-study template or a person trying to imitate a research paper.

## 2. Core Principle

> Explain the question, the reasoning and the learning before listing the technology.

The writing exists to reveal engineering judgement. It should show what I noticed, why it mattered, what I believed, what I tried, what changed my mind and what emerged from the work.

## 3. Voice

The voice is:

- first person where personal judgement matters;
- plain-spoken;
- technically literate;
- self-aware;
- confident without pretending certainty;
- interested in systems, constraints and consequences;
- comfortable saying “I was wrong”;
- occasionally dry or playful.

The voice is not:

- corporate;
- breathless;
- over-polished;
- falsely academic;
- self-congratulatory;
- stuffed with buzzwords;
- apologetic about ambition.

## 4. The Voice Test

Before publishing, ask:

> Would I actually say this while explaining the project to another engineer?

If the answer is no, rewrite it.

Common signs that text has failed the test:

- abstract claims with no evidence;
- language such as “leveraged”, “cutting-edge” or “best in class”;
- perfect retrospective certainty;
- polished transitions that remove all personality;
- repeated claims of passion instead of showing curiosity;
- pretending an experiment is a product launch.

## 5. Narrative Structure

A substantial experiment should usually follow this shape:

1. **I wondered if...** — the question.
2. **What prompted it** — the observation, request or frustration.
3. **Why it mattered** — the practical or intellectual value.
4. **My first hypothesis** — what I initially thought might work.
5. **The first experiment** — how the idea was tested cheaply.
6. **What emerged** — the system or prototype that developed.
7. **The difficult bits** — constraints, trade-offs and technical challenges.
8. **What failed or surprised me** — evidence of honest learning.
9. **What I know now** — the useful conclusion.
10. **Where it may go next** — realistic future possibilities.

This is not a mandatory heading list. It is the intellectual sequence the reader should be able to follow.

## 6. Start with the Trigger

Good openings are specific.

**Good:**

> My wife wanted to explore historical events without constantly jumping between disconnected articles. I started wondering whether history would make more sense as a temporal knowledge graph.

**Weak:**

> Chronos is an innovative history platform built using modern technologies.

**Good:**

> Delivery tools are mostly databases with a process bolted on top. I wondered what they would look like if AI agents were part of the model from the beginning.

**Weak:**

> DeliveryIQ leverages AI to revolutionise project management.

## 7. Show Learning Through Decisions

Do not merely state that new technology was learned. Connect it to the problem.

**Good:**

> I had not used Rust before, but SafeNet needed a small, predictable systems layer with explicit control over memory and concurrency. The project became the reason to learn it.

**Weak:**

> I learned Rust quickly and added it to my skill set.

Whenever possible, explain:

- why the technology was chosen;
- what alternatives existed;
- what it made easier;
- what it made harder;
- whether the choice still looks correct.

## 8. Evidence Before Claims

Prefer evidence:

> The prototype parsed stand-up transcripts, backlog state and sprint activity into a morning list of blocked work and follow-ups.

Over a claim:

> I am proactive and improve team productivity.

Prefer:

> I learned Terraform, Kubernetes and advanced PowerShell while replacing TeamCity with Azure-hosted build infrastructure.

Over:

> I am a fast learner.

The reader should be able to infer the quality rather than being instructed to believe it.

## 9. Write Honestly About Failure

Failure is useful when it changes understanding.

A failure section should explain:

- what was attempted;
- why it seemed reasonable;
- what evidence showed it was wrong or incomplete;
- what changed afterwards.

Avoid theatrical self-deprecation. “Morris trashed my laptop” can be funny, but it should lead to a real discussion about permissions, containment, recovery and agent safety.

Do not manufacture failure to create a tidy story. If the main challenge was slow iteration or uncertain requirements, say that.

## 10. Distinguish Maturity Clearly

Use precise language:

- **idea** — a question or concept with little evidence;
- **spike** — short investigation of a technical unknown;
- **prototype** — working evidence, not production-ready;
- **experiment** — structured attempt to learn;
- **platform** — a reusable system with meaningful scope;
- **production system** — used in real operation with support expectations.

Never call a prototype a platform merely because the codebase is large.

## 11. Technical Depth

The site should not flatten technical material for a generic audience. It should layer it.

Each experiment should provide:

- a short, understandable summary;
- the problem and outcome in ordinary language;
- deeper architecture and decision detail for technical readers;
- optional code or implementation evidence.

Expand acronyms on first use unless the immediate audience can reasonably be expected to know them.

Explain abstractions through the problem they solve.

## 12. Sentence and Paragraph Style

- Prefer active voice.
- Keep most sentences direct.
- Vary sentence length naturally.
- Use short paragraphs for online reading.
- Avoid strings of subordinate clauses.
- Use bullets for true lists, not as a substitute for prose.
- Use headings that help the reader understand the argument.
- Use em dashes sparingly.
- Use British English consistently.

Contractions are welcome where natural: “I’m”, “didn’t”, “it’s”.

## 13. Humour

Humour should feel incidental, not performed.

Appropriate:

- “Currently dangerous” as Morris's state;
- a short containment note after a serious explanation;
- “Still wondering...” in the footer;
- understated references to over-engineering.

Inappropriate:

- jokes in every heading;
- memes that date quickly;
- humour that obscures technical limitations;
- making customers, colleagues or employers the target;
- presenting unsafe behaviour as clever.

The rule is roughly 95% credibility, 5% mischief.

## 14. Words and Phrases to Avoid

Avoid unless quoting or critically discussing them:

- revolutionary;
- groundbreaking;
- cutting-edge;
- world-class;
- game-changing;
- best in class;
- disruptive;
- thought leader;
- ninja, rockstar or guru;
- leverage as a verb when “use” is clearer;
- seamless when integration had trade-offs;
- simple when the work was not simple;
- passion without evidence.

## 15. Preferred Vocabulary

Use terms that match the notebook model:

- experiment;
- observation;
- question;
- hypothesis;
- technical spike;
- prototype;
- evidence;
- decision;
- constraint;
- trade-off;
- lesson;
- iteration;
- current state;
- last investigated.

Do not force these words where ordinary language is clearer.

## 16. Project Summaries

Every experiment needs a concise summary that answers three questions:

1. What was the question?
2. What was built or tested?
3. Why is it interesting?

Target 40–80 words.

Do not compress the summary into a list of frameworks.

## 17. Metadata and Labels

Metadata should be factual and restrained.

Recommended fields:

- current state;
- started;
- last investigated;
- question;
- primary themes;
- repository visibility;
- related notes.

Technology tags should be limited to meaningful technologies, not every dependency.

## 18. About-Page Writing

“How I Ended Up Here” should tell a coherent journey:

- early career and support;
- systems and networks;
- application engineering;
- architecture and leadership;
- cloud, platform and AI;
- the continuing role of physics and curiosity.

It should not reproduce the CV line by line.

Physics should be presented as an influence on how I think about systems, interaction, emergence and constraints—not as an unrelated hobby paragraph.

## 19. Calls to Action

Calls to action should be low-pressure and specific.

Good:

- Explore the experiment.
- Read the engineering notes.
- Ask me about the code.
- Private repository access available during interview review.
- Let’s build something interesting.

Avoid:

- Hire me now.
- Book a free consultation.
- Unlock innovation.
- Get started today.

## 20. AI-Assisted Drafting Rules

AI may help structure, edit and clarify content, but it must not invent:

- outcomes;
- metrics;
- dates;
- user feedback;
- architecture decisions;
- technical failures;
- project maturity;
- reasons I did not actually have.

Generated text must pass the Voice Test and be reviewed for inflated language.

When evidence is missing, use an explicit placeholder or ask for clarification. Do not fill the gap with plausible fiction.

## 21. Editorial Checklist

Before publishing an experiment, confirm:

- [ ] The opening explains what triggered the work.
- [ ] The central question is clear.
- [ ] The reader understands why the problem mattered.
- [ ] Technology choices are connected to decisions.
- [ ] The text distinguishes experiment from production.
- [ ] At least one meaningful trade-off is explained.
- [ ] Failure or uncertainty is represented honestly where relevant.
- [ ] Claims are supported by evidence.
- [ ] The writing sounds like me.
- [ ] Marketing clichés have been removed.
- [ ] Confidential or employer-owned information is excluded.
- [ ] The summary works for a non-specialist reader.
- [ ] The deeper sections reward a technical reader.

## 22. Acceptance Criteria

- [ ] Project pages lead with questions and motivation rather than stacks.
- [ ] The site consistently uses first-person judgement where appropriate.
- [ ] Claims about curiosity, autonomy and learning are demonstrated through stories.
- [ ] Prototype maturity is described accurately.
- [ ] Technical depth is layered rather than removed.
- [ ] Humour remains restrained and credible.
- [ ] AI-generated wording is reviewed and factual.
- [ ] Content uses British English and consistent terminology.
- [ ] A reader can distinguish what happened, what was inferred and what remains speculative.

## 23. Related Documents

- [ADR-001](../adr/ADR-001-Engineering-Notebook.md)
- [DESIGN-RULES.md](DESIGN-RULES.md)
- `UX-RULES.md`
- `TECHNICAL-RULES.md`
- future experiment content schema
- future project-page specification
