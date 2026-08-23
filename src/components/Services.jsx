import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  Globe2, 
  Cloud, 
  Smartphone, 
  Megaphone, 
  TrendingUp, 
  Search, 
  Languages, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Sparkles,
  Bot
} from 'lucide-react';

export default function Services({ onSelectServiceForContact }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Flagship Pillars' },
    { id: 'ai-engineering', label: '1. AI & Engineering' },
    { id: 'tech-bpo', label: '2. Global BPO Squads' },
    { id: 'trade-advisory', label: '3. Trade & Advisory' },
  ];

  const pillarsData = [
    // Flagship Pillar 1: Enterprise AI & Digital Engineering
    {
      id: 'ai-engineering-pillar',
      category: 'ai-engineering',
      categoryLabel: 'Flagship Pillar 01',
      pillarTitle: 'Enterprise AI & Digital Engineering',
      icon: Cpu,
      tagline: 'High-speed cloud infrastructure, custom software & Tenderly.ai integration',
      description: 'We build and scale enterprise-grade AI automation pipelines, robust multi-cloud infrastructure (AWS, Azure, GCP), and high-performance Web & Mobile applications.',
      services: [
        'Tenderly.ai RFP & Tender Intelligence Engine',
        'Cloud Infrastructure Migration & DevOps Automation',
        'Custom Web & Mobile App Development (React, Node, iOS/Android)',
        'Private RAG & Secure LLM Knowledge Integration'
      ],
      badge: 'Flagship Tech'
    },

    // Flagship Pillar 2: Global Tech Workforce & BPO Solutions
    {
      id: 'tech-bpo-pillar',
      category: 'tech-bpo',
      categoryLabel: 'Flagship Pillar 02',
      pillarTitle: 'Global Tech Workforce & BPO Solutions',
      icon: Users,
      tagline: 'Pre-vetted remote software engineers & 24/7 managed IT operations',
      description: 'Scale your engineering and operational bandwidth without local hiring overhead. Dedicated remote IT squads, QA engineers, DevOps specialists, and digital marketing managers.',
      services: [
        'Dedicated Remote IT Developer & DevOps Squads',
        '24/7 Managed IT Infrastructure Support & Monitoring',
        'Digital Media, Performance Marketing & Brand Growth',
        'Flexible On-Demand & Full-Time Augmentation Models'
      ],
      badge: 'High ROI'
    },

    // Flagship Pillar 3: Cross-Border Advisory & Market Growth
    {
      id: 'trade-advisory-pillar',
      category: 'trade-advisory',
      categoryLabel: 'Flagship Pillar 03',
      pillarTitle: 'Cross-Border Advisory & Market Growth',
      icon: Globe2,
      tagline: 'Strategic international trade consulting & global business expansion',
      description: 'Headquartered in Singapore, we connect enterprises to international markets through cross-border trade consulting, partner matching, business research, and localization.',
      services: [
        'International Trade Consulting & Import/Export Compliance',
        'B2B Market Entry Strategy & Partner Matching',
        'Software Localization & Multi-language Translation',
        'Corporate Upskilling Bootcamps & Founder Workshops'
      ],
      badge: 'Global Expansion'
    }
  ];

  const filteredPillars = activeTab === 'all'
    ? pillarsData
    : pillarsData.filter(p => p.category === activeTab);

  return (
    <section id="services" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unified Capability Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Our 3 Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-pink-400">Core Pillars</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            LotusCLUE International simplifies digital transformation into three integrated solutions: **Engineering Technology**, **Global BPO Talent**, and **International Trade Advisory**.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white shadow-lg shadow-pink-500/25'
                    : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-slate-950/90 border border-slate-800/90 p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-950/30 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-gradient-to-tr from-pink-500/20 via-rose-500/10 to-cyan-500/20 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    {pillar.badge && (
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-bold text-cyan-400">
                        {pillar.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs uppercase tracking-wider text-pink-400 font-bold block mb-1">
                    {pillar.categoryLabel}
                  </span>

                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-pink-300 transition-colors mb-3">
                    {pillar.pillarTitle}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Included Core Capabilities */}
                  <ul className="space-y-3 mb-8 border-t border-slate-800/80 pt-6">
                    {pillar.services.map((serviceItem, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{serviceItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                  <button
                    onClick={() => setSelectedServiceModal(pillar)}
                    className="flex-1 text-center py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    View Scope Details
                  </button>
                  <a
                    href="#contact"
                    onClick={() => onSelectServiceForContact && onSelectServiceForContact(pillar.pillarTitle)}
                    className="py-2.5 px-4 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    Inquire <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/30">
                {React.createElement(selectedServiceModal.icon, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs uppercase text-pink-400 font-bold">{selectedServiceModal.categoryLabel}</span>
                <h3 className="text-xl font-bold font-heading text-white">{selectedServiceModal.pillarTitle}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs uppercase text-slate-400 font-bold tracking-wider">Capabilities & Deliverables:</h4>
              <div className="space-y-2">
                {selectedServiceModal.services.map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => {
                  const title = selectedServiceModal.pillarTitle;
                  setSelectedServiceModal(null);
                  onSelectServiceForContact && onSelectServiceForContact(title);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-pink-500/30"
              >
                Request Proposal
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
