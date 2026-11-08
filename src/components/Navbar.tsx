import React, { useState } from 'react';
import { Menu, X, ShieldCheck, FileText } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/certificates.ts';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Logo Profile Picture & Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-teal-700 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 ring-2 ring-teal-700/25 group-hover:ring-teal-700/50 transition-all shadow-xs shrink-0 bg-slate-100">
            <img
              src={CANDIDATE_PROFILE.avatarUrl}
              alt="Asma Khatoon"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="tracking-tight">ASMA KHATOON</span>
        </a>

        {/* Zone 2: clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 font-semibold text-teal-800">
            Projects
          </a>
          <a href="#internship" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 font-semibold text-slate-900">
            <span>Internship Report</span>
            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded">100/100</span>
          </a>
          <a href="#graduation" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Graduation
          </a>
          <a href="#certificates" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Certificates (23)
          </a>
          <a href="#experience" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            Experience
          </a>
          <button 
            onClick={onOpenResume}
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer text-slate-600"
          >
            <FileText className="w-4 h-4 text-teal-700" />
            Resume
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-700 transition-colors font-semibold text-teal-800 flex items-center justify-between"
            >
              <span>Featured Client Projects</span>
              <span className="text-[10px] text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded font-mono">HSM</span>
            </a>
            <a 
              href="#internship" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-700 transition-colors font-semibold text-slate-900 flex items-center justify-between"
            >
              <span>Power BI Internship Report</span>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80">100/100</span>
            </a>
            <a 
              href="#graduation" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-700 transition-colors text-slate-700"
            >
              🎓 Graduation Day (B.Com)
            </a>
            <a 
              href="#certificates" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-700 transition-colors"
            >
              23 Verified Certificates
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-700 transition-colors"
            >
              Work Experience & Projects
            </a>
            <a 
              href="#competencies" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-700 transition-colors"
            >
              Core Competencies
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="py-1 text-left flex items-center gap-2 hover:text-teal-700 transition-colors cursor-pointer text-slate-700"
            >
              <FileText className="w-4 h-4 text-teal-700" />
              View Full Standardized CV
            </button>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" /> NATS Eligible 2026
            </span>
            <span>Bangalore, IN</span>
          </div>
        </div>
      )}
    </header>
  );
};
