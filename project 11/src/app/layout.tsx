import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: {
    default: "TECHAIDpro",
    template: "%s | TECHAIDpro",
  },
  description: "Your trusted source for the latest technology news, reviews, and insights to navigate the digital world",
  applicationName: "TECHAIDpro",
  keywords: ["technology", "tech news", "hardware", "software", "cybersecurity", "cloud computing", "AI", "digital transformation", "NVIDIA", "Microsoft Copilot"],
  authors: [{ name: "TECHAIDpro Team" }],
  creator: "TECHAIDpro",
  publisher: "TECHAIDpro",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TECHAIDpro",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
