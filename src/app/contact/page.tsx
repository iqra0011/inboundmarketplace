import React from "react";
import { Metadata } from "next";
import { Mail, ShieldCheck, Zap } from "lucide-react";
import Navbar from "src/components/layout/Navbar";
import Footer from "src/components/layout/Footer";
import PlaneSubmit from "src/components/ui/PlaneSubmit";

export const metadata: Metadata = {
  title: "Contact Us | Inbound Marketplace",
  description:
    "Whether you're looking to acquire qualified leads, monetize your traffic, or explore a technology partnership, our team is ready to connect.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F] select-none text-[#F7F9FC]">
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
          {/* Ambient radial glows */}
          <div
            className="absolute top-1/3 left-1/4 w-[700px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-0 opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(8, 123, 255, 0.3) 0%, rgba(22, 216, 232, 0.15) 50%, transparent 80%)",
            }}
          />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* ═══ LEFT 5 COLUMNS: HEADLINE, INTRO & TWO INFO CHIPS ═══ */}
              <div className="lg:col-span-5 text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[rgba(120,170,255,0.3)] shadow-[0_0_15px_rgba(22,216,232,0.15)] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#16D8E8] animate-pulse" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#16D8E8]">
                    GET IN TOUCH
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-white leading-[1.04] mb-6">
                  Let&apos;s Turn Intent <br />
                  <span className="bg-gradient-to-r from-[#087BFF] via-[#16D8E8] to-[#C400FF] bg-clip-text text-transparent">
                    Into Opportunity.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mb-8 max-w-lg">
                  Whether you&apos;re looking to acquire qualified leads, monetize your traffic, or explore a technology partnership, our team is ready to understand your requirements. Let&apos;s build a better connection.
                </p>

                {/* Two Info Chips */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-[20px] bg-white/[0.04] border border-[rgba(120,170,255,0.22)] backdrop-blur-md shadow-[inset_0_0_15px_rgba(22,216,232,0.06)]">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 text-[#16D8E8] flex items-center justify-center font-bold shrink-0 shadow-[0_0_12px_rgba(22,216,232,0.2)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#16D8E8] uppercase tracking-wider block">
                        DIRECT INTEGRATION
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        API and Webhook Integration Support
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-[20px] bg-white/[0.04] border border-[rgba(120,170,255,0.22)] backdrop-blur-md shadow-[inset_0_0_15px_rgba(22,216,232,0.06)]">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 text-[#087BFF] flex items-center justify-center font-bold shrink-0 shadow-[0_0_12px_rgba(8,123,255,0.2)]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#087BFF] uppercase tracking-wider block">
                        PARTNER ONBOARDING
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Guidance for New Marketplace Partners
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ═══ RIGHT 7 COLUMNS: GLASS FORM WITH SLIDING ROLE PILL & PLANE SUBMIT ═══ */}
              <div className="lg:col-span-7">
                <PlaneSubmit />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
