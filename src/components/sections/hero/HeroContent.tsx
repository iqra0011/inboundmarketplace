"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function HeroContent() {
  const shouldReduceMotion = !!useReducedMotion();

  const fade = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className="flex flex-col items-start text-left w-full">

      {/* System Eyebrow */}
      <motion.div {...fade(0)} className="mb-5 sm:mb-6">
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm border border-[#DCE4EF] rounded-full shadow-[0_1px_3px_rgba(6,27,66,0.04)]">
          <span className="relative flex h-2 w-2">
            {!shouldReduceMotion && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16D8E8] opacity-75" />
            )}
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#087BFF]" />
          </span>
          <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#061B42]">
            THE INBOUND LEAD MARKETPLACE
          </span>
        </div>
      </motion.div>

      {/* Oversized Editorial Headline */}
      <motion.h1
        {...fade(0.08)}
        className="text-[46px] sm:text-[58px] md:text-[66px] lg:text-[76px] xl:text-[84px] font-[800] tracking-[-0.045em] leading-[0.9] mb-6 sm:mb-7"
      >
        <span className="block text-[#061B42]">WHERE</span>
        <span className="block bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#5B2EFF] bg-clip-text text-transparent">
          INTENT
        </span>
        <span className="block text-[#061B42]">BECOMES</span>
        <span className="block bg-gradient-to-r from-[#5B2EFF] via-[#4334F2] to-[#C400FF] bg-clip-text text-transparent">
          REVENUE.
        </span>
      </motion.h1>

      {/* Supporting Copy */}
      <motion.p
        {...fade(0.16)}
        className="text-[15px] sm:text-[17px] text-[#475569] font-medium max-w-[460px] leading-[1.65] mb-8 sm:mb-9"
      >
        Turn consumer intent into qualified opportunities through verification, intelligent matching, and real-time delivery.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        {...fade(0.24)}
        className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-8 sm:mb-9"
      >
        <Link
          href="#marketplace"
          className="inline-flex items-center justify-center px-7 h-[50px] text-[14px] font-bold text-white bg-[#087BFF] hover:bg-[#006CE6] rounded-xl shadow-[0_2px_10px_rgba(8,123,255,0.25)] hover:shadow-[0_6px_24px_rgba(8,123,255,0.35)] active:scale-[0.985] transition-all duration-200 group"
        >
          <span>Explore the Marketplace</span>
          <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        <Link
          href="#publishers"
          className="inline-flex items-center justify-center px-7 h-[50px] text-[14px] font-semibold text-[#061B42] bg-white hover:bg-[#F8FAFC] border border-[#DCE4EF] hover:border-[#CBD5E1] rounded-xl shadow-[0_1px_3px_rgba(6,27,66,0.04)] active:scale-[0.985] transition-all duration-200"
        >
          For Publishers
        </Link>
      </motion.div>

      {/* Platform Capabilities */}
      <motion.div
        {...fade(0.32)}
        className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11.5px] font-semibold text-[#64748B]"
      >
        <span className="flex items-center space-x-1.5">
          <Check className="w-3.5 h-3.5 text-[#087BFF] stroke-[2.5] shrink-0" />
          <span>Consent Verification</span>
        </span>
        <span className="text-[#CBD5E1] hidden sm:inline">•</span>
        <span className="flex items-center space-x-1.5">
          <Check className="w-3.5 h-3.5 text-[#16D8E8] stroke-[2.5] shrink-0" />
          <span>Real-Time Routing</span>
        </span>
        <span className="text-[#CBD5E1] hidden sm:inline">•</span>
        <span className="flex items-center space-x-1.5">
          <Check className="w-3.5 h-3.5 text-[#5B2EFF] stroke-[2.5] shrink-0" />
          <span>Intelligent Matching</span>
        </span>
      </motion.div>
    </div>
  );
}
