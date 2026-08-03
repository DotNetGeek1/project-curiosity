# TECH-003: Deployment and Operations

| Field      | Value                      |
| ---------- | -------------------------- |
| Status     | Accepted                   |
| Version    | 1.0                        |
| Depends On | ADR-002, ADR-005, TECH-002 |

## Purpose

This document defines the deployment, preview, observability and recovery expectations for the public site.

## Deployment model

The site should deploy from GitHub through an automated pipeline.

Expected environments:

- local development;
- pull-request preview;
- production.

A separate long-lived staging environment is not required for the MVP unless the selected host makes it essentially free to maintain.

## Production domain

The intended public domain is:

`portfolio.dotnetgeek.co.uk`

DNS, TLS and redirects must be configured so there is one canonical HTTPS origin.

## Pipeline

A production deployment requires:

1. dependency installation from a lockfile;
2. static code and content checks;
3. automated tests;
4. production build;
5. deployment;
6. post-deployment smoke checks where practical.

Pull-request previews should run the same build checks and produce a reviewable URL.

## Hosting requirements

The platform must support:

- static-first Next.js output and any minimal server rendering selected later;
- custom domain and managed TLS;
- immutable asset caching;
- preview deployments;
- environment separation;
- deployment rollback;
- basic request and error visibility.

Avoid infrastructure that requires maintaining servers for a mostly static site.

## Environment and secrets

- The MVP should need few or no secrets.
- Secrets live in the hosting or CI secret store, never the repository.
- Preview environments receive only the minimum permissions they require.
- Public variables are explicitly identified.
- Secret rotation and removal must be straightforward.

## Caching

- Fingerprinted static assets receive long-lived immutable caching.
- HTML and content routes use caching appropriate to the deployment model.
- A content update must produce a predictable fresh deployment.
- Do not add a separate CDN configuration layer unless the host requires it.

## Redirects and URL stability

- Published experiment and note slugs should be considered durable.
- Slug changes require redirects.
- HTTP redirects to HTTPS.
- Alternate hostnames redirect to the canonical origin.
- Trailing-slash policy is consistent.

## Reliability

The site does not require enterprise availability engineering, but it should fail simply.

- Static content should remain available even if optional external services fail.
- Third-party embeds are avoided or isolated.
- Analytics failure must not affect pages.
- Contact paths should include a plain external alternative.

## Observability

Minimal operational visibility may include:

- deployment status;
- build failures;
- server or edge errors if any dynamic runtime exists;
- broken-link checks;
- performance trend checks;
- uptime checks after launch.

Observability must follow ADR-005 and avoid collecting unnecessary visitor data.

## Backups and recovery

Git is the source of truth for code and content. Recovery should be possible by redeploying a known commit.

Additional backup systems are unnecessary unless future features introduce data not stored in Git.

## Security baseline

- dependency updates are reviewed regularly;
- production headers follow current platform guidance;
- content security policy is introduced when compatible with the final asset and script model;
- no secrets appear in client bundles;
- public forms, if later added, receive spam and abuse protection;
- external links from authored content are reviewed.

## Release process

For the MVP:

- merge to `main` triggers production deployment;
- preview the PR before merge;
- tag notable public releases when useful;
- maintain a short release note for major content or feature milestones;
- roll back by redeploying the previous known-good commit.

## Launch checklist

- canonical domain and TLS work;
- social and search metadata are correct;
- robots and sitemap behaviour are intentional;
- 404 and error pages work;
- core pages pass keyboard and mobile review;
- performance is within agreed budgets;
- no draft or sensitive content is present;
- contact links work;
- analytics, if present, matches ADR-005;
- rollback has been tested or documented.

## Acceptance criteria

- [ ] Pull requests receive preview deployments.
- [ ] Production deployment is automated from `main`.
- [ ] The site can be restored from Git without external content recovery.
- [ ] Optional external services cannot break core pages.
- [ ] Domain, redirects and TLS produce one canonical origin.
- [ ] Operational telemetry follows the privacy decision.
