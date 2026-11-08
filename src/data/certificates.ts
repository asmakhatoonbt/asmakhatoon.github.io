export interface Certificate {
  id: string;
  credentialId: string;
  name: string;
  issuer: string;
  issueDate: string;
  category: 'Data & AI' | 'Development' | 'Finance' | 'Management' | 'Experience';
  duration?: string;
  grade?: string;
  description: string;
  verificationUrl?: string;
  skills: string[];
  featured?: boolean;
  highlightBadge?: string;
  registrationNo?: string;
  imageSrc?: string;
}

export interface CandidateProfile {
  name: string;
  avatarUrl: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  credlyUrl: string;
  availableForHire: boolean;
  natsEligible: boolean;
  totalCertificates: number;
  totalExperienceMonths: number;
  topCompaniesCount: number;
  averageGrade: string;
  education: {
    degree: string;
    institution: string;
    field: string;
    batch: string;
    convocationDate: string;
    status: string;
    location: string;
  };
  summary: string;
  coreCompetencies: string[];
}

export interface GraduationPhoto {
  id: string;
  title: string;
  caption: string;
  date: string;
  imageSrc: string;
  category: 'Ceremony' | 'Celebration' | 'Cohort' | 'Campus';
  location: string;
  description: string;
  highlight?: string;
}

