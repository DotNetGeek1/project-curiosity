# Project Curiosity — UX Rules

| Field | Value |
|---|---|
| **Document ID** | FOUNDATION-UX-001 |
| **Status** | Proposed |
| **Version** | 1.0 |
| **Date** | 2026-08-03 |
| **Owner** | Alex Griffiths |
| **Extends** | [ADR-001](../adr/ADR-001-Engineering-Notebook.md) |

## 1. Purpose

This document defines how Project Curiosity should behave as an experience.

The site is not a showcase interface that visitors must learn. It is a readable engineering notebook whose structure should quickly become invisible.

The experience must help visitors answer:

- Who is Alex?
- What kinds of problems attract him?
- How does he approach uncertainty?
- What has he built?
- What did he learn?
- Where should I go next?

## 2. Primary Experience Goal

> A visitor should understand Alex's engineering personality before they understand every project.

The first few minutes should establish curiosity, autonomy, technical range and practical judgement. Deeper project pages then provide evidence.

## 3. Audience Priorities

The site must support several audiences without becoming generic.

### 3.1 Engineering leader

Needs to determine quickly whether Alex demonstrates senior judgement, ownership, communication and product thinking.

### 3.2 Senior engineer

Wants technical depth, architecture, trade-offs, failures and evidence that the work is real.

### 3.3 Recruiter or hiring manager

Needs clear orientation, role relevance and contact information without reading every technical section.

### 3.4 Curious peer

May browse experiments, notes and unusual ideas without any hiring context.

The experience should layer information rather than create separate sites for each audience.

## 4. Reader Journey

A successful journey should produce roughly these impressions:

- **Within 30 seconds:** This is an experienced, hands-on engineer with a distinctive way of thinking.
- **Within 3 minutes:** Alex notices problems, learns what is needed and builds experiments without waiting for permission.
- **Within 10 minutes:** The projects are technically credible and connected by a coherent curiosity-first approach.
- **After a deeper read:** I understand enough of Alex's judgement to want a conversation or code walkthrough.

The site must not depend on visitors reading in a fixed sequence.

## 5. Information Scent

Every link should communicate what lies behind it.

Prefer:

- “Can AI remove delivery friction?”
- “How Chronos became a temporal knowledge graph”
- “What Morris broke, and what that taught me about agent containment”

Over:

- “Learn more”
- “View project”
- “Click here”

Project names may be unfamiliar. Questions and summaries must provide meaning.

## 6. Navigation

### 6.1 Primary navigation

Primary navigation should remain conventional and concise. Recommended items:

- Experiments
- Notes
- How I Ended Up Here
- Contact

The logo or identity links home.

“Experiments” may replace “Projects” because ADR-001 establishes the meaning. More playful labels should be used only where clarity remains obvious.

### 6.2 Navigation behaviour

- Navigation must be keyboard accessible.
- The current section must be identifiable.
- Mobile navigation must not hide basic contact access.
- Sticky navigation may be used if unobtrusive.
- No spatial, radial or 3D menu may replace ordinary navigation.
- Browser back and forward behaviour must remain predictable.

### 6.3 Footer

The footer may include the phrase “Still wondering...” as a small signature detail, but it must also include practical links, contact information and legal or privacy information where required.

## 7. Homepage Experience

The homepage is an orientation surface, not a complete biography.

It should include:

1. Alex's name and concise role identity;
2. the “Things I Wondered About” premise;
3. a short explanation of curiosity-led engineering;
4. featured experiment questions;
5. a route to the full experiment index;
6. current obsessions or active investigations;
7. a short path into Alex's career story;
8. contact or conversation entry points.

### 7.1 Hero rules

The hero should be visually distinctive but concise. It must not consume the entire first screen with a slogan.

A visitor should see evidence of projects or questions without excessive scrolling.

### 7.2 Homepage anti-patterns

Do not include:

- a skills cloud;
- percentage bars;
- an autoplay showreel;
- a wall of employer logos without context;
- a generic portrait beside generic copy;
- forced typing animation;
- a full-screen loading sequence.

## 8. Experiment Index

The experiment index should support browsing by questions, not only project names.

Each entry should expose:

- project name;
- central question;
- concise summary;
- current state;
- last investigated date;
- major themes;
- one purposeful visual where available.

Filtering may be added later, but the initial number of experiments does not justify complex controls.

Do not hide projects inside horizontal carousels.

## 9. Experiment Page Experience

An experiment page should be usable at three depths.

### 9.1 Scan

The visitor should quickly understand:

- the question;
- the problem;
- what was built;
- current maturity;
- why it matters.

### 9.2 Read

The visitor can follow the full narrative, decisions, failures and lessons.

### 9.3 Investigate

A technical reader can inspect architecture diagrams, implementation notes, selected evidence and repository-access information.

The page should not force the deepest technical content on every reader.

## 10. Page Orientation

Long pages need persistent orientation without clutter.

Possible tools include:

