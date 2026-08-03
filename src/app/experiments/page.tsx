import type { Metadata } from 'next';

import { Container } from '@/components/layout/container';
import { ExperimentCard } from '@/components/ui/experiment-card';
import { PageHeader } from '@/components/ui/page-header';
import { getExperiments } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experiments',
  description: 'Projects that began with a question, and what happened next.',
};

export default function ExperimentsPage() {
  const experiments = getExperiments();

  return (
    <Container>
      <PageHeader
        eyebrow="Engineering Notebook"
        title="Experiments"
        description="Each of these started with a question rather than a plan. The write-ups include the parts that did not work."
      />

      <section className="pb-16">
        {experiments.map((experiment, index) => (
          <ExperimentCard key={experiment.slug} experiment={experiment} index={index} />
        ))}
      </section>
    </Container>
  );
}
