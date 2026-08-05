import type { ReactNode } from 'react';

import { NotebookSpine } from '@/components/layout/notebook-spine';
import { siteConfig } from '@/lib/site-config';

/**
 * Pages that need the full shell width — currently the three-column experiment
 * reading layout — opt out of the spine by rendering `data-spine="hidden"`.
 * The layout reacts with `:has()` so the choice stays with the page while the
 * spine itself stays in one place; no client-side route sniffing required.
 */
export function MainContent({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:has-[[data-spine=hidden]]:max-w-7xl">
      <div className="group/shell lg:grid lg:grid-cols-[2.5rem_minmax(0,1fr)] lg:gap-10 lg:has-[[data-spine=hidden]]:grid-cols-[minmax(0,1fr)]">
        <NotebookSpine
          label={siteConfig.notebookSpineLabel}
          className="lg:group-has-[[data-spine=hidden]]/shell:hidden"
        />
        <div>{children}</div>
      </div>
    </div>
  );
}
