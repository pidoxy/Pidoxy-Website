import Link from "next/link";
import { Eye, Github, Radio, Code2 } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 h-full">
      
      {/* Visual Header (Placeholder for Image) */}
      <div className="h-48 bg-slate-100 border-b border-slate-100 relative group overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Icon Centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500">
          <Code2 size={48} />
        </div>

        {/* Live Badge */}
        {project.links.demo && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur text-xs font-semibold text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Demo
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
        <Link href={`/work/${project.id}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          </Link>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-[11px] uppercase tracking-wide font-medium text-slate-600 bg-slate-100 rounded-md border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          {project.links.demo && (
            <Link 
              href={project.links.demo}
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Eye size={16} /> Preview
            </Link>
          )}
          {project.links.github && (
            <Link 
              href={project.links.github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Github size={16} /> Source
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}