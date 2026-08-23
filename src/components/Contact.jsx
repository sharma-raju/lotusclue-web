import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, Clock } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: preselectedService || 'IT & AI Consulting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let’s Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Journey</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Have a project requirement or looking for AI & IT consulting? Get in touch with our team of specialists today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">Contact Information</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reach out directly or send us an inquiry. Our global advisory team usually responds within 4 business hours.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-300">Email Inquiry</div>
                    <a href="mailto:contact@lotusclue.com" className="text-sm font-semibold text-cyan-400 hover:underline">
                      contact@lotusclue.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-300">Global Operations</div>
                    <div className="text-xs text-slate-400 mt-0.5">LotusCLUE International Advisory Services</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-300">Support Hours</div>
                    <div className="text-xs text-slate-400 mt-0.5">24/7 Managed IT Support & Client Services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hosting Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Live Site Host Target</div>
                <div className="text-xs text-cyan-300 font-mono">https://lotusclue.web.app</div>
              </div>
            </div>

          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry regarding <span className="text-cyan-400 font-semibold">{formData.serviceInterest}</span> has been logged. Our LotusCLUE advisory team will connect with you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="LotusCLUE Partner Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Service Interest</label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      >
                        <option value="IT & AI Consulting">IT & AI Consulting</option>
                        <option value="Cloud Journey & IT Infrastructure Support">Cloud & IT Infrastructure</option>
                        <option value="Web & Mobile Application Development">Web & Mobile Application Dev</option>
                        <option value="Tenderly.ai & Enterprise AI">Tenderly.ai & Custom AI</option>
                        <option value="Remote IT Human Resource (IT-BPO)">Remote IT-BPO Staffing</option>
                        <option value="International Trade Consulting">International Trade Advisory</option>
                        <option value="Startup & Entrepreneur Support">Startup Support & Workshops</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">Project Details / Inquiry *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your requirements, project timeline, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
