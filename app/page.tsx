import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectMedia from "../components/ProjectMedia";
import Awards from "../components/Awards";
import projectData from "../data/projects.json"; 
import researchData from "../data/research.json"; 
import experienceData from "../data/experience.json";
import profileData from "../data/profile.json";
import { ArrowRight, FileText, Github, Linkedin, Mail, Code, Terminal, Microscope, Sparkles, BriefcaseBusiness, FlaskConical, Rocket, Trophy, Blocks, ChevronRight, ExternalLink } from "lucide-react";
import { getDemoMeta, hasUsableUrl } from "@/lib/content";
import type { Experience, Project, ResearchPaper } from "@/types";

const projects = projectData as Project[];
const experiences = experienceData as Experience[];
const papers = researchData as ResearchPaper[];
const featuredProject = projects[0];
const remainingProjects = projects.slice(1);

const proofPoints = [
  {
    label: "Projects Shipped",
    value: `${projects.length}+`,
    note: "Products, prototypes, and systems across AI, web, and cloud.",
    icon: Rocket,
  },
  {
    label: "Research Pipeline",
    value: `${papers.length}`,
    note: "Accepted and ongoing work in medical imaging and multimodal AI.",
    icon: FlaskConical,
  },
  {
    label: "Professional Roles",
    value: `${experiences.length}`,
    note: "Engineering, AI, research, and infrastructure experience.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Recognition",
    value: "2nd",
    note: "HackLab Nigeria runner-up with grant-backed edge AI work.",
    icon: Trophy,
  },
];

const featureStrips = [
  "Software engineering across product, cloud, and real-time systems",
  "AI engineering spanning RAG, computer vision, NLP, and edge inference",
  "Research in medical imaging, multimodal diagnosis, and self-supervision",
];

