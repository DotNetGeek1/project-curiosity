import { allExperiments, allNotes, type Experiment, type Note } from 'content-collections';

export type { Experiment, Note };

export type ExperimentStatus = Experiment['status'];

/** A `##` heading lifted from the body, ready to anchor an in-page outline. */
export type ExperimentSection = Experiment['sections'][number];

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

/**
 * The state definitions from ADR-001 §7.2, quoted so a status badge says what it
 * actually means. ADR-001 §7.3 asks for maturity to be explained rather than
 * reduced to a decorative score, and a bare label is exactly such a score.
 */
export const experimentStatusDescriptions: Record<ExperimentStatus, string> = {
  exploring: 'The question is active and the approach remains uncertain.',
  prototype: 'A working proof exists, but it is not production-ready.',
  growing: 'The system is being actively extended.',
  shipped: 'The work is in real use.',
  paused: 'Useful learning exists, but active work has stopped.',
  dormant: 'Retained for future investigation.',
  abandoned: 'Deliberately stopped after the hypothesis failed or priorities changed.',
  'escaped-containment': 'Contained again, eventually. The logs are not reassuring.',
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

/**
 * The page header is not a `##` heading in the body, so the outline gains an
 * entry for it here and the page renders a landmark with the matching id.
 */
const OVERVIEW_SECTION: ExperimentSection = { id: 'overview', title: 'Overview' };

/** Builds the in-page outline: the header, then every top-level body section. */
export function getExperimentOutline(
  experiment: Pick<Experiment, 'sections'>
): ExperimentSection[] {
  // A body heading that already slugged to `overview` owns the id; duplicating
  // it would leave one of the two anchors pointing at the wrong element.
  const claimed = experiment.sections.some((section) => section.id === OVERVIEW_SECTION.id);

  return claimed ? [...experiment.sections] : [OVERVIEW_SECTION, ...experiment.sections];
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

/**
 * Renders a `YYYY-MM` front-matter month as "July 2026". The value is returned
 * untouched when it is not a plain month, so a more precise date an author writes
 * is shown as written rather than silently reinterpreted.
 */
export function formatExperimentMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);

  if (!match) {
    return value;
  }

  const month = Number(match[2]);

  if (month < 1 || month > 12) {
    return value;
  }

  return `${MONTH_NAMES[month - 1]} ${match[1]}`;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}
