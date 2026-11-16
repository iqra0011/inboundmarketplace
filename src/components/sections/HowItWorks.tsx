"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Target, Zap, Users } from "lucide-react";
import GlassCard from "src/components/ui/GlassCard";

const PIPELINE_STAGES = [
  { id: "01", stage: "INTENT SIGNAL", title: "Consumer Ingestion", desc: "Search, social, and contextual media traffic captures consumer inquiry at peak intent.", role: "Traffic Origin", icon: Sparkles, accent: "#087BFF" },
  { id: "02", stage: "VERIFICATION", title: "Quality & Compliance", desc: "Every record is screened for contact integrity, duplicate prevention, and explicit consent.", role: "Validation Layer", icon: ShieldCheck, accent: "#16D8E8" },
  { id: "03", stage: "MARKETPLACE", title: "Central Matching Hub", desc: "Automated routing rules match validated prospects to eligible buyer criteria in real time.", role: "Demand Engine", icon: Target, accent: "#4334F2" },
  { id: "04", stage: "MATCHING & DELIVERY", title: "Direct Buyer Ingestion", desc: "Matched opportunities flow directly into target buyer CRMs, dialers, and webhook endpoints.", role: "Destination Ingestion", icon: Zap, accent: "#C400FF" },
];

export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState(2);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#03142F] relative overflow-hidden select-none border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[150px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(8,123,255,0.14) 0%, rgba(22,216,232,0.08) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 md:mb-18 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#16D8E8]" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                INFRASTRUCTURE TOPOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08]">
              The Infrastructure Connecting{" "}
              <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                Supply &amp; Demand
              </span>
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Pipeline Architecture Active</span>
          </div>
        </div>

        {/* ═══ FLOWING INFRASTRUCTURE TOPOLOGY ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch relative z-10">
          
          {/* Origin: Publishers (3 cols) */}
          <div className="lg:col-span-3 p-6 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-[rgba(120,170,255,0.28)] text-left shadow-[inset_0_0_20px_rgba(22,216,232,0.06),0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center mb-4 text-[#16D8E8]">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#16D8E8] block mb-1">
                SUPPLY ORIGIN
              </span>
              <h4 className="text-lg font-bold text-white mb-2">Publishers</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                Search, Social, Display &amp; Contextual Media traffic feeds entering endpoints.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 text-xs font-bold text-[#16D8E8]">
              Input Signal Feeds →
            </div>
          </div>

          {/* Pipeline: 4 Stages (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PIPELINE_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`rounded-2xl p-5 text-left cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? "bg-[#061d45]/90 border border-[#16D8E8] shadow-[inset_0_0_24px_rgba(22,216,232,0.2),0_12px_40px_rgba(8,123,255,0.3)]"
                      : "bg-white/[0.05] backdrop-blur-xl border border-[rgba(120,170,255,0.2)] hover:border-[rgba(22,216,232,0.4)] hover:bg-white/[0.08]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white/50 bg-white/[0.08] px-2 py-0.5 rounded">
                        {stage.id}
                      </span>
                      <Icon className="w-4 h-4" style={{ color: stage.accent }} />
                    </div>
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#94A3B8] block mb-1">
                      {stage.stage}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2">{stage.title}</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed font-light">{stage.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider" style={{ color: stage.accent }}>
                    {stage.role}
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
