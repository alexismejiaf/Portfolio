import { AcademicCapIcon, CheckBadgeIcon, GlobeAltIcon, SparklesIcon } from "@heroicons/react/24/outline";
import GlassCard from "./ui/GlassCard";
import Reveal from "./ui/Reveal";

const highlights = [
  "Designing secure, scalable serverless systems with a human-centered experience.",
  "Bridging software, cloud, and networking for faster, more reliable delivery.",
  "Obsessed with automation, AI-driven workflows, and measurable outcomes.",
];

const languages = [
  { name: "Spanish", level: "Native", pct: 100 },
  { name: "English", level: "C1/C2 — EF SET 90/100", pct: 92 },
];

export default function About() {
  return (
    <section id="about" className="relative" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="space-y-5 text-center">
          <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
            About
          </span>
          <h2 id="about-heading" className="text-3xl font-semibold text-text sm:text-4xl">
            Building meaningful experiences with thoughtful engineering.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-muted sm:text-lg">
            A Tegucigalpa-based software developer working at the intersection of cloud,
            automation, and user-first interfaces — from rapid prototypes to production systems.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <Reveal>
              <GlassCard className="p-8">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-text">
                  <SparklesIcon className="h-4 w-4" aria-hidden="true" /> What drives me
                </span>
                <ul className="mt-6 space-y-4 text-sm text-text-muted sm:text-base">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={0.05}>
                <GlassCard className="h-full p-6">
                  <AcademicCapIcon className="h-6 w-6 text-text-muted" aria-hidden="true" />
                  <p className="mt-4 text-xs uppercase tracking-wider text-text-muted">Education</p>
                  <p className="text-base font-semibold text-text">B.Sc. Computer Systems Engineering</p>
                  <p className="mt-2 text-sm text-text-muted">UNITEC — Tegucigalpa, Honduras</p>
                  <p className="text-sm text-text-muted">Graduated 2023</p>
                </GlassCard>
              </Reveal>
              <Reveal delay={0.1}>
                <GlassCard className="h-full p-6">
                  <CheckBadgeIcon className="h-6 w-6 text-text-muted" aria-hidden="true" />
                  <p className="mt-4 text-xs uppercase tracking-wider text-text-muted">Certification</p>
                  <p className="text-base font-semibold text-text">Cisco Certified Network Associate</p>
                  <p className="mt-2 text-sm text-text-muted">CCNA — networking, routing, and security fundamentals.</p>
                </GlassCard>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <GlassCard className="h-full p-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-text">
                <GlobeAltIcon className="h-5 w-5" aria-hidden="true" /> Languages
              </span>
              <div className="mt-6 space-y-5 text-sm text-text">
                {languages.map((l) => (
                  <div key={l.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>{l.name}</span>
                      <span className="text-text-muted">{l.level}</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={l.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${l.name} proficiency`}
                      className="h-1.5 rounded-full bg-(--glass-border)"
                    >
                      <div className="h-full rounded-full bg-accent" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
