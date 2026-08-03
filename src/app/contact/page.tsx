import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/ui/page-header';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description: 'Get in touch about an experiment, an idea or a walkthrough of a private project.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Container width="prose">
      <PageHeader
        eyebrow="Contact"
        title="Want to talk about one of these experiments?"
        description="I am happy to discuss the engineering, the decisions or the parts that did not make it into the public write-up."
      />

      <div className="pb-12">
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

      <section aria-labelledby="roles-heading" className="pb-12">
        <h2 id="roles-heading" className="font-serif text-2xl leading-tight">
          Looking for an engineer who enjoys the unclear part?
        </h2>
        <p className="mt-4 text-ink-muted">
          I am interested in hands-on product-engineering and technical-leadership roles where
          difficult problems, good judgement and building useful software matter more than rigid
          boundaries.
        </p>
      </section>

      <div className="pb-20">
        <Link href="/experiments" className="text-sm text-accent-rust underline underline-offset-4">
          Back to experiments
        </Link>
      </div>
    </Container>
  );
}
