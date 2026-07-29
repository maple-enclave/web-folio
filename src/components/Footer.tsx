import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative z-10 border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-300 text-slate-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
                PD
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Pratik Deshmukh</span>
                <span className={`text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>Senior Technical Lead & Architect</span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
              Architecting zero-defect data migrations and building next-generation agentic AI workflows for enterprise leaders.
            </p>

            <div className={`flex items-center gap-2 text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>🟢 Available for Executive Engagements & Senior Roles</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <p className={`text-xs font-mono uppercase font-bold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Quick Navigation</p>
            <div className={`grid grid-cols-2 gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>
              <a href="#about" className="hover:text-cyan-500 transition-colors">About Story</a>
              <a href="#highlights" className="hover:text-cyan-500 transition-colors">Highlights</a>
              <a href="#experience" className="hover:text-cyan-500 transition-colors">Timeline</a>
              <a href="#projects" className="hover:text-cyan-500 transition-colors">Case Studies</a>
              <a href="#skills" className="hover:text-cyan-500 transition-colors">Technical Matrix</a>
              <a href="#ai-skills" className="hover:text-cyan-500 transition-colors">AI Ecosystem</a>
              <a href="#recruiter-hub" className="hover:text-cyan-500 transition-colors">Why Hire Me</a>
              <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact Direct</a>
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40'
                  : 'bg-white border-slate-300 text-slate-800 hover:text-cyan-700 hover:border-cyan-400 font-bold shadow-sm'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
            </button>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalDetails.email}`}
                className={`p-2.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-cyan-700 shadow-sm'
                }`}
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-blue-400'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-blue-700 shadow-sm'
                }`}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-purple-400'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-purple-700 shadow-sm'
                }`}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-emerald-400'
                    : 'bg-white border-slate-300 text-slate-700 hover:text-emerald-700 shadow-sm'
                }`}
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-4 ${
          isDark ? 'border-slate-800/80 text-slate-500' : 'border-slate-300 text-slate-600 font-medium'
        }`}>
          <p>© {new Date().getFullYear()} Pratik Deshmukh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Executive Impact</span>
            <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
          </p>
        </div>

      </div>
    </footer>
  );
};
