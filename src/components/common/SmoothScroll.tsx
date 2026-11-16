"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 0.55,
      lerp: 0.22,
      wheelMultiplier: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Update global scroll progress bar
    const progressEl = document.querySelector(".global-scroll-progress") as HTMLElement | null;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0 && progressEl) {
        const progress = window.scrollY / totalScroll;
        progressEl.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <>{children}</>;
}
