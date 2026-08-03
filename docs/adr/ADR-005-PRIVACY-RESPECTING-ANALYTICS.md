# ADR-005: Privacy-Respecting Analytics

| Field | Value |
|---|---|
| Status | Accepted |
| Version | 1.0 |
| Date | 2026-08-03 |
| Depends On | SUCCESS-METRICS, TECHNICAL-RULES |

## Decision

The MVP will not include behavioural advertising, cross-site tracking, fingerprinting or invasive session replay.

If analytics are added, they must be privacy-respecting, minimal, aggregate-first and directly tied to the success metrics defined for the product. No analytics package is required for the first scaffold.

## Context

Project Curiosity exists to help relevant visitors understand my work. It does not require detailed behavioural surveillance. Excessive tracking would conflict with the project's values, create consent and compliance overhead, increase page weight and provide misleading precision at low traffic volumes.

## Permitted questions

Analytics may answer questions such as:

- Which experiment pages are visited?
- Do visitors reach deeper sections of long stories?
- Which external links are used?
- Are there broken routes or major performance regressions?
- Which devices and broad viewport categories reveal usability problems?

## Prohibited collection

- advertising identifiers;
- cross-site profiles;
- keystroke or form-field capture;
- session replay by default;
- precise location;
- unnecessary IP retention;
- personal identity enrichment;
- repository-access request contents beyond what is needed to respond;
- collection without a documented purpose and retention period.

## Consent

A tracking system that requires consent should not be introduced casually. Prefer an approach that avoids cookies and personal profiling. Any required consent interface must be honest, accessible and non-coercive.

## Operational telemetry

Error and performance monitoring may be used to keep the site reliable. It must:

- minimise personal data;
- redact sensitive URLs and payloads;
- use short, documented retention;
- avoid capturing content from private communications;
- be disabled in local development unless explicitly needed.

## Success interpretation

Low traffic is expected and is not failure. Qualitative outcomes such as better interview conversations, direct feedback and useful project discussion carry more weight than vanity metrics.

## Alternatives

### Full product analytics suite

Rejected because the data volume and product need do not justify the tracking surface.

### No telemetry of any kind

Acceptable for the MVP, but may make reliability and broken-link problems harder to detect. Lightweight operational monitoring can be introduced when useful.

## Review triggers

Review this ADR if:

- the site introduces accounts or personalised features;
- contact or access-request workflows store data;
- a commercial product is launched from the same domain;
- legal or hosting requirements materially change.

## Acceptance criteria

- [ ] The initial site works without an analytics dependency.
- [ ] Any future analytics maps to a documented product question.
- [ ] No advertising or cross-site tracking is present.
- [ ] Privacy and retention details are documented before collection begins.
- [ ] Operational monitoring redacts sensitive data.
