import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { type Project, projects } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="mx-auto flex w-full max-w-[1200px] flex-col items-center overflow-hidden p-8">
      <div className="w-full max-h-[250px] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-full flex-row flex-wrap justify-center max-[768px]:flex-col max-[768px]:items-center">
          {project.images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, 500px"
              className="h-auto w-full max-w-[500px] object-contain"
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center pt-8 text-center">
        <Reveal>
          <h3 className="px-4 pt-8 font-display text-xl max-[768px]:pt-4 max-[768px]:text-[1.3rem]">
            {project.title}
          </h3>
        </Reveal>

        <Reveal delay={100}>
          <div className="px-8 py-4 text-center font-body text-base leading-[1.4] max-[768px]:p-4 max-[768px]:text-[0.95rem]">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.purpose ? (
              <>
                <h3 className="font-display">{project.purpose.heading}</h3>
                <p>{project.purpose.text}</p>
              </>
            ) : null}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="project" className="relative min-h-[230vh] overflow-hidden bg-mint-soft">
      <div className="relative w-full pt-16 text-brand">
        <h2 className="absolute left-0 top-16 w-full text-center font-display text-[clamp(28px,5vw,60px)]">
          Recent Works
        </h2>

        <div className="mt-20 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
