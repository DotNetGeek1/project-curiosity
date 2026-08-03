# Project Philosophy

| Field                 | Value                     |
| --------------------- | ------------------------- |
| **Document ID**       | PHL-001                   |
| **Status**            | Accepted                  |
| **Version**           | 1.0                       |
| **Owner**             | I / repository maintainer |
| **Related documents** | ADR-001, STD-001          |

## Why I am doing this properly

I am deliberately treating this portfolio as a product rather than a disposable personal website.

The documentation is not overhead around the real work. It is part of the evidence.

The site is meant to show how I approach engineering: I clarify the problem, challenge assumptions, make decisions visible, reduce ambiguity before implementation, and build reusable foundations rather than relying on memory and improvisation.

If the repository is chaotic while the website claims that I value clear thinking and engineering discipline, the claim falls apart.

## What this project should prove

The finished site should show that I can:

- take a vague idea and turn it into a coherent product;
- connect design, content, UX and architecture;
- explain technical decisions clearly;
- distinguish useful complexity from technical theatre;
- use AI agents as implementation tools without handing them product ownership;
- revise ideas when evidence or review exposes weaknesses;
- ship something reliable without sanding away all of its personality.

## Documentation as leverage

A clear specification lets me delegate repetitive implementation without delegating judgement.

That matters because much of the site will be built with coding agents. The better the product intent is expressed, the less likely an agent is to produce a generic portfolio, invent content, or optimise for fashionable visual patterns that contradict the project.

The goal is not to remove every implementation decision. It is to make the important decisions deliberate.

## Why this level of effort is justified

This project brings together the same themes as the work it describes:

- product discovery;
- architecture;
- applied AI;
- developer tooling;
- technical writing;
- experimentation;
- automation;
- design judgement;
- long-term maintainability.

The repository therefore becomes one of the portfolio pieces, not merely the container for them.

## The limit

Good documentation can become avoidance dressed as discipline.

I do not need a specification for every margin or a committee process for every sentence. Documents should exist where they reduce ambiguity, protect a meaningful decision, or make future work easier.

When a document no longer provides leverage, it should not be written.

When the product can be tested more cheaply by building a prototype, I should build the prototype.

## The practical standard

I should be able to hand an approved specification to a capable engineer or coding agent and expect the result to preserve the intended product rather than merely reproduce a screenshot.

I should also be able to explain every significant rule in an interview without pretending that documentation is valuable for its own sake.

## Acceptance criteria

- [ ] The repository explains why the documentation exists.
- [ ] Documentation reduces ambiguity rather than duplicating conversations.
- [ ] Product judgement remains with me, not with coding agents.
- [ ] The documentation itself demonstrates clear engineering practice.
- [ ] Specification work does not indefinitely delay a usable release.

## Related documents

- ADR-001 — `adr/ADR-001-Engineering-Notebook.md`
- STD-001 — `DOCUMENT-STANDARDS.md`
