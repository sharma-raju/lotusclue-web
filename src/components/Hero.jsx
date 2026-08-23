import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Cloud, Globe, ChevronRight, Bot, Zap } from 'lucide-react';

export default function Hero({ onExploreServices }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-pink-500/30 text-xs font-semibold text-pink-300 mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-pink-400 animate-ping" />
              <Bot className="w-3.5 h-3.5 text-pink-400" />
              <span>Next-Gen Agentic Architecture</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">LotusCLUE International</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.12]">
              Your Partner in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-cyan-400">
                Agentic Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Deploying **autonomous AI agents**, high-speed cloud infrastructure, and dedicated tech squads to execute your enterprise tasks with **human-in-the-loop governance**.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#ai-solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white font-bold text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Bot className="w-5 h-5 mr-2" />
                <span>Deploy Autonomous Agents</span>
              </a>

              <a
                href="#services"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-base backdrop-blur-md transition-all hover:border-slate-700"
              >
                <span>Explore Agentic Pillars</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white">24/7</div>
                <div className="text-xs text-slate-400 mt-1">Autonomous Task Execution</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-pink-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Human-in-the-Loop Oversight</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-cyan-400">99.9%</div>
                <div className="text-xs text-slate-400 mt-1">Cloud Reliability SLA</div>
              </div>
            </div>

          </div>

          {/* Right Column Interactive Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Gradient Border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-pink-500/30 via-rose-500/20 to-cyan-500/10 shadow-2xl shadow-pink-950/50 backdrop-blur-xl">
                <div className="bg-slate-900/90 rounded-[14px] p-6 space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-pink-400">agentic-swarm-v3.0.active</span>
                  </div>

                  {/* Status Blocks */}
                  <div className="space-y-3 font-mono text-xs">
                    
                    <div className="p-3 rounded-lg bg-slate-950/80 border border-pink-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Bot className="w-4 h-4 text-pink-400" />
                        <span>Autonomous Task Agent</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-pink-950 text-pink-400 font-semibold text-[10px]">EXECUTING</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span>Human-in-Loop Governance</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-semibold text-[10px]">VERIFIED</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-purple-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Cloud className="w-4 h-4 text-purple-400" />
                        <span>Cloud & Global BPO Squads</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-400 font-semibold text-[10px]">SYNCED</span>
                    </div>

                  </div>

                  {/* Highlight Banner */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-pink-950/80 via-slate-950 to-cyan-950/80 border border-pink-500/40 text-center">
                    <p className="text-xs text-slate-300 font-medium">Flagship Agent Product</p>
                    <p className="text-sm font-bold text-white mt-1">Tenderly.ai RFP Task Automation</p>
                    <a 
                      href="https://tenderlyai.web.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Open Tenderly.ai App ↗
                    </a>
                  </div>

                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-5 -left-5 p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-xl flex items-center gap-3 animate-float hidden sm:flex">
                <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Enterprise Agent Security</div>
                  <div className="text-[10px] text-slate-400">ISO 27001 & SOC2 Compliant</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
