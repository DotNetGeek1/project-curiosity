import {
  experimentStatusDescriptions,
  formatExperimentMonth,
  type Experiment,
} from '@/lib/content';
import { TechTags } from '@/components/ui/tech-tags';
import { cn } from '@/lib/utils';

type ExperimentMetaProps = {
  experiment: Experiment;
  className?: string;
};

/**
 * The metadata rail beside an experiment (DSN-005 `MetadataList`). Technologies
 * are set as a plain list and themes as tags, so the two are told apart by
 * typography rather than by colour.
 */
export function ExperimentMeta({ experiment, className }: ExperimentMetaProps) {
  return (
    <dl className={cn('space-y-8', className)}>
      <div>
        <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase">Technologies</dt>
        <dd className="mt-3">
          <ul className="space-y-1 text-sm text-ink-muted">
            {experiment.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </dd>
      </div>

      {/*
       * The state is named once, in the header rail; repeating the label here
       * would just make a screen reader say it twice. This explains it instead,
       * which is what ADR-001 §7.3 asks of a maturity signal.
       */}
      <div>
        <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase">Status</dt>
        <dd className="mt-3 text-sm text-ink-muted">
          {experimentStatusDescriptions[experiment.status]}
        </dd>
      </div>

      {experiment.themes.length > 0 ? (
        <div>
          <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase">Key themes</dt>
          <dd className="mt-3">
            <TechTags items={experiment.themes} />
          </dd>
        </div>
      ) : null}

      {experiment.lastUpdated ? (
        <div>
          <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase">
            Last investigated
          </dt>
          <dd className="mt-3 text-sm text-ink-muted">
            {formatExperimentMonth(experiment.lastUpdated)}
          </dd>
        </div>
      ) : null}
    </dl>
  );
}
