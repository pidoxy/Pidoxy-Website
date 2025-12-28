import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Awards from "../components/Awards"; // Import the new component
import projectData from "../data/projects.json";
import researchData from "../data/research.json";
import experienceData from "../data/experience.json";
import profileData from "../data/profile.json";
import { ArrowRight, FileText, Download, Github, Linkedin, Mail, Code } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* HERO */}
        <section id="about" className="mb-24 pt-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {profileData.name}
            </h1>
            <h2 className="text-xl text-blue-600 font-medium mb-6">
              {profileData.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {profileData.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <SocialBtn href={profileData.socials.github} icon={<Github size={20} />} label="GitHub" />
              <SocialBtn href={profileData.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialBtn href={profileData.socials.email} icon={<Mail size={20} />} label="Email" />
              <SocialBtn href={profileData.socials.devpost} icon={<Code size={20} />} label="Devpost" />

              <div className="h-10 w-px bg-slate-200 mx-2 hidden sm:block"></div>

              <a
                href="/resume_swe.pdf"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-700 transition-colors shadow-sm"
              >
                <Code size={16} /> Engineering CV
              </a>

              <a
                href="/resume_research.pdf"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
              >
                <FileText size={16} /> Research CV
              </a>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mb-24 scroll-mt-24">
          <div className="flex items-end justify-between mb-10">
            <h3 className="text-3xl font-bold text-slate-900">Featured Work</h3>
            <span className="hidden sm:block text-sm text-slate-500">Engineering & Open Source</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Experience</h3>

          <div className="relative border-l-2 border-slate-100 ml-3 space-y-12">
            {experienceData.map((role, index) => (
              <div key={index} className="relative pl-8">
                <div className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-white shadow-sm ${index === 0 ? "bg-blue-600" : "bg-slate-200"
                  }`} />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-900">{role.company}</h4>
                  <span className="text-sm font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded">
                    {role.period}
                  </span>
                </div>

                <p className="text-base font-medium text-blue-600 mb-3">
                  {role.role}
                </p>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: AWARDS & COMMUNITY */}
        <Awards />

        {/* RESEARCH */}
        <section id="research" className="scroll-mt-24 border-t border-slate-100 pt-20">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900">Research</h3>
            <a href={profileData.socials.scholar} target="_blank" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
              Google Scholar <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-6">
            {researchData.map((paper) => (
              <div key={paper.id} className="group relative p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                  <div className="max-w-3xl">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {paper.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-4 font-mono">
                      <span>{paper.venue}</span>
                      <span className="text-slate-300">•</span>
                      <span>{paper.date}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                      {paper.summary}
                    </p>
                  </div>
                  <a href={paper.url} target="_blank" className="shrink-0 flex items-center gap-2 px-4 py-2 text-xs font-bold bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm">
                    <FileText size={14} /> Read Paper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

function SocialBtn({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 text-slate-600 bg-slate-50 border border-slate-200 rounded-full hover:text-blue-600 hover:border-blue-200 hover:bg-white transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}