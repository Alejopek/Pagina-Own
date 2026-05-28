import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AnimateOnScroll
      as="footer"
      variant="fade-in"
      delay={0}
      className="border-t border-border py-7 text-center select-none"
    >
      <p className="font-mono text-[11px] text-text-dim tracking-[0.06em] cursor-default">
        &copy; <span>{currentYear}</span> <span className="text-accent">Alejo Tomas Diaz</span>. Todos los derechos reservados.
      </p>
    </AnimateOnScroll>
  );
}
