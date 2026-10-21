import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const paragraphs = [
  "Hi! I'm Isha Asif a curious mind, a problem solver, and a passionate Software Engineering student who loves bringing ideas to life with code. From building sleek, responsive designs on the front end to powering them with strong and efficient back-end logic, I enjoy every step of the development journey.",
  "I believe every project is a story waiting to be told and I'm here to write it in clean, scalable code. When I'm not coding, you'll find me exploring new tools and ideas, always looking for ways to level up and create something even better. The ultimate goal? To become a Full Stack Developer who builds software that leaves a mark.",
  "I am deeply committed to my work, investing creativity and precision into every project to ensure that each design is both aesthetically pleasing and functionally efficient.",
];

export function About() {
  return (
    <section
      id="aboutus"
      className="relative flex min-h-screen flex-col items-center gap-8 bg-mint px-[5vw] py-[5vh] shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]"
    >
      <Reveal className="mt-[clamp(4rem,6vh,7rem)] flex h-[200px] w-[200px] items-center justify-center max-[768px]:mt-8">
        <Image
          src="/avatar-new.png"
          alt="Isha Asif"
          width={360}
          height={360}
          className="h-full w-full rounded-full object-cover shadow-[0_0_20px_#52ab98]"
        />
      </Reveal>

      <Reveal>
        <h2 className="mt-4 text-center font-display text-[clamp(28px,5vw,60px)] text-brand max-[768px]:text-[clamp(24px,6vw,40px)]">
          About Me
        </h2>
      </Reveal>

      {paragraphs.map((paragraph, index) => (
        <Reveal key={paragraph} delay={index * 120}>
          <p className="mx-auto max-w-[800px] text-center font-body text-[clamp(14px,2vw,20px)] leading-relaxed text-brand max-[768px]:px-4">
            {paragraph}
          </p>
        </Reveal>
      ))}

      <Reveal>
        <div className="mx-auto mt-4 h-[2px] w-4/5 rounded-[3px] bg-[linear-gradient(to_right,#2b6777,#366370,#2b6777)] shadow-[0_0_20px_#4f4b4b,0_0_30px_#1a1a1a]" />
      </Reveal>
    </section>
  );
}
