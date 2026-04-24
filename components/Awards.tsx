import { Trophy, Users, Star } from "lucide-react";
import data from "@/data/awards.json";

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 border-t border-slate-100 pt-20 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Column 1: Awards & Scholarships */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
              <Trophy size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Honors & Awards</h3>
          </div>

          <div className="space-y-6">
            {data.awards.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="mt-1.5">
                  <Star size={14} className="text-slate-300 group-hover:text-yellow-500 transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-xs font-semibold text-blue-600 mb-1">{item.org}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Community Leadership */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Community Leadership</h3>
          </div>

          <div className="space-y-6">
            {data.community.map((item, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-100 pb-1">
                <div className="flex flex-col mb-1">
                  <h4 className="font-bold text-slate-900 text-base">{item.role}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{item.org}</span>
                    <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
