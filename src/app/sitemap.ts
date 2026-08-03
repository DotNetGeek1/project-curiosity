import type { MetadataRoute } from 'next';

import { getExperiments, getNotes } from '@/lib/content';
import { canonicalUrl } from '@/lib/metadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/experiments', '/notes', '/about', '/contact'];

  return [
    ...staticRoutes.map((route) => ({
      url: canonicalUrl(route),
      lastModified: new Date(),
    })),
    ...getExperiments().map((experiment) => ({
      url: canonicalUrl(`/experiments/${experiment.slug}`),
      lastModified: new Date(),
    })),
    ...getNotes().map((note) => ({
      url: canonicalUrl(`/notes/${note.slug}`),
      lastModified: new Date(note.publishedAt),
    })),
  ];
}
