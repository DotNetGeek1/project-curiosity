import { describe, expect, it } from 'vitest';

import { buildPageMetadata, canonicalUrl } from '@/lib/metadata';
import { siteConfig } from '@/lib/site-config';

describe('canonicalUrl', () => {
  it('matches the trailing-slash routing of the static export', () => {
    expect(canonicalUrl('/experiments')).toBe(`${siteConfig.url}/experiments/`);
    expect(canonicalUrl('/experiments/chronos')).toBe(`${siteConfig.url}/experiments/chronos/`);
  });

  it('resolves the site root to a single trailing slash', () => {
    expect(canonicalUrl('/')).toBe(`${siteConfig.url}/`);
  });
});

describe('buildPageMetadata', () => {
  it('gives a page a canonical URL and matching Open Graph URL', () => {
    const metadata = buildPageMetadata({
      title: 'Chronos',
      description: 'A temporal knowledge graph.',
      path: '/experiments/chronos',
      openGraphType: 'article',
    });

    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/experiments/chronos/`);
    expect(metadata.openGraph).toMatchObject({
      type: 'article',
      url: `${siteConfig.url}/experiments/chronos/`,
      siteName: siteConfig.siteName,
    });
  });

  it('applies the site suffix to social titles because the template does not reach them', () => {
    const metadata = buildPageMetadata({
      title: 'Chronos',
      description: 'A temporal knowledge graph.',
      path: '/experiments/chronos',
    });

    expect(metadata.title).toBe('Chronos');
    expect(metadata.openGraph?.title).toBe(`Chronos — ${siteConfig.siteName}`);
  });

  it('falls back to the site title when a page has no title of its own', () => {
    const metadata = buildPageMetadata({ description: siteConfig.description, path: '/' });

    expect(metadata.title).toBeUndefined();
    expect(metadata.openGraph?.title).toBe(siteConfig.title);
  });
});
