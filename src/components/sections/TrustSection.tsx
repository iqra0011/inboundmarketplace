"use client";

import React from "react";
import PipelineLine from "src/components/visuals/PipelineLine";

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 md:py-32 bg-[#03142F] text-white relative overflow-hidden select-none border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] blur-[150px] pointer-events-none rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(8,123,255,0.12) 0%, rgba(22,216,232,0.06) 40%, rgba(16,185,129,0.05) 70%, transparent 85%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 md:mb-18 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                VERIFICATION PIPELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08]">
              Quality Isn&apos;t a Promise.{" "}
              <span className="bg-gradient-to-r from-[#16D8E8] via-[#087BFF] to-emerald-400 bg-clip-text text-transparent">
                It&apos;s Built Into the Network.
              </span>
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#94A3B8] bg-white/[0.06] border border-white/10 px-3.5 py-2 rounded-xl shrink-0">
            Automated Product Verification Flow
          </span>
        </div>

        {/* ═══ 5 NODES VERIFICATION PIPELINE WITH TRAVELING LIGHT PULSE ═══ */}
        <PipelineLine />

      </div>
    </section>
  );
}
