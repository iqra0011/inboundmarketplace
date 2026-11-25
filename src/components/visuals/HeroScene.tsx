"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface HeroSceneContextType {
  mouseX: number;
  mouseY: number;
  tiltX: number;
  tiltY: number;
  isVisible: boolean;
  reducedMotion: boolean;
  isMobile: boolean;
  width: number;
  height: number;
}

const HeroSceneContext = createContext<HeroSceneContextType>({
  mouseX: 0,
  mouseY: 0,
  tiltX: 0,
  tiltY: 0,
  isVisible: true,
  reducedMotion: false,
  isMobile: false,
  width: 520,
  height: 520,
});

export const useHeroScene = () => useContext(HeroSceneContext);

interface HeroSceneProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function HeroScene({
  children,
  className = "",
  glowColor = "radial-gradient(circle, rgba(8,123,255,0.25) 0%, rgba(22,216,232,0.12) 40%, rgba(67,52,242,0.05) 70%, transparent 85%)",
}: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 520, height: 520 });

  const mousePosRef = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0, tiltX: 0, tiltY: 0 });
  const [sceneState, setSceneState] = useState<HeroSceneContextType>({
    mouseX: 0,
    mouseY: 0,
    tiltX: 0,
    tiltY: 0,
    isVisible: true,
    reducedMotion: false,
    isMobile: false,
    width: 520,
    height: 520,
  });

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = mobile ? 280 : Math.min(520, Math.max(340, rect.width || 520));
        setDimensions({ width: size, height: size });
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Fade-in after page transition completes
    const timer = setTimeout(() => setIsLoaded(true), 350);

    // Visibility observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting && !document.hidden);
        });
      },
      { threshold: 0.1 }
    );

    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Pointer-parallax tracking across the section/window with lerp
    let animId: number;
    const handlePointerMove = (e: MouseEvent) => {
      if (motionQuery.matches) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Normalized between -1 and 1
      const normX = (e.clientX - w / 2) / (w / 2);
      const normY = (e.clientY - h / 2) / (h / 2);

      mousePosRef.current.targetX = normX;
      mousePosRef.current.targetY = normY;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    const lerpLoop = () => {
      if (!motionQuery.matches) {
        const p = mousePosRef.current;
        // Smooth lerp (0.07 factor)
        p.currentX += (p.targetX - p.currentX) * 0.07;
        p.currentY += (p.targetY - p.currentY) * 0.07;

        // Max tilt: 12deg X, 14deg Y
        const rotY = p.currentX * 14;
        const rotX = -p.currentY * 12;
        p.tiltX = rotX;
        p.tiltY = rotY;

        if (tiltRef.current) {
          tiltRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
        }

        setSceneState({
          mouseX: p.currentX,
          mouseY: p.currentY,
          tiltX: rotX,
          tiltY: rotY,
          isVisible,
          reducedMotion: motionQuery.matches,
          isMobile,
          width: dimensions.width,
          height: dimensions.height,
        });
      }

      animId = requestAnimationFrame(lerpLoop);
    };

    animId = requestAnimationFrame(lerpLoop);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, isMobile, dimensions.width, dimensions.height]);

  return (
    <HeroSceneContext.Provider value={sceneState}>
      <div
        ref={containerRef}
        className={`relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none pointer-events-none transition-opacity duration-700 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${className}`}
        style={{
          height: isMobile ? "280px" : undefined,
          maxHeight: isMobile ? "280px" : undefined,
        }}
      >
        {/* Soft Radial Ambient Glow behind scene */}
        <div
          className="absolute inset-0 rounded-full blur-[110px] pointer-events-none -z-10"
          style={{ background: glowColor }}
        />

        {/* 3D Tilt Wrapper with pointer-events-none so buttons are never blocked */}
        <div
          ref={tiltRef}
          className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] will-change-transform pointer-events-none"
        >
          {children}
        </div>
      </div>
    </HeroSceneContext.Provider>
  );
}
