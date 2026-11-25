import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";
import MagneticButton from "src/components/ui/MagneticButton";
import NodeHubCanvas from "src/components/visuals/NodeHubCanvas";
import PillarsFlip from "src/components/sections/PillarsFlip";
import HeroScene from "src/components/visuals/HeroScene";
import WhyUsScene from "src/components/visuals/hero-scenes/WhyUsScene";

export const metadata: Metadata = {
  title: "Why Us | Inbound Marketplace",
  description:
    "Traditional lead generation can be fragmented, difficult to measure, and inconsistent in quality. Inbound Marketplace brings buyers and publishers together through intelligent matching, structured verification, and transparent delivery workflows.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        {/* ═══ 1. HERO SECTION (2-Column Grid with Animated Scene) ═══ */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-[rgba(120,170,255,0.18)] tech-grid-dark">
          {/* Subtle radial glows */}
          <div
            className="absolute top-1/4 right-[5%] w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(8, 123, 255, 0.3) 0%, rgba(22, 216, 232, 0.15) 50%, transparent 80%)",
            }}
          />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                    WHY INBOUND MARKETPLACE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.02] mb-6">
                  The Network Behind <br />
                  <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                    Better Customer Acquisition.
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-[#94A3B8] font-light leading-relaxed max-w-2xl mb-10">
                  Traditional lead generation can be fragmented, difficult to measure, and inconsistent in quality. Inbound Marketplace brings buyers and publishers together through intelligent matching, structured verification, and transparent delivery workflows.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <MagneticButton href="/#marketplace" variant="primary" className="!py-3.5 !px-8">
                    <span>Explore the Marketplace</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </MagneticButton>

                  <MagneticButton href="/contact" variant="outline" className="!py-3.5 !px-8">
                    <span>Contact Our Team</span>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Unique Hero Scene */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <HeroScene>
                  <WhyUsScene />
                </HeroScene>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. PINNED 320vh SCROLL SCENE (Canvas Red-to-Cyan Convergence) ═══ */}
        <NodeHubCanvas />

        {/* ═══ 3. FOUR PLATFORM PILLARS (3D rotateX Flip-in) ═══ */}
        <PillarsFlip />

        {/* ═══ 4. BOTTOM CTA BANNER ═══ */}
        <section className="py-24 bg-[#020C1D] relative overflow-hidden border-t border-[rgba(120,170,255,0.18)] text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Better Connections Start Here.
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] font-light mb-8 max-w-xl mx-auto">
              Join a marketplace built to bring consumer intent and business opportunity closer together.
            </p>
            <MagneticButton href="/contact" variant="primary" className="!py-3.5 !px-9">
              <span>Get Connected</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
