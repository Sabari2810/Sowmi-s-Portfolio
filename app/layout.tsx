import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Nora Halden — Architect",
  description:
    "Nora Halden Architecture — residential, public and cultural buildings shaped by site, light and material.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} scroll-pt-20 scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="overflow-x-hidden bg-paper font-sans text-base leading-relaxed text-ink antialiased md:text-[17px]">
        {children}
      </body>
    </html>
  );
}
