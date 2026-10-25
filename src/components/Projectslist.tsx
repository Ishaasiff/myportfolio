"use client";

import { useId, useRef, useState, type PointerEvent } from "react";
import type { Project } from "@/data/projects";

/**
 * A text-only, editorial list of projects. Each project is one large row;
 * opening it reveals the full story: the description on one side and the
 * purpose on the other, with a huge outlined number behind. One row is open
 * at a time, a burgundy light follows the cursor, and everything is operable
 * with the keyboard.
 */
export function ProjectsList({ projects }: { projects: readonly Project[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);
  const listRef = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const list = listRef.current;
    if (!list) return;
    const rect = list.getBoundingClientRect();
    list.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    list.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={listRef}
      onPointerMove={handleMove}
      className="group/list relative border-t border-white/10"
    >
      {/* Cursor light behind the rows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/list:opacity-100 motion-reduce:hidden bg-[radial-gradient(440px_circle_at_var(--mx,50%)_var(--my,50%),rgba(128,0,32,0.2),transparent_70%)]"
      />

      {projects.map((project, index) => {
        const isOpen = index === open;
        const number = String(index + 1).padStart(2, "0");
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={project.id} className="relative border-b border-white/10">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="grid w-full cursor-pointer grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-6 text-left outline-none focus-visible:bg-white/5 md:grid-cols-[5rem_1fr_auto] md:py-8"
              >
                <span
                  className={`font-display text-xl font-bold tabular-nums transition-colors duration-500 motion-reduce:transition-none md:text-2xl ${
                    isOpen
                      ? "text-burgundy"
                      : "text-transparent opacity-50 [-webkit-text-stroke:1px_var(--color-cream)]"
                  }`}
                >
                  {number}
                </span>

                <span
                  className={`font-display text-lg font-bold leading-[1.15] tracking-[-0.01em] transition-[color,transform] duration-500 ease-out motion-reduce:transition-none md:text-2xl ${
                    isOpen
                      ? "translate-x-1 text-cream"
                      : "text-cream/40 hover:text-cream/80"
                  }`}
                >
                  {project.title}
                </span>

                <span
                  aria-hidden="true"
                  className={`relative h-9 w-9 shrink-0 rounded-full border transition-[transform,border-color,box-shadow] duration-500 motion-reduce:transition-none ${
                    isOpen
                      ? "rotate-45 border-burgundy shadow-[0_0_20px_rgba(128,0,32,0.7)]"
                      : "border-white/20"
                  }`}
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-cream" />
                  <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-cream" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="relative overflow-hidden">
                {/* Giant outlined number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 right-0 select-none font-display text-[clamp(120px,18vw,260px)] font-bold leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_rgba(128,0,32,0.4)]"
                >
                  {number}
                </span>

                <div
                  className={`relative grid gap-8 pb-10 md:pl-20 ${
                    project.purpose ? "lg:grid-cols-[7fr_5fr] lg:gap-14" : ""
                  }`}
                >
                  <div className="max-w-[62ch] space-y-4 font-body text-base leading-relaxed text-muted">
                    {project.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {project.purpose ? (
                    <div className="self-start border-l-2 border-burgundy pl-5 shadow-[-8px_0_16px_-10px_rgba(128,0,32,0.9)]">
                      <h4 className="font-display text-base font-semibold text-cream">
                        {project.purpose.heading}
                      </h4>
                      <p className="mt-2 font-body text-base leading-relaxed text-muted">
                        {project.purpose.text}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Neon rule draws in under the open project */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-px left-0 h-[2px] w-full origin-left bg-[linear-gradient(to_right,#800020,transparent)] shadow-[0_0_20px_rgba(128,0,32,0.55)] transition-transform duration-700 ease-out motion-reduce:transition-none ${
                isOpen ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}