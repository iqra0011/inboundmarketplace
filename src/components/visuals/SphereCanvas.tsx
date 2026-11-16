"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  isMagenta?: boolean;
}

export default function SphereCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Resize canvas with pixel ratio
    const width = 560;
    const height = 560;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Generate 3D sphere points (Fibonacci sphere distribution)
    const numPoints = 175;
    const baseRadius = 175;
    let currentRadius = baseRadius;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * baseRadius,
        y: y * baseRadius,
        z: z * baseRadius,
        baseX: x * baseRadius,
        baseY: y * baseRadius,
        baseZ: z * baseRadius,
        isMagenta: i % 14 === 0,
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;
    let targetAngleX = 0.003;
    let targetAngleY = 0.005;

    // Mouse reaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const mouseY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      targetAngleX = mouseY * 0.015;
      targetAngleY = mouseX * 0.02;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Grows slightly with scroll up to +25px
      const addedRadius = Math.min(25, (scrollY / 400) * 25);
      currentRadius = baseRadius + addedRadius;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Rotate a 3D point around X, Y, Z
    function rotatePoint(p: Point3D, rotX: number, rotY: number) {
      // Rotation around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = p.y * cosX - p.z * sinX;
      const z1 = p.z * cosX + p.y * sinX;

      // Rotation around Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x2 = p.x * cosY + z1 * sinY;
      const z2 = z1 * cosY - p.x * sinY;

      p.x = x2;
      p.y = y1;
      p.z = z2;
    }

    // Render loop
    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Lerp rotation angles towards target
      if (!reducedMotion) {
        angleX += (targetAngleX - angleX) * 0.06;
        angleY += (targetAngleY - angleY) * 0.06;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 400;

      // Update and project points with currentRadius scaling
      const radiusScale = currentRadius / baseRadius;
      const projected = points.map((p) => {
        if (!reducedMotion) {
          rotatePoint(p, angleX, angleY);
        }
        const scaledX = p.x * radiusScale;
        const scaledY = p.y * radiusScale;
        const scaledZ = p.z * radiusScale;

        const scale = fov / (fov + scaledZ);
        return {
          x: centerX + scaledX * scale,
          y: centerY + scaledY * scale,
          z: scaledZ,
          scale,
          isMagenta: p.isMagenta,
        };
      });

      // Draw wireframe connecting lines for nearby points
      ctx.lineWidth = 0.85;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 46) {
            // Calculate alpha based on depth and distance
            const depthAlpha = Math.max(0.04, (p1.z + currentRadius) / (currentRadius * 2));
            const distAlpha = 1 - dist / 46;
            const alpha = depthAlpha * distAlpha * 0.42;

            ctx.strokeStyle = `rgba(22, 216, 232, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing particle dots
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthRatio = Math.max(0.1, (p.z + currentRadius) / (currentRadius * 2));
        const dotRadius = Math.max(1, depthRatio * 2.5);

        // Core dot color (with magenta accent dots)
        if (p.isMagenta) {
          ctx.fillStyle = depthRatio > 0.6 ? "#FFFFFF" : "#C400FF";
        } else {
          ctx.fillStyle = depthRatio > 0.6 ? "#FFFFFF" : depthRatio > 0.3 ? "#16D8E8" : "#087BFF";
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Outer glow on front nodes
        if (depthRatio > 0.65) {
          ctx.fillStyle = p.isMagenta ? "rgba(196, 0, 255, 0.3)" : "rgba(22, 216, 232, 0.25)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, dotRadius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    // Lazy initialization with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(render);
          } else {
            isVisible = false;
            cancelAnimationFrame(animId);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center pointer-events-none select-none">
      {/* Ambient background glow beneath sphere */}
      <div
        className="absolute inset-0 rounded-full blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(8, 123, 255, 0.22) 0%, rgba(22, 216, 232, 0.12) 40%, rgba(67, 52, 242, 0.05) 70%, transparent 85%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10"
        style={{ width: "100%", height: "100%", maxWidth: "560px" }}
        aria-label="3D Interactive Wireframe Sphere"
      />
    </div>
  );
}
