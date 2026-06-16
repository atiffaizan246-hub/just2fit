import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, AlertCircle, Dumbbell } from "lucide-react";
import { MEMBERSHIP_PLANS } from "../data";
import { InquiryFormData } from "../types";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlanId?: string;
  onSuccess: () => void;
}

export default function JoinModal({ isOpen, onClose, preselectedPlanId = "general", onSuccess }: JoinModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    plan: preselectedPlanId || "general",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<InquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sync state if selected plan updates
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        plan: preselectedPlanId || "general",
        message: "",
      });
      setErrors({});
      setSuccess(false);
    }
  }, [isOpen, preselectedPlanId]);

  const validate = (): boolean => {
    const newErrors: Partial<InquiryFormData> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name";
    }
    const cleanPhone = formData.phone.replace(/[\s-()]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      // Log submission to localStorage
      const savedInquiries = localStorage.getItem("j2f_gym_submissions") || "[]";
      let parsed = [];
      try {
        parsed = JSON.parse(savedInquiries);
      } catch (err) {
        parsed = [];
      }

      const submission = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toLocaleDateString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      localStorage.setItem("j2f_gym_submissions", JSON.stringify([submission, ...parsed]));

      setIsSubmitting(false);
      setSuccess(true);
      onSuccess();

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" id="join-modal-portal">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>

          {/* Modal Container Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
            id="join-modal-body"
          >
            {/* Top red header splash gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-650 via-red-500 to-rose-650"></div>

            {/* Cancel Action */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1.5 rounded-lg bg-zinc-950 border border-zinc-850 hover:scale-105 transition-transform"
              id="btn-close-join-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success screen */}
            {success ? (
              <div className="text-center py-8" id="modal-success-screen">
                <div className="w-16 h-16 rounded-full bg-emerald-600/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-wide">
                  Entry Pass Activated!
                </h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-sm mx-auto">
                  Excellent work! We recorded your pass request. Present your submission history or mobile number at the gym reception Desk to claim your <strong>Complimentary Session</strong>.
                </p>
                <p className="text-zinc-650 text-zinc-500 text-xs mt-6 font-mono animate-pulse">Closing box shortly...</p>
              </div>
            ) : (
              <div>
                {/* Brand / Title Header info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-red-600/20 font-black italic text-lg leading-none shrink-0">
                    <Dumbbell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-black uppercase tracking-wider text-white">
                      JUST <span className="text-red-500">2</span> FIT GYM
                    </h3>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">Claim Introductory Pass</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-[11px] uppercase text-zinc-400 font-bold tracking-wider mb-2" htmlFor="mod-fullName">
                      Your First & Last Name *
                    </label>
                    <input
                      id="mod-fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors ${
                        errors.fullName ? "border-red-500/50" : "border-zinc-800"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-[11px] uppercase text-zinc-400 font-bold tracking-wider mb-2" htmlFor="mod-phone">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-550">+91</span>
                      <input
                        id="mod-phone"
                        name="phone"
                        type="tel"
                        maxLength={10}
                        required
                        placeholder="9990318990"
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className={`w-full pl-14 pr-4 py-3 rounded-xl bg-zinc-950 border text-zinc-100 placeholder-zinc-650 focus:outline-none focus:border-red-600 transition-colors ${
                          errors.phone ? "border-red-500/50" : "border-zinc-850 border-zinc-805 border-zinc-800"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Select Plan dropdown */}
                  <div>
                    <label className="block text-[11px] uppercase text-zinc-400 font-bold tracking-wider mb-2" htmlFor="mod-plan">
                      Selected Membership Package
                    </label>
                    <select
                      id="mod-plan"
                      name="plan"
                      value={formData.plan}
                      onChange={(e) => setFormData(p => ({ ...p, plan: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:outline-none focus:border-red-600 font-medium transition-colors"
                    >
                      <option value="general">Free Session (Introductory)</option>
                      <option value="basic">Basic Plan – ₹1,199 / month</option>
                      <option value="premium">Premium Plan – ₹1,999 / month</option>
                      <option value="personal">Personal Training – ₹4,999 / month</option>
                    </select>
                  </div>

                  {/* Message/Experience info */}
                  <div>
                    <label className="block text-[11px] uppercase text-zinc-400 font-bold tracking-wider mb-2" htmlFor="mod-message">
                      Any prior workout background / health injuries?
                    </label>
                    <textarea
                      id="mod-message"
                      name="message"
                      rows={3}
                      placeholder="E.g., Complete beginner, recovering from shoulder surgery, trying to tone up body..."
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none text-sm"
                    ></textarea>
                  </div>

                  {/* Pricing brief note check */}
                  <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-850/50 text-[11px] text-zinc-500 leading-normal">
                    * By clicking submit, we generate and validate a free session code code. Cash or online UPI payment setup completed in person at JUST 2 FIT Desk.
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-400 font-semibold text-xs uppercase tracking-wider border border-zinc-850"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] py-3.5 rounded-xl bg-red-650 hover:bg-red-700 bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transform active:scale-98 transition-all flex items-center justify-center gap-2"
                      id="btn-sub-modal"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Activating...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Generate Free Pass</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
