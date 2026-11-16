"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* Floating intent signal data fragments */
const INTENT_SIGNALS = [
  { id: 'auto',   label: "AUTO INSURANCE",  sub: "Dallas, TX",  status: "High Intent", left: 68, top: 14 },
  { id: 'roof',   label: "ROOF REPAIR",     sub: "Houston, TX", status: "Verified",     left: 80, top: 36 },
  { id: 'health', label: "HEALTH COVERAGE", sub: "Phoenix, AZ", status: "Active",       left: 71, top: 60 },
  { id: 'legal',  label: "LEGAL INQUIRY",   sub: "Austin, TX",  status: "Qualified",    left: 84, top: 76 },
];

export default function IntentNetwork() {
  const rm = !!useReducedMotion();

  return (
    <div className="w-full h-full relative">

      {/* ═══════════════════════════════════════════════
          SVG Signal Path Network — spans full viewport
          ═══════════════════════════════════════════════ */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 820"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hn-sig-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#087BFF" stopOpacity="0" />
            <stop offset="25%" stopColor="#087BFF" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#16D8E8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#5B2EFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hn-sig-b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5B2EFF" stopOpacity="0" />
            <stop offset="35%" stopColor="#C400FF" stopOpacity="0.12" />
            <stop offset="75%" stopColor="#087BFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#16D8E8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hn-sig-c" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#16D8E8" stopOpacity="0" />
            <stop offset="50%" stopColor="#087BFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#5B2EFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hn-sig-d" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#087BFF" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#16D8E8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#087BFF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hn-node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#087BFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#087BFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hn-node-glow-cyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16D8E8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#16D8E8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Primary horizontal flowing curves */}
        <motion.path
          d="M 1440,180 C 1200,150 1020,310 800,380 S 520,270 320,340 Q 160,400 0,370"
          stroke="url(#hn-sig-a)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          initial={{ pathOffset: 0 }}
          animate={rm ? {} : { pathOffset: 1 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1440,420 C 1260,370 1070,510 860,460 S 650,550 440,490 Q 240,430 0,510"
          stroke="url(#hn-sig-b)"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          initial={{ pathOffset: 0 }}
          animate={rm ? {} : { pathOffset: -1 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1440,630 C 1310,580 1120,710 920,650 S 710,730 510,670 Q 310,610 0,660"
          stroke="url(#hn-sig-c)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathOffset: 0 }}
          animate={rm ? {} : { pathOffset: 1 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />

        {/* Converging curves toward central hub */}
        <motion.path
          d="M 1300,60 C 1200,180 1050,300 840,390"
          stroke="url(#hn-sig-d)"
          strokeWidth="1"
          strokeDasharray="5 7"
          initial={{ pathOffset: 0 }}
          animate={rm ? {} : { pathOffset: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1380,780 C 1250,680 1050,520 840,420"
          stroke="url(#hn-sig-d)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          initial={{ pathOffset: 0 }}
          animate={rm ? {} : { pathOffset: -1 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 840,400 C 700,440 500,530 350,700"
          stroke="url(#hn-sig-a)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          initial={{ pathOffset: 0 }}
          animate={rm ? {} : { pathOffset: 1 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        {/* Node glow circles at path intersections */}
        <circle cx="840" cy="400" r="50" fill="url(#hn-node-glow)" opacity="0.6" />
        <circle cx="1050" cy="310" r="25" fill="url(#hn-node-glow)" opacity="0.3" />
        <circle cx="650" cy="500" r="20" fill="url(#hn-node-glow-cyan)" opacity="0.25" />
        <circle cx="1200" cy="200" r="15" fill="url(#hn-node-glow)" opacity="0.2" />
        <circle cx="440" cy="490" r="15" fill="url(#hn-node-glow-cyan)" opacity="0.2" />

        {/* Solid node dots */}
        <circle cx="840" cy="400" r="5" fill="#087BFF" opacity="0.9">
          {!rm && <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />}
        </circle>
        <circle cx="1050" cy="310" r="3" fill="#16D8E8" opacity="0.7" />
        <circle cx="650" cy="500" r="3" fill="#5B2EFF" opacity="0.6" />
        <circle cx="1200" cy="200" r="2.5" fill="#087BFF" opacity="0.5" />
        <circle cx="440" cy="490" r="2.5" fill="#16D8E8" opacity="0.5" />
        <circle cx="320" cy="340" r="2" fill="#087BFF" opacity="0.35" />
        <circle cx="1260" cy="370" r="2" fill="#C400FF" opacity="0.35" />
      </svg>

      {/* ═══════════════════════════════════════════════
          Floating Intent Signal Fragments (Desktop only)
          ═══════════════════════════════════════════════ */}
      {INTENT_SIGNALS.map((sig, i) => (
        <motion.div
          key={sig.id}
          className="absolute hidden lg:block pointer-events-none"
          style={{ left: `${sig.left}%`, top: `${sig.top}%` }}
          initial={rm ? { opacity: 0.8 } : { opacity: 0, y: 10 }}
          animate={rm ? { opacity: 0.8 } : { opacity: 0.8, y: 0 }}
          transition={{ delay: 0.6 + i * 0.25, duration: 0.7 }}
        >
          <div className="bg-[#061B42]/85 backdrop-blur-md border border-[#087BFF]/15 rounded-lg px-3.5 py-2 shadow-xl shadow-[#061B42]/20">
            <div className="flex items-center space-x-2 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16D8E8] shadow-[0_0_6px_rgba(22,216,232,0.6)]" />
              <span className="text-[9px] font-mono font-bold text-white/90 tracking-[0.08em]">{sig.label}</span>
            </div>
            <div className="flex items-center space-x-2 text-[8px] text-slate-400 pl-3.5">
              <span>{sig.sub}</span>
              <span className="text-emerald-400 font-bold">{sig.status}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* ═══════════════════════════════════════════════
          Central Marketplace Intelligence Node (Desktop)
          ═══════════════════════════════════════════════ */}
      <motion.div
        className="absolute hidden lg:block pointer-events-none"
        style={{ left: '56%', top: '48%', transform: 'translate(-50%, -50%)' }}
        initial={rm ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
        animate={rm ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-[#087BFF]/10 via-[#16D8E8]/6 to-[#5B2EFF]/5 blur-2xl" />
        
        <div className="relative bg-[#061B42]/95 backdrop-blur-xl border border-[#087BFF]/20 rounded-2xl p-4 shadow-2xl shadow-[#061B42]/50 min-w-[190px]">
          
          {/* Header */}
          <div className="flex items-center space-x-2.5 mb-3 pb-2.5 border-b border-slate-700/50">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#087BFF] via-[#16D8E8] to-[#5B2EFF] p-[1px] shrink-0">
              <div className="w-full h-full bg-[#061B42] rounded-[7px] flex items-center justify-center text-white text-[8px] font-black">IM</div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-[#16D8E8] uppercase tracking-[0.15em]">MATCHING ENGINE</span>
              <span className="text-[7.5px] text-slate-400">Real-Time Intelligence</span>
            </div>
          </div>
          
          {/* Live telemetry rows */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[8.5px] px-2 py-1 bg-[#03142F]/80 rounded-md">
              <span className="text-slate-400">Signal Match</span>
              <span className="text-emerald-400 font-bold font-mono">94%</span>
            </div>
            <div className="flex items-center justify-between text-[8.5px] px-2 py-1 bg-[#03142F]/80 rounded-md">
              <span className="text-slate-400">Active Routes</span>
              <span className="text-[#16D8E8] font-bold font-mono">Live</span>
            </div>
            <div className="flex items-center justify-between text-[8.5px] px-2 py-1 bg-[#03142F]/80 rounded-md">
              <span className="text-slate-400">Verification</span>
              <span className="text-[#087BFF] font-bold font-mono">Passed</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════
          Outgoing buyer route indicators (Desktop)
          ═══════════════════════════════════════════════ */}
      <motion.div
        className="absolute hidden xl:block pointer-events-none"
        style={{ left: '42%', top: '72%' }}
        initial={rm ? { opacity: 0.7 } : { opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/15 rounded-md px-2.5 py-1 shadow-lg">
          <div className="flex items-center space-x-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] font-bold text-emerald-400 tracking-wider">BUYER MATCHED</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute hidden xl:block pointer-events-none"
        style={{ left: '62%', top: '84%' }}
        initial={rm ? { opacity: 0.6 } : { opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.7, duration: 0.6 }}
      >
        <div className="bg-[#087BFF]/10 backdrop-blur-sm border border-[#087BFF]/15 rounded-md px-2.5 py-1 shadow-lg">
          <div className="flex items-center space-x-1.5">
            <span className="w-1 h-1 rounded-full bg-[#087BFF]" />
            <span className="text-[8px] font-bold text-[#087BFF] tracking-wider">ROUTE ACTIVE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
