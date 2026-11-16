"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NetworkNodeProps {
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  variant?: 'primary' | 'capsule' | 'signal';
  className?: string;
  reducedMotion?: boolean;
}

export default function NetworkNode({
  label,
  sublabel,
  icon: Icon,
  iconColor,
  iconBg,
  variant = 'primary',
  className = "",
  reducedMotion = false,
}: NetworkNodeProps) {
  // 1. Sleek Minimal Capsule (Secondary Nodes, e.g. Financial Services)
  if (variant === 'capsule') {
    return (
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
        animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={reducedMotion ? undefined : { y: -1 }}
        className={`group relative inline-flex items-center space-x-2 px-2.5 py-1.5 bg-white border border-[#DCE4EF] hover:border-[#087BFF]/40 rounded-full shadow-[0_2px_6px_rgba(6,27,66,0.03)] hover:shadow-[0_4px_12px_rgba(8,123,255,0.08)] transition-all duration-200 select-none ${className}`}
      >
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className="w-3 h-3" style={{ color: iconColor }} />
        </div>
        <span className="text-[11px] font-semibold text-[#061B42] tracking-tight whitespace-nowrap group-hover:text-[#087BFF] transition-colors">
          {label}
        </span>
        <span className="relative flex h-1.5 w-1.5 ml-0.5">
          {!reducedMotion && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16D8E8] opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#087BFF]" />
        </span>
      </motion.div>
    );
  }

  // 2. Micro Signal Badge (Secondary Intake, e.g. Automotive)
  if (variant === 'signal') {
    return (
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
        animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={reducedMotion ? undefined : { y: -1 }}
        className={`group relative inline-flex items-center space-x-1.5 px-2.5 py-1 bg-white border border-[#DCE4EF] hover:border-[#087BFF]/35 rounded-lg shadow-[0_1px_4px_rgba(6,27,66,0.02)] transition-all duration-200 select-none ${className}`}
      >
        <div
          className="w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className="w-2.5 h-2.5" style={{ color: iconColor }} />
        </div>
        <span className="text-[10.5px] font-semibold text-[#061B42] tracking-tight whitespace-nowrap">
          {label}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF] ml-0.5 shrink-0" />
      </motion.div>
    );
  }

  // 3. Primary Compact Node (Insurance, Healthcare, Home Services)
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={reducedMotion ? undefined : { y: -1.5 }}
      className={`group relative bg-white border border-[#DCE4EF] hover:border-[#087BFF]/40 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 shadow-[0_2px_8px_rgba(6,27,66,0.03)] hover:shadow-[0_4px_14px_rgba(8,123,255,0.08)] transition-all duration-200 select-none ${className}`}
    >
      <div className="flex items-center space-x-2 sm:space-x-2.5">
        {/* Node Icon */}
        <div
          className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: iconColor }} />
        </div>

        {/* Node Labels */}
        <div className="flex flex-col text-left min-w-0 pr-1">
          <span className="text-[11.5px] sm:text-[12px] font-bold text-[#061B42] tracking-tight whitespace-nowrap group-hover:text-[#087BFF] transition-colors">
            {label}
          </span>
          {sublabel && (
            <span className="text-[9.5px] text-[#64748B] font-medium whitespace-nowrap">
              {sublabel}
            </span>
          )}
        </div>

        {/* Live Signal Indicator */}
        <div className="ml-auto pl-0.5 flex items-center shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            {!reducedMotion && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16D8E8] opacity-75" />
            )}
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#087BFF]" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
