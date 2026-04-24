import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProjectMedia from "@/components/ProjectMedia";
import projectData from "@/data/projects.json";
import { ArrowLeft, Github, ExternalLink, Zap, Shield, Cpu, PlayCircle } from "lucide-react";
import { hasUsableUrl } from "@/lib/content";
import type { Project } from "@/types";

const projects = projectData as Project[];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-32">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{project.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">{project.details.tagline}</p>
        </div>

        {/* MEDIA SECTION (Video Priority) */}
        <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-video relative mb-12 shadow-lg">
          <ProjectMedia
            title={project.title}
            tagline={project.details.tagline}
            tech={project.tech}
            image={project.image}
            video={project.video}
          />
        </div>

        {/* Tech & Links Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-y border-slate-100 py-6 mb-16">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">{t}</span>
            ))}
          </div>
          <div className="flex gap-4">
            {hasUsableUrl(project.links.demo) && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {hasUsableUrl(project.links.github) && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600">
                <Github size={16} /> View Code
              </a>
            )}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
              <p className="text-lg text-slate-600 leading-relaxed">{project.details.problem}</p>
            </section>
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h3>
              <p className="text-lg text-slate-600 leading-relaxed">{project.details.solution}</p>
            </section>
            
            {/* Key Features */}
            {project.details.features && project.details.features.length > 0 && (
              <section>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Highlights</h3>
                 <div className="space-y-6">
                   {project.details.features.map((feature, idx) => (
                     <div key={idx} className="flex gap-4">
                       <div className="mt-1 shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm">{idx + 1}</div>
                       <div>
                         <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                         <p className="text-slate-600">{feature.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </section>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-blue-600"/> Technical Focus
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><Zap size={16} className="text-slate-400 shrink-0"/><span>High Performance</span></li>
                <li className="flex gap-2"><Shield size={16} className="text-slate-400 shrink-0"/><span>Secure Architecture</span></li>
                {!hasUsableUrl(project.links.github) && (
                  <li className="flex gap-2">
                    <PlayCircle size={16} className="text-slate-400 shrink-0"/>
                    <span>Built for showcase even when source is private.</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
