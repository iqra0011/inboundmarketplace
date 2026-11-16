import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#087BFF] disabled:opacity-50 disabled:pointer-events-none select-none";
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const variants = {
    primary: "bg-[#087BFF] text-white hover:bg-[#006CE6] shadow-lg shadow-[#087BFF]/25 hover:shadow-[#087BFF]/35 active:scale-98",
    secondary: "bg-[#061B42] text-white hover:bg-[#02294B] shadow-md shadow-[#061B42]/15 active:scale-98 dark:bg-white dark:text-[#061B42] dark:hover:bg-slate-100",
    outline: "bg-white text-[#061B42] border border-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-xs active:scale-98",
    ghost: "bg-transparent text-[#061B42] hover:bg-slate-100/80 active:scale-98",
    gradient: "gradient-brand text-white hover:brightness-105 shadow-lg shadow-electric-blue/25 active:scale-98"
  };

  const buttonClasses = `${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
