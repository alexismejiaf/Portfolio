import GlassCard from "./ui/GlassCard";
import Reveal from "./ui/Reveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
            Skillset
          </span>
          <h2 id="skills-heading" className="mt-6 text-3xl font-semibold text-text sm:text-4xl">
            A versatile toolkit for modern product teams.
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            From front-end polish to resilient serverless back-ends and automation pipelines — the
            right tool for the outcome, not the other way around.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.05}>
              <GlassCard className="h-full p-7">
                <p className="text-xs uppercase tracking-wider text-text-muted">Category</p>
                <h3 className="mt-1 text-xl font-semibold text-text">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-glass bg-(--glass-bg) px-3 py-1 text-xs font-medium text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
