import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles, Globe, Flower2 } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Agentic Pillars', href: '#services' },
    { name: 'Agent Swarms', href: '#ai-solutions' },
    { name: 'Human Governance', href: '#human-in-loop' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-pink-950/20 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-cyan-400 p-[2px] shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6">
                  <path d="M50 18 C62 33, 75 40, 75 55 C75 70, 60 76, 50 82 C40 76, 25 70, 25 55 C25 40, 38 33, 50 18 Z" fill="url(#lotusGradNav)"/>
                  <circle cx="50" cy="55" r="7" fill="#ffffff"/>
                  <defs>
                    <linearGradient id="lotusGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#ec4899" />
                      <stop offset="50%" stop-color="#f43f5e" />
                      <stop offset="100%" stop-color="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight font-heading text-white group-hover:text-pink-300 transition-colors">
                  Lotus<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-cyan-400">CLUE</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300 flex items-center gap-1">
                  <span>🇸🇬</span>
                  <span>Singapore HQ</span>
                </span>
              </div>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-medium">Agentic AI & Human Governance</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors hover:scale-105 transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 shadow-md shadow-pink-500/25 hover:shadow-pink-500/40 active:scale-95"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse text-pink-200" />
              <span>Deploy AI Agents</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-pink-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => { setMobileMenuOpen(false); onOpenContact && onOpenContact(); }}
            className="w-full mt-2 flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white font-semibold shadow-lg shadow-pink-500/30"
          >
            Deploy AI Agents <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}
    </header>
  );
}
