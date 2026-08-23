import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoiCalculator({ onClaimQuote }) {
  const [teamSize, setTeamSize] = useState(5);
  const [serviceType, setServiceType] = useState('bpo-ai');

  // Multipliers for estimated savings
  const rates = {
    'bpo-ai': { hourlyCostUs: 85, hourlyCostLotus: 32, hoursPerMonth: 160 },
    'cloud-devops': { hourlyCostUs: 120, hourlyCostLotus: 45, hoursPerMonth: 160 },
    'ai-automation': { hourlyCostUs: 140, hourlyCostLotus: 40, hoursPerMonth: 120 }
  };

  const currentRate = rates[serviceType];
  const USMonthly = teamSize * currentRate.hourlyCostUs * currentRate.hoursPerMonth;
  const LotusMonthly = teamSize * currentRate.hourlyCostLotus * currentRate.hoursPerMonth;
  const monthlySavings = USMonthly - LotusMonthly;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / USMonthly) * 100);

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Calculate Your Estimated <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Cost & Time Savings</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            See how much your organization saves by combining LotusCLUE AI automation with our remote IT-BPO squads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls Box */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-8 shadow-2xl">
            
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Solution Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('bpo-ai')}
                  className={`p-3.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                    serviceType === 'bpo-ai'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md shadow-cyan-950/40'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">Remote IT-BPO</div>
                  <span>Dedicated Squads</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('cloud-devops')}
                  className={`p-3.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                    serviceType === 'cloud-devops'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md shadow-cyan-950/40'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">Cloud & DevOps</div>
                  <span>24/7 Managed Infrastructure</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('ai-automation')}
                  className={`p-3.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                    serviceType === 'ai-automation'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md shadow-cyan-950/40'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">Enterprise AI</div>
                  <span>Tenderly.ai Automation</span>
                </button>
              </div>
            </div>

            {/* Slider Team Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Team Size / Capacity Needed
                </label>
                <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-sm font-bold">
                  {teamSize} {teamSize === 1 ? 'Specialist' : 'Specialists'}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="25"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                <span>1 Specialist</span>
                <span>10 Team</span>
                <span>25+ Enterprise Squad</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Estimates reflect average market benchmarks vs LotusCLUE global delivery teams.</span>
            </div>

          </div>

          {/* Savings Display Box */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/40 shadow-2xl shadow-cyan-950/50 space-y-8 relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  Estimated Impact Summary
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold">
                  SAVE UP TO {savingsPercent}%
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <DollarSign className="w-4 h-4 text-cyan-400" />
                    <span>Monthly Savings</span>
                  </div>
                  <div className="text-3xl font-extrabold font-heading text-white">
                    ${monthlySavings.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500">Per month</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Annual Cost Savings</span>
                  </div>
                  <div className="text-3xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500">Per year saved</span>
                </div>

              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Deployment Speed</div>
                    <div className="text-xs text-slate-300">Squad live in under 7 business days</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onClaimQuote && onClaimQuote(`ROI Calculation for ${teamSize} specialists`)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom ROI Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
