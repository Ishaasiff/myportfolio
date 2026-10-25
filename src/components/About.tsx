import { Reveal } from "@/components/Reveal";
import { AboutPortrait } from "@/components/Aboutportrait";
import { AboutTabs } from "@/components/Abouttabs";

// const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export function About() {
  return (
    
    <section
      id="aboutus"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand px-[5vw] py-[12vh] shadow-[inset_0_0_100px_rgba(128,0,32,0.15)]"
    >
      {/* Ambient burgundy glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-burgundy/25 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal>
          <AboutPortrait />
        </Reveal>

        <Reveal delay={120}>
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-cream md:text-[44px]">
              About Me
              <span className="block text-burgundy">Software Engineering student</span>
            </h2>

            <div className="mt-8">
              <AboutTabs />
            </div>

            {/* <ul
              aria-label="Tools I work with"
              className="mt-8 flex flex-wrap gap-3"
            >
              {stack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-white/15 px-4 py-1.5 font-body text-sm text-muted transition-colors duration-200 hover:border-burgundy hover:text-cream"
                >
                  {tool}
                </li>
              ))}
            </ul> */}
          </div>
        </Reveal>
      </div>

      {/* Closing divider, kept from the original design */}
      <div
        aria-hidden="true"
        className="absolute bottom-[5vh] left-1/2 h-[2px] w-4/5 -translate-x-1/2 rounded-[3px] bg-[linear-gradient(to_right,transparent,#800020,transparent)] shadow-[0_0_20px_rgba(128,0,32,0.55)]"
      />
    </section>
  );
}