import { delivery, reservations, site } from "./site";

export interface Faq {
  q: string;
  a: string;
}

const reservationAnswer =
  reservations === "walk-in"
    ? "We're walk-in only — come by any time between 10:30 AM and 10:30 PM. For large groups, give us a call on 8869 4022 and we'll do our best."
    : reservations === "tel"
      ? "Yes — call us on 8869 4022 to book a table."
      : `Yes — book online at ${reservations} or call us on 8869 4022.`;

export const faqs: Faq[] = [
  {
    q: "Do I need a boarding pass to eat at 886?",
    a: "No. We're in the public area of Terminal 3, Basement 2 — anyone can visit, whether or not you're flying.",
  },
  {
    q: "What are your opening hours?",
    a: `${site.hours.display}, including weekends and public holidays. ${site.hours.lastOrderDisplay}.`,
  },
  {
    q: "Can I dine in, or is it takeaway only?",
    a: delivery.url
      ? `Both. Dine in with us or take it away — and we deliver islandwide via ${delivery.partner}.`
      : "Both. Dine in with us, or take it away for the flight.",
  },
  { q: "Do you take reservations?", a: reservationAnswer },
  {
    q: "Is 886 halal?",
    a: "Yes — 886 Taiwan Ye Shi is halal-certified. Our beef lu rou fan, chicken cutlets, seafood and vegetable dishes are all prepared in a halal kitchen with no pork or lard.",
  },
  {
    q: "How do I get there from Changi Airport MRT?",
    a: "Exit the station towards Terminal 3 — the Basement 2 shops are right there. We're at #B2-40/40A, next to the yellow train carriage.",
  },
  {
    q: "Is there parking?",
    a: "Yes — use the Terminal 3 car park and take the lift down to Basement 2.",
  },
];
