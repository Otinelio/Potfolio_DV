import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/realisations/$slug"
      params={{ slug: project.slug }}
      className="group block relative overflow-hidden rounded-xl border border-white/10 bg-[color:var(--surface-1)]"
    >
      <div className="aspect-[4/5] md:aspect-[16/11] overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.name} — ${project.category}`}
          loading={index > 1 ? "lazy" : "eager"}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <div>
          <p className="text-xs mb-2 text-white/70" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {String(index + 1).padStart(2, "0")} · {project.category} · {project.year}
          </p>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {project.name}
          </h3>
        </div>
        <div className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center group-hover:bg-[color:var(--amber-signature)] group-hover:text-black group-hover:border-transparent transition-all duration-500">
          <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
