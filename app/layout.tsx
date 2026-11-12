import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const sans = Jost({ subsets: ["latin"], variable: "--font-jost" });
const serif = Cormorant_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
});

const title = "Sowmya P. | Architect & Workplace Interior Designer in Chennai";
const description =
  "Explore the portfolio of Sowmya P., a Chennai-based COA-registered architect specialising in workplace interiors, space planning, architectural design and project delivery.";

export const metadata: Metadata = {
  metadataBase: new URL("https://by-sowmya.vercel.app"),
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Sowmya P",
    images: [{ url: "/og.jpg", width: 1200, height: 628, alt: "Sowmya P. Architect, Interior & Workplace Designer. Spaces shaped by purpose, designed for people." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f2ed",
  // Light-only design: stops phones' automatic dark mode from recolouring text over images.
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth motion-reduce:scroll-auto`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink antialiased">{children}
        <BackToTop />
      </body>
    </html>
  );
}
