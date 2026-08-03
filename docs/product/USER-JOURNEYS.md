# User Journeys

| Field | Value |
|---|---|
| **Document ID** | PRD-004 |
| **Status** | Accepted |
| **Version** | 1.0 |
| **Owner** | I / repository maintainer |
| **Related documents** | PRD-002, PRD-003, PRD-008 |

## Journey 1: CV to interview decision

1. A hiring manager receives my CV.
2. They open the portfolio link.
3. The homepage explains the engineering-notebook idea quickly.
4. They scan featured questions and choose a relevant experiment.
5. They read the concise summary, outcome and key decisions.
6. They inspect one architecture or evidence section.
7. They visit `How I Ended Up Here` or return to the experiment index.
8. They leave with enough confidence to invite me to interview.

### Product requirement

The path from homepage to credible evidence must require no account, no explanation and no experimental navigation.

## Journey 2: Technical deep dive

1. A Staff or Principal engineer receives a direct experiment link.
2. They understand the question and maturity state immediately.
3. They inspect the architecture, alternatives, constraints and failures.
4. They follow related research notes or another experiment.
5. They open a public repository or note that private source is available for walkthrough.
6. They form interview questions based on real decisions rather than generic framework trivia.

### Product requirement

Technical depth must be structured and optional rather than buried in one uninterrupted essay.

## Journey 3: Recruiter qualification

1. A recruiter opens the homepage.
2. They identify my role positioning, experience level and location.
3. They scan three featured experiments and the short career summary.
4. They find the CV and contact path.
5. They can explain my fit to a hiring manager without understanding every technical detail.

### Product requirement

The site must not hide essential professional information behind the notebook metaphor.

## Journey 4: GitHub discovery

1. An engineer discovers the repository or one of my public projects.
2. They follow the portfolio link.
3. They land on the relevant experiment rather than a generic homepage when possible.
4. They read the problem, learning and architecture.
5. They browse related notes or experiments.
6. They may return later because the site offers useful technical thinking, not only self-promotion.

### Product requirement

Experiment URLs must be durable, shareable and meaningful without prior context.

## Journey 5: Mobile skim

1. A reader opens the site from email or LinkedIn on a phone.
2. The page loads quickly.
3. Navigation, text, diagrams and tap targets remain usable.
4. The reader can understand the main argument without expanding every detail.
5. They save or forward the page for later desktop review.

### Product requirement

Mobile is not a reduced decorative version. It is a first-class reading experience.

## Journey 6: Return visitor

1. A previous visitor returns after a new experiment or note is published.
2. They can identify what has changed.
3. They navigate through current work, latest investigations or related ideas.
4. They do not need to relearn the interface.

### Product requirement

Future updates should be discoverable without turning the site into a chronological blog feed.

## Failure journeys to prevent

- The reader sees a clever animation but cannot find the work.
- The reader mistakes a prototype for production software.
- The reader cannot tell whether I still write code.
- The reader reaches a private repository gate before understanding the project.
- The reader must use a desktop device to read diagrams.
- The reader leaves because the first useful content appears too far below the fold.

## Acceptance criteria

- [ ] Each primary journey can be completed without authentication.
- [ ] Essential context appears before deep technical content.
- [ ] Direct experiment links are self-contained.
- [ ] Mobile readers can complete the qualification and skim journeys.
- [ ] Private repository access is never required to understand an experiment.

## Related documents

- PRD-003 — `USER-PERSONAS.md`
- PRD-008 — `SITE-MAP.md`
- UX Rules — `../foundations/UX-RULES.md`
