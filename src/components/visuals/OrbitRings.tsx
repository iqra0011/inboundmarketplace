"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function OrbitRings() {
  const coreRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full rounded-[24px] bg-white/[0.06] backdrop-blur-[24px] border border-[rgba(120,170,255,0.28)] p-8 sm:p-10 shadow-[inset_0_0_24px_rgba(22,216,232,0.08),0_15px_45px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* ═══ 1. SVG ORBIT RINGS GRAPHIC ═══ */}
      <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center shrink-0">
        
        {/* Ambient Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#087BFF]/30 via-[#16D8E8]/20 to-[#C400FF]/15 blur-[45px]" />
        </div>

        {/* Orbit Ring 1 (Outer - Cyan Planet) */}
        <div
          className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-[#16D8E8]/35 animate-[spin_24s_linear_infinite]"
          style={{ willChange: "transform" }}
        >
          {/* Planet 1 (Cyan) */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#16D8E8] shadow-[0_0_15px_#16D8E8]" />
        </div>

        {/* Orbit Ring 2 (Middle - Reverse Spin - Blue Planet) */}
        <div
          className="absolute w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] rounded-full border border-dashed border-[#087BFF]/45 animate-[spin_16s_linear_infinite_reverse]"
          style={{ willChange: "transform" }}
        >
          {/* Planet 2 (Blue) */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#087BFF] shadow-[0_0_18px_#087BFF]" />
        </div>

        {/* Orbit Ring 3 (Inner - Fast Spin - Magenta Planet) */}
        <div
          className="absolute w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full border border-dashed border-[#C400FF]/40 animate-[spin_10s_linear_infinite]"
          style={{ willChange: "transform" }}
        >
          {/* Planet 3 (Magenta) */}
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#C400FF] shadow-[0_0_12px_#C400FF]" />
        </div>

        {/* Glowing Center Core */}
        <div
          ref={coreRef}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#087BFF] via-[#16D8E8] to-[#FFFFFF] p-0.5 shadow-[0_0_30px_#16D8E8,0_0_60px_#087BFF] flex items-center justify-center animate-pulse z-10"
        >
          <div className="w-full h-full rounded-full bg-[#03142F] flex items-center justify-center text-white font-mono font-black text-xs">
            IM
          </div>
        </div>

      </div>

      {/* ═══ 2. THREE-STAGE FLOW LIST ═══ */}
      <div className="flex-1 text-left w-full">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#16D8E8] mb-6">
          <span>THE NETWORK FORMULA</span>
        </div>

        <div className="space-y-4">
          {/* Stage 1 */}
          <div className="p-4 rounded-[16px] bg-white/[0.04] border border-[rgba(120,170,255,0.2)] flex items-center justify-between group hover:border-[#087BFF] transition-all">
            <div className="flex items-center space-x-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#087BFF] shadow-[0_0_10px_#087BFF] shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Consumer Intent</h4>
                <p className="text-xs text-[#94A3B8] font-light">Point-of-need inquiries with high verified purchase committed intent.</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#087BFF] shrink-0 ml-2" />
          </div>

          {/* Stage 2 */}
          <div className="p-4 rounded-[16px] bg-white/[0.04] border border-[rgba(120,170,255,0.2)] flex items-center justify-between group hover:border-[#16D8E8] transition-all">
            <div className="flex items-center space-x-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16D8E8] shadow-[0_0_10px_#16D8E8] shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Intelligent Marketplace</h4>
                <p className="text-xs text-[#94A3B8] font-light">Autonomous routing, fraud screening, and sub-second buyer matching.</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#16D8E8] shrink-0 ml-2" />
          </div>

          {/* Stage 3 */}
          <div className="p-4 rounded-[16px] bg-white/[0.04] border border-[rgba(120,170,255,0.2)] flex items-center justify-between group hover:border-[#C400FF] transition-all">
            <div className="flex items-center space-x-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#C400FF] shadow-[0_0_10px_#C400FF] shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">Connected Revenue</h4>
                <p className="text-xs text-[#94A3B8] font-light">Direct CRM synchronization and predictable, closed-deal unit economics.</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#C400FF] shrink-0 ml-2" />
          </div>
        </div>

      </div>

    </div>
  );
}
