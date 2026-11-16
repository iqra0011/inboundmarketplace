"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TelemetryBadgeProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  variant?: 'light' | 'navy';
  className?: string;
  reducedMotion?: boolean;
}

export default function TelemetryBadge({
  value,
  label,
  icon: Icon,
  variant = 'light',
  className = "",
  reducedMotion = false,
}: TelemetryBadgeProps) {
  const isNavy = variant === 'navy';

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`inline-flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-left select-none transition-all duration-200 ${
        isNavy
          ? 'bg-[#061B42] text-white border border-[#087BFF]/30 shadow-[0_4px_14px_rgba(6,27,66,0.18)]'
          : 'bg-white text-[#061B42] border border-[#DCE4EF] shadow-[0_2px_8px_rgba(6,27,66,0.03)]'
      } ${className}`}
    >
      {Icon && (
        <div
          className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
            isNavy
              ? 'bg-[#087BFF]/25 text-[#16D8E8]'
              : 'bg-[#087BFF]/10 text-[#087BFF]'
          }`}
        >
          <Icon className="w-3 h-3" />
        </div>
      )}

      <div className="flex flex-col min-w-0 pr-0.5">
        <span className={`text-[12px] sm:text-[12.5px] font-[800] tracking-tight leading-none ${isNavy ? 'text-white' : 'text-[#061B42]'}`}>
          {value}
        </span>
        <span className={`text-[8px] font-bold uppercase tracking-[0.14em] mt-0.5 ${isNavy ? 'text-slate-300' : 'text-[#64748B]'}`}>
          {label}
        </span>
      </div>
    </motion.div>
  );
}
