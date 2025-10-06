import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DevicePhoneMobileIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { value: "5+", label: "Years building software and networks" },
  { value: "12", label: "Projects shipped across web, AI, and cloud" },
  { value: "AWS & CCNA", label: "Cloud and infrastructure certifications" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-36">
      <div className="absolute inset-x-0 -top-64 -z-10 flex justify-center blur-3xl">
        <div className="h-[340px] w-[600px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.35),_transparent_60%)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 flex justify-end blur-3xl">
        <div className="h-[320px] w-[420px] translate-x-1/4 bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.35),_transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.45fr_1fr] lg:px-8">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
            Software Developer / Network Engineer
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Bryan Mejia.
              <br />
              I craft resilient digital products that scale.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Full-stack engineer with a cloud and networking background. I
              design end-to-end solutions that blend modern UX, scalable
              architecture, and automation to deliver measurable business impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:bryamejia@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50"
            >
              Get in touch
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/alexismejiaf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
            >
              LinkedIn
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <DocumentArrowDownIcon className="h-4 w-4" />
              View projects
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:items-center">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              <MapPinIcon className="h-5 w-5 text-sky-300" />
              Tegucigalpa, Honduras
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              <DevicePhoneMobileIcon className="h-5 w-5 text-sky-300" />
              <a href="tel:+50498428161" className="hover:text-white">
                +504 9842 8161
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              <EnvelopeIcon className="h-5 w-5 text-sky-300" />
              <a href="mailto:bryamejia@gmail.com" className="hover:text-white">
                bryamejia@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-blue-600/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-500/20 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
              Key metrics
            </span>
            <div className="mt-6 grid gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-4xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Currently at</p>
              <p className="mt-1 text-slate-300">
                Rita Group - Building serverless AI assistants and a B2B marketplace
                with Next.js, AWS, and modern developer tooling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <ArrowDownIcon className="h-6 w-6 animate-bounce text-slate-500" />
      </div>
    </section>
  );
}
