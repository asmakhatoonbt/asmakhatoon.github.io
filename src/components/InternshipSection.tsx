import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  BarChart3, 
  Database, 
  Calendar, 
  Building2, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { INTERNSHIP_REPORT_DATA } from '../data/certificates.ts';

export const InternshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'dax' | 'architecture' | 'logsheets'>('overview');
  const data = INTERNSHIP_REPORT_DATA;

  return (
    <section id="internship" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              <span>Academic Distinction · 100/100 Evaluation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Power BI Internship Program Report
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Official 49-page academic project report submitted to <strong className="text-slate-900 font-semibold">{data.university}</strong> through <strong className="text-teal-900 font-semibold">{data.college}</strong>, completed at <strong className="text-slate-900 font-semibold">{data.organization}</strong>.
            </p>
          </div>

          {/* Quick PDF Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={data.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-700 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Eye className="w-4 h-4" />
              <span>Read Full Report (49 Pages PDF)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={data.pdfUrl}
              download="Asma_Khatoon_Power_BI_Internship_Report.pdf"
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 shadow-2xs cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Eye-Catching 100/100 Score Showcase Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-700/30 grid lg:grid-cols-12 gap-8 items-center">
          {/* Big Score Callout */}
          <div className="lg:col-span-5 space-y-3 lg:border-r lg:border-slate-800 lg:pr-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Perfect Academic Evaluation</span>
            </div>
            <div className="flex items-baseline justify-center sm:justify-start gap-3">
              <div className="text-6xl sm:text-7xl font-black text-amber-400 tracking-tight tabular-nums">
                100
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-400">
                / 100
              </div>
            </div>
            <div className="text-sm font-semibold text-teal-100">
              100% Full Marks Awarded Across All Review Parameters
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Achieved highest possible evaluation in both the written internal project work and the rigorous university viva-voce examination for Bachelor of Commerce (B.Com).
            </p>
          </div>

          {/* Score Breakdown Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-slate-300">Internal Project Work</span>
                <span className="text-teal-400 font-bold">100% Score</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">60</span>
                <span className="text-sm text-slate-400">/ 60 Marks</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full marks for 49-page technical rigor, Star Schema data modeling, Power Query transformations, and 29 interactive visuals.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-slate-300">Viva-Voce Examination</span>
                <span className="text-teal-400 font-bold">100% Score</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-amber-400">40</span>
                <span className="text-sm text-slate-400">/ 40 Marks</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full marks for viva defense, explaining DAX formulas, filter contexts, time-intelligence calculations, and business insights.
              </p>
            </div>
          </div>
        </div>

        {/* Credential & Institutional Context Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Candidate &amp; Reg No</div>
            <div className="text-sm font-bold text-slate-900">{data.candidateName}</div>
            <div className="text-xs text-teal-800 font-mono font-semibold">{data.registerNumber}</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Host Organization</div>
            <div className="text-sm font-bold text-slate-900">{data.organization}</div>
            <div className="text-xs text-slate-500 font-mono">Ref: {data.certificateRef}</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Internship Duration</div>
            <div className="text-sm font-bold text-slate-900">{data.duration}</div>
            <div className="text-xs text-slate-500">{data.period}</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Internal Guide</div>
            <div className="text-sm font-bold text-slate-900">{data.mentors.internalGuide}</div>
            <div className="text-xs text-slate-500">HOD Commerce &amp; Management</div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex border-b border-slate-200 text-sm font-medium gap-8 overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'border-teal-800 text-teal-900 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Executive Overview &amp; Curriculum</span>
          </button>

          <button
            onClick={() => setActiveTab('dax')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'dax'
                ? 'border-teal-800 text-teal-900 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>DAX Measures &amp; 29 Visuals</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'border-teal-800 text-teal-900 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Star Schema &amp; ETL Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('logsheets')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'logsheets'
                ? 'border-teal-800 text-teal-900 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>6-Week Log Sheets &amp; Signatures</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Executive Project Abstract
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {data.executiveSummary}
              </p>
            </div>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.modules.map((mod, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-slate-300 transition-all shadow-2xs"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wide">
                    <span>Module 0{index + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {mod.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: DAX Measures & Visualizations */}
        {activeTab === 'dax' && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="max-w-3xl space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  DAX (Data Analysis Expressions) &amp; Business Intelligence Formulas
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Key time-intelligence and aggregation formulas authored in Power BI Desktop to compute running totals, dynamic monthly pacing, and YoY comparative indices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {data.daxMeasures.map((measure, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-900">
                        {measure.name}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 font-mono">DAX Measure</span>
                    </div>
                    <div className="bg-slate-900 text-teal-300 font-mono text-xs p-3 rounded-lg overflow-x-auto selection:bg-teal-700">
                      <code>{measure.formula}</code>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {measure.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 29 Visualizations Breakdown */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                29 Interactive Dashboard Visualizations Delivered
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The report contains 29 dedicated visual charts across the executive sales, profitability, shipping lead time, and customer loyalty report pages:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
                <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm">Executive KPI Cards &amp; Gauges</div>
                  <p className="text-slate-600">Total Sales card, Target Profit gauge, Order Quantity KPI, Average Shipping Delay indicator.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm">Categorical &amp; Trend Visuals</div>
                  <p className="text-slate-600">Clustered Column charts, Line charts with forecasting bands, Stacked Area graphs, Ribbon charts.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm">Geographical &amp; Root-Cause</div>
                  <p className="text-slate-600">Decomposition Trees by Region and Sub-Category, Filled Maps for global orders, Matrix heatmaps with conditional gradients.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Architecture & Case Studies */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Star Schema Architecture */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wide">
                  <Database className="w-4 h-4 text-teal-700" />
                  <span>Relational Architecture</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Star Schema Data Model
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Engineered an enterprise Star Schema model optimizing tabular engine throughput and avoiding many-to-many ambiguity:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-teal-900">Fact Table (Central)</div>
                    <div className="font-mono text-xs text-slate-800 mt-1">Fact_Orders_Sales</div>
                    <div className="text-xs text-slate-500 mt-1">Row-level order line items, sales quantity, discount rates, gross profit.</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                      <div className="font-bold text-slate-900">Dim_Customer</div>
                      <div className="text-slate-500 text-[11px]">Customer ID, Name, Segment</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                      <div className="font-bold text-slate-900">Dim_Product</div>
                      <div className="text-slate-500 text-[11px]">Product ID, Category, Sub-Category</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                      <div className="font-bold text-slate-900">Dim_Location</div>
                      <div className="text-slate-500 text-[11px]">Country, State, City, Postal Code</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                      <div className="font-bold text-slate-900">Dim_Calendar</div>
                      <div className="text-slate-500 text-[11px]">Date, Month, Quarter, Fiscal Year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wide">
                  <TrendingUp className="w-4 h-4 text-teal-700" />
                  <span>Applied Research</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Business Case Studies Solved
                </h3>
                <div className="space-y-3">
                  {data.caseStudies.map((cs, idx) => (
                    <div key={idx} className="border-l-2 border-teal-700 pl-3 py-1 space-y-1">
                      <div className="text-xs font-bold text-slate-900">{cs.title}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{cs.insight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: 6-Week Log Sheets & Signatures */}
        {activeTab === 'logsheets' && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="max-w-3xl space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  6-Week Progressive Log Sheets &amp; Verified Sign-Offs
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every week of the 6-week full-time internship was rigorously logged, tasks itemized, and officially countersigned by the external industry director and college internal faculty guide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.weeklyLogSummary.map((log, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-teal-900">{log.week}</span>
                      <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    </div>
                    <div className="text-xs font-semibold text-slate-900 leading-snug">
                      {log.topic}
                    </div>
                    <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 font-mono">
                      {log.verification}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mentors and Signatories Callout */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Official Signatories &amp; Institutional Mentors:
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">{data.mentors.internalGuide}</div>
                    <div className="text-slate-500">{data.mentors.guideDesignation}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">{data.mentors.principal}</div>
                    <div className="text-slate-500">{data.mentors.principalDesignation}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">{data.mentors.industryDirector}</div>
                    <div className="text-slate-500">{data.mentors.industryDesignation}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Report Download Banner Callout */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-base font-bold text-slate-900">
                Complete 49-Page Academic Project Report Available
              </div>
              <div className="text-xs text-slate-500">
                Includes official certificate of completion, college declaration, guide acknowledgement, and all 29 visual charts.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={data.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <Eye className="w-4 h-4" />
              <span>Open 49-Page PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
