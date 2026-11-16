import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Inbound Marketplace",
  description: "Inbound Marketplace Information & Privacy Guidelines.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        {/* Header Section */}
        <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 border-b border-[rgba(120,170,255,0.18)]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-25 bg-[radial-gradient(circle,rgba(8,123,255,0.3)_0%,rgba(22,216,232,0.12)_50%,transparent_75%)]" />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                LEGAL & COMPLIANCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#94A3B8]">
              Last Updated: January 2026 • Inbound Marketplace Information Guidelines
            </p>
          </div>
        </section>

        {/* Legal Document Glass Container */}
        <section className="py-16 md:py-24 bg-[#03142F]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[26px] bg-white/[0.05] backdrop-blur-[24px] border border-[rgba(120,170,255,0.25)] p-8 sm:p-14 shadow-[inset_0_0_24px_rgba(22,216,232,0.06),0_20px_50px_rgba(0,0,0,0.5)] text-left space-y-10">
              
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">1. Overview and Scope</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  Inbound Marketplace operates an exchange connecting verified traffic publishers with authorized enterprise lead buyers. This Privacy Policy describes our practices regarding information collected, processed, and transmitted through our platform endpoints, APIs, and website.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">2. Information Processed by the Marketplace</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed mb-4">
                  In operating the marketplace, we process information submitted by consumers at points of inquiry on partner publisher sites:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base font-light text-[#94A3B8]">
                  <li>Contact and verification details (e.g., name, phone number, email address, physical location).</li>
                  <li>Inquiry parameters relevant to specific verticals (e.g., insurance coverage requirements, home service project specifications).</li>
                  <li>Technical tokens associated with explicit consumer consent, IP timestamps, and referral metadata.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">3. How Information is Used and Routed</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  Information received is utilized solely for validation, fraud screening, duplicate detection, and automated matching with qualified buyer criteria. Once a match is established, records are delivered via encrypted webhook or API endpoints directly to the recipient buyer's customer relationship management system.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">4. Security and Data Handling Standards</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  We employ industry-standard encryption, strict access controls, and automated log auditing to protect information in transit and at rest. We do not sell consumer contact information outside the scope of authorized marketplace matching.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">5. Inquiries and Contact</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  If you have questions regarding this Privacy Policy or our platform data handling practices, please contact our compliance desk via our{" "}
                  <Link href="/contact" className="text-[#16D8E8] font-bold underline hover:text-white transition-colors">
                    Contact page
                  </Link>.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
