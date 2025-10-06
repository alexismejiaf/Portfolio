import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const contactItems = [
  {
    label: "Location",
    value: "Tegucigalpa, Honduras",
    icon: MapPinIcon,
  },
  {
    label: "Phone",
    value: "+504 9842 8161",
    icon: PhoneIcon,
    href: "tel:+50498428161",
  },
  {
    label: "Email",
    value: "bryamejia@gmail.com",
    icon: EnvelopeIcon,
    href: "mailto:bryamejia@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alexismejiaf",
    icon: ArrowTopRightOnSquareIcon,
    href: "https://linkedin.com/in/alexismejiaf",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-sky-500/15 to-transparent blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build the next milestone together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Whether you need strategic engineering support or a partner for your
            next product launch, I&apos;m ready for the conversation.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur">
            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="h-5 w-5 flex-none text-sky-300" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-slate-200 transition hover:border-white/30 hover:bg-slate-900/50"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-slate-200"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-sm text-slate-200 shadow-lg shadow-sky-500/10 backdrop-blur">
            <div>
              <p className="text-base font-semibold text-white">
                Project-ready mindset
              </p>
              <p className="mt-3 leading-relaxed">
                I thrive in collaborative settings, pairing closely with founders,
                designers, and platform teams to ship impactful features quickly.
                Let&apos;s outline a roadmap, audit an existing system, or spin up
                a proof of concept.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-white/20 bg-slate-950/40 px-6 py-5 text-sm text-slate-300">
              <p>Availability</p>
              <p className="mt-2 font-semibold text-white">
                Open to full-time, freelance, and remote-first collaborations in 2025.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        © 2025 Bryan Alexis Mejia Fonseca. Built with Next.js and Tailwind CSS.
      </footer>
    </section>
  );
}
