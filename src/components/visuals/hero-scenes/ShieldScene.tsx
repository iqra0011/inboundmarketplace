"use client";

import React, { useEffect, useRef } from "react";
import { useHeroScene } from "../HeroScene";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export default function ShieldScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mouseX, mouseY, isVisible, reducedMotion, isMobile } = useHeroScene();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const size = isMobile ? 260 : 440;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;

    // Generate wireframe 3D points forming a curved security Shield outline & inner lattice
    const rawShieldCoords: [number, number, number][] = [];
    const scale = isMobile ? 70 : 120;

    // 1. Top rim points
    for (let u = -1; u <= 1; u += 0.25) {
      const x = u;
      const y = -1.2 + 0.15 * (1 - u * u);
      const z = 0.25 * (1 - u * u);
      rawShieldCoords.push([x, y, z]);
    }

    // 2. Left and Right curved flanks converging to tip (0, 1.4)
    for (let v = 0; v <= 1; v += 0.14) {
      const y = -1.0 + v * 2.4;
      const widthAtY = Math.max(0, 1 - Math.pow(v, 1.6));
      const z = 0.3 * (1 - v);

      rawShieldCoords.push([widthAtY, y, z]);
      rawShieldCoords.push([-widthAtY, y, z]);
      if (widthAtY > 0.3) {
        rawShieldCoords.push([widthAtY * 0.5, y, z * 1.2]);
        rawShieldCoords.push([-widthAtY * 0.5, y, z * 1.2]);
      }
    }

    // 3. Central spine
    for (let s = -1; s <= 1.2; s += 0.3) {
      rawShieldCoords.push([0, s, 0.4]);
    }

    const points: Point3D[] = rawShieldCoords.map(([x, y, z]) => ({
      x: x * scale,
      y: y * scale,
      z: z * scale,
    }));

    let angleY = 0;
    let angleX = 0;
    let t = 0;

    const rotatePoint = (p: Point3D, rx: number, ry: number) => {
      // Y rotation
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // X rotation
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    };

    const render = () => {
      if (!isVisible && !reducedMotion) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, size, size);
      t += 0.015;

      if (!reducedMotion) {
        // Calmer, slower rotation
        angleY += 0.006 + mouseX * 0.005;
        angleX = Math.sin(t * 0.5) * 0.12 - mouseY * 0.15;
      }

      // ═══ 1. TWO THIN SCANNING RINGS CIRCLING THE SHIELD ═══
      const scanPulse = (t % 3) / 3; // 3-second cycle
      const scanRadius1 = scale * 1.45;
      const scanRadius2 = scale * 1.15;

      // Scanning Ring 1
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(t * 0.8);
      ctx.strokeStyle = "rgba(22, 216, 232, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, scanRadius1, scanRadius1 * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Scanning pulse beacon
      const bx = Math.cos(t * 2) * scanRadius1;
      const by = Math.sin(t * 2) * scanRadius1 * 0.35;
      ctx.fillStyle = "#16D8E8";
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Scanning Ring 2 (reverse)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-t * 0.6);
      ctx.strokeStyle = "rgba(8, 123, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.ellipse(0, 0, scanRadius2, scanRadius2 * 0.45, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // ═══ 2. SUBTLE CYAN 3-SECOND RADIAL PULSE ═══
      const pulseAlpha = Math.max(0, 0.35 * (1 - scanPulse));
      const pulseSize = scale * (0.8 + scanPulse * 1.1);
      ctx.strokeStyle = `rgba(22, 216, 232, ${pulseAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.stroke();

      // ═══ 3. PROJECT WIREFRAME SHIELD POINTS ═══
      const fov = 350;
      const projected = points.map((p) => {
        const rotated = rotatePoint(p, angleX, angleY);
        const factor = fov / (fov + rotated.z);
        return {
          x: centerX + rotated.x * factor,
          y: centerY + rotated.y * factor,
          z: rotated.z,
          factor,
        };
      });

      // Draw wireframe connection lines between near points
      ctx.lineWidth = 0.85;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < scale * 0.45) {
            const depth = Math.max(0.1, (p1.z + scale) / (scale * 2));
            const alpha = depth * (1 - dist / (scale * 0.45)) * 0.45;
            ctx.strokeStyle = `rgba(22, 216, 232, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw wireframe shield dots
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depth = Math.max(0.2, (p.z + scale) / (scale * 2));
        const r = depth * 2.2;

        ctx.fillStyle = depth > 0.65 ? "#FFFFFF" : depth > 0.4 ? "#16D8E8" : "#087BFF";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (depth > 0.7) {
          ctx.fillStyle = "rgba(22, 216, 232, 0.25)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

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
        style={{ width: "100%", height: "100%", maxWidth: isMobile ? "260px" : "440px" }}
        aria-label="3D Shield Security Scene"
      />
    </div>
  );
}
