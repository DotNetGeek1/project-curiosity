import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LabStatus } from '@/components/ui/lab-status';

describe('LabStatus', () => {
  it('renders the human-readable label for a status', () => {
    render(<LabStatus status="active" />);

    expect(screen.getByText('Active Experiment')).toBeInTheDocument();
  });

  it('hides the status dot from assistive technology', () => {
    const { container } = render(<LabStatus status="shipped" />);

    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1);
    expect(screen.getByText('Shipped')).toBeInTheDocument();
  });
});
