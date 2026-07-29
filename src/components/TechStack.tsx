import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Database,
  Cloud,
  Workflow,
  Sparkles,
  Layers,
  Cpu,
  GitBranch,
  Box,
  Binary
} from 'lucide-react';

interface TechStackProps {
  isDark: boolean;
}

export const TechStack: React.FC<TechStackProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const techStackItems = [
    { name: 'Informatica PowerCenter', cat: 'etl', icon: Workflow, level: 'Master' },
    { name: 'Oracle PL/SQL', cat: 'databases', icon: Database, level: 'Master' },
    { name: 'SQL & Query Tuning', cat: 'databases', icon: Binary, level: 'Master' },
    { name: 'SSIS (MSBI Suite)', cat: 'etl', icon: Layers, level: 'Expert' },
    { name: 'Python (Pandas, NumPy)', cat: 'programming', icon: Terminal, level: 'Advanced' },
    { name: 'Snowflake EDW', cat: 'cloud', icon: Cloud, level: 'Advanced' },
    { name: 'AWS (S3, Athena, EC2)', cat: 'cloud', icon: Cloud, level: 'Advanced' },
    { name: 'GCP Data Stack', cat: 'cloud', icon: Cloud, level: 'Advanced' },
    { name: 'Power BI', cat: 'analytics', icon: Code, level: 'Advanced' },
    { name: 'Tableau', cat: 'analytics', icon: Code, level: 'Advanced' },
    { name: 'OpenAI API', cat: 'ai', icon: Sparkles, level: 'Specialist' },
    { name: 'Gemini API', cat: 'ai', icon: Cpu, level: 'Specialist' },
    { name: 'Claude AI', cat: 'ai', icon: Cpu, level: 'Specialist' },
    { name: 'n8n Automation', cat: 'ai', icon: Workflow, level: 'Specialist' },
    { name: 'Replit Vibe Coding', cat: 'ai', icon: Terminal, level: 'Advanced' },
    { name: 'Prompt Engineering', cat: 'ai', icon: Sparkles, level: 'Master' },
    { name: 'Git & Version Control', cat: 'tools', icon: GitBranch, level: 'Master' },
    { name: 'VS Code & PyCharm', cat: 'tools', icon: Code, level: 'Master' },
    { name: 'SQL Developer & Toad', cat: 'tools', icon: Database, level: 'Master' },
  ];

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'etl', label: 'ETL & Integration' },
    { id: 'databases', label: 'Databases & SQL' },
    { id: 'cloud', label: 'Cloud Data' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'programming', label: 'Programming' },
    { id: 'tools', label: 'Dev Tools' },
  ];

  const filteredItems = techStackItems.filter(
    (item) => activeCategory === 'all' || item.cat === activeCategory
  );

  return (
    <section id="tech-stack" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Technology Stack
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Tools, Languages & Platforms
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            A comprehensive ecosystem spanning enterprise legacy databases, modern cloud data stacks, and cutting-edge GenAI APIs.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : isDark
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.name}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-md shadow-slate-100'
                }`}
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${
                  isDark
                    ? 'bg-slate-900 text-cyan-400 border-slate-800'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                }`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</p>
                  <span className={`text-[10px] font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
