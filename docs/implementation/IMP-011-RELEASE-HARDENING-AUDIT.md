# IMP-011: First-Release Hardening Audit

| Field             | Value                                      |
| ----------------- | ------------------------------------------ |
| **Document ID**   | IMP-011                                    |
| **Title**         | First-Release Hardening Audit              |
| **Status**        | Implemented                                |
| **Version**       | 1.0                                        |
| **Owner**         | I own this document                        |
| **Last Reviewed** | 2026-08-03                                 |
| **Related**       | IMP-006, DSN-002, TECH-002, CNT-LAUNCH-005 |

## Purpose

This records what I audited before treating the site as a public release candidate, what I fixed, and what I deliberately deferred. It exists so that a deferred defect is a decision with evidence rather than something I forgot.

The audit covered the homepage, experiment index, experiment detail pages, research notes, About and Contact as one release candidate.

## What I fixed

### Faint text failed WCAG AA contrast

The `ink-faint` token was `#8a8378`, which gives 3.32:1 against the paper background. DSN-002 requires normal text to meet WCAG AA, so 4.5:1 is the floor. Because the token carries every eyebrow, metadata line, date and footer sentence on the site, this failed on every page.

I darkened the token to `#6f6960`, which measures 4.8:1 on paper and stays lighter on the raised surface used by callouts. The token remains visibly quieter than `ink-muted`, so the editorial hierarchy is intact. I fixed the colour rather than lowering the axe threshold.

### Pages had no canonical URLs or page-level social metadata

Every route emitted only a title and description, and the homepage inherited the site defaults with no metadata of its own. Search engines and social previews therefore saw the same Open Graph block on every page.

I added `src/lib/metadata.ts`, which builds a canonical URL, matching Open Graph tags and a Twitter card from a route path. Because the export uses `trailingSlash: true`, the helper normalises paths to a trailing slash so canonical URLs match the URL actually served. The sitemap now uses the same helper, so sitemap entries and canonical tags cannot drift apart.

The notes index title also became "Research Notes" to match the approved copy in CNT-LAUNCH-005.

### An unused animation dependency shipped in the tree

`motion` was declared as a dependency but never imported. It added install weight and an implied licence to animate things the design system does not want. I removed it. The only motion the shell relies on is smooth scrolling, which the reduced-motion media query already disables.

## What I verified

**Automated suite.** `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` and `pnpm test:e2e` all pass.

**Accessibility.** `e2e/accessibility.spec.ts` runs axe against every page in the release journey with the WCAG 2.0 and 2.1, level A and AA rule sets. It also asserts a single first-level heading per page, the presence of banner, main, contentinfo and both named navigation landmarks, that the skip link is the first stop in the tab order and activates, that tabbing through the primary navigation never loses a visible focused element, and that a reduced-motion reader still receives the full experiment page with smooth scrolling switched off.

**Viewports and engines.** Playwright runs three projects: desktop Chrome, a tablet-width Chromium and iPhone 13 on WebKit. The two keyboard-traversal tests skip on WebKit, which excludes links from the tab order unless full keyboard access is enabled at the operating-system level; that is platform behaviour rather than a site defect, and Chromium covers the same journey.

**Static export and routing.** `e2e/release-readiness.spec.ts` asserts that every indexed page has a unique title and description and a canonical URL on the portfolio domain, that experiment pages carry their own Open Graph tags, that an unknown route returns 404 with the custom page, that `robots.txt` points at the sitemap, and that the sitemap contains the canonical URL of every published page and excludes draft notes.

**Rendering without client-side JavaScript.** A dedicated project with JavaScript disabled loads the homepage, experiment index, an experiment page including its MDX body, About and Contact. The only client component in the tree is the MDX renderer, and it is prerendered into the static HTML.

**Links and calls to action.** The static output contains exactly one external link, to my GitHub profile, which returns 200 and carries `rel="noopener"`. Every private-repository aside states that the repository is private and offers a walkthrough request; no page implies that access is granted automatically. A test asserts that a private experiment never renders the public-repository link.

**Assets and layout shift.** The site loads no images at all, so there is no image-driven layout shift. The three Google fonts are self-hosted by `next/font`, preloaded as woff2 and use `display: swap`.

## Deferred findings

Each of these needs an issue of its own. Issue creation is restricted on the repository, so I am recording them here with enough detail to raise them directly.

### D-1: Core Web Vitals have not been measured against a deployed build

**Severity:** medium. **Evidence:** no deployment exists yet, so field or lab vitals cannot be collected. Static analysis of the export shows roughly 651 KB of JavaScript across all chunks, no images and preloaded self-hosted fonts, which suggests no obvious largest-contentful-paint or layout-shift risk, but that is an inference rather than a measurement.

**Reproduce:** deploy the export, then run Lighthouse against the homepage and an experiment page on a throttled mobile profile.

**Why deferred:** the acceptance criterion explicitly asks for a review against a deployed build, and there is nothing to deploy against yet.

### D-2: No purpose-built social preview images

**Severity:** low. **Evidence:** `buildPageMetadata` emits a `summary_large_image` Twitter card and Open Graph tags, but no `og:image`. CNT-LAUNCH-005 asks for a purpose-built image per major page in the warm-paper visual language.

