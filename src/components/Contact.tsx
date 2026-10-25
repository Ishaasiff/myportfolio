import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { HelloLink } from "@/components/Hellolink";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-center gap-8 overflow-hidden bg-hero px-[5vw] py-[12vh]"
    >
      {/* Ambient burgundy glow low in the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-burgundy/20 blur-[160px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-cream md:text-[44px]">
            Get In <span className="text-burgundy">Touch</span>
          </h2>
          <div
            aria-hidden="true"
            className="mt-5 h-[2px] w-24 rounded-[3px] bg-[linear-gradient(to_right,#800020,transparent)] shadow-[0_0_20px_rgba(128,0,32,0.55)]"
          />
        </Reveal>

        {/* <Reveal delay={100}>
          <p className="max-w-[52ch] font-body text-base leading-relaxed text-muted">
            Turning concepts into working solutions is what drives me. As a Software
            Engineering student, I&apos;m eager to grow through internships, collaborations,
            and inspiring discussions. Let&apos;s team up and build something that matters.
          </p>
        </Reveal> */}
      </div>

      <Reveal delay={200}>
        <div className="relative mx-auto w-full max-w-6xl border-t border-white/10 pt-6">
          <HelloLink href={site.links.gmailInbox} />
        </div>
      </Reveal>
    </section>
  );
}