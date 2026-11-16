"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Globe, 
  DollarSign, 
  Layers, 
  CheckCircle,
  Database,
  BarChart3
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { PUBLISHER_STEPS, PUBLISHER_FEATURES } from 'src/constants';

export default function PublisherSection() {
  return (
    <section id="publishers" className="py-24 md:py-36 bg-white relative overflow-hidden select-none border-b border-slate-200/60">
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-1/4 -right-48 w-[450px] h-[450px] bg-purple-500/8 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute left-[10%] top-1/4 w-[350px] h-[350px] bg-electric-blue/8 blur-[100px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left: Publisher Dashboard Visual (True dark navy dashboard) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-[#03142F] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden w-full"
            >
              {/* Header */}
              <div className="p-4.5 border-b border-slate-800 bg-[#061B42] flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#4334F2]/20 border border-[#4334F2]/30 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-[#16D8E8]" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white">Publisher Yield Console</span>
                </div>
                <Badge variant="secondary" className="text-[10px] py-1 px-3 font-black bg-purple/20 text-white border-purple/30">
                  Active Endpoint
                </Badge>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 divide-x divide-slate-800 border-b border-slate-800 bg-[#03142F] p-5">
                <div className="flex flex-col items-start pr-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Today's Revenue</span>
                  <span className="text-2xl font-black text-[#16D8E8] tracking-tight">$12,480.00</span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-0.5" /> +18.4%
                  </span>
                </div>
                <div className="flex flex-col items-start px-5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Unique Traffic</span>
                  <span className="text-2xl font-black text-white tracking-tight">128,450</span>
                  <span className="text-[10px] font-bold text-slate-400 mt-1">
                    Search Intent
                  </span>
                </div>
                <div className="flex flex-col items-start pl-5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Yield EPC</span>
                  <span className="text-2xl font-black text-[#C400FF] tracking-tight">$2.85</span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center mt-1">
                    Optimal RPC
                  </span>
                </div>
              </div>

              {/* Top Campaigns Breakdown */}
              <div className="p-6 space-y-5 bg-[#03142F]/90">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-1">Monetization Channel Yield</span>
                
                {/* Campaign 1: Medicare Advantage */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-white font-extrabold">Healthcare (Medicare)</span>
                    <span className="text-[#16D8E8] font-black">$4,850 • EPC $4.10</span>
                  </div>
                  <div className="h-3 w-full bg-[#061B42] rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-[#087BFF] to-[#16D8E8] rounded-full"
                    />
                  </div>
                </div>

                {/* Campaign 2: HVAC Replacement */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-white font-extrabold">Home Services (HVAC)</span>
                    <span className="text-[#16D8E8] font-black">$3,920 • EPC $3.80</span>
                  </div>
                  <div className="h-3 w-full bg-[#061B42] rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#16D8E8] to-[#4334F2] rounded-full"
                    />
                  </div>
                </div>

                {/* Campaign 3: Auto Insurance */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-white font-extrabold">Insurance (Auto)</span>
                    <span className="text-[#16D8E8] font-black">$3,150 • EPC $2.20</span>
                  </div>
                  <div className="h-3 w-full bg-[#061B42] rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '55%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-[#4334F2] to-[#C400FF] rounded-full"
                    />
                  </div>
                </div>

              </div>

              {/* Console Footer */}
              <div className="p-4.5 border-t border-slate-800 bg-[#061B42] text-xs font-bold text-slate-400 flex items-center justify-between">
                <span>Net-7 Weekly Payout Pipeline</span>
                <span className="text-[#16D8E8] font-black flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse mr-1.5" />
                  API Syncing 100%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Info & Steps */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
            
            <Badge variant="secondary" className="mb-4.5 font-bold shadow-xs">
              Publishers & Media Buyers
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#061B42] leading-[1.06] mb-6">
              Turn Your Traffic Into Premium Revenue
            </h2>

            <p className="text-base sm:text-lg text-[#334155] font-semibold leading-relaxed mb-8 max-w-xl">
              Connect your search, social, and display traffic with verified campaigns. Our marketplace matches intent signals in real time to maximize your average yield per consumer click.
            </p>

            {/* Workflow steps */}
            <div className="grid grid-cols-2 gap-6 w-full mb-10">
              {PUBLISHER_STEPS.map((step, i) => (
                <div key={step.num} className="flex space-x-3 items-start group">
                  <span className="text-xs font-black text-[#4334F2] bg-[#4334F2]/10 border border-[#4334F2]/20 px-2.5 py-1 rounded-lg transition-colors group-hover:bg-[#4334F2] group-hover:text-white">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-[#061B42] mb-1">{step.title}</h4>
                    <p className="text-xs font-semibold text-[#334155] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Highlights */}
            <div className="border-t border-slate-200 pt-6 w-full mb-8">
              <div className="grid grid-cols-2 gap-4">
                {PUBLISHER_FEATURES.map((feat) => (
                  <div key={feat.title} className="flex items-center space-x-2.5 text-xs font-extrabold text-[#334155]">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button href="#publishers" variant="secondary" size="lg" className="group font-black shadow-xl shadow-[#061B42]/20">
              <span>Become a Publisher</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}
