import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";
import MagneticButton from "src/components/ui/MagneticButton";
import WordReveal from "src/components/visuals/WordReveal";
import OrbitRings from "src/components/visuals/OrbitRings";
import BelieveParallax from "src/components/sections/BelieveParallax";

export const metadata: Metadata = {
  title: "About Us | Inbound Marketplace",
  description:
    "We believe the future of customer acquisition belongs to intelligent marketplaces that connect validated consumer demand directly with businesses ready to serve them.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        {/* ═══ 1. HERO WITH WORD-REVEAL MISSION STATEMENT ═══ */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-[rgba(120,170,255,0.18)]">
          {/* Subtle radial glows */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(8, 123, 255, 0.3) 0%, rgba(22, 216, 232, 0.15) 50%, transparent 80%)",
            }}
          />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                  ABOUT INBOUND MARKETPLACE
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.02] mb-8">
                Building the Network <br />
                <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                  Between Intent & Opportunity.
                </span>
              </h1>

              {/* Mission Paragraph that lights up word by word as you scroll */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-white/[0.04] border border-[rgba(120,170,255,0.25)] mb-10 shadow-[inset_0_0_24px_rgba(22,216,232,0.06)]">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#16D8E8] block mb-3">
                  MISSION STATEMENT
                </span>
                <WordReveal
                  text="We believe the future of customer acquisition belongs to intelligent marketplaces that connect validated consumer demand directly with businesses ready to serve them. Real-time verification, transparent pricing, and sub-second delivery transform every lead into a closed deal."
                  className="text-lg sm:text-2xl text-white font-normal"
                />
              </div>

              {/* ═══ 2. ORBIT RINGS GRAPHIC & 3-STAGE LIST ═══ */}
              <OrbitRings />
            </div>
          </div>
        </section>

        {/* ═══ 3. WHAT WE BELIEVE (Parallax Speed Cards) ═══ */}
        <BelieveParallax />

        {/* ═══ 4. BOTTOM ACTION ═══ */}
        <section className="py-24 bg-[#020C1D] relative overflow-hidden border-t border-[rgba(120,170,255,0.18)] text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Join the Acquisition Revolution
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] font-light mb-8 max-w-xl mx-auto">
              Partner with the leading verified inbound lead marketplace.
            </p>
            <MagneticButton href="/contact" variant="primary" className="!py-3.5 !px-9">
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
