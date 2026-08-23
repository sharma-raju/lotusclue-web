import React from 'react';
import { ArrowUp, Flower2, ShieldCheck, Globe, Sparkles, Bot } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Flower2 className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold font-heading text-white">LotusCLUE</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300">🇸🇬 Singapore HQ</span>
                </div>
                <span className="block text-[10px] uppercase tracking-widest text-slate-400">Agentic AI & Human Governance</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              "Your Partner in Agentic Intelligence" — Deploying Autonomous AI Agents, Cloud Infrastructure, Remote Tech Squads, and Cross-Border Trade Advisory with Human-in-the-Loop Governance.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400 font-mono">
              <span className="flex h-2 w-2 rounded-full bg-pink-400 animate-ping" />
              <span>Target: lotusclue.web.app</span>
            </div>
          </div>

          {/* Col 3: Pillar 1 - Agentic AI & Engineering */}
          <div>
            <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" />
              <span>01. Agentic AI & Dev</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="https://tenderlyai.web.app" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors flex items-center gap-1 font-semibold text-pink-300">Tenderly.ai RFP App ↗</a></li>
              <li><a href="#ai-solutions" className="hover:text-pink-300 transition-colors">Autonomous Agent Swarms</a></li>
              <li><a href="#ai-solutions" className="hover:text-pink-300 transition-colors">Private RAG Vector Systems</a></li>
              <li><a href="#services" className="hover:text-pink-300 transition-colors">AI-Native Web & App Dev</a></li>
            </ul>
          </div>

          {/* Col 4: Pillar 2 - Human & Tech BPO Squads */}
          <div>
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>02. Human & Tech BPO</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#human-in-loop" className="hover:text-cyan-300 transition-colors">Human-in-Loop AI Governance</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Remote Developer Squads</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">24/7 Managed Cloud Ops</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">AI Growth Marketing</a></li>
            </ul>
          </div>

          {/* Col 5: Pillar 3 - Global Trade & Expansion */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>03. Global Expansion</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Cross-Border Trade Advisory</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Agentic Market Intelligence</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Multi-Lingual Localization</a></li>
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">About LotusCLUE HQ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} LotusCLUE International (Singapore). All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
