import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@/components/layout/container';
import { MdxRenderer } from '@/components/mdx/mdx-renderer';
import { LabStatus } from '@/components/ui/lab-status';
import { TechTags } from '@/components/ui/tech-tags';
import { formatExperimentPeriod, getExperimentBySlug, getExperiments } from '@/lib/content';
import { buildPageMetadata } from '@/lib/metadata';

type ExperimentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return getExperiments().map((experiment) => ({ slug: experiment.slug }));
}

export async function generateMetadata({ params }: ExperimentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    return {};
  }

  return buildPageMetadata({
    title: experiment.title,
    description: experiment.summary,
    path: `/experiments/${experiment.slug}`,
    openGraphType: 'article',
  });
}

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    notFound();
  }

  return (
    <Container>
      <div className="py-12">
        <Link
          href="/experiments"
          className="font-mono text-xs tracking-widest text-ink-faint uppercase transition-colors hover:text-accent-rust"
        >
          ← Back to experiments
        </Link>
      </div>

      <div className="grid gap-12 pb-20 lg:grid-cols-[1fr_16rem] lg:gap-16">
        <article>
          <p className="font-mono text-xs tracking-widest text-ink-faint uppercase">The question</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{experiment.title}</h1>
          <p className="mt-5 max-w-prose text-xl leading-relaxed text-accent-rust">
            {experiment.question}
          </p>
          <p className="mt-6 max-w-prose text-lg text-ink-muted">{experiment.summary}</p>

          <div className="prose mt-12 max-w-prose prose-neutral prose-headings:font-serif prose-headings:font-normal prose-a:text-accent-rust">
            <MdxRenderer code={experiment.mdx} />
          </div>
        </article>

        <aside className="lg:sticky lg:top-12 lg:self-start">
          <dl className="space-y-8 text-sm">
            <div>
              <dt className="mb-3 font-mono text-xs tracking-widest text-ink-faint uppercase">
                Technologies
              </dt>
              <dd>
                <TechTags items={experiment.technologies} />
              </dd>
            </div>

            <div>
              <dt className="mb-3 font-mono text-xs tracking-widest text-ink-faint uppercase">
                Current state
              </dt>
              <dd className="space-y-1">
                <LabStatus status={experiment.status} />
                <p className="font-mono text-xs text-ink-faint">
                  {formatExperimentPeriod(experiment)}
                </p>
              </dd>
            </div>

            <div>
              <dt className="mb-3 font-mono text-xs tracking-widest text-ink-faint uppercase">
                Repository
              </dt>
              <dd className="text-ink-muted">
                {experiment.repository ? (
                  <Link
                    href={experiment.repository}
                    className="text-accent-rust underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View public repository
                  </Link>
                ) : (
                  <>
                    The repository is private. I can share selected code, architecture and a guided
                    walkthrough where appropriate.{' '}
                    <Link href="/contact" className="text-accent-rust underline underline-offset-4">
                      Request a walkthrough
                    </Link>
                  </>
                )}
              </dd>
            </div>

            {experiment.lastUpdated ? (
              <div>
                <dt className="mb-3 font-mono text-xs tracking-widest text-ink-faint uppercase">
                  Last investigated
                </dt>
                <dd className="text-ink-muted">{experiment.lastUpdated}</dd>
              </div>
            ) : null}
          </dl>
        </aside>
      </div>
    </Container>
  );
}
