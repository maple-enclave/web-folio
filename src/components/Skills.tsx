import React, { useState } from 'react';
import {
  Database,
  Workflow,
  Code,
  Layers,
  FileSpreadsheet,
  Briefcase,
  CloudSnow,
  Cloud,
  Server,
  Terminal,
  BarChart3,
  Users,
  ShieldAlert,
  Search,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import { Skill } from '../types';

interface SkillsProps {
  isDark: boolean;
}

const skillIconMap: Record<string, any> = {
  Workflow,
  Database,
  Code,
  Layers,
  FileSpreadsheet,
  Briefcase,
  CloudSnow,
  Cloud,
  Server,
  Terminal,
  BarChart3,
  Users,
  ShieldAlert,
  Sparkles
};

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Expertise' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'etl', label: 'ETL Tools' },
    { id: 'databases', label: 'Databases & SQL' },
    { id: 'cloud', label: 'Cloud Data Stack' },
    { id: 'domain', label: 'Insurance Domain' },
    { id: 'leadership', label: 'Leadership' },
  ];

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Technical Matrix
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Core Technical & Domain Expertise
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Over a decade of hands-on mastery in enterprise ETL, Oracle PL/SQL, Insurance Domain platform migrations, and modern cloud platforms.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : isDark
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skills (e.g. PL/SQL, SSIS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium border transition-all outline-none ${
                isDark
                  ? 'bg-slate-950/90 border-slate-800 text-white focus:border-cyan-400'
                  : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'
              }`}
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = skillIconMap[skill.iconName] || Database;
            return (
              <div
                key={skill.name}
                className={`p-6 rounded-3xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl'
                    : 'bg-white border-slate-200 hover:border-cyan-300 shadow-lg shadow-slate-200/60'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border ${
                      isDark
                        ? 'bg-slate-900 text-cyan-400 border-slate-800'
                        : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {skill.name}
                      </h3>
                      <span className={`text-[11px] font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
                        {skill.experienceYears}+ Years Experience
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-mono font-extrabold ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
                    {skill.proficiency}%
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-4 min-h-[36px] ${
                  isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
                }`}>
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className={`w-full h-2 rounded-full overflow-hidden border ${
                  isDark ? 'bg-slate-900 border-slate-800/80' : 'bg-slate-200 border-slate-300'
                }`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-blue-600 transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
