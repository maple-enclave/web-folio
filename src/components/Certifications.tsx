import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  Calendar
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

interface CertificationsProps {
  isDark: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const [filterAiOnly, setFilterAiOnly] = useState(false);

  const displayedCerts = filterAiOnly
    ? certifications.filter((c) => c.isAiRelated)
    : certifications;

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Professional Credentials
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications & AI Accreditation
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Continuous technical mastery across Google AI, AWS Prompt Engineering, LangChain, DeepLearning.AI, and ITIL IT Governance.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setFilterAiOnly(!filterAiOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer border ${
              filterAiOnly
                ? isDark
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-cyan-100 text-cyan-900 border-cyan-300 shadow-md'
                : isDark
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 font-bold'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
            <span>{filterAiOnly ? 'Showing AI & Cloud Certifications' : 'Show All Certifications (9)'}</span>
          </button>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                cert.isAiRelated
                  ? isDark
                    ? 'bg-slate-950/90 border-cyan-500/30 hover:border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-white border-cyan-300 hover:border-cyan-500 shadow-lg shadow-slate-200/60'
                  : isDark
                  ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl border ${
                  isDark
                    ? 'bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 border-cyan-500/30'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                }`}>
                  {cert.isAiRelated ? <Sparkles className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${
                    cert.isAiRelated
                      ? isDark
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-500/40'
                        : 'bg-cyan-100 text-cyan-900 border-cyan-300'
                      : isDark
                      ? 'bg-indigo-950 text-indigo-300 border-indigo-500/30'
                      : 'bg-indigo-100 text-indigo-900 border-indigo-300'
                  }`}
                >
                  {cert.badgeText || 'Certified'}
                </span>
              </div>

              <h3 className={`text-base font-bold transition-colors mb-2 ${
                isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-700'
              }`}>
                {cert.title}
              </h3>

              <div className={`flex items-center justify-between text-xs font-mono pt-4 border-t ${
                isDark ? 'border-slate-800/60 text-slate-400' : 'border-slate-200 text-slate-600 font-medium'
              }`}>
                <span className="flex items-center gap-1">
                  <Building className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`} />
                  {cert.issuer}
                </span>
                <span className={`flex items-center gap-1 ${isDark ? 'text-slate-500' : 'text-slate-500 font-semibold'}`}>
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.issueDate}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
