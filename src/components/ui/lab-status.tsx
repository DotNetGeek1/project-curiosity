import { experimentStatusLabels, type ExperimentStatus } from '@/lib/content';
import { cn } from '@/lib/utils';

const statusDotColour: Record<ExperimentStatus, string> = {
  exploring: 'bg-accent-rust',
  prototype: 'bg-accent-ochre',
  growing: 'bg-accent-moss',
  shipped: 'bg-accent-ink-blue',
  paused: 'bg-ink-faint',
  dormant: 'bg-rule',
  abandoned: 'bg-ink',
  'escaped-containment': 'bg-accent-clay',
};

type LabStatusProps = {
  status: ExperimentStatus;
  className?: string;
};

export function LabStatus({ status, className }: LabStatusProps) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-sm text-ink-muted', className)}>
      <span
        aria-hidden="true"
        className={cn('size-2 shrink-0 rounded-full', statusDotColour[status])}
      />
      {experimentStatusLabels[status]}
    </span>
  );
}
