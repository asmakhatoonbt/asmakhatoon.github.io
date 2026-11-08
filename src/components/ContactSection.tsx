import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Shield, Lock, Clock, History, Phone, Award, ExternalLink } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/certificates.ts';

interface InquirySummary {
  id: string;
  name: string;
  emailMasked: string;
  messagePreview: string;
  receivedAt: string;
  status: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);

  // Inquiries Log for verification & reviewers
  const [showLog, setShowLog] = useState(false);
  const [inquiries, setInquiries] = useState<InquirySummary[]>([]);
  const [loadingLog, setLoadingLog] = useState(false);

  const fetchInquiries = async () => {
    try {
      setLoadingLog(true);
      const res = await fetch('/api/contact/messages');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.messages || []);
      }
    } catch {
      // Quiet fallback
    } finally {
      setLoadingLog(false);
    }
  };

  useEffect(() => {
    if (showLog) {
      fetchInquiries();
    }
  }, [showLog]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    // Client-side quick validation before hitting server
    if (formData.name.trim().length < 2) {
      setSubmitError('Name must be at least 2 characters.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setSubmitError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }
    if (formData.message.trim().length < 10) {
      setSubmitError('Message must be at least 10 characters.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit message.');
      }

      setSubmitSuccess(result.message || 'Message securely delivered to Asma Khatoon.');
      setInquiryId(result.inquiryId || null);
      setFormData({ name: '', email: '', message: '' });
      if (showLog) {
        fetchInquiries();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred while transmitting your message.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-teal-400" />
            Protected Direct Channel
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch with Asma Khatoon
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Available for immediate full-time corporate opportunities, Project Coordination roles, and NATS 2026 Apprenticeships in Bangalore.
          </p>
        </div>

        {/* 2-Column Split: Info on Left, Secure Form on Right */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Details & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Contact &amp; Location
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a 
                      href={`mailto:${CANDIDATE_PROFILE.email}`}
                      className="font-medium text-white hover:text-teal-300 transition-colors"
                    >
                      {CANDIDATE_PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Phone</div>
                    <a 
                      href={`tel:${CANDIDATE_PROFILE.phone.replace(/\s+/g, '')}`}
                      className="font-medium text-white hover:text-teal-300 transition-colors font-mono"
                    >
                      {CANDIDATE_PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Base Location</div>
                    <div className="font-medium text-white">
                      Bangalore, Karnataka, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Apprenticeship Status</div>
                    <div className="font-medium text-teal-300">
                      NATS Eligible 2026 (Commerce &amp; Data)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Credly Wallet</div>
                    <a 
                      href={CANDIDATE_PROFILE.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-teal-300 hover:text-teal-200 transition-colors inline-flex items-center gap-1"
                    >
                      <span>credly.com/user/asma-khatoon</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Safety Architecture Badge */}
              <div className="pt-4 border-t border-slate-700/60 space-y-2 text-xs text-slate-400">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-400" />
                  Safety &amp; Compliance Protocols:
                </div>
                <ul className="space-y-1 pl-1 text-[11px] text-slate-400">
                  <li>• Express Rate-Limiter (5 contact submissions/hr cap per IP)</li>
                  <li>• Payload DoS Protection (&lt; 10kb body parser limit)</li>
                  <li>• XSS Sanitization &amp; Email Validation (Validator.js)</li>
                  <li>• Automated Promotional Keyword Filter</li>
                </ul>
              </div>

              {/* Reviewer / Recruiter Submissions Verification Drawer Toggle */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowLog(!showLog)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <History className="w-3.5 h-3.5 text-teal-400" />
                  {showLog ? 'Hide Live Submission Log' : 'Inspect Received Inquiries Log'}
                </button>
              </div>
            </div>

            {/* Inquiries Log Card */}
            {showLog && (
              <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-wider">
                    Recent Backend Inquiries ({inquiries.length})
                  </span>
                  <button 
                    onClick={fetchInquiries}
                    className="text-teal-400 hover:text-teal-300 cursor-pointer text-[11px]"
                  >
                    Refresh
                  </button>
                </div>

                {loadingLog ? (
                  <div className="text-xs text-slate-400 text-center py-4">Checking server log...</div>
                ) : inquiries.length === 0 ? (
                  <div className="text-xs text-slate-400 text-center py-4">No inquiries recorded yet.</div>
                ) : (
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {inquiries.map((inq) => (
                      <div key={inq.id} className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs space-y-1">
                        <div className="flex items-center justify-between font-mono text-[11px]">
                          <span className="font-bold text-teal-300">{inq.id}</span>
                          <span className="text-slate-400">{inq.receivedAt.split('T')[0]}</span>
                        </div>
                        <div className="font-semibold text-slate-200">{inq.name}</div>
                        <div className="text-slate-400 text-[11px] truncate">{inq.messagePreview}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Secure Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="bg-white text-slate-900 rounded-2xl p-7 sm:p-9 space-y-5 shadow-xl"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. Messages are verified by server-side safety checks and delivered immediately.
                </p>
              </div>

              {/* Status alerts */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs space-y-1 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Transmission Successful!</div>
                    <div>{submitSuccess}</div>
                    {inquiryId && (
                      <div className="mt-1 font-mono text-[11px] text-teal-800">
                        Inquiry Reference Code: <strong>{inquiryId}</strong>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {submitError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs space-y-1 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Submission Blocked</div>
                    <div>{submitError}</div>
                  </div>
                </div>
              )}

              {/* Form Inputs */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name / Organization <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / HR Talent Team"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Work or Personal Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Opportunity Scope <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, project coordination scope, or scheduling inquiries..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 resize-none"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>Minimum 10 characters</span>
                    <span>{formData.message.length} / 2000</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Encrypting &amp; Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Secure Message to Asma Khatoon</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <Lock className="w-3 h-3 text-teal-700" />
                <span>Protected by Rate Limit, XSS Sanitation &amp; Spam Filters</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
