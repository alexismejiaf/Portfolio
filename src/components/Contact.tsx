import { ArrowTopRightOnSquareIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import GlassCard from "./ui/GlassCard";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/profile";

const items = [
  { label: "Location", value: profile.location, icon: MapPinIcon },
  { label: "Phone", value: profile.phone, icon: PhoneIcon, href: profile.phoneHref },
  { label: "Email", value: profile.email, icon: EnvelopeIcon, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/alexismejiaf", icon: ArrowTopRightOnSquareIcon, href: profile.links.linkedin, external: true },
  { label: "GitHub", value: "github.com/alexismejiaf", icon: ArrowTopRightOnSquareIcon, href: profile.links.github, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="text-center">
          <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
            Contact
          </span>
          <h2 id="contact-heading" className="mt-6 text-3xl font-semibold text-text sm:text-4xl">
            Let&apos;s build the next milestone together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
            Open to full-time, freelance, and remote-first collaborations.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
          <Reveal>
            <GlassCard className="p-8">
              <div className="space-y-4">
                {items.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <>
                      <Icon className="h-5 w-5 flex-none text-text" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-muted">{item.label}</p>
                        <p className="text-sm font-semibold text-text">{item.value}</p>
                      </div>
                    </>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="glass glass-interactive flex items-center gap-3 rounded-2xl px-4 py-4 text-text"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-glass bg-(--bg-elev) px-4 py-4 text-text">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.05}>
            <GlassCard className="flex h-full flex-col justify-between gap-6 p-8 text-sm text-text-muted">
              <div>
                <p className="text-base font-semibold text-text">Proven professional impact</p>
                <p className="mt-3 leading-relaxed">
                  2+ years delivering production systems at Rita Group and Sumadi. I pair fresh
                  perspective with hands-on experience building scalable, automated platforms — ready
                  to collaborate with founders, designers, and platform teams.
                </p>
              </div>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-transform hover:scale-105"
              >
                Download CV
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-glass px-4 py-8 text-center text-sm text-text-muted sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS, and Remotion.
      </footer>
    </section>
  );
}
