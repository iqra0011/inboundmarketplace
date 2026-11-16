"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  end,
  suffix = "",
  duration = 1.8,
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const elRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: elRef.current,
      start: "top 90%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: duration,
          ease: "power3.out",
          onUpdate: () => {
            setValue(Math.floor(obj.val));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, duration]);

  const formatted = end >= 1000 ? value.toLocaleString() : value;

  return (
    <span ref={elRef} className={`font-variant-numeric tabular-nums ${className}`}>
      {formatted}
      {suffix}
    </span>
  );
}