export const CANDIDATE_PROFILE: CandidateProfile = {
  name: 'Asma Khatoon',
  avatarUrl: '/assets/aistudio/asma_profile_cropped.jpg',
  title: 'B.Com Graduate | Project Co-ordinator & Data Analyst',
  headline: 'Detail-oriented professional combining financial acumen, modern data analytics (Power BI, Python/SQL foundations), and agile project coordination.',
  location: 'Bangalore, Karnataka, India',
  email: 'asmakhatoon.blr@gmail.com',
  phone: '+91 7022950957',
  credlyUrl: 'https://www.credly.com/user/asma-khatoon',
  availableForHire: true,
  natsEligible: true,
  totalCertificates: 23,
  totalExperienceMonths: 6,
  topCompaniesCount: 6,
  averageGrade: '84%',
  education: {
    degree: 'Bachelor of Commerce (B.Com) - Regular',
    institution: 'B.E.T. Sadathunnisa Degree College',
    field: 'Commerce, Accounting & Financial Management',
    batch: 'Batch 2023 – 2026',
    convocationDate: 'October 05, 2026',
    status: 'Graduated (Regular) · NATS Eligible 2026',
    location: 'Bangalore, Karnataka, India'
  },
  summary: 'Proactive B.Com (Regular) graduate from B.E.T. Sadathunnisa Degree College (Batch 2023–26) with 6 months of hands-on project coordination at Millat Community Centre and Power BI internship training at HOPE Foundation. Holds 23 verified credentials and course accreditations spanning Tally Prime, M.S. Office Suite, Faculty Development Programmes, Data & AI, Management, and Corporate Accounting from Saylor Academy, Cisco, Infosys Springboard, IBM, Udemy, and Govt. of India. Ready for immediate placement under NATS 2026 or full-time corporate roles in Project Management, Business Operations, and Financial Analytics.',
  coreCompetencies: [
    'Tally Prime & GST Accounting',
    'Microsoft Power BI & DAX',
    'M.S. Office Suite (Excel, Word, PPT)',
    'Data Cleaning & Analysis',
    'Project Lifecycle Management',
    'Financial Accounting & Auditing',
    'Patent Filing & IPR Methodology',
    'Generative AI & Prompt Engineering',
    'Stakeholder Coordination',
    'ISO Management Audit (ISO 9001)',
    'Cybersecurity Essentials',
    'Web Fundamentals (HTML/CSS/JS)'
  ]
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 'achievers-tally-prime',
    credentialId: 'REG-1015-T',
    registrationNo: '1015 T',
    name: 'Tally Prime Professional Accounting Course',
    issuer: 'Achievers Shine Academy (Alnoor Welfare Trust Regd.)',
    issueDate: '2025-01-31',
    category: 'Finance',
    duration: '3 Months (Nov 2024 – Jan 2025)',
    highlightBadge: '⭐ 3-Month Tally Prime Professional Certification',
    description: 'Comprehensive 3-month computerized accounting certification covering Tally Prime operations, GST calculations, purchase/sales vouchers, inventory tracking, trial balance, and profit & loss reconciliation.',
    verificationUrl: 'https://achieversshine.org',
    skills: ['Tally Prime', 'GST Accounting', 'Inventory Management', 'Voucher Entries', 'Financial Statements', 'Ledger Balancing'],
    featured: true
  },
  {
    id: 'achievers-ms-office',
    credentialId: 'REG-667-D',
    registrationNo: '667 D',
    name: 'M.S. Office Professional Suite (Word, Excel, PowerPoint)',
    issuer: 'Achievers Shine Academy (Alnoor Welfare Trust Regd.)',
    issueDate: '2023-07-31',
    category: 'Development',
    duration: '3 Months (May 2023 – Jul 2023)',
    highlightBadge: '💻 3-Month Hands-on Office Software Training',
    description: 'Rigorous 3-month practical course in business office software: advanced spreadsheet formulas and data structuring in Microsoft Excel, executive reporting in Word, and professional presentation design in PowerPoint.',
    verificationUrl: 'https://achieversshine.org',
    skills: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Spreadsheet Modeling', 'Document Formatting', 'Slide Deck Design'],
    featured: true
  },
  {
    id: 'bet-patent-filing-research',
    credentialId: 'BET-IQAC-PAT-2025-12',
    name: 'FDP on "Patent Filing, Research"',
    issuer: 'B.E.T. Sadathunnisa Degree College & PencilBitz (IQAC)',
    issueDate: '2025-12-04',
    category: 'Management',
    duration: 'Faculty Development Programme',
    highlightBadge: '📜 Faculty Development & IPR Research',
    description: 'Specialized Faculty Development Programme on Intellectual Property Rights (IPR), patent landscape mapping, non-provisional filing specifications, novelty claims, and research publication frameworks.',
    verificationUrl: 'https://betsadathunnisacollege.edu.in',
    skills: ['Patent Filing & IPR', 'Research Methodology', 'Intellectual Property Law', 'Prior Art Search', 'Academic Publication'],
    featured: true
  },
  {
    id: 'bet-ai-educational-tech',
    credentialId: 'BET-FDP-AI-2025-10',
    name: 'One Day State Level FDP on "AI Enhanced Educational Technologies"',
    issuer: 'Dept. of Commerce & Management, B.E.T. Sadathunnisa Degree College & PencilBitz / BookBytes',
    issueDate: '2025-10-09',
    category: 'Data & AI',
    duration: 'State Level FDP',
    highlightBadge: '⚡ AI Educational Technologies & Automation',
    description: 'State-level Faculty Development Programme exploring generative AI integration in pedagogy, educational technology workflows, intelligent automated evaluation, and curriculum innovation in commerce education.',
    verificationUrl: 'https://betsadathunnisacollege.edu.in',
    skills: ['AI Educational Technologies', 'Generative Learning Systems', 'Classroom Automation', 'EdTech Pedagogy', 'Interactive Learning'],
    featured: true
  },
  {
    id: 'saylor-cs205',
    credentialId: '6689555290AK',
    name: 'CS205 Building with AI',
    issuer: 'Saylor Academy',
    issueDate: '2025-06-04',
    category: 'Data & AI',
    duration: '48h',
    grade: '84.31%',
    highlightBadge: '🏆 Global Distinction · 84.31%',
    description: 'In-depth foundation in generative AI architectures, prompt workflows, application structuring with LLMs, and ethical implementation principles.',
    verificationUrl: 'https://learn.saylor.org/mod/customcert/verify_certificate.php',
    skills: ['Generative AI', 'Prompt Engineering', 'AI Architecture', 'Ethical AI'],
    featured: true
  },
  {
    id: 'saylor-bus208',
    credentialId: '5446765249AK',
    name: 'BUS208 Principles of Management',
    issuer: 'Saylor Academy',
    issueDate: '2025-06-13',
    category: 'Management',
    duration: '73h',
    grade: '80.00%',
    highlightBadge: '🏆 Global Distinction · 80.00%',
    description: 'Comprehensive organizational leadership study covering resource allocation, operational planning, team coordination, conflict management, and strategic execution.',
    verificationUrl: 'https://learn.saylor.org/mod/customcert/verify_certificate.php',
    skills: ['Operations Management', 'Resource Allocation', 'Strategic Planning', 'Leadership'],
    featured: true
  },
  {
    id: 'infosys-ds',
    credentialId: 'verify.onwingspan.com',
    name: 'Introduction to Data Science',
    issuer: 'Infosys Springboard',
    issueDate: '2026-04-05',
    category: 'Data & AI',
    highlightBadge: '📊 Enterprise Springboard Certified',
    description: 'Foundations of exploratory data analysis, data storytelling, statistical metrics, structured datasets cleaning, and insight derivation for business problems.',
    verificationUrl: 'https://verify.onwingspan.com',
    skills: ['Data Science', 'Data Exploration', 'Statistical Metrics', 'Data Storytelling'],
    featured: true
  },
  {
    id: 'ibm-web-dev',
    credentialId: 'credly.com/go/5ivZMk4g',
    name: 'Web Development Fundamentals',
    issuer: 'IBM',
    issueDate: '2024-12-31',
    category: 'Development',
    highlightBadge: '🌐 IBM Credly Digital Badge',
    description: 'Core web technologies including HTML5 semantics, responsive CSS architectures, JavaScript event models, and client-server communication standards.',
    verificationUrl: 'https://www.credly.com/go/5ivZMk4g',
    skills: ['HTML5 & CSS3', 'JavaScript', 'Web Architecture', 'Responsive Design'],
    featured: true
  },
  {
    id: 'cisco-cybersecurity',
    credentialId: 'CSCO-NET-2025-03',
    name: 'Intro to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issueDate: '2025-03-08',
    category: 'Data & AI',
    highlightBadge: '🛡️ Cisco Networking Academy',
    description: 'Network vulnerability fundamentals, confidentiality-integrity-availability (CIA) triads, threat mitigation, data encryption, and safe corporate data practices.',
    verificationUrl: 'https://www.netacad.com',
    skills: ['Threat Analysis', 'Data Privacy', 'Security Compliance', 'Network Defense']
  },
  {
    id: 'cisco-modern-ai',
    credentialId: 'CSCO-MAI-2025-03',
    name: 'Intro to Modern AI',
    issuer: 'Cisco Networking Academy',
    issueDate: '2025-03-14',
    category: 'Data & AI',
    highlightBadge: '🤖 Cisco AI Foundations',
    description: 'Evolution of modern artificial intelligence, neural networks, computer vision, natural language processing, and workplace automation implementations.',
    verificationUrl: 'https://www.netacad.com',
    skills: ['Modern AI Models', 'Automation', 'Neural Networks', 'Tech Transformation']
  },
  {
    id: 'hunar-digital-marketing',
    credentialId: 'HUNAR/DM-DEC/2023-24/09',
    name: 'Digital Marketing & Growth',
    issuer: 'Hunar Academy',
    issueDate: '2024-03-20',
    category: 'Management',
    duration: '3 Months (Dec 2023 - Mar 2024)',
    highlightBadge: '📈 3-Month Marketing Academy',
    description: 'Multi-channel marketing strategy encompassing search engine optimization, content strategy, email marketing, analytics attribution, and social engagement funnels.',
    verificationUrl: 'https://hunaracademy.org',
    skills: ['Search Engine Optimization', 'Audience Analytics', 'Content Strategy', 'Campaign Tracking']
  },
  {
    id: 'alison-data-entry',
    credentialId: '49090562',
    name: 'Data Entry Tools & Techniques',
    issuer: 'Alison',
    issueDate: '2025-06-05',
    category: 'Development',
    grade: '84%',
    highlightBadge: '🎯 Distinction · 84%',
    description: 'Advanced data entry tools, spreadsheet accuracy benchmarks, verification checks, deduplication routines, and database record keeping.',
    verificationUrl: 'https://alison.com/verify/49090562',
    skills: ['Spreadsheet Operations', 'Data Cleaning', 'Verification Audits', 'Typing Accuracy']
  },
  {
    id: 'alison-iso-audit',
    credentialId: '49090562',
    name: 'ISO Management Audit (ISO 9001)',
    issuer: 'Alison',
    issueDate: '2025-06-02',
    category: 'Management',
    grade: '92%',
    highlightBadge: '🏆 High Distinction · 92%',
    description: 'Quality management systems, ISO 9001 audit frameworks, process documentation verification, corrective action registers, and compliance reporting.',
    verificationUrl: 'https://alison.com/verify/49090562',
    skills: ['ISO 9001 Audit', 'Quality Management', 'Compliance Frameworks', 'Process Inspection'],
    featured: true
  },
  {
    id: 'mindluster-accounting',
    credentialId: 'c490c2d5',
    name: 'Accounting Fundamentals',
    issuer: 'Mind Luster',
    issueDate: '2025-03-11',
    category: 'Finance',
    description: 'Principles of double-entry accounting, ledger balance sheets, journal entries, reconciling accounts, and preparation of core operational financial records.',
    verificationUrl: 'https://www.mindluster.com/certificate/c490c2d5',
    skills: ['Double-Entry Bookkeeping', 'General Ledger', 'Reconciliation', 'Financial Records']
  },
  {
    id: 'udemy-graphics-design',
    credentialId: 'UC-1afca376',
    name: 'Graphic Design Mastery',
    issuer: 'Udemy',
    issueDate: '2025-05-31',
    category: 'Development',
    duration: '10h',
    description: 'Visual communications, typography harmony, marketing asset creation, brand identity guidelines, and presentation graphics.',
    verificationUrl: 'https://www.udemy.com/certificate/UC-1afca376/',
    skills: ['Visual Design', 'Brand Identity', 'Presentation Collateral', 'Layout Composition']
  },
  {
    id: 'udemy-financial-accounting',
    credentialId: 'UC-a95d06e6',
    name: 'Financial Accounting & Reporting',
    issuer: 'Udemy',
    issueDate: '2025-05-30',
    category: 'Finance',
    duration: '18.5h',
    highlightBadge: '💰 Financial Accounting Specialization',
    description: 'Balance sheet mechanics, income statement evaluation, cash flow calculations, depreciation methods, and financial ratio interpretation.',
    verificationUrl: 'https://www.udemy.com/certificate/UC-a95d06e6/',
    skills: ['Financial Statements', 'Cash Flow Analysis', 'Ratio Interpretation', 'Depreciation Schedules'],
    featured: true
  },
  {
    id: 'skilldunia-iit-hyderabad',
    credentialId: 'WPRO-DICE-2025-04',
    name: 'Career Guidance & Tech Horizons',
    issuer: 'SkillDunia x E-Cell IIT Hyderabad',
    issueDate: '2025-04-13',
    category: 'Management',
    highlightBadge: '🏅 ISO 9001:2015 & Wipro DICE Verified',
    description: 'Joint technology career and mentorship webinar conducted with E-Cell IIT Hyderabad and SkillDunia Edutech, accredited with ISO 9001:2015 and verifiable via Wipro DICE ID.',
    verificationUrl: 'https://skilldunia.com',
    skills: ['Career Planning', 'Corporate Readiness', 'Tech Transition', 'Professional Networking'],
    imageSrc: '/assets/aistudio/skilldunia_certificate_cropped.jpg'
  },
  {
    id: 'ai-grow-now',
    credentialId: 'CERT-TK9XFEFTTUEGS0HBVE9PTNXHC',
    name: 'AI for Career Growth Seminar',
    issuer: 'AI GROW NOW',
    issueDate: '2025-11-03',
    category: 'Data & AI',
    description: 'Hands-on seminar on utilizing modern AI assistants for workplace productivity, task automation, market research synthesis, and executive briefing.',
    verificationUrl: 'https://aigrownow.org/verify/CERT-TK9XFEFTTUEGS0HBVE9PTNXHC',
    skills: ['Productivity AI', 'Workplace Automation', 'Executive Briefing', 'Research Synthesis']
  },
  {
    id: 'bet-kua-prof-sheikh-ali',
    credentialId: 'BET-KUA-SEM-2025-02',
    name: 'State Level Seminar: "Prof. B. Sheikh Ali - Life & Achievements"',
    issuer: 'B.E.T. Sadathunnisa Degree College (IQAC) & Karnataka Urdu Academy',
    issueDate: '2025-02-27',
    category: 'Management',
    duration: 'State Level Academic Colloquium',
    highlightBadge: '🏛️ State Level Academic Colloquium',
    description: 'Participated in the state-level academic symposium examining the biographical scholarship, institutional leadership, and historical contributions of renowned historian and Vice-Chancellor Prof. B. Sheikh Ali.',
    verificationUrl: 'https://betsadathunnisacollege.edu.in',
    skills: ['Academic Administration', 'Historiography', 'Cultural Studies', 'Leadership Seminar']
  },
  {
    id: 'ncb-say-yes-to-life',
    credentialId: '7296327942',
    name: '"Say Yes to Life, No to Drugs" National Citizen Pledge',
    issuer: 'Narcotics Control Bureau (NCB) & Ministry of Home Affairs, Govt. of India',
    issueDate: '2023-12-30',
    category: 'Management',
    highlightBadge: '🇮🇳 Govt. of India / NCB Official Pledge',
    description: 'Officially certified national pledge taken under the Narcotics Control Bureau (NCB) and Ministry of Home Affairs, committing to drug-free community advocacy, ethical responsibility, and public wellness mobilization.',
    verificationUrl: 'https://pledge.mygov.in',
    skills: ['Civic Responsibility', 'National Ethics', 'Community Awareness', 'Public Wellness'],
    imageSrc: '/assets/aistudio/certificate_1793071688482_fc8fedc9.jpg'
  },
  {
    id: 'mygov-rashtriya-ekta-diwas',
    credentialId: '2536737453',
    name: 'Rashtriya Ekta Diwas (National Unity Day) Pledge',
    issuer: 'Ministry of Home Affairs & MyGov, Govt. of India (Ek Bharat Shreshtha Bharat)',
    issueDate: '2024-11-01',
    category: 'Management',
    highlightBadge: '🇮🇳 National Integration & Unity Pledge',
    description: 'Official national integration pledge commemorating Sardar Vallabhbhai Patel under the Ek Bharat Shreshtha Bharat mission, dedicated to preserving national unity, security, and civic integrity.',
    verificationUrl: 'https://pledge.mygov.in',
    skills: ['National Integrity', 'Constitutional Values', 'Civic Leadership', 'Public Service Awareness'],
    imageSrc: '/assets/aistudio/certificate_adebfe47.jpg'
  },
  {
    id: 'hope-powerbi-intern',
    credentialId: 'U18BL23C0008',
    name: 'Power BI Business Analytics Intern',
    issuer: 'HOPE Foundation',
    issueDate: '2026-03-31',
    category: 'Experience',
    duration: 'Internship Program (March 2026)',
    highlightBadge: '⭐ Power BI Corporate Internship',
    description: 'Intensive internship developing interactive Microsoft Power BI executive dashboards, DAX measures, data transformation, KPI modeling, and data-driven reporting.',
    verificationUrl: 'https://hopefoundation.org.in',
    skills: ['Microsoft Power BI', 'DAX Measures', 'ETL Modeling', 'Executive KPI Dashboards'],
    featured: true
  },
  {
    id: 'millat-project-coordinator',
    credentialId: 'MC-PC-2026-09',
    name: 'Project Co-ordinator (6 Months)',
    issuer: 'Millat Community Centre',
    issueDate: '2026-09-30',
    category: 'Experience',
    duration: '6 Months (April 2026 - September 2026)',
    highlightBadge: '⭐ 6-Month Operations Deployment',
    description: 'Full-cycle project coordination overseeing community programs, scheduling, budget tracking, vendor/stakeholder communication, and milestone reporting.',
    verificationUrl: 'https://millatcentre.org',
    skills: ['Project Coordination', 'Stakeholder Management', 'Milestone Tracking', 'Operational Reporting'],
    featured: true
  }
];

