import Link from 'next/link';

import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <Container width="prose">
      <div className="py-28">
        <p className="font-mono text-xs tracking-widest text-ink-faint uppercase">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight">This experiment does not exist.</h1>
        <p className="mt-5 text-ink-muted">Not every idea makes it out of the notebook.</p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm text-accent-rust underline underline-offset-4"
        >
          Back to the beginning
        </Link>
      </div>
    </Container>
  );
}
