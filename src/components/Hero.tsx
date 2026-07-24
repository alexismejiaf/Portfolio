"use client";

import { useLayoutEffect, useRef } from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "./ui/GlassCard";
import MagneticButton from "./ui/MagneticButton";
import HeroAvatar from "./HeroAvatar";
import HeroVideoBackground from "./HeroVideoBackground";
import { profile } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-role]", { autoAlpha: 0, y: 18, duration: 0.45 })
          .from("[data-hero-heading]", { autoAlpha: 0, y: 34, duration: 0.7 }, "-=0.18")
          .from("[data-hero-summary]", { autoAlpha: 0, y: 18, duration: 0.5 }, "-=0.42")
          .from("[data-hero-actions]", { autoAlpha: 0, y: 18, duration: 0.5 }, "-=0.35")
          .from("[data-hero-profile]", { autoAlpha: 0, x: 34, scale: 0.97, duration: 0.75 }, "<");
      });
      return () => media.revert();
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate overflow-hidden pt-32 sm:pt-40"
      aria-label="Introduction"
    >
      {/* Remotion liquid-glass background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <HeroVideoBackground />
        <div className="hidden h-full w-full bg-(--bg-elev) motion-reduce:block" />
        <div className="absolute inset-0 bg-(--bg)/40" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="space-y-8">
          <span
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-text-muted"
            data-hero-role
          >
            {profile.role}
          </span>
          <div className="space-y-5">
            <h1
              className="text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl"
              data-hero-heading
            >
              Hi, I&apos;m {profile.shortName}.
              <br />
              {profile.tagline}
            </h1>
            <p className="max-w-2xl text-base text-text-muted sm:text-lg" data-hero-summary>
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3" data-hero-actions>
            <MagneticButton
              href={`mailto:${profile.email}`}
              ariaLabel="Send email"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast"
            >
              Get in touch <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              href={profile.cvPath}
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-text"
            >
              <DocumentArrowDownIcon className="h-4 w-4" aria-hidden="true" /> Download CV
            </MagneticButton>
            <MagneticButton
              href={profile.links.github}
              external
              ariaLabel="GitHub profile"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-text"
            >
              GitHub <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-text">
              <MapPinIcon className="h-5 w-5 text-text-muted" aria-hidden="true" />{" "}
              {profile.location}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="glass glass-interactive flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-text"
            >
              <EnvelopeIcon className="h-5 w-5 text-text-muted" aria-hidden="true" />{" "}
              {profile.email}
            </a>
          </div>
        </div>

        <div data-hero-profile>
          <GlassCard className="p-8">
            <div className="flex items-center gap-4">
              <HeroAvatar />
              <div>
                <p className="text-base font-semibold text-text">{profile.shortName}</p>
                <p className="text-sm text-text-muted">{profile.role}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6">
              {profile.stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-text">{s.value}</p>
                  <p className="text-sm text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-2xl border border-glass bg-(--bg-elev) p-5 text-sm text-text-muted">
              {profile.current}
            </p>
          </GlassCard>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <ArrowDownIcon className="h-6 w-6 animate-bounce text-text-muted" aria-hidden="true" />
      </div>
    </section>
  );
}
