import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "VAMOS26 Beta — Live Stats, Stadiums & City Shop",
  description:
    "VAMOS26 Beta: live match scores, stadium guide, top scorers, assists, clean sheets, defenders & playmakers to watch, and US host city dropship gear.",
  keywords: [
    "FIFA World Cup 2026",
    "VAMOS26 Beta",
    "live scores",
    "World Cup stadiums",
    "top scorers",
    "dropship merch",
  ],
  openGraph: {
    title: "VAMOS26 Beta — FIFA World Cup 2026",
    description: "Live stats, stadiums, player watchlists, and city-themed shop",
    siteName: "VAMOS26 Beta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full grain">{children}</body>
    </html>
  );
}
