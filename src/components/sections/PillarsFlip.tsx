"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Zap, ShieldCheck, Users, ArrowUpRight } from "lucide-react";

const PILLARS_DATA = [
  {
    num: "01",
    title: "One Unified Marketplace",
    desc: "Replace fragmented broker relationships with a single API endpoint and console connecting buyers directly to multi-channel verified demand.",
    icon: Layers,
    accent: "#087BFF",
  },
  {
    num: "02",
    title: "Real-Time Matching Engine",
    desc: "Intelligent routing algorithms match consumer inquiry parameters to winning buyer criteria instantaneously at peak purchase intent.",
    icon: Zap,
    accent: "#16D8E8",
  },
  {
    num: "03",
    title: "Quality-First Verification Flow",
    desc: "Every record is screened for contact integrity, duplicate prevention, and explicit consumer consent before delivery to your CRM.",
    icon: ShieldCheck,
    accent: "#4334F2",
  },
  {
    num: "04",
    title: "Engineered for Both Sides",
    desc: "Built to align incentives between publishers seeking predictable monetization and enterprise buyers scaling customer acquisition ROI.",
    icon: Users,
    accent: "#C400FF",
  },
];

export default function PillarsFlip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current.filter(Boolean);
    if (!sectionRef.current || cards.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        rotateX: 70,
        y: 60,
        transformOrigin: "50% 0%",
      },
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-[#03142F] relative overflow-hidden select-none border-t border-[rgba(120,170,255,0.18)]">
      
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-0 opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(8, 123, 255, 0.3) 0%, rgba(22, 216, 232, 0.12) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
              PLATFORM PILLARS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Built Around <br />
            <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
              Four Core Principles
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            The architectural guarantees driving transparency, speed, and conversion across every transaction.
          </p>
        </div>

        {/* ═══ 3D FLIP-IN GLASS CARDS (rotateX staggered) ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 [perspective:1200px]">
          {PILLARS_DATA.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group rounded-[24px] bg-white/[0.06] backdrop-blur-[24px] border border-[rgba(120,170,255,0.28)] p-8 sm:p-9 text-left flex flex-col justify-between shadow-[inset_0_0_24px_rgba(22,216,232,0.08),0_15px_40px_rgba(0,0,0,0.45)] hover:border-[#16D8E8] hover:shadow-[inset_0_0_30px_rgba(22,216,232,0.18),0_20px_50px_rgba(8,123,255,0.25)] transition-all duration-300 [transform-style:preserve-3d]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-base font-bold text-[#16D8E8] bg-white/[0.08] px-3 py-1 rounded-lg border border-white/10">
                      {p.num}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(22,216,232,0.15)] group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        color: p.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#16D8E8] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#16D8E8] group-hover:text-white transition-colors">
                  <span>Architecture Verified</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
