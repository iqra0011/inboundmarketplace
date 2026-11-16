"use client";

import React from "react";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  tag: string;
  featured?: boolean;
}

export default function HangingArticles({ articles }: { articles: ArticleItem[] }) {
  return (
    <div className="relative w-full">
      {/* ═══ GLOWING ANIMATED RAIL ═══ */}
      <div className="relative w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#16D8E8] to-transparent shadow-[0_0_18px_#16D8E8] animate-rail-glow mb-4" />

      {/* Hanging Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-3">
        {articles.map((res, index) => {
          // Stagger sway delays
          const delay = (index * -1.1) % 4.5;

          return (
            <div key={res.id} className="flex flex-col items-center group">
              {/* Dashed Suspension String with Pin Dot */}
              <div className="relative flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16D8E8] shadow-[0_0_8px_#16D8E8] block z-10" />
                <div className="w-[1.5px] h-6 border-l border-dashed border-[#16D8E8]/50" />
              </div>

              {/* Swaying Glass Card with Hover Color Fill */}
              <div
                style={{ animationDelay: `${delay}s` }}
                className="swaying-card w-full rounded-[22px] bg-white/[0.06] backdrop-blur-[20px] border border-[rgba(120,170,255,0.28)] p-7 text-left shadow-[inset_0_0_20px_rgba(22,216,232,0.06),0_12px_36px_rgba(0,0,0,0.45)] group-hover:bg-[#061d45]/90 group-hover:border-[#16D8E8] group-hover:shadow-[inset_0_0_30px_rgba(22,216,232,0.2),0_18px_45px_rgba(8,123,255,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#16D8E8] bg-white/[0.08] px-2.5 py-1 rounded-md border border-white/10">
                      {res.category}
                    </span>
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#94A3B8]">
                      <Clock className="w-3.5 h-3.5 text-[#087BFF]" />
                      <span>{res.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#16D8E8] transition-colors leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#94A3B8] font-light leading-relaxed mb-6">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#16D8E8] uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>Explore Research</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
