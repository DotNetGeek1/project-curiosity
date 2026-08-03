import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-10 text-sm text-ink-faint">
        <p className="font-mono text-xs tracking-widest uppercase">Engineering Notebook</p>
        <p>
          {siteConfig.name} ·{' '}
          <Link
            href={siteConfig.github}
            className="transition-colors hover:text-accent-rust"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </Link>
        </p>
      </Container>
    </footer>
  );
}
