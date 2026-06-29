"use client";

import { useState } from "react";
import { motion } from "motion/react";
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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  return (
    <nav className="fixed inset-x-0 top-0 z-50" aria-label="Main navigation">
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass flex h-14 items-center justify-between rounded-full px-4 sm:px-6">
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
              className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
            >
              {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="glass mt-2 space-y-1 rounded-3xl p-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-(--glass-bg-strong) hover:text-text"
              >
                {item.name}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download
              onClick={() => setIsOpen(false)}
              className="mt-1 block rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-contrast"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
