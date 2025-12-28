import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import projectData from "@/data/projects.json";
import { ArrowLeft, Github, ExternalLink, Zap, Shield, Cpu } from "lucide-react";

// This function generates the static paths for all your projects
export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-32">
        {/* Back Button */}
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            {project.details.tagline}
          </p>
        </div>

        {/* Tech Stack & Links Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-y border-slate-100 py-6 mb-16">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600">
                <Github size={16} /> View Code
              </a>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Main Story (Left 2/3) */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.details.problem}
              </p>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.details.solution}
              </p>
            </section>

            {/* Key Features List */}
            {project.details.features && project.details.features.length > 0 && (
              <section>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Flows</h3>
                 <div className="space-y-6">
                   {project.details.features.map((feature, idx) => (
                     <div key={idx} className="flex gap-4">
                       <div className="mt-1 shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                         {idx + 1}
                       </div>
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

          {/* Sidebar (Right 1/3) - Tech Highlights */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-blue-600"/> Technical Focus
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <Zap size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Real-time processing with Edge Computing</span>
                </li>
                <li className="flex gap-2">
                  <Shield size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Privacy-first facial recognition</span>
                </li>
                <li className="flex gap-2">
                  <Github size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>OpenCV integration for detection</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Visual Placeholder (Where your screenshots go) */}
        <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video flex items-center justify-center relative">
            <div className="text-center p-6">
                <p className="text-slate-400 font-medium mb-2">Project Demo / Screenshots</p>
                <p className="text-sm text-slate-400">Add your PheraCam UI images here later</p>
            </div>
        </div>

      </div>
    </main>
  );
}