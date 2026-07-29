import React, { useState } from 'react';
import {
  ShieldCheck,
  Cpu,
  Users,
  Sparkles,
  Copy,
  Check,
  MessageSquare,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { recruiterPerspectives } from '../data/portfolioData';

interface RecruiterHubProps {
  isDark: boolean;
}

const iconMap: Record<string, any> = {
  Cpu,
  Users,
  Sparkles
};

export const RecruiterHub: React.FC<RecruiterHubProps> = ({ isDark }) => {
  const [activeTabId, setActiveTabId] = useState<string>('rec-1');
  const [copied, setCopied] = useState(false);

  const activePerspective = recruiterPerspectives.find((r) => r.id === activeTabId) || recruiterPerspectives[0];

  const handleCopySummary = () => {
    const summaryText = `
PRATIK DESHMUKH - EXECUTIVE RECRUITER SUMMARY
------------------------------------------------
Role: Senior Technical Lead & Data Migration Architect
Key Experience: 14+ Years Enterprise ETL, Data Warehousing, Insurance Domain Core Migrations
Key Highlights:
- 5 Consecutive Onsite Cutover Go-Lives for Etiqa Insurance in Malaysia (Insurance Domain to Majesco CLS)
- 95% Reduction in Data Anomalies at British Petroleum (Infosys) via automated SQL gates & MDM
- AI Agent & GenAI Pioneer: Certified in AWS Prompt Engineering, Google Responsible AI, LangChain
- Skills: Informatica, Oracle PL/SQL, SSIS, Snowflake, AWS, Python, n8n, OpenAI/Gemini APIs
- Contact: prateekd.tech@gmail.com | +91-9130991559 | Pune, India
------------------------------------------------
`.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="recruiter-hub" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Recruiter & Hiring Portal
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Why Hire Pratik Deshmukh?
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Tailored proof-points for C-suite decision makers, hiring managers, and AI talent acquisition teams.
          </p>
        </div>

        {/* Perspective Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {recruiterPerspectives.map((persp) => {
            const IconComp = iconMap[persp.icon] || ShieldCheck;
            const isActive = activeTabId === persp.id;
            return (
              <button
                key={persp.id}
                onClick={() => setActiveTabId(persp.id)}
                className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-tr from-cyan-950 via-indigo-950 to-slate-950 border-cyan-400 text-white shadow-xl shadow-cyan-500/10'
                    : isDark
                    ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-2xl border ${
                    isDark
                      ? 'bg-slate-900 text-cyan-400 border-slate-800'
                      : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  {isActive && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                      SELECTED PERSPECTIVE
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold mb-1">{persp.targetRole}</h3>
                <p className={`text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>{persp.keyTakeaway}</p>
              </button>
            );
          })}
        </div>

        {/* Active Perspective Content Card */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative ${
            isDark ? 'bg-slate-950/90 border-slate-800 backdrop-blur-2xl' : 'bg-white border-slate-200 shadow-slate-200/60'
          }`}
        >
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b ${
            isDark ? 'border-slate-800/80' : 'border-slate-200'
          }`}>
            <div>
              <span className={`text-xs font-mono font-bold uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>Target Persona:</span>
              <h3 className={`text-xl font-extrabold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{activePerspective.targetRole}</h3>
            </div>

            <button
              onClick={handleCopySummary}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-indigo-500/20 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Recruiter Note!' : 'Copy Executive ATS Note'}</span>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className={`text-xs font-mono uppercase tracking-widest font-bold mb-3 ${
                isDark ? 'text-slate-400' : 'text-slate-700'
              }`}>
                Key Proof Points for Your Team:
              </h4>

              <div className="space-y-3">
                {activePerspective.proofPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-800 font-medium'}`}>{pt}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-indigo-50/60 border-indigo-200/80'}`}>
              <div className={`flex items-center gap-2 mb-2 font-mono text-xs font-bold ${
                isDark ? 'text-indigo-400' : 'text-indigo-800'
              }`}>
                <HelpCircle className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`} />
                <span>Recommended Technical Interview Prompt:</span>
              </div>
              <p className={`text-xs sm:text-sm italic ${isDark ? 'text-slate-300' : 'text-slate-800 font-medium'}`}>
                "{activePerspective.recommendedQuestion}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
