# Launch Copy Review Checklist

| Field            | Value          |
| ---------------- | -------------- |
| **Document ID**  | CNT-LAUNCH-007 |
| **Status**       | Draft          |
| **Version**      | 1.0            |
| **Last Updated** | 2026-08-03     |
| **Owner**        | Me             |

## Purpose

Provide the final review gate for public launch copy before it is converted into production content.

## Voice Review

- [ ] The copy reads as though I wrote it.
- [ ] Personal statements use `I`, `me` and `my`.
- [ ] I would be comfortable saying every sentence in an interview.
- [ ] The writing is direct and specific rather than promotional.
- [ ] Technical language helps explain decisions.
- [ ] Humour is natural and used sparingly.
- [ ] No sentence begins with a claim that should instead be shown through evidence.

## Factual Review

- [ ] Experience duration is current and accurate.
- [ ] Team-size and leadership claims are accurate.
- [ ] Project states reflect reality.
- [ ] Dates and update timestamps are accurate.
- [ ] Outcome statements have evidence.
- [ ] Technology descriptions match what was actually built.
- [ ] No prototype is described as a production system.
- [ ] No experiment is described as successful merely because it is interesting.

## Confidentiality and Ownership Review

- [ ] Employer and customer information is safe to publish.
- [ ] Screenshots contain no confidential or personal data.
- [ ] Code extracts are mine to share.
- [ ] Diagrams do not expose sensitive implementation details.
- [ ] Private-repository wording is accurate.
- [ ] Contact and walkthrough offers do not promise access I cannot provide.

## Product Review

- [ ] The homepage purpose is clear without scrolling.
- [ ] Experiment questions are more prominent than technologies.
- [ ] The About page explains both hands-on engineering and leadership.
- [ ] Calls to action point to real destinations.
- [ ] Empty states are helpful.
- [ ] Short entries are labelled honestly.
- [ ] Content does not rely on animation or imagery to make sense.

## Search and Sharing Review

- [ ] Every page has a unique title.
- [ ] Descriptions are accurate and concise.
- [ ] Canonical URLs use the production domain.
- [ ] Drafts are excluded from indexing.
- [ ] Social-preview images match the page content.
- [ ] Structured data does not overstate public code or product maturity.

## Placeholder Review

- [ ] No blocking placeholder tokens remain.
- [ ] No lorem ipsum remains.
- [ ] No raw TODO comments appear in rendered content.
- [ ] Missing evidence is either supplied, removed or explicitly approved as non-blocking.
- [ ] Placeholder-only pages are not published or indexed.

## Sign-Off

Copy is ready to publish only when factual, confidentiality, product and voice review are complete.

| Review          | Name | Date | Result |
| --------------- | ---- | ---- | ------ |
| Voice           |      |      |        |
| Factual         |      |      |        |
| Confidentiality |      |      |        |
| Product         |      |      |        |

## Acceptance Criteria

- [ ] The checklist is completed for every launch page.
- [ ] Any failed item blocks publication or is documented as an explicit exception.
- [ ] Review evidence is retained in the pull request or content history.
