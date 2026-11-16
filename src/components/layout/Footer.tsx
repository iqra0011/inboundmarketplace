import React from "react";
import Link from "next/link";
import { FOOTER_COLUMNS } from "src/constants";
import { Twitter, Linkedin, Facebook, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020C1D] text-[#94A3B8] pt-20 pb-10 border-t border-[rgba(120,170,255,0.18)] relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none -z-0 opacity-20"
        style={{ background: "radial-gradient(circle, rgba(8,123,255,0.25) 0%, rgba(22,216,232,0.1) 50%, transparent 80%)" }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 mb-16">
          
          {/* Brand/Description Column */}
          <div className="lg:col-span-2 text-left">
            <Link href="/" className="flex items-center space-x-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#087BFF] via-[#16D8E8] to-[#4334F2] p-[1.5px] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(22,216,232,0.3)]">
                <div className="w-full h-full bg-[#03142F] rounded-[9.5px] flex items-center justify-center font-black text-xs text-white">
                  IM
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                INBOUND<span className="text-[#16D8E8] transition-colors ml-1">MARKETPLACE</span>
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-sm mb-7 leading-relaxed font-light">
              The technology-driven lead marketplace connecting consumer intent with verified, matched, monetizable demand in real time.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#16D8E8] hover:text-white transition-all text-[#94A3B8]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#16D8E8] hover:text-white transition-all text-[#94A3B8]"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#16D8E8] hover:text-white transition-all text-[#94A3B8]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-5">Platform</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {FOOTER_COLUMNS.platform.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#16D8E8] transition-colors text-[#94A3B8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-5">Company</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {FOOTER_COLUMNS.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#16D8E8] transition-colors text-[#94A3B8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Compliance */}
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-5">Architecture</h4>
            <ul className="space-y-3.5 text-sm font-medium mb-6">
              {FOOTER_COLUMNS.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#16D8E8] transition-colors text-[#94A3B8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#16D8E8] bg-[#16D8E8]/10 border border-[#16D8E8]/20 px-3.5 py-2 rounded-xl w-fit shadow-[0_0_15px_rgba(22,216,232,0.15)]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Quality Verified</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#94A3B8]">
          <p>© 2026 Inbound Marketplace. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/why-us" className="hover:text-white transition-colors">Compliance Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
