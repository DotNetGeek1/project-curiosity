import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX, type Options as MdxOptions } from '@content-collections/mdx';
import GithubSlugger from 'github-slugger';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';
import { z } from 'zod';

/**
 * Canonical experiment lifecycle states from ADR-001 §7.2 and
 * docs/content/CNT-001-EXPERIMENT-SCHEMA.md. The front-matter key is `status`;
 * the values are the accepted `state` vocabulary. `escaped-containment` is
 * deliberately exceptional and reserved for Morris.
 */
export const EXPERIMENT_STATUSES = [
  'exploring',
  'prototype',
  'growing',
  'shipped',
  'paused',
  'dormant',
  'abandoned',
  'escaped-containment',
] as const;

// rehype-slug gives every heading a stable id so sections stay deep-linkable
// without wrapping headings in visible anchors.
const mdxOptions: MdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeSlug],
};

const HEADING = /^(#{1,6})\s+(.+?)\s*#*$/;
const FENCE = /^\s{0,3}(?:```|~~~)/;

/**
 * Rebuilds the top-level section outline from the raw body so the in-page
 * navigation can be server-rendered rather than scraped from the DOM.
 *
 * It deliberately walks every heading level through one `GithubSlugger`, because
 * rehype-slug dedupes ids across the whole document: skipping the deeper
 * headings would drift the `-1` suffixes and produce anchors that resolve to
 * nothing. Only `##` headings are collected — `###` is detail within a section.
 */
function extractSections(content: string): Array<{ id: string; title: string }> {
  const slugger = new GithubSlugger();
  const sections: Array<{ id: string; title: string }> = [];
  let insideFence = false;

  for (const line of content.split(/\r?\n/)) {
    if (FENCE.test(line)) {
      insideFence = !insideFence;
      continue;
    }

    if (insideFence) {
      continue;
    }

    const heading = HEADING.exec(line);

    if (!heading) {
      continue;
    }

    const [, hashes = '', text = ''] = heading;
    // Approximates the plain text mdast would produce for the heading.
    const title = text.replace(/[*_`]/g, '').trim();
    const id = slugger.slug(title);

    if (hashes.length === 2) {
      sections.push({ id, title });
    }
  }

  return sections;
}

const experiments = defineCollection({
  name: 'experiments',
  directory: 'content/experiments',
  include: '**/*.mdx',
  schema: z.object({
    content: z.string(),
    title: z.string().min(1),
    /** The "I wondered if..." line that opens every experiment. */
    question: z.string().min(1),
    summary: z.string().min(1),
    status: z.enum(EXPERIMENT_STATUSES),
    technologies: z.array(z.string()).min(1),
    /**
     * Problem areas or engineering disciplines per CNT-001, not a second list of
     * dependencies. Optional because a stub is publishable without them.
     */
    themes: z.array(z.string()).default([]),
    startYear: z.number().int(),
    endYear: z.number().int().optional(),
    featured: z.boolean().default(false),
    order: z.number().int(),
    repository: z.string().url().optional(),
    repositoryPrivate: z.boolean().default(false),
    lastUpdated: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);

    return {
      ...document,
      mdx,
      slug: document._meta.path,
      sections: extractSections(document.content),
      readingTime: Math.ceil(readingTime(document.content).minutes),
    };
  },
});

const notes = defineCollection({
  name: 'notes',
  directory: 'content/notes',
  include: '**/*.mdx',
  schema: z.object({
    content: z.string(),
    title: z.string().min(1),
    summary: z.string().min(1),
    publishedAt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);

    return {
      ...document,
      mdx,
      slug: document._meta.path,
      readingTime: Math.ceil(readingTime(document.content).minutes),
    };
  },
});

export default defineConfig({
  content: [experiments, notes],
});
