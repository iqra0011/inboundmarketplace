"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CHART_DATA = {
  "24h": [
    { time: "00:00", match: 1420, supply: 1100, x: 20, y1: 170, y2: 210 },
    { time: "04:00", match: 980, supply: 900, x: 120, y1: 220, y2: 235 },
    { time: "08:00", match: 2840, supply: 2200, x: 240, y1: 85, y2: 120 },
    { time: "12:00", match: 3950, supply: 3100, x: 380, y1: 30, y2: 70 },
    { time: "16:00", match: 3420, supply: 2800, x: 520, y1: 55, y2: 90 },
    { time: "20:00", match: 2600, supply: 2100, x: 660, y1: 100, y2: 135 },
    { time: "23:59", match: 1850, supply: 1500, x: 780, y1: 145, y2: 180 },
  ],
  "7d": [
    { time: "Mon", match: 12400, supply: 9800, x: 20, y1: 160, y2: 195 },
    { time: "Tue", match: 16800, supply: 13400, x: 120, y1: 110, y2: 145 },
    { time: "Wed", match: 21500, supply: 17200, x: 240, y1: 65, y2: 105 },
    { time: "Thu", match: 24800, supply: 19800, x: 380, y1: 35, y2: 75 },
    { time: "Fri", match: 22100, supply: 18200, x: 520, y1: 58, y2: 90 },
    { time: "Sat", match: 14200, supply: 11500, x: 660, y1: 140, y2: 170 },
    { time: "Sun", match: 11900, supply: 9600, x: 780, y1: 175, y2: 205 },
  ],
  "30d": [
    { time: "W1", match: 68000, supply: 54000, x: 20, y1: 150, y2: 185 },
    { time: "W2", match: 89000, supply: 71000, x: 240, y1: 95, y2: 130 },
    { time: "W3", match: 112000, supply: 92000, x: 520, y1: 45, y2: 80 },
    { time: "W4", match: 128000, supply: 104000, x: 780, y1: 25, y2: 60 },
  ],
};

export default function LineGraph() {
  const [timeframe, setTimeframe] = useState<"24h" | "7d" | "30d">("7d");
  const svgRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    time: string;
    match: number;
    supply: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
    time: "",
    match: 0,
    supply: 0,
  });

  const activePoints = CHART_DATA[timeframe];

  // Build SVG smooth path strings
  const buildPath = (pts: typeof activePoints, key: "y1" | "y2") => {
    return pts.reduce((acc, curr, i) => {
      if (i === 0) return `M ${curr.x} ${curr[key]}`;
      const prev = pts[i - 1];
      const cx1 = (prev.x + curr.x) / 2;
      return `${acc} C ${cx1} ${prev[key]}, ${cx1} ${curr[key]}, ${curr.x} ${curr[key]}`;
    }, "");
  };

  const line1D = buildPath(activePoints, "y1");
  const line2D = buildPath(activePoints, "y2");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animatePaths = () => {
      [path1Ref.current, path2Ref.current].forEach((p, idx) => {
        if (!p) return;
        const length = p.getTotalLength();
        gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(p, {
          strokeDashoffset: 0,
          duration: 1.6,
          delay: idx * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 80%",
          },
        });
      });
    };

    animatePaths();
  }, [timeframe]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseSvgX = ((e.clientX - rect.left) / rect.width) * 800;

    // Find closest point
    let closest = activePoints[0];
    let minDiff = Infinity;
    activePoints.forEach((pt) => {
      const diff = Math.abs(pt.x - mouseSvgX);
      if (diff < minDiff) {
        minDiff = diff;
        closest = pt;
      }
    });

    setTooltip({
      visible: true,
      x: closest.x,
      y: closest.y1,
      time: closest.time,
      match: closest.match,
      supply: closest.supply,
    });
  };

  return (
    <div className="relative w-full rounded-[22px] bg-[#020e22]/90 border border-[rgba(120,170,255,0.28)] shadow-[inset_0_0_24px_rgba(22,216,232,0.08),0_18px_45px_rgba(0,0,0,0.5)] p-6 md:p-8 overflow-hidden">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-[#16D8E8] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
            <span>TELEMETRY METRICS</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">Matches vs. Supply Ingestion</h3>
        </div>

        {/* Legend & Timeframe Selector */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4 text-xs font-semibold text-[#94A3B8]">
            <span className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16D8E8] shadow-[0_0_8px_#16D8E8]" />
              <span className="text-white">Matches (Demand)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C400FF] shadow-[0_0_8px_#C400FF]" />
              <span className="text-white">Supply Feed</span>
            </span>
          </div>

          <div className="flex items-center p-1 rounded-xl bg-white/[0.06] border border-white/10">
            {(["24h", "7d", "30d"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                  timeframe === t
                    ? "bg-[#087BFF] text-white shadow-[0_0_12px_rgba(8,123,255,0.5)]"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative w-full aspect-[2.6/1] min-h-[260px]">
        <svg
          ref={svgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
          className="w-full h-full overflow-visible"
          viewBox="0 0 800 280"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="matchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#087BFF" />
              <stop offset="100%" stopColor="#16D8E8" />
            </linearGradient>
            <linearGradient id="supplyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4334F2" />
              <stop offset="100%" stopColor="#C400FF" />
            </linearGradient>
            <linearGradient id="matchFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#16D8E8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#087BFF" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Background horizontal grid lines */}
          <line x1="20" y1="60" x2="780" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="20" y1="120" x2="780" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="20" y1="180" x2="780" y2="180" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="20" y1="240" x2="780" y2="240" stroke="rgba(255,255,255,0.08)" />

          {/* Line 2: Supply Ingestion */}
          <path
            ref={path2Ref}
            d={line2D}
            fill="none"
            stroke="url(#supplyGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Line 1: Matches (Demand) */}
          <path
            ref={path1Ref}
            d={line1D}
            fill="none"
            stroke="url(#matchGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_12px_rgba(22,216,232,0.5)]"
          />

          {/* Vertex Glowing Dots */}
          {activePoints.map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y2} r="3" fill="#C400FF" />
              <circle cx={pt.x} cy={pt.y1} r="4.5" fill="#16D8E8" className="shadow-[0_0_10px_#16D8E8]" />
              <circle cx={pt.x} cy={pt.y1} r="2" fill="#FFFFFF" />
            </g>
          ))}

          {/* Moving Tooltip Indicator Line */}
          {tooltip.visible && (
            <g>
              <line
                x1={tooltip.x}
                y1="20"
                x2={tooltip.x}
                y2="240"
                stroke="rgba(22, 216, 232, 0.4)"
                strokeDasharray="3 3"
              />
              <circle cx={tooltip.x} cy={tooltip.y} r="7" fill="none" stroke="#16D8E8" strokeWidth="2" />
            </g>
          )}
        </svg>

        {/* Floating HTML Tooltip */}
        {tooltip.visible && (
          <div
            style={{
              left: `${(tooltip.x / 800) * 100}%`,
              top: `${Math.max(10, (tooltip.y / 280) * 100 - 32)}%`,
              transform: "translate(-50%, -100%)",
            }}
            className="absolute pointer-events-none rounded-xl bg-[#061d45]/95 border border-[rgba(120,170,255,0.4)] px-3.5 py-2 text-left shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md z-30 transition-all duration-75"
          >
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase">{tooltip.time}</div>
            <div className="text-xs font-extrabold text-[#16D8E8]">
              Matches: {tooltip.match.toLocaleString()}
            </div>
            <div className="text-[11px] font-semibold text-[#C400FF]">
              Supply: {tooltip.supply.toLocaleString()}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
