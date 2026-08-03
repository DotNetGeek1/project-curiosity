# EXP-004: SafeNet

| Field | Value |
|---|---|
| **Document ID** | EXP-004 |
| **Status** | Draft brief |
| **Owner** | I own this document |
| **Last Updated** | 2026-08-03 |

## Central question

What might a new web architecture look like if protocols, identity, servers and data rights were reconsidered from first principles?

## Why this matters

SafeNet is deliberately speculative. It explores whether a different technical and ownership model could reduce dependence on central platforms and give people clearer control over their data.

## Narrative spine

1. The aspects of the modern web that felt worth questioning.
2. The decision to treat the problem as protocol and infrastructure design rather than another application.
3. Early Rust server and communication experiments.
4. Ideas around identity, ownership, trust and data rights.
5. The constraints that make the idea difficult.
6. Why a low probability of success can still make the experiment worthwhile.

## Technical areas to explain

- protocol design;
- Rust server architecture;
- identity and key management;
- data ownership and rights;
- distributed trust assumptions;
- discovery and routing;
- interoperability and migration;
- threat modelling;
- where blockchain concepts help and where they do not.

## Evidence to collect

- protocol sketch;
- server architecture diagram;
- public code excerpts;
- example request or exchange flow;
- threat-model notes;
- abandoned approaches;
- explicit list of unresolved problems.

## Claims requiring verification

- security properties;
- privacy guarantees;
- decentralisation claims;
- performance and scalability;
- novelty;
- suitability for real-world use.

## Confidentiality and safety risks

Low confidentiality risk, but security claims must be conservative and prototype weaknesses must not be hidden.

## Open questions

- Which part is implemented versus conceptual?
- What is the most useful first-principles insight?
- Does the blockchain element still earn its complexity?
- What would have to be true for the experiment to progress beyond a research prototype?

## Publication target

Shorter launch entry or research note, expanding only when evidence supports a deeper story.
