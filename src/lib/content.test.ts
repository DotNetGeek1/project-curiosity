import { describe, expect, it } from 'vitest';

import {
  experimentStatusLabels,
  formatExperimentPeriod,
  getExperimentBySlug,
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
  it('states plainly what Morris cannot do', () => {
    const body = bodyOf('morris');

    expect(body).toMatch(/^## What Morris Cannot Do$/m);
    expect(body).toMatch(/cannot modify its own source/);
  });

  it('separates implemented work from hypotheses and speculation', () => {
    const body = bodyOf('morris');

    expect(body).toMatch(/Implemented and working/);
    expect(body).toMatch(/Active hypotheses, not results/);
    expect(body).toMatch(/Speculation, clearly labelled/);
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
