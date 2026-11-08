import React from 'react';
import { Database, FolderKanban, Sparkles, ReceiptText, Globe, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillDomains = [
    {
      title: 'Data & Analytics',
      icon: <Database className="w-5 h-5 text-teal-700" />,
      description: 'Business intelligence dashboards, exploratory data evaluation, and spreadsheet analytics.',
      skills: [
        'Microsoft Power BI & DAX',
        'Data Cleaning & Deduplication',
        'Data Exploration (Infosys)',
        'KPI & Metrics Visualizations',
        'Data Entry Accuracy (Alison 84%)'
      ]
    },
    {
      title: 'Project Coordination',
      icon: <FolderKanban className="w-5 h-5 text-teal-700" />,
      description: 'End-to-end operational planning, task delegation, and timeline assurance.',
      skills: [
        '6-Month Operational Deployment',
        'ISO 9001 Audit Systems (92%)',
        'Principles of Management (Saylor 80%)',
        'Resource & Milestone Tracking',
        'Stakeholder Communication'
      ]
    },
    {
      title: 'Modern AI & Automation',
      icon: <Sparkles className="w-5 h-5 text-teal-700" />,
      description: 'Integrating generative AI tools and modern prompt engineering workflows.',
      skills: [
        'CS205 Building with AI (Saylor 84%)',
        'Cisco Modern AI Fundamentals',
        'Prompt Workflows & LLM Practices',
        'Productivity Automation',
        'Ethical AI Standards'
      ]
    },
    {
      title: 'Finance & Accounting',
      icon: <ReceiptText className="w-5 h-5 text-teal-700" />,
      description: 'Commercial accounting principles rooted in a Bachelor of Commerce (B.Com) education.',
      skills: [
        'B.Com Financial Acumen',
        'Balance Sheet & Ledgers',
        'Financial Accounting (Udemy 18.5h)',
        'Double-Entry Accounting (Mind Luster)',
        'Audit Preparation & Reconciliations'
      ]
    },
    {
      title: 'Web & Digital Tools',
      icon: <Globe className="w-5 h-5 text-teal-700" />,
      description: 'Foundational front-end technical awareness and digital outreach capabilities.',
      skills: [
        'IBM Web Dev Fundamentals (Credly)',
        'HTML5 / CSS3 Responsive Layouts',
        'Digital Marketing (Hunar Academy)',
        'Graphic Design (Udemy)',
        'Intro to Cybersecurity (Cisco)'
      ]
    }
  ];

  return (
    <section id="competencies" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase">
            Technical &amp; Operational Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Core Competencies &amp; Methodologies
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            A versatile intersection of commercial commerce knowledge, analytical tool mastery, and hands-on operational leadership.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillDomains.map((domain, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-300 transition-colors shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {domain.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                {domain.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
