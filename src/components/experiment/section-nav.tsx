'use client';

import { useEffect, useRef, useState } from 'react';

import type { ExperimentSection } from '@/lib/content';
import { cn } from '@/lib/utils';

/** Distance from the viewport top at which a section becomes the current one. */
const ACTIVE_OFFSET = 140;

type SectionNavProps = {
  sections: readonly ExperimentSection[];
  className?: string;
};

/**
 * The outline of a long experiment page (UX-003 "In-Page Navigation").
 *
 * The links are ordinary anchors, so the outline still navigates the page with
 * scripting unavailable; DSN-005 makes current-section highlighting progressive
 * enhancement, so the active marker is the only part that needs the client.
 */
export function SectionNav({ sections, className }: SectionNavProps) {
  const activeId = useActiveSection(sections);
  const outlineRef = useCollapsedOnNarrowViewports();

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Sections" className={className}>
      <details ref={outlineRef} open>
        <summary className="cursor-pointer py-1.5 font-mono text-xs tracking-widest text-ink-faint uppercase lg:hidden">
          Sections
        </summary>

        <ul className="mt-2 space-y-px border-l border-rule lg:mt-0">
          {sections.map((section) => {
            const active = section.id === activeId;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    // The active item is marked by weight and an inset rule as well
                    // as colour, so state never rests on colour alone.
                    '-ml-px block border-l-2 py-1.5 pl-3 text-sm transition-colors',
                    active
                      ? 'border-accent-rust bg-paper-raised font-medium text-ink'
                      : 'border-transparent text-ink-muted hover:border-rule hover:text-ink'
                  )}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </nav>
  );
}

/**
 * Collapses the outline on narrow viewports, where a full list of sections would
 * push the narrative most of a screen down the page. UX-RULES §10 allows either
 * an inline outline or a disclosure here.
 *
 * The markup ships open so that the outline is still a readable inline list when
 * scripting is unavailable; only the collapsing is conditional, which keeps the
 * no-JavaScript case useful rather than hiding the sections behind a summary
 * nothing can open.
 */
function useCollapsedOnNarrowViewports() {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const outline = ref.current;

    if (!outline) {
      return;
    }

    const narrow = window.matchMedia('(max-width: 63.999rem)');

    const collapse = () => {
      if (narrow.matches) {
        outline.open = false;
      }
    };

    collapse();
    narrow.addEventListener('change', collapse);

    return () => narrow.removeEventListener('change', collapse);
  }, []);

  return ref;
}

/**
 * Tracks the heading the reader has most recently scrolled past.
 *
 * This reads positions on scroll rather than using an IntersectionObserver band,
 * because a band leaves the outline with no active item whenever a long section
 * pushes every heading out of it.
 */
function useActiveSection(sections: readonly ExperimentSection[]): string | undefined {
  const [activeId, setActiveId] = useState<string>();

  // Keyed on the ids rather than the array, which is rebuilt on every render of
  // the server component above and would otherwise resubscribe endlessly.
  const sectionKey = sections.map((section) => section.id).join('|');

  useEffect(() => {
    const targets = sectionKey
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const [first] = targets;

    if (!first) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      // Above the first heading nothing has been scrolled past yet, so the first
      // section stays current rather than the outline showing no position at all.
      let current = first;

      for (const target of targets) {
        if (target.getBoundingClientRect().top > ACTIVE_OFFSET) {
          break;
        }

        current = target;
      }

      setActiveId(current.id);
    };

    const schedule = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [sectionKey]);

  return activeId;
}
