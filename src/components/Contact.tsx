import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageSquare,
  Copy,
  Check,
  FileText,
  Calendar,
  Send,
  Loader2,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
  onOpenResume: () => void;
  onOpenSchedule: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  isDark,
  onOpenResume,
  onOpenSchedule
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: ''
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const validateName = (val: string) => {
    if (!val.trim()) return 'Name is required.';
    if (val.trim().length < 2) return 'Name must be at least 2 characters.';
    return '';
  };

  const validateEmail = (val: string) => {
    if (!val.trim()) return 'Email is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val.trim())) return 'Please enter a valid email address.';
    return '';
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return 'Mobile number is required.';
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return 'Please enter a valid mobile number (7–15 digits).';
    }
    return '';
  };

  const validateMessage = (val: string) => {
    if (!val.trim()) return 'Message is required.';
    if (val.trim().length < 10) return 'Message must be at least 10 characters long.';
    return '';
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string; message?: string } = {};
    const nameErr = validateName(formData.name);
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const msgErr = validateMessage(formData.message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const subject = `From Portfolio Enquiry: ${formData.name}`;
    const mailBody = `From Portfolio Enquiry
==========================================
Name: ${formData.name}
Email: ${formData.email}
Mobile Number: ${formData.phone}
Company: ${formData.company || 'Not Specified'}
Target Role: ${formData.role || 'Not Specified'}

Message:
------------------------------------------
${formData.message}
==========================================`;

    const mailto = `mailto:${personalDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    setLastMailtoUrl(mailto);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject })
      });
      setSubmitted(true);
      // Automatically trigger email client draft
      window.location.href = mailto;
    } catch (err) {
      setSubmitted(true);
      window.location.href = mailto;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Discuss Executive Opportunities
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Available for Senior Technical Lead, Data Migration Architect, Solutions Architect, and AI Automation Lead roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div
              className={`p-6 rounded-3xl border shadow-xl ${
                isDark ? 'bg-slate-950/90 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-slate-200/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-2xl border ${
                  isDark
                    ? 'bg-cyan-950 text-cyan-400 border-cyan-500/30'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                }`}>
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Direct Executive Reach</h3>
                  <span className={`text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>🟢 Open to Global Onsite & Remote</span>
                </div>
              </div>

              <div className={`space-y-3 text-xs ${isDark ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 shrink-0 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`} />
                  <span>{personalDetails.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 shrink-0 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                  <span>Timezone: IST (UTC+5:30) | Flexible for US/UK/ASEAN Cutovers</span>
                </div>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${personalDetails.email}`}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all group ${
                  isDark
                    ? 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/40 text-white'
                    : 'bg-white border-slate-200 hover:border-cyan-400 text-slate-900 shadow-sm'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isDark ? 'bg-cyan-950 text-cyan-400' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'}`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className={`text-[10px] font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500 font-bold'}`}>Email Directly</p>
                  <p className={`text-xs font-bold truncate ${isDark ? 'group-hover:text-cyan-400' : 'group-hover:text-cyan-700'}`}>{personalDetails.email}</p>
                </div>
              </a>

              <a
                href={personalDetails.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all group ${
                  isDark
                    ? 'bg-slate-950/90 border-slate-800 hover:border-emerald-500/40 text-white'
                    : 'bg-white border-slate-200 hover:border-emerald-400 text-slate-900 shadow-sm'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isDark ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className={`text-[10px] font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500 font-bold'}`}>WhatsApp Chat</p>
                  <p className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>{personalDetails.phone}</p>
                </div>
              </a>
            </div>

            {/* Social & Professional Channel Icons */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
              isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`text-xs font-mono uppercase font-semibold ${isDark ? 'text-slate-400' : 'text-slate-700 font-bold'}`}>Social Profiles:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={`mailto:${personalDetails.email}`}
                  className={`p-3 rounded-2xl border transition-all shadow-sm group ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-300 hover:bg-slate-200'
                  }`}
                  title={`Email: ${personalDetails.email}`}
                  aria-label="Email Pratik"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-2xl border transition-all shadow-sm group ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 hover:bg-slate-200'
                  }`}
                  title={`WhatsApp: ${personalDetails.phone}`}
                  aria-label="WhatsApp Chat"
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-2xl border transition-all shadow-sm group ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-slate-200'
                  }`}
                  title="LinkedIn: www.linkedin.com/in/depratik"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-2xl border transition-all shadow-sm group ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-300 hover:bg-slate-200'
                  }`}
                  title="GitHub: github.com/maple-enclave"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border cursor-pointer ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 font-bold'
                }`}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-950 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-900 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={onOpenSchedule}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Meeting</span>
              </button>
            </div>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl ${
                isDark ? 'bg-slate-950/90 border-slate-800 backdrop-blur-2xl' : 'bg-white border-slate-200 shadow-slate-200/60'
              }`}
            >
              <h3 className={`text-xl font-extrabold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Send an Executive Message</h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                Your message goes directly to Pratik's inbox. Expect a response within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Portfolio Enquiry Sent Successfully!</h4>
                      <p className="text-xs text-cyan-300 font-mono">
                        Subject: From Portfolio Enquiry: {formData.name}
                      </p>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border text-xs space-y-2 ${isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-800'}`}>
                    <p className="font-mono text-[11px] uppercase text-cyan-400 font-bold mb-1">Enquiry Details Logged:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div><span className="text-slate-400 font-mono">To:</span> prateekd.tech@gmail.com</div>
                      <div><span className="text-slate-400 font-mono">Name:</span> {formData.name}</div>
                      <div><span className="text-slate-400 font-mono">Email:</span> {formData.email}</div>
                      <div><span className="text-slate-400 font-mono">Mobile:</span> {formData.phone}</div>
                      {formData.company && <div><span className="text-slate-400 font-mono">Company:</span> {formData.company}</div>}
                      {formData.role && <div><span className="text-slate-400 font-mono">Role:</span> {formData.role}</div>}
                    </div>
                    <div className="pt-2 border-t border-slate-800/60">
                      <span className="text-slate-400 font-mono">Message:</span>
                      <p className="mt-1 text-slate-200 whitespace-pre-wrap italic bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80">{formData.message}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300">
                    Your email app was launched with prefilled details. You can also click below to open your mail client again or copy details.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={lastMailtoUrl}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-indigo-500/20 hover:from-cyan-400 hover:to-indigo-500"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', company: '', role: '', message: '' });
                        setErrors({});
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitMessage} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, name: val });
                          if (errors.name) setErrors({ ...errors, name: validateName(val) });
                        }}
                        onBlur={() => setErrors({ ...errors, name: validateName(formData.name) })}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none ${
                          errors.name
                            ? 'border-rose-500 bg-rose-950/20 text-white'
                            : isDark
                            ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 font-medium mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Your Email *</label>
                      <input
                        type="email"
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, email: val });
                          if (errors.email) setErrors({ ...errors, email: validateEmail(val) });
                        }}
                        onBlur={() => setErrors({ ...errors, email: validateEmail(formData.email) })}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none ${
                          errors.email
                            ? 'border-rose-500 bg-rose-950/20 text-white'
                            : isDark
                            ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 font-medium mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="+91-9876543210"
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, phone: val });
                          if (errors.phone) setErrors({ ...errors, phone: validatePhone(val) });
                        }}
                        onBlur={() => setErrors({ ...errors, phone: validatePhone(formData.phone) })}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none ${
                          errors.phone
                            ? 'border-rose-500 bg-rose-950/20 text-white'
                            : isDark
                            ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 font-medium mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Global Insurance Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none ${
                          isDark ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Target Role / Opportunity</label>
                    <input
                      type="text"
                      placeholder="e.g. Data Migration Architect"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none ${
                        isDark ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Message *</label>
                    <textarea
                      rows={4}
                      placeholder="Discuss project requirements, cutover timelines, or role details..."
                      value={formData.message}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, message: val });
                        if (errors.message) setErrors({ ...errors, message: validateMessage(val) });
                      }}
                      onBlur={() => setErrors({ ...errors, message: validateMessage(formData.message) })}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-medium border outline-none ${
                        errors.message
                          ? 'border-rose-500 bg-rose-950/20 text-white'
                          : isDark
                          ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 font-medium mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-600 hover:from-cyan-400 hover:to-indigo-500 transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    <span>Transmit Message to Pratik</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
