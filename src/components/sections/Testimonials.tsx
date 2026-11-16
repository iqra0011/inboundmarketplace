"use client";

import React from "react";
import { TESTIMONIALS } from "src/constants";
import GlassCard from "src/components/ui/GlassCard";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#020C1D] text-white relative overflow-hidden select-none border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] blur-[150px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(8,123,255,0.14) 0%, rgba(196,0,255,0.06) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C400FF]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
              PARTNER VALIDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08] mb-3">
            Trusted by Leaders <br />
            <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
              Across Industries.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            Real feedback from acquisition teams and publisher networks operating on our live exchange.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <GlassCard key={idx} className="p-8 flex flex-col justify-between text-left h-full">
                <p className="text-sm text-slate-300 font-light leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087BFF] to-[#16D8E8] p-[1px] flex items-center justify-center font-bold text-xs text-white shrink-0 shadow-[0_0_12px_rgba(22,216,232,0.3)]">
                    <div className="w-full h-full bg-[#03142F] rounded-[11px] flex items-center justify-center">
                      {initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{t.name}</h4>
                    <span className="text-xs text-[#94A3B8] block">{t.role}, {t.company}</span>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
