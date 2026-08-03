import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { siteConfig } from '@/lib/site-config';

const footerLinks = [
  { label: 'Experiments', href: '/experiments' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <Container className="flex flex-wrap items-start justify-between gap-6 py-10 text-sm text-ink-faint">
        <div>
          <p>Built as an engineering notebook, not a conventional portfolio.</p>
          <p className="mt-1">
            Questions, prototypes, systems and the occasional containment failure.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent-rust">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={siteConfig.github}
                className="transition-colors hover:text-accent-rust"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
