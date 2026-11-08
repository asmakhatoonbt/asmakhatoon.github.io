import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, ShieldCheck, Award, Clock, Calendar, BookOpen } from 'lucide-react';
import { Certificate } from '../data/certificates.ts';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Official Credential Verification
              </div>
              <div className="text-sm font-semibold text-white">
                {certificate.issuer}
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Certificate Title & Category */}
          <div className="space-y-2">
            {certificate.highlightBadge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 border border-teal-200/90 text-teal-900 text-xs font-bold tracking-tight">
                <span>{certificate.highlightBadge}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800">
              <span>{certificate.category}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Verified Certificate</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {certificate.name}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Key Verification Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Date
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-1 font-mono">
                {certificate.issueDate}
              </div>
            </div>

            {certificate.duration && (
              <div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Duration
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-1">
                  {certificate.duration}
                </div>
              </div>
            )}

            {certificate.grade && (
              <div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Grade
                </div>
                <div className="text-sm font-semibold text-teal-700 mt-1">
                  {certificate.grade}
                </div>
              </div>
            )}

            <div>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Status
              </div>
              <div className="text-sm font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                Verified
              </div>
            </div>
          </div>

          {/* Credential ID Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Credential Identifier:</span>
              {certificate.registrationNo && (
                <span className="text-teal-800 font-mono font-bold">
                  Official Reg. No: {certificate.registrationNo}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 border border-slate-200 font-mono text-xs text-slate-800">
              <span className="truncate mr-2">{certificate.credentialId}</span>
              <button
                onClick={handleCopyId}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-sans font-medium text-xs cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Certificate Image Document Preview */}
          {certificate.imageSrc && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Official Certificate Document:</span>
                <a
                  href={certificate.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 text-[11px] font-medium"
                >
                  <span>Open Full Size</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs max-h-80 flex items-center justify-center p-1">
                <img
                  src={certificate.imageSrc}
                  alt={certificate.name}
                  className="w-full h-auto max-h-76 object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Competencies Covered */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-teal-700" />
              Core Competencies &amp; Skills Acquired:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {certificate.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              Holder: <span className="font-semibold text-slate-800">Asma Khatoon</span>
            </div>
            <div className="flex items-center gap-3">
              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
                >
                  Official Issuer Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
