import { describe, expect, it } from 'vitest';

import {
  experimentStatusDescriptions,
  experimentStatusLabels,
  formatExperimentMonth,
  formatExperimentPeriod,
  getExperimentBySlug,
  getExperimentOutline,
  getExperiments,
  getNotes,
} from '@/lib/content';

/** The lifecycle vocabulary defined in ADR-001 §7.2 and CNT-001. */
const canonicalStatuses = [
  'exploring',
  'prototype',
  'growing',
  'shipped',
  'paused',
  'dormant',
  'abandoned',
  'escaped-containment',
];

describe('formatExperimentPeriod', () => {
  it('marks an experiment with no end year as ongoing', () => {
    expect(formatExperimentPeriod({ startYear: 2023 })).toBe('2023 – Present');
  });

  it('collapses a single-year experiment to one year', () => {
    expect(formatExperimentPeriod({ startYear: 2021, endYear: 2021 })).toBe('2021');
  });

  it('renders a closed range', () => {
    expect(formatExperimentPeriod({ startYear: 2019, endYear: 2022 })).toBe('2019 – 2022');
  });
});

describe('formatExperimentMonth', () => {
  it('expands a front-matter month into a readable date', () => {
    expect(formatExperimentMonth('2026-07')).toBe('July 2026');
    expect(formatExperimentMonth('2025-01')).toBe('January 2025');
    expect(formatExperimentMonth('2025-12')).toBe('December 2025');
  });

  it('leaves anything that is not a plain month exactly as written', () => {
    expect(formatExperimentMonth('2026-07-14')).toBe('2026-07-14');
    expect(formatExperimentMonth('Spring 2026')).toBe('Spring 2026');
    expect(formatExperimentMonth('2026-13')).toBe('2026-13');
  });
});

/**
 * The outline drives the in-page navigation, so a section whose id does not match
 * the heading rehype-slug generated would render a link to nowhere.
 */
