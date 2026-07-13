# 886 Taiwan Yè Shì

Website for 886 Taiwan Yè Shì — a Taiwanese street food restaurant.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Bebas Neue (headings), Playfair Display (body/section titles)
- **Database:** Supabase (reservations)
- **Hosting:** Vercel

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, Our Story preview, gallery |
| Menu | `/menu` | Full food menu with 5 categories |
| Our Story | `/our-story` | Restaurant story and heritage |
| Reservations | `/reservation` | Booking form (saves to Supabase) |
| Promotions | `/promotions` | Current promos |
| Contact | `/contact` | Address, hours, contact info |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Live Site

[886-taiwan-yeshi.vercel.app](https://886-taiwan-yeshi.vercel.app)

<!-- Last deployed: 2026-07-13 -->
