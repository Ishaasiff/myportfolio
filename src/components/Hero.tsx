import Image from "next/image";
import avatarImage from "../../public/avatar-hero.png";
import { Reveal } from "@/components/Reveal";
import { site, socialLinks } from "@/data/site";

// Keep the headline data-driven but stack the last word on its own line:
// "SOFTWARE ENGINEERING" / "STUDENT".
const headlineWords = site.headline.split(" ");
const headlineLastWord = headlineWords.pop() ?? "";
const headlineLead = headlineWords.join(" ");

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center bg-hero px-5 pb-4 pt-28 font-display text-left shadow-[inset_0_0_100px_rgba(255,255,255,0.06)] md:px-12"
    >
      
      {/* Thin neon divider: white fading ends, maroon centre */}
      <div
        aria-hidden="true"
className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[65%] w-px -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#ffffff_10%,rgba(255,255,255,0.85)_20%,#800020_38%,#800020_50%,#800020_62%,rgba(255,255,255,0.85)_80%,#ffffff_90%,transparent_100%)] shadow-[0_0_4px_rgba(255,255,255,0.35),0_0_10px_rgba(128,0,32,0.6),0_0_20px_rgba(128,0,32,0.3)] xl:block"      />

      <div className="relative z-10 grid w-full max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)]">
        {/* Left column — all hero content */}
        <div className="flex w-full -translate-y-8 flex-col items-start">
          <Reveal
            as="h1"
            className="flex max-w-[760px] flex-col font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] md:text-[44px]"
          >
            <span className="text-cream">{headlineLead}</span>
            <span className="text-cream">{headlineLastWord}</span>
            <span className="whitespace-nowrap text-[color:var(--color-burgundy)]">| Web Developer |</span>
          </Reveal>

          <Reveal className="mt-5 w-full">
            <p className="max-w-[540px] font-display text-base font-normal leading-[1.6] text-muted">
              I am a passionate Full Stack Developer skilled in building scalable web applications using modern
              front-end and back-end technologies.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-6 flex flex-col items-start">
            <div className="flex flex-wrap items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(128,0,32,0.6)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={social.icon} alt={social.label} className="h-auto w-full" />
                </a>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download
              className="mt-6 inline-flex h-12 min-w-[220px] items-center justify-center rounded-none border-[2.5px] border-solid border-[#800020] bg-transparent px-12 font-display text-base font-semibold text-cream transition-colors duration-300 hover:bg-[rgba(128,0,32,0.45)]"
            >
              Download CV
            </a>
          </Reveal>
        </div>

        {/* Right column — avatar */}
        <div className="hidden items-center justify-center xl:flex">
          <div className="relative w-full max-w-[400px] -translate-x-10 -translate-y-8 2xl:max-w-[440px]">
            <Reveal delay={200} className="relative z-10">
              <Image
                src={avatarImage}
                alt="Isha Asif"
                priority
                className="h-auto w-full drop-shadow-[0_0_40px_rgba(128,0,32,0.35)]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
