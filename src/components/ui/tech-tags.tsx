import { cn } from '@/lib/utils';

type TechTagsProps = {
  items: readonly string[];
  className?: string;
};

export function TechTags({ items, className }: TechTagsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xs border border-rule px-2 py-0.5 font-mono text-xs text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
