"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./theme/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { profile } from "@/data/profile";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const NAV_IDS = navItems.map((n) => n.id);

const menuVariants = {
  closed: { opacity: 0, y: -10, scale: 0.98 },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, y: -6 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const active = useActiveSection(NAV_IDS);
  const reduce = useReducedMotion();

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsOverHero(!entry.isIntersecting);
    });

    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50"
      aria-label="Main navigation"
      data-over-hero={isOverHero}
    >
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="nav-frost flex h-14 items-center justify-between rounded-full px-4 sm:px-6"
        >
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-contrast">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-text sm:inline">
              {profile.shortName}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-(--glass-bg-strong)"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.cvPath}
              download
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast transition-transform hover:scale-105 sm:inline-flex"
            >
              Download CV
            </a>
            <button
              onClick={() => setIsOpen((p) => !p)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="nav-frost-control inline-flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
            >
              {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="exit"
              style={{ transformOrigin: "top center" }}
              className="nav-frost nav-frost-menu mt-2 space-y-1 rounded-3xl p-3 md:hidden"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={menuItemVariants}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-(--glass-bg-strong) hover:text-text"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                variants={menuItemVariants}
                href={profile.cvPath}
                download
                onClick={() => setIsOpen(false)}
                className="mt-1 block rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-contrast"
              >
                Download CV
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
