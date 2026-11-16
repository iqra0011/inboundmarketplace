"use client";

import React from "react";
import Link from "next/link";
import { Server, Check, ArrowRight, DollarSign } from "lucide-react";
import GlassCard from "src/components/ui/GlassCard";
import MagneticButton from "src/components/ui/MagneticButton";

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-[#03142F] relative overflow-hidden select-none border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Anchor targets */}
      <div id="buyers" className="absolute -top-28" />
      <div id="publishers" className="absolute -top-28" />

      {/* Background ambient glows */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(8,123,255,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(67,52,242,0.15) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl text-left mb-14 md:mb-18">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#16D8E8]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
              TWO-SIDED MARKETPLACE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.08] mb-3">
            One Marketplace.{" "}
            <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
              Two Sides.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            Connecting verified consumer demand with targeted customer acquisition through unified real-time infrastructure.
          </p>
        </div>

        {/* ═══ TWO-SIDED CARDS WITH 3D TILT ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* FOR BUYERS (Demand Engine) */}
          <GlassCard className="p-8 sm:p-10 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1.5 bg-[#087BFF] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(8,123,255,0.4)]">
                  FOR BUYERS
                </span>
                <span className="text-xs font-bold text-[#16D8E8] uppercase tracking-wider">
                  Demand Engine
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Acquire Customers With Precision
              </h3>
              <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-8">
                Receive validated opportunities with verified intent. Scale campaigns with precision targeting parameters and millisecond webhook delivery.
              </p>

              {/* Console preview box */}
              <div className="rounded-2xl bg-[#020e22]/80 border border-white/10 p-5 mb-8">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold text-white">
                  <span className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-[#16D8E8]" />
                    Acquisition Console
                  </span>
                  <span className="text-emerald-400 text-[11px]">Real-Time Ingestion</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <span className="text-[10px] font-bold text-[#94A3B8] uppercase block">Daily Ingestion</span>
                    <span className="text-lg font-black text-white mt-0.5 block">1,840 Leads</span>
                    <span className="text-[10px] font-semibold text-emerald-400">Active Routing</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <span className="text-[10px] font-bold text-[#94A3B8] uppercase block">Target Verticals</span>
                    <span className="text-lg font-black text-[#16D8E8] mt-0.5 block">Multi-Tier</span>
                    <span className="text-[10px] font-semibold text-[#94A3B8]">Custom Filtering</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-white/90 mb-8">
                {["Verified Intent Records", "Real-Time Delivery", "Custom Geo & Bidding", "Direct CRM Ingestion"].map((cap) => (
                  <div key={cap} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#16D8E8] stroke-[2.5] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <MagneticButton href="/contact" variant="primary" className="w-full">
              <span>Start Buying Leads</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </GlassCard>

          {/* FOR PUBLISHERS (Supply Engine) */}
          <GlassCard className="p-8 sm:p-10 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1.5 bg-[#4334F2] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(67,52,242,0.4)]">
                  FOR PUBLISHERS
                </span>
                <span className="text-xs font-bold text-[#C400FF] uppercase tracking-wider">
                  Supply Engine
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Monetize Traffic At Maximum Yield
              </h3>
              <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-8">
                Route high-intent consumer traffic into verified buyer endpoints. Earn competitive bids with granular campaign tracking and weekly payouts.
              </p>

              {/* Monetization Console preview box */}
              <div className="rounded-2xl bg-[#020e22]/80 border border-white/10 p-5 mb-8">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold text-white">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5 text-[#C400FF]" />
                    Yield Optimization Console
                  </span>
                  <span className="text-[#16D8E8] text-[11px]">Instant Ping-Post</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <span className="text-[10px] font-bold text-[#94A3B8] uppercase block">Average Yield Lift</span>
                    <span className="text-lg font-black text-[#16D8E8] mt-0.5 block">+28.4%</span>
                    <span className="text-[10px] font-semibold text-emerald-400">Quarterly Avg</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <span className="text-[10px] font-bold text-[#94A3B8] uppercase block">Payout Frequency</span>
                    <span className="text-lg font-black text-white mt-0.5 block">Weekly</span>
                    <span className="text-[10px] font-semibold text-[#94A3B8]">Transparent Bids</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-white/90 mb-8">
                {["Premium High-Payout Verticals", "Ping-Post & Direct APIs", "Detailed Real-Time Telemetry", "Dedicated Support Reps"].map((cap) => (
                  <div key={cap} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C400FF] stroke-[2.5] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <MagneticButton href="/contact" variant="secondary" className="w-full">
              <span>Apply as a Publisher</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
