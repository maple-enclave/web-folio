import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Skills } from './components/Skills';
import { AiEcosystem } from './components/AiEcosystem';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Timeline } from './components/Timeline';
import { RecruiterHub } from './components/RecruiterHub';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScheduleModal } from './components/ScheduleModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { languages } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300 relative ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Particle Canvas background */}
      <ParticleBackground isDark={isDark} />

      {/* Sticky Top Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero
          isDark={isDark}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        />

        <About isDark={isDark} />

        <Highlights isDark={isDark} />

        <Skills isDark={isDark} />

        <AiEcosystem
          isDark={isDark}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        />

        <Experience isDark={isDark} />

        <Projects isDark={isDark} />

        <TechStack isDark={isDark} />

        <Certifications isDark={isDark} />

        <Achievements isDark={isDark} />

        <Timeline isDark={isDark} />

        {/* Languages Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
                isDark
                  ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
                  : 'text-cyan-800 bg-cyan-50 border-cyan-200'
              }`}>
                Global Communication
              </span>
              <h3 className={`text-2xl font-extrabold tracking-tight mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Languages Spoken</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className={`p-6 rounded-3xl border flex items-center gap-4 transition-all ${
                    isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-md shadow-slate-100'
                  }`}
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{lang.name}</h4>
                    <p className={`text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>{lang.proficiency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RecruiterHub isDark={isDark} />

        <Services
          isDark={isDark}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />

        <Contact
          isDark={isDark}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
      </main>

      {/* Executive Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDark={isDark}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        isDark={isDark}
      />

      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
