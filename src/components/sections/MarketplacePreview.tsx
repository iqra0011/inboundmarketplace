"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import GlassCard from "src/components/ui/GlassCard";

interface LeadItem {
  id: string;
  industry: string;
  leadType: string;
  intent: "Verified" | "High Intent" | "Hot Lead";
  price: number;
  status: "Available" | "Routing";
  location: string;
  attributes: string[];
  timestamp: string;
}

const INITIAL_LEADS: LeadItem[] = [
  { id: "L-9041", industry: "Home Services", leadType: "HVAC System Replacement", intent: "High Intent", price: 42.00, status: "Available", location: "Houston, TX", attributes: ["Homeowner Verified", "Single Family", "Urgent Replacement"], timestamp: "12s ago" },
  { id: "L-9042", industry: "Insurance", leadType: "Comprehensive Auto Policy", intent: "Verified", price: 31.00, status: "Available", location: "Dallas, TX", attributes: ["2 Vehicles", "Current Insured", "Clean Record"], timestamp: "28s ago" },
  { id: "L-9043", industry: "Legal", leadType: "Personal Injury Inquiry", intent: "High Intent", price: 85.00, status: "Available", location: "Austin, TX", attributes: ["Incident < 30 Days", "Medical Treatment", "Unrepresented"], timestamp: "45s ago" },
  { id: "L-9044", industry: "Healthcare", leadType: "Medicare Advantage Intake", intent: "Verified", price: 38.00, status: "Available", location: "Phoenix, AZ", attributes: ["Age 65+", "Part A & B Enrolled", "Annual Enrollment"], timestamp: "1m ago" },
  { id: "L-9045", industry: "Financial Services", leadType: "Debt Consolidation Request", intent: "Verified", price: 65.00, status: "Available", location: "Chicago, IL", attributes: ["$25k+ Unsecured", "Employed", "Seeking Reduction"], timestamp: "2m ago" },
  { id: "L-9046", industry: "Home Services", leadType: "Residential Solar Survey", intent: "Hot Lead", price: 58.00, status: "Available", location: "Las Vegas, NV", attributes: ["Electric Bill > $150", "South-Facing Roof", "Credit 680+"], timestamp: "3m ago" },
  { id: "L-9047", industry: "Financial Services", leadType: "Mortgage Refinance Application", intent: "High Intent", price: 92.00, status: "Available", location: "Columbus, OH", attributes: ["Loan Balance $300k", "Conventional", "LTV < 80%"], timestamp: "4m ago" },
  { id: "L-9048", industry: "Legal", leadType: "Commercial Vehicle Intake", intent: "Hot Lead", price: 105.00, status: "Available", location: "Atlanta, GA", attributes: ["Commercial Truck", "Police Report Filed", "Medical Records"], timestamp: "5m ago" },
];

export default function MarketplacePreview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [pulsingRowId, setPulsingRowId] = useState("L-9041");

  const industries = ["All", "Insurance", "Home Services", "Healthcare", "Financial Services", "Legal"];

  // Real-time price ticking effect (ticking up/down by ±$1-2 periodically)
  useEffect(() => {
    const interval = setInterval(() => {
      setLeads((prevLeads) => {
        const randomIndex = Math.floor(Math.random() * prevLeads.length);
        const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2);
        const updated = [...prevLeads];
        const newPrice = Math.max(25, Math.min(130, updated[randomIndex].price + delta));
        updated[randomIndex] = {
          ...updated[randomIndex],
          price: parseFloat(newPrice.toFixed(2)),
        };
        setPulsingRowId(updated[randomIndex].id);
        return updated;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.leadType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry === "All" || lead.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustry, leads]);

  return (
    <section id="marketplace" className="py-24 md:py-32 bg-[#03142F] select-none relative overflow-hidden border-b border-[rgba(120,170,255,0.15)]">
      
      {/* Background ambient radial glow */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(22,216,232,0.1) 0%, rgba(8,123,255,0.05) 50%, transparent 75%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Flank: Editorial Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-ping" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                LIVE DEMAND STREAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.05] mb-4">
              Real-Time <span className="font-accent-italic font-light text-[#16D8E8]">Demand.</span> <br />
              <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                Ready to Connect.
              </span>
            </h2>

            <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-6 max-w-[340px]">
              Explore incoming consumer inquiries across active verticals, qualification parameters, and automated delivery endpoints.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedIndustry === ind
                      ? "bg-[#087BFF] text-white shadow-[0_0_12px_rgba(8,123,255,0.5)] border border-white/20"
                      : "bg-white/[0.06] text-[#94A3B8] hover:text-white border border-white/10"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex flex-col space-y-2.5">
              <span className="inline-flex items-center w-fit px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                VERIFIED SIGNAL STREAM
              </span>
              <span className="inline-flex items-center w-fit px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#16D8E8] bg-[#16D8E8]/10 border border-[#16D8E8]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16D8E8] mr-2" />
                PING-POST LATENCY: &lt; 42MS
              </span>
            </div>
          </div>

          {/* Right Terminal: Rows Slide In One By One & Live Pulse */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            
            {/* Search Box Header */}
            <div className="p-4 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-[rgba(120,170,255,0.25)] flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)] mb-2">
              <Search className="w-4 h-4 text-[#16D8E8]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search vertical, city, or Lead ID..."
                className="bg-transparent border-none outline-none text-sm text-white placeholder-[#94A3B8] w-full"
              />
            </div>

            {/* Terminal Feed Rows */}
            <div className="flex flex-col gap-3">
              {filteredLeads.map((lead, idx) => {
                const isPulsing = lead.id === pulsingRowId;

                return (
                  <div
                    key={lead.id}
                    style={{ animationDelay: `${idx * 0.08}s` }}
                    className={`rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 ${
                      isPulsing
                        ? "bg-[#061d45]/90 border border-[#16D8E8] shadow-[0_0_24px_rgba(22,216,232,0.35),inset_0_0_20px_rgba(22,216,232,0.15)]"
                        : "bg-white/[0.05] backdrop-blur-xl border border-[rgba(120,170,255,0.22)] hover:border-[rgba(22,216,232,0.4)] hover:bg-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span className="font-mono text-xs font-bold text-[#16D8E8] bg-[#087BFF]/20 px-2.5 py-1 rounded-md border border-[#087BFF]/30">
                        {lead.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-white tracking-tight">{lead.leadType}</h4>
                          {isPulsing && (
                            <span className="px-2 py-0.5 rounded text-[9.5px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">
                              LIVE
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-[#94A3B8]">
                          <span>{lead.location}</span>
                          <span>•</span>
                          <span>{lead.timestamp}</span>
                          <span>•</span>
                          <span className="text-[#16D8E8]">{lead.attributes[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">Current Bid</span>
                        <span className="font-mono text-xl font-black text-white">
                          ${lead.price.toFixed(2)}
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/[0.08] hover:bg-[#087BFF] border border-white/20 hover:border-[#16D8E8] transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(8,123,255,0.2)]"
                      >
                        <span>Match</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
