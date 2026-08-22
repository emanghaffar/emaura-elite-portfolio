import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emaura Creatives | UGC Creator & Digital Creative",
  description:
    "UGC product videos, performance ad creatives, review-style content and lifestyle reels by Emaura Creatives.",
  keywords: [
    "UGC creator",
    "product videos",
    "performance ad creatives",
    "review style UGC",
    "faceless lifestyle video",
    "Emaura Creatives",
  ],
  openGraph: {
    title: "Emaura Creatives | UGC Creator",
    description:
      "Creator-led UGC, product storytelling and conversion-focused social creative.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
