import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Ambient background gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-[-300px] h-[600px] bg-[radial-gradient(circle_farthest-side_at_50%_20%,rgba(56,189,248,0.35),transparent)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-[40%] h-[600px] bg-[radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.25),transparent)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-400px] h-[600px] bg-[radial-gradient(circle_at_20%_80%,rgba(30,64,175,0.3),transparent)] blur-3xl" aria-hidden="true" />

      <Navigation />
      <main className="relative z-10 flex flex-col gap-32 pb-32 sm:gap-36 sm:pb-40">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
