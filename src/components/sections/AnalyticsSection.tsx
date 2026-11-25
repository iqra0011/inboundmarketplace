"use client";

import React from "react";
import LineGraph from "src/components/visuals/LineGraph";
import { Server, Zap, ShieldCheck, Activity } from "lucide-react";

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 md:py-32 bg-[#020C1D] text-white relative overflow-hidden select-none border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Radial glows */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[160px] pointer-events-none rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(8,123,255,0.16) 0%, rgba(22,216,232,0.08) 45%, rgba(67,52,242,0.04) 70%, transparent 85%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-3.5">
              <Server className="w-3.5 h-3.5 text-[#16D8E8] animate-pulse" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                INBOUND ENGINE TELEMETRY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08]">
              Structured{" "}
              <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                Performance Visibility
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-[#94A3B8] max-w-sm text-left lg:text-right">
            Monitor lead delivery, campaign activity, and marketplace performance through structured reporting.
          </p>
        </div>

        {/* ═══ INTERACTIVE SVG TELEMETRY LINE GRAPH ═══ */}
        <LineGraph />

        {/* 4 Telemetry Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-5 rounded-2xl bg-white/[0.05] border border-[rgba(120,170,255,0.2)] text-left backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block mb-1">
              Marketplace Match Activity
            </span>
            <div className="text-xl font-extrabold text-white">High Ingestion</div>
            <span className="text-[11px] font-semibold text-emerald-400 mt-1 block">Active Routing Stream</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.05] border border-[rgba(120,170,255,0.2)] text-left backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block mb-1">
              Active Vertical Feeds
            </span>
            <div className="text-xl font-extrabold text-white">8 Verticals</div>
            <span className="text-[11px] font-semibold text-[#16D8E8] mt-1 block">Multi-Tier Delivery</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.05] border border-[rgba(120,170,255,0.2)] text-left backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block mb-1">
              Routing Latency
            </span>
            <div className="text-xl font-extrabold text-[#16D8E8]">&lt; 42ms</div>
            <span className="text-[11px] font-semibold text-emerald-400 mt-1 block">Instant Ingestion</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.05] border border-[rgba(120,170,255,0.2)] text-left backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block mb-1">
              Quality Audit Status
            </span>
            <div className="text-xl font-extrabold text-white">100% Screened</div>
            <span className="text-[11px] font-semibold text-[#16D8E8] mt-1 block">TCPA Consent Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
