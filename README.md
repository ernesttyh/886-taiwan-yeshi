# 886 Taiwan Yè Shì — website

Taiwanese night-market restaurant at Changi Airport Terminal 3. Rebuilt from the approved mockups on
**Next.js 15 (App Router) + Tailwind CSS 4 + TypeScript**, deployed on Vercel like the previous site.

Pages: `/` Home · `/menu` · `/find-us` (301 from the old `/contact`) · `/promotions`
Plus `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon/app icons and a 1200×630 Open Graph image per page.

Lighthouse (mobile, local build): **SEO 100 · Accessibility 100 · Best practices 100 · Performance 88–97**.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in what you have (all optional)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Deploy: import the repo in Vercel, add the environment variables from `.env.example`, set the domain. Nothing else to configure.

## Where things live

| What | File |
|---|---|
| Name, address, phone, hours, socials, map links | `lib/site.ts` — change once, updates everywhere (footer, Find Us, JSON-LD, open-now badge) |
| **Menu** (sections, items, EN/CN names, descriptions, tags, **prices**) | `lib/menu.ts` — also generates the schema.org `Menu` graph |
| Promotions / offers | `lib/promotions.ts` — add an object per offer with `validFrom` / `validThrough`; expired offers disappear automatically and the empty state shows instead |
| FAQ (Find Us) | `lib/faq.ts` — emitted as `FAQPage` schema |
| **Media coverage** ("As featured in" on Home) | `lib/press.ts` — add a feature at the top; also emitted as `subjectOf` Articles on the Restaurant schema |
| Publication logos for that section | `public/press/` — drop each outlet's official logo under the filename in `lib/press.ts` (see `public/press/README.txt`); the name shows as text until the file exists |
| JSON-LD builders | `lib/schema.ts` |
| Open / closed logic | `lib/hours.ts` + `components/OpenNowBadge.tsx` (computed in the browser against Singapore time, so static pages never go stale) |
| Brand tokens (colours, fonts, radius) | `app/globals.css` `@theme` block |
| Fonts | `app/fonts.ts` — D-DIN Condensed (self-hosted, OFL), Inter (next/font), Chinese brush subset (self-hosted) |
| Images | `public/images/*.webp` (web-sized, from the brand kit) |
| PDF menu | `public/menu.pdf` (2 MB web version of the 20 MB print file — replace when the menu changes) |

## Things to fill in

1. **Prices** — every item in `lib/menu.ts` has an optional `price` (SGD). Items without one simply show no price.
   Variants (`Chicken / Mala`) can carry their own prices; the card then shows "from $x".
2. **Ordering link** — `NEXT_PUBLIC_DELIVERY_URL` + `NEXT_PUBLIC_DELIVERY_PARTNER`. Until set, "Order delivery" buttons
   are hidden and "Order now" in the header goes to the menu.
3. **Reservations** — `NEXT_PUBLIC_RESERVATIONS` = `walk-in` (default) · `tel` · or a booking URL. Drives the FAQ answer
   and `acceptsReservations` in schema.
4. **Newsletter** — `NEXT_PUBLIC_NEWSLETTER_ACTION` = your Mailchimp/Klaviyo form action URL (field name `EMAIL`).
   The sign-up block on Promotions is hidden until set.
5. **Tracking** — `NEXT_PUBLIC_GTM_ID`. Loads GA4 / Meta Pixel through one GTM container; nothing loads without it.
6. **Search Console** — `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if you verify by meta tag (DNS verification needs nothing).
7. **Street address** — `lib/site.ts` uses *65 Airport Boulevard*; confirm against the lease / Google Business Profile.
8. **Press-reported prices** — six items in `lib/menu.ts` carry prices quoted by HungryGoWhere (22 Jul 2026), marked `// press`. Confirm against the POS and remove the markers.
9. **Pork-free FAQ** — `lib/faq.ts` states the kitchen is pork-free and lard-free (per Great New Places). Confirm, and add the halal-certification status if there is one.

## SEO built in

- Unique `<title>` / description / canonical / OG + Twitter image per route (`generateMetadata` via the Metadata API)
- One H1 per page, headings in order; Chinese brush characters are `aria-hidden` decoration, CN dish names are real text
- JSON-LD graph: `Restaurant` (+ hours, geo, sameAs) and `WebSite` on every page; `Menu → MenuSection → MenuItem` on `/menu`;
  `FAQPage` on `/find-us`; `Offer` per live promotion; `BreadcrumbList` on inner pages
- `app/sitemap.ts`, `app/robots.ts`, `/contact → /find-us` 301 in `next.config.ts`
- All images through `next/image` (AVIF/WebP, lazy below the fold, `priority` on the hero)
- Fonts self-hosted and subset; no third-party scripts unless GTM is configured

## Launch checklist

- [ ] Fill prices, delivery link, reservation policy
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain in Vercel
- [ ] Point the domain, confirm `https://886taiwanyeshi.com.sg/contact` redirects
- [ ] Search Console: add property, submit `/sitemap.xml`, request indexing for the 4 pages
- [ ] Google Business Profile: website → `/`, menu → `/menu`, hours/phone identical to `lib/site.ts`
- [ ] Run PageSpeed Insights on all four pages and keep the report

## Fonts & licences

- **D-DIN Condensed** (Datto, SIL OFL) — free, included.
- **Aa红运手书 / AaHongYunShouShu** (HanMeiHutong) — commercial. `public/fonts/HongYun-subset.woff2` is a subset of the
  file the previous site shipped, limited to the characters used in headings. Confirm the web licence with the client.
  To re-subset after adding new Chinese heading text: `pyftsubset AaHongYunShouShu.woff2 --text="…" --flavor=woff2`.
- **Inter** (Google Fonts, OFL) via `next/font`.
- FF DIN, Playfair Display and Bebas Neue from the old site are **not** used.

## Structure

```
app/            routes, layout, metadata, sitemap/robots/manifest, OG images, icons
components/     Header, Footer, MobileBar, OpenNowBadge, DishCard, MenuList, SectionHeading, FaqList, JsonLd, Icons…
lib/            site.ts, menu.ts, promotions.ts, faq.ts, hours.ts, schema.ts
public/         images/, fonts/, menu.pdf, icon-*.png
```
