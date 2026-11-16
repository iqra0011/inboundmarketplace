"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CountUp from "src/components/ui/CountUp";
import MagneticButton from "src/components/ui/MagneticButton";
import SphereCanvas from "src/components/visuals/SphereCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden select-none bg-[#03142F] border-b border-[rgba(120,170,255,0.15)] tech-grid-dark">
      
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 right-[5%] w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(8,123,255,0.25) 0%, rgba(22,216,232,0.1) 40%, rgba(67,52,242,0.05) 70%, transparent 85%)",
        }}
      />
      <div
        className="absolute bottom-10 left-[0%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(67,52,242,0.2) 0%, rgba(196,0,255,0.08) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Big Headline with Mixed Bold/Italic Words */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* System Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16D8E8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#087BFF]" />
              </span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                THE INBOUND LEAD MARKETPLACE
              </span>
            </div>

            {/* Oversized Headline with Mixed Bold & Italic (Masked line reveal) */}
            <h1 className="text-[44px] sm:text-[58px] md:text-[68px] lg:text-[76px] font-extrabold tracking-[-0.04em] leading-[0.94] text-white mb-6">
              <span className="block overflow-hidden">
                <span className="hero-reveal-line block">
                  WHERE <span className="font-accent-italic font-light text-[#16D8E8]">high-intent</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-reveal-line block bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#4334F2] bg-clip-text text-transparent">
                  LEADS BECOME
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-reveal-line block">
                  <span className="font-accent-italic font-light text-[#C400FF]">real</span> REVENUE.
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[15px] sm:text-[17px] text-[#94A3B8] font-light max-w-[500px] leading-[1.65] mb-8">
              Turn consumer intent into qualified opportunities through verification, intelligent matching, and real-time delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-10">
              <MagneticButton href="#marketplace" variant="primary">
                <span>Explore the Marketplace</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </MagneticButton>
              <MagneticButton href="#publishers" variant="secondary">
                <span>For Publishers</span>
              </MagneticButton>
            </div>

            {/* Capabilities Ticker */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs font-semibold text-[#94A3B8] mb-10">
              <span className="flex items-center space-x-1.5 text-white">
                <Check className="w-4 h-4 text-[#087BFF] stroke-[2.5]" />
                <span>Consent Verification</span>
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="flex items-center space-x-1.5 text-white">
                <Check className="w-4 h-4 text-[#16D8E8] stroke-[2.5]" />
                <span>Real-Time Routing</span>
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="flex items-center space-x-1.5 text-white">
                <Check className="w-4 h-4 text-[#C400FF] stroke-[2.5]" />
                <span>Intelligent Matching</span>
              </span>
            </div>

            {/* Live Stats Row with CountUp */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 w-full max-w-2xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  <CountUp end={50000} suffix="+" />
                </div>
                <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                  Qualified Leads
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  <CountUp end={500} suffix="+" />
                </div>
                <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                  Active Partners
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  <CountUp end={30} suffix="+" />
                </div>
                <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                  Industries
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#16D8E8]">
                  <CountUp end={98} suffix="%" />
                </div>
                <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                  Lead Quality
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Mouse-Reactive Wireframe Particle Sphere */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <SphereCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
