import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { contactInfo } from "../../data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-[clamp(80px,12vw,140px)] pb-[calc(clamp(80px,12vw,140px)+40px)] relative select-text"
    >
      <div className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,80px)] items-start">
          {/* Left Text column */}
          <AnimateOnScroll variant="fade-up" delay={0} className="contact-text">
            <SectionHead title="Contact" id="contact-title" className="mb-4" />
            <p className="text-text-mid text-sm leading-[1.8] max-w-[380px] mb-8">
              {contactInfo.description}
            </p>
            <div className="mt-2 select-none">
              <Button
                as="a"
                href={contactInfo.cvPath}
                variant="primary"
                download
              >
                Descargar CV
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Right Links column */}
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {contactInfo.methods.map((method, index) => {
              const delay = index * 80;
              return (
                <AnimateOnScroll
                  key={method.label}
                  variant="fade-up"
                  delay={delay}
                  as="li"
                >
                  <a
                    href={method.href}
                    className="flex items-center gap-3.5 py-4 px-5 bg-bg-card border border-border rounded-md text-text-mid text-xs transition-all duration-200 hover:border-border-glow hover:bg-bg-card-2 hover:translate-x-1 hover:text-text"
                    aria-label={method.ariaLabel}
                    {...(method.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="text-lg min-w-7 text-center select-none" aria-hidden="true">
                      {method.icon}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-[11px] text-text-dim uppercase tracking-wider mb-0.5 line-height-none leading-none select-none">
                        {method.label}
                      </span>
                      <span className="text-xs text-text select-all font-mono">
                        {method.value}
                      </span>
                    </span>
                  </a>
                </AnimateOnScroll>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
