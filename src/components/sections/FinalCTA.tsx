"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "src/components/ui/MagneticButton";

export default function FinalCTA() {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !ctaSectionRef.current || !rocketRef.current) return;

    // Rocket / Paper-plane flying across on scroll
    gsap.fromTo(
      rocketRef.current,
      {
        x: "-40vw",
        y: "25vh",
        scale: 0.6,
        rotate: 35,
        opacity: 0,
      },
      {
        x: "55vw",
        y: "-35vh",
        scale: 1.25,
        rotate: 20,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.7,
        },
      }
    );
  }, []);

  return (
    <section
      ref={ctaSectionRef}
      className="bg-[#03142F] py-28 md:py-36 relative overflow-hidden select-none border-t border-[rgba(120,170,255,0.18)]"
    >
      {/* ═══ SCROLL-TRIGGERED FLYING ROCKET / PAPER-PLANE ═══ */}
      <div
        ref={rocketRef}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 pointer-events-none z-20 will-change-transform"
      >
        <div className="relative w-16 h-16 filter drop-shadow-[0_0_20px_#16D8E8] drop-shadow-[0_0_35px_#C400FF]">
          <svg className="w-full h-full text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" fill="url(#planeGrad)" />
            <path d="M22 2 11 13" stroke="#FFFFFF" strokeWidth="2" />
            <defs>
              <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#16D8E8" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#087BFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C400FF" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Atmospheric Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(8,123,255,0.22) 0%, rgba(22,216,232,0.12) 40%, rgba(67,52,242,0.06) 70%, transparent 85%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8] inline-flex items-center space-x-2 bg-white/[0.06] border border-[rgba(120,170,255,0.3)] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(22,216,232,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
            <span>THE INBOUND MARKETPLACE NETWORK</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
          Ready to Turn Intent <br />
          <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
            Into Revenue?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed max-w-xl mx-auto mb-10">
          Whether you&apos;re looking to acquire qualified leads or monetize your traffic, Inbound Marketplace gives you a smarter way to connect.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton href="/contact" variant="primary">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </MagneticButton>

          <MagneticButton href="/contact" variant="secondary">
            <span>Talk to Our Team</span>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
