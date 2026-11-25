"use client";

import React, { useEffect, useRef } from "react";
import { useHeroScene } from "../HeroScene";

interface NodeItem {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scatterX: number;
  scatterY: number;
  hubX: number;
  hubY: number;
  radius: number;
  targetRadius: number;
  targetAngle: number;
  flickerSpeed: number;
  flickerOffset: number;
}

export default function WhyUsScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mouseX, mouseY, isVisible, reducedMotion, isMobile, width, height } = useHeroScene();

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

    const count = isMobile ? 22 : 42;
    const nodes: NodeItem[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const distFromHub = 50 + (i % 4) * 26;
      const sx = 30 + Math.random() * (size - 60);
      const sy = 30 + Math.random() * (size - 60);

      nodes.push({
        x: sx,
        y: sy,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        scatterX: sx,
        scatterY: sy,
        hubX: centerX + Math.cos(angle) * distFromHub,
        hubY: centerY + Math.sin(angle) * distFromHub,
        radius: 2.2 + Math.random() * 1.5,
        targetRadius: distFromHub,
        targetAngle: angle,
        flickerSpeed: 0.05 + Math.random() * 0.08,
        flickerOffset: Math.random() * Math.PI * 2,
      });
    }

    let t = 0;
    // Cycle: 0 to 8 seconds
    // 0s-2.5s: Scattered chaos (red/pink flickering)
    // 2.5s-4.0s: Wave sweeps, nodes pulled toward hub, transition to cyan
    // 4.0s-6.5s: Holding in unified network, hub pulses with lines
    // 6.5s-8.0s: Scatter back into chaos, transition back to red
    const CYCLE_DURATION = 8000;
    let startTime = performance.now();

    const render = (now: number) => {
      if (!isVisible && !reducedMotion) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, size, size);
      t += 0.025;

      const elapsed = (now - startTime) % CYCLE_DURATION;
      const progress = elapsed / CYCLE_DURATION; // 0 to 1

      // Compute convergence factor (0 = total chaos, 1 = fully converged)
      let convergence = 0;
      if (progress < 0.28) {
        // Chaos
        convergence = 0;
      } else if (progress < 0.45) {
        // Pulling in (easeInOut)
        const p = (progress - 0.28) / 0.17;
        convergence = p * p * (3 - 2 * p);
      } else if (progress < 0.78) {
        // Holding unified
        convergence = 1;
      } else {
        // Scattering
        const p = (progress - 0.78) / 0.22;
        convergence = 1 - p * p * (3 - 2 * p);
      }

      if (reducedMotion) {
        convergence = 1; // render unified frame
      }

      // Hub glow and core
      const hubPulse = 1 + Math.sin(t * 3) * 0.18;
      const hubRadius = 14 + convergence * 8 * hubPulse;
      const hubAlpha = 0.2 + convergence * 0.7;

      // Color interpolation: Red/Pink (244, 63, 94) to Cyan (22, 216, 232)
      const r = Math.round(244 * (1 - convergence) + 22 * convergence);
      const g = Math.round(63 * (1 - convergence) + 216 * convergence);
      const b = Math.round(94 * (1 - convergence) + 232 * convergence);

      // Central Hub Ambient Radial Glow
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, hubRadius * 3.5);
      glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${hubAlpha * 0.7})`);
      glowGrad.addColorStop(0.5, `rgba(8, 123, 255, ${hubAlpha * 0.3})`);
      glowGrad.addColorStop(1, "transparent");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, hubRadius * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Central Hub Core
      ctx.fillStyle = convergence > 0.5 ? "#FFFFFF" : `rgb(${r}, ${g}, ${b})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, hubRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();

      // Mouse influence position
      const mouseTargetX = centerX + mouseX * 120;
      const mouseTargetY = centerY + mouseY * 120;

      // Draw and update nodes
      nodes.forEach((node, i) => {
        if (!reducedMotion) {
          // Chaos drift
          node.scatterX += node.vx;
          node.scatterY += node.vy;
          if (node.scatterX < 30 || node.scatterX > size - 30) node.vx *= -1;
          if (node.scatterY < 30 || node.scatterY > size - 30) node.vy *= -1;

          // Orbit rotation in hub mode
          const curAngle = node.targetAngle + t * 0.4;
          node.hubX = centerX + Math.cos(curAngle) * node.targetRadius;
          node.hubY = centerY + Math.sin(curAngle) * node.targetRadius;
        }

        // Target position based on convergence
        let targetX = node.scatterX * (1 - convergence) + node.hubX * convergence;
        let targetY = node.scatterY * (1 - convergence) + node.hubY * convergence;

        // Gentle mouse attraction
        const dxMouse = mouseTargetX - targetX;
        const dyMouse = mouseTargetY - targetY;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < 140 && distMouse > 5) {
          const force = (1 - distMouse / 140) * 16 * (1 - convergence * 0.5);
          targetX += (dxMouse / distMouse) * force;
          targetY += (dyMouse / distMouse) * force;
        }

        node.x += (targetX - node.x) * 0.12;
        node.y += (targetY - node.y) * 0.12;

        // Lines to center hub when converging
        if (convergence > 0.2) {
          const lineAlpha = (convergence - 0.2) * 0.6;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }

        // Inter-node disjointed flickering dashed lines in chaos state
        if (convergence < 0.35) {
          const neighbor = nodes[(i + 3) % nodes.length];
          const dist = Math.hypot(neighbor.x - node.x, neighbor.y - node.y);
          if (dist < 85) {
            const flicker = Math.sin(t * 8 + node.flickerOffset) > 0.2 ? 0.25 : 0.05;
            ctx.strokeStyle = `rgba(244, 63, 94, ${flicker * (1 - convergence)})`;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }

        // Node circle
        const flicker = Math.sin(t * 6 + node.flickerOffset);
        const dotAlpha = Math.max(0.4, 0.85 + flicker * 0.25);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (1 + convergence * 0.3), 0, Math.PI * 2);
        ctx.fill();

        // Node Glow
        if (convergence > 0.5) {
          ctx.fillStyle = `rgba(22, 216, 232, 0.25)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

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
        aria-label="Chaos to Network Animation"
      />
    </div>
  );
}
