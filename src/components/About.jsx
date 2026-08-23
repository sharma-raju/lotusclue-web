import React from 'react';
import { Target, Eye, ShieldCheck, Globe, Users, Zap, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation & Agility',
      description: 'We adopt cutting-edge cloud architectures and enterprise AI tools to give our clients an unfair competitive advantage.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality',
      description: 'Rigorous engineering standards, 99.9% uptime commitments, and enterprise-grade data security protocols.'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Bridging international markets with cross-border trade consulting, localization, and remote workforce solutions.'
    },
    {
      icon: Users,
      title: 'Client Empowerment',
      description: 'We don’t just build tools; we train teams, support entrepreneurs, and foster long-term digital growth.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-400 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>About LotusCLUE International</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Building the Infrastructure for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Tomorrow’s Global Enterprise
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            LotusCLUE International is a multifaceted technology and business advisory firm dedicated to guiding organizations through digital transformation, enterprise AI integration, and global expansion.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              **Lotus is Life, Human is Life.** To empower global enterprises, startups, and institutions by embedding human empathy, strategic wisdom, and life-centered safeguards into automated AI machine chains—yielding sustainable growth that protects humanity, society, and the planet at large.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become the premier global catalyst for business innovation—where artificial intelligence, cloud excellence, and seamless international commerce unite to enable frictionless enterprise operations.
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-xl font-bold font-heading text-white text-center mb-8">Our Core Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                  <div className="p-3 rounded-lg bg-slate-900 text-cyan-400 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