export const WORK_EXPERIENCES = [
  {
    role: 'Project Co-ordinator',
    organization: 'Millat Community Centre',
    period: 'April 2026 – September 2026 (6 Months)',
    location: 'Bangalore, India',
    type: 'Full-time Deployment',
    highlights: [
      'Orchestrated day-to-day operations and cross-functional task assignments across multi-member teams, ensuring 100% on-time milestone delivery.',
      'Maintained project registers, status dashboards, budget logs, and weekly executive briefings.',
      'Liaised with community stakeholders, suppliers, and internal staff to resolve scheduling bottlenecks swiftly.',
      'Implemented standardized document verification checklists reducing processing discrepancies by 35%.'
    ],
    skills: ['Project Scheduling', 'Budget Logs', 'Cross-functional Coordination', 'Executive Briefings']
  },
  {
    role: 'Power BI Analytics Intern',
    organization: 'HOPE Foundation',
    period: 'March 2026',
    location: 'Bangalore, India',
    type: 'Internship',
    highlights: [
      'Built end-to-end Power BI reporting dashboards ingesting transactional data to visualize operational KPIs and performance trends.',
      'Authored reusable DAX measures for month-over-month variance, cumulative totals, and segmented demographic cuts.',
      'Standardized clean data schemas through Power Query transformations, handling nulls and date hierarchies effectively.'
    ],
    skills: ['Power BI', 'DAX Formulas', 'Power Query ETL', 'Data Visualization']
  }
];

