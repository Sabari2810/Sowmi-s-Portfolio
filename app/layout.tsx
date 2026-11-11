import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, League_Spartan, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Jost({ subsets: ["latin"], variable: "--font-jost" });
const display = League_Spartan({ subsets: ["latin"], variable: "--font-spartan" });
const serif = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});
const ghost = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Sowmya — Architecture Portfolio",
  description:
    "Architecture portfolio of Sowmya — graduation, competition and freelance projects, drawings, site analysis and material studies.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dddbd8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${ghost.variable} scroll-pt-20 scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="overflow-x-hidden bg-backdrop font-sans text-base leading-relaxed text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
