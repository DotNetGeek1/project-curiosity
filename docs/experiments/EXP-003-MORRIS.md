# EXP-003: Morris

| Field | Value |
|---|---|
| **Document ID** | EXP-003 |
| **Status** | Draft brief |
| **Owner** | I own this document |
| **Last Updated** | 2026-08-03 |

## Central question

Can symbolic AI, language models, diffusion models and agents combine into a system that reasons, adapts and creates tools more effectively than any one technique alone?

## Why this matters

Morris grew out of experiments in physics simulation and symbolic reasoning. It became a way to explore whether explicit structure, learned models and agent behaviour could complement one another rather than compete.

## Narrative spine

1. The original physics and symbolic-AI experiments.
2. Why purely symbolic and purely generative approaches each felt incomplete.
3. The hypothesis behind combining them.
4. Creation of the Morris language, CLI and self-modifying workflows.
5. What worked, what became unstable and where containment mattered.
6. What the project taught me about agency, tool use, safety and emergent complexity.

## Technical areas to explain

- symbolic representation and rule systems;
- orchestration of multiple model types;
- tool creation and source modification;
- agent planning and execution boundaries;
- sandboxing and permissions;
- observability and rollback;
- failure recovery;
- the gap between interesting behaviour and dependable intelligence.

## Evidence to collect

- architecture diagram;
- language or CLI examples;
- sanitised execution trace;
- example application created or modified by Morris;
- containment failure post-mortem;
- examples where symbolic structure improved results;
- examples where the system behaved unpredictably;
- source excerpts that can safely be published.

## Claims requiring verification

- degree of autonomy;
- ability to modify its own source;
- quality of generated applications;
- performance versus simpler approaches;
- any suggestion of general intelligence;
- number and nature of laptop failures.

## Confidentiality and safety risks

- publication of unsafe execution patterns;
- credentials or filesystem paths in traces;
- code that could encourage unrestricted self-modification;
- exaggerating experimental capability;
- exposing private model or provider configuration.

## Open questions

- What is the smallest demo that communicates the idea safely?
- Which containment failure is useful to describe without becoming theatre?
- How should I explain the symbolic layer to readers unfamiliar with classical AI?
- What evidence shows genuine learning rather than an elaborate orchestration script?

## Publication target

Full launch experiment, with especially careful claims and safety review.
