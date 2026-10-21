import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site, socialLinks } from "@/data/site";

const downloadDots = [
  "left-[1vw] top-[40%] text-[clamp(12px,1.5vw,18px)]",
  "left-[1.8vw] top-[50%] text-[clamp(10px,1.2vw,14px)]",
  "left-[1.3vw] top-[63%] text-[clamp(12px,1.5vw,18px)]",
  "right-[1.5vw] top-[40%] text-[clamp(14px,1.8vw,20px)]",
  "right-[1.8vw] top-[60%] text-[clamp(10px,1.5vw,14px)]",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center bg-hero p-8 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] max-[600px]:p-4 max-[600px]:text-center"
    >
      <div className="flex w-full flex-col items-start py-[5vh] pl-[5vw] pr-[30vw] max-[600px]:items-center max-[600px]:justify-center max-[600px]:p-8 max-[600px]:text-center">
        <div className="flex w-full flex-row items-center gap-8 max-[600px]:flex-col max-[600px]:justify-center max-[600px]:gap-4">
          <Reveal className="flex flex-col justify-center">
            <p className="mb-[2vh] mt-[10vh] font-display text-[clamp(29px,7vw,46px)] font-bold leading-[1.4] text-[color:var(--color-hero-text)] max-[600px]:my-4 max-[600px]:text-center max-[600px]:text-[40px]">
              {site.headline}{" "}
              <span className="text-[color:var(--color-hero-text)]">| WEB DEVELOPER | DESIGNER</span>
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="mb-4 pr-[10vw] font-body text-[clamp(11px,2.2vw,18px)] leading-relaxed text-[color:var(--color-hero-text)] max-[600px]:mx-auto max-[600px]:mb-4 max-[600px]:max-w-[90%] max-[600px]:p-0 max-[600px]:text-center max-[600px]:text-[20px]">
              I am a passionate Full Stack Developer skilled in building scalable web applications using modern
              front-end and back-end technologies.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap items-center justify-start max-[600px]:mt-4 max-[600px]:w-full max-[600px]:justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(10,8,11,0.25)] max-[500px]:h-[50px] max-[500px]:w-[50px] max-[500px]:p-1.5"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={social.width}
                    height={social.height}
                    className="h-auto w-full"
                  />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="/cv.pdf"
              download
              className="relative mt-4 inline-block rounded-full border-2 border-transparent bg-white px-[clamp(20px,5vw,30px)] py-[clamp(12px,2.5vw,20px)] font-body text-[clamp(14px,1.5vw,16px)] text-[color:var(--color-hero-text)] shadow-[0_4px_10px_rgba(10,8,11,0.15)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(10,8,11,0.12)] max-[600px]:mx-auto max-[600px]:block max-[600px]:w-[30%] max-[600px]:max-w-[70%] max-[600px]:px-4 max-[600px]:py-[9px] max-[600px]:text-[13px]"
            >
              {downloadDots.map((position) => (
                <span
                  key={position}
                  aria-hidden="true"
                  className={`absolute -translate-y-1/2 text-[color:var(--color-hero-text)] max-[600px]:hidden ${position}`}
                >
                  &bull;
                </span>
              ))}
              Download CV
            </a>
          </Reveal>
        </div>
      </div>

      <div className="absolute right-[5%] top-[60%] w-[350px] -translate-y-1/2 max-[1024px]:right-[3%] max-[1024px]:w-[300px] max-[768px]:hidden">
        <Image
          src="/pic20.png"
          alt="Isha Asif sticker"
          width={421}
          height={421}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
