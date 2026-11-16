"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Zap, Target, BarChart3, Compass, Database } from "lucide-react";

const CAPABILITIES = [
  {
    num: "01",
    title: "Verified Lead Quality",
    desc: "Receive validated opportunities from trusted sources, filtered for fraudulent submissions in real time.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Real-Time Delivery",
    desc: "Connect with prospects while intent is highest, within milliseconds of inquiry completion.",
    icon: Zap,
  },
  {
    num: "03",
    title: "Smart Matching",
    desc: "Match every opportunity with the right buyer based on custom geographic, credit, and vertical filters.",
    icon: Target,
  },
  {
    num: "04",
    title: "Transparent Performance",
    desc: "Track delivery, conversion and ROI without hidden broker markups or opaque routing fees.",
    icon: BarChart3,
  },
  {
    num: "05",
    title: "Campaign Control",
    desc: "Manage your acquisition strategy, bids, caps, and schedules from a single unified cockpit.",
    icon: Compass,
  },
  {
    num: "06",
    title: "Performance Analytics",
    desc: "Understand which campaigns drive closed deals and optimize acquisition velocities faster.",
    icon: Database,
  },
];

export default function Cylinder3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only apply 3D pinned rotation on desktop >= 768px and non-reduced-motion
    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || reducedMotion || !sectionRef.current || !rigRef.current) return;

    const cards = rigRef.current.querySelectorAll(".cylinder-card-item");
    const count = cards.length;
    const radius = 380; // Distance from center pole

    // Arrange cards on cylinder
    cards.forEach((card, i) => {
      const angle = (i * 360) / count;
      const climb = (i - count / 2) * 36;
      (card as HTMLElement).style.transform = `rotateY(${angle}deg) translateZ(${radius}px) translateY(${climb}px)`;
    });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=160%",
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        if (rigRef.current) {
          const rotY = self.progress * -360;
          const yOffset = self.progress * -90;
          rigRef.current.style.transform = `rotateX(-6deg) rotateY(${rotY}deg) translateY(${yOffset}px)`;
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 w-full overflow-hidden select-none bg-[#03142F] border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Background ambient radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(8,123,255,0.18) 0%, rgba(22,216,232,0.08) 45%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
            CORE CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Six capabilities, <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">one platform</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto font-light">
          Six foundational architectural layers powering verified lead acquisition in real time.
        </p>
        <div className="hidden md:flex items-center justify-center space-x-2 mt-4 text-xs tracking-widest uppercase text-[#16D8E8]/70">
          <span className="inline-block animate-bounce">↓</span>
          <span>Scroll to turn the deck</span>
          <span className="inline-block animate-bounce">↓</span>
        </div>
      </div>

      {/* ═══ DESKTOP 3D ROTATING CYLINDER (>= 768px) ═══ */}
      <div className="hidden md:flex relative w-full h-[580px] items-center justify-center [perspective:1400px] [perspective-origin:50%_45%] overflow-visible">
        
        {/* Glowing Center Pole */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[520px] rounded-full bg-gradient-to-b from-transparent via-[#16D8E8] to-transparent shadow-[0_0_24px_#16D8E8] z-0 opacity-75" />

        {/* 3D Rotating Rig */}
        <div
          ref={rigRef}
          className="relative w-[320px] h-[400px] [transform-style:preserve-3d] will-change-transform"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className="cylinder-card-item absolute inset-0 w-[310px] h-[390px] rounded-[36px_36px_22px_22px] bg-[#061d45]/85 backdrop-blur-[24px] border border-[rgba(120,170,255,0.32)] shadow-[inset_0_0_24px_rgba(22,216,232,0.12),0_20px_50px_rgba(0,0,0,0.6)] p-7 flex flex-col justify-between [transform-style:preserve-3d] [backface-visibility:hidden] hover:border-[#16D8E8] transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black bg-gradient-to-r from-[#087BFF] to-[#16D8E8] bg-clip-text text-transparent">
                      {cap.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#16D8E8] shadow-[0_0_15px_rgba(22,216,232,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#16D8E8] uppercase tracking-wider">
                  <span>Architecture Active</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16D8E8] shadow-[0_0_8px_#16D8E8]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ MOBILE FALLBACK: STACKED RESPONSIVE GRID (< 768px) ═══ */}
      <div className="md:hidden grid grid-cols-1 gap-5 px-4 max-w-md mx-auto">
        {CAPABILITIES.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.num}
              className="rounded-[22px] bg-[#061d45]/80 backdrop-blur-xl border border-[rgba(120,170,255,0.25)] p-6 shadow-[inset_0_0_18px_rgba(22,216,232,0.08)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-lg font-bold text-[#16D8E8]">
                  {cap.num}
                </span>
                <Icon className="w-5 h-5 text-[#087BFF]" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{cap.title}</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{cap.desc}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
