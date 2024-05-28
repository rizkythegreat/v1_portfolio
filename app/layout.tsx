import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotLight from "./components/Spotlight";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizky Rahman Salam | Frontend Developer | ReactJS | NextJS",
  description: "Rizky Rahman Salam is a Frontend Web Developer from Pekanbaru, Indonesia. I specialize in bridging the idea to exceptional and accessible digital experiences.",
  keywords: "Rizky Rahman Salam, Frontend Web Developer, ReactJS, NextJS, Pekanbaru, Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-900 leading-relaxed text-gray-400 antialiased selection:bg-cyan-300 selection:text-cyan-900`}
      >
        <div className="relative">
          <SpotLight />
          {children}
        </div>
        <SpeedInsights />
        <Analytics />

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js" />
      </body>
    </html>
  );
}
