import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Loader2, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose, isDark }) => {
  const [date, setDate] = useState('2026-08-03');
  const [timeSlot, setTimeSlot] = useState('15:00 IST');
  const [duration, setDuration] = useState('30 min - Technical / Leadership Interview');
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [recruiterPhone, setRecruiterPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      return 'Mobile number is required.';
    }
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return 'Please enter a valid mobile number (7–15 digits).';
    }
    return '';
  };

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validatePhone(recruiterPhone);
    if (err) {
      setPhoneError(err);
      return;
    }
    setPhoneError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className={`max-w-lg w-full rounded-3xl border p-6 sm:p-8 relative shadow-2xl ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">Schedule Executive Meeting</h3>
            <p className="text-xs font-mono text-cyan-400">Directly with Pratik Deshmukh</p>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Meeting Reserved!</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reserved for <span className="font-bold text-cyan-400">{date} at {timeSlot}</span>. Calendar invite link transmitted to <span className="text-indigo-300">{recruiterEmail}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 mt-2"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSchedule} className="space-y-4 text-xs">
            <div>
              <label className="block font-mono text-slate-400 uppercase mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Michael Thorne (CTO)"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-mono text-slate-400 uppercase mb-1">Your Email *</label>
              <input
                type="email"
                required
                placeholder="m.thorne@enterprise.com"
                value={recruiterEmail}
                onChange={(e) => setRecruiterEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-mono text-slate-400 uppercase mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="+91-9876543210 or +1 (555) 000-0000"
                value={recruiterPhone}
                onChange={(e) => {
                  setRecruiterPhone(e.target.value);
                  if (phoneError) setPhoneError(validatePhone(e.target.value));
                }}
                className={`w-full px-4 py-3 rounded-xl border outline-none ${
                  phoneError
                    ? 'border-rose-500 bg-rose-950/20 text-white'
                    : isDark
                    ? 'bg-slate-900 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-300'
                }`}
              />
              {phoneError && (
                <p className="text-[11px] text-rose-400 font-medium mt-1">{phoneError}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-slate-400 uppercase mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl border outline-none ${
                    isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-300'
                  }`}
                />
              </div>

              <div>
                <label className="block font-mono text-slate-400 uppercase mb-1">Time Slot (IST)</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl border outline-none ${
                    isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-300'
                  }`}
                >
                  <option value="11:00 IST">11:00 AM IST (5:30 AM UTC)</option>
                  <option value="15:00 IST">03:00 PM IST (9:30 AM UTC)</option>
                  <option value="18:00 IST">06:00 PM IST (12:30 PM UTC)</option>
                  <option value="20:00 IST">08:00 PM IST (2:30 PM UTC - US Morning)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-slate-400 uppercase mb-1">Call Format / Purpose</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-300'
                }`}
              >
                <option value="15 min - Recruiter Intro Call">15 min - Recruiter Introductory Screening</option>
                <option value="30 min - Technical / Leadership Interview">30 min - Senior Lead / Architecture Discussion</option>
                <option value="45 min - C-Suite Strategy & Cutover Consultation">45 min - Enterprise Cutover Advisory</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-600 hover:from-cyan-400 hover:to-indigo-500 transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              <span>Confirm Meeting Slot</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
