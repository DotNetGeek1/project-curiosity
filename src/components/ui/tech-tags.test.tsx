import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TechTags } from '@/components/ui/tech-tags';

describe('TechTags', () => {
  it('renders one entry per technology', () => {
    render(<TechTags items={['.NET 8', 'Azure', 'Redis']} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('Azure')).toBeInTheDocument();
  });

  it('renders nothing when there are no technologies', () => {
    const { container } = render(<TechTags items={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
