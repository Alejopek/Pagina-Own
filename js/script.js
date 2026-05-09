/* ============================================================
   ALEJO TOMAS DIAZ — Portfolio · script.js
   Vanilla JS (ES6+) — no dependencies
   ============================================================ */

"use strict";

/* ─── 0. DEV CONSOLE EASTER EGG ──────────────────────────────
   First thing any dev sees when they open DevTools.
   ──────────────────────────────────────────────────────────── */
console.log(
  "%c Alejo Tomas Diaz %c\n%c Backend & Linux Specialist\n%c\n → Encontraste el console. Veo que sos curioso\n → alejopek62@gmail.com\n",
  "background:#38bdf8;color:#060608;font-size:16px;font-weight:800;padding:4px 8px;border-radius:4px",
  "",
  "color:#818cf8;font-size:12px",
  "color:#9090a8;font-size:11px",
);

/* ─── 1. SCROLL REVEAL ───────────────────────────────────────
   Observes every [data-animate] element and adds .visible
   when it enters the viewport. data-delay (ms) staggers
   multiple elements that share the same trigger point.
   ──────────────────────────────────────────────────────────── */
(function initScrollReveal() {
  const targets = document.querySelectorAll("[data-animate]");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = parseInt(el.dataset.delay ?? "0", 10);

        setTimeout(() => el.classList.add("visible"), delay);

        // Fire once — unobserve after reveal
        observer.unobserve(el);
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
})();

/* ─── 2. NAVBAR SCROLL STATE ─────────────────────────────────
   Adds .scrolled to <header> after 50 px of page scroll.
   Throttled with requestAnimationFrame to avoid layout thrash.
   ──────────────────────────────────────────────────────────── */
(function initNavbarScroll() {
  const header = document.querySelector("header");
  if (!header) return;

  let ticking = false;

  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true },
  );

  // Run once on load in case page is already scrolled (e.g. browser restore)
  updateHeader();
})();

/* ─── 3. MOBILE MENU ─────────────────────────────────────────
   Toggles .open on both .nav-toggle and .nav-drawer.
   Closes on: overlay click, Escape key, nav link click,
   and viewport resize back to desktop width.
   ──────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".nav-drawer");
  if (!toggle || !drawer) return;

  function openMenu() {
    toggle.classList.add("open");
    drawer.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // prevent background scroll
  }

  function closeMenu() {
    toggle.classList.remove("open");
    drawer.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a drawer link is tapped
  drawer
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close if window resizes past mobile breakpoint
  const mql = window.matchMedia("(min-width: 641px)");
  mql.addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
})();

/* ─── 4. SMOOTH SCROLL ───────────────────────────────────────
   Intercepts clicks on any anchor whose href starts with "#".
   Uses scrollIntoView so it respects html { scroll-padding-top }
   already set in the CSS (nav height + buffer).
   ──────────────────────────────────────────────────────────── */
(function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href").slice(1);
    // Empty hash → scroll to top
    if (!id) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();

/* ─── 5. ACTIVE NAV HIGHLIGHT ────────────────────────────────
   Uses a second IntersectionObserver to watch every <section>
   with an id. The topmost section that is ≥ 40% visible wins
   and its matching nav link gets .active.
   ──────────────────────────────────────────────────────────── */
(function initActiveNav() {
  const navLinks = document.querySelectorAll('header nav ul a[href^="#"]');
  if (!navLinks.length) return;

  // Build a map: sectionId → navLink
  const linkMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (id) linkMap.set(id, link);
  });

  const sections = [...document.querySelectorAll("main section[id]")].filter(
    (s) => linkMap.has(s.id),
  );
  if (!sections.length) return;

  // Track which sections are currently intersecting
  const visible = new Set();

  function setActive() {
    // Pick the section that appears first in DOM order among visible ones
    let activeSection = null;
    for (const section of sections) {
      if (visible.has(section.id)) {
        activeSection = section;
        break;
      }
    }

    navLinks.forEach((link) => link.classList.remove("active"));
    if (activeSection) {
      linkMap.get(activeSection.id)?.classList.add("active");
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.add(entry.target.id);
        } else {
          visible.delete(entry.target.id);
        }
      });
      setActive();
    },
    {
      // rootMargin pushes the trigger zone below the fixed nav
      rootMargin: "-64px 0px -40% 0px",
      threshold: 0,
    },
  );

  sections.forEach((s) => observer.observe(s));
})();

/* ─── 6. PROJECT CARDS STAGGER ───────────────────────────────
   Reads data-delay from each card inside #projects and applies
   it as a CSS custom property so the transition is handled
   purely in CSS — keeping JS concerns separate from animation.
   (Cards already carry data-animate="zoom-in" + data-delay.)
   This module is a safeguard to ensure delays are applied even
   if the HTML order changes or cards are added dynamically.
   ──────────────────────────────────────────────────────────── */
(function initProjectStagger() {
  const projectsSection = document.getElementById("projects");
  if (!projectsSection) return;

  const cards = projectsSection.querySelectorAll('[data-animate="zoom-in"]');

  cards.forEach((card, index) => {
    // Prefer explicit data-delay; fall back to index * 100ms
    const delay =
      card.dataset.delay !== undefined
        ? parseInt(card.dataset.delay, 10)
        : index * 100;

    // Apply delay as an inline style so CSS transition picks it up
    card.style.transitionDelay = `${delay}ms`;
  });

  // Once all cards are revealed, remove the delay so hover
  // transitions feel instant (not sluggish)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        // transitionDelay cleanup happens after the reveal finishes
        card.addEventListener(
          "transitionend",
          () => {
            card.style.transitionDelay = "";
          },
          { once: true },
        );
        observer.unobserve(card);
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => observer.observe(card));
})();

/* ─── 7. TERMINAL CURSOR ON HERO H1 ─────────────────────────
   Injects a blinking `|` span after the h1 text using CSS.
   Removed automatically if the user prefers reduced motion.
   ──────────────────────────────────────────────────────────── */
(function initTerminalCursor() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const h1 = document.querySelector("#hero h1");
  if (!h1) return;

  const cursor = document.createElement("span");
  cursor.setAttribute("aria-hidden", "true");
  cursor.className = "hero-cursor";
  cursor.textContent = "_";
  h1.appendChild(cursor);
})();

/* ─── 8. DYNAMIC COPYRIGHT YEAR ─────────────────────────────
   Keeps the footer year accurate without manual updates.
   ──────────────────────────────────────────────────────────── */
(function initYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
})();
