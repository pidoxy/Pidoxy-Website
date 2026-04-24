import { Github, Linkedin, Mail, Code } from "lucide-react";
import profileData from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-24">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="font-bold text-slate-900">{profileData.name}</p>
          <p className="text-sm text-slate-500 mt-1">
            Building at the intersection of Engineering & Research.
          </p>
        </div>

        <div className="flex gap-6">
          <SocialIcon href={profileData.socials.github} icon={<Github size={18} />} />
          <SocialIcon href={profileData.socials.linkedin} icon={<Linkedin size={18} />} />
          <SocialIcon href={profileData.socials.devpost} icon={<Code size={18} />} />
          <SocialIcon href={profileData.socials.email} icon={<Mail size={18} />} />
        </div>
        
        <div className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-blue-600 transition-colors"
    >
      {icon}
    </a>
  );
}
