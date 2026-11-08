import React from 'react';
import { Calendar, MapPin, CheckCircle2, BarChart3, Briefcase, Users } from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/certificates.ts';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase">
            Professional Experience &amp; Practical Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Work Experience &amp; Practical Internships
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Hands-on operational deployment coordinating cross-functional projects, combined with targeted business intelligence internship building executive Power BI dashboards.
          </p>
        </div>

        {/* Experience Split Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Timeline Cards */}
          <div className="lg:col-span-7 space-y-8">
            {WORK_EXPERIENCES.map((exp, index) => (
              <div 
                key={index}
                className="relative bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-slate-300 transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/70 pb-4">
                  <div>
                    <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">
                      {exp.type}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      {exp.organization === 'HOPE Foundation' && (
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/90 px-2 py-0.5 rounded-md">
                          100/100 Perfect Score (60/60 Project + 40/40 Viva)
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 mt-1">
                      <span>{exp.organization}</span>
                      {exp.organization === 'HOPE Foundation' && (
                        <a 
                          href="#internship" 
                          className="text-xs font-semibold text-teal-800 hover:text-teal-900 hover:underline inline-flex items-center gap-1"
                        >
                          <span>View 49-Page Report &amp; Visuals ↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 space-y-1 sm:text-right font-mono">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-semibold text-slate-900">
                    Key Deliverables &amp; Impact:
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-600 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-500 mr-1">Skills:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Case Spotlight & Power BI Dashboard Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-video bg-slate-900">
                <img
                  src="/src/assets/images/workspace_analytics_desk_1793172381450.jpg"
                  alt="Power BI analytics workspace and dashboard modeling"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
                  Business Intelligence Workstation
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">
                    Data Analytics &amp; Project Systems
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Practical execution combining structured data ETL, Power Query transformation, and interactive DAX measures to drive real-time operational decision making.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200/70 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Power BI DAX &amp; Modeling</span>
                    <span className="font-semibold text-slate-900">Verified Intern</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Cross-Team Coordination</span>
                    <span className="font-semibold text-slate-900">6 Months Deployment</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">NATS Apprenticeship Readiness</span>
                    <span className="font-semibold text-teal-700">Eligible 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Education Callout Box */}
            <div className="bg-teal-50/60 border border-teal-200/80 rounded-2xl p-6 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Academic Background &amp; College
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                B.Com (Regular) · B.E.T. Sadathunnisa Degree College
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Graduated with a core 3-year curriculum (Batch 2023–26) in Corporate Accounting, Financial Management, Commercial Law, and Business Statistics. Convocation completed on October 05, 2026.
              </p>
              <div className="pt-2">
                <a
                  href="#graduation"
                  className="text-xs font-semibold text-teal-800 hover:text-teal-950 underline decoration-teal-600/40 hover:decoration-teal-800 underline-offset-4 inline-flex items-center gap-1"
                >
                  View 5 Convocation Photos in Gallery →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