- a visible section outline on large screens;
- clear heading hierarchy;
- progress indication only if subtle and useful;
- “back to experiments” links;
- related notes and next-experiment links;
- metadata rail.

On small screens, side navigation should collapse into a readable inline outline or disclosure.

## 11. Progressive Disclosure

Use progressive disclosure for optional depth, not for core meaning.

Appropriate for:

- raw technical notes;
- code excerpts;
- extended failure logs;
- secondary diagrams;
- implementation details.

Inappropriate for:

- the project question;
- the problem;
- maturity state;
- major limitations;
- essential accessibility information.

Disclosures must use semantic controls and preserve deep linking where useful.

## 12. Interaction Philosophy

Interactions should feel deliberate and quiet.

Good interactions:

- expanding an engineering note;
- scrubbing Chronos across time;
- highlighting a path through an architecture diagram;
- revealing annotations;
- comparing two design iterations.

Bad interactions:

- moving the page because the cursor moved;
- requiring drag gestures to read content;
- scroll-jacked storytelling;
- hidden navigation revealed only by experimentation;
- animations that must finish before content appears.

## 13. Search

Search is not required for the first release unless content volume justifies it.

When introduced, search should index:

- experiment titles and questions;
- summaries;
- research notes;
- technologies;
- concepts;
- architecture decisions.

Results should explain why they matched. Search must not be an excuse to avoid a coherent information architecture.

## 14. Contact Experience

Contact should be straightforward.

Provide:

- a visible email route;
- relevant professional links;
- clear wording around private repository walkthroughs;
- optional context prompts such as roles, engineering questions or project discussions.

Do not require a long form. If a form exists, it must degrade gracefully and state what happens to submitted information.

## 15. Private Repository Access

The public site should never imply automatic access to private code.

Recommended wording:

> Selected private repositories are available for interview review or a guided code walkthrough where ownership and confidentiality permit.

The experience may include an “Ask about the code” action. It must not expose tokens, dynamic GitHub invitations or repository contents in the public client.

## 16. Error and Empty States

Errors should remain in character without becoming jokes at the user's expense.

A 404 may say that the experiment could not be found, but it must provide routes home and to experiments.

Do not use Morris humour for serious failures involving contact forms, privacy or lost user input.

## 17. Performance as UX

Performance is part of credibility.

Requirements:

- meaningful content appears quickly;
- fonts do not cause severe layout shift;
- images reserve space;
- animations do not block interaction;
- large interactive experiments load only when needed;
- core pages remain usable on slow connections;
- client JavaScript is treated as a budget.

A buggy portfolio is negative evidence. Reliability wins.

## 18. Accessibility as UX

The experience must support:

- keyboard-only use;
- screen readers;
- zoom and text reflow;
- reduced motion;
- sufficient contrast;
- clear focus order;
- touch interaction;
- alternative descriptions for diagrams and images.

Accessible content is the baseline experience, not a fallback.

## 19. Mobile Experience

On mobile:

- narrative reading comes first;
- metadata stacks cleanly;
- annotation rails move inline;
- interactive diagrams provide static alternatives;
- navigation remains obvious;
- touch targets are comfortable;
- no horizontal scrolling is required for ordinary text;
- code blocks and wide diagrams use intentional overflow with visible affordances.

## 20. Analytics and Privacy

Analytics should answer product questions, not surveil visitors.

Useful measures may include:

- which experiments are opened;
- whether visitors reach deeper sections;
- outbound GitHub or contact actions;
- performance and error data.

Avoid invasive tracking, fingerprinting and unnecessary cookies. Any analytics choice requires a separate technical and privacy decision.

## 21. UX Decision Test

Before adding a page, control or interaction, ask:

1. What user need does this serve?
2. Can the visitor understand it without instruction?
3. Does it strengthen the engineering-notebook model?
4. Does it work with keyboard, touch and reduced motion?
5. Does it preserve reading flow?
6. Is it reliable enough to become evidence of Alex's judgement?
7. Would a simpler link or static diagram work better?

## 22. Acceptance Criteria

- [ ] Visitors can identify Alex, the site's purpose and featured experiments within the first screen or immediate scroll.
- [ ] Primary navigation is conventional, accessible and predictable.
- [ ] Experiments are discoverable through meaningful questions.
- [ ] Every experiment page supports scan, read and investigate depths.
- [ ] Long pages provide orientation without scroll hijacking.
- [ ] Core content never depends on animation, hover or WebGL.
- [ ] Contact and repository-access routes are clear.
- [ ] Mobile layouts preserve the intended narrative order.
- [ ] Errors remain useful and credible.
- [ ] Performance and accessibility are treated as product requirements.

## 23. Related Documents

- [ADR-001](../adr/ADR-001-Engineering-Notebook.md)
- [DESIGN-RULES.md](DESIGN-RULES.md)
- [WRITING-RULES.md](WRITING-RULES.md)
- `TECHNICAL-RULES.md`
- future homepage specification
- future experiment-page specification
- future navigation specification
