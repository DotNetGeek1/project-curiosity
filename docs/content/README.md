# Content Model

| Field | Value |
|---|---|
| **Document ID** | CNT-000 |
| **Status** | Active |
| **Owner** | Me |
| **Last Updated** | 2026-08-03 |

## Purpose

This folder defines the structured content contracts used by the site.

The goal is to keep content independent from page components, validate required metadata and allow experiments, notes and evidence to evolve without hard-coding each page.

## Documents

- [CNT-001 — Experiment Schema](CNT-001-EXPERIMENT-SCHEMA.md)
- [CNT-002 — Research Note Schema](CNT-002-RESEARCH-NOTE-SCHEMA.md)
- [CNT-003 — Shared Metadata](CNT-003-SHARED-METADATA.md)
- [CNT-004 — Evidence and Repository Visibility](CNT-004-EVIDENCE-AND-VISIBILITY.md)

## Rules

- Content is the source of truth; components render it.
- Required fields must be validated during build or CI.
- Optional fields must degrade cleanly when absent.
- Schemas must not encode visual layout decisions.
- Public content must never expose private credentials, code or confidential employer material.
