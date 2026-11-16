"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";

interface NodePoint {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  targetRadius: number;
  targetAngle: number;
  speed: number;
  flickerOffset: number;
}

export default function NodeHubCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textOldRef = useRef<HTMLDivElement>(null);
  const textNewRef = useRef<HTMLDivElement>(null);
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = 600;
    const height = 550;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = width / 2;
    const centerY = height / 2;

    // Generate 36 scattered nodes
    const nodeCount = 36;
    const nodes: NodePoint[] = [];

    for (let i = 0; i < nodeCount; i++) {
      // Scattered positions in disjointed zones
      const startX = 60 + Math.random() * (width - 120);
      const startY = 50 + Math.random() * (height - 100);
      const targetRadius = 70 + Math.random() * 110;
      const targetAngle = (i / nodeCount) * Math.PI * 2 + Math.random() * 0.2;

      nodes.push({
        startX,
        startY,
        currentX: startX,
        currentY: startY,
        targetRadius,
        targetAngle,
        speed: 0.005 + Math.random() * 0.008,
        flickerOffset: Math.random() * Math.PI * 2,
      });
    }

    let progress = 0;
    let rotation = 0;

    // GSAP ScrollTrigger for pinned 320vh scene
    const isMobile = window.innerWidth < 768;
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: isMobile ? "+=180%" : "+=260%",
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        progress = self.progress;
        setProgressVal(self.progress);

        if (textOldRef.current && textNewRef.current) {
          if (progress < 0.45) {
            const oldAlpha = 1 - progress / 0.45;
            textOldRef.current.style.opacity = `${oldAlpha}`;
            textOldRef.current.style.transform = `translateY(${progress * -30}px)`;
            textOldRef.current.style.pointerEvents = "auto";

            textNewRef.current.style.opacity = "0";
            textNewRef.current.style.transform = "translateY(30px)";
            textNewRef.current.style.pointerEvents = "none";
          } else {
            const newAlpha = Math.min(1, (progress - 0.45) / 0.45);
            textOldRef.current.style.opacity = "0";
            textOldRef.current.style.pointerEvents = "none";

            textNewRef.current.style.opacity = `${newAlpha}`;
            textNewRef.current.style.transform = `translateY(${(1 - newAlpha) * 25}px)`;
            textNewRef.current.style.pointerEvents = "auto";
          }
        }
      },
    });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.025;
      rotation += 0.004 * (1 + progress * 1.5);

      // Color interpolation: Red (rgb 244, 63, 94) to Cyan (rgb 22, 216, 232)
      const r = Math.round(244 * (1 - progress) + 22 * progress);
      const g = Math.round(63 * (1 - progress) + 216 * progress);
      const b = Math.round(94 * (1 - progress) + 232 * progress);
      const nodeColor = `rgb(${r}, ${g}, ${b})`;

      // Center Hub Glow
      const hubRadius = 14 + progress * 24;
      const hubAlpha = 0.15 + progress * 0.75;
      const hubGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        2,
        centerX,
        centerY,
        hubRadius * 3.5
      );
      hubGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${hubAlpha})`);
      hubGlow.addColorStop(0.4, `rgba(8, 123, 255, ${hubAlpha * 0.5})`);
      hubGlow.addColorStop(1, "transparent");

      ctx.fillStyle = hubGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, hubRadius * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Center Hub Core
      ctx.fillStyle = progress > 0.6 ? "#FFFFFF" : nodeColor;
      ctx.beginPath();
      ctx.arc(centerX, centerY, hubRadius * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Position interpolation: from scattered startX/Y to orbiting hub target
        const curAngle = node.targetAngle + rotation + (i % 2 === 0 ? time * node.speed : -time * node.speed);
        const targetX = centerX + Math.cos(curAngle) * node.targetRadius;
        const targetY = centerY + Math.sin(curAngle) * node.targetRadius;

        // Disjointed jitter when progress is low
        const jitter = (1 - progress) * (Math.sin(time * 3 + node.flickerOffset) * 4);
        node.currentX = node.startX * (1 - progress) + targetX * progress + jitter;
        node.currentY = node.startY * (1 - progress) + targetY * progress + jitter;

        // Draw connecting line to hub as nodes get closer
        if (progress > 0.15) {
          const lineAlpha = (progress - 0.15) * 0.65;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(node.currentX, node.currentY);
          ctx.stroke();
        }

        // Inter-node disjointed lines when low progress (flickering red)
        if (progress < 0.45) {
          const neighbor = nodes[(i + 3) % nodes.length];
          const dist = Math.hypot(neighbor.currentX - node.currentX, neighbor.currentY - node.currentY);
          if (dist < 110) {
            const flicker = Math.sin(time * 5 + node.flickerOffset) > 0.1 ? 0.25 : 0.05;
            ctx.strokeStyle = `rgba(244, 63, 94, ${flicker * (1 - progress)})`;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(node.currentX, node.currentY);
            ctx.lineTo(neighbor.currentX, neighbor.currentY);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }

        // Draw Node
        const dotFlicker = (1 - progress) * Math.sin(time * 6 + node.flickerOffset);
        const dotAlpha = Math.max(0.3, 0.85 + dotFlicker * 0.35);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(node.currentX, node.currentY, 3 + progress * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow
        if (progress > 0.4) {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.25)`;
          ctx.beginPath();
          ctx.arc(node.currentX, node.currentY, 6 + progress * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      trigger.kill();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center bg-[#03142F] overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-40 transition-colors duration-700"
        style={{
          background:
            progressVal < 0.45
              ? "radial-gradient(circle, rgba(244, 63, 94, 0.2) 0%, rgba(8, 123, 255, 0.08) 50%, transparent 75%)"
              : "radial-gradient(circle, rgba(22, 216, 232, 0.25) 0%, rgba(8, 123, 255, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* Progress Tracker Pill */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-[rgba(120,170,255,0.25)] text-xs text-[#94A3B8]">
        <span
          className="w-2 h-2 rounded-full transition-colors duration-500"
          style={{ backgroundColor: progressVal < 0.45 ? "#F43F5E" : "#16D8E8" }}
        />
        <span className="font-mono text-[11px] uppercase tracking-wider text-white">
          {progressVal < 0.45 ? "Scroll to unify network" : "Network unified & matched"}
        </span>
        <span className="font-mono text-[11px] text-[#16D8E8] ml-2">
          {Math.round(progressVal * 100)}%
        </span>
      </div>

      <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* ═══ LEFT COLUMN: CROSS-FADING COPY ═══ */}
        <div className="relative min-h-[380px] flex items-center text-left">
          
          {/* Phase 1: Disjointed Feeds & Opaque Pricing */}
          <div
            ref={textOldRef}
            className="absolute inset-0 flex flex-col justify-center transition-all duration-300"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Old Way: Fragmented Broker Feeds</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Disjointed Feeds & <br />
              <span className="text-rose-400">Opaque Pricing</span>
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mb-6 max-w-xl">
              Buyers navigate dozens of disparate broker channels with uncertain contact data, while publishers struggle with slow payouts, low fill rates, and unpredictable yield.
            </p>

            <div className="space-y-3">
              {[
                "Unvalidated duplicate inquiries and scraped lead lists",
                "Opaque broker markups and unknown routing margins",
                "Manual spreadsheet reconciliation and disputed billings",
                "Delayed batch delivery after consumer intent has expired",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-xs sm:text-sm text-[#94A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-xs font-mono uppercase tracking-widest text-rose-400/80">
              High friction • Zero transparency • Low conversion
            </div>
          </div>

          {/* Phase 2: One High-Speed Intelligent Network */}
          <div
            ref={textNewRef}
            className="absolute inset-0 flex flex-col justify-center opacity-0 transition-all duration-300 pointer-events-none"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16D8E8]/10 border border-[#16D8E8]/30 text-[#16D8E8] text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-[0_0_15px_rgba(22,216,232,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
              <span>The Inbound Way: Unified Routing Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              One High-Speed <br />
              <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                Intelligent Network
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mb-6 max-w-xl">
              A unified real-time infrastructure connecting verified publishers with targeted buyers through automated parameter matching and sub-second CRM delivery.
            </p>

            <div className="space-y-3">
              {[
                "Multi-layer screening and duplicate suppression before matching",
                "Transparent dynamic marketplace pricing without intermediary markups",
                "Real-time CRM webhook delivery within milliseconds of submission",
                "Unified compliance auditing with cryptographic opt-in proofs",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-xs sm:text-sm text-white">
                  <div className="w-4 h-4 rounded-full bg-[#16D8E8]/20 flex items-center justify-center shrink-0 text-[#16D8E8]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-xs font-mono uppercase tracking-widest text-[#16D8E8]">
              Zero broker friction • Sub-second delivery • 100% Verified
            </div>
          </div>

        </div>

        {/* ═══ RIGHT COLUMN: 2D CANVAS ═══ */}
        <div className="flex items-center justify-center relative pointer-events-none">
          <canvas
            ref={canvasRef}
            className="w-full max-w-[560px] aspect-square relative z-10"
            style={{ width: "100%", height: "100%", maxWidth: "560px" }}
            aria-label="Node Hub Convergence Simulation"
          />
        </div>

      </div>
    </div>
  );
}
