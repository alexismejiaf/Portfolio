import {
  AcademicCapIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  "Designing secure, scalable systems with a human-centered experience",
  "Bridging software, networking, and cloud infrastructure for faster delivery",
  "Obsessed with automation, AI-driven workflows, and measurable outcomes",
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white/5 to-transparent blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center sm:space-y-7">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            About
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Building meaningful experiences with thoughtful engineering.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            I&apos;m a Tegucigalpa-based software developer and network engineer
            who thrives at the intersection of cloud, automation, and user-first
            interfaces. From rapid prototypes to production systems, I bring a
            reliability mindset to every layer of the stack.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-500/10 backdrop-blur">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                <SparklesIcon className="h-4 w-4" />
                What drives me
              </span>
              <ul className="mt-6 space-y-4 text-sm text-slate-200 sm:text-base">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <AcademicCapIcon className="h-6 w-6 text-sky-300" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-400">
                      Education
                    </p>
                    <p className="text-base font-semibold text-white">
                      B.Sc. Computer Systems Engineering
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-1 text-sm text-slate-300">
                  <p>Universidad Tecnológica Centroamericana - UNITEC</p>
                  <p>Tegucigalpa, Honduras - 2023</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckBadgeIcon className="h-6 w-6 text-sky-300" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-400">
                      Certification
                    </p>
                    <p className="text-base font-semibold text-white">
                      Cisco Certified Network Associate
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  Deep grounding in networking, routing, and security best
                  practices that inform every architecture decision.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/3 p-8 shadow-lg shadow-indigo-500/10 backdrop-blur">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                <GlobeAltIcon className="h-5 w-5" />
                Languages
              </span>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Spanish</span>
                    <span className="text-slate-400">Native</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>English</span>
                    <span className="text-slate-400">Advanced</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-sm text-slate-300">
              <p className="text-base font-semibold text-white">
                Outside the IDE
              </p>
              <p className="mt-3 leading-relaxed">
                Career-long learner exploring AI-assisted engineering, edge
                computing, and ways to make technology more accessible across
                Latin America.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
