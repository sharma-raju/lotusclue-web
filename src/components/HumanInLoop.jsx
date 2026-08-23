import React from 'react';
import { Heart, UserCheck, Compass, Flower2, ShieldCheck, Sparkles, Globe, HeartHandshake } from 'lucide-react';

export default function HumanInLoop() {
  const pillars = [
    {
      icon: Flower2,
      title: 'Lotus is Life, Human is Life',
      description: 'Just as the lotus flower blooms with natural vitality, human life thrives on empathy, feeling, and connection. We view technology through the lens of preserving and nourishing human potential.'
    },
    {
      icon: HeartHandshake,
      title: 'Empathy in Chains of Machines',
      description: 'Machines execute logic, but humans supply empathy. We insert human-in-the-loop safeguards into automated AI pipelines to ensure ethical alignment, zero bias, and responsible execution.'
    },
    {
      icon: ShieldCheck,
      title: 'Safeguarding Society & The Planet',
      description: 'Our ultimate purpose is to yield sustainable progress that protects workforce wellbeing, respects cultural heritage, and safeguards society and the planet at large.'
    }
  ];

  return (
    <section id="human-in-loop" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Warm Organic Floral & Life Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/70 border border-pink-500/30 text-xs font-semibold text-pink-300 mb-4 shadow-inner">
            <Flower2 className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>The LotusCLUE Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Empathy & Life Embedded in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-emerald-400">
              The Chains of Machines
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            **The CLUE is Lotus. Lotus is Life. Human is Life.** In an era of cold automated algorithms, LotusCLUE embeds human feeling, ethical empathy, and strategic wisdom into machine workflows to safeguard humanity, society, and the planet at large.
          </p>
        </div>

        {/* 3 Life & Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 shadow-xl group"
              >
                <div className="p-4 rounded-xl bg-gradient-to-tr from-pink-500/20 via-rose-500/10 to-emerald-500/20 text-pink-300 w-fit mb-6 border border-pink-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-pink-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-pink-950/40 to-slate-900 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-emerald-400 p-[2px] shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Heart className="w-7 h-7 text-pink-400" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-white">Technology with a Human Soul</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                We believe machine efficiency should never come at the expense of human dignity. Our human-in-the-loop framework ensures AI serves people, strengthens businesses, and protects society.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-emerald-500 text-white font-bold text-xs shadow-lg shadow-pink-500/20 hover:scale-105 transition-all shrink-0"
          >
            Partner with Human-Centric AI
          </a>
        </div>

      </div>
    </section>
  );
}
