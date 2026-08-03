import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/ui/page-header';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about an experiment, an idea or a walkthrough of a private project.',
};

export default function ContactPage() {
  return (
    <Container width="prose">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Happy to talk about any of the experiments here, or to walk through the private repositories."
      />

      <div className="pb-20">
        <dl className="divide-y divide-rule border-y border-rule">
          <div className="flex items-baseline justify-between gap-6 py-4">
            <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase">Email</dt>
            <dd>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-accent-rust underline underline-offset-4"
              >
                {siteConfig.email}
              </Link>
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-6 py-4">
            <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase">GitHub</dt>
            <dd>
              <Link
                href={siteConfig.github}
                className="text-accent-rust underline underline-offset-4"
                target="_blank"
                rel="noreferrer noopener"
              >
                {siteConfig.githubUsername}
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
