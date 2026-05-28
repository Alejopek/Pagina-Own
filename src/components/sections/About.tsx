import { SectionHead } from "../ui/SectionHead";
import { FactCard } from "../ui/FactCard";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export interface AboutProps {
  id?: string;
  title?: string;
}

export function About({ id = "about", title = "About" }: AboutProps) {
  const facts = [
    { icon: "🐧", title: "Sistemas", desc: "Arch Linux · Debian · Bash", delay: 0 },
    { icon: "⚙️", title: "Backend", desc: "Node.js · C++ · TypeScript", delay: 80 },
    { icon: "🐳", title: "Infraestructura", desc: "Docker · HomeLab · Git", delay: 160 },
    { icon: "🗣️", title: "Idiomas", desc: "Inglés Avanzado (B2)", delay: 240 }
  ];

  return (
    <section id={id} aria-labelledby="about-title" className="py-[clamp(80px,12vw,140px)] relative select-text">
      <div className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)]">
        <AnimateOnScroll variant="fade-up" delay={0}>
          <SectionHead title={title} id="about-title" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,64px)] items-start">
          <AnimateOnScroll variant="fade-up" delay={0} className="flex flex-col gap-4 text-text-mid leading-[1.85]">
            <p>
              Soy un desarrollador técnico con una fuerte inclinación hacia el{" "}
              <strong className="text-text font-semibold">Backend</strong> y la administración de sistemas{" "}
              <strong className="text-text font-semibold">Linux</strong>. Actualmente curso mi último año en la EPET 20 de Neuquén.
            </p>
            <p>
              Me apasiona el mantenimiento de infraestructura y la administración de{" "}
              <strong className="text-text font-semibold">HomeLabs</strong>. Tengo experiencia empaquetando software para la comunidad de Arch Linux (AUR) y trabajando con entornos de contenedores.
            </p>
          </AnimateOnScroll>

          {/* Facts grid */}
          <div className="grid grid-cols-2 min-[380px]:grid-cols-2 max-[380px]:grid-cols-1 gap-3">
            {facts.map((fact, index) => (
              <AnimateOnScroll key={index} variant="zoom-in" delay={fact.delay}>
                <FactCard icon={fact.icon} title={fact.title} desc={fact.desc} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
