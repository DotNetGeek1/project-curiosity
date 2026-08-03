import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX, type Options as MdxOptions } from '@content-collections/mdx';
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
