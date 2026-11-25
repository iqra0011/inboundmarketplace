"use client";

import React, { useEffect, useRef } from "react";
import { useHeroScene } from "../HeroScene";

interface SignalRipple {
  r: number;
  maxR: number;
  alpha: number;
}

export default function SignalScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mouseX, mouseY, isVisible, reducedMotion, isMobile } = useHeroScene();

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

    // 3 Communication Nodes
    const nodes = [
      { x: centerX - 120, y: centerY + 60, label: "INQUIRY", color: "#087BFF" },
      { x: centerX, y: centerY - 90, label: "ROUTER", color: "#16D8E8" },
      { x: centerX + 120, y: centerY + 70, label: "RECEIVER", color: "#C400FF" },
    ];

    // Receiver node is node 2
    const receiverX = nodes[2].x;
    const receiverY = nodes[2].y;

    // Concentric signal ripples
    const ripples: SignalRipple[] = [
      { r: 10, maxR: 70, alpha: 0.8 },
      { r: 30, maxR: 70, alpha: 0.5 },
      { r: 50, maxR: 70, alpha: 0.2 },
    ];

    let t = 0;
    const trailPoints: { x: number; y: number }[] = [];

    const render = () => {
      if (!isVisible && !reducedMotion) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, size, size);
      t += 0.022;

      // ═══ 1. CONNECTION LINES BETWEEN 3 NODES ═══
      ctx.strokeStyle = "rgba(120, 170, 255, 0.18)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      ctx.lineTo(nodes[1].x, nodes[1].y);
      ctx.lineTo(nodes[2].x, nodes[2].y);
      ctx.lineTo(nodes[0].x, nodes[0].y);
      ctx.stroke();
      ctx.setLineDash([]);

      // ═══ 2. CONCENTRIC SIGNAL RIPPLES ON RECEIVER ═══
      ripples.forEach((rp) => {
        if (!reducedMotion) {
          rp.r += 0.55;
          if (rp.r > rp.maxR) {
            rp.r = 10;
          }
          rp.alpha = Math.max(0, 0.7 * (1 - rp.r / rp.maxR));
        }

        ctx.strokeStyle = `rgba(196, 0, 255, ${rp.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(receiverX, receiverY, rp.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // ═══ 3. DRAW 3 COMMUNICATION NODES ═══
      nodes.forEach((nd, i) => {
        // Outer disc
        ctx.strokeStyle = `rgba(120, 170, 255, 0.35)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 14, 0, Math.PI * 2);
        ctx.stroke();

        // Inner solid
        ctx.fillStyle = nd.color;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.fillStyle = `${nd.color}33`;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 12, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = "#94A3B8";
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "center";
        ctx.fillText(nd.label, nd.x, nd.y + 24);
      });

      // ═══ 4. MESSAGE PACKET HOPPING BETWEEN NODES ═══
      if (!reducedMotion) {
        const hopProgress = (t * 0.8) % 3;
        const currentSegment = Math.floor(hopProgress);
        const segT = hopProgress - currentSegment;

        const fromNode = nodes[currentSegment];
        const toNode = nodes[(currentSegment + 1) % 3];

        const hopX = fromNode.x + (toNode.x - fromNode.x) * segT;
        const hopY = fromNode.y + (toNode.y - fromNode.y) * segT;

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(hopX, hopY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(22, 216, 232, 0.4)";
        ctx.beginPath();
        ctx.arc(hopX, hopY, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // ═══ 5. LOOPING FLYING PAPER PLANE WITH FADING GRADIENT TRAIL ═══
      // Figure-8 (Lissajous) looping flight path
      const flightRadiusX = isMobile ? 85 : 155;
      const flightRadiusY = isMobile ? 45 : 85;

      const mouseInfluenceX = mouseX * 28;
      const mouseInfluenceY = mouseY * 22;

      const px = centerX + Math.sin(t) * flightRadiusX + mouseInfluenceX;
      const py = centerY + Math.sin(t * 2) * flightRadiusY * 0.65 + mouseInfluenceY;

      // Plane orientation angle (tangent)
      const dx = Math.cos(t) * flightRadiusX;
      const dy = 2 * Math.cos(t * 2) * flightRadiusY * 0.65;
      const planeAngle = Math.atan2(dy, dx);

      // Record trail points
      if (!reducedMotion) {
        trailPoints.push({ x: px, y: py });
        if (trailPoints.length > 28) {
          trailPoints.shift();
        }
      }

      // Draw Gradient Trail
      for (let i = 1; i < trailPoints.length; i++) {
        const p1 = trailPoints[i - 1];
        const p2 = trailPoints[i];
        const alpha = (i / trailPoints.length) * 0.55;

        ctx.strokeStyle = `rgba(22, 216, 232, ${alpha})`;
        ctx.lineWidth = Math.max(1, (i / trailPoints.length) * 3);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // Draw Flying Paper Plane SVG representation
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(planeAngle);

      // Plane drop-shadow glow
      ctx.shadowColor = "#16D8E8";
      ctx.shadowBlur = 14;

      // Plane geometry
      ctx.fillStyle = "#16D8E8";
      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(-12, -9);
      ctx.lineTo(-6, 0);
      ctx.lineTo(-12, 9);
      ctx.closePath();
      ctx.fill();

      // Top wing highlight
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(-6, 0);
      ctx.lineTo(-12, -9);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      if (!reducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isVisible, reducedMotion, isMobile, mouseX, mouseY]);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ width: "100%", height: "100%", maxWidth: isMobile ? "280px" : "500px" }}
        aria-label="Signal Communication Hero Scene"
      />
    </div>
  );
}
