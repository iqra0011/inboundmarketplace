import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Inbound Marketplace",
  description: "Inbound Marketplace Platform Terms and Conditions.",
};

export default function TermsPage() {
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
                PLATFORM AGREEMENT
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#94A3B8]">
              Effective Date: January 2026 • Platform Terms and Conditions
            </p>
          </div>
        </section>

        {/* Legal Document Glass Container */}
        <section className="py-16 md:py-24 bg-[#03142F]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[26px] bg-white/[0.05] backdrop-blur-[24px] border border-[rgba(120,170,255,0.25)] p-8 sm:p-14 shadow-[inset_0_0_24px_rgba(22,216,232,0.06),0_20px_50px_rgba(0,0,0,0.5)] text-left space-y-10">
              
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  By accessing or utilizing Inbound Marketplace, including our website, APIs, partner endpoints, and dashboard consoles, you agree to comply with and be bound by these Terms of Service. If you are accessing the platform on behalf of a company or entity, you represent that you have authority to bind that entity.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">2. Publisher Obligations</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed mb-4">
                  Publishers transmitting consumer traffic or lead data to the marketplace represent and warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base font-light text-[#94A3B8]">
                  <li>All traffic is generated through lawful, compliant search, contextual, or media channels.</li>
                  <li>Inquiries originate from authentic consumer action with verifiable consent documentation.</li>
                  <li>No automated bots, fraudulent traffic generation, or deceptive acquisition techniques are employed.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">3. Buyer Obligations</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed mb-4">
                  Buyers receiving matched opportunities through the marketplace agree that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base font-light text-[#94A3B8]">
                  <li>Opportunities received will be processed in accordance with applicable consumer contact regulations.</li>
                  <li>Bids and budget parameters submitted represent binding commitments upon successful match delivery.</li>
                  <li>Lead data will not be resold or disseminated outside authorized operational workflows.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">4. Marketplace Operations and Routing</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  Inbound Marketplace reserves the right to screen, filter, suspend, or terminate feeds that do not meet quality thresholds or parameter criteria. We maintain operational oversight to ensure high routing integrity for all network participants.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">5. Contact and Inquiries</h2>
                <p className="text-sm sm:text-base font-light text-[#94A3B8] leading-relaxed">
                  For questions regarding platform terms, partner agreements, or billing guidelines, please reach out through our{" "}
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
