"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import RoleToggle, { RoleType } from "./RoleToggle";

export default function PlaneSubmit() {
  const [role, setRole] = useState<RoleType>("buyer");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formEl = formRef.current;
    const planeEl = planeRef.current;
    const successEl = successRef.current;

    if (!formEl || !planeEl || !successEl) {
      setIsSubmitted(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsSubmitted(true);
      },
    });

    // 1. Form fades and scales slightly down
    tl.to(formEl, {
      opacity: 0,
      scale: 0.96,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // 2. Paper plane appears and launches diagonally
    tl.set(planeEl, { opacity: 1, scale: 0.8, x: 0, y: 0, rotate: 20 });
    tl.to(planeEl, {
      x: 320,
      y: -280,
      scale: 1.4,
      opacity: 0,
      duration: 0.75,
      ease: "power3.in",
    });

    // 3. Confirmation card fades & scales in
    tl.fromTo(
      successEl,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" }
    );
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", company: "", message: "" });
    if (formRef.current) {
      gsap.set(formRef.current, { opacity: 1, scale: 1 });
    }
  };

  return (
    <div className="relative w-full rounded-[26px] bg-white/[0.06] backdrop-blur-[24px] border border-[rgba(120,170,255,0.28)] p-7 sm:p-10 shadow-[inset_0_0_24px_rgba(22,216,232,0.08),0_15px_45px_rgba(0,0,0,0.5)] overflow-hidden">
      
      {/* ═══ DIAGONALLY FLYING PAPER PLANE ═══ */}
      <div
        ref={planeRef}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 z-30"
      >
        <div className="relative w-20 h-20 filter drop-shadow-[0_0_25px_#16D8E8] drop-shadow-[0_0_35px_#C400FF]">
          <svg
            className="w-full h-full text-[#16D8E8]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 2-7 20-4-9-9-4Z" fill="url(#planeSubmitGrad)" />
            <path d="M22 2 11 13" stroke="#FFFFFF" strokeWidth="2" />
            <defs>
              <linearGradient id="planeSubmitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#16D8E8" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#087BFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C400FF" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ═══ SUCCESS CONFIRMATION STATE ═══ */}
      <div
        ref={successRef}
        className={`py-12 flex flex-col items-center justify-center text-center space-y-4 ${
          isSubmitted ? "block" : "hidden opacity-0"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-[#16D8E8]/10 border border-[#16D8E8]/30 flex items-center justify-center text-[#16D8E8] shadow-[0_0_20px_rgba(22,216,232,0.3)]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Message Sent!
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-md leading-relaxed">
          Thank you for reaching out. A marketplace representative will review your inquiry parameters and connect shortly.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-[#16D8E8] bg-white/[0.08] hover:bg-white/[0.12] border border-[rgba(120,170,255,0.3)] transition-colors cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>

      {/* ═══ INTERACTIVE CONTACT FORM ═══ */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`space-y-6 ${isSubmitted ? "hidden" : "block"}`}
      >
        {/* Role Toggle with Sliding Gradient Pill */}
        <RoleToggle selectedRole={role} onChange={setRole} />

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Floating Label: Full Name */}
          <div className="relative group">
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.04] border border-[rgba(120,170,255,0.25)] text-sm text-white placeholder-transparent focus:outline-none focus:border-[#16D8E8] focus:shadow-[0_0_15px_rgba(22,216,232,0.25)] transition-all font-light"
            />
            <label
              htmlFor="contact-name"
              className="absolute left-4 top-2 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10.5px] peer-focus:text-[#16D8E8] transition-all pointer-events-none"
            >
              Full Name
            </label>
          </div>

          {/* Floating Label: Work Email */}
          <div className="relative group">
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.04] border border-[rgba(120,170,255,0.25)] text-sm text-white placeholder-transparent focus:outline-none focus:border-[#16D8E8] focus:shadow-[0_0_15px_rgba(22,216,232,0.25)] transition-all font-light"
            />
            <label
              htmlFor="contact-email"
              className="absolute left-4 top-2 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10.5px] peer-focus:text-[#16D8E8] transition-all pointer-events-none"
            >
              Work Email
            </label>
          </div>
        </div>

        {/* Floating Label: Company Name */}
        <div className="relative group">
          <input
            id="contact-company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.04] border border-[rgba(120,170,255,0.25)] text-sm text-white placeholder-transparent focus:outline-none focus:border-[#16D8E8] focus:shadow-[0_0_15px_rgba(22,216,232,0.25)] transition-all font-light"
          />
          <label
            htmlFor="contact-company"
            className="absolute left-4 top-2 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10.5px] peer-focus:text-[#16D8E8] transition-all pointer-events-none"
          >
            Company Name
          </label>
        </div>

        {/* Floating Label: Message */}
        <div className="relative group">
          <textarea
            id="contact-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.04] border border-[rgba(120,170,255,0.25)] text-sm text-white placeholder-transparent focus:outline-none focus:border-[#16D8E8] focus:shadow-[0_0_15px_rgba(22,216,232,0.25)] transition-all font-light resize-none"
          />
          <label
            htmlFor="contact-message"
            className="absolute left-4 top-2 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10.5px] peer-focus:text-[#16D8E8] transition-all pointer-events-none"
          >
            How Can We Help? (Target verticals, pacing, integration)
          </label>
        </div>

        {/* Submit Pill Button */}
        <button
          type="submit"
          className="w-full h-13 rounded-full bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#4334F2] text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(22,216,232,0.35)] hover:shadow-[0_0_30px_rgba(22,216,232,0.5)] active:scale-[0.985] transition-all duration-300 cursor-pointer group"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}
