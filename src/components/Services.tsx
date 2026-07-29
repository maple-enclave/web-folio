import React from 'react';
import {
  Database,
  Users,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { services } from '../data/portfolioData';

interface ServicesProps {
  isDark: boolean;
  onOpenSchedule: () => void;
}

const serviceIconMap: Record<string, any> = {
  Database,
  Users,
  Bot,
  Zap
};

export const Services: React.FC<ServicesProps> = ({ isDark, onOpenSchedule }) => {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Consulting & Advisory
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Services & Value Offerings
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            High-impact solutions for enterprise cutovers, engineering pod mentorship, and agentic AI integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((serv) => {
            const IconComp = serviceIconMap[serv.icon] || Database;
            return (
              <div
                key={serv.id}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-xl shadow-slate-200/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl border ${
                      isDark
                        ? 'bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 border-cyan-500/30'
                        : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                      isDark
                        ? 'bg-indigo-950/60 text-indigo-400 border-indigo-500/30'
                        : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                    }`}>
                      {serv.targetAudience}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{serv.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                    {serv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className={`text-[11px] font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Key Deliverables:</p>
                    {serv.deliverables.map((deliv, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-200' : 'text-slate-800 font-medium'}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenSchedule}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white hover:border-cyan-500/40 hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 font-bold shadow-sm'
                  }`}
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
