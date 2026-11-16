"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "cyan" | "outline";
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Magnetic pull strength: 0.28
    setOffset({ x: x * 0.28, y: y * 0.28 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#087BFF] to-[#16D8E8] text-white shadow-[0_4px_24px_rgba(8,123,255,0.4)] hover:shadow-[0_8px_36px_rgba(22,216,232,0.6)] border border-white/20",
    secondary:
      "bg-white/[0.06] backdrop-blur-xl text-[#F7F9FC] border border-[rgba(120,170,255,0.3)] hover:border-[#16D8E8] hover:bg-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
    outline:
      "bg-white/[0.06] backdrop-blur-xl text-[#F7F9FC] border border-[rgba(120,170,255,0.3)] hover:border-[#16D8E8] hover:bg-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
    cyan:
      "bg-gradient-to-r from-[#16D8E8] to-[#087BFF] text-[#03142F] font-bold shadow-[0_4px_24px_rgba(22,216,232,0.4)] hover:shadow-[0_8px_36px_rgba(8,123,255,0.6)]",
  };

  const commonProps = {
    ref: btnRef as any,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease",
    },
    className: `btn-pill cursor-pointer select-none active:scale-95 ${variantStyles[variant]} ${className}`,
  };

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
}
