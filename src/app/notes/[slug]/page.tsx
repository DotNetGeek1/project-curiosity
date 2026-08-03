import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@/components/layout/container';
import { MdxRenderer } from '@/components/mdx/mdx-renderer';
import { getNoteBySlug, getNotes } from '@/lib/content';

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <Container width="prose">
      <div className="py-12">
        <Link
          href="/notes"
          className="font-mono text-xs tracking-widest text-ink-faint uppercase transition-colors hover:text-accent-rust"
        >
          ← All notes
        </Link>
      </div>

      <article className="pb-20">
        <p className="font-mono text-xs text-ink-faint">
          {note.publishedAt} · {note.readingTime} min read
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight">{note.title}</h1>

        <div className="prose mt-10 max-w-none prose-neutral prose-headings:font-serif prose-headings:font-normal prose-a:text-accent-rust">
          <MdxRenderer code={note.mdx} />
        </div>
      </article>
    </Container>
  );
}
