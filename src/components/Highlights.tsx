import React from 'react';
import {
  ShieldCheck,
  Database,
  Globe,
  Zap,
  Cpu,
  Cloud,
  Layers,
  Sparkles,
  Workflow
} from 'lucide-react';
import { highlights } from '../data/portfolioData';

interface HighlightsProps {
  isDark: boolean;
}

const iconMap: Record<string, any> = {
  ShieldCheck,
  Database,
  Globe,
  Zap,
  Cpu,
  Cloud,
  Layers,
  Sparkles,
  Workflow
};

export const Highlights: React.FC<HighlightsProps> = ({ isDark }) => {
  return (
    <section id="highlights" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Core Highlights
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Proven Executive & Engineering Capability
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Combining domain mastery in Insurance Domain policy administration with high-throughput cloud architectures and Agentic AI workflows.
          </p>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, index) => {
            const IconComponent = iconMap[h.icon] || ShieldCheck;
            return (
              <div
                key={h.title}
                className={`group relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 shadow-lg shadow-black/40'
                    : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-xl shadow-slate-200/60'
                }`}
              >
                {/* Glow highlight on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-2xl transition-all pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl border group-hover:scale-110 transition-transform ${
                    isDark
                      ? 'bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 border-cyan-500/30'
                      : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                    isDark
                      ? 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30'
                      : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                  }`}>
                    {h.badge}
                  </span>
                </div>

                <h3 className={`text-lg font-bold transition-colors mb-2 ${
                  isDark
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-slate-900 group-hover:text-cyan-700'
                }`}>
                  {h.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
                }`}>
                  {h.description}
                </p>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono transition-colors ${
                  isDark
                    ? 'border-slate-800/50 text-slate-500 group-hover:text-cyan-400'
                    : 'border-slate-200 text-slate-600 group-hover:text-cyan-700 font-bold'
                }`}>
                  <span>0{index + 1} // HIGHLIGHT</span>
                  <span>Explore &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
