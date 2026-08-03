import type { MetadataRoute } from 'next';

import { getExperiments, getNotes } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/experiments', '/notes', '/about', '/contact'];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...getExperiments().map((experiment) => ({
      url: `${siteConfig.url}/experiments/${experiment.slug}`,
      lastModified: new Date(),
    })),
    ...getNotes().map((note) => ({
      url: `${siteConfig.url}/notes/${note.slug}`,
      lastModified: new Date(note.publishedAt),
    })),
  ];
}
