import React from 'react';
import { Award, Trophy, Star, CheckCircle2 } from 'lucide-react';
import { awards } from '../data/portfolioData';

interface AchievementsProps {
  isDark: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ isDark }) => {
  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Honors & Awards
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Awards & Executive Recognition
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Recognized by client C-suites and organizational leadership for zero-defect delivery and technical mentorship.
          </p>
        </div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-slate-950/90 border-slate-800 hover:border-indigo-500/50 backdrop-blur-xl shadow-xl'
                  : 'bg-white border-slate-200 hover:border-indigo-400 shadow-xl shadow-slate-200/50'
              }`}
            >
              {/* Background ambient trophy glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className={`p-3.5 rounded-2xl border ${
                  isDark
                    ? 'bg-gradient-to-tr from-amber-500/20 via-indigo-500/20 to-cyan-500/20 text-amber-400 border-amber-500/30'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  <Trophy className="w-6 h-6" />
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  isDark
                    ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}>
                  {award.year}
                </span>
              </div>

              <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{award.title}</h3>
              <p className={`text-xs font-mono font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
                {award.organization} | {award.category}
              </p>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                {award.description}
              </p>

              <div className={`mt-6 pt-4 border-t flex items-center gap-1.5 text-xs font-mono ${
                isDark ? 'border-slate-800/60 text-emerald-400' : 'border-slate-200 text-emerald-700 font-bold'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Executive Commendation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
