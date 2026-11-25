"use client";

import React from "react";
import { Zap, UserCheck, FileCheck2, Search, ShieldCheck } from "lucide-react";

const PIPELINE_NODES = [
  {
    step: "01",
    tag: "INTENT",
    title: "Consumer Intent",
    desc: "Active consumer interest captured across qualified traffic channels.",
    icon: Zap,
    status: "Captured",
    color: "#087BFF",
  },
  {
    step: "02",
    tag: "CAPTURE",
    title: "Lead Capture",
    desc: "Inquiries submitted with structured qualification and campaign metadata.",
    icon: UserCheck,
    status: "Ingested",
    color: "#16D8E8",
  },
  {
    step: "03",
    tag: "VALIDATION",
    title: "Lead Validation",
    desc: "Validation checks reduce invalid submissions and filter duplicate inquiries.",
    icon: FileCheck2,
    status: "Validated",
    color: "#10B981",
  },
  {
    step: "04",
    tag: "MATCHING",
    title: "Intelligent Matching",
    desc: "Matching algorithm pairs validated inquiries with buyer specifications.",
    icon: Search,
    status: "Matched",
    color: "#4334F2",
  },
  {
    step: "05",
    tag: "DELIVERY",
    title: "Automated Delivery",
    desc: "Direct delivery through integrated webhooks, REST APIs, or CRM feeds.",
    icon: ShieldCheck,
    status: "Delivered",
    color: "#C400FF",
  },
];

export default function PipelineLine() {
  return (
    <div className="relative w-full">
      {/* ═══ DESKTOP SVG CONNECTION PATH & TRAVELING LIGHT PULSE ═══ */}
      <div className="hidden lg:block relative w-full h-[6px] mb-8">
        {/* Base Glow Line */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] opacity-35 shadow-[0_0_12px_rgba(22,216,232,0.4)]" />

        {/* Traveling Light Pulse */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-3 rounded-full bg-white shadow-[0_0_18px_#16D8E8,0_0_30px_#087BFF] animate-[pulseMove_6s_linear_infinite]"
          style={{ willChange: "left" }}
        />
      </div>

      <style jsx>{`
        @keyframes pulseMove {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 98%;
            opacity: 0;
          }
        }
      `}</style>

      {/* 5 Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
        {PIPELINE_NODES.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.step}
              className="rounded-[22px] bg-white/[0.06] backdrop-blur-[20px] border border-[rgba(120,170,255,0.28)] p-5 text-left shadow-[inset_0_0_20px_rgba(22,216,232,0.06),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#16D8E8] hover:shadow-[inset_0_0_24px_rgba(22,216,232,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-white/50 bg-white/[0.08] px-2.5 py-1 rounded-md">
                    {node.step}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10"
                    style={{ backgroundColor: `${node.color}20`, color: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-[10px] font-bold tracking-wider uppercase text-[#16D8E8] mb-1">
                  {node.tag}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{node.title}</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed font-light">{node.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold">
                <span className="text-[#94A3B8]">Status</span>
                <span style={{ color: node.color }} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                  {node.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
