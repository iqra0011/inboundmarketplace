"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag, Sparkles } from "lucide-react";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";
import MagneticButton from "src/components/ui/MagneticButton";
import HangingArticles, { ArticleItem } from "src/components/visuals/HangingArticles";

const RESOURCE_CATEGORIES = [
  "All",
  "Marketplace",
  "Lead Buyers",
  "Publishers",
  "Industry",
  "Technology",
];

const SAMPLE_RESOURCES: ArticleItem[] = [
  {
    id: "r-1",
    category: "Marketplace",
    title: "How Lead Marketplaces Connect Buyers and Publishers",
    desc: "An overview of how modern lead marketplaces coordinate traffic sources, validation steps, and buyer routing to make customer acquisition more efficient.",
    readTime: "5 min read",
    tag: "Marketplace Fundamentals",
    featured: true,
  },
  {
    id: "r-2",
    category: "Lead Buyers",
    title: "Building a Better Lead Acquisition Strategy",
    desc: "Key considerations for businesses seeking qualified inquiries, from setting targeting criteria to managing intake capacity and conversion tracking.",
    readTime: "6 min read",
    tag: "Buyer Playbook",
    featured: false,
  },
  {
    id: "r-3",
    category: "Publishers",
    title: "Turning Consumer Traffic Into Monetizable Opportunities",
    desc: "How publishers and media teams can align digital audiences with active lead demand across high-intent industry categories.",
    readTime: "5 min read",
    tag: "Publisher Insights",
    featured: false,
  },
  {
    id: "r-4",
    category: "Industry",
    title: "Understanding Lead Quality and Consumer Intent",
    desc: "Why consumer intent matters in lead generation, and how structured validation helps differentiate qualified inquiries from general traffic.",
    readTime: "4 min read",
    tag: "Industry Analysis",
    featured: false,
  },
  {
    id: "r-5",
    category: "Technology",
    title: "The Role of APIs and Webhooks in Lead Delivery",
    desc: "A technical look at how automated delivery workflows and real-time endpoints help businesses receive inquiries without delays.",
    readTime: "5 min read",
    tag: "Technical Architecture",
    featured: false,
  },
  {
    id: "r-6",
    category: "Lead Buyers",
    title: "Reducing Duplicate Leads Through Better Validation",
    desc: "How structured checks and suppression rules can help reduce duplicate submissions and protect marketing budgets.",
    readTime: "4 min read",
    tag: "Quality & Compliance",
    featured: false,
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? SAMPLE_RESOURCES
      : SAMPLE_RESOURCES.filter(
          (r) =>
            r.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            selectedCategory.toLowerCase().includes(r.category.toLowerCase())
        );

  const featuredResource = SAMPLE_RESOURCES[0];

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
                  KNOWLEDGE &amp; INSIGHTS
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.02] mb-6">
                Insights for a Smarter <br />
                <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                  Lead Generation Strategy.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#94A3B8] font-light leading-relaxed max-w-2xl mb-4">
                Explore practical guides, industry insights, and technology resources designed to help lead buyers and traffic publishers make better acquisition decisions. Learn about lead quality, campaign optimization, marketplace technology, and performance-driven growth.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 2. FEATURED GUIDE: LARGE GLASS CARD WITH INDIGO-BLUE GRADIENT & SYNOPSIS PANEL ═══ */}
        <section className="py-16 md:py-24 bg-[#03142F] border-b border-[rgba(120,170,255,0.18)]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[26px] bg-gradient-to-br from-[#061d45]/90 via-[#03142F]/95 to-[#4334F2]/25 backdrop-blur-[24px] border border-[rgba(120,170,255,0.32)] p-8 sm:p-12 shadow-[inset_0_0_30px_rgba(22,216,232,0.1),0_20px_50px_rgba(0,0,0,0.6)] text-left grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Featured Article Info (8 cols) */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="px-3.5 py-1 bg-[#16D8E8]/10 border border-[#16D8E8]/30 text-[#16D8E8] text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(22,216,232,0.15)]">
                      FEATURED GUIDE
                    </span>
                    <span className="text-xs text-[#94A3B8] font-mono">8 min read</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                    Understanding the Lead Marketplace: From Consumer Intent to Conversion
                  </h2>

                  <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mb-8 max-w-2xl">
                    Discover how lead marketplaces connect consumer inquiries with businesses through traffic acquisition, validation, intelligent matching, and automated delivery.
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-wider text-[#16D8E8] hover:text-white transition-colors cursor-pointer w-fit">
                  <span>Explore Technical Guide</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Right Column: Dark Resource Synopsis Panel (4 cols) */}
              <div className="lg:col-span-4 rounded-[20px] bg-[#020C1D] border border-[rgba(120,170,255,0.22)] p-6 text-white flex flex-col justify-between shadow-[inset_0_0_20px_rgba(22,216,232,0.06)]">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#16D8E8] block mb-3">
                    RESOURCE SYNOPSIS
                  </span>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mb-4">
                    Understand how parameter verification models eliminate duplicate submissions and validate intent vectors before bidding algorithms engage.
                  </p>
                  <div className="space-y-2 text-xs font-mono text-white/80">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16D8E8]" />
                      <span>Schema: JSON-LD Webhooks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF]" />
                      <span>Audience: Lead Buyers & Engineers</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono uppercase text-[#16D8E8]/80">
                  Inbound Marketplace Research Desk
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 3. DIRECTORY WITH CATEGORY CHIPS (POP ANIMATION) & HANGING ARTICLES ═══ */}
        <section className="py-20 md:py-28 bg-[#03142F]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Chips with Pop Animation */}
            <div className="flex items-center space-x-3 overflow-x-auto pb-4 mb-14 scrollbar-none justify-start md:justify-center">
              {RESOURCE_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 shrink-0 border cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-[#16D8E8] text-[#03142F] border-[#16D8E8] shadow-[0_0_20px_rgba(22,216,232,0.4)] scale-105"
                        : "bg-white/[0.06] text-[#94A3B8] border-[rgba(120,170,255,0.25)] hover:text-white hover:border-[#16D8E8]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Articles Hanging from Glowing Rail on Dashed Strings */}
            <HangingArticles articles={filtered} />

            {/* Bottom Callout & CTA */}
            <div className="mt-16 p-8 sm:p-10 rounded-[24px] bg-white/[0.04] border border-[rgba(120,170,255,0.22)] text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold text-[#16D8E8] uppercase tracking-wider block mb-2">
                CONTINUOUS INDUSTRY INSIGHTS
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay Ahead of the Marketplace.
              </h3>
              <p className="text-sm text-[#94A3B8] font-light mb-6">
                Explore new insights, practical resources, and strategies for better lead acquisition.
              </p>
              <MagneticButton href="/contact" variant="primary" className="!py-3 !px-8">
                <span>Explore All Resources</span>
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
