import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/ui/page-header';
import { getNotes } from '@/lib/content';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Research Notes',
  description:
    'Shorter observations, technical investigations and lessons connected to ongoing engineering experiments.',
  path: '/notes',
});

export default function NotesPage() {
  const notes = getNotes();

  return (
    <Container>
      <PageHeader
        eyebrow="Engineering Notebook"
        title="Research notes"
        description="Shorter pieces. Half-formed ideas, reading notes and things I want to remember."
      />

      <section className="pb-16">
        {notes.map((note) => (
          <article key={note.slug} className="group border-t border-rule py-8">
            <p className="font-mono text-xs text-ink-faint">{note.publishedAt}</p>
            <h2 className="mt-2 font-serif text-2xl">
              <Link
                href={`/notes/${note.slug}`}
                className="transition-colors group-hover:text-accent-rust"
              >
                {note.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-prose text-ink-muted">{note.summary}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}
