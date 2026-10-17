import { Inter } from "next/font/google";
import localFont from "next/font/local";

/** Body copy — the brand's existing body face. */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/** Wordmark, nav, buttons, headings — the "886" face (D-DIN Condensed, OFL). */
export const din = localFont({
  src: [
    { path: "../public/fonts/D-DINCondensed.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/D-DINCondensed-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-din",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
});

/**
 * Chinese brush accents (故事, 面类, 招牌…). This is a ~100 KB subset of the licensed
 * Aa红运手书 face containing only the characters used in section headings — the full font is 5.9 MB.
 * If you add a heading with new characters, re-subset (see README) or they will fall back to system CJK.
 */
export const brush = localFont({
  src: "../public/fonts/HongYun-subset.woff2",
  variable: "--font-brush",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["PingFang SC", "Microsoft YaHei", "Noto Sans SC", "serif"],
});
