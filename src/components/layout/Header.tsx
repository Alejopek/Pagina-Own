import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { navLinks } from "../../lib/constants";
import { cn } from "../../lib/cn";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Header({ isMenuOpen, onToggleMenu }: HeaderProps) {
  const isScrolled = useNavbarScroll();
  const activeSection = useActiveSection(navLinks.map((link) => link.href.slice(1)));
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      scrollTo(0);
    } else {
      scrollTo(href);
    }
  };

  return (
    <AnimateOnScroll
      as="header"
      variant="fade-down"
      delay={0}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] h-nav-h flex items-center transition-all duration-300 border-b border-transparent",
        isScrolled && "bg-bg/85 backdrop-blur-[16px] -webkit-backdrop-blur-[16px] border-border"
      )}
    >
      <nav className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)] flex items-center justify-between gap-6" aria-label="Navegación principal">
        {/* Logo / nombre */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, "#top")}
          className="font-display font-bold text-[15px] tracking-[-0.01em] text-text whitespace-nowrap"
          aria-label="Inicio"
        >
          Alejo<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-[clamp(8px,2vw,28px)]">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "font-mono text-xs tracking-wider text-text-mid transition-colors relative pb-0.5 hover:text-text",
                    isActive && "text-text",
                    // Animated underline indicator
                    "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-[width] after:duration-250",
                    (isActive || isActive) && "after:w-full"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={onToggleMenu}
          className="sm:hidden flex flex-col gap-[5px] p-2 z-[100] outline-none"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
        >
          <span
            className={cn(
              "block w-[22px] h-[1.5px] bg-text rounded-full transition-all duration-300 origin-center",
              isMenuOpen && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-[22px] h-[1.5px] bg-text rounded-full transition-all duration-300 origin-center",
              isMenuOpen && "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "block w-[22px] h-[1.5px] bg-text rounded-full transition-all duration-300 origin-center",
              isMenuOpen && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </nav>
    </AnimateOnScroll>
  );
}
