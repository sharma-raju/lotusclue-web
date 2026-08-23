import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: 'How fast can LotusCLUE deploy a remote IT or AI specialist team?',
      answer: 'We maintain a pre-vetted talent pool of DevOps engineers, full-stack developers, and AI prompt architects. Typical onboarding takes between 3 to 7 business days, with complete agile workflow integration.'
    },
    {
      question: 'What is Tenderly.ai and how does it integrate with our enterprise workflow?',
      answer: 'Tenderly.ai is LotusCLUE’s specialized tender and RFP intelligence platform. It ingests complex multi-page tender specifications (PDF, Word, Docx), extracts technical compliance criteria, cross-references past proposals, and generates automated, high-precision draft responses in seconds.'
    },
    {
      question: 'How does LotusCLUE ensure enterprise data privacy and security?',
      answer: 'Security is embedded into every deployment. Our AI systems support private vector databases (Private RAG), on-premise execution, and zero-retention data policies. All cloud architectures adhere to ISO 27001, SOC 2, and GDPR security frameworks.'
    },
    {
      question: 'Which cloud platforms and tech stacks do you support?',
      answer: 'We support all major cloud providers including Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. Our tech stack covers React, Next.js, Node.js, Python, Kubernetes, Terraform, Docker, and custom LLM microservices.'
    },
    {
      question: 'How does International Trade & Market Expansion Consulting work?',
      answer: 'LotusCLUE provides cross-border expansion advisory, import/export regulatory compliance, supply chain optimization, and strategic distributor matching, helping Singapore and regional brands expand seamlessly across global markets.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Got Questions? We Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Answers</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Everything you need to know about our services, AI deployments, and team onboarding process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold font-heading text-white hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg bg-slate-900 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 border-t border-slate-900 leading-relaxed animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
