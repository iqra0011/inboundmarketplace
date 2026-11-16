"use client";

import React, { useRef, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  enableTilt = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.18s ease-out, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
      className={`relative overflow-hidden rounded-[22px] bg-white/[0.06] backdrop-blur-[20px] border border-[rgba(120,170,255,0.28)] shadow-[inset_0_0_24px_rgba(22,216,232,0.1),0_12px_40px_rgba(0,0,0,0.5)] hover:border-[rgba(22,216,232,0.55)] hover:shadow-[inset_0_0_32px_rgba(22,216,232,0.18),0_18px_50px_rgba(8,123,255,0.28)] ${className}`}
    >
      {/* Subtle top specular sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
