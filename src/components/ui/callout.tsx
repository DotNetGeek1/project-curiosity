import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CalloutVariant = 'note' | 'warning' | 'insight';

const variantStyles: Record<CalloutVariant, string> = {
  note: 'border-l-accent-ink-blue',
  warning: 'border-l-accent-rust',
  insight: 'border-l-accent-moss',
};

const variantLabels: Record<CalloutVariant, string> = {
  note: 'Note',
  warning: 'Watch out',
  insight: 'What I learned',
};

type CalloutProps = {
  children: ReactNode;
  variant?: CalloutVariant;
  title?: string;
};

export function Callout({ children, variant = 'note', title }: CalloutProps) {
  return (
    <aside
      className={cn(
        'not-prose my-8 border-l-2 bg-paper-raised py-4 pr-4 pl-5',
        variantStyles[variant]
      )}
    >
      <p className="mb-2 font-mono text-xs tracking-widest text-ink-faint uppercase">
        {title ?? variantLabels[variant]}
      </p>
      <div className="space-y-3 text-ink-muted">{children}</div>
    </aside>
  );
}
