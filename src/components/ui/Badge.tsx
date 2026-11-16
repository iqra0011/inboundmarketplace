import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'alert';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  className = '' 
}: BadgeProps) {
  const baseStyle = "inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300";
  
  const variants = {
    primary: "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
    secondary: "bg-purple/10 text-purple border-purple/20",
    outline: "bg-transparent text-deep-navy border-deep-navy/15 dark:border-white/10 dark:text-white/80",
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    alert: "bg-amber-500/10 text-amber-500 border-amber-500/20"
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
