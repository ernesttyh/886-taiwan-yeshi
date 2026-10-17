import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { brush, din, inter } from "./fonts";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { JsonLd } from "@/components/JsonLd";
import { graph, restaurantNode, websiteNode } from "@/lib/schema";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Taiwan Night Market Food at Changi Airport T3 | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Taiwanese food Changi Airport",
    "Changi Airport Terminal 3 food",
    "Taiwanese restaurant Singapore",
    "lu rou fan Singapore",
    "beef noodles Changi Airport",
    "XXL fried chicken Singapore",
    "bubble tea Changi Airport",
    "886 Taiwan Ye Shi",
  ],
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: site.name,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: "/" },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#CE2C20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang="en-SG" className={`${inter.variable} ${din.variable} ${brush.variable}`}>
      {gtm && <GoogleTagManager gtmId={gtm} />}
      <body className="flex min-h-screen flex-col">
        <JsonLd data={graph(restaurantNode(), websiteNode())} />
        {children}
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
