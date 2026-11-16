"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Sparkles, Users, ShieldCheck, Workflow, Target, Zap, Terminal } from "lucide-react";

const STAGES = [
  {
    id: "01",
    tag: "INTENT",
    title: "Consumer Intent Capture",
    headline: "High-Intent Inquiries Initiated by Active Consumers",
    desc: "A consumer actively searches for solutions across search engines, contextual publishers, and comparison portals, expressing explicit, real-time demand.",
    details: [
      "Organic search query matching with contextual keywords",
      "High-converting media intake and interactive questionnaire",
      "Point-of-need consumer data input with intent timestamp",
    ],
    terminalTitle: "intent_stream_listener.go",
    terminalRows: [
      { key: "STATUS", val: "CAPTURED", color: "#16D8E8" },
      { key: "SEARCH_INTENT", val: "HIGH_PURCHASE_COMMITTED", color: "#087BFF" },
      { key: "TIMESTAMP", val: "2026-11-17T00:45:12.084Z", color: "#94A3B8" },
    ],
    icon: Sparkles,
  },
  {
    id: "02",
    tag: "GENERATE",
    title: "Traffic Ingestion Feeds",
    headline: "Publisher Endpoint Standardization",
    desc: "Certified publishers transmit lead records via standardized ingestion endpoints, ensuring clean formatting, metadata capture, and immediate processing.",
    details: [
      "Standardized field schema mapping and normalization",
      "Sub-50ms publisher endpoint latency monitoring",
      "Multi-channel feed deduplication across all sources",
    ],
    terminalTitle: "ingestion_normalizer.py",
    terminalRows: [
      { key: "INGESTION_SOURCE", val: "CERTIFIED_MEDIA_PARTNER", color: "#16D8E8" },
      { key: "PAYLOAD_SCHEMA", val: "STRICT_JSON_VALIDATED", color: "#087BFF" },
      { key: "INGEST_LATENCY", val: "24ms", color: "#10B981" },
    ],
    icon: Users,
  },
  {
    id: "03",
    tag: "VERIFY",
    title: "Quality & Compliance Checkpoint",
    headline: "Automated Fraud & Consent Validation",
    desc: "Every submission undergoes mandatory screening for contact deliverability, duplicate suppression, and explicit opt-in recording.",
    details: [
      "Active contact number and email deliverability checks",
      "30-day cross-platform duplicate suppression engine",
      "Cryptographic consent token preservation with TCPA audit trail",
    ],
    terminalTitle: "compliance_validator.rs",
    terminalRows: [
      { key: "PHONE_VALIDITY", val: "LIVE_CARRIER_CONFIRMED", color: "#10B981" },
      { key: "CONSENT_RECORD", val: "TCPA_OPT_IN_TOKEN_SEALED", color: "#16D8E8" },
      { key: "FRAUD_SCORE", val: "0.02 (CLEAN_VERIFIED)", color: "#087BFF" },
    ],
    icon: ShieldCheck,
  },
  {
    id: "04",
    tag: "ROUTE",
    title: "Dynamic Routing Rules",
    headline: "Custom Geo & Vertical Parameter Filtering",
    desc: "The routing engine evaluates lead attributes against real-time buyer filter criteria, zip codes, and acquisition parameters.",
    details: [
      "Sub-second geographical zip-code radius mapping",
      "Vertical parameter alignment (credit tier, property type)",
      "Automated daily cap and budget pacing pacing controls",
    ],
    terminalTitle: "dynamic_routing_engine.ts",
    terminalRows: [
      { key: "GEO_FILTER", val: "STATE_AND_RADIUS_MATCHED", color: "#16D8E8" },
      { key: "TIER_CRITERIA", val: "ENTERPRISE_PREMIUM", color: "#C400FF" },
      { key: "PACING_CAP", val: "42/250_DAILY_RESERVED", color: "#087BFF" },
    ],
    icon: Workflow,
  },
  {
    id: "05",
    tag: "MATCH",
    title: "Intelligent Match Allocation",
    headline: "Optimal Buyer Pairing",
    desc: "Our matching algorithms allocate the qualified opportunity to the winning buyer endpoint in real time without broker markup.",
    details: [
      "Real-time transparent second-price auction mechanics",
      "Exact-fit precision matching buyer campaign parameters",
      "Guaranteed exclusive allocation to highest-relevance buyer",
    ],
    terminalTitle: "auction_allocation.cpp",
    terminalRows: [
      { key: "MATCH_RESULT", val: "WINNING_BUYER_ALLOCATED", color: "#10B981" },
      { key: "BID_CLEARING", val: "FAIR_MARKET_TRANSPARENT", color: "#16D8E8" },
      { key: "ALLOCATION", val: "100%_EXCLUSIVE", color: "#C400FF" },
    ],
    icon: Target,
  },
  {
    id: "06",
    tag: "DELIVER",
    title: "Direct Ingestion & Delivery",
    headline: "Instant CRM & Dialer Synchronization",
    desc: "The completed lead record routes directly into your CRM, dialer, or webhook endpoint while consumer intent is at its absolute peak.",
    details: [
      "Sub-second direct API webhook delivery into your CRM",
      "Instant CRM custom field mapping (Salesforce, HubSpot, Leadspedia)",
      "Automated 200 OK delivery confirmation receipt",
    ],
    terminalTitle: "webhook_dispatcher.go",
    terminalRows: [
      { key: "ENDPOINT_HTTP", val: "200_OK_DELIVERED", color: "#10B981" },
      { key: "CRM_SYNC", val: "SALESFORCE_OBJ_CREATED", color: "#16D8E8" },
      { key: "TOTAL_LATENCY", val: "142ms_END_TO_END", color: "#087BFF" },
    ],
    icon: Zap,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGLineElement>(null);
  const packetRef = useRef<SVGCircleElement>(null);
  const packetGlowRef = useRef<SVGCircleElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");

  const activeStage = STAGES[activeIdx];
  const Icon = activeStage.icon;

  // Typewriter effect for terminal title
  useEffect(() => {
    let currentText = "";
    const target = activeStage.terminalTitle;
    let index = 0;
    setTypedTitle("");

    const interval = setInterval(() => {
      if (index < target.length) {
        currentText += target[index];
        setTypedTitle(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [activeIdx]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!containerRef.current || reducedMotion) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: isMobile ? "+=200%" : "+=340%",
      pin: true,
      scrub: 0.4,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalStages = STAGES.length;

        // Determine active stage index
        const stageIndex = Math.min(
          totalStages - 1,
          Math.floor(progress * totalStages)
        );
        setActiveIdx(stageIndex);

        // Move glowing packet along SVG track
        if (packetRef.current && packetGlowRef.current) {
          const trackWidth = 1000;
          const startX = 50;
          const endX = 950;
          const currentX = startX + progress * (endX - startX);

          packetRef.current.setAttribute("cx", `${currentX}`);
          packetGlowRef.current.setAttribute("cx", `${currentX}`);

          if (pathRef.current) {
            pathRef.current.setAttribute("x2", `${currentX}`);
          }
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-between py-10 md:py-16 bg-[#03142F] overflow-hidden select-none"
    >
      {/* Background ambient radial glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(8, 123, 255, 0.3) 0%, rgba(22, 216, 232, 0.15) 50%, rgba(196, 0, 255, 0.08) 70%, transparent 85%)",
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full justify-between">
        
        {/* ═══ 1. TIMELINE HEADER & CONTROLS ═══ */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
              PINNED INTERACTIVE TIMELINE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Six Stages of <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">Verified Delivery</span>
          </h2>
        </div>

        {/* ═══ 2. HORIZONTAL 6-STAGE TIMELINE TRACK ═══ */}
        <div className="relative w-full max-w-5xl mx-auto my-3 md:my-6">
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1000 90"
            fill="none"
          >
            {/* Background Base Track */}
            <line
              x1="50"
              y1="45"
              x2="950"
              y2="45"
              stroke="rgba(120, 170, 255, 0.2)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Active Cyan Glow Path */}
            <line
              ref={pathRef}
              x1="50"
              y1="45"
              x2="50"
              y2="45"
              stroke="#16D8E8"
              strokeWidth="4"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_10px_#16D8E8]"
            />

            {/* Glowing Moving Packet */}
            <circle
              ref={packetGlowRef}
              cx="50"
              cy="45"
              r="14"
              fill="rgba(22, 216, 232, 0.4)"
              className="filter blur-[4px]"
            />
            <circle
              ref={packetRef}
              cx="50"
              cy="45"
              r="7"
              fill="#FFFFFF"
              className="filter drop-shadow-[0_0_12px_#16D8E8]"
            />

            {/* 6 Stage Nodes */}
            {STAGES.map((st, i) => {
              const nodeX = 50 + (i / (STAGES.length - 1)) * 900;
              const isReached = i <= activeIdx;
              const isCurrent = i === activeIdx;

              return (
                <g
                  key={st.id}
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setActiveIdx(i)}
                >
                  {/* Outer Glow on active */}
                  {isCurrent && (
                    <circle
                      cx={nodeX}
                      cy="45"
                      r="20"
                      fill="none"
                      stroke="#16D8E8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-spin"
                      style={{ transformOrigin: `${nodeX}px 45px` }}
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={nodeX}
                    cy="45"
                    r={isCurrent ? "12" : "9"}
                    fill={isReached ? "#16D8E8" : "#061d45"}
                    stroke={isReached ? "#FFFFFF" : "rgba(120, 170, 255, 0.5)"}
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                  />

                  {/* Stage Label */}
                  <text
                    x={nodeX}
                    y="78"
                    textAnchor="middle"
                    fill={isCurrent ? "#16D8E8" : isReached ? "#FFFFFF" : "#94A3B8"}
                    fontSize="11"
                    fontWeight={isCurrent ? "800" : "600"}
                    letterSpacing="0.08em"
                    className="font-mono transition-colors"
                  >
                    {st.tag}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ═══ 3. DYNAMIC CONTENT GLASS PANEL SWAP ═══ */}
        <div className="w-full max-w-5xl mx-auto rounded-[24px] bg-white/[0.06] backdrop-blur-[24px] border border-[rgba(120,170,255,0.28)] p-6 sm:p-9 shadow-[inset_0_0_24px_rgba(22,216,232,0.08),0_15px_45px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left Column: Heading, Description, Checklist (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-3">
              <span className="font-mono text-sm font-bold text-[#16D8E8] bg-white/[0.08] px-3 py-0.5 rounded-md border border-white/10">
                STAGE {activeStage.id}
              </span>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#94A3B8]">
                {activeStage.tag}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2">
              {activeStage.headline}
            </h3>

            <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mb-6">
              {activeStage.desc}
            </p>

            <div className="space-y-2.5">
              {activeStage.details.map((item) => (
                <div key={item} className="flex items-center space-x-3 text-xs sm:text-[13px] text-white">
                  <div className="w-4 h-4 rounded-full bg-[#16D8E8]/20 flex items-center justify-center shrink-0 text-[#16D8E8]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dark Terminal Card with Typewriter & Slide-in Rows (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[18px] bg-[#020C1D] border border-[rgba(120,170,255,0.25)] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.7),inset_0_0_15px_rgba(22,216,232,0.06)] font-mono text-xs">
              
              {/* Terminal Controls Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center space-x-1.5 text-[10.5px] text-[#94A3B8]">
                  <Terminal className="w-3.5 h-3.5 text-[#16D8E8]" />
                  <span className="text-[#16D8E8]">{typedTitle}</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              {/* Status Rows Sliding in */}
              <div key={activeStage.id} className="space-y-3 animate-[fadeInRight_0.4s_ease-out]">
                {activeStage.terminalRows.map((row) => (
                  <div
                    key={row.key}
                    className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-between"
                  >
                    <span className="text-[#94A3B8] text-[11px] font-semibold">{row.key}</span>
                    <span
                      className="font-bold text-[11px]"
                      style={{ color: row.color }}
                    >
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#94A3B8]/70">
                <span>STAGE STATUS: ONLINE</span>
                <span className="text-[#10B981]">● HEALTHY</span>
              </div>
            </div>
          </div>

        </div>

        {/* ═══ 4. BOTTOM SCROLL HINT ═══ */}
        <div className="text-center text-xs tracking-widest uppercase text-[#16D8E8]/70 pb-2 flex items-center justify-center space-x-2">
          <span>Scroll to traverse timeline stages</span>
          <span className="inline-block animate-bounce">↓</span>
        </div>

      </div>
    </div>
  );
}
