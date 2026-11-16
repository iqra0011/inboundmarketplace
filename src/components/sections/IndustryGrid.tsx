"use client";

import React from "react";
import HangingCards from "src/components/visuals/HangingCards";

export default function IndustryGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#03142F] select-none relative overflow-hidden border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Background Ambient Glow */}
      <div
        className="absolute bottom-10 left-1/3 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(67,52,242,0.15) 0%, rgba(8,123,255,0.08) 50%, transparent 75%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14 md:mb-18">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#16D8E8]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
              INDUSTRY ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08] mb-3">
            High-Intent Verticals <br />
            <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
              Powered by Live Routing.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            Every vertical operates on custom qualification endpoints, fraud filters, and automated bid matching.
          </p>
        </div>

        {/* ═══ HANGING CARDS SYSTEM ON GLOWING RAIL ═══ */}
        <HangingCards />

      </div>
    </section>
  );
}
