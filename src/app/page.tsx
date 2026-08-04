import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { ExperimentCard } from '@/components/ui/experiment-card';
import { getExperiments } from '@/lib/content';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildPageMetadata({
  description: siteConfig.description,
  path: '/',
});

const currentObsessions = [
  'agent workflows that are useful rather than theatrical',
  'symbolic reasoning alongside language and diffusion models',
  'temporal knowledge graphs',
  'developer tools that remove repetitive coordination',
  'Rust and low-level systems design',
  'the relationship between physics, emergence and software systems',
];

export default function HomePage() {
  const experiments = getExperiments();

  return (
    <Container variant="content">
      <section className="grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-14">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Things I<br />
            Wondered About
          </h1>
          <div className="mt-8 h-px w-16 bg-accent-rust" />
          <p className="mt-8 text-lg text-ink-muted">Most of my projects begin with a question.</p>
          <p className="mt-4 text-lg text-ink-muted">
            Sometimes it starts with a problem that keeps getting in the way. Sometimes it is a
            technology I want to understand properly. Occasionally it is a slightly unreasonable
            idea that I cannot leave alone until I have built enough of it to find out whether it
            works.
          </p>
          <p className="mt-4 text-lg text-ink-muted">
            This is where I document those experiments: what prompted them, what I tried, what
            failed, what changed my mind and what I learned along the way.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/experiments"
              className="rounded-xs bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-rust"
            >
              Explore the experiments
            </Link>
            <Link href="/about" className="text-sm text-accent-rust underline underline-offset-4">
              How I ended up here
            </Link>
          </div>
        </div>

        {/* Decorative: the fragments repeat what the prose alongside already says,
                so it carries no alt text. It appears only where there is width to
                spare; on narrower screens the question and the actions matter more. */}
        <Image
          src="/images/home/notebook-collage.webp"
          alt=""
          width={797}
          height={512}
          priority
          sizes="(min-width: 1024px) 30rem, 100vw"
          className="hidden h-auto w-full lg:block"
        />
      </section>

      <section aria-labelledby="experiments-heading" className="border-t border-rule pt-16 pb-8">
        <div className="max-w-2xl">
          <h2 id="experiments-heading" className="font-serif text-3xl leading-tight">
            Questions I kept pulling at
          </h2>
          <p className="mt-5 text-ink-muted">
            These projects span product engineering, AI, knowledge graphs, games, systems
            programming and a few ideas that probably should have remained safely theoretical.
          </p>
          <p className="mt-4 text-ink-muted">
            They are connected less by technology than by the way they started: I noticed something,
            wondered whether it could work differently and built enough to find out.
          </p>
        </div>
        <div className="mt-10">
          {experiments.map((experiment, index) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} index={index} />
          ))}
        </div>
      </section>

      <section aria-labelledby="working-style-heading" className="border-t border-rule py-16">
        <div className="max-w-2xl">
          <h2 id="working-style-heading" className="font-serif text-3xl leading-tight">
            How I tend to work
          </h2>
          <p className="mt-5 text-ink-muted">
            I am usually at my best when the answer is not obvious yet.
          </p>
          <p className="mt-4 text-ink-muted">
            I like taking a loose problem, turning it into something testable and building the first
            working version. That might mean a technical spike, a reference implementation, a
            reusable platform component or a small tool that removes friction for everyone else.
          </p>
          <p className="mt-4 text-ink-muted">
            I have led engineering teams, but I have always remained hands-on. I enjoy moving
            between product questions, architecture, application code, cloud infrastructure and
            whatever unfamiliar area the problem happens to require.
          </p>
          <p className="mt-8 font-serif text-xl text-ink">
            I learn by building, and I build because I am curious.
          </p>
        </div>
      </section>

      <section aria-labelledby="obsessions-heading" className="border-t border-rule py-16">
        <div className="max-w-2xl">
          <h2 id="obsessions-heading" className="font-serif text-3xl leading-tight">
            Currently investigating
          </h2>
          <p className="mt-5 text-ink-muted">
            A changing list of things I am pulling apart, joining together or attempting to
            understand properly.
          </p>
        </div>
        <ul className="mt-8 max-w-2xl space-y-3">
          {currentObsessions.map((item) => (
            <li key={item} className="flex items-baseline gap-4 text-ink-muted">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent-rust" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="closing-heading" className="border-t border-rule py-16">
        <div className="max-w-2xl">
          <h2 id="closing-heading" className="font-serif text-3xl leading-tight">
            The code is only part of the story
          </h2>
          <p className="mt-5 text-ink-muted">
            Some of these projects have public repositories. Others are private, incomplete or
            contain work that needs a guided explanation to be useful.
          </p>
          <p className="mt-4 text-ink-muted">
            Where I can share source code, I will. Where I cannot, I will show the decisions,
            diagrams, prototypes and lessons that explain the engineering behind it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/experiments"
              className="rounded-xs bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent-rust"
            >
              Read the experiment notes
            </Link>
            <Link
              href={siteConfig.github}
              className="text-sm text-accent-rust underline underline-offset-4"
              target="_blank"
              rel="noreferrer noopener"
            >
              View my GitHub
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
