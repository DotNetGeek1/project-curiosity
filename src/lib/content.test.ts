import { describe, expect, it } from 'vitest';

import { formatExperimentPeriod, getExperiments, getNotes } from '@/lib/content';

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

describe('getNotes', () => {
  it('excludes drafts outside development', () => {
    expect(getNotes().every((note) => !note.draft)).toBe(true);
  });
});
