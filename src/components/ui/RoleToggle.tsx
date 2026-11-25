"use client";

import React, { useRef, useEffect, useState } from "react";

export type RoleType = "buyer" | "publisher" | "partner" | "other";

interface RoleOption {
  id: RoleType;
  label: string;
}

const ROLES: RoleOption[] = [
  { id: "buyer", label: "Lead Buyer" },
  { id: "publisher", label: "Traffic Publisher" },
  { id: "partner", label: "Technology Partner" },
  { id: "other", label: "Other" },
];

interface RoleToggleProps {
  selectedRole: RoleType;
  onChange: (role: RoleType) => void;
}

export default function RoleToggle({ selectedRole, onChange }: RoleToggleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const updatePill = (id: RoleType) => {
    if (!containerRef.current) return;
    const btn = containerRef.current.querySelector<HTMLButtonElement>(`[data-role="${id}"]`);
    if (btn) {
      setPillStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updatePill(selectedRole);
  }, [selectedRole]);

  useEffect(() => {
    const handleResize = () => updatePill(selectedRole);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedRole]);

  return (
    <div className="w-full">
      <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#16D8E8] block mb-2.5">
        I AM A:
      </label>

      <div
        ref={containerRef}
        className="relative grid grid-cols-2 sm:grid-cols-4 p-1 rounded-full bg-white/[0.04] border border-[rgba(120,170,255,0.22)] backdrop-blur-md"
      >
        {/* Sliding Gradient Pill */}
        <div
          className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#4334F2] shadow-[0_0_15px_rgba(22,216,232,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
          }}
        />

        {ROLES.map((r) => {
          const isSelected = selectedRole === r.id;
          return (
            <button
              key={r.id}
              data-role={r.id}
              type="button"
              onClick={() => onChange(r.id)}
              className={`relative z-10 py-2.5 px-3 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer ${
                isSelected ? "text-white font-extrabold" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              {r.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
