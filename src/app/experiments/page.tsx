import type { Metadata } from 'next';

import { Container } from '@/components/layout/container';
import { ExperimentCard } from '@/components/ui/experiment-card';
import { PageHeader } from '@/components/ui/page-header';
import { getExperiments } from '@/lib/content';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Experiments',
  description:
    'Questions, prototypes and systems spanning product engineering, AI, knowledge graphs, games and speculative software architecture.',
  path: '/experiments',
});

export default function ExperimentsPage() {
  const experiments = getExperiments();

  return (
    <Container>
      <PageHeader
        eyebrow="Experiments"
        title="Questions I built things to answer"
        description="This is not a complete list of everything I have made. It is a curated set of projects where the engineering journey is more useful than a screenshot of the result: why I started, what I believed might work, what changed and what I learned."
      />

      <div className="-mt-8 max-w-2xl pb-12">
        <p className="text-ink-muted">
          Some experiments became working products. Some are still growing. Others answered enough
          of the question to be worth stopping.
        </p>
        <p className="mt-4 text-ink-muted">
          The technologies are included because they help explain decisions. They are not the
          organising principle. Start with whichever question catches your attention.
        </p>
      </div>

      <section aria-label="All experiments" className="pb-16">
        {experiments.map((experiment, index) => (
          <ExperimentCard key={experiment.slug} experiment={experiment} index={index} />
        ))}
      </section>
    </Container>
  );
}
