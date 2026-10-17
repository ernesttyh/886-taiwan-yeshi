import { faqs } from "./faq";
import { menu, type MenuItem } from "./menu";
import { livePromotions } from "./promotions";
import { press } from "./press";
import { SITE_URL, site, fullAddress, reservations } from "./site";

const RESTAURANT_ID = `${SITE_URL}/#restaurant`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** The Restaurant node — referenced from every page by @id. */
export function restaurantNode() {
  return {
    "@type": "Restaurant",
    "@id": RESTAURANT_ID,
    name: site.name,
    alternateName: site.cnName,
    description: site.description,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.jpg`,
    telephone: site.phoneE164,
    servesCuisine: site.cuisine,
    priceRange: site.priceRange,
    acceptsReservations: reservations !== "walk-in",
    currenciesAccepted: "SGD",
    hasMenu: `${SITE_URL}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.unit}, ${site.address.venue}`,
      addressLocality: site.address.locality,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.hours.open,
        closes: site.hours.close,
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
    subjectOf: press.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: p.url,
      datePublished: p.date,
      publisher: { "@type": "Organization", name: p.outlet },
    })),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    publisher: { "@id": RESTAURANT_ID },
    inLanguage: "en-SG",
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

function menuItemNode(item: MenuItem) {
  const node: Record<string, unknown> = {
    "@type": "MenuItem",
    name: item.name,
    alternateName: item.cn,
  };
  if (item.desc) node.description = item.desc;
  if (item.image) node.image = `${SITE_URL}${item.image}`;
  if (item.price != null) node.offers = { "@type": "Offer", price: item.price.toFixed(2), priceCurrency: "SGD" };
  if (item.tags?.includes("veg")) node.suitableForDiet = "https://schema.org/VegetarianDiet";
  return node;
}

export function menuGraph() {
  return {
    "@type": "Menu",
    "@id": `${SITE_URL}/menu#menu`,
    name: `${site.name} Menu`,
    url: `${SITE_URL}/menu`,
    inLanguage: "en-SG",
    hasMenuSection: menu.map((s) => ({
      "@type": "MenuSection",
      name: s.title,
      alternateName: s.cn,
      ...(s.lead ? { description: s.lead } : {}),
      hasMenuItem: [...(s.items ?? []), ...(s.more ?? [])].map(menuItemNode),
      ...(s.groups
        ? {
            hasMenuSection: s.groups.map((g) => ({
              "@type": "MenuSection",
              name: g.title,
              alternateName: g.cn,
              hasMenuItem: g.items.map(menuItemNode),
            })),
          }
        : {}),
    })),
  };
}

export function faqGraph() {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function offersGraph() {
  return livePromotions().map((p) => ({
    "@type": "Offer",
    name: p.title,
    description: p.description,
    url: `${SITE_URL}/promotions#${p.id}`,
    validFrom: p.validFrom,
    validThrough: p.validThrough,
    ...(p.price != null ? { price: p.price.toFixed(2), priceCurrency: "SGD" } : {}),
    offeredBy: { "@id": RESTAURANT_ID },
  }));
}

/** Wrap nodes in one @graph. */
export function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes.flat() };
}

export { RESTAURANT_ID, fullAddress };
