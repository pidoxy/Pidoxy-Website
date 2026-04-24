import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { Project } from "@/types";
import { getDemoMeta, getProjectCategory, hasUsableUrl } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  const demoMeta = getDemoMeta(project.links.demo);
  const category = getProjectCategory(project.tech);
  const highlights = project.details.features.slice(0, 2);
  const proof = highlights[0]?.desc ?? project.description;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
      
      <div className="relative h-52 overflow-hidden border-b border-slate-100 bg-slate-900">
        <Link href={`/work/${project.id}`} className="block h-full w-full relative">
          <ProjectMedia
            title={project.title}
            tagline={project.details.tagline}
            tech={project.tech}
            image={project.image}
            video={project.video}
            compact
          />
        </Link>

        {demoMeta && (
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
             <a 
                href={project.links.demo} 
                target="_blank"
                rel="noopener noreferrer"
                className={`pointer-events-auto flex items-center gap-1.5 bg-white/90 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm hover:bg-white ${
                  demoMeta.tone === "emerald"
                    ? "border border-emerald-100 text-emerald-600"
                    : demoMeta.tone === "blue"
                      ? "border border-blue-100 text-blue-600"
                      : "border border-slate-200 text-slate-700"
                }`}
             >
                {demoMeta.tone === "emerald" ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                ) : (
                  <ExternalLink size={12} />
                )}
                {demoMeta.label}
             </a>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
            <Sparkles size={13} />
            Case Study
          </span>
        </div>

        <div className="mb-5">
          <Link href={`/work/${project.id}`}>
            <h3 className="mb-2 cursor-pointer text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
              {project.title}
            </h3>
          </Link>
          <p className="mb-3 text-sm font-medium text-blue-600">
            {project.details.tagline}
          </p>
          <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Proof point</p>
          <p className="text-sm leading-relaxed text-slate-700">{proof}</p>
        </div>

        {highlights.length > 0 && (
          <div className="mb-5 space-y-2">
            {highlights.map((feature) => (
              <div key={feature.title} className="flex items-start gap-2 text-sm text-slate-600">
                <ArrowRight size={14} className="mt-0.5 shrink-0 text-blue-500" />
                <span>
                  <span className="font-semibold text-slate-800">{feature.title}:</span> {feature.desc}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
             <span className="rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-400">+{project.tech.length - 3}</span>
          )}
        </div>
        
        <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
          <Link href={`/work/${project.id}`} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700">
            View Case Study
          </Link>
          
          {hasUsableUrl(project.links.github) && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900"
            >
              <Github size={16} /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
