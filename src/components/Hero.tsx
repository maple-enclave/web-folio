import React, { useState, useEffect } from 'react';
import {
  FileText,
  Mail,
  Calendar,
  MessageSquare,
  Linkedin,
  Github,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Briefcase
} from 'lucide-react';
import { personalDetails, rotatingTitles } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
  onOpenSchedule: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDark,
  onOpenResume,
  onOpenSchedule,
  onOpenAiAssistant
}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for rotating titles
  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const metrics = [
    { label: 'Years Experience', count: '14+' },
    { label: 'Onsite Cutovers (Malaysia)', count: '5' },
    { label: 'Enterprise Projects', count: '10+' },
    { label: 'Municipalities Supported', count: '50+' },
    { label: 'Production Defect Rate', count: '0%' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial glowing light blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 order-2 lg:order-1">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                🟢 Available for Executive & Lead Roles
              </span>

              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                Pune, India | Onsite Malaysia Alumni
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className={`text-xs font-mono uppercase tracking-widest font-bold mb-2 ${
                isDark ? 'text-indigo-400' : 'text-indigo-700'
              }`}>
                Executive Portfolio & Technical Profile
              </p>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                  {personalDetails.name}
                </span>
              </h1>
            </div>

            {/* Sub-titles */}
            <div className="flex flex-col space-y-2">
              <p className={`text-lg sm:text-xl font-bold tracking-tight ${
                isDark ? 'text-slate-300' : 'text-slate-800'
              }`}>
                Senior Technical Lead | Insurance Domain Migration Architect | Cloud Data & AI Specialist
              </p>

              {/* Typewriter text */}
              <div className={`flex items-center gap-2 text-xl sm:text-2xl font-mono font-bold min-h-[36px] ${
                isDark ? 'text-cyan-400' : 'text-cyan-700'
              }`}>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>&gt;</span>
                <span>{displayText}</span>
                <span className="animate-pulse text-indigo-500 font-normal">|</span>
              </div>
            </div>

            {/* Executive Tagline */}
            <p
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
              }`}
            >
              {personalDetails.heroTagline}
            </p>

            {/* Action Buttons Grid */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 cursor-pointer transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenSchedule}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all cursor-pointer transform hover:-translate-y-0.5 ${
                  isDark
                    ? 'text-cyan-300 bg-cyan-950/60 border-cyan-500/40 hover:bg-cyan-900/60 hover:border-cyan-400'
                    : 'text-cyan-900 bg-cyan-100 border-cyan-300 hover:bg-cyan-200 hover:border-cyan-400'
                }`}
              >
                <Calendar className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                <span>Schedule Meeting</span>
              </button>

              <a
                href="#recruiter-hub"
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all border ${
                  isDark
                    ? 'bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                    : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
                }`}
              >
                <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span>Why Hire Me</span>
              </a>

              {/* Direct Quick Contact Icons */}
              <div className={`flex items-center gap-2 pl-2 border-l ${
                isDark ? 'border-slate-800/80' : 'border-slate-300'
              }`}>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-400'
                  }`}
                  title="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-emerald-700 hover:border-emerald-400'
                  }`}
                  title="WhatsApp Chat"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-blue-700 hover:border-blue-400'
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40'
                      : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-purple-700 hover:border-purple-400'
                  }`}
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Counter Row */}
            <div className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-5 gap-4 ${
              isDark ? 'border-slate-800/60' : 'border-slate-300'
            }`}>
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
                    isDark ? 'text-cyan-400' : 'text-cyan-700'
                  }`}>
                    {m.count}
                  </span>
                  <span className={`text-[11px] font-medium leading-snug mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group w-full max-w-[260px] sm:max-w-[280px]">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-600 opacity-60 blur-xl group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Main Photo Card Frame */}
              <div
                className={`relative rounded-3xl p-2.5 border shadow-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-slate-950/90 border-slate-800/80 backdrop-blur-xl'
                    : 'bg-white/90 border-slate-200 backdrop-blur-xl'
                }`}
              >
                {/* Photo with subtle zoom hover */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={personalDetails.headshotUrl}
                    alt="Pratik Deshmukh - Senior Technical Lead"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = '1';
                        target.src = 'https://drive.google.com/uc?export=view&id=1zIbegeY6skdwssAcIqTvDM0XToY9XRUk';
                      } else if (target.dataset.fallback === '1') {
                        target.dataset.fallback = '2';
                        target.src = '/headshot.jpg';
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for photo contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Sub-caption below image */}
                <div className="mt-2.5 px-1.5 py-1 flex items-center justify-between">
                  <span className="font-black text-sm sm:text-base tracking-wider text-cyan-400 uppercase">
                    PRATIK DESHMUKH
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    Verified
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span>SCROLL DOWN</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
