"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const previousScroll = useRef(0);

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("aboutus");

  /* Hide the navbar while scrolling down, bring it back while scrolling up. */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > previousScroll.current && current > 80);
      previousScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu when clicking outside of the navbar. */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      id="navbar"
      className="fixed left-0 top-0 z-[1000] w-full bg-brand shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out"
      style={{ transform: hidden ? "translateY(-80px)" : "translateY(0)" }}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div id="logo" className="font-display text-[1.8rem] font-bold text-brand-light">
          {site.name}
        </div>

        <ul
          className={`absolute right-0 top-[70px] z-[1000] w-[200px] flex-col gap-4 bg-menu p-4 shadow-[0_2px_5px_rgba(0,0,0,0.3)] md:static md:top-auto md:flex md:w-auto md:flex-row md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeId === link.id;

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block py-1 text-[1rem] font-medium transition-colors duration-300 hover:text-brand-light md:border-b-2 md:border-transparent ${
                    isActive
                      ? "text-brand md:border-brand-light md:text-brand-light"
                      : "text-brand md:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={(event) => {
            event.stopPropagation();
            setMenuOpen((open) => !open);
          }}
          className="flex cursor-pointer flex-col gap-[5px] md:hidden"
        >
          <span className="h-[3px] w-[25px] rounded-[2px] bg-white" />
          <span className="h-[3px] w-[25px] rounded-[2px] bg-white" />
          <span className="h-[3px] w-[25px] rounded-[2px] bg-white" />
        </button>
      </div>
    </nav>
  );
}
