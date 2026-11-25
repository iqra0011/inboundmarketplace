"use client";

import React, { useEffect, useRef, useState } from "react";
import { useHeroScene } from "../HeroScene";

interface PipelineNode {
  name: string;
  angle: number;
  x: number;
  y: number;
  color: string;
  flash: number; // 0 to 1
}

interface Packet {
  progress: number; // 0 to 6
  speed: number;
  color: string;
}

const NODES_CONFIG = [
  { name: "INTENT", color: "#087BFF" },
  { name: "GENERATE", color: "#16D8E8" },
  { name: "VERIFY", color: "#4334F2" },
  { name: "ROUTE", color: "#C400FF" },
  { name: "MATCH", color: "#087BFF" },
  { name: "DELIVER", color: "#16D8E8" },
];

export default function PipelineScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mouseX, mouseY, isVisible, reducedMotion, isMobile } = useHeroScene();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const size = isMobile ? 280 : 500;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const circuitRadius = isMobile ? 85 : 160;

    // 6 Nodes
    const nodes: PipelineNode[] = NODES_CONFIG.map((cfg, i) => {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
      return {
        name: cfg.name,
        angle,
        x: centerX + Math.cos(angle) * circuitRadius,
        y: centerY + Math.sin(angle) * circuitRadius,
        color: cfg.color,
        flash: 0,
      };
    });

    // 3 Travelling Packets
    const packets: Packet[] = [
      { progress: 0.1, speed: 0.009, color: "#16D8E8" },
      { progress: 2.1, speed: 0.009, color: "#087BFF" },
      { progress: 4.1, speed: 0.009, color: "#C400FF" },
    ];

    let t = 0;
    let tickRotation = 0;

    const render = () => {
      if (!isVisible && !reducedMotion) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, size, size);
      t += 0.02;
      tickRotation += 0.002;

      // ═══ 1. ROTATING TICK MARKS RING ═══
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(tickRotation);
      ctx.strokeStyle = "rgba(120, 170, 255, 0.18)";
      ctx.lineWidth = 1;
      const numTicks = 48;
      const tickOuter = circuitRadius + 32;
      const tickInner = circuitRadius + 22;

      for (let i = 0; i < numTicks; i++) {
        const rad = (i / numTicks) * Math.PI * 2;
        const x1 = Math.cos(rad) * tickInner;
        const y1 = Math.sin(rad) * tickInner;
        const x2 = Math.cos(rad) * tickOuter;
        const y2 = Math.sin(rad) * tickOuter;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();

      // ═══ 2. BASE CIRCUITAL GLOW TRACK ═══
      ctx.strokeStyle = "rgba(120, 170, 255, 0.22)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, circuitRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Ambient Core Pulse
      const corePulse = 1 + Math.sin(t * 2.5) * 0.1;
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, circuitRadius * 0.85);
      coreGrad.addColorStop(0, "rgba(8, 123, 255, 0.16)");
      coreGrad.addColorStop(0.5, "rgba(22, 216, 232, 0.08)");
      coreGrad.addColorStop(1, "transparent");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, circuitRadius * 0.85 * corePulse, 0, Math.PI * 2);
      ctx.fill();

      // ═══ 3. PACKETS TRAVELING ALONG PATH ═══
      packets.forEach((pkt) => {
        if (!reducedMotion && !hoveredNode) {
          pkt.progress = (pkt.progress + pkt.speed) % 6;
        }

        const angle = (pkt.progress / 6) * Math.PI * 2 - Math.PI / 2;
        const px = centerX + Math.cos(angle) * circuitRadius;
        const py = centerY + Math.sin(angle) * circuitRadius;

        // Packet Trail
        for (let tr = 1; tr <= 5; tr++) {
          const trailAngle = angle - tr * 0.045;
          const tx = centerX + Math.cos(trailAngle) * circuitRadius;
          const ty = centerY + Math.sin(trailAngle) * circuitRadius;
          ctx.fillStyle = `rgba(22, 216, 232, ${0.45 - tr * 0.08})`;
          ctx.beginPath();
          ctx.arc(tx, ty, Math.max(1, 3.5 - tr * 0.5), 0, Math.PI * 2);
          ctx.fill();
        }

        // Packet Head
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Packet Glow
        ctx.fillStyle = "rgba(22, 216, 232, 0.4)";
        ctx.beginPath();
        ctx.arc(px, py, 10, 0, Math.PI * 2);
        ctx.fill();

        // Check proximity to trigger node flash
        nodes.forEach((nd) => {
          const dist = Math.hypot(nd.x - px, nd.y - py);
          if (dist < 18) {
            nd.flash = 1;
          }
        });
      });

      // ═══ 4. SIX STAGE NODES ═══
      nodes.forEach((nd) => {
        // Decay flash
        nd.flash = Math.max(0, nd.flash - 0.04);
        const nodeScale = 1 + nd.flash * 0.45;
        const isHovered = hoveredNode === nd.name;

        // Outer Ring
        ctx.strokeStyle = isHovered ? "#FFFFFF" : nd.flash > 0.1 ? "#16D8E8" : "rgba(120, 170, 255, 0.45)";
        ctx.lineWidth = isHovered ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, (isMobile ? 12 : 18) * nodeScale, 0, Math.PI * 2);
        ctx.stroke();

        // Outer Flash Ring
        if (nd.flash > 0.05) {
          ctx.strokeStyle = `rgba(22, 216, 232, ${nd.flash * 0.6})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(nd.x, nd.y, (isMobile ? 18 : 28) * (1 + (1 - nd.flash)), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Inner Node Fill
        ctx.fillStyle = nd.flash > 0.3 ? "#FFFFFF" : isHovered ? "#16D8E8" : "#061d45";
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, isMobile ? 8 : 11, 0, Math.PI * 2);
        ctx.fill();

        // Node Label
        ctx.fillStyle = isHovered ? "#16D8E8" : nd.flash > 0.2 ? "#FFFFFF" : "#94A3B8";
        ctx.font = `bold ${isMobile ? "9px" : "11px"} monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const textRadius = circuitRadius + (isMobile ? 24 : 36);
        const tx = centerX + Math.cos(nd.angle) * textRadius;
        const ty = centerY + Math.sin(nd.angle) * textRadius;
        ctx.fillText(nd.name, tx, ty);
      });

      if (!reducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isVisible, reducedMotion, isMobile, hoveredNode]);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ width: "100%", height: "100%", maxWidth: isMobile ? "280px" : "500px" }}
        aria-label="Live Pipeline Animation"
      />
    </div>
  );
}
