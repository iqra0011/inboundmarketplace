"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Shield, Cpu, Sparkles, TrendingUp } from "lucide-react";

const BELIEVE_ITEMS = [
  {
    title: "What We're Building",
    desc: "An intelligent high-speed infrastructure connecting validated search, social, and media publishers with qualified enterprise demand.",
    icon: Sparkles,
    speed: -45,
  },
  {
    title: "Why It Matters",
    desc: "Consumers receive faster solutions from qualified providers, while businesses acquire customers with zero wasted marketing spend.",
    icon: TrendingUp,
    speed: 35,
  },
  {
    title: "Technology First",
    desc: "Automated routing algorithms, live parameter verification, and direct CRM ingestion replacing manual spreadsheets.",
    icon: Cpu,
    speed: -30,
  },
  {
    title: "The Future of Acquisition",
    desc: "A decentralized, high-velocity exchange where every match is based on verified purchase intent and mutual economic value.",
    icon: Shield,
    speed: 40,
  },
];

export default function BelieveParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const speed = BELIEVE_ITEMS[idx].speed;

      gsap.to(card, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#03142F] relative overflow-hidden select-none border-t border-[rgba(120,170,255,0.18)]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left mb-12">
          
          {/* Left Column: Heading & Core Commitments (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              What We Believe
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mb-8">
              Customer acquisition should not be a black box of opaque broker margins and unverified contact submissions. When intent is genuine and matching is transparent, both sides win.
            </p>

            <div className="rounded-[20px] bg-white/[0.06] backdrop-blur-[20px] border border-[rgba(120,170,255,0.25)] p-5 space-y-3.5 shadow-[inset_0_0_20px_rgba(22,216,232,0.06)]">
              {[
                "Real-time delivery over batch exports",
                "Consent verification at source of inquiry",
                "Transparent marketplace pricing without hidden fees",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-white">
                  <div className="w-4 h-4 rounded-full bg-[#16D8E8]/20 flex items-center justify-center shrink-0 text-[#16D8E8]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Parallax Speed Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {BELIEVE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="rounded-[22px] bg-white/[0.06] backdrop-blur-[20px] border border-[rgba(120,170,255,0.28)] p-7 text-left shadow-[inset_0_0_20px_rgba(22,216,232,0.06),0_15px_40px_rgba(0,0,0,0.45)] hover:border-[#16D8E8] transition-all duration-300 flex flex-col justify-between will-change-transform"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#16D8E8] mb-5 shadow-[0_0_15px_rgba(22,216,232,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono uppercase text-[#16D8E8]">
                    <span>Principle {index + 1}</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
