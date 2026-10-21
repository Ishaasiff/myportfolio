# Isha Asif — Portfolio

Personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript** and **Tailwind CSS v4**.

Converted from the original static `index.html` / `style.css` / `script.js` / `cv.html` build.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
public/                 Static assets (images, cv.pdf)
src/
  app/
    layout.tsx          Root layout, fonts (Poppins + Open Sans), metadata
    page.tsx            Home page (composes every section)
    globals.css         Tailwind v4 theme + base styles + reveal animation
    cv/page.tsx         Online CV  ->  /cv
  components/
    Navbar.tsx          Sticky nav: hide on scroll down, show on scroll up
    Hero.tsx            Intro / socials / Download CV
    About.tsx           "About Me"
    Services.tsx        Services grid
    Projects.tsx        Recent works gallery
    Contact.tsx         Get in touch
    Footer.tsx          Footer with quick links + socials
    Reveal.tsx          Scroll-reveal wrapper (IntersectionObserver + fallback)
    TagCursor.tsx       Custom "html tag" cursor (desktop only)
  data/
    site.ts             Site config: nav links, socials, services
    projects.ts         Project content + image dimensions
```

## Routes

| Route | Description |
| ----- | ----------- |
| `/`    | Portfolio (all sections) |
| `/cv`  | Online CV (also downloadable as `/cv.pdf`) |

## Notes

- **Theming** — the original palette lives in `@theme` inside `src/app/globals.css`
  (`--color-brand`, `--color-brand-light`, `--color-hero`, `--color-mint`, …).
- **Images** — served from `public/` through `next/image`; `sharp` is installed for
  production image optimisation.
- **Reveal animation** — `.reveal` / `.is-visible` in `globals.css`, driven by the
  `Reveal` client component.
- **Environment** — set `NEXT_PUBLIC_SITE_URL` to the deployed origin to make
  Open Graph URLs absolute (defaults to `http://localhost:3000`).
