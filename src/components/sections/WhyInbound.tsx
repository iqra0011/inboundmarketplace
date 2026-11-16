"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { WHY_US_BLOCKS } from 'src/constants';

export default function WhyInbound() {
  return (
    <section id="why-us" className="py-24 md:py-36 bg-white select-none">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Platform Core Pillars"
          title="Built for Quality. Designed for Growth."
          subtitle="How Inbound Marketplace redefines lead generation and customer acquisition through technology, speed, and integrity."
        />

        {/* Large 2x2 Editorial Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mt-12 md:mt-18">
          {WHY_US_BLOCKS.map((block, i) => {
            return (
              <motion.div
                key={block.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group flex flex-col items-start text-left border-t border-slate-200 pt-8 relative overflow-hidden"
              >
                {/* Subtle top border gradient accent on hover */}
                <div className={`absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r ${block.gradient} group-hover:w-full transition-all duration-500`} />

                <div className="flex justify-between items-baseline w-full mb-3">
                  {/* Small Label */}
                  <span className={`text-xs font-black uppercase tracking-widest bg-gradient-to-r ${block.gradient} bg-clip-text text-transparent font-sans`}>
                    {block.tag}
                  </span>
                  
                  {/* Large 64-80px Number */}
                  <span className="text-6xl sm:text-7xl lg:text-[76px] font-black text-slate-200/80 group-hover:text-[#087BFF]/20 transition-colors duration-300 select-none leading-none">
                    0{i + 1}
                  </span>
                </div>

                {/* Large Heading */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#061B42] tracking-tight mb-4 group-hover:text-[#087BFF] transition-colors duration-250 leading-tight">
                  {block.title}
                </h3>
                
                {/* Short Description */}
                <p className="text-base font-semibold text-[#334155] leading-relaxed max-w-xl">
                  {block.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
