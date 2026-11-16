import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";
import MagneticButton from "src/components/ui/MagneticButton";
import Timeline from "src/components/visuals/Timeline";

export const metadata: Metadata = {
  title: "How It Works | Inbound Marketplace",
  description:
    "A step-by-step walkthrough of how Inbound Marketplace captures high-intent consumer traffic, verifies contact integrity, and delivers verified opportunities directly into your CRM.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        {/* ═══ 1. HERO SECTION ═══ */}
        <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-[rgba(120,170,255,0.18)]">
          {/* Subtle radial glows */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(8, 123, 255, 0.3) 0%, rgba(22, 216, 232, 0.15) 50%, transparent 80%)",
            }}
          />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                  INTERACTIVE PROCESS ARCHITECTURE
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.02] mb-6">
                From Intent <br />
                <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                  To Opportunity.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#94A3B8] font-light leading-relaxed max-w-2xl mb-10">
                A step-by-step walkthrough of how Inbound Marketplace captures high-intent consumer traffic, verifies contact integrity, and delivers verified opportunities directly into your CRM.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                <MagneticButton href="/#marketplace" variant="primary" className="!py-3.5 !px-8">
                  <span>Explore Marketplace Terminal</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </MagneticButton>

                <MagneticButton href="/contact" variant="outline" className="!py-3.5 !px-8">
                  <span>Schedule an Integration Call</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. PINNED 420vh TIMELINE SCENE ═══ */}
        <Timeline />

        {/* ═══ 3. INTEGRATION ECOSYSTEM SUMMARY ═══ */}
        <section className="py-24 bg-[#020C1D] relative overflow-hidden border-t border-[rgba(120,170,255,0.18)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Connect in Minutes, Scale for Years
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] font-light mb-8 max-w-xl mx-auto">
              Native webhook adapters for Salesforce, HubSpot, Leadspedia, and custom REST API endpoints.
            </p>
            <MagneticButton href="/contact" variant="primary" className="!py-3.5 !px-9">
              <span>Request API Documentation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
