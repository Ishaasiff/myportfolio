"use client";

import { useEffect, useRef } from "react";

/**
 * Custom "html tag" cursor that follows the pointer.
 * Replaces the `mousemove` handler from the original `script.js`.
 */
export function TagCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const media = window.matchMedia("(max-width: 1024px)");
    if (media.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 mix-blend-difference [filter:invert(1)] min-[1025px]:block"
      style={{
        backgroundImage: "url(/htmltag.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
}
