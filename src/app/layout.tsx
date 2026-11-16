import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "src/components/common/SmoothScroll";
import Cursor from "src/components/common/Cursor";
import RouteTransition from "src/components/common/RouteTransition";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inbound Marketplace | Where High-Intent Leads Meet Real Business Growth",
  description:
    "Connect with qualified inbound opportunities through a transparent, high-speed lead marketplace built for buyers and publishers.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} dark antialiased`}>
      <body className="min-h-full flex flex-col bg-[#03142F] text-[#F7F9FC] font-sans selection:bg-[#087BFF]/30 selection:text-[#16D8E8] relative">
        {/* Subtle Film-Grain SVG Overlay */}
        <svg className="film-grain-overlay" aria-hidden="true">
          <filter id="grainFilterRoot">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grainFilterRoot)" />
        </svg>

        {/* Global Scroll Progress Bar at the Top */}
        <div className="global-scroll-progress" aria-hidden="true" />

        {/* Custom Glowing Cursor */}
        <Cursor />

        {/* Global Route Transition Orb */}
        <RouteTransition />

        {/* Lenis Smooth Scroll Provider */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
