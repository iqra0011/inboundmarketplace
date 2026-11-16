"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect touch device
    const touchCheck = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    setIsTouch(touchCheck);
    if (touchCheck) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const render = () => {
      // Lerp for soft blue radial glow lagging behind
      glowX += (mouseX - glowX) * 0.16;
      glowY += (mouseY - glowY) * 0.16;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Soft Blue Radial Glow that lags behind */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9998]"
        style={{
          background: "radial-gradient(circle, rgba(8, 123, 255, 0.35) 0%, rgba(22, 216, 232, 0.15) 45%, transparent 70%)",
          filter: "blur(20px)",
          willChange: "transform",
        }}
      />

      {/* Small White Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#16D8E8]"
        style={{
          willChange: "transform",
        }}
      />
    </>
  );
}
