import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[70vh] overflow-hidden bg-contact text-center">
      <div className="flex flex-col items-center">
        <Reveal>
          <h2 className="mb-8 pt-16 text-center font-display text-[clamp(28px,5vw,60px)] text-brand">
            Get In Touch
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="-mx-auto -mt-4 mb-12 max-w-[800px] px-4 pt-8 text-center font-body text-[clamp(11px,2.2vw,18px)] leading-relaxed text-brand">
            Turning concepts into working solutions is what drives me. As a Software Engineering student, I&apos;m
            eager to grow through internships, collaborations, and inspiring discussions. Let&apos;s team up and build
            something that matters.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={site.links.gmailInbox}
            target="_blank"
            rel="noreferrer noopener"
            className="relative inline-block border-2 border-brand bg-brand-light px-[50px] py-5 font-body text-[clamp(14px,1.5vw,16px)] text-white shadow-[0_4px_10px_#2b6777] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#52ab98,0_0_30px_#2b6777]"
          >
            Email me
          </a>
        </Reveal>
      </div>
    </section>
  );
}
