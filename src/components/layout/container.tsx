import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** `wide` is for index layouts, `prose` for long-form reading. */
  width?: 'wide' | 'prose';
  /** `shell` applies site max-width and padding; `content` only constrains reading width inside the main column. */
  variant?: 'shell' | 'content';
};

export function Container({
  children,
  className,
  width = 'wide',
  variant = 'shell',
}: ContainerProps) {
  if (variant === 'content') {
    return (
      <div className={cn(width === 'prose' ? 'max-w-2xl' : undefined, className)}>{children}</div>
    );
  }

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
