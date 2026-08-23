import React, { useState } from 'react';
import { Cpu, Bot, Zap, ArrowRight, Code2, Database, ShieldCheck, Check } from 'lucide-react';

export default function AiShowcase({ onSelectAiSolution }) {
  const [activeTab, setActiveTab] = useState('tenderly');

  return (
    <section id="ai-solutions" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Innovation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Enterprise AI & Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Software Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From modern agentic AI systems like Tenderly.ai to custom LLM integrations and automated enterprise workflows.
          </p>
        </div>

        {/* Feature Grid & Interactive Engine Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Solution Selector */}
          <div className="lg:col-span-5 space-y-4">
            
            <div 
              onClick={() => setActiveTab('tenderly')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'tenderly'
                  ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-950/50'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Tenderly.ai Integration</h3>
                  <p className="text-xs text-slate-400">Automated Proposal & Tender Intelligence</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Streamline RFP parsing, contract evaluation, and bid generation with multi-modal AI agents trained on corporate domain data.
              </p>
            </div>

            <div 
              onClick={() => setActiveTab('agents')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'agents'
                  ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/50'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Agentic Workflow Automation</h3>
                  <p className="text-xs text-slate-400">Autonomous Business Logic Pipelines</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Replace legacy manual tasks with self-healing, intelligent micro-agent swarms that operate 24/7 with human-in-the-loop governance.
              </p>
            </div>

            <div 
              onClick={() => setActiveTab('custom-llm')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'custom-llm'
                  ? 'bg-slate-900 border-purple-500 shadow-xl shadow-purple-950/50'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Private RAG & Data Engine</h3>
                  <p className="text-xs text-slate-400">Secure Internal Knowledge Search</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Turn proprietary company documentation into instant, accurate natural-language answers without exposing sensitive data.
              </p>
            </div>

          </div>

          {/* Right Column: Live Interactive Architecture View */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">
                    {activeTab === 'tenderly' && 'ENGINE: TENDERLY_AI_AGENT_PIPELINE'}
                    {activeTab === 'agents' && 'ENGINE: AUTONOMOUS_WORKFLOW_SWARM'}
                    {activeTab === 'custom-llm' && 'ENGINE: PRIVATE_RAG_VECTOR_STORE'}
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-mono">LATENCY: 12ms</span>
              </div>

              {/* Code / Visual Flow */}
              <div className="my-6 p-6 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-4">
                
                {activeTab === 'tenderly' && (
                  <>
                    <div className="flex items-center justify-between text-cyan-400">
                      <span>[Tenderly.ai Engine] Parsing PDF RFP specification...</span>
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="pl-4 border-l-2 border-cyan-500/40 space-y-2">
                      <p className="text-slate-400">→ Extracting technical compliance criteria...</p>
                      <p className="text-slate-400">→ Matching past case studies & pricing matrix...</p>
                      <p className="text-teal-300">✓ Generated 42-page tailored proposal draft in 8.4 seconds</p>
                    </div>
                    <div className="p-3 rounded bg-slate-900 border border-cyan-500/30 flex items-center justify-between">
                      <span className="text-white font-semibold">Tender Fit Score: 96.8%</span>
                      <span className="text-cyan-400 text-[10px]">READY FOR REVIEW</span>
                    </div>
                  </>
                )}

                {activeTab === 'agents' && (
                  <>
                    <div className="flex items-center justify-between text-blue-400">
                      <span>[Swarm Supervisor] Executing 4 parallel sub-tasks...</span>
                      <Zap className="w-4 h-4 animate-bounce" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-900 border border-blue-900">
                        <div className="text-blue-300 font-bold">Data Scraper</div>
                        <div className="text-slate-400">10,000 records processed</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-blue-900">
                        <div className="text-blue-300 font-bold">Validator Agent</div>
                        <div className="text-slate-400">0 anomalies found</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-blue-900">
                        <div className="text-blue-300 font-bold">CRM Sync</div>
                        <div className="text-slate-400">HubSpot & Salesforce updated</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-blue-900">
                        <div className="text-blue-300 font-bold">Notifier</div>
                        <div className="text-slate-400">Slack summary dispatched</div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'custom-llm' && (
                  <>
                    <div className="flex items-center justify-between text-purple-400">
                      <span>[Vector RAG] Querying encrypted company knowledge base...</span>
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="p-3 rounded bg-slate-900 border border-purple-900 space-y-1">
                      <p className="text-slate-300 text-[11px] font-sans italic">
                        "Query: What is our SLA for level-1 cloud infrastructure incidents?"
                      </p>
                      <p className="text-purple-300 text-[11px] font-sans font-semibold">
                        "Answer: Guaranteed 15-minute response time with automated failover routing."
                      </p>
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero data retention by external models. 100% On-Premise / Private Cloud.</span>
                    </div>
                  </>
                )}

              </div>

              {/* Bottom CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Featured Product:</span>
                  <a
                    href="https://tenderlyai.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1"
                  >
                    Tenderly.ai Web App ↗
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href="https://tenderlyai.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white font-bold text-xs shadow-md shadow-pink-500/20 hover:scale-105 transition-all"
                  >
                    Launch Tenderly.ai App ↗
                  </a>
                  <a
                    href="#contact"
                    onClick={() => onSelectAiSolution && onSelectAiSolution(activeTab)}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700"
                  >
                    Consult AI Engineer <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
