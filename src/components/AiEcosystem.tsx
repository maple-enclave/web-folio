import React, { useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';

interface AiEcosystemProps {
  isDark: boolean;
  onOpenAiAssistant?: () => void;
}

export const AiEcosystem: React.FC<AiEcosystemProps> = ({ isDark }) => {
  const [selectedNode, setSelectedNode] = useState<string>('Prompt Engineering');

  const aiNodes = [
    { name: 'Prompt Engineering', cat: 'Core', desc: 'Systemic zero-shot & few-shot instruction design, structured JSON output enforcement, and token optimization.' },
    { name: 'OpenAI API', cat: 'Models', desc: 'GPT-4o / O3 integration, function calling, structured outputs, and embeddings.' },
    { name: 'Gemini API', cat: 'Models', desc: 'Gemini 2.5 Flash / Pro, long-context document analysis, multimodal schema generation.' },
    { name: 'Claude (Anthropic)', cat: 'Models', desc: 'Complex code refactoring, architecture review, and long-form data lineage analysis.' },
    { name: 'n8n Workflow Automation', cat: 'Orchestration', desc: 'Node-based multi-agent execution loops, webhook triggers, and automated ETL health monitoring.' },
    { name: 'Replit Vibe Coding', cat: 'Prototyping', desc: 'Rapid microservice creation, instant API prototyping, and AI-assisted debugging.' },
    { name: 'LangChain & RAG', cat: 'Frameworks', desc: 'Retrieval Augmented Generation, vector store indexing, document chunking, and memory chains.' },
    { name: 'Vector Databases', cat: 'Storage', desc: 'Pinecone, ChromaDB, PGVector schema indexing for semantic search over technical spec docs.' },
    { name: 'AI Agents & Multi-Agent', cat: 'Architecture', desc: 'Autonomous agent pods that execute sequential SQL data quality checks and mapping generation.' },
    { name: 'Responsible AI & Governance', cat: 'Safety', desc: 'PII redacting pre-prompts, deterministic verification rules, and audit logging.' },
  ];

  return (
    <section id="ai-skills" className="py-20 relative z-10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/15 to-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
            isDark
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30'
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            Next-Gen Capability
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Agentic AI & GenAI Ecosystem
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}>
            Pioneering the convergence of enterprise data warehousing with autonomous LLM workflows, n8n automation, and prompt engineering.
          </p>
        </div>

        {/* AI Nodes Visual Grid */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {aiNodes.map((node) => {
              const isSelected = selectedNode === node.name;
              return (
                <button
                  key={node.name}
                  onClick={() => setSelectedNode(node.name)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative group ${
                    isSelected
                      ? 'bg-gradient-to-tr from-cyan-950 via-indigo-950 to-slate-950 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-[1.02]'
                      : isDark
                      ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/80'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Sparkles className={`w-4 h-4 ${isSelected ? 'text-cyan-400 animate-spin' : 'text-slate-500'}`} />
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900/80 text-cyan-400 border border-slate-800">
                      {node.cat}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold leading-snug">{node.name}</h4>
                </button>
              );
            })}
          </div>

          {/* Selected Node Details Box */}
          <div className={`mt-4 p-5 rounded-2xl border ${isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
            <div className="flex items-center gap-2 mb-1">
              <Bot className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
              <span className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedNode} Overview</span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
              {aiNodes.find((n) => n.name === selectedNode)?.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

