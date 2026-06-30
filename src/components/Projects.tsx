"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";
import { featuredProjects, gridProjects, categories } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? gridProjects : gridProjects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="relative" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="text-center">
          <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
            Projects
          </span>
          <h2 id="projects-heading" className="mt-6 text-3xl font-semibold text-text sm:text-4xl">
            Products and experiments that move the needle.
          </h2>
        </Reveal>

        {/* Featured */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProjectCard project={p} featured />
            </Reveal>
          ))}
        </div>

        {/* Filter chips */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-14 flex flex-wrap justify-center gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-accent text-accent-contrast"
                  : "glass text-text-muted hover:text-text"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
