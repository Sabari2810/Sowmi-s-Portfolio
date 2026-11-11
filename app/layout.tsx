import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const sans = Jost({ subsets: ["latin"], variable: "--font-jost" });
const serif = Cormorant_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
});

export const metadata: Metadata = {
  title: "Sowmi. — Architect / Designer",
  description:
    "An architecture practice rooted in context, materiality and everyday life — creating spaces that are functional, sensitive and enduring.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f2ed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth motion-reduce:scroll-auto`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
