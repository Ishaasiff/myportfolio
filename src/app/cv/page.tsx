import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum Vitae of Isha Asif — software engineering student and full stack developer.",
};

const education = [
  {
    title: "BS-Software Engineering",
    institute: "Sir Syed University Of Engineering And Technology",
    period: "2024-2028",
  },
];

const projectList = [
  "Hospital Management System",
  "DonorOs",
  "Travel Bloom",
  "Todo List Web App",
  "Weather Report",
];

const skills = [
  { label: "Frontend", value: "HTML, CSS, JavaScript" },
  { label: "Backend", value: "Python, Java, Flask Framework" },
  { label: "Database", value: "SQL" },
  { label: "Version Control", value: "Git & GitHub" },
];

export default function CvPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] px-4 py-10 text-[#333] [font-family:var(--font-display)]">
      <div className="mx-auto max-w-[900px] rounded-[15px] bg-white px-[30px] py-8 shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
        <header>
          <div className="mb-8 text-center">
            <h1 className="text-[2.5rem] text-cv-title">Isha Asif</h1>
            <p className="mt-2.5 text-[#555]">{site.location}</p>
            <p className="mt-2.5 text-[#555]">
              <a href={site.links.mailto} className="font-bold text-cv-green transition-colors duration-300 hover:text-cv-orange">
                {site.email}
              </a>
            </p>
            <p className="mt-2.5 text-[#555]">
              &quot;Passionate about turning ideas into interactive web experiences and building powerful backend
              systems.&quot;
            </p>
          </div>
        </header>

        <Reveal>
          <section className="mb-8">
            <h3 className="mb-3 inline-block border-b-2 border-cv-green pb-[5px] text-cv-heading">Summary</h3>
            <p>
              I am a dedicated Software Engineering student and Web Developer who enjoys crafting beautiful,
              functional, and user-friendly websites. I aim to contribute to innovative projects where technology
              meets creativity.
            </p>
          </section>
        </Reveal>

        <Reveal delay={100}>
          <section className="mb-8">
            <h3 className="mb-3 inline-block border-b-2 border-cv-green pb-[5px] text-cv-heading">Education</h3>
            <ul className="ml-2.5 list-none">
              {education.map((entry) => (
                <li key={entry.title} className="relative my-1.5 pl-5 before:absolute before:left-0 before:font-bold before:text-cv-green before:content-['•']">
                  <p>{entry.title}</p>
                  <p>{entry.institute}</p>
                  <p>{entry.period}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={200}>
          <section className="mb-8">
            <h3 className="mb-3 inline-block border-b-2 border-cv-green pb-[5px] text-cv-heading">Projects</h3>
            <ul className="ml-2.5 list-none">
              {projectList.map((project) => (
                <li key={project} className="relative my-1.5 pl-5 before:absolute before:left-0 before:font-bold before:text-cv-green before:content-['•']">
                  {project}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={300}>
          <section className="mb-8">
            <h3 className="mb-3 inline-block border-b-2 border-cv-green pb-[5px] text-cv-heading">Skills</h3>
            <ul className="ml-2.5 list-none">
              {skills.map((skill) => (
                <li key={skill.label} className="relative my-1.5 pl-5 before:absolute before:left-0 before:font-bold before:text-cv-green before:content-['•']">
                  {skill.label}: {skill.value}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href="/"
            className="rounded-full border-2 border-brand bg-brand-light px-6 py-2 text-white transition-all duration-300 hover:scale-105"
          >
            &larr; Back to portfolio
          </Link>
          <a
            href="/cv.pdf"
            download
            className="rounded-full border-2 border-brand bg-white px-6 py-2 text-brand transition-all duration-300 hover:scale-105"
          >
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}
