"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const [active, setActive] = useState(true);

  // Determine page-specific icon
  const getPageIcon = () => {
    switch (pathname) {
      case "/":
        // Rocket for Home
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
        );
      case "/why-us":
        // Two converging arrows / network node
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="m3 3 6 6"/>
            <path d="m21 3-6 6"/>
            <path d="m3 21 6-6"/>
            <path d="m21 21-6-6"/>
            <polyline points="9 3 9 9 3 9"/>
            <polyline points="15 3 15 9 21 9"/>
          </svg>
        );
      case "/how-it-works":
        // Data packet moving along a line
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="2" y1="12" x2="22" y2="12"/>
            <circle cx="6" cy="12" r="2.5" fill="#087BFF"/>
            <rect x="11" y="9" width="6" height="6" rx="1.5" fill="#16D8E8"/>
            <circle cx="20" cy="12" r="2.5" fill="#4334F2"/>
          </svg>
        );
      case "/about-us":
        // Core with an orbit ellipse
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" fill="#16D8E8" fillOpacity="0.4" />
            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" strokeDasharray="3 3" />
            <circle cx="19" cy="8" r="1.5" fill="#C400FF" />
          </svg>
        );
      case "/resources":
        // Open book with floating pages
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            <path d="M12 7c1-2 3-3 5-3"/>
          </svg>
        );
      case "/contact":
        // Paper plane
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z"/>
            <path d="M22 2 11 13"/>
          </svg>
        );
      default:
        // Default glowing network pulse
        return (
          <svg className="w-8 h-8 text-[#16D8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
          </svg>
        );
    }
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setActive(false);
      if (onComplete) onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(false);
        if (onComplete) onComplete();

        // Trigger hero text masked line-by-line reveal
        const heroLines = document.querySelectorAll(".hero-reveal-line");
        if (heroLines.length > 0) {
          gsap.fromTo(
            heroLines,
            { y: "110%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 0.85, stagger: 0.08, ease: "power4.out" }
          );
        }
      },
    });

    // 1. Glowing blue orb pulses (0s -> 0.45s)
    tl.fromTo(
      orbRef.current,
      { scale: 0.3, opacity: 0.4 },
      { scale: 1.2, opacity: 1, duration: 0.45, ease: "power2.out" }
    );

    // 2. Morphs into page-specific icon inside glowing circle (0.35s -> 0.8s)
    tl.fromTo(
      iconRef.current,
      { scale: 0.4, opacity: 0, rotate: -25 },
      { scale: 1, opacity: 1, rotate: 0, duration: 0.45, ease: "back.out(1.5)" },
      "-=0.15"
    );

    // 3. Thin progress ring fills (0.5s -> 1.25s)
    if (ringRef.current) {
      tl.fromTo(
        ringRef.current,
        { strokeDashoffset: 283 },
        { strokeDashoffset: 0, duration: 0.7, ease: "power1.inOut" },
        "-=0.3"
      );
    }

    // 4. Overlay scales slightly and fades out (1.25s -> 1.6s)
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        scale: 1.04,
        duration: 0.4,
        ease: "power3.inOut",
        pointerEvents: "none",
      },
      "+=0.1"
    );

    return () => {
      tl.kill();
    };
  }, [pathname, onComplete]);

  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 w-screen h-screen z-[100000] flex items-center justify-center bg-[#020C1D]"
      style={{ willChange: "opacity, transform" }}
    >
      {/* Background ambient radial blue glow */}
      <div
        ref={orbRef}
        className="absolute w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(8, 123, 255, 0.45) 0%, rgba(22, 216, 232, 0.2) 45%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* Center Circle with Page Icon & Progress Ring */}
      <div className="relative flex items-center justify-center w-36 h-36">
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2"
          />
          <circle
            ref={ringRef}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#loaderGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="283"
          />
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#087BFF" />
              <stop offset="100%" stopColor="#16D8E8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Glowing Icon Capsule */}
        <div
          ref={iconRef}
          className="w-20 h-20 rounded-full flex items-center justify-center bg-[#061d45]/90 border border-[rgba(120,170,255,0.4)] shadow-[0_0_30px_rgba(22,216,232,0.35)] backdrop-blur-xl"
        >
          {getPageIcon()}
        </div>
      </div>
    </div>
  );
}
