import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reel Pipeline — Automated Short-Form Video Creation & Publishing",
    template: "%s | Reel Pipeline",
  },
  description:
    "Reel Pipeline automates short-form video creation from content to published reel. Generate, review, and publish to Facebook, Instagram, and TikTok through a streamlined production pipeline.",
  keywords: [
    "reel pipeline",
    "video automation",
    "short-form video",
    "social media publishing",
    "content creation",
    "TikTok publishing",
    "Instagram reels",
    "Facebook reels",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reel Pipeline",
    title: "Reel Pipeline — Automated Short-Form Video Creation & Publishing",
    description:
      "Automate your short-form video workflow from content to published reel across Facebook, Instagram, and TikTok.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--bg-primary)" }}
      >
        <Navbar />
        <main id="main-content" role="main" style={{ flex: 1, paddingTop: "4.5rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
