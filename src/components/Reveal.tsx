"use client";

import { type ElementType, type ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds, before the element animates in. */
  delay?: number;
  /** Element to render. Defaults to a `div`. */
  as?: ElementType;
};

/**
 * Reveals its children once they scroll into the viewport.
 * Replaces the original `IntersectionObserver` + scroll listener logic from `script.js`.
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => element.classList.add("is-visible");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);

    /* Safety net: a fast scroll can jump straight past an element, so anything
       that is already at (or above) the fold is revealed as well. */
    const onScroll = () => {
      if (element.classList.contains("is-visible")) return;
      if (element.getBoundingClientRect().top < window.innerHeight - 50) {
        show();
        observer.unobserve(element);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
