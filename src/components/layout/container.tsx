import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** `wide` is for index layouts, `prose` for long-form reading. */
  width?: 'wide' | 'prose';
};

export function Container({ children, className, width = 'wide' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8',
        width === 'wide' ? 'max-w-6xl' : 'max-w-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}
