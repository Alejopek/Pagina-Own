import { AnimatePresence, motion } from "framer-motion";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { navLinks } from "../../lib/constants";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    // Use setTimeout to allow the drawer collapse animation to complete nicely before starting to scroll
    setTimeout(() => {
      scrollTo(href);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          id="mobile-drawer"
          aria-label="Menú móvil"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-nav-h left-0 right-0 z-[99] bg-bg/96 backdrop-blur-[20px] -webkit-backdrop-blur-[20px] border-b border-border py-6 px-[clamp(20px,5vw,60px)] pb-8 block"
        >
          <ul className="flex flex-col gap-0">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-border last:border-b-0">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block py-3.5 font-display text-lg font-semibold text-text-mid transition-all duration-200 hover:text-text hover:pl-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
