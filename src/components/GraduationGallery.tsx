import React, { useState, useEffect } from 'react';
import { GRADUATION_PHOTOS, GraduationPhoto } from '../data/certificates.ts';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, MapPin, Calendar, ZoomIn, X, ChevronLeft, ChevronRight, Award, ShieldCheck, School, Sparkles } from 'lucide-react';

export const GraduationGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos (5)' },
    { key: 'Ceremony', label: 'Ceremony' },
    { key: 'Celebration', label: 'Celebration' },
    { key: 'Cohort', label: 'Class Cohort' },
    { key: 'Campus', label: 'Faculty & Campus' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? GRADUATION_PHOTOS 
    : GRADUATION_PHOTOS.filter(p => p.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % GRADUATION_PHOTOS.length));
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev - 1 + GRADUATION_PHOTOS.length) % GRADUATION_PHOTOS.length));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const activeModalPhoto = selectedPhotoIndex !== null ? GRADUATION_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section id="graduation" className="py-20 px-6 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
            <span>Academic Milestone · Graduation Convocation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            B.Com Regular Degree Convocation
          </h2>

          <div className="text-lg font-bold text-teal-800">
            B.E.T. Sadathunnisa Degree College
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Honored with the Bachelor of Commerce (B.Com) regular degree during the official convocation for the <strong className="text-slate-900">Batch 2023–26</strong> held on <strong className="text-slate-900">October 05, 2026</strong> at B.E.T. Institutions, Bangalore.
          </p>

          {/* Institutional Highlights Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-700">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              <School className="w-4 h-4 text-teal-700" /> B.E.T. Sadathunnisa Degree College
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              <Award className="w-4 h-4 text-teal-700" /> 3-Year B.Com Regular Degree
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 font-medium">
              <Calendar className="w-4 h-4 text-teal-700" /> Batch 2023–2026
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50/80 border border-teal-200 font-semibold text-teal-800">
              <ShieldCheck className="w-4 h-4 text-teal-700" /> NATS Eligible 2026
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto p-1.5 bg-slate-100 rounded-xl max-w-xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Hero Card: Cap Toss Celebration (Col-span 7) */}
          {filteredPhotos.slice(0, 1).map((photo) => {
            const globalIndex = GRADUATION_PHOTOS.findIndex(p => p.id === photo.id);
            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedPhotoIndex(globalIndex)}
                className="md:col-span-7 group relative bg-slate-900 rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-4/3 sm:aspect-16/10 border border-slate-200"
              >
                <img
                  src={photo.imageSrc}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{photo.highlight || photo.category}</span>
                    <span>·</span>
                    <span>{photo.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-teal-200 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" /> {photo.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-teal-300 font-semibold group-hover:underline">
                      <ZoomIn className="w-3.5 h-3.5" /> View Photo
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Secondary Hero Card: Class Cohort Regalia (Col-span 5) */}
          {filteredPhotos.slice(1, 2).map((photo) => {
            const globalIndex = GRADUATION_PHOTOS.findIndex(p => p.id === photo.id);
            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedPhotoIndex(globalIndex)}
                className="md:col-span-5 group relative bg-slate-900 rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-4/3 sm:aspect-16/10 border border-slate-200"
              >
                <img
                  src={photo.imageSrc}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{photo.highlight || photo.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-teal-200 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate max-w-[200px] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" /> {photo.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-teal-300 font-semibold shrink-0">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Remaining 3 Photos in a 3-Column Row */}
          {filteredPhotos.slice(2).map((photo, index) => {
            const globalIndex = GRADUATION_PHOTOS.findIndex(p => p.id === photo.id);
            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (index + 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedPhotoIndex(globalIndex)}
                className="md:col-span-4 group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={photo.imageSrc}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-semibold">
                    {photo.category}
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-900 p-1.5 rounded-full shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-teal-800">{photo.date}</span>
                      <span>·</span>
                      <span className="truncate">{photo.location.split(',')[0]}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors mt-1 leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] font-medium text-slate-400">B.E.T. Sadathunnisa College</span>
                    <span className="text-teal-700 font-semibold group-hover:underline flex items-center gap-1">
                      View details →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Degree Summary Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="text-xs uppercase tracking-wider text-teal-400 font-bold flex items-center gap-1.5">
                <School className="w-4 h-4" />
                Affiliated Institution &amp; Degree Program
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                B.E.T. Sadathunnisa Degree College, Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Graduated with a comprehensive 3-year curriculum in Bachelor of Commerce (B.Com Regular) covering Corporate Accounting, Business Law, Financial Management, Direct Taxation, and Commercial Statistics.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-xs text-teal-300 font-semibold">Program &amp; Stream</div>
                <div className="text-sm font-bold text-white">B.Com (Regular) · 2023–26</div>
              </div>
              <div className="p-3 rounded-xl bg-teal-800/60 backdrop-blur-sm border border-teal-500/30 text-center">
                <div className="text-xs text-teal-200 font-semibold">Government Scheme</div>
                <div className="text-sm font-bold text-white">NATS Eligible 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalPhoto && selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                    Graduation Photo {selectedPhotoIndex + 1} of {GRADUATION_PHOTOS.length}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-300 hidden sm:inline">
                    B.E.T. Sadathunnisa Degree College (Batch 2023–26)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev - 1 + GRADUATION_PHOTOS.length) % GRADUATION_PHOTOS.length))}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Previous Photo (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % GRADUATION_PHOTOS.length))}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Next Photo (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIndex(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer ml-1"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] max-h-[60vh]">
                <img
                  src={activeModalPhoto.imageSrc}
                  alt={activeModalPhoto.title}
                  className="w-full h-full max-h-[60vh] object-contain"
                />

                {/* Left/Right Overlaid Arrow Buttons */}
                <button
                  onClick={() => setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev - 1 + GRADUATION_PHOTOS.length) % GRADUATION_PHOTOS.length))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer backdrop-blur-sm border border-slate-700"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedPhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % GRADUATION_PHOTOS.length))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer backdrop-blur-sm border border-slate-700"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Photo Details Footer */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2 shrink-0 overflow-y-auto max-h-[28vh]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {activeModalPhoto.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-teal-400">
                      <Calendar className="w-3.5 h-3.5" /> {activeModalPhoto.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {activeModalPhoto.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalPhoto.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                  <span>Candidate: <strong>Asma Khatoon</strong> · B.Com (Regular), B.E.T Sadathunnisa College</span>
                  <a
                    href={activeModalPhoto.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 font-semibold"
                  >
                    View Original Full Quality ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
