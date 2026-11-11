import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Sowmya — Architecture Portfolio",
  description:
    "Architecture portfolio of Sowmya — academic, competition and freelance work, drawings, site analysis and material studies.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f3f1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="overflow-x-hidden bg-paper font-sans text-base leading-relaxed text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