export const GRADUATION_PHOTOS: GraduationPhoto[] = [
  {
    id: 'grad-cap-toss',
    title: 'Triumphant Cap Toss Celebration',
    category: 'Celebration',
    date: 'October 05, 2026',
    imageSrc: '/assets/aistudio/FB_IMG_1791218879290_a48771f7.jpg',
    location: 'B.E.T. Institutions Auditorium, Bangalore',
    caption: 'Graduating students cheering and tossing their academic mortarboards high into the air inside the B.E.T. Institutions hall.',
    description: 'A jubilant convocation milestone marking the completion of the 3-year Bachelor of Commerce (B.Com) regular degree program at B.E.T. Sadathunnisa Degree College. Academic trophies and honors rest on student presentation desks.',
    highlight: 'Convocation Cap Toss'
  },
  {
    id: 'grad-cohort-trophies',
    title: 'B.Com Cohort in Ceremonial Regalia with Honors Trophies',
    category: 'Cohort',
    date: 'October 05, 2026',
    imageSrc: '/assets/aistudio/IMG-20261005-WA0004_aef6de4b.jpg',
    location: 'B.E.T. Campus Garden Terrace, Bangalore',
    caption: 'Class of 2023–26 graduates in black convocation gowns and crimson stoles holding their commemorative degree trophies.',
    description: 'Celebrating academic excellence and camaraderie with graduating classmates and mentors following the degree conferral ceremony.',
    highlight: 'Degree Mementos & Trophies'
  },
  {
    id: 'grad-faculty-group',
    title: 'Official Graduation Cohort with College Leadership & Faculty',
    category: 'Campus',
    date: 'October 05, 2026',
    imageSrc: '/assets/aistudio/FB_IMG_1791218931385_836f1358.jpg',
    location: 'B.E.T. Sadathunnisa Campus Courtyard, Bangalore',
    caption: 'Comprehensive group portrait with B.E.T. institutional leadership, principal, and faculty professors in traditional ceremonial silk attire.',
    description: 'Commemorating the mentorship and guidance of the academic faculty throughout the 3-year commerce program curriculum at B.E.T. Sadathunnisa Degree College.',
    highlight: 'Faculty & Class of 2023–26'
  },
  {
    id: 'grad-stage-dais',
    title: 'Convocation Dais & Ceremonial Hall',
    category: 'Ceremony',
    date: 'October 05, 2026',
    imageSrc: '/assets/aistudio/FB_IMG_1791212320956_372f1e69.jpg',
    location: 'B.E.T. Institutions Main Stage, Bangalore',
    caption: 'Festively decorated stage with floral arrangements, memento tables, and official B.E.T. Sadathunnisa Degree College Graduation Day backdrop.',
    description: 'The ceremonial dais where degrees, certificates, and academic honors were conferred by the Chief Guest, Principal, and Chairman on October 5, 2026.',
    highlight: 'Official Ceremony Dais'
  },
  {
    id: 'grad-welcome-banner',
    title: 'Official Graduation Day Welcome Arch (Batch 2023–26)',
    category: 'Ceremony',
    date: 'October 05, 2026',
    imageSrc: '/assets/aistudio/FB_IMG_1791212346273_afcb6f7c.jpg',
    location: 'B.E.T. Terrace Hall Entrance (4th Floor), Bangalore',
    caption: 'Commemorative banner erected by the Management, Principal, and Staff welcoming students and families to Graduation Day.',
    description: 'Welcoming the Batch 2023–26 to their formal graduation celebration, highlighting the collegiate pride and community at B.E.T. Sadathunnisa Degree College.',
    highlight: 'Batch 2023–26 Welcome'
  }
];

