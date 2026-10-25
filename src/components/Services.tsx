import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

/* Abstract line motifs, one per tile (cycled). Drawn with currentColor. */
const dots = Array.from({ length: 25 }, (_, i) => ({
  x: 16 + (i % 5) * 32,
  y: 16 + Math.floor(i / 5) * 32,
}));

const motifs: React.ReactNode[] = [
  <>
    {[14, 34, 54, 74].map((r) => (
      <circle key={r} cx="80" cy="80" r={r} />
    ))}
  </>,
  <>
    {dots.map((d) => (
      <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r="2.5" />
    ))}
  </>,
  <>
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <line key={i} x1={i * 26 - 20} y1="160" x2={i * 26 + 60} y2="0" />
    ))}
  </>,
  <>
    <path d="M10 150 A140 140 0 0 1 150 10" />
    <path d="M10 150 A100 100 0 0 1 110 50" />
    <path d="M10 150 A60 60 0 0 1 70 90" />
  </>,
  <>
    {[30, 70, 110].map((y) => (
      <path key={y} d={`M0 ${y} Q20 ${y - 30} 40 ${y} T80 ${y} T120 ${y} T160 ${y}`} />
    ))}
  </>,
  <>
    {[0, 15, 30].map((angle) => (
      <rect
        key={angle}
        x="35"
        y="35"
        width="90"
        height="90"
        transform={`rotate(${angle} 80 80)`}
      />
    ))}
  </>,
];

/** Bento layout on a 4-column grid: which tiles get extra room, by service count. */
function spanFor(count: number, index: number) {
  const big = "lg:col-span-2 lg:row-span-2";
  const wide = "lg:col-span-2";
  if (count === 1) return "lg:col-span-4";
  if (count === 2) return wide;
  if (count === 3) return index === 0 ? big : wide;
  if (count === 4) return index === 0 ? big : index === 3 ? wide : "";
  if (count === 5) return index === 0 ? big : "";
  if (count === 6) return index === 0 ? big : index === 3 ? wide : index >= 4 ? wide : "";
  if (count === 7) return index === 0 ? big : index >= 5 ? wide : "";
  if (count === 8) return index === 0 ? big : index === 7 ? wide : "";
  return index === 0 ? big : "";
}

export function Services() {
  const count = services.length;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-hero px-[5vw] py-[12vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-burgundy/20 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-cream md:text-[44px]">
                Services
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-[2px] w-24 rounded-[3px] bg-[linear-gradient(to_right,#800020,transparent)] shadow-[0_0_20px_rgba(128,0,32,0.55)]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid auto-rows-[minmax(250px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {services.map((service, index) => {
              const isBig = index === 0 && count > 2;
              return (
                <article
                  key={service.title}
                  className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-brand p-6 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-burgundy/70 hover:shadow-[0_24px_50px_-18px_rgba(128,0,32,0.75)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8 ${spanFor(
                    count,
                    index,
                  )}`}
                >
                  {/* Corner light, on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(128,0,32,0.3),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
                  />

                  {/* Line motif: brightens and turns slightly on hover */}
                  <svg
                    viewBox="0 0 160 160"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    className={`pointer-events-none absolute right-4 top-4 origin-center text-burgundy opacity-40 transition-[opacity,transform] duration-700 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:transform-none ${
                      isBig ? "h-56 w-56 md:h-64 md:w-64" : "h-28 w-28 md:h-32 md:w-32"
                    }`}
                  >
                    {motifs[index % motifs.length]}
                  </svg>

                  <div className="relative">
                    <h3
                      className={`font-display font-bold leading-[1.15] tracking-[-0.01em] text-cream ${
                        isBig
                          ? "text-3xl md:text-[44px]"
                          : "text-2xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[44ch] font-body text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>

                  {/* Neon rule draws in on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[linear-gradient(to_right,#800020,transparent)] shadow-[0_0_20px_rgba(128,0,32,0.7)] transition-transform duration-700 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}