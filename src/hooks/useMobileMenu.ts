import { useState, useEffect } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // Sync body overflow to prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key presses and screen size changes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const mediaQuery = window.matchMedia("(min-width: 641px)");
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) close();
    };

    document.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return { isOpen, toggle, close, open };
}
