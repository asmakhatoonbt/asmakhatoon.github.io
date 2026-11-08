import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/certificates.ts';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-700 ring-2 ring-teal-500/20 shadow-xs shrink-0 bg-slate-800">
              <img
                src={CANDIDATE_PROFILE.avatarUrl}
                alt="Asma Khatoon"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-base font-bold text-white tracking-tight">
                ASMA KHATOON
              </div>
              <div className="text-slate-400">
                B.Com (Regular) Graduate · B.E.T. Sadathunnisa Degree College · Bangalore, India
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors font-semibold text-teal-300">Client Projects</a>
            <a href="#internship" className="hover:text-white transition-colors">Internship (100/100)</a>
            <a href="#graduation" className="hover:text-white transition-colors">Graduation (B.Com)</a>
            <a href="#certificates" className="hover:text-white transition-colors">23 Certificates</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <button 
              onClick={onOpenResume}
              className="hover:text-white transition-colors cursor-pointer text-slate-300"
            >
              Curriculum Vitae
            </button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>National Apprenticeship Training Scheme (NATS) Eligible 2026</span>
          </div>

          <div>
            © {new Date().getFullYear()} Asma Khatoon. All credential IDs verifiable via respective issuer portals.
          </div>
        </div>
      </div>
    </footer>
  );
};
