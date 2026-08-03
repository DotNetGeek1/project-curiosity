import type { ReactNode } from 'react';

type QuoteProps = {
  children: ReactNode;
  attribution?: string;
};

export function Quote({ children, attribution }: QuoteProps) {
  return (
    <figure className="my-10 border-l-2 border-l-rule pl-6">
      <blockquote className="font-serif text-xl leading-relaxed text-ink">{children}</blockquote>
      {attribution ? (
        <figcaption className="mt-3 font-mono text-xs text-ink-faint">— {attribution}</figcaption>
      ) : null}
    </figure>
  );
}
