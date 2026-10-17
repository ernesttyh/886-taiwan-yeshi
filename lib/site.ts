/**
 * Single source of truth for the restaurant's public facts (NAP, hours, links).
 * Everything on the site — the footer, Find Us, JSON-LD, the open-now badge — reads from here,
 * so a change in one place changes it everywhere, and Google Business Profile can be kept in sync.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://886taiwanyeshi.com.sg").replace(/\/$/, "");

export const site = {
  name: "886 Taiwan Yè Shì",
  shortName: "886",
  cnName: "886 台湾夜市",
  tagline: "Bold flavours, comforting classics, night market vibes.",
  description:
    "Taiwanese night-market restaurant at Changi Airport Terminal 3, Singapore — hand-pulled la mian, lu rou fan, XXL fried chicken, soy pudding and bubble tea.",
  cuisine: "Taiwanese",
  priceRange: "$$",
  phoneDisplay: "8869 4022",
  phoneE164: "+6588694022",
  address: {
    venue: "Changi Airport Terminal 3",
    street: "65 Airport Boulevard",
    unit: "#B2-40/40A",
    level: "Basement 2",
    postal: "819663",
    country: "SG",
    locality: "Singapore",
  },
  // Approximate coordinates of Changi Airport Terminal 3 — tighten from Google Business Profile if needed.
  geo: { lat: 1.3565, lng: 103.9865 },
  timezone: "Asia/Singapore",
  hours: {
    open: "10:30",
    close: "22:30",
    lastOrder: "21:30",
    display: "Daily 10:30 AM – 10:30 PM",
    lastOrderDisplay: "Last order 9:30 PM",
  },
  social: {
    instagram: "https://www.instagram.com/886taiwanyeshisg/",
    instagramHandle: "@886taiwanyeshisg",
    facebook: "https://www.facebook.com/886taiwanyeshisg/",
    tiktok: "https://www.tiktok.com/@886taiwanyeshi",
  },
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=886+Taiwan+Ye+Shi+Changi+Airport+Terminal+3+B2-40",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=886%20Taiwan%20Ye%20Shi%2C%20Changi%20Airport%20Terminal%203%2C%20%23B2-40&t=&z=17&ie=UTF8&iwloc=&output=embed",
  menuPdf: "/menu.pdf",
} as const;

export const delivery = {
  url: process.env.NEXT_PUBLIC_DELIVERY_URL || "",
  partner: process.env.NEXT_PUBLIC_DELIVERY_PARTNER || "delivery",
};

export const reservations = process.env.NEXT_PUBLIC_RESERVATIONS || "walk-in";
export const newsletterAction = process.env.NEXT_PUBLIC_NEWSLETTER_ACTION || "";

export const fullAddress = `${site.address.street}, ${site.address.unit}, ${site.address.venue}, Singapore ${site.address.postal}`;

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/find-us", label: "Find Us" },
  { href: "/promotions", label: "Promotions" },
] as const;
