'use client';

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl" aria-label="Main navigation">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-600 text-base font-semibold text-white shadow-lg shadow-sky-500/30">
              BM
            </div>
            <a
              href="#"
              className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-100"
            >
              Bryan Mejia
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/alexismejiaf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition-all hover:scale-105 hover:border-white/40 hover:text-white"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/50"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/alexismejiaf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