describe('experiment section outlines', () => {
  it('anchors every section at a heading id that exists in the compiled output', () => {
    for (const experiment of getExperiments()) {
      expect(experiment.sections.length, `${experiment.slug} has no sections`).toBeGreaterThan(0);

      for (const section of experiment.sections) {
        expect(
          experiment.mdx,
          `${experiment.slug} has no heading with id "${section.id}"`
        ).toContain(`"${section.id}"`);
      }
    }
  });

  it('collects the top-level sections in the order they are written', () => {
    for (const experiment of getExperiments()) {
      const written = [...experiment.content.matchAll(/^## (.+)$/gm)].map((match) => match[1]);

      expect(
        experiment.sections.map((section) => section.title),
        `${experiment.slug} outline drifted from its headings`
      ).toEqual(written);
    }
  });

  it('gives every section a unique id', () => {
    for (const experiment of getExperiments()) {
      const ids = experiment.sections.map((section) => section.id);
      expect(new Set(ids).size, `${experiment.slug} has duplicate section ids`).toBe(ids.length);
    }
  });

  it('opens the outline with the page header rather than the first body section', () => {
    const chronos = getExperimentBySlug('chronos');
    const outline = getExperimentOutline(chronos!);

    expect(outline[0]).toEqual({ id: 'overview', title: 'Overview' });
    expect(outline.slice(1)).toEqual(chronos!.sections);
  });

  it('yields the overview id to a body section that already claims it', () => {
    const sections = [{ id: 'overview', title: 'Overview' }];

    expect(getExperimentOutline({ sections })).toEqual(sections);
  });
});

describe('experiment status vocabulary', () => {
  it('explains every state rather than leaving it as a bare label', () => {
    for (const status of canonicalStatuses) {
      const description =
        experimentStatusDescriptions[status as keyof typeof experimentStatusLabels];

      expect(description, `${status} has no description`).toBeTruthy();
      expect(description).toMatch(/\.$/);
    }
  });
});

describe('experiment themes', () => {
  it('describes problem areas without repeating the technology list', () => {
    for (const experiment of getExperiments()) {
      expect(experiment.themes.length, `${experiment.slug} has no themes`).toBeGreaterThan(0);

      const technologies = new Set(experiment.technologies);
      const duplicated = experiment.themes.filter((theme) => technologies.has(theme));

      expect(duplicated, `${experiment.slug} repeats technologies as themes`).toEqual([]);
    }
  });
});

describe('getExperiments', () => {
  it('returns experiments sorted by their declared order', () => {
    const orders = getExperiments().map((experiment) => experiment.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it('gives every experiment a unique slug', () => {
    const slugs = getExperiments().map((experiment) => experiment.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('experiment status vocabulary', () => {
  it('labels exactly the canonical lifecycle states', () => {
    expect(Object.keys(experimentStatusLabels).sort()).toEqual([...canonicalStatuses].sort());
  });

  it('publishes only experiments with canonical states', () => {
    for (const experiment of getExperiments()) {
      expect(canonicalStatuses).toContain(experiment.status);
    }
  });

  it('reserves escaped-containment for Morris', () => {
    const escaped = getExperiments().filter(
      (experiment) => experiment.status === 'escaped-containment'
    );
    expect(escaped.map((experiment) => experiment.slug)).toEqual(['morris']);
  });
});

describe('getNotes', () => {
  it('excludes drafts outside development', () => {
    expect(getNotes().every((note) => !note.draft)).toBe(true);
  });
});

/**
 * CNT-001 requires a featured experiment to be a complete story, and defines the
 * narrative contract every complete story must satisfy.
 */
const completeStories = ['deliveryiq', 'chronos', 'morris'];

const requiredSections = [
  /^## The Problem$/m,
  /^## The Hypothesis$/m,
  /^## The Approach$/m,
  /^## Architecture$/m,
  /^## Trade-offs$/m,
  /^## What Went Wrong$/m,
  /^## Lessons$/m,
  /^## Current State$/m,
  /^## Next Questions$/m,
];

function bodyOf(slug: string): string {
  const experiment = getExperimentBySlug(slug);
  expect(experiment, `${slug} should exist`).toBeDefined();
  return experiment!.content;
}

describe('experiment narrative completeness', () => {
  it('leaves no placeholder text in a featured experiment', () => {
    for (const experiment of getExperiments().filter((candidate) => candidate.featured)) {
      expect(experiment.content, `${experiment.slug} still has placeholder sections`).not.toMatch(
        /To be written/i
      );
    }
  });

  for (const slug of completeStories) {
    it(`gives ${slug} every section the narrative contract requires`, () => {
      const body = bodyOf(slug);

      expect(body).toMatch(/^## The Question$/m);
      for (const section of requiredSections) {
        expect(body, `${slug} is missing ${section.source}`).toMatch(section);
      }
    });
  }
});

describe('Morris safety claims', () => {
  it('separates what was built from what was never built', () => {
    const body = bodyOf('morris');

    expect(body).toMatch(/Built and running/);
    expect(body).toMatch(/Never built/);
  });

  /**
   * The 2026-08 review against the RippleAI repository found that the containment
   * claims on this page were intentions rather than enforced properties. The page
   * must not reacquire an absolute safety claim without the code to back it.
   */
  it('makes no absolute claim about what Morris cannot reach', () => {
    const body = bodyOf('morris');

    for (const forbidden of [
      /\bcannot modify its own source\b/i,
      /\bno general network access\b/i,
      /\bno persistent memory\b/i,
      /\bsandboxed\b/i,
    ]) {
      expect(body, `Morris must not claim ${forbidden.source}`).not.toMatch(forbidden);
    }
  });

  it('avoids claiming general intelligence or autonomy', () => {
    const body = bodyOf('morris');

    for (const forbidden of [
      /\bAGI\b/,
      /general(ly)? intelligent\b/i,
      /artificial general intelligence/i,
      /fully autonomous/i,
      /self-improving/i,
    ]) {
      expect(body, `Morris must not claim ${forbidden.source}`).not.toMatch(forbidden);
    }
  });

  it('keeps credentials and unsafe operational detail out of the write-up', () => {
    const body = bodyOf('morris');

    for (const forbidden of [/api[_-]?key/i, /password/i, /[A-Za-z]:\\\\/, /\bsudo\b/]) {
      expect(body, `Morris must not include ${forbidden.source}`).not.toMatch(forbidden);
    }
  });
});
