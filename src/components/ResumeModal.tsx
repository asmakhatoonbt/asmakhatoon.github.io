import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ShieldCheck, Mail, MapPin, Phone, Award, ExternalLink } from 'lucide-react';
import { CANDIDATE_PROFILE, CERTIFICATES, WORK_EXPERIENCES } from '../data/certificates.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextCV = () => {
    const cvText = `
ASMA KHATOON
Bangalore, Karnataka, India | Phone: ${CANDIDATE_PROFILE.phone} | Email: ${CANDIDATE_PROFILE.email}
Credly Wallet: ${CANDIDATE_PROFILE.credlyUrl}
B.Com Graduate | Project Co-ordinator & Data Analyst | NATS Eligible 2026

PROFESSIONAL SUMMARY:
${CANDIDATE_PROFILE.summary}

EDUCATION:
Bachelor of Commerce (B.Com) - Regular, Batch 2023–2026
B.E.T. Sadathunnisa Degree College, Bangalore, Karnataka, India
Convocation Date: October 05, 2026
Status: Graduated (Regular) · Eligible for National Apprenticeship Training Scheme (NATS) 2026

EXPERIENCE:
1. Millat Community Centre - Project Co-ordinator (April 2026 – September 2026, 6 Months)
- Managed cross-functional operational scheduling and project registers.
- Coordinated with stakeholders and maintained executive reporting.

2. HOPE Foundation - Power BI Analytics Intern (March 2026)
- Built interactive business intelligence dashboards and DAX measures.
- Applied Power Query for ETL and data transformation.

${CERTIFICATES.length} VERIFIED INDUSTRY CERTIFICATES & COURSES:
${CERTIFICATES.map((c, i) => `${i + 1}. ${c.name} (${c.issuer}, ${c.issueDate}) - ID: ${c.credentialId}${c.registrationNo ? ` [Reg: ${c.registrationNo}]` : ''}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight">Curriculum Vitae Preview</span>
            <span className="text-xs text-slate-400">· Standardized Corporate Format</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextCV}
              className="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold bg-teal-700 hover:bg-teal-600 text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-slate-800 print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 flex items-start justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                ASMA KHATOON
              </h1>
              <div className="text-base font-semibold text-teal-800">
                Project Co-ordinator &amp; Data Analyst
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1 font-mono">
                <span className="flex items-center gap-1 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> Bangalore, Karnataka, India
                </span>
                <span>·</span>
                <a href={`tel:${CANDIDATE_PROFILE.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 font-sans hover:text-teal-800">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> {CANDIDATE_PROFILE.phone}
                </a>
                <span>·</span>
                <a href={`mailto:${CANDIDATE_PROFILE.email}`} className="flex items-center gap-1 font-sans hover:text-teal-800">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> {CANDIDATE_PROFILE.email}
                </a>
                <span>·</span>
                <a href={CANDIDATE_PROFILE.credlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-sans text-teal-800 font-semibold hover:underline">
                  <Award className="w-3.5 h-3.5" /> Credly Wallet
                </a>
                <span>·</span>
                <span className="flex items-center gap-1 font-sans text-teal-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> NATS Eligible 2026
                </span>
              </div>
            </div>
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-slate-100">
              <img
                src={CANDIDATE_PROFILE.avatarUrl}
                alt="Asma Khatoon"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {CANDIDATE_PROFILE.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-slate-900">Bachelor of Commerce (B.Com) — Regular</span>
                  <span className="text-teal-800 font-semibold"> · B.E.T. Sadathunnisa Degree College</span>
                </div>
                <div className="text-slate-500 font-mono">Batch 2023–2026</div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>Core Curriculum: Corporate Accounting, Financial Management, Direct Taxation, Commercial Law</span>
                <span className="text-slate-500">Bangalore · Convocation: Oct 05, 2026</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Experience &amp; Client Projects
            </h2>

            {/* Featured Client Project */}
            <div className="space-y-1.5 text-xs bg-slate-50 border border-slate-200/80 rounded-lg p-3">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-slate-900">Lead Web Creator &amp; Portfolio Architect</span>
                  <span className="text-teal-800 font-semibold"> · Client: Munawar Hussain (HSM Interior Decorator)</span>
                </div>
                <a href="https://hsm-interior-decorator.ai.studio" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-mono font-semibold hover:underline">
                  hsm-interior-decorator.ai.studio ↗
                </a>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                <li>Designed and deployed live commercial website portfolio showcasing turnkey interior architecture and spatial designs.</li>
                <li>Engineered responsive galleries, service catalogs, and instant WhatsApp booking integration for client inquiries.</li>
              </ul>
            </div>

            {WORK_EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{exp.role}</span>
                    <span className="text-slate-700 font-semibold"> · {exp.organization}</span>
                    {exp.organization === 'HOPE Foundation' && (
                      <span className="ml-2 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                        100/100 Score (60/60 Project + 40/40 Viva)
                      </span>
                    )}
                  </div>
                  <div className="text-slate-500 font-mono">{exp.period}</div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 23 Verified Credentials */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {CERTIFICATES.length} Verified Industry Certifications &amp; Courses
              </h2>
              <span className="text-[11px] font-mono text-slate-500">{CERTIFICATES.length} / {CERTIFICATES.length} Verified</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {CERTIFICATES.map((cert, idx) => (
                <div key={idx} className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                  <div>
                    <div className="font-semibold text-slate-900 leading-tight">
                      {idx + 1}. {cert.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {cert.issuer} {cert.grade ? `(${cert.grade})` : ''} · {cert.issueDate}
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 shrink-0 text-right">
                    {cert.registrationNo ? `Reg: ${cert.registrationNo}` : cert.credentialId.substring(0, 14)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
