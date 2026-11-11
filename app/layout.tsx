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
  title: "Sowmya P | Architect / Interior & Workplace Designer",
  description:
    "Sowmya P is a Chennai-based architect and interior & workplace designer, taking projects from client brief and space planning through detailed design and execution.",
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
