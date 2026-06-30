import { CalendarIcon, CheckCircleIcon, MapPinIcon } from "@heroicons/react/24/outline";
import GlassCard from "./ui/GlassCard";
import Reveal from "./ui/Reveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="space-y-5 text-center">
          <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
            Experience
          </span>
          <h2 id="experience-heading" className="text-3xl font-semibold text-text sm:text-4xl">
            Hands-on impact across SaaS, cloud, and security.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.title}`} delay={i * 0.05}>
              <GlassCard className="p-8">
                <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,240px)] sm:gap-10">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-text sm:text-3xl">{exp.title}</h3>
                      <p className="text-lg font-medium text-text-muted">{exp.company}</p>
                    </div>
                    <ul className="space-y-3 text-sm text-text-muted sm:text-base">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <CheckCircleIcon
                            className="mt-1 h-4 w-4 flex-none text-text"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl border border-glass bg-(--bg-elev) p-6 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-text" aria-hidden="true" />{" "}
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-text" aria-hidden="true" />{" "}
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
