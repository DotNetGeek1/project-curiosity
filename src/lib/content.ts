import { allExperiments, allNotes, type Experiment, type Note } from 'content-collections';

export type { Experiment, Note };

export type ExperimentStatus = Experiment['status'];

/** Public labels for the canonical lifecycle states defined in CNT-001. */
export const experimentStatusLabels: Record<ExperimentStatus, string> = {
  exploring: 'Exploring',
  prototype: 'Prototype',
  growing: 'Growing',
  shipped: 'Shipped',
  paused: 'Paused',
  dormant: 'Dormant',
  abandoned: 'Abandoned',
  'escaped-containment': 'Escaped containment',
};

const byOrder = (a: Experiment, b: Experiment): number => a.order - b.order;

const byNewest = (a: Note, b: Note): number => b.publishedAt.localeCompare(a.publishedAt);

export function getExperiments(): Experiment[] {
  return [...allExperiments].sort(byOrder);
}

export function getFeaturedExperiments(): Experiment[] {
  return getExperiments().filter((experiment) => experiment.featured);
}

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return allExperiments.find((experiment) => experiment.slug === slug);
}

export function getNotes(): Note[] {
  const published = allNotes.filter((note) => !note.draft || isDevelopment());
  return published.sort(byNewest);
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getNotes().find((note) => note.slug === slug);
}

/** Formats an experiment's active period, e.g. "2023 – Present". */
export function formatExperimentPeriod(
  experiment: Pick<Experiment, 'startYear' | 'endYear'>
): string {
  if (experiment.endYear === undefined) {
    return `${experiment.startYear} – Present`;
  }

  if (experiment.endYear === experiment.startYear) {
    return `${experiment.startYear}`;
  }

  return `${experiment.startYear} – ${experiment.endYear}`;
}

function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}
