import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX, type Options as MdxOptions } from '@content-collections/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';
import { z } from 'zod';

const EXPERIMENT_STATUSES = ['active', 'experimental', 'shipped', 'paused'] as const;

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
