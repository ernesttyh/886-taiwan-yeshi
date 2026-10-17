import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { OpenNowBadge } from "@/components/OpenNowBadge";
import { PressSection } from "@/components/PressSection";
import { InstagramSection } from "@/components/InstagramSection";
import { SectionHeading } from "@/components/SectionHeading";
import { IconArrow, IconClock, IconPin, IconTruck } from "@/components/Icons";
import { categoryLinks, featured, findItem } from "@/lib/menu";
import { graph, breadcrumb } from "@/lib/schema";
import { delivery, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Taiwan Night Market Food at Changi Airport T3 | ${site.name}` },
  description:
    "Taiwanese night-market food at Changi Airport T3, Basement 2: hand-pulled la mian, lu rou fan, XXL fried chicken, bubble tea. Open daily 10:30am–10:30pm.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Taiwan Night Market Food at Changi Airport T3 | ${site.name}`,
    description: "Hand-pulled la mian, lu rou fan, XXL fried chicken and bubble tea — Basement 2, Terminal 3. Open daily 10:30am–10:30pm.",
    url: "/",
  },
};

const facts = [
  { Icon: IconClock, title: "Open daily", text: `10:30 AM – 10:30 PM · ${site.hours.lastOrderDisplay.toLowerCase()}` },
  { Icon: IconPin, title: "Basement 2, Terminal 3", text: "Public area — no boarding pass needed · near Changi Airport MRT" },
  {
    Icon: IconTruck,
    title: delivery.url ? "Dine in · takeaway · delivery" : "Dine in · takeaway",
    text: delivery.url ? `Walk-ins welcome · islandwide delivery via ${delivery.partner}` : "Walk-ins welcome · everything packs well for the flight",
  },
];

