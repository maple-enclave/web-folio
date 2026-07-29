import React, { useState } from 'react';
import {
  User,
  Target,
  Compass,
  Users,
  Brain,
  Lightbulb,
  Workflow,
  Sparkles,
  TrendingUp,
  Award,
  ShieldCheck,
  Check
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'journey' | 'philosophy' | 'leadership' | 'ai-vision'>('journey');

  const storyTabs = [
    {
      id: 'journey',
      title: 'Professional Journey',
      icon: Compass,
      content: (
        <div className="space-y-4">
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            With 14+ years in data engineering and technical leadership, my career has been rooted in solving high-complexity data challenges for global enterprises. I began by architecting core taxation algorithms for 50+ municipal corporations in India before transitioning into enterprise insurance, where I spent over 7 years onsite in Malaysia leading mission-critical data cutovers for Etiqa Insurance.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            Recently, at British Petroleum (Infosys), I redirected my focus toward oil & gas enterprise master data pipelines, engineering automated SQL quality gates that eliminated 95% of post-migration anomalies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <p className={`text-xs font-bold font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>14+ YEARS IN DATA</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>ETL, EDW, OLTP to OLAP, Data Lineage & MDM Architecture</p>
            </div>
            <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <p className={`text-xs font-bold font-mono ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>7+ YEARS MALAYSIA ONSITE</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Primary technical lead for 5 consecutive Insurance Domain cutovers</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'philosophy',
      title: 'Technical Philosophy',
      icon: Brain,
      content: (
        <div className="space-y-4">
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            I view data architecture as the backbone of organizational truth. When migrating core policy administration systems or building enterprise data warehouses, "almost accurate" is a failure. My philosophy revolves around **Zero-Defect Delivery** through automated, deterministic validation.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            I enforce rigorous Source-to-Target Mappings (STTM), automated SQL assertion scripts, and Master Data Management (MDM) checkpoints before data ever reaches production analytics or cutover targets.
          </p>
          <div className="space-y-2 pt-2">
            {[
              'Automated Data Quality Checks before Cutover',
              'Context-Switch Minimization in Oracle PL/SQL & Informatica',
              'Traceable Field-Level Data Lineage Across Relational Schemas',
              'Strict Alignment Between BRDs, FSDs, and Database Triggers'
            ].map((item) => (
              <div key={item} className={`flex items-center gap-2 text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                <Check className={`w-4 h-4 shrink-0 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'leadership',
      title: 'Leadership & Stakeholders',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            Leadership is about clarity, empathy, and accountability. I lead cross-functional engineering pods (4 to 6 engineers), fostering a culture of technical rigor and continuous growth. As an onsite lead in Malaysia, I regularly bridged executive C-suite stakeholders, vendor architects, business analysts, and QA teams.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            I take pride in translating ambiguous business requirements into actionable engineering roadmaps, conducting thorough code reviews, and maintaining zero downtime during weekend system cutovers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <p className={`text-xs font-bold font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>MENTORSHIP & CODE REVIEWS</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Elevating pod capabilities through technical workshops and guidelines</p>
            </div>
            <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <p className={`text-xs font-bold font-mono ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>ONSITE ESCALATION LEAD</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Calm, decisive decision-making during high-stakes go-live windows</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-vision',
      title: 'AI Innovation & Cloud Future',
      icon: Sparkles,
      content: (
        <div className="space-y-4">
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            The next generation of data engineering will be AI-driven. I actively integrate **Agentic AI, LLM prompt engineering, n8n automation, and LangChain** directly into traditional ETL discovery workflows.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
            By building AI agents that parse DDLs, draft STTM mappings, and auto-generate SQL assertion scripts, I cut migration discovery timelines by 60%. My goal is to lead the convergence of cloud data warehousing (AWS/Snowflake) with agentic GenAI automation.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'n8n Workflow Automation',
              'OpenAI & Gemini APIs',
              'Claude Prompt Engineering',
              'LangChain & Vector DBs',
              'Snowflake & Cloud EDW',
              'Responsible AI Governance'
            ].map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border ${
                  isDark
                    ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                    : 'bg-cyan-100 border-cyan-300 text-cyan-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Executive Profile
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Architecting High-Throughput Data & AI Systems
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Translating complex enterprise requirements into zero-defect cutovers, cloud architecture, and intelligent automated workflows.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Summary Card */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border shadow-xl ${
              isDark ? 'bg-slate-950/80 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Pratik Deshmukh</h3>
                <p className={`text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>Senior Technical Lead & Architect</p>
              </div>
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
              {personalDetails.aboutStory.whoIAm}
            </p>

            {/* Key Value Propositions */}
            <div className={`space-y-3 pt-4 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
              <div className="flex items-start gap-3">
                <Target className={`w-4 h-4 shrink-0 mt-1 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <div>
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Zero-Defect Cutover Guarantee</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>5 consecutive migration go-lives delivered without business disruption.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className={`w-4 h-4 shrink-0 mt-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <div>
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>30% - 95% Performance Gains</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>SQL tuning, SSIS optimization, and automated data anomaly reduction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className={`w-4 h-4 shrink-0 mt-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <div>
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Agentic AI Pioneer</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Shortening migration discovery by 60% with LLMs & n8n agents.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Tab Controls */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {storyTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center justify-center gap-2 px-3 py-3 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                        : isDark
                        ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                        : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.title.split(' ')[0]}</span>
                    <span className="sm:hidden">{tab.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Content Card */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border min-h-[320px] flex flex-col justify-between ${
                isDark ? 'bg-slate-950/80 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div>
                <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  <span>{storyTabs.find((t) => t.id === activeTab)?.title}</span>
                </h4>
                {storyTabs.find((t) => t.id === activeTab)?.content}
              </div>

              {/* Bottom Quote footer */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs italic ${
                isDark ? 'border-slate-800/60 text-slate-400' : 'border-slate-200 text-slate-600 font-medium'
              }`}>
                <span>"Data fidelity is the foundation of digital trust."</span>
                <span className={`font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>-- Pratik Deshmukh</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
