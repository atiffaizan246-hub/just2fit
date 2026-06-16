import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { BRAND_INFO, MEMBERSHIP_PLANS } from "../data";
import { InquiryFormData } from "../types";

interface ContactProps {
  preselectedPlanId?: string;
  onClearPreselected?: () => void;
}

export default function Contact({ preselectedPlanId = "", onClearPreselected }: ContactProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    plan: preselectedPlanId || "general",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<InquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [localSubmissions, setLocalSubmissions] = useState<any[]>([]);

  // Keep state updated if plan selection changes from elsewhere
  useEffect(() => {
    if (preselectedPlanId) {
      setFormData((prev) => ({ ...prev, plan: preselectedPlanId }));
    }
  }, [preselectedPlanId]);

  // Read local submissions on mount
  useEffect(() => {
    const saved = localStorage.getItem("j2f_gym_submissions");
    if (saved) {
      try {
        setLocalSubmissions(JSON.parse(saved));
      } catch (err) {
        console.error("Local storage decode error", err);
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<InquiryFormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    // Phone - Indian standard formats check or 10 digits
    const cleanedPhone = formData.phone.replace(/[\s-()]/g, "");
    if (!cleanedPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone) && cleanedPhone.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit mobile number (e.g. 9990318990)";
    }

    // Email
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what goals you want to focus on";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const newSubmission = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toLocaleDateString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updatedSubmissions = [newSubmission, ...localSubmissions];
      setLocalSubmissions(updatedSubmissions);
      localStorage.setItem("j2f_gym_submissions", JSON.stringify(updatedSubmissions));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        plan: "general",
        message: "",
      });

      if (onClearPreselected) {
        onClearPreselected();
      }

      // Clear success notification after 5s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    }, 1500);
  };

  // Clear logged inquiries from localStorage
  const handleClearInquiries = () => {
    localStorage.removeItem("j2f_gym_submissions");
    setLocalSubmissions([]);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background flairs */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-red-650/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2">
            Start Your <span className="text-red-655 text-red-600">Transformation</span>
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Drop your details below. Our Paharganj gym representatives will reach back within 2 hours to activate your introductory access pass!
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-split-container">
          
          {/* Left Column: Quick Contacts and Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="contact-details-panel">
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-900 flex flex-col space-y-6">
              <h3 className="text-xl font-bold uppercase text-white tracking-wide border-b border-zinc-800 pb-3 block">
                Official Information
              </h3>

              {/* Address card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-zinc-300 tracking-wider">Our Gym Address</h4>
                  <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                    02, Desh Bandhu Gupta Rd, <br />
                    in front of Paharganj Police Station, <br />
                    Motia Khan, Paharganj, <br />
                    New Delhi, Delhi 115055
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-zinc-300 tracking-wider">Phone Helpline</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-red-500 font-semibold font-mono tracking-wide text-white transition-colors">
                      {BRAND_INFO.phoneFormatted}
                    </a>
                  </p>
                  <p className="text-xs text-zinc-650 text-zinc-500 mt-0.5">Call directly or consult our help desk.</p>
                </div>
              </div>

              {/* Chat action triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-900">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  id="contact-action-call"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call Reception</span>
                </a>

                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/20 border border-emerald-500/20 text-emerald-450 text-emerald-400 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  id="contact-action-whatsapp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Google map loader */}
            <div className="rounded-3xl border border-zinc-900 overflow-hidden bg-zinc-900 relative h-[250px] lg:flex-1" id="google-maps-box">
              <iframe
                title="JUST 2 FIT Gym paharganj map location"
                src={BRAND_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-900 flex flex-col justify-between h-full relative">
              <h3 className="text-xl font-bold uppercase text-white tracking-wide border-b border-zinc-800 pb-3 mb-6 block">
                Send Membership Request
              </h3>

              {/* Validation Success Banner */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/35 text-emerald-400 flex items-start gap-3"
                    id="banner-success-contact"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                    <div>
                      <p className="font-bold text-sm sm:text-base">Your pass request was sent successfully!</p>
                      <p className="text-xs text-zinc-400 mt-1">We logged your submission. We look forward to seeing you at JUST 2 FIT. Take a workout towel and dynamic trainers along on your first day.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate id="gym-contact-form">
                
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase text-zinc-450 text-zinc-400 font-bold tracking-wider mb-2" htmlFor="fullName">
                    Your Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-zinc-950 border text-zinc-100 placeholder-zinc-650 placeholder-zinc-500 focus:outline-none focus:border-red-650 focus:ring-1 focus:ring-red-650 transition-colors ${
                      errors.fullName ? "border-red-500/50" : "border-zinc-850 border-zinc-800"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase text-zinc-450 text-zinc-400 font-bold tracking-wider mb-2" htmlFor="phone">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-mono text-zinc-505 text-zinc-550">+91</span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={10}
                        placeholder="9990318990"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-14 pr-4 py-3.5 rounded-xl bg-zinc-950 border text-zinc-100 placeholder-zinc-650 placeholder-zinc-600 focus:outline-none focus:border-red-650 focus:ring-1 focus:ring-red-650 focus:ring-red-600 transition-colors ${
                          errors.phone ? "border-red-500/50" : "border-zinc-850 border-zinc-800"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase text-zinc-450 text-zinc-400 font-bold tracking-wider mb-2" htmlFor="email">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-zinc-950 border text-zinc-100 placeholder-zinc-650 placeholder-zinc-600 focus:outline-none focus:border-red-650 focus:ring-1 focus:ring-red-650 transition-colors ${
                        errors.email ? "border-red-500/50" : "border-zinc-850 border-zinc-800"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Plan Selection dropdown */}
                <div>
                  <label className="block text-xs uppercase text-zinc-450 text-zinc-400 font-bold tracking-wider mb-2" htmlFor="plan">
                    Desired Membership Plan
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-105 text-zinc-200 focus:outline-none focus:border-red-650 focus:ring-1 focus:ring-red-650 font-medium transition-colors"
                  >
                    <option value="general">General Gym Access (Introductory)</option>
                    <option value="basic">Basic Plan – ₹1,199 / month</option>
                    <option value="premium">Premium Plan – ₹1,999 / month</option>
                    <option value="personal">Personal Training – ₹4,999 / month</option>
                  </select>
                </div>

                {/* Message / Goals notes */}
                <div>
                  <label className="block text-xs uppercase text-zinc-455 text-zinc-400 font-bold tracking-wider mb-2" htmlFor="message">
                    Your Fitness Goals or Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="E.g., I want to lose weight / fix my posture / build muscle / build strength..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-zinc-950 border text-zinc-100 placeholder-zinc-650 placeholder-zinc-500 focus:outline-none focus:border-red-650 focus:ring-1 focus:ring-red-650 transition-colors resize-none ${
                      errors.message ? "border-red-500/50" : "border-zinc-850 border-zinc-800"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest shadow-lg shadow-red-650/20 hover:shadow-red-650/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    id="btn-submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting Pass Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Request</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* Local storage submissions section (A highly polished, interactive touch!) */}
        <AnimatePresence>
          {localSubmissions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-16 p-8 rounded-3xl bg-zinc-900/35 border border-zinc-900/60"
              id="local-submissions-display"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-850 pb-5 mb-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-red-500 animate-pulse" />
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Your Submission History (Saved Locally)
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={handleClearInquiries}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-zinc-500 hover:text-red-400 text-xs font-semibold border border-zinc-850 cursor-pointer"
                  id="btn-clear-inquiries"
                >
                  Clear History
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {localSubmissions.map((sub: any) => {
                  const correspondingPlan = MEMBERSHIP_PLANS.find(p => p.id === sub.plan);
                  const planName = correspondingPlan ? correspondingPlan.name : "General Access";
                  return (
                    <div
                      key={sub.id}
                      className="p-5 rounded-xl bg-zinc-950 border border-zinc-900/80 hover:border-zinc-800 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3 text-xs">
                          <span className="font-semibold text-red-500 uppercase tracking-widest font-mono text-[10px]">
                            {planName}
                          </span>
                          <span className="text-zinc-600 font-medium">{sub.timestamp}</span>
                        </div>
                        <h5 className="text-sm font-bold text-white">{sub.fullName}</h5>
                        <p className="text-xs text-zinc-500 font-mono mt-1">{sub.phone}</p>
                        <p className="text-xs text-zinc-400 mt-2.5 line-clamp-2 italic">
                          "{sub.message}"
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-900/50 flex items-center gap-1.5 text-[11px] text-emerald-500 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Reception notified</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
