"use client";

import React from "react";
import { 
  ShieldCheck, 
  Wrench, 
  Heart, 
  BarChart3, 
  Scale, 
  GraduationCap, 
  Building2, 
  Compass 
} from "lucide-react";

const INDUSTRIES_DATA = [
  {
    name: "Insurance",
    desc: "Auto, Home, Life, and Health high-intent consumer matches.",
    icon: ShieldCheck,
  },
  {
    name: "Home Services",
    desc: "HVAC, Solar, Roofing, and remodeling local project requests.",
    icon: Wrench,
  },
  {
    name: "Healthcare",
    desc: "Medicare, private insurance, and specialized medical matches.",
    icon: Heart,
  },
  {
    name: "Financial Services",
    desc: "Personal loans, debt relief, mortgage, and wealth guidance.",
    icon: BarChart3,
  },
  {
    name: "Legal",
    desc: "Personal injury, mass torts, family law, and contract intakes.",
    icon: Scale,
  },
  {
    name: "Education",
    desc: "Career training, online degrees, and adult education matches.",
    icon: GraduationCap,
  },
  {
    name: "Real Estate",
    desc: "Active buyers, motivated sellers, and mortgage pre-approvals.",
    icon: Building2,
  },
  {
    name: "Travel",
    desc: "Custom holiday packages, premium cruises, and corporate accounts.",
    icon: Compass,
  },
];

export default function HangingCards() {
  return (
    <div className="relative w-full">
      {/* ═══ GLOWING ANIMATED RAIL ═══ */}
      <div className="relative w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#16D8E8] to-transparent shadow-[0_0_18px_#16D8E8] animate-rail-glow mb-2" />

      {/* Hanging Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {INDUSTRIES_DATA.map((ind, index) => {
          const Icon = ind.icon;
          // Stagger sway animation delays
          const delay = (index * -0.85) % 4;

          return (
            <div key={ind.name} className="flex flex-col items-center group">
              {/* Dashed Suspension String with Pin Dot */}
              <div className="relative flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16D8E8] shadow-[0_0_8px_#16D8E8] block z-10" />
                <div className="w-[1.5px] h-6 border-l border-dashed border-[#16D8E8]/50" />
              </div>

              {/* Swaying Glass Card with Hover Fill */}
              <div
                style={{ animationDelay: `${delay}s` }}
                className="swaying-card w-full rounded-[22px] bg-white/[0.06] backdrop-blur-[20px] border border-[rgba(120,170,255,0.28)] p-6 shadow-[inset_0_0_20px_rgba(22,216,232,0.08),0_12px_36px_rgba(0,0,0,0.4)] group-hover:bg-[#061d45]/90 group-hover:border-[#16D8E8] group-hover:shadow-[inset_0_0_30px_rgba(22,216,232,0.2),0_18px_45px_rgba(8,123,255,0.3)] transition-all duration-300 text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-[rgba(120,170,255,0.3)] flex items-center justify-center text-[#16D8E8] mb-4 group-hover:scale-105 group-hover:bg-[#087BFF]/20 group-hover:text-white transition-all shadow-[0_0_12px_rgba(22,216,232,0.15)]">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#16D8E8] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed font-light">
                  {ind.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10.5px] font-bold text-[#16D8E8] uppercase tracking-wider opacity-80 group-hover:opacity-100">
                  <span>Demand Feed Live</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16D8E8]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
