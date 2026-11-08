import React, { useState } from 'react';
import { ShieldCheck, Award, ArrowRight, FileText, CheckCircle2, Phone, Mail, ExternalLink, Copy, Check } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/certificates.ts';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="pt-28 pb-16 px-6 lg:pt-36 lg:pb-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Split Screen Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide uppercase">
              <span>Bangalore, Karnataka</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>B.E.T. Sadathunnisa Degree College</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>B.Com (Regular) 2023–26</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="flex items-center gap-1 text-slate-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                NATS Eligible 2026
              </span>
            </div>

            {/* Display Headline with Balance */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
                Asma <span className="text-teal-700">Khatoon</span>
              </h1>
              <div className="text-2xl sm:text-3xl font-bold text-slate-700">
                Project Co-ordinator
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-slate-500">
                &amp; Data Analyst
              </div>
            </div>

            {/* Lead Narrative Body */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-semibold">B.Com (Regular) graduate</strong> from <strong className="text-teal-800 font-semibold">B.E.T. Sadathunnisa Degree College</strong> (Batch 2023–26) with 6 months of operational deployment at Millat Community Centre and a <strong className="text-teal-900 font-bold">perfect 100/100 score</strong> in her Power BI Internship Project &amp; University Viva at The Hope Foundation. Creator of live web portfolio for client <strong className="text-slate-900 font-semibold">Munawar Hussain (HSM Interior Decorator)</strong> and holder of <strong className="text-slate-900">23 verified certificates</strong>.
            </p>

            {/* 4-Item KPI Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl pt-2">
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">
                  23
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                  Certs &amp; Courses
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-700 tabular-nums">
                  6
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                  Months Exp
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">
                  6
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                  Top Orgs
                </div>
              </div>

              <div className="bg-teal-800 rounded-xl p-3.5 text-center text-white shadow-sm ring-1 ring-teal-600/50">
                <div className="text-2xl sm:text-3xl font-black tabular-nums text-amber-300">
                  100/100
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-100 mt-0.5">
                  Project &amp; Viva
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-3.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Client Work (HSM)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#internship"
                className="px-5 py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>100/100 Report</span>
              </a>
              <a
                href="#certificates"
                className="px-4 py-3.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border border-slate-200"
              >
                <span>23 Certificates</span>
              </a>
              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-teal-700" />
                <span>Resume CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Quick Connect Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Profile Image Frame with Available Badge */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md aspect-square sm:aspect-4/5">
                <img
                  src={CANDIDATE_PROFILE.avatarUrl}
                  alt="Asma Khatoon - B.Com Graduate, Project Coordinator & Data Analyst"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-teal-50 text-slate-800 text-center';
                      fallback.innerHTML = `
                        <div class="w-20 h-20 rounded-full bg-teal-800 text-white flex items-center justify-center text-2xl font-bold mb-4">AK</div>
                        <h3 class="text-xl font-bold">Asma Khatoon</h3>
                        <p class="text-sm text-slate-600 mt-1">Project Co-ordinator & Data Analyst</p>
                        <p class="text-xs text-teal-700 font-semibold mt-3">Bangalore · 23 Verified Certificates</p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />

                {/* Available for Hire Floating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for Hire</span>
                </div>

                {/* Base Location Badge */}
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                  📍 Bangalore, Karnataka
                </div>
              </div>

              {/* Quick Connect Card */}
              <div className="mt-4 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="uppercase tracking-wider text-teal-800 text-[11px]">
                    Direct Candidate Channels
                  </span>
                  <span className="text-slate-500 font-normal">Immediate Response</span>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Email */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80">
                    <div className="flex items-center gap-2 truncate mr-2">
                      <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                      <a 
                        href={`mailto:${CANDIDATE_PROFILE.email}`}
                        className="font-medium text-slate-800 hover:text-teal-700 truncate"
                      >
                        {CANDIDATE_PROFILE.email}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(CANDIDATE_PROFILE.email, 'email')}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer shrink-0"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80">
                    <div className="flex items-center gap-2 truncate mr-2">
                      <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                      <a 
                        href={`tel:${CANDIDATE_PROFILE.phone.replace(/\s+/g, '')}`}
                        className="font-medium text-slate-800 hover:text-teal-700 font-mono text-[11px]"
                      >
                        {CANDIDATE_PROFILE.phone}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(CANDIDATE_PROFILE.phone, 'phone')}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer shrink-0"
                      title="Copy Phone"
                    >
                      {copiedField === 'phone' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Credly Profile */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80">
                    <div className="flex items-center gap-2 truncate mr-2">
                      <Award className="w-4 h-4 text-teal-700 shrink-0" />
                      <span className="font-medium text-slate-800">Credly Verified Wallet</span>
                    </div>
                    <a
                      href={CANDIDATE_PROFILE.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-900 cursor-pointer text-[11px] shrink-0"
                    >
                      <span>View Badges</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
