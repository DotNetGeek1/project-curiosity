import type { ReactNode } from 'react';

import { NotebookSpine } from '@/components/layout/notebook-spine';
import { siteConfig } from '@/lib/site-config';

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div className="lg:grid lg:grid-cols-[2.5rem_minmax(0,1fr)] lg:gap-10">
        <NotebookSpine label={siteConfig.notebookSpineLabel} />
        <div>{children}</div>
      </div>
    </div>
  );
}
