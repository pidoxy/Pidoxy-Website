import Image from "next/image";
import { Code2, PlayCircle, Sparkles } from "lucide-react";
import { getYouTubeEmbedUrl } from "@/lib/content";

type ProjectMediaProps = {
  title: string;
  tagline: string;
  tech: string[];
  image?: string;
  video?: string;
  compact?: boolean;
};

export default function ProjectMedia({
  title,
  tagline,
  tech,
  image,
  video,
  compact = false,
}: ProjectMediaProps) {
  const videoUrl = getYouTubeEmbedUrl(video);

  if (videoUrl) {
    return (
      <iframe
        src={videoUrl}
        className="absolute inset-0 h-full w-full"
        title={`${title} demo`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (image) {
    return (
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return compact ? (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#1d4ed8_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_30%)]" />
      <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 text-sky-100">
        <Sparkles size={18} />
      </div>
      <div className="absolute -left-10 bottom-4 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />
      <div className="absolute right-10 top-10 h-20 w-20 rounded-full border border-white/10" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100/80">
          <Code2 size={14} />
          Project Snapshot
        </div>

        <div>
          <h4 className="max-w-[14rem] text-2xl font-semibold tracking-tight">{title}</h4>
          <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate-200">
            {tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_42%,#1d4ed8_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.28),transparent_32%)]" />
      <div className="absolute left-10 top-10 h-28 w-28 rounded-full border border-white/10" />
      <div className="absolute bottom-10 right-12 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

      <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
            <PlayCircle size={14} />
            Portfolio Highlight
          </div>
          <div className="hidden rounded-full border border-white/15 bg-white/10 p-3 text-sky-100 sm:block">
            <Sparkles size={18} />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/75">
            Featured case study
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            {tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
