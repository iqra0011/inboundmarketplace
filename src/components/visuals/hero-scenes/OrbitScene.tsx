"use client";

import React, { useEffect, useRef } from "react";
import { useHeroScene } from "../HeroScene";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
}

export default function OrbitScene() {
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

    // Faint Starfield (40 particles)
    const starCount = isMobile ? 20 : 45;
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * size,
        y: Math.random() * size,
        size: 0.8 + Math.random() * 1.2,
        alpha: 0.15 + Math.random() * 0.45,
        speed: 0.02 + Math.random() * 0.04,
      });
    }

    // 3 Tilted Orbit Rings
    // Ring 1: Blue planet, outer, tilted -25deg
    // Ring 2: Cyan planet, middle, reverse spin, tilted 40deg
    // Ring 3: Magenta planet, inner, tilted -55deg
    const rings = [
      {
        rx: isMobile ? 95 : 180,
        ry: isMobile ? 42 : 78,
        tilt: -0.42,
        speed: 0.012,
        color: "#087BFF",
        planetRadius: isMobile ? 4.5 : 6.5,
        angle: 0,
      },
      {
        rx: isMobile ? 70 : 135,
        ry: isMobile ? 32 : 58,
        tilt: 0.65,
        speed: -0.018,
        color: "#16D8E8",
        planetRadius: isMobile ? 4 : 5.5,
        angle: Math.PI / 3,
      },
      {
        rx: isMobile ? 45 : 85,
        ry: isMobile ? 22 : 40,
        tilt: -0.92,
        speed: 0.026,
        color: "#C400FF",
        planetRadius: isMobile ? 3.5 : 5,
        angle: Math.PI,
      },
    ];

    let t = 0;

    const render = () => {
      if (!isVisible && !reducedMotion) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, size, size);
      t += 0.02;

      // ═══ 1. FAINT STARFIELD BEHIND ═══
      stars.forEach((st) => {
        if (!reducedMotion) {
          st.alpha = 0.2 + Math.sin(t * 3 * st.speed + st.x) * 0.25;
        }
        ctx.fillStyle = `rgba(120, 170, 255, ${st.alpha})`;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // ═══ 2. GLOWING CENTRAL CORE ═══
      const corePulse = 1 + Math.sin(t * 2.8) * 0.12;
      const coreRadius = (isMobile ? 18 : 28) * corePulse;

      const coreGlow = ctx.createRadialGradient(centerX, centerY, 4, centerX, centerY, coreRadius * 3.2);
      coreGlow.addColorStop(0, "rgba(8, 123, 255, 0.4)");
      coreGlow.addColorStop(0.4, "rgba(22, 216, 232, 0.2)");
      coreGlow.addColorStop(1, "transparent");

      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Core Outer Ring
      ctx.strokeStyle = "rgba(22, 216, 232, 0.45)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 1.35, 0, Math.PI * 2);
      ctx.stroke();

      // Core Solid Disc
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();

      // ═══ 3. TILTED ORBIT RINGS & PLANETS ═══
      rings.forEach((ring) => {
        if (!reducedMotion) {
          ring.angle += ring.speed;
        }

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.tilt);

        // Dashed Ellipse Ring Track
        ctx.strokeStyle = "rgba(120, 170, 255, 0.28)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Planet Position on Ellipse
        const px = Math.cos(ring.angle) * ring.rx;
        const py = Math.sin(ring.angle) * ring.ry;

        // Soft Planet Trail
        for (let tr = 1; tr <= 6; tr++) {
          const trailAngle = ring.angle - tr * ring.speed * 4;
          const tx = Math.cos(trailAngle) * ring.rx;
          const ty = Math.sin(trailAngle) * ring.ry;
          ctx.fillStyle = ring.color;
          ctx.globalAlpha = 0.4 - tr * 0.06;
          ctx.beginPath();
          ctx.arc(tx, ty, Math.max(1, ring.planetRadius * (1 - tr * 0.12)), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;

        // Planet Outer Glow
        ctx.fillStyle = ring.color;
        ctx.beginPath();
        ctx.arc(px, py, ring.planetRadius * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // Planet Solid Core
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(px, py, ring.planetRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      if (!reducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isVisible, reducedMotion, isMobile]);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ width: "100%", height: "100%", maxWidth: isMobile ? "280px" : "500px" }}
        aria-label="3D Orbit Rings Scene"
      />
    </div>
  );
}
