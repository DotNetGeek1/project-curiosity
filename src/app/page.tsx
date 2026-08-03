import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { ExperimentCard } from '@/components/ui/experiment-card';
import { getExperiments } from '@/lib/content';

export default function HomePage() {
  const experiments = getExperiments();

  return (
    <Container>
      <section className="max-w-2xl py-20 sm:py-28">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Things I<br />
          wondered about.
        </h1>
        <div className="mt-8 h-px w-16 bg-accent-rust" />
        <p className="mt-8 text-lg text-ink-muted">
          I build software to explore difficult problems across engineering, AI, physics and complex
          systems.
        </p>
        <p className="mt-4 text-lg text-ink-muted">
          Most of the projects here began with a question, an irritation or an idea I could not
          leave alone.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/experiments"
            className="rounded-xs bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-rust"
          >
            Explore the projects
          </Link>
          <Link href="/about" className="text-sm text-accent-rust underline underline-offset-4">
            About how I work
          </Link>
        </div>
      </section>

      <section aria-labelledby="experiments-heading" className="pb-16">
        <h2 id="experiments-heading" className="sr-only">
          Experiments
        </h2>
        {experiments.map((experiment, index) => (
          <ExperimentCard key={experiment.slug} experiment={experiment} index={index} />
        ))}
      </section>
    </Container>
  );
}
