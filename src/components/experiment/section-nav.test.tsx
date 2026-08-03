import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionNav } from '@/components/experiment/section-nav';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'the-problem', title: 'The Problem' },
  { id: 'what-went-wrong', title: 'What Went Wrong' },
];

describe('SectionNav', () => {
  it('navigates with real anchors so it works without client-side scripting', () => {
    render(<SectionNav sections={sections} />);

    for (const section of sections) {
      expect(screen.getByRole('link', { name: section.title })).toHaveAttribute(
        'href',
        `#${section.id}`
      );
    }
  });

  it('labels itself as a navigation landmark', () => {
    render(<SectionNav sections={sections} />);

    expect(screen.getByRole('navigation', { name: 'Sections' })).toBeInTheDocument();
  });

  it('ships the outline expanded so the sections are readable before hydration', () => {
    const { container } = render(<SectionNav sections={sections} />);

    expect(container.querySelector('details')).toHaveAttribute('open');
  });

  it('renders nothing for an experiment with no sections', () => {
    const { container } = render(<SectionNav sections={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('marks the section the reader has scrolled to as current', () => {
    render(
      <>
        <SectionNav sections={sections} />
        {sections.map((section) => (
          <h2 key={section.id} id={section.id}>
            {section.title}
          </h2>
        ))}
      </>
    );

    // jsdom places every element at the top of the viewport, so all three count
    // as scrolled past and the last one wins.
    expect(screen.getByRole('link', { name: 'What Went Wrong' })).toHaveAttribute(
      'aria-current',
      'true'
    );
    expect(screen.getByRole('link', { name: 'Overview' })).not.toHaveAttribute('aria-current');
  });

  it('leaves the outline unmarked when the headings are not on the page', () => {
    render(<SectionNav sections={sections} />);

    for (const section of sections) {
      expect(screen.getByRole('link', { name: section.title })).not.toHaveAttribute('aria-current');
    }
  });
});
