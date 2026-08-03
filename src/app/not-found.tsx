import Link from 'next/link';

import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <Container width="prose">
      <div className="py-28">
        <p className="font-mono text-xs tracking-widest text-ink-faint uppercase">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight">I could not find that page.</h1>
        <p className="mt-5 text-ink-muted">
          It may have moved, changed name or escaped containment.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link href="/" className="text-sm text-accent-rust underline underline-offset-4">
            Return home
          </Link>
          <Link
            href="/experiments"
            className="text-sm text-accent-rust underline underline-offset-4"
          >
            Back to experiments
          </Link>
        </div>
      </div>
    </Container>
  );
}
