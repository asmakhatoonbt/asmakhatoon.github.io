import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Copy, Check, Filter, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES, Certificate } from '../data/certificates.ts';

interface CertificatesGalleryProps {
  onSelectCertificate: (cert: Certificate) => void;
}

type CategoryType = 'all' | 'Data & AI' | 'Management' | 'Development' | 'Finance' | 'Experience';

export const CertificatesGallery: React.FC<CertificatesGalleryProps> = ({ onSelectCertificate }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: CERTIFICATES.length };
    CERTIFICATES.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    return CERTIFICATES.filter((cert) => {
      const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        cert.name.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.credentialId.toLowerCase().includes(q) ||
        cert.skills.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certificates" className="py-20 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header with Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase">
            Accredited Professional Credentials &amp; Coursework
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            23 Verified Industry Certificates &amp; Accreditations
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Curated coursework, executive seminars, practical internships, and government pledges across Tally Prime, M.S. Office, Saylor Academy, Cisco, Infosys Springboard, IBM, B.E.T. IQAC FDPs, and Ministry of Home Affairs.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Interactive Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-slate-200/80 rounded-xl max-w-full">
              {(
                [
                  { key: 'all', label: 'All' },
                  { key: 'Finance', label: 'Finance' },
                  { key: 'Data & AI', label: 'Data & AI' },
                  { key: 'Management', label: 'Management' },
                  { key: 'Development', label: 'Development' },
                  { key: 'Experience', label: 'Experience' },
                ] as const
              ).map((tab) => {
                const count = categoryCounts[tab.key] || 0;
                const isActive = activeCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveCategory(tab.key)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search credentials, skills, issuers, Reg. No..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Active Result Count Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-900">{filteredCertificates.length}</strong> of{' '}
              {CERTIFICATES.length} credentials
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
              All IDs verifiable via official issuer portals
            </span>
          </div>
        </div>

        {/* 3-Column Certificates Grid with Scroll-Triggered Entrance Animations */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <Filter className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-semibold text-slate-800">No matching certificates found</h3>
            <p className="text-xs text-slate-500">
              Try searching with a different keyword or switch to another category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert, index) => {
                const isCopied = copiedId === cert.credentialId;
                // Stagger delay based on column index (0, 1, 2)
                const colDelay = (index % 3) * 0.08;

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 35, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{
                      duration: 0.45,
                      delay: colDelay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ 
                      y: -6,
                      boxShadow: '0 16px 30px -10px rgba(15, 23, 42, 0.12)',
                      transition: { duration: 0.2, ease: 'easeOut' }
                    }}
                    onClick={() => onSelectCertificate(cert)}
                    className="group relative bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between cursor-pointer shadow-sm hover:border-slate-300 transition-colors"
                  >
                    <div className="space-y-3">
                      {/* Eye-Catching Highlight Badge Banner (Pure text, no images) */}
                      {cert.highlightBadge && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200/90 text-teal-900 text-[11px] font-bold tracking-tight">
                          <span>{cert.highlightBadge}</span>
                        </div>
                      )}

                      {/* Quiet Unboxed Metadata: Category, Date, Grade, Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-teal-800">{cert.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{cert.issueDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {cert.duration && (
                            <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                              {cert.duration.length > 20 ? cert.duration.split('(')[0].trim() : cert.duration}
                            </span>
                          )}
                          {cert.grade && (
                            <span className="font-semibold text-teal-700 tabular-nums text-xs">
                              {cert.grade}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Issuer */}
                      <div className="text-xs font-semibold text-slate-500">
                        {cert.issuer}
                      </div>

                      {/* Certificate Name */}
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                        {cert.name}
                      </h3>

                      {/* Brief description */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills Tag Line */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="text-[11px] px-1.5 py-0.5 text-slate-500">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom: Credential ID & Quick Verify */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px] truncate max-w-[170px]">
                        {cert.registrationNo ? (
                          <span className="truncate text-teal-900 font-semibold bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/70">
                            Reg: {cert.registrationNo}
                          </span>
                        ) : (
                          <span className="truncate">ID: {cert.credentialId}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleCopyId(e, cert.credentialId)}
                          title="Copy Credential ID"
                          className="p-1.5 text-slate-400 hover:text-slate-800 rounded transition-colors cursor-pointer"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectCertificate(cert)}
                          className="font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer text-xs flex items-center gap-1"
                        >
                          <span>Details</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
