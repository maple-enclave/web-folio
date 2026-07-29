import React from 'react';
import { X, FileText, Download, Printer, Check, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails, experiences, certifications, awards } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 relative shadow-2xl ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase">Interactive Resume View</span>
            <h3 className="text-2xl font-extrabold text-white">Pratik Deshmukh</h3>
            <p className="text-xs text-slate-400">Senior Technical Lead & Data Migration Architect</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-indigo-500/20 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 print:text-black print:bg-white text-xs sm:text-sm">
          
          {/* Header Info */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-base text-white">{personalDetails.name}</span>
              <span className="text-xs font-mono text-cyan-400">{personalDetails.location}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">{personalDetails.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <span>Email: {personalDetails.email}</span>
              <span>Phone: {personalDetails.phone}</span>
              <span>LinkedIn: linkedin.com/in/depratik</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-2">PROFESSIONAL SUMMARY</h4>
            <p className="text-slate-300 leading-relaxed">
              Results-driven Senior Technical Lead and Data Migration Architect with 14+ years delivering enterprise-scale ETL, Data Warehouse, and large-volume data migration solutions across Life Insurance, P&C Insurance, and Oil & Gas domains. Direct hands-on experience migrating core policy administration data from Insurance Domain platform into target systems, including a Malaysia-based engagement migrating Etiqa’s legacy Insurance Domain environment into Majesco CLS. Proven record leading cross-functional technical teams of 4–6 engineers through full SDLC delivery.
            </p>
          </div>

          {/* Work History */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-4">PROFESSIONAL EXPERIENCE</h4>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between font-bold text-white">
                    <span>{exp.role} | {exp.company}</span>
                    <span className="font-mono text-xs text-indigo-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">Client: {exp.client || 'Enterprise'} | Domain: {exp.domain}</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 text-xs">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-3">CERTIFICATIONS</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {certifications.map((c) => (
                  <li key={c.id} className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{c.title} ({c.issuer})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 mb-3">AWARDS & RECOGNITION</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {awards.map((a) => (
                  <li key={a.id} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{a.title} - {a.organization} ({a.year})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 cursor-pointer"
          >
            Close Resume Reader
          </button>
        </div>
      </div>
    </div>
  );
};