**Reproduce:** paste any page URL into a social preview debugger and observe that no image is offered.

**Why deferred:** the images need design work that is out of scope for a quality pass, and their absence degrades gracefully to a text-only preview.

### D-3: Experiment pages have no in-page table of contents

**Severity:** low. **Evidence:** UX-003 and DSN-005 both specify a `TableOfContents` component with real anchors. The MDX pipeline already applies `rehype-slug`, so every heading has an id, but nothing surfaces them. Long experiment pages are therefore harder to scan and to deep-link into.

**Reproduce:** open `/experiments/deliveryiq/` and look for a contents list.

**Why deferred:** it is a feature specified elsewhere rather than a defect in the release journey, and none of the acceptance criteria for this pass require it.

### D-4: No diagram or evidence-figure components exist

**Severity:** low. **Evidence:** the MDX component map exposes only `Callout` and `Quote`. DSN-005 and DSN-007 specify `ArchitectureDiagram` and `EvidenceFigure` with accessible names and adjacent explanatory text. Experiment pages that need a diagram currently have to describe one in prose.

**Reproduce:** inspect `src/components/mdx/mdx-components.tsx`.

**Why deferred:** the components should be built alongside the first real verified diagram, so that their contract is driven by actual content rather than guessed at.

### D-5: SafeNet and Token Burn are still stubs

**Severity:** medium. **Evidence:** both experiment MDX files consist of section headings followed by `_To be written._`. CNT-LAUNCH-005 says placeholder-only experiment pages should be excluded from indexing, but the sitemap currently lists every experiment.

Token Burn was also marked `featured: true` while still a stub, which CNT-001 forbids: a featured experiment must be a complete story. I set it to `featured: false`. Nothing in the UI consumes the flag yet, so this is a data-correctness change rather than a visible one, and it should be set back to true when the story is written. A unit test now enforces the rule, so a featured stub fails the build.

**Reproduce:** open `/experiments/safenet/` and `/experiments/token-burn/`.

**Why deferred:** these are content work with no issue raised against them yet. Either the stories get written or the pages get excluded from the sitemap before launch; writing them is the better outcome.

### D-6: CNT-001 has drifted from the implemented schema

**Severity:** low. **Evidence:** CNT-001 describes `name`, `state`, `firstInvestigated`, `id`, `themes` and `visibility`. The Zod schema in `content-collections.ts` implements `title`, `status`, `startYear`, derives `slug` from the file path and has no `themes` or `visibility`. Section names also differ between the spec, the exemplar and the live files.

**Reproduce:** compare CNT-001 against `content-collections.ts`.

**Why deferred:** the code is correct and the document is stale, so this is a documentation reconciliation rather than a site defect.

### D-7: Experiment order does not match the approved launch order

**Severity:** low. **Evidence:** `EXPERIMENT-INDEX-COPY.md` gives the editorial order as DeliveryIQ, Chronos, Morris, SafeNet, Token Burn. The frontmatter has Morris at `order: 5` and Token Burn at `order: 3`, so Morris currently appears last on both the homepage and the index.

**Reproduce:** open `/experiments/` and compare the sequence against the approved copy.

**Why deferred:** neither issue in this batch asks for it, and reordering changes every card position on two pages, so it deserves its own change rather than being folded into a content pass.

### D-8: Claims in the Chronos and Morris write-ups need factual review

**Severity:** high, because it gates publication. **Evidence:** both stories were drafted from the briefs in EXP-002 and EXP-003 rather than from the private code. Neither page states a measurement, dataset size or availability claim, and the Morris page carries an explicit statement of what the system cannot do, but the architectural and failure specifics are reconstructions that need confirming.

Every claim needing review is listed in `../experiments/EXP-REVIEW-001-CHRONOS-AND-MORRIS-CLAIMS.md`, with what to check and why. The Morris safety claims are the priority: an overstated limit is worse than no stated limit.

**Reproduce:** work through EXP-REVIEW-001 against the private repositories.

**Why deferred:** I cannot verify private implementation detail on your behalf. The pages are complete and honest about their uncertainty, but they should not be treated as published until that review is done.

## Acceptance criteria

- [x] `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` and `pnpm test:e2e` pass.
- [x] No known keyboard trap, inaccessible control or missing visible-focus state remains in the release journey.
- [x] The primary pages render correctly without client-side JavaScript.
- [x] Key pages have unique titles, descriptions and canonical URLs.
- [x] No broken internal navigation or public external links remain.
- [x] Deferred defects have reproducible steps, severity and enough detail to raise as issues.
- [ ] Core Web Vitals reviewed against a deployed build. Deferred as D-1.

## Related documents

- EXP-REVIEW-001 — `../experiments/EXP-REVIEW-001-CHRONOS-AND-MORRIS-CLAIMS.md`
- IMP-006 — `IMP-006-FIRST-RELEASE-CHECKLIST.md`
- Design tokens — `../design/DSN-002-DESIGN-TOKENS.md`
- SEO and social metadata — `../content/launch/SEO-AND-SOCIAL-METADATA.md`
