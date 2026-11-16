import React from 'react';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleColor = dark ? 'text-white' : 'text-[#061B42]';
  const subtitleColor = dark ? 'text-slate-300' : 'text-[#334155]';

  return (
    <div className={`flex flex-col mb-14 md:mb-18 max-w-3xl ${alignClass} ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {badge && (
        <Badge variant={dark ? "secondary" : "primary"} className="mb-4.5 font-bold shadow-xs">
          {badge}
        </Badge>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.08] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg font-semibold leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
