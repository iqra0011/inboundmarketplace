import React from "react";
import Navbar from "src/components/layout/Navbar";
import Hero from "src/components/sections/Hero";
import MarketplacePreview from "src/components/sections/MarketplacePreview";
import Cylinder3D from "src/components/visuals/Cylinder3D";
import HowItWorks from "src/components/sections/HowItWorks";
import EcosystemSection from "src/components/sections/EcosystemSection";
import IndustryGrid from "src/components/sections/IndustryGrid";
import AnalyticsSection from "src/components/sections/AnalyticsSection";
import TrustSection from "src/components/sections/TrustSection";
import Testimonials from "src/components/sections/Testimonials";
import FinalCTA from "src/components/sections/FinalCTA";
import Footer from "src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#03142F]">
        {/* 1. Hero with mixed bold/italic Outfit title, stats count-up, and wireframe particle sphere */}
        <Hero />

        {/* 2. Real-time Marketplace Terminal with price ticking and pulsing row */}
        <MarketplacePreview />

        {/* 3. Six Capabilities on pinned 3D rotating cylinder of arch-shaped glass cards */}
        <Cylinder3D />

        {/* 4. Infrastructure Topology Pipeline */}
        <HowItWorks />

        {/* 5. Two-Sided Network (Buyers & Publishers) with 3D tilt glass cards */}
        <EcosystemSection />

        {/* 6. Industries hanging from animated glowing rail on dashed strings with gentle sway */}
        <IndustryGrid />

        {/* 7. Performance Telemetry with SVG Line Graph (Matches vs Supply) */}
        <AnalyticsSection />

        {/* 8. Verification Pipeline with 5 nodes and traveling light pulse */}
        <TrustSection />

        {/* 9. Partner Testimonials in glassmorphic cards */}
        <Testimonials />

        {/* 10. Final CTA with flying paper-plane / rocket on scroll */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
