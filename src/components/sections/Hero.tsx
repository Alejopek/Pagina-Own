import { Button } from "../ui/Button";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import SplashCursor from "../ui/SplashCursor";
import { useSmoothScroll } from "../layout/SmoothScrollProvider";

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  const handleCtaClick = (e: React.MouseEvent<any>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-[100svh] flex flex-col justify-center pt-[calc(var(--nav-h)+48px)] pb-20 relative isolate overflow-hidden select-text"
    >
      {/* Background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] mask-radial pointer-events-none select-none" />

      {/* Glow blob */}
      <div className="absolute top-[10%] right-[-10%] z-0 w-[clamp(300px,40vw,600px)] aspect-square bg-[radial-gradient(circle,rgba(56,189,248,0.07)_0%,transparent_70%)] rounded-full pointer-events-none animate-blob-float select-none" />

      <div className="absolute inset-0 z-[1] pointer-events-none select-none">
        <SplashCursor />
      </div>

      <AnimateOnScroll
        variant="fade-up"
        delay={80}
        className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)] relative z-10"
      >
        <p className="font-mono text-xs text-accent tracking-[0.1em] mb-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-6 before:h-[1px] before:bg-accent select-none cursor-default">
          Hola, soy
        </p>
        <h1
          id="hero-title"
          className="font-display text-[clamp(48px,8vw,96px)] font-bold tracking-[-0.03em] leading-[1.05] text-text mb-3"
        >
          Alejo Tomas
          <br />
          Diaz
          <span className="hero-cursor" aria-hidden="true">_</span>
        </h1>
        <p className="font-mono text-[clamp(14px,2vw,17px)] text-accent-2 mb-7 tracking-[0.03em] cursor-default">
          Backend & Linux Specialist
        </p>
        <p className="font-mono text-[clamp(13px,1.5vw,15px)] text-text-mid max-w-[480px] leading-loose mb-12">
          Estudiante de 6to año de programación técnica enfocado en sistemas,
          infraestructura y empaquetado para Arch Linux.
        </p>
        <div className="flex flex-wrap gap-3.5 items-center">
          <Button
            as="a"
            href="#projects"
            onClick={(e) => handleCtaClick(e, "#projects")}
            variant="primary"
          >
            Ver proyectos
          </Button>
          <Button
            as="a"
            href="#contact"
            onClick={(e) => handleCtaClick(e, "#contact")}
            variant="ghost"
          >
            Contactarme
          </Button>
        </div>
      </AnimateOnScroll>

      {/* Scroll cue arrow */}
      <span
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-text-dim animate-scroll-cue pointer-events-none select-none"
        aria-hidden="true"
      >
        scroll
        <span className="w-[1px] h-10 bg-gradient-to-b from-text-dim to-transparent" />
      </span>
    </section>
  );
}
