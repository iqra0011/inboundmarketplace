import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  dark?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hoverEffect = true,
  dark = false
}: CardProps) {
  const baseStyle = "rounded-2xl p-6 transition-all duration-300";
  const borderStyle = dark 
    ? "bg-[#03142F]/60 border border-slate-800 shadow-2xl" 
    : "bg-white border border-slate-200 shadow-sm shadow-slate-200/40";
  const hoverStyle = hoverEffect 
    ? (dark 
        ? "hover:border-electric-blue/50 hover:shadow-electric-blue/10 hover:-translate-y-1" 
        : "hover:border-electric-blue/35 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1")
    : "";

  return (
    <div className={`${baseStyle} ${borderStyle} ${hoverStyle} ${className}`}>
      {children}
    </div>
  );
}
