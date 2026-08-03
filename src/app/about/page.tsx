import type { Metadata } from 'next';

import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/ui/page-header';

export const metadata: Metadata = {
  title: 'About',
  description: 'How I approach problems, and why this site is a notebook rather than a portfolio.',
};

export default function AboutPage() {
  return (
    <Container width="prose">
      <PageHeader eyebrow="About" title="How I work" />

      <div className="prose max-w-none pb-20 prose-neutral prose-headings:font-serif prose-headings:font-normal prose-a:text-accent-rust">
        <p>
          This page is not written yet. It will cover how I approach problems, the kinds of systems
          I enjoy building, and the trade-offs I tend to make.
        </p>
      </div>
    </Container>
  );
}
