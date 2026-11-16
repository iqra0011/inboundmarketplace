"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WordRevealProps {
  text: string;
  className?: string;
}

export default function WordReveal({ text, className = "" }: WordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".reveal-word");
    if (words.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(words, { opacity: 1, color: "#FFFFFF" });
      return;
    }

    gsap.fromTo(
      words,
      {
        opacity: 0.2,
        color: "rgba(148, 163, 184, 0.4)",
      },
      {
        opacity: 1,
        color: "#FFFFFF",
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.5,
        },
      }
    );
  }, [text]);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`leading-relaxed font-light ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="reveal-word inline-block mr-[0.28em] transition-colors duration-150">
          {word}
        </span>
      ))}
    </p>
  );
}
