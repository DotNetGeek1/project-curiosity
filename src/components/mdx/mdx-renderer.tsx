'use client';

import { MDXContent } from '@content-collections/mdx/react';

import { mdxComponents } from '@/components/mdx/mdx-components';

type MdxRendererProps = {
  code: string;
};

export function MdxRenderer({ code }: MdxRendererProps) {
  return <MDXContent code={code} components={mdxComponents} />;
}
