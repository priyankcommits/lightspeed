import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightspeed | Premium Athleticwear & Performance Gear",
  description: "Engineered for elite athletes. Premium performance apparel and gear designed for speed, discipline, and domination.",
  keywords: "athleticwear, performance gear, sports apparel, premium sportswear, athletic clothing",
  authors: [{ name: "Lightspeed Athletics" }],
  openGraph: {
    title: "Lightspeed | Premium Athleticwear & Performance Gear",
    description: "Engineered for elite athletes. Premium performance apparel and gear designed for speed, discipline, and domination.",
    url: "https://lightspeed.com",
    siteName: "Lightspeed Athletics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lightspeed Athletics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightspeed | Premium Athleticwear & Performance Gear",
    description: "Engineered for elite athletes. Premium performance apparel and gear designed for speed, discipline, and domination.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-ls-dark dark:text-ls-white`}
      >
        {children}
      </body>
    </html>
  );
}
