"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  BarChart3, 
  Sliders, 
  LineChart, 
  ArrowRight,
  TrendingUp,
  Percent
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { BUYER_FEATURES } from 'src/constants';

export default function BuyerSection() {
  return (
    <section id="buyers" className="py-24 md:py-36 bg-[#F7F9FC] relative overflow-hidden select-none">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/3 -left-48 w-[450px] h-[450px] bg-electric-blue/8 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute right-[15%] top-[10%] w-[350px] h-[350px] bg-purple-500/8 blur-[100px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left: Info & Features List */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            <Badge variant="primary" className="mb-4.5 font-bold shadow-xs">
              Lead Buyers & Brands
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#061B42] leading-[1.06] mb-6">
              Turn Better Leads Into Better Customers
            </h2>

            <p className="text-base sm:text-lg text-[#334155] font-semibold leading-relaxed mb-8 max-w-xl">
              Access high-intent consumer opportunities matched precisely to your business vertical, geography, budget, and campaign goals. Scaled acquisition without the premium markups.
            </p>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 w-full mb-10">
              {BUYER_FEATURES.map((feat, i) => {
                const IconComp = feat.icon;
                return (
                  <div key={feat.title} className="flex space-x-3.5 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-250 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#087BFF] group-hover:border-[#087BFF] transition-all duration-250 shadow-xs">
                      <IconComp className="w-5 h-5 text-[#087BFF] group-hover:text-white transition-colors duration-250" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-[#061B42] mb-1">{feat.title}</h3>
                      <p className="text-xs font-semibold text-[#334155] leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button href="#marketplace" variant="primary" size="lg" className="group font-black shadow-xl shadow-[#087BFF]/25">
              <span>Start Buying Leads</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

          </div>

          {/* Right: Premium Buyer Dashboard Visual */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-slate-250 rounded-2xl shadow-xl shadow-slate-250/40 overflow-hidden w-full"
            >
              {/* Dashboard Header */}
              <div className="p-4.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                    <LineChart className="w-4 h-4 text-electric-blue" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#061B42]">Buyer Acquisition Console</span>
                </div>
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-b border-slate-200 bg-white p-5">
                <div className="flex flex-col items-start pr-2">
                  <span className="text-[10px] font-black text-[#64748B] uppercase tracking-wider mb-1">Leads Acquired</span>
                  <span className="text-2xl font-black text-[#061B42]">1,842</span>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-0.5" /> +18.4%
                  </span>
                </div>
                <div className="flex flex-col items-start px-5">
                  <span className="text-[10px] font-black text-[#64748B] uppercase tracking-wider mb-1">Conversion Rate</span>
                  <span className="text-2xl font-black text-[#061B42]">24.8%</span>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center mt-1">
                    <Percent className="w-3 h-3 mr-0.5 text-emerald-600" /> Max SLA
                  </span>
                </div>
                <div className="flex flex-col items-start pl-5">
                  <span className="text-[10px] font-black text-[#64748B] uppercase tracking-wider mb-1">Avg Cost / Lead</span>
                  <span className="text-2xl font-black text-[#087BFF]">$34.50</span>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center mt-1">
                    Verified
                  </span>
                </div>
              </div>

              {/* Chart Body */}
              <div className="p-6 bg-white relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase tracking-wider text-[#334155]">Acquisition Velocity (Leads / Day)</span>
                  <div className="flex space-x-4 text-[10px] font-black text-[#334155]">
                    <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-[#087BFF] mr-1.5" /> Leads</span>
                    <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-[#16D8E8] mr-1.5" /> Conversions</span>
                  </div>
                </div>

                {/* SVG Line Chart */}
                <div className="h-48 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="400" y2="30" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke="#e2e8f0" strokeWidth="1" />
                    
                    {/* Path 1: Leads */}
                    <motion.path
                      d="M0,120 Q50,70 100,85 T200,40 T300,55 T400,20"
                      fill="none"
                      stroke="#087BFF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    
                    {/* Path 2: Conversions */}
                    <motion.path
                      d="M0,135 Q50,110 100,120 T200,90 T300,105 T400,85"
                      fill="none"
                      stroke="#16D8E8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />

                    {/* Gradient background under path */}
                    <path
                      d="M0,120 Q50,70 100,85 T200,40 T300,55 T400,20 L400,150 L0,150 Z"
                      fill="url(#buyer-lead-grad)"
                      opacity="0.06"
                    />

                    <defs>
                      <linearGradient id="buyer-lead-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#087BFF" />
                        <stop offset="100%" stopColor="#087BFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Floating active point */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-[38px] left-[50%] -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="absolute w-7 h-7 rounded-full bg-[#087BFF]/25 animate-ping" />
                    <span className="absolute w-3.5 h-3.5 rounded-full bg-[#087BFF] border-2 border-white shadow-md shadow-[#087BFF]/40" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#061B42] text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-xl flex flex-col items-center whitespace-nowrap z-10 border border-slate-700">
                      <span>72 leads</span>
                      <span className="text-[8px] text-[#16D8E8]">CPL $31.00</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Breakdown Bar */}
              <div className="p-4.5 border-t border-slate-200 bg-slate-50 text-xs font-bold text-[#334155] flex items-center justify-between">
                <span>Direct CRM Route (Webhook API)</span>
                <span className="text-emerald-600 font-extrabold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                  Connected & Verified
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
