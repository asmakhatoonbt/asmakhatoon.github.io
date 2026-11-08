import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layout, CheckCircle2, ArrowUpRight, Copy, Check, Eye } from 'lucide-react';
import { FEATURED_PROJECTS_DATA } from '../data/certificates.ts';

export const ProjectsSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const project = FEATURED_PROJECTS_DATA[0];

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle ambient gradient mesh */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Client Work · Production Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Recent Client Website Portfolio
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Showcasing the official digital portfolio engineered for client <strong className="text-white font-semibold">Munawar Hussain</strong> — establishing the online presence for <strong className="text-teal-300 font-semibold">HSM Interior Decorator</strong>.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-md hover:shadow-teal-400/20 cursor-pointer whitespace-nowrap"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Project Narrative & Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Meta Strip */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="text-teal-400 font-semibold uppercase tracking-wide">Client Project</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-white">Client: {project.client}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Role: {project.role}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-teal-300 font-medium text-base sm:text-lg">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* User-Requested Eye-Catching Link Callout Box */}
            <div className="bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-900 border border-teal-500/30 rounded-2xl p-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <span>🔗 Click the link below to see my project work</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-black/40 border border-slate-800 rounded-xl p-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-semibold text-teal-300 hover:text-teal-200 underline decoration-teal-500/50 hover:decoration-teal-300 underline-offset-4 flex items-center gap-2 break-all"
                >
                  <span>{project.liveUrl}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 text-teal-400" />
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleCopy(project.liveUrl)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Copy Link to Clipboard"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Live</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Key Deliverables & Feature Checklist */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Delivered Capabilities:
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology & Tooling (Unboxed text flow, following zero-pill discipline) */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Tech Stack:</span>
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-slate-300">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Mockup / Interface Preview Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-teal-500/40">
              {/* Browser Window Header Mock */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 max-w-xs mx-auto bg-slate-900 border border-slate-800 px-3 py-1 rounded text-[11px] font-mono text-slate-400 truncate text-center">
                  hsm-interior-decorator.ai.studio
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  title="Open live site"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Graphic Mockup Panel */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 space-y-6">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                    Live Client Showcase
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    HSM Interior Decorator
                  </h4>
                  <p className="text-xs text-slate-400">
                    Bespoke Turnkey Residential &amp; Commercial Interior Fit-Outs
                  </p>
                </div>

                {/* Aesthetic Interior Visualization Mock Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-200">Living Spaces</div>
                    <div className="text-[10px] text-slate-400">Modern minimalist &amp; ambient lighting setups</div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-200">Modular Kitchens</div>
                    <div className="text-[10px] text-slate-400">Ergonomic cabinetry &amp; quartz countertops</div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-200">Executive Workspaces</div>
                    <div className="text-[10px] text-slate-400">Acoustic paneling &amp; custom storage</div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-200">Direct WhatsApp</div>
                    <div className="text-[10px] text-slate-400">Instant consultation &amp; estimate booking</div>
                  </div>
                </div>

                {/* Action CTA */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Launch hsm-interior-decorator.ai.studio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 text-center font-medium">
              Verified client deliverable · Engineered &amp; published by Asma Khatoon for Munawar Hussain
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
