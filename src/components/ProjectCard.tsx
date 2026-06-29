import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import GlassCard from "./ui/GlassCard";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <GlassCard className={`flex h-full flex-col p-7 ${featured ? "sm:p-8" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-text-muted">{project.category}</p>
          <h3 className={`mt-1 font-semibold text-text ${featured ? "text-2xl" : "text-xl"}`}>
            {project.title}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="glass inline-flex h-9 w-9 flex-none items-center justify-center rounded-full text-text"
          >
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="inline-flex items-center rounded-full border border-glass bg-(--glass-bg) px-3 py-1 text-xs font-medium text-text">
            {t}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
