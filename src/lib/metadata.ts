import type { Metadata } from 'next';

import { siteConfig } from '@/lib/site-config';

type PageMetadataInput = {
  /** Page title without the site suffix. Omit for the site root. */
  title?: string;
  description: string;
  /** Route path, e.g. `/experiments` or `/` for the site root. */
  path: string;
  openGraphType?: 'website' | 'article';
};

/**
 * The static export is built with `trailingSlash: true`, so canonical and
 * Open Graph URLs must carry the trailing slash to match the served page.
 */
export function canonicalUrl(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = withLeadingSlash.endsWith('/')
    ? withLeadingSlash
    : `${withLeadingSlash}/`;

  return `${siteConfig.url}${withTrailingSlash}`;
}

/**
 * Builds the metadata every published route needs: a unique title and
 * description, a canonical URL and matching Open Graph tags. The Next.js title
 * template is not applied to Open Graph, so the suffix is added here.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  openGraphType = 'website',
}: PageMetadataInput): Metadata {
  const url = canonicalUrl(path);
  const socialTitle = title ? `${title} — ${siteConfig.siteName}` : siteConfig.title;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: openGraphType,
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  };
}
