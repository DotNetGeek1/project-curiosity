import Link from 'next/link';

import { cn } from '@/lib/utils';

type RepositoryAccessProps = {
  repository?: string;
  className?: string;
};

/**
 * The repository visibility note required by UX-003, using the approved wording
 * in docs/content/launch/GLOBAL-COPY.md. It offers a walkthrough rather than
 * access, because UX-RULES §15 forbids implying that private code can be handed
 * over on request.
 */
export function RepositoryAccess({ repository, className }: RepositoryAccessProps) {
  return (
    <aside
      aria-labelledby={HEADING_ID}
      className={cn('border border-rule bg-paper-raised p-4', className)}
    >
      <h2 id={HEADING_ID} className="font-mono text-xs tracking-widest text-ink-faint uppercase">
        Repository
      </h2>

      {repository ? (
        <>
          <p className="mt-3 text-sm text-ink-muted">
            The source code for this experiment is public.
          </p>
          <Link
            href={repository}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block border border-ink px-3 py-2 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View public repository
          </Link>
        </>
      ) : (
        <>
          <p className="mt-3 text-sm text-ink-muted">
            The repository is private. I can share selected code, architecture and a guided
            walkthrough where appropriate.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block bg-accent-moss px-3 py-2 text-sm text-paper transition-colors hover:bg-ink"
          >
            Request a walkthrough
          </Link>
        </>
      )}
    </aside>
  );
}

/** Names the complementary landmark, so it is told apart from the metadata rail. */
const HEADING_ID = 'repository-visibility';
