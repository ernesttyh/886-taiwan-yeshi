/**
 * Promotions. Add an object per offer; anything outside its validFrom–validThrough window is not shown
 * (and not emitted as schema.org Offer). Dates are ISO (YYYY-MM-DD), interpreted in Asia/Singapore.
 *
 * Example:
 * {
 *   id: "weekday-lunch",
 *   kicker: "Weekday lunch",
 *   title: "Signature Trio Bowl Set + drink",
 *   description: "Mon–Fri 11am–2pm. Any Trio Bowl Set with a soy milk or iced tea.",
 *   price: 14.9,
 *   validFrom: "2026-11-01",
 *   validThrough: "2026-12-31",
 *   terms: "Dine-in only. Not valid with other offers.",
 *   image: "/images/mood-bowls-red-backdrop.webp",
 *   href: "/menu#signature",
 * }
 */

export interface Promotion {
  id: string;
  kicker: string;
  title: string;
  description: string;
  price?: number;
  validFrom: string;
  validThrough: string;
  terms?: string;
  image?: string;
  href?: string;
}

export const promotions: Promotion[] = [];

export function livePromotions(now = new Date()): Promotion[] {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Singapore" }).format(now); // YYYY-MM-DD
  return promotions.filter((p) => p.validFrom <= today && today <= p.validThrough);
}

/** Merch is evergreen and lives on the Promotions page too. */
export const merch = {
  title: "Take the night market home",
  description: "The 886 tee and the striped market tote, as seen on the crew. Ask at the counter.",
  items: [
    { name: "886 tee", price: undefined as number | undefined },
    { name: "886 market tote", price: undefined as number | undefined },
  ],
  image: "/images/mood-crew-tee-apron.webp",
};
