import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";
import MagneticButton from "src/components/ui/MagneticButton";
import Timeline from "src/components/visuals/Timeline";
import HeroScene from "src/components/visuals/HeroScene";
import PipelineScene from "src/components/visuals/hero-scenes/PipelineScene";

export const metadata: Metadata = {
  title: "How It Works | Inbound Marketplace",
  description:
    "A structured lead marketplace that connects consumer inquiries with the right businesses through qualification, intelligent matching, and automated delivery.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        {/* ═══ 1. HERO SECTION (2-Column Grid with Animated Pipeline Scene) ═══ */}
        <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-[rgba(120,170,255,0.18)] tech-grid-dark">
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
                    THE MARKETPLACE PROCESS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.02] mb-6">
                  From Consumer Intent <br />
                  <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                    to Business Opportunity.
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-[#94A3B8] font-light leading-relaxed max-w-2xl mb-10">
                  A structured lead marketplace that connects consumer inquiries with the right businesses through qualification, intelligent matching, and automated delivery. Whether you&apos;re looking to acquire leads or monetize traffic, getting started is simple.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <MagneticButton href="/contact" variant="primary" className="!py-3.5 !px-8">
                    <span>Start Buying Leads</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </MagneticButton>

                  <MagneticButton href="/contact" variant="outline" className="!py-3.5 !px-8">
                    <span>Become a Publisher</span>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Hero Scene */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <HeroScene>
                  <PipelineScene />
                </HeroScene>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. PINNED 420vh TIMELINE SCENE ═══ */}
        <Timeline />

        {/* ═══ 3. BUYER & PUBLISHER PATHS + TECH STACK INTEGRATION ═══ */}
        <section className="py-24 bg-[#020C1D] relative overflow-hidden border-t border-[rgba(120,170,255,0.18)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Buyer & Publisher 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 text-left">
              {/* Buyer Side */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.05] border border-[rgba(120,170,255,0.25)] backdrop-blur-xl">
                <div className="inline-block px-3 py-1 rounded-full bg-[#087BFF]/20 text-[#16D8E8] text-xs font-bold tracking-wider uppercase mb-4">
                  For Lead Buyers
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Acquire Leads That Match Your Business
                </h3>
                <p className="text-sm text-[#94A3B8] font-light mb-6">
                  Get high-intent customer inquiries delivered directly to your team through a simple 5-step journey:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Define Target Verticals", desc: "Choose the industries and services relevant to your business." },
                    { step: "2", title: "Set Targeting Parameters", desc: "Select target geographies, volume requirements, and criteria." },
                    { step: "3", title: "Connect Delivery Systems", desc: "Receive leads via webhook, API, or direct CRM integration." },
                    { step: "4", title: "Review Lead Inflow", desc: "Monitor incoming inquiries, lead details, and match accuracy." },
                    { step: "5", title: "Scale Your Acquisition", desc: "Adjust parameters, increase volume, and expand verticals." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3.5">
                      <span className="w-6 h-6 rounded-full bg-[#087BFF] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-[#94A3B8] font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publisher Side */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.05] border border-[rgba(120,170,255,0.25)] backdrop-blur-xl">
                <div className="inline-block px-3 py-1 rounded-full bg-[#4334F2]/20 text-[#C400FF] text-xs font-bold tracking-wider uppercase mb-4">
                  For Traffic Publishers
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Turn Your Traffic Into Opportunities
                </h3>
                <p className="text-sm text-[#94A3B8] font-light mb-6">
                  Monetize high-intent consumer traffic with access to active buyers through a structured process:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Connect Traffic Sources", desc: "Integrate search, social, display, or contextual channels." },
                    { step: "2", title: "Align With Buyer Demand", desc: "Match traffic with active verticals and qualification needs." },
                    { step: "3", title: "Validate Lead Submissions", desc: "Ensure inquiries meet format, validation, and consent checks." },
                    { step: "4", title: "Deliver in Real Time", desc: "Route qualified inquiries to matching buyers automatically." },
                    { step: "5", title: "Track Performance & Payouts", desc: "Monitor accepted leads, conversion rates, and revenue." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3.5">
                      <span className="w-6 h-6 rounded-full bg-[#4334F2] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-[#94A3B8] font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Integration Section */}
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                  TECHNOLOGY &amp; INTEGRATIONS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Connect Your Existing Technology Stack
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl mx-auto">
                Inbound Marketplace is built to work alongside your current tools, CRMs, and marketing platforms through REST APIs, Webhook Delivery, and Direct Lead Ingestion.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              {[
                { title: "REST APIs", desc: "Programmatic access for custom integrations" },
                { title: "Webhook Delivery", desc: "Instant notifications and lead dispatching" },
                { title: "CRM Connectivity", desc: "Direct sync to HubSpot, Salesforce, and more" },
                { title: "Structured Data", desc: "Consistent JSON formatting across all channels" },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-[#94A3B8] font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <MagneticButton href="/contact" variant="primary" className="!py-3.5 !px-9">
                <span>Start Your Integration</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
