/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { InternshipSection } from './components/InternshipSection.tsx';
import { GraduationGallery } from './components/GraduationGallery.tsx';
import { CertificatesGallery } from './components/CertificatesGallery.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CertificateModal } from './components/CertificateModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { Certificate } from './data/certificates.ts';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-700 selection:text-white flex flex-col font-sans">
      {/* Navigation Top Bar Contract */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split Screen Hero with Proof Strip */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Featured Client Project: Munawar Hussain / HSM Interior Decorator */}
        <ProjectsSection />

        {/* Academic & BI Distinction: 100/100 Power BI Internship Report */}
        <InternshipSection />

        {/* Academic Milestone: B.Com Degree Graduation Gallery */}
        <GraduationGallery />

        {/* 23 Verified Certificates Gallery */}
        <CertificatesGallery 
          onSelectCertificate={(cert) => setSelectedCertificate(cert)} 
        />

        {/* Experience & Practical Deployments */}
        <ExperienceSection />

        {/* Core Competencies & Toolchain */}
        <SkillsSection />

        {/* Backend-Powered Secure Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Credential Inspection Modal */}
      <CertificateModal 
        certificate={selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
      />

      {/* Interactive Standardized CV / Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />
    </div>
  );
}
