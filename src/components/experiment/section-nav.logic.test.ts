import { describe, expect, it } from 'vitest';

import { resolveActiveSectionId } from '@/components/experiment/section-nav';

const sections = [
  { id: 'overview', top: -400 },
  { id: 'current-state', top: 80 },
  { id: 'next-questions', top: 200 },
];

describe('resolveActiveSectionId', () => {
  it('highlights the last section scrolled past the active offset', () => {
    expect(
      resolveActiveSectionId(sections, {
        scrollY: 800,
        viewportHeight: 900,
        documentHeight: 2_000,
      })
    ).toBe('current-state');
  });

  it('highlights the final section when the reader reaches the bottom of the page', () => {
    expect(
      resolveActiveSectionId(sections, {
        scrollY: 1_100,
        viewportHeight: 900,
        documentHeight: 2_000,
      })
    ).toBe('next-questions');
  });

  it('returns undefined when there are no sections', () => {
    expect(
      resolveActiveSectionId([], {
        scrollY: 0,
        viewportHeight: 900,
        documentHeight: 2_000,
      })
    ).toBeUndefined();
  });
});
