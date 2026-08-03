# EXP-001: DeliveryIQ

| Field | Value |
|---|---|
| **Document ID** | EXP-001 |
| **Status** | Draft brief |
| **Owner** | I own this document |
| **Last Updated** | 2026-08-03 |

## Central question

What would engineering delivery look like if AI were designed into the workflow from the beginning rather than added on top of Jira or Azure DevOps afterwards?

## Why this matters

Delivery tools are often very good at recording work and much less good at helping teams understand what needs attention. The opportunity is to reduce coordination overhead, surface risk earlier and give delivery leads a clearer view of work without creating more administration.

## Narrative spine

1. Friction observed in ordinary delivery tooling.
2. Why adding a chatbot to an existing tracker would not solve the deeper problem.
3. The hypothesis that agents and structured delivery data could create active guidance.
4. Early product and architecture decisions.
5. Experiments with agent workflows, summaries and intervention points.
6. What became useful, what remained uncertain and what I learned about applied agents.

## Technical areas to explain

- agent responsibilities and boundaries;
- ingestion of backlog, sprint and conversation signals;
- retrieval and context construction;
- deterministic rules versus model judgement;
- auditability and human control;
- model routing, cost and latency trade-offs;
- security and tenant isolation assumptions;
- failure modes such as confident but unhelpful advice.

## Evidence to collect

- architecture diagram;
- anonymised workflow examples;
- screenshots or demo captures;
- prompt and evaluation notes that are safe to publish;
- example of a useful surfaced risk;
- example where the system was wrong or noisy;
- code excerpts from public or sanitised areas;
- decisions that changed after testing.

## Claims requiring verification

- any quantified time saving;
- any assertion that risk was detected earlier;
- any user or team feedback;
- maturity of agent autonomy;
- production-readiness or commercial status.

## Confidentiality risks

- employer delivery data;
- customer or product names;
- internal backlog content;
- proprietary prompts or architecture;
- personally identifiable transcript content.

## Open questions

- Which prototype represents the story most honestly?
- What evidence best shows product judgement rather than only AI experimentation?
- How much of the current repository can be shown publicly?
- What did I deliberately choose not to automate?

## Publication target

Full launch experiment, subject to evidence review.
