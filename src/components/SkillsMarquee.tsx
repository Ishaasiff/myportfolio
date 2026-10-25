import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const skills = [
  "HTML",
  "CSS",
  "JS",
  "NEXT.JS",
  "REACT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "PYTHON",
  "JAVA",
  "FASTAPI",
  "POSTGRESQL",
  "MONGODB",
  "MYSQL",
  "REDIS",
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-6 pr-6 md:gap-10 md:pr-10">
          <span className="whitespace-nowrap text-sm font-bold tracking-[0.15em] text-cream/70 md:text-base">
            {skill}
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#800020] shadow-[0_0_8px_rgba(128,0,32,0.8)]" />
        </li>
      ))}
    </ul>
  );
}

export function SkillsMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className={`relative -mt-6 overflow-hidden py-4 md:-mt-10 ${poppins.className} [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
    >
      {/* Keyframes live here, so no globals.css or Tailwind config is needed */}
      <style>{`
        @keyframes skills-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="flex w-max"
        style={{ animation: "skills-marquee 30s linear infinite" }}
      >
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </section>
  );
}