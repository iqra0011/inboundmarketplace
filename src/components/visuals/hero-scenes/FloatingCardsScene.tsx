"use client";

import React, { useEffect, useRef } from "react";
import { useHeroScene } from "../HeroScene";
import { FileText, BarChart2, ShieldCheck, Zap } from "lucide-react";

const CARDS_DATA = [
  {
    id: 1,
    title: "Marketplace Parameter Routing",
    type: "Whitepaper",
    z: 70,
    rotZ: -6,
    offsetY: -65,
    hasChart: true,
    color: "#16D8E8",
  },
  {
    id: 2,
    title: "Enterprise Buyer Playbook",
    type: "Playbook",
    z: 35,
    rotZ: 4,
    offsetY: -20,
    hasChart: false,
    color: "#087BFF",
  },
  {
    id: 3,
    title: "TCPA Verification Architecture",
    type: "Compliance",
    z: 0,
    rotZ: -3,
    offsetY: 30,
    hasChart: false,
    color: "#4334F2",
  },
  {
    id: 4,
    title: "High-Yield Media Feeds",
    type: "Publisher",
    z: -35,
    rotZ: 7,
    offsetY: 75,
    hasChart: true,
    color: "#C400FF",
  },
];

export default function FloatingCardsScene() {
  const { mouseX, mouseY, reducedMotion, isMobile } = useHeroScene();
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles drifting upward
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const size = isMobile ? 280 : 480;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const particles = Array.from({ length: isMobile ? 12 : 24 }, () => ({
      x: Math.random() * size,
      y: Math.random() * size,
      size: 1.5 + Math.random() * 2.5,
      speedY: 0.4 + Math.random() * 0.7,
      alpha: 0.15 + Math.random() * 0.4,
      rot: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      particles.forEach((p) => {
        if (!reducedMotion) {
          p.y -= p.speedY;
          p.rot += 0.02;
          if (p.y < -10) {
            p.y = size + 10;
            p.x = Math.random() * size;
          }
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = `rgba(22, 216, 232, ${p.alpha})`;
        // Mini page rectangle
        ctx.fillRect(-p.size, -p.size * 1.3, p.size * 2, p.size * 2.6);
        ctx.restore();
      });

      if (!reducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, [reducedMotion, isMobile]);

  return (
    <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] pointer-events-none select-none">
      
      {/* Background drifting page particles */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ width: "100%", height: "100%" }}
      />

      {/* 3D Stack of Glass Cards */}
      <div className="relative w-[280px] sm:w-[340px] h-[320px] flex items-center justify-center [transform-style:preserve-3d]">
        {CARDS_DATA.map((card, idx) => {
          // Spread slightly with mouse parallax
          const spreadFactor = 1 + Math.abs(mouseX) * 0.4;
          const parallaxX = mouseX * (idx + 1) * 14;
          const parallaxY = mouseY * (idx + 1) * 12;

          return (
            <div
              key={card.id}
              className="absolute w-[260px] sm:w-[310px] rounded-[18px] bg-[#061d45]/85 backdrop-blur-[20px] border border-[rgba(120,170,255,0.32)] p-4 sm:p-5 shadow-[inset_0_0_20px_rgba(22,216,232,0.1),0_18px_45px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out"
              style={{
                transform: `
                  translate3d(${parallaxX}px, ${card.offsetY * spreadFactor + parallaxY}px, ${card.z}px)
                  rotateZ(${card.rotZ + mouseX * 4}deg)
                  rotateX(${mouseY * -6}deg)
                  rotateY(${mouseX * 8}deg)
                `,
                willChange: "transform",
              }}
            >
              {/* Card Title Bar */}
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: card.color, boxShadow: `0 0 8px ${card.color}` }}
                  />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                    {card.type}
                  </span>
                </div>
                <span className="text-[9.5px] font-mono text-white/40">0{card.id} // DOC</span>
              </div>

              {/* Title */}
              <h4 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                {card.title}
              </h4>

              {/* Placeholder Content Lines */}
              <div className="space-y-1.5 mb-3">
                <div className="h-1.5 bg-white/20 rounded-full w-4/5" />
                <div className="h-1.5 bg-white/10 rounded-full w-full" />
                <div className="h-1.5 bg-white/10 rounded-full w-3/5" />
              </div>

              {/* Mini Chart Bar Preview */}
              {card.hasChart && (
                <div className="pt-2 border-t border-white/5 flex items-end space-x-1.5 h-6">
                  <div className="w-3 bg-[#087BFF] rounded-t-sm h-3" />
                  <div className="w-3 bg-[#16D8E8] rounded-t-sm h-5 shadow-[0_0_8px_#16D8E8]" />
                  <div className="w-3 bg-[#4334F2] rounded-t-sm h-4" />
                  <div className="w-3 bg-[#C400FF] rounded-t-sm h-6 shadow-[0_0_8px_#C400FF]" />
                  <span className="text-[9px] font-mono text-[#16D8E8] ml-2">99.4% Match</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
