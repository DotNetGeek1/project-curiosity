import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ExperimentMeta } from '@/components/experiment/experiment-meta';
import { RepositoryAccess } from '@/components/experiment/repository-access';
import { SectionNav } from '@/components/experiment/section-nav';
import { Container } from '@/components/layout/container';
import { MdxRenderer } from '@/components/mdx/mdx-renderer';
import { LabStatus } from '@/components/ui/lab-status';
import {
  formatExperimentPeriod,
  getExperimentBySlug,
  getExperimentOutline,
  getExperiments,
} from '@/lib/content';
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

  const outline = getExperimentOutline(experiment);

  return (
    <Container variant="content">
      {/*
       * `data-spine="hidden"` asks MainContent to drop the notebook spine and
       * relax the shell width: with two sticky rails flanking the prose, the
       * reading column needs the space more than the bound edge does.
       */}
      <div
        data-spine="hidden"
        className="grid gap-12 py-10 lg:grid-cols-[12rem_minmax(0,1fr)_12rem] lg:gap-8 xl:grid-cols-[13rem_minmax(0,1fr)_14rem] xl:gap-12"
      >
        {/*
         * The experiment header of UX-003 §1 — name, state, period, outline and
         * repository visibility — set as a rail so the reading column can open on
         * the question instead of on metadata. It scrolls internally rather than
         * growing past the viewport, which DSN-004 requires of sticky elements.
         */}
        <div className="lg:sticky lg:top-8 lg:flex lg:max-h-[calc(100vh-4rem)] lg:flex-col lg:self-start">
          <Link
            href="/experiments"
            className="font-mono text-xs tracking-widest text-ink-faint uppercase transition-colors hover:text-accent-rust"
          >
            ← Back to experiments
          </Link>

          <div className="mt-6 border-t-2 border-accent-rust pt-4">
            <h1 className="font-serif text-2xl leading-tight xl:text-3xl">{experiment.title}</h1>
            <LabStatus
              status={experiment.status}
              className="mt-2 font-mono text-xs tracking-widest text-accent-rust uppercase"
            />
            <p className="mt-1 font-mono text-xs text-ink-faint">
              {formatExperimentPeriod(experiment)}
            </p>
          </div>

          {/*
           * Only the outline scrolls when the rail runs out of room, so the
           * repository note below it cannot be clipped out of sight on a short
           * viewport.
           */}
          <SectionNav sections={outline} className="mt-6 lg:min-h-0 lg:flex-1 lg:overflow-y-auto" />

          <RepositoryAccess repository={experiment.repository} className="mt-6 lg:shrink-0" />
        </div>

        <article className="min-w-0">
          <header id="overview" className="scroll-mt-24">
            <p className="font-serif text-lg text-ink-faint italic">I wondered if...</p>
            <p className="mt-3 font-serif text-3xl leading-snug text-ink sm:text-4xl">
              {experiment.question}
            </p>
            <p className="mt-6 max-w-prose text-lg text-ink-muted">{experiment.summary}</p>
          </header>

          <div className="prose mt-12 max-w-prose prose-neutral prose-headings:scroll-mt-24 prose-headings:font-serif prose-headings:font-normal prose-a:text-accent-rust">
            <MdxRenderer code={experiment.mdx} />
          </div>
        </article>

        <aside
          aria-label="Experiment details"
          className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:self-start lg:overflow-y-auto lg:pb-4"
        >
          <ExperimentMeta experiment={experiment} />
        </aside>
      </div>
    </Container>
  );
}
