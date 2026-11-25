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
import HeroScene from "src/components/visuals/HeroScene";
import OrbitScene from "src/components/visuals/hero-scenes/OrbitScene";

export const metadata: Metadata = {
  title: "About Us | Inbound Marketplace",
  description:
    "Inbound Marketplace is a technology-driven lead marketplace designed to connect businesses seeking qualified customer inquiries with publishers generating consumer demand.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        {/* ═══ 1. HERO WITH 2-COLUMN LAYOUT & ORBIT HERO SCENE ═══ */}
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
              
              {/* Left Column: Heading, Eyebrow & Mission Reveal */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                    ABOUT INBOUND MARKETPLACE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.02] mb-6">
                  Building a Better Connection <br />
                  <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                    Between Intent and Opportunity.
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-[#94A3B8] font-light leading-relaxed max-w-2xl mb-8">
                  Inbound Marketplace is a technology-driven lead marketplace designed to connect businesses seeking qualified customer inquiries with publishers generating consumer demand. We bring both sides together through structured workflows, intelligent matching, and connected delivery systems.
                </p>

                {/* Mission & Vision Statements */}
                <div className="grid grid-cols-1 gap-4 w-full">
                  <div className="p-6 sm:p-7 rounded-[22px] bg-white/[0.04] border border-[rgba(120,170,255,0.25)] shadow-[inset_0_0_24px_rgba(22,216,232,0.06)]">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#16D8E8] block mb-2">
                      OUR MISSION
                    </span>
                    <WordReveal
                      text="To make customer acquisition more efficient, reliable, and transparent by building technology that connects active consumer interest with the businesses best equipped to serve them."
                      className="text-base sm:text-lg text-white font-normal"
                    />
                  </div>

                  <div className="p-6 sm:p-7 rounded-[22px] bg-white/[0.04] border border-[rgba(120,170,255,0.25)] shadow-[inset_0_0_24px_rgba(22,216,232,0.06)]">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C400FF] block mb-2">
                      OUR VISION
                    </span>
                    <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
                      To become a trusted standard in lead marketplace technology, where buyers find relevant opportunities, publishers maximize traffic value, and customer acquisition moves forward with confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Orbit Hero Scene */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <HeroScene>
                  <OrbitScene />
                </HeroScene>
              </div>

            </div>

            {/* ═══ 2. FORMULA STAGES LIST ═══ */}
            <OrbitRings />
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
              Be part of a growing network connecting consumer intent with business opportunity.
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
