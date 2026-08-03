# User Personas

| Field                 | Value                     |
| --------------------- | ------------------------- |
| **Document ID**       | PRD-003                   |
| **Status**            | Accepted                  |
| **Version**           | 1.0                       |
| **Owner**             | I / repository maintainer |
| **Related documents** | PRD-002, PRD-004          |

## Persona 1: The technical founder or CTO

### Situation

They are hiring for a senior engineer who will operate with substantial autonomy and may need to cross product, architecture and implementation boundaries.

### Questions

- Can I trust him with an ambiguous problem?
- Will he make sensible trade-offs without excessive supervision?
- Does he still build?
- Can he move outside his established stack?
- Does he create useful abstractions rather than unnecessary platforms?

### What earns trust

- a clear problem statement;
- evidence of rapid technical discovery;
- honest trade-offs;
- examples of end-to-end ownership;
- production outcomes where available;
- restraint in the site's own architecture.

### What loses trust

- inflated claims;
- architecture diagrams without a user problem;
- a fragile or slow portfolio;
- leadership language unsupported by hands-on evidence;
- pretending speculative work is production-ready.

## Persona 2: The Staff or Principal engineer

### Situation

They are assessing technical depth and likely collaboration quality.

### Questions

- Are the abstractions sensible?
- What failed, and why?
- How were key decisions validated?
- Can he explain complex systems precisely?
- Would I enjoy working through a difficult problem with him?

### What earns trust

- architectural rationale;
- alternatives considered;
- failure and learning sections;
- code or diagrams used as evidence;
- clear boundaries between prototype and production.

### What loses trust

- technology lists with no context;
- diagrams used as decoration;
- unexplained complexity;
- vague claims of scale or AI capability.

## Persona 3: The engineering manager

### Situation

They need someone who can deliver and collaborate without becoming dependent on process or creating chaos around them.

### Questions

- Does he finish things?
- Can he communicate progress and risk?
- Can he improve the effectiveness of a wider team?
- Does he balance technical ambition with business priorities?

### What earns trust

- clear outcomes;
- examples of de-risking investment;
- reusable tooling and foundations;
- evidence of stakeholder collaboration;
- decisions about what not to build.

### What loses trust

- endless experimentation with no stopping criteria;
- dismissive treatment of delivery or teamwork;
- over-engineering framed as virtue by itself.

## Persona 4: The recruiter or talent partner

### Situation

They need to determine whether I match a role and give a useful summary to a hiring team.

### Questions

- What level is he operating at?
- Is he primarily a manager or an engineer?
- What are the strongest relevant examples?
- Where is he based and how can I contact him?

### What earns trust

- a concise homepage proposition;
- clear role positioning;
- skimmable experiment summaries;
- visible technologies as secondary metadata;
- direct links to CV, GitHub and contact details.

### What loses trust

- obscure navigation;
- long introductions before any evidence;
- in-jokes presented before context;
- no clear contact route.

## Persona 5: The curious engineer

### Situation

They found a project through GitHub, search or a shared link and are not necessarily hiring.

### Questions

- How does this work?
- What did he learn?
- Is there source or a demo?
- What related experiments exist?

### What earns trust

- useful diagrams;
- technical notes;
- transparent failures;
- links between related ideas;
- enough implementation detail to learn something.

### What loses trust

- marketing-led case studies;
- gated content;
- shallow technology summaries.

## Design implication

The product must provide a fast surface for Personas 1, 3 and 4, with progressively deeper evidence for Personas 2 and 5.

## Acceptance criteria

- [ ] Every core page has a clear skim path.
- [ ] Experiment pages support optional technical depth.
- [ ] Contact and role positioning are easy to find.
- [ ] Humour does not appear before enough context has established credibility.
- [ ] Product and engineering outcomes are both represented.

## Related documents

- PRD-002 — `TARGET-AUDIENCE.md`
- PRD-004 — `USER-JOURNEYS.md`
- UX Rules — `../foundations/UX-RULES.md`
