import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { primaryNav, siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
        <Link href="/" className="group">
          <span className="block font-serif text-lg leading-tight font-medium text-ink">
            {siteConfig.name}
          </span>
          <span className="font-mono text-xs tracking-widest text-ink-faint uppercase">
            {siteConfig.handle}
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-muted transition-colors hover:text-accent-rust"
                  {...(item.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
