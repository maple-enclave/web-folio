import React, { useState } from 'react';
import {
  FolderGit2,
  Database,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle,
  X,
  Code
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-migration', label: 'Data Migration' },
    { id: 'edw', label: 'Data Warehouse' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'egov', label: 'e-Governance' },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Case Studies
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Enterprise Project Showcase
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Deep-dive architectures, zero-defect cutover stories, and high-volume data engineering achievements.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : isDark
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl'
                  : 'bg-white border-slate-200 hover:border-cyan-400 shadow-xl shadow-slate-200/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${
                    isDark
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                      : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                  }`}>
                    {proj.badge || proj.category}
                  </span>
                  <span className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{proj.duration}</span>
                </div>

                <h3 className={`text-xl font-bold transition-colors mb-2 ${
                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-700'
                }`}>
                  {proj.title}
                </h3>

                <p className={`text-xs font-mono font-semibold mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
                  Client: {proj.client} | {proj.domain}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>
                  {proj.overview}
                </p>

                {/* Impact Highlight */}
                <div className={`p-4 rounded-2xl border mb-6 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-cyan-50/60 border-cyan-200/80'}`}>
                  <p className={`text-[11px] font-mono uppercase font-bold mb-1 ${isDark ? 'text-cyan-400' : 'text-cyan-800'}`}>Business Impact:</p>
                  <p className={`text-xs leading-snug ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>{proj.outcomeAndImpact}</p>
                </div>
              </div>

              {/* Technologies list & Action Button */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.toolsAndTech.slice(0, 5).map((tool) => (
                    <span
                      key={tool}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                        isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-400'
                          : 'bg-slate-100 border-slate-200 text-slate-700 font-medium'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                  {proj.toolsAndTech.length > 5 && (
                    <span className={`px-2 py-1 rounded-lg text-xs font-mono border ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-slate-500'
                        : 'bg-slate-100 border-slate-200 text-slate-600 font-semibold'
                    }`}>
                      +{proj.toolsAndTech.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(proj)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    isDark
                      ? 'text-white bg-slate-900 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800'
                      : 'text-slate-900 bg-slate-100 border-slate-300 hover:bg-slate-200 font-bold'
                  }`}
                >
                  <span>View Case Study Details</span>
                  <ChevronRight className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 relative shadow-2xl ${
              isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {activeModalProject.badge || activeModalProject.category}
            </span>

            <h3 className="text-2xl font-extrabold mt-3 mb-2">{activeModalProject.title}</h3>
            <p className="text-xs font-mono text-cyan-400 mb-6">
              {activeModalProject.client} | {activeModalProject.domain} | {activeModalProject.duration}
            </p>

            <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
              <div>
                <h4 className={`font-bold uppercase font-mono mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>Business Problem:</h4>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}>{activeModalProject.businessProblem}</p>
              </div>

              <div>
                <h4 className={`font-bold uppercase font-mono mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>Architecture & Solution Design:</h4>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}>{activeModalProject.architectureDescription}</p>
              </div>

              <div>
                <h4 className={`font-bold uppercase font-mono mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>Key Lead Responsibilities:</h4>
                <ul className={`space-y-1.5 list-disc pl-5 ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  {activeModalProject.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`font-bold uppercase font-mono mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>Challenges & Solutions:</h4>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}>{activeModalProject.challengesAndSolutions}</p>
              </div>

              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-cyan-950/40 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'}`}>
                <h4 className={`font-bold uppercase font-mono mb-1 ${isDark ? 'text-cyan-400' : 'text-cyan-800'}`}>Outcome & Business Impact:</h4>
                <p className={isDark ? 'text-slate-200' : 'text-slate-800 font-medium'}>{activeModalProject.outcomeAndImpact}</p>
              </div>

              <div>
                <h4 className={`font-bold uppercase font-mono mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Tools & Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.toolsAndTech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-xl text-xs font-mono border ${
                        isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-800 font-medium'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
