import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden bg-brand-light px-[5vw] py-[5vh]">
      <Reveal>
        <h2 className="pt-8 text-center font-display text-[clamp(28px,5vw,60px)] text-brand">Services</h2>
      </Reveal>

      <Reveal delay={100}>
        <p className="-mt-4 mb-12 mx-auto max-w-[800px] text-center font-body text-[clamp(16px,2vw,25px)] leading-relaxed text-brand">
          Transforming ideas into real world web applications
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 px-[2vw]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-5 text-center transition-[transform,box-shadow] duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_12px_24px_#2b6777]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="mb-2.5 font-display text-xl text-brand">{service.title}</h3>
              <p className="font-body text-[clamp(12px,1.5vw,14px)] leading-[1.4] text-brand">{service.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
