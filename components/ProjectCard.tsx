import Link from "next/link";
import Image from "next/image";
import { Eye, Github, Code2, PlayCircle } from "lucide-react";
import { Project } from "@/types";

// Helper to clean YouTube links
const getEmbedUrl = (url: string) => {
  if (!url) return null;
  if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
  if (url.includes("youtu.be/")) return url.replace("youtu.be/", "youtube.com/embed/");
  return url;
};

export default function ProjectCard({ project }: { project: Project }) {
  const videoUrl = project.video ? getEmbedUrl(project.video) : null;

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 h-full">
      
      {/* MEDIA HEADER (Video or Image) */}
      <div className="h-48 bg-slate-900 border-b border-slate-100 relative overflow-hidden">
        
        {videoUrl ? (
          // OPTION A: If Video Exists -> Show YouTube Player
          <iframe 
            src={videoUrl} 
            className="absolute inset-0 w-full h-full"
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // OPTION B: If No Video -> Show Image (Clickable to Details)
          <Link href={`/work/${project.id}`} className="block h-full w-full relative">
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              /* Fallback Pattern */
              <>
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-50">
                  <Code2 size={48} />
                </div>
              </>
            )}
          </Link>
        )}

        {/* Live Badge (Floating on top) */}
        {project.links.demo && (
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
             {/* pointer-events-none ensures clicks pass through to video/image unless it's the button itself */}
             <a 
                href={project.links.demo} 
                target="_blank"
                className="pointer-events-auto flex items-center gap-1.5 bg-white/90 backdrop-blur text-xs font-semibold text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm hover:bg-white"
             >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live
             </a>
          </div>
        )}
      </div>

      {/* CONTENT BODY */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <Link href={`/work/${project.id}`}>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                {project.title}
            </h3>
          </Link>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-[11px] uppercase tracking-wide font-medium text-slate-600 bg-slate-100 rounded-md border border-slate-200"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
             <span className="px-2.5 py-1 text-[11px] font-medium text-slate-400 bg-slate-50 rounded-md">+{project.tech.length - 3}</span>
          )}
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <Link href={`/work/${project.id}`} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">
              View Case Study
          </Link>
          
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 ml-auto"
            >
              <Github size={16} /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}