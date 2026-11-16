"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAVIGATION_LINKS } from "src/constants";
import MagneticButton from "../ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none transition-all duration-300">
      <div className="max-w-[1360px] mx-auto pointer-events-auto">
        <nav
          aria-label="Main Navigation"
          className={`relative w-full h-[64px] sm:h-[68px] px-5 sm:px-7 rounded-full border transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "bg-[#020C1D]/90 backdrop-blur-2xl border-[rgba(120,170,255,0.35)] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(22,216,232,0.12)]"
              : "bg-[#061d45]/70 backdrop-blur-md border-[rgba(120,170,255,0.22)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="Inbound Marketplace Home"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-tr from-[#087BFF] via-[#16D8E8] to-[#4334F2] p-[1.5px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(22,216,232,0.3)]">
              <div className="w-full h-full bg-[#03142F] rounded-[8.5px] flex items-center justify-center font-black text-[13px] text-white tracking-wider select-none">
                IM
              </div>
            </div>

            <div className="flex items-center tracking-tight select-none font-sans">
              <span className="font-extrabold text-[16px] sm:text-[17px] text-white">
                INBOUND
              </span>
              <span className="font-extrabold text-[16px] sm:text-[17px] text-[#16D8E8] ml-1">
                MARKETPLACE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Glowing Underline */}
          <div className="hidden xl:flex items-center gap-7">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13.5px] font-semibold tracking-[-0.01em] transition-colors duration-200 relative py-1.5 ${
                    isActive ? "text-[#16D8E8]" : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#087BFF] to-[#16D8E8] rounded-full shadow-[0_0_10px_#16D8E8]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="text-[13.5px] font-semibold text-[#94A3B8] hover:text-white transition-colors px-2 py-1"
            >
              Contact
            </Link>

            <MagneticButton href="/#marketplace" variant="primary" className="!py-2.5 !px-5 !text-xs">
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#16D8E8]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 w-full bg-[#020C1D]/95 backdrop-blur-2xl rounded-2xl border border-[rgba(120,170,255,0.3)] shadow-[0_16px_40px_rgba(0,0,0,0.8)] p-5 pointer-events-auto flex flex-col gap-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14.5px] font-semibold transition-colors ${
                    isActive
                      ? "text-[#16D8E8] bg-white/[0.08]"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16D8E8]" />}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-white/[0.06]"
              >
                Contact
              </Link>
              <Link
                href="/#marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-[#087BFF] to-[#16D8E8] shadow-[0_0_15px_rgba(22,216,232,0.4)]"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