export interface InternshipReportData {
  title: string;
  subtitle: string;
  degree: string;
  academicYear: string;
  candidateName: string;
  registerNumber: string;
  college: string;
  university: string;
  organization: string;
  orgRegistration: string;
  certificateRef: string;
  duration: string;
  period: string;
  totalPages: number;
  pdfUrl: string;
  evaluation: {
    totalScore: number;
    maxScore: number;
    projectWorkScore: number;
    projectWorkMax: number;
    vivaVoceScore: number;
    vivaVoceMax: number;
    gradeText: string;
  };
  mentors: {
    internalGuide: string;
    guideDesignation: string;
    principal: string;
    principalDesignation: string;
    industryDirector: string;
    industryDesignation: string;
  };
  executiveSummary: string;
  modules: {
    title: string;
    description: string;
    keyPoints: string[];
  }[];
  daxMeasures: {
    name: string;
    formula: string;
    purpose: string;
  }[];
  caseStudies: {
    title: string;
    insight: string;
  }[];
  weeklyLogSummary: {
    week: string;
    topic: string;
    verification: string;
  }[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  client: string;
  liveUrl: string;
  tagline: string;
  role: string;
  status: string;
  description: string;
  highlights: string[];
  technologies: string[];
  features: string[];
}

export const INTERNSHIP_REPORT_DATA: InternshipReportData = {
  title: 'Internship Program Report on Power BI',
  subtitle: 'V Semester B.Com Project Report submitted in partial fulfillment of the requirements for the Degree of Bachelor of Commerce',
  degree: 'Bachelor of Commerce (B.Com)',
  academicYear: '2025 – 2026',
  candidateName: 'Asma Khatoon',
  registerNumber: 'U18BL23C0008',
  college: 'B.E.T. Sadathunnisa Degree College',
  university: 'Dr. Manmohan Singh Bengaluru City University (BCU)',
  organization: 'The Hope Foundation, Bengaluru',
  orgRegistration: 'Registered under Indian Trust Act 1882 · NITI Aayog NGO Darpan Reg. DL/2018/0187895',
  certificateRef: 'REF/HF/BLR/ATP/2026/163',
  duration: '6 Weeks Full-Time',
  period: 'January 05, 2026 – February 14, 2026',
  totalPages: 49,
  pdfUrl: '/assets/aistudio/Asma_Power_BI__Report_8db4d607.pdf',
  evaluation: {
    totalScore: 100,
    maxScore: 100,
    projectWorkScore: 60,
    projectWorkMax: 60,
    vivaVoceScore: 40,
    vivaVoceMax: 40,
    gradeText: '100 / 100 · 100% Perfect Academic Score (Full Marks in Project & Viva-Voce)'
  },
  mentors: {
    internalGuide: 'Mrs. Sadiqa Athar',
    guideDesignation: 'M.Com, UGC-NET · Assistant Professor & HOD, Dept. of Commerce & Management',
    principal: 'Prof. Sumaiya Fathima',
    principalDesignation: 'M.A, B.Ed · Principal, B.E.T. Sadathunnisa Degree College',
    industryDirector: 'Augustine T P',
    industryDesignation: 'Senior Program Director, The Hope Foundation'
  },
  executiveSummary: 'Comprehensive 49-page analytical internship report documenting 6 weeks of intensive business intelligence training and applied dashboard development on Microsoft Power BI Desktop. Ingested large multi-table enterprise transactional records (Global Superstore dataset), cleaned schema discrepancies via Power Query Editor ETL, architected relational Star Schema models with 1-to-many cardinalities, formulated advanced DAX measures (MTD, YTD, SAMEPERIODLASTYEAR), and engineered 29 interactive dashboard visual components. Awarded a perfect score of 100 out of 100 (60/60 in internal project review and 40/40 in University viva-voce).',
  modules: [
    {
      title: 'Power BI Architecture & Workspace Navigation',
      description: 'Understanding the Business Intelligence lifecycle from raw transactional data to executive decision-support visualisations.',
      keyPoints: [
        'Power BI Desktop vs. Power BI Service cloud deployment models',
        'Three-pane interface mastering: Report View, Data View, and Model View',
        'DirectQuery vs. Import storage mode optimization for enterprise dataset throughput'
      ]
    },
    {
      title: 'Power Query Editor ETL & Data Munging',
      description: 'Advanced data cleansing pipelines ensuring pristine schema integrity before loading into analytics models.',
      keyPoints: [
        'Column delimiter splitting, data type casting, and header standardization',
        'Detecting and resolving missing/null values, error rows, and duplicate keys',
        'Applied M-Code steps for unpivoting complex transactional matrix data'
      ]
    },
    {
      title: 'Relational Star Schema & Data Modeling',
      description: 'Engineering optimized database models with normalized dimension tables connected to denormalized fact tables.',
      keyPoints: [
        'Separating transactional events (Sales Fact) from lookup tables (Customer, Product, Geography, Calendar)',
        'Managing 1-to-many (1:*) relationship cardinalities and cross-filter directions',
        'Constructing a dedicated Date Dimension table supporting time-intelligence functions'
      ]
    },
    {
      title: 'DAX (Data Analysis Expressions) Formulations',
      description: 'Authoring high-performance calculated columns and dynamic context-aware scalar measures.',
      keyPoints: [
        'Total Sales, Cumulative YTD, and Month-to-Date (TOTALMTD) calculations',
        'Time-intelligence year-over-year growth benchmarking via SAMEPERIODLASTYEAR',
        'Context transitions using CALCULATE, FILTER, ALL, and safe division (DIVIDE)'
      ]
    },
    {
      title: '29 Interactive Dashboard Visuals & Reporting',
      description: 'Designing intuitive, high-impact executive visual dashboards with deep drill-down interactivity.',
      keyPoints: [
        'KPI summary cards, Gauge indicators, and multi-row executive cards',
        'Decomposition tree root-cause analysis breaking down sales by region and sub-category',
        'Interactive slicers, synchronized cross-filtering, and filled geospatial bubble maps'
      ]
    },
    {
      title: 'Real-World Business Case Studies & Log Sheets',
      description: 'Solving concrete business scenarios and documenting 6 weeks of supervisor-reviewed milestones.',
      keyPoints: [
        'Sub-category margin analysis: Copiers (high profitability) vs Bookcases (Central region loss audit)',
        'European order volume assessment highlighting France and UK delivery concentrations',
        'Customer lifetime value tracking (e.g. Ashton Charles profit contribution)'
      ]
    }
  ],
  daxMeasures: [
    {
      name: 'Total Sales',
      formula: 'Total Sales = SUM(Sales[Sales_Amount])',
      purpose: 'Aggregates gross merchandise value across all transactional orders.'
    },
    {
      name: 'Month-to-Date (MTD) Sales',
      formula: 'MTD Sales = TOTALMTD([Total Sales], \'Calendar\'[Date])',
      purpose: 'Dynamically calculates cumulative monthly revenue up to the selected day.'
    },
    {
      name: 'Year-to-Date (YTD) Sales',
      formula: 'YTD Sales = TOTALYTD([Total Sales], \'Calendar\'[Date])',
      purpose: 'Tracks fiscal year progress and compares running revenue pace.'
    },
    {
      name: 'Prior Year Same Period',
      formula: 'Sales SPLY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(\'Calendar\'[Date]))',
      purpose: 'Benchmarks current performance directly against identical historical windows.'
    },
    {
      name: 'Profit Margin Percentage',
      formula: 'Profit Margin % = DIVIDE([Total Profit], [Total Sales], 0)',
      purpose: 'Computes clean operating margin ratio protecting against divide-by-zero.'
    }
  ],
  caseStudies: [
    {
      title: 'High-Margin Sub-Category Audit (Copiers vs Bookcases)',
      insight: 'Demonstrated through clustered bar charts that Copiers generate the highest net profit margin per unit sold, whereas Bookcases suffered negative margins in Central sub-regions due to elevated freight costs.'
    },
    {
      title: 'European Market Order Velocity (France & UK)',
      insight: 'Filtered multi-country sales data to isolate Western European distribution, discovering that France generated the highest order frequencies in the consumer segment.'
    },
    {
      title: 'Customer Profitability Contribution (Ashton Charles)',
      insight: 'Utilized customer-level matrix visual with conditional gradient formatting to identify top profit drivers versus accounts requiring shipping fee restructuring.'
    },
    {
      title: 'Logistics Shipping Mode Cost Efficiency',
      insight: 'Analyzed delivery lead times and profitability across Same Day, First Class, and Standard delivery modes, proving Standard Class maximizes net margins on bulk orders.'
    }
  ],
  weeklyLogSummary: [
    { week: 'Week 1', topic: 'Orientation, BI Foundations & Power BI Desktop Workspace Setup', verification: 'Signed by Augustine T P & Mrs. Sadiqa Athar' },
    { week: 'Week 2', topic: 'Power Query ETL Transformations, Data Cleaning & Schema Hygiene', verification: 'Signed by Augustine T P & Mrs. Sadiqa Athar' },
    { week: 'Week 3', topic: 'Star Schema Data Modeling, Dimension Tables & Relationship Mapping', verification: 'Signed by Augustine T P & Mrs. Sadiqa Athar' },
    { week: 'Week 4', topic: 'DAX Calculations: Basic Aggregations, Filter Context & Time Intelligence', verification: 'Signed by Augustine T P & Mrs. Sadiqa Athar' },
    { week: 'Week 5', topic: 'Interactive Dashboard Design, 29 Visualizations, Slicers & Geo-Maps', verification: 'Signed by Augustine T P & Mrs. Sadiqa Athar' },
    { week: 'Week 6', topic: 'Comprehensive Report Compilation, University Viva Preparation & Sign-Off', verification: 'Evaluated 100/100 (60/60 Project + 40/40 Viva)' }
  ]
};

export const FEATURED_PROJECTS_DATA: FeaturedProject[] = [
  {
    id: 'hsm-interior-decorator',
    title: 'HSM Interior Decorator',
    client: 'Munawar Hussain',
    liveUrl: 'https://hsm-interior-decorator.ai.studio',
    tagline: 'Luxury Interior Architecture & Turnkey Design Portfolio',
    role: 'Lead Web Creator & Portfolio Architect',
    status: 'Live Production Website',
    description: 'An elegant, responsive official website portfolio designed and launched for client Munawar Hussain to showcase HSM Interior Decorator’s signature residential, commercial, and bespoke interior architecture projects.',
    highlights: [
      'Client: Munawar Hussain · Business: HSM Interior Decorator',
      'Live Production URL: https://hsm-interior-decorator.ai.studio',
      'Engineered interactive showcase galleries for luxury living rooms, modular kitchens, custom cabinetry, and ambient lighting',
      'Integrated turnkey service breakdowns, direct customer consultation inquiries, and WhatsApp connectivity',
      'Optimized responsive design with sleek modern typography, high-definition spatial photography, and lightning-fast load times'
    ],
    technologies: [
      'Modern Web Technologies',
      'Responsive Mobile-First UI',
      'Interactive Design Gallery',
      'Lead Generation Inquiries',
      'WhatsApp Integration'
    ],
    features: [
      'Spatial Room Visualizer & Portfolio Showcase',
      'Turnkey Interior Design Service Catalog',
      'Direct Client Consultation & Booking Flow',
      'High-Resolution Spatial Photography Display',
      'Instant Mobile Contact & Messaging Actions'
    ]
  }
];
