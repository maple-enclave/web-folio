import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Career Timeline
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Experience & Track Record
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            14+ years leading complex enterprise data transformations across Life Insurance, P&C Insurance, Oil & Gas, and e-Governance.
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className={`relative border-l-2 ml-4 sm:ml-8 space-y-8 ${
          isDark ? 'border-slate-800' : 'border-slate-300'
        }`}>
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10">
                
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    exp.isCurrent
                      ? 'bg-cyan-500 border-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/40 animate-pulse'
                      : isDark
                      ? 'bg-slate-950 border-indigo-500 text-indigo-400'
                      : 'bg-white border-indigo-600 text-indigo-600'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-950/90 border-slate-800 hover:border-slate-700 backdrop-blur-xl'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xl shadow-slate-200/60'
                  }`}
                >
                  {/* Card Header Top */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-mono font-bold uppercase ${
                          isDark ? 'text-cyan-400' : 'text-cyan-700'
                        }`}>
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                            isDark
                              ? 'bg-cyan-950 text-cyan-300 border-cyan-500/40'
                              : 'bg-cyan-100 text-cyan-800 border-cyan-300'
                          }`}>
                            CURRENT ROLE
                          </span>
                        )}
                        {exp.isOnsite && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border flex items-center gap-1 ${
                            isDark
                              ? 'bg-indigo-950 text-indigo-300 border-indigo-500/40'
                              : 'bg-indigo-100 text-indigo-800 border-indigo-300'
                          }`}>
                            <Globe className="w-3 h-3" />
                            ONSITE MALAYSIA
                          </span>
                        )}
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>
                      <p className={`text-sm sm:text-base font-semibold flex flex-wrap items-center gap-2 mt-1 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <Building className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span>{exp.company}</span>
                        {exp.client && (
                          <span className={isDark ? 'text-cyan-400 font-medium' : 'text-cyan-700 font-bold'}>
                            | Client: {exp.client}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Expand/Collapse Toggle */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                      className={`self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                      }`}
                    >
                      <span>{isExpanded ? 'Collapse' : 'View Achievements'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
                  }`}>
                    {exp.summary}
                  </p>

                  {/* Key Metrics Callouts */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`p-3 rounded-2xl border ${
                          isDark
                            ? 'bg-slate-900/60 border-slate-800/80'
                            : 'bg-slate-50 border-slate-200 shadow-sm'
                        }`}
                      >
                        <p className={`text-lg font-extrabold font-mono ${
                          isDark ? 'text-cyan-400' : 'text-cyan-700'
                        }`}>{m.value}</p>
                        <p className={`text-[11px] leading-snug ${
                          isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
                        }`}>{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className={`mt-6 pt-6 border-t space-y-4 ${
                      isDark ? 'border-slate-800/80' : 'border-slate-200'
                    }`}>
                      <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${
                        isDark ? 'text-indigo-400' : 'text-indigo-700'
                      }`}>
                        Key Engineering Achievements & Leadership
                      </h4>

                      <div className="space-y-2.5">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDark ? 'text-cyan-400' : 'text-cyan-600'
                            }`} />
                            <p className={`text-xs sm:text-sm leading-relaxed ${
                              isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
                            }`}>{h}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="pt-3">
                        <p className={`text-[11px] font-mono uppercase mb-2 ${
                          isDark ? 'text-slate-500' : 'text-slate-600 font-bold'
                        }`}>Technologies Used:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${
                                isDark
                                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                                  : 'bg-slate-100 border-slate-300 text-slate-800 font-semibold'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
