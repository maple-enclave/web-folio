import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Bot, Send, Loader2, User, Trash2, Minimize2, ChevronDown, MessageSquare } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, isDark }) => {
  const [isMinimized, setIsMinimized] = useState(!isOpen);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hello! I am Pratik Deshmukh's AI Executive Assistant. I can answer questions about Pratik's 14+ years in ETL, Insurance Domain migrations, Malaysia onsite leadership, or Agentic AI projects. How can I assist your team today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState<'Recruiter' | 'CTO / Solution Architect' | 'Hiring Manager'>('Recruiter');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Sync external trigger (e.g. from Hero or RecruiterHub button)
  useEffect(() => {
    if (isOpen) {
      setIsMinimized(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isMinimized) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isMinimized]);

  const handleSend = async (customQuery?: string) => {
    const q = customQuery || input;
    if (!q.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    if (!customQuery) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, userType: userRole })
      });
      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.answer || "Pratik Deshmukh is a Senior Technical Lead with 14+ years experience in ETL, Insurance Domain cutovers, and AI automation."
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "Pratik Deshmukh has 14+ years delivering enterprise data engineering and leading 5 consecutive Malaysia onsite go-lives."
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    '14+ Yrs Data Architecture',
    'Malaysia Onsite Success',
    'Insurance Policy Migration',
    'Agentic AI Workflows'
  ];

  // Render floating button when minimized
  if (isMinimized) {
    return (
      <div className="fixed bottom-5 right-5 sm:right-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-950/90 text-white border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:border-cyan-400 transition-all cursor-pointer backdrop-blur-xl"
          title="Ask Pratik's AI Agent"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-blue-600 text-white shadow-md">
            <Bot className="w-4 h-4 animate-bounce" />
          </div>
          <span className="text-xs font-bold tracking-tight text-cyan-300 group-hover:text-white transition-colors whitespace-nowrap">
            Ask AI Agent
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    );
  }

  // Render floating expanded chat panel
  return (
    <div className="fixed bottom-5 right-5 sm:right-6 z-50 w-[calc(100vw-2.5rem)] sm:w-[420px] h-[550px] max-h-[82vh] flex flex-col rounded-3xl border shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
      <div
        className={`w-full h-full flex flex-col ${
          isDark ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-blue-600 text-white shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xs font-black tracking-tight text-white">Pratik's AI Agent</h3>
                <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-500/30">
                  Gemini 2.5
                </span>
              </div>
              <p className="text-[10px] text-slate-400">Ask anything about experience & skills</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setMessages([messages[0]])}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
              title="Clear Chat"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setIsMinimized(true);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
              title="Minimize Chat"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Persona Selector */}
        <div className="px-3 py-1.5 bg-slate-900/80 border-b border-slate-800 flex items-center gap-1.5 text-[11px] shrink-0 overflow-x-auto">
          <span className="font-mono text-slate-400 uppercase text-[9px] shrink-0">Role:</span>
          {(['Recruiter', 'CTO / Solution Architect', 'Hiring Manager'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setUserRole(r)}
              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                userRole === r
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Chat Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line text-xs ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-600 text-white rounded-tr-none shadow-md'
                    : isDark
                    ? 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
                    : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-300 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 py-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>AI Agent thinking...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        {messages.length <= 3 && (
          <div className="px-3 py-1.5 border-t border-slate-800/60 bg-slate-950/60 flex items-center gap-1.5 overflow-x-auto text-[10px] shrink-0">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => handleSend(p)}
                className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium whitespace-nowrap cursor-pointer transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Input Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Insurance ETL, AI agents..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl text-xs bg-slate-900 border border-slate-800 text-white outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-600 hover:from-cyan-400 hover:to-indigo-500 cursor-pointer disabled:opacity-40 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
