import { cn } from '@/lib/utils';

type NotebookSpineProps = {
  label: string;
  className?: string;
};

/**
 * The bound edge of the notebook: a hairline rule down the left of the page with
 * the label turned to read up it. The label stays real text rather than becoming
 * an image, so it survives zoom and reaches assistive technology; only the
 * rotation is decorative. Below `lg` there is no margin to spare, so the edge is
 * dropped rather than folded into the reading column.
 */
export function NotebookSpine({ label, className }: NotebookSpineProps) {
  return (
    <div className={cn('relative hidden lg:block', className)}>
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-rule" />
      <div className="sticky top-48 flex justify-center">
        <p className="rotate-180 font-mono text-xs tracking-[0.2em] text-ink-faint uppercase [writing-mode:vertical-rl]">
          {label}
        </p>
      </div>
    </div>
  );
}