const narrativeBlocks = [
  {
    title: "Product-minded engineering",
    body: "I build things that need to work for real users, not just look clever in a demo. That means reliability, performance, and clear interfaces matter as much as the model.",
  },
  {
    title: "AI that ships",
    body: "My work lives at the line between experimentation and deployment: retrieval systems, edge AI, multimodal pipelines, and production-ready integrations.",
  },
  {
    title: "Research with practical edges",
    body: "I care about rigorous research, especially in medical imaging and diagnostic AI, but I also want the output to inform systems that can actually be deployed.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-24">
        
        {/* HERO SECTION */}
        <section id="about" className="mb-24 pt-10">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_26%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] shadow-[0_30px_100px_-60px_rgba(15,23,42,0.45)]">
            <div className="grid gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  <Sparkles size={14} />
                  Engineer. AI Builder. Researcher.
                </div>

                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
                  {profileData.name}
                </h1>
                <h2 className="mt-4 text-xl font-medium text-blue-600 md:text-2xl">
                  {profileData.title}
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                  {profileData.bio}
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {featureStrips.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-sm font-medium leading-relaxed text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <SocialBtn href={profileData.socials.github} icon={<Github size={20} />} label="GitHub" />
                  <SocialBtn href={profileData.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
                  <SocialBtn href={profileData.socials.email} icon={<Mail size={20} />} label="Email" />
                  <SocialBtn href={profileData.socials.devpost} icon={<Code size={20} />} label="Devpost" />

                  <div className="hidden h-10 w-px bg-slate-200 sm:block" />

                  <a href="/resume_swe.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700">
                    <Terminal size={16} /> Engineering CV
                  </a>
                  <a href="/resume_research.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600">
                    <FileText size={16} /> Research CV
                  </a>
                </div>

                <div className="mt-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Core Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {proofPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div key={point.label} className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="inline-flex rounded-2xl bg-slate-900 p-2 text-white">
                          <Icon size={18} />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          Proof
                        </span>
                      </div>
                      <p className="text-3xl font-bold tracking-tight text-slate-950">{point.value}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">{point.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.note}</p>
                    </div>
                  );
                })}

                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5 text-blue-900 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]">
                    <Blocks size={14} />
                    Currently building
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Production-facing AI systems, clinical decision support tooling, and research pipelines that bridge experimentation and deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Positioning</p>
              <h3 className="text-3xl font-bold text-slate-900">What I Build</h3>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
              A portfolio designed to show range without losing specificity: product engineering, AI systems, cloud infrastructure, and research work that all reinforce one another.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {narrativeBlocks.map((block) => (
              <article key={block.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Narrative</p>
                <h4 className="text-xl font-bold tracking-tight text-slate-900">{block.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{block.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mb-24 scroll-mt-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Selected portfolio</p>
              <h3 className="text-3xl font-bold text-slate-900">Featured Work</h3>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">Engineering, AI systems, research-adjacent prototypes, and open source</span>
          </div>

          <article className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] border-b border-slate-100 bg-slate-900 lg:min-h-[420px] lg:border-b-0 lg:border-r">
                <ProjectMedia
                  title={featuredProject.title}
                  tagline={featuredProject.details.tagline}
                  tech={featuredProject.tech}
                  image={featuredProject.image}
                  video={featuredProject.video}
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Flagship Case Study
                  </span>
                  {featuredProject.details.features.slice(0, 1).map((item) => (
                    <span key={item.title} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {item.title}
                    </span>
                  ))}
                </div>

                <h4 className="text-3xl font-bold tracking-tight text-slate-900">{featuredProject.title}</h4>
                <p className="mt-3 text-lg font-medium text-blue-600">{featuredProject.details.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  {featuredProject.details.solution}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {featuredProject.details.features.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tech.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href={`/work/${featuredProject.id}`} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700">
                    Read Full Case Study
                  </a>
                  {hasUsableUrl(featuredProject.links.demo) && (
                    <a href={featuredProject.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600">
                      <ExternalLink size={15} />
                      {getDemoMeta(featuredProject.links.demo)?.label ?? "Visit Demo"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {remainingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Career proof</p>
              <h3 className="text-3xl font-bold text-slate-900">Experience</h3>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
              A blend of product engineering, enterprise AI, research, and infrastructure work across startups, banking, and independent labs.
            </p>
          </div>

          <div className="grid gap-5">
            {experiences.map((role, index) => (
              <article key={`${role.company}-${role.period}`} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                        {index + 1}
                      </span>
                      {role.focus && (
                        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                          {role.focus}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h4 className="text-2xl font-bold tracking-tight text-slate-900">{role.company}</h4>
                        <p className="text-base font-medium text-blue-600">{role.role}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-mono text-slate-500">
                        {role.period}
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="w-full max-w-sm space-y-4 rounded-3xl bg-slate-50 p-5">
                    {role.highlights && role.highlights.length > 0 && (
                      <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">What stands out</p>
                        <div className="space-y-2">
                          {role.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-2 text-sm text-slate-700">
                              <ChevronRight size={15} className="mt-0.5 shrink-0 text-blue-500" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {role.stack && role.stack.length > 0 && (
                      <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Stack and context</p>
                        <div className="flex flex-wrap gap-2">
                          {role.stack.map((item) => (
                            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AWARDS */}
        <Awards />

        {/* RESEARCH */}
        <section id="research" className="scroll-mt-24 border-t border-slate-100 pt-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Research trajectory</p>
              <h3 className="text-3xl font-bold text-slate-900">Research</h3>
            </div>
            <a href={profileData.socials.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
              Google Scholar <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-6">
             {papers.map((paper) => (
               <article key={paper.id} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2563eb,#38bdf8)] opacity-70" />
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
                  <div className="max-w-3xl">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      {paper.tags.map((tag) => (
                        <span key={tag} className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                          tag === "Published"
                            ? "bg-emerald-50 text-emerald-700"
                            : tag === "Ongoing"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-slate-100 text-slate-700"
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {paper.title}
                    </h4>
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-mono text-slate-500">
                      <span>{paper.venue}</span>
                      <span className="text-slate-300">•</span>
                      <span>{paper.date}</span>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600 md:text-base">
                      {paper.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {paper.tags.slice(0, 4).map((tag) => (
                        <span key={`${paper.id}-${tag}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hasUsableUrl(paper.url) ? (
                    <a href={paper.url} target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-slate-700">
                      <FileText size={14}/> Read Paper
                    </a>
                  ) : (
                    <div className="shrink-0 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
                      <div className="flex items-center gap-2 font-bold">
                        <Microscope size={14}/> Active Investigation
                      </div>
                      <p className="mt-1 max-w-[13rem] text-xs leading-relaxed text-blue-700">
                        Ongoing work with methods and direction already defined.
                      </p>
                    </div>
                  )}
                </div>
              </article>
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