export default function HomePage() {
  const dishes = featured.map(findItem).filter((d) => d !== undefined);
  return (
    <>
      <JsonLd data={graph(breadcrumb([{ name: "Home", path: "/" }]))} />
      <Header current="/" />
      <main id="main" className="flex-1">
        {/* HERO */}
        <section aria-labelledby="hero-h" className="relative flex min-h-[560px] items-end overflow-hidden bg-brand-maroon md:min-h-[640px]">
          <Image
            src="/images/hero-home-nightmarket-spread.webp"
            alt="Taiwanese night-market spread at 886 Taiwan Yè Shì: beef noodles, xiao long bao, oyster mee sua and chilli dips on a Taipei railway platform"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[40%_60%] md:object-[center_60%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-ink/5 via-brand-ink/45 to-brand-ink/90" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-8 pt-20 sm:px-6 md:gap-5 md:pb-14 md:pt-24">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="display inline-flex items-center rounded-full bg-brand-cream px-3.5 py-2 text-sm tracking-[0.14em] text-brand-red md:text-base">Changi Airport Terminal 3 · #B2-40/40A</span>
              <OpenNowBadge />
            </div>
            <h1 id="hero-h" className="display max-w-[820px] text-[46px] leading-[0.95] text-brand-cream md:text-[64px] lg:text-[76px]">
              Taiwan night market food at Changi Airport Terminal 3
            </h1>
            <p className="max-w-[640px] text-[17px] leading-relaxed text-brand-cream/95 md:text-xl">
              Bold flavours, comforting classics, night market vibes. Hand-pulled la mian, lu rou fan, XXL fried chicken and bubble tea — before you fly, after you land, or just because.
            </p>
            <div className="mt-1 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3.5">
              <Link href="/menu" className="btn btn-red">See the menu</Link>
              <Link href="/find-us" className="btn btn-ghost">Find us in T3</Link>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section aria-label="Quick facts" className="bg-brand-navy text-brand-cream">
          <ul className="mx-auto grid max-w-6xl gap-5 px-4 py-6 sm:px-6 md:grid-cols-3 md:py-7">
            {facts.map(({ Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3.5">
                <Icon size={28} className="shrink-0" />
                <div>
                  <div className="display text-xl tracking-[0.1em] md:text-[22px]">{title}</div>
                  <div className="text-[14px] opacity-90 md:text-[15px]">{text}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SIGNATURE DISHES */}
        <section aria-labelledby="sig-h" className="py-12 md:py-[72px]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <SectionHeading id="sig-h" cn="招牌">Night market favourites</SectionHeading>
              <Link href="/menu" className="display inline-flex items-center gap-2 self-start border-b-[3px] border-brand-red pb-0.5 text-lg tracking-[0.1em] text-brand-red no-underline md:text-xl">
                Full menu <IconArrow size={20} />
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {dishes.map((d) => (
                <li key={d.id}>
                  <Link href={`/menu#item-${d.id}`} className="grid h-full grid-cols-[112px_1fr] items-center gap-3.5 rounded-card bg-brand-red p-[18px] text-brand-cream no-underline transition-colors hover:bg-brand-red-dark sm:flex sm:flex-col sm:items-stretch sm:gap-3 sm:p-[22px]">
                    {d.image && (
                      <Image src={d.image} alt={`${d.name} — ${d.cn}`} width={376} height={356} sizes="(max-width: 640px) 112px, (max-width: 1024px) 45vw, 360px" className="aspect-square w-[112px] object-contain sm:aspect-[376/300] sm:w-full" />
                    )}
                    <div className="flex flex-col gap-1.5 sm:gap-3">
                      <span lang="zh-Hans" className="cn-label self-start">{d.cn}</span>
                      <h3 className="display text-2xl leading-none tracking-[0.04em] sm:text-[30px]">{d.name}</h3>
                      {d.desc && <p className="text-sm leading-relaxed opacity-95 sm:text-[15px]">{d.desc}</p>}
                    </div>
                  </Link>
                </li>
              ))}
              <li>
                <div className="flex h-full flex-col justify-between gap-3 rounded-card bg-brand-navy p-5 text-brand-cream sm:p-[22px]">
                  <div>
                    <span aria-hidden="true" lang="zh-Hans" className="block font-brush text-[44px] leading-none sm:text-[56px]">招牌三拼</span>
                    <h3 className="display mt-2.5 text-[26px] leading-none tracking-[0.04em] sm:text-[30px]">Signature Trio Bowl Set</h3>
                    <p className="mt-2.5 text-sm leading-relaxed opacity-95 sm:text-[15px]">Can&apos;t decide? Lu rou fan, oyster mee sua and scallion-oil chicken rice, in three little bowls.</p>
                  </div>
                  <Link href="/menu#signature" className="btn btn-cream self-start">See the full menu</Link>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* PRESS */}
        <PressSection />

        {/* STORY */}
        <section id="our-story" aria-labelledby="story-h" className="bg-brand-navy py-12 text-brand-cream md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
            <Image src="/images/story-wok-flame.webp" alt="A cook tosses herbs into a flaming wok at 886 Taiwan Yè Shì" width={1124} height={749} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[3/2] w-full rounded-card object-cover" />
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="font-brush text-[56px] leading-none md:text-[72px]">故</span>
                <h2 id="story-h" className="display text-[40px] leading-none md:text-[52px]">Our story</h2>
                <span aria-hidden="true" className="font-brush text-[56px] leading-none md:text-[72px]">事</span>
              </div>
              <p className="display text-[22px] tracking-[0.06em] md:text-[26px]">Food is the heart of culture</p>
              <p className="text-base leading-[1.65] opacity-95 md:text-[17px]">
                886 is the dialling code for Taiwan, and the feeling of stepping off the train at Shifen into a night market: steam, sky lanterns, the smell of pepper-salt chicken. We bring that to Terminal 3 — from the vintage train cabin and railway tracks at our door to the hand-pulled la mian, braised beef, soy pudding and bubble tea on your tray.
              </p>
              <p className="text-base leading-[1.65] opacity-95 md:text-[17px]">Every dish is a story of tradition and a little innovation. Come hungry.</p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link href="/menu" className="btn btn-red">Explore the menu</Link>
                <Link href="/find-us" className="btn btn-ghost">Plan your visit</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CRAVING CHIPS */}
        <section aria-labelledby="crave-h" className="py-11 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6">
            <h2 id="crave-h" className="display text-[40px] leading-none text-brand-navy md:text-[52px]">What are you craving?</h2>
            <ul className="flex flex-wrap gap-2.5 md:gap-3">
              {categoryLinks
                .filter((c) => c.id !== "signature")
                .map((c) => (
                  <li key={c.id}>
                    <Link href={`/menu#${c.id}`} className="display inline-flex min-h-12 items-center gap-2.5 rounded-full border-2 border-brand-navy bg-white px-5 text-lg tracking-[0.08em] text-brand-navy no-underline hover:bg-brand-navy hover:text-brand-cream md:text-xl">
                      {c.title} <span lang="zh-Hans" className="font-cn text-base normal-case tracking-normal">{c.cn}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* VISIT */}
        <section aria-labelledby="visit-h" className="bg-brand-red py-12 text-brand-cream md:py-[72px]">
          <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 id="visit-h" className="display text-[40px] leading-none md:text-[52px]">Find us in Terminal 3</h2>
              <address className="text-base leading-relaxed md:text-lg">
                {site.name}
                <br />
                {site.address.street}, {site.address.unit}
                <br />
                {site.address.venue}, Singapore {site.address.postal}
              </address>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-2xl bg-brand-ink/20 p-4 text-[15px] md:p-5 md:text-base">
                <dt className="display text-lg tracking-[0.1em]">Hours</dt>
                <dd>{site.hours.display} ({site.hours.lastOrderDisplay.toLowerCase()})</dd>
                <dt className="display text-lg tracking-[0.1em]">Where</dt>
                <dd>Basement 2, public area — take the escalator or lift down from the Departure Hall, or walk over from Changi Airport MRT.</dd>
                <dt className="display text-lg tracking-[0.1em]">Phone</dt>
                <dd><a href={`tel:${site.phoneE164}`} className="font-semibold text-brand-cream">{site.phoneDisplay}</a></dd>
              </dl>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link href="/find-us" className="btn btn-cream">Get directions</Link>
                <a href={`tel:${site.phoneE164}`} className="btn btn-ghost">Call us</a>
              </div>
            </div>
            <div className="relative aspect-video self-start overflow-hidden rounded-card bg-brand-cream">
              <Image src="/images/storefront-changi-t3-signage.webp" alt="886 Taiwan Yè Shì storefront at Changi Airport Terminal 3 with its Taipei-style train carriage" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <span className="display absolute bottom-3.5 left-3.5 rounded-full bg-brand-navy px-4 py-2.5 text-sm tracking-[0.12em] text-brand-cream md:text-base">Look for the train cabin</span>
            </div>
          </div>
        </section>

        {/* SOCIAL — latest Instagram posts */}
        <InstagramSection />
      </main>
    </>
  );
}
