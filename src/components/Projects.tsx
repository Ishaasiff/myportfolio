import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { ProjectsList } from "@/components/Projectslist";

export function Projects() {
  return (
    <section
      id="project"
      className="relative overflow-hidden bg-brand px-[5vw] py-[12vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-burgundy/15 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-cream md:text-[44px]">
            Recent Works
          </h2>
          <div
            aria-hidden="true"
            className="mt-5 h-[2px] w-24 rounded-[3px] bg-[linear-gradient(to_right,#800020,transparent)] shadow-[0_0_20px_rgba(128,0,32,0.55)]"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <ProjectsList projects={projects} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}