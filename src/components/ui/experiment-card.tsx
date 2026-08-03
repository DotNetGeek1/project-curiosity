import Link from 'next/link';

import { LabStatus } from '@/components/ui/lab-status';
import { TechTags } from '@/components/ui/tech-tags';
import { formatExperimentPeriod, type Experiment } from '@/lib/content';

type ExperimentCardProps = {
  experiment: Experiment;
  index: number;
};

export function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const href = `/experiments/${experiment.slug}`;
  const indexLabel = String(index + 1).padStart(2, '0');

  return (
    <article className="group border-t border-rule py-8">
      <div className="grid gap-6 md:grid-cols-[3rem_1fr_14rem] md:gap-8">
        <p aria-hidden="true" className="font-mono text-sm text-ink-faint">
          {indexLabel}
        </p>

        <div className="space-y-3">
          <h3 className="font-serif text-2xl leading-tight">
            <Link href={href} className="transition-colors group-hover:text-accent-rust">
              {experiment.title}
            </Link>
          </h3>
          <p className="max-w-prose text-sm text-accent-rust">{experiment.question}</p>
          <p className="max-w-prose text-ink-muted">{experiment.summary}</p>
          <TechTags items={experiment.technologies} className="pt-1" />
        </div>

        <div className="space-y-2 md:text-right">
          <LabStatus status={experiment.status} />
          <p className="font-mono text-xs text-ink-faint">{formatExperimentPeriod(experiment)}</p>
        </div>
      </div>
    </article>
  );
}
