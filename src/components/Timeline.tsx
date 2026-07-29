import React from 'react';
import {
  Compass,
  MapPin,
  Globe,
  Users,
  Sparkles,
  TrendingUp,
  Target,
  Flag
} from 'lucide-react';

interface TimelineProps {
  isDark: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ isDark }) => {
  const milestones = [
    {
      year: '2012 – 2014',
      title: 'e-Governance Core Engine Owner',
      org: 'ABM Knowledgeware Ltd',
      desc: 'Held complete technical ownership of the Property Tax module supporting 50+ municipal corporations across Maharashtra.',
      tag: 'Foundation Phase',
      icon: Compass
    },
    {
      year: '2014 – 2017',
      title: 'Oracle PL/SQL & SSIS EDW Architect',
      org: 'Mastek & Majesco Ltd',
      desc: 'Architected core PL/SQL insurance engines and SSIS dimensional warehouses, cutting nightly batch runtimes by 30%. Won Heart of Mastek & Stellar Awards.',
      tag: 'Enterprise EDW Mastery',
      icon: TrendingUp
    },
    {
      year: '2017 – 2025',
      title: 'Malaysia Onsite Cutover Lead (7+ Years)',
      org: 'Majesco Sdn Bhd, Kuala Lumpur',
      desc: 'Spearheaded 5 consecutive core Insurance Domain to Majesco CLS data migration cutovers for Etiqa Malaysia with zero defect go-lives.',
      tag: 'Global Onsite Leadership',
      icon: Globe
    },
    {
      year: '2025 – Present',
      title: 'Senior Technical Lead & Oil Data Architect',
      org: 'ZiniosEdge (Infosys - British Petroleum)',
      desc: 'Leading a 4-engineer pod at BP, establishing MDM logic, data lineage, and automated SQL quality gates that cut anomalies by 95%.',
      tag: 'Current Executive Role',
      icon: Users
    },
    {
      year: '2025 – 2026',
      title: 'Agentic AI & GenAI Pioneer',
      org: 'Continuous AI Innovation',
      desc: 'Completed Google Responsible AI, AWS Prompt Engineering with Claude, and LangChain certifications. Building n8n multi-agent data mapping workflows.',
      tag: 'AI Frontier',
      icon: Sparkles
    },
    {
      year: 'Future Vision',
      title: 'Enterprise AI & Data Architecture Director',
      org: 'Global Executive Goals',
      desc: 'Aiming to lead C-suite enterprise AI strategy, autonomous cloud data warehousing, and zero-risk legacy migrations.',
      tag: 'Strategic Horizon',
      icon: Target
    }
  ];

  return (
    <section id="timeline" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Strategic Progression
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            14-Year Career & AI Evolution
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            From e-Governance database engineering to global onsite insurance leadership and modern Agentic AI architecture.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m) => {
            const IconComponent = m.icon;
            return (
              <div
                key={m.title}
                className={`p-6 rounded-3xl border relative transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl'
                    : 'bg-white border-slate-200 hover:border-cyan-300 shadow-md shadow-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${
                    isDark
                      ? 'bg-slate-900 text-cyan-400 border-slate-800'
                      : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${
                    isDark
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                      : 'bg-cyan-100 text-cyan-800 border-cyan-300'
                  }`}>
                    {m.year}
                  </span>
                </div>

                <span className={`text-[10px] font-mono uppercase font-semibold tracking-wider ${
                  isDark ? 'text-indigo-400' : 'text-indigo-700 font-bold'
                }`}>
                  {m.tag}
                </span>

                <h3 className={`text-base font-bold mt-1 mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{m.title}</h3>
                <p className={`text-xs font-mono mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>{m.org}</p>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
