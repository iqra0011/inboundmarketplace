"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function RouteTransition() {
  const router = useRouter();
  const transitionOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Only handle internal relative paths or links starting with /
      const isInternal =
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        !href.includes("#") &&
        target.target !== "_blank" &&
        !e.metaKey &&
        !e.ctrlKey;

      if (!isInternal || href === window.location.pathname) return;

      e.preventDefault();

      if (transitionOrbRef.current) {
        // Expand full-screen glowing orb
        gsap.set(transitionOrbRef.current, { pointerEvents: "auto", display: "block" });
        gsap.fromTo(
          transitionOrbRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 2.8,
            opacity: 1,
            duration: 0.42,
            ease: "power3.inOut",
            onComplete: () => {
              router.push(href);
              // Collapse after route transition
              setTimeout(() => {
                if (transitionOrbRef.current) {
                  gsap.to(transitionOrbRef.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power3.out",
                    onComplete: () => {
                      if (transitionOrbRef.current) {
                        transitionOrbRef.current.style.display = "none";
                        transitionOrbRef.current.style.pointerEvents = "none";
                      }
                    },
                  });
                }
              }, 120);
            },
          }
        );
      } else {
        router.push(href);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [router]);

  return (
    <div
      ref={transitionOrbRef}
      className="fixed inset-0 w-screen h-screen z-[99999] pointer-events-none hidden items-center justify-center"
      style={{
        background: "radial-gradient(circle at center, #061d45 0%, #03142F 70%, #020C1D 100%)",
        boxShadow: "inset 0 0 100px rgba(22, 216, 232, 0.4)",
      }}
    />
  );
}
