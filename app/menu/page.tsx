import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DishCard } from "@/components/DishCard";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MenuList } from "@/components/MenuList";
import { SectionHeading } from "@/components/SectionHeading";
import { IconDownload } from "@/components/Icons";
import { categoryLinks, menu } from "@/lib/menu";
import { breadcrumb, graph, menuGraph } from "@/lib/schema";
import { delivery, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu: Beef Noodles, Lu Rou Fan, Bubble Tea",
  description:
    "Full menu with prices: beef la mian, lu rou fan, egg rice bowls, deep-fried xiao long bao, liang ban, soy pudding and bubble tea at 886, Changi Airport T3.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: `Menu | ${site.name}`,
    description: "Beef la mian, lu rou fan, XXL fried chicken, deep-fried xiao long bao, soy pudding and bubble tea — Changi Airport Terminal 3.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumb([{ name: "Home", path: "/" }, { name: "Menu", path: "/menu" }]), menuGraph())} />
      <Header current="/menu" />
      <main id="main" className="flex-1">
        {/* HERO BAND */}
        <section aria-labelledby="menu-h" className="bg-brand-red py-9 text-brand-cream md:py-14">
          <div className="mx-auto grid max-w-6xl items-center gap-5 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
            <div className="flex flex-col gap-3.5 md:gap-[18px]">
              <div className="flex items-center gap-3.5 md:gap-[18px]">
                <h1 id="menu-h" className="display text-[64px] leading-[0.95] md:text-[84px]">Menu</h1>
                <span aria-hidden="true" lang="zh-Hans" className="font-brush text-[54px] leading-none md:text-[72px]">菜单</span>
              </div>
              <p className="max-w-[560px] text-base leading-relaxed md:text-[19px]">
                Taiwanese street-food favourites at Changi Airport Terminal 3 — hand-pulled la mian, rice bowls, night-market snacks, liang ban, soy pudding and bubble tea.
              </p>
              <p className="text-[13px] md:text-sm">Prices are in SGD and subject to GST and service charge. Images are for illustration.</p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                {delivery.url ? (
                  <a href={delivery.url} target="_blank" rel="noopener" className="btn btn-cream">Order on {delivery.partner}</a>
                ) : (
                  <Link href="/find-us" className="btn btn-cream">Find us in T3</Link>
                )}
                <a href={site.menuPdf} className="btn btn-ghost" download>
                  <IconDownload size={20} /> PDF menu
                </a>
              </div>
            </div>
            <Image src="/images/hero-menu-crew-tees.webp" alt="886 crew in black 886 Taiwan Yè Shì tees and red aprons at the counter" width={1728} height={1031} priority sizes="(max-width: 768px) 100vw, 45vw" className="aspect-[16/9] w-full rounded-2xl object-cover md:aspect-[4/3] md:rounded-card" />
          </div>
        </section>

        {/* STICKY CATEGORY TABS */}
        <nav aria-label="Menu categories" className="sticky top-0 z-30 border-b-2 border-brand-navy bg-brand-cream/95 backdrop-blur">
          <ul className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2.5 sm:px-6">
            {categoryLinks.map((c) => (
              <li key={c.id} className="shrink-0">
                <a href={`#${c.id}`} className="display inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border-2 border-brand-navy bg-white px-4 text-base tracking-[0.08em] text-brand-navy no-underline hover:bg-brand-navy hover:text-brand-cream md:text-lg">
                  {c.title} <span lang="zh-Hans" className="font-cn text-[13px] normal-case tracking-normal">{c.cn}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SECTIONS */}
        {menu.map((s) => {
          const onRed = s.id === "liangban";
          return (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className={onRed ? "bg-brand-red py-10 text-brand-cream md:py-14" : "py-10 md:py-14"}>
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:gap-6">
                <SectionHeading id={`${s.id}-h`} cn={s.cn} badge tone={onRed ? "cream" : "navy"}>
                  {s.title}
                </SectionHeading>
                {s.lead && <p className={`max-w-[720px] text-base leading-relaxed ${onRed ? "text-brand-cream" : "text-brand-muted"}`}>{s.lead}</p>}

                {s.layout === "cards" && s.items && (
                  <ul className={`grid gap-3.5 sm:gap-5 ${s.items.length <= 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                    {s.items.map((it, i) => (
                      <li key={it.id}>
                        <DishCard item={it} priority={s.id === "signature" && i < 2} />
                      </li>
                    ))}
                  </ul>
                )}
                {s.more && <MenuList items={s.more} />}

                {s.layout === "list" && s.items && (
                  <div className={s.image ? "grid items-center gap-6 md:grid-cols-2 md:gap-8" : ""}>
                    {s.image && (
                      <Image src={s.image.src} alt={s.image.alt} width={1228} height={820} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[3/2] w-full rounded-card object-cover" />
                    )}
                    <MenuList items={s.items} onDark={onRed} columns={s.image ? 1 : 2} />
                  </div>
                )}

                {s.groups?.map((g) => (
                  <div key={g.title} className="mt-2 flex flex-col gap-2">
                    <h3 className="display flex items-center gap-3 text-[28px] tracking-[0.08em] text-brand-red">
                      {g.title}
                      {g.cn && <span lang="zh-Hans" className="font-cn text-lg normal-case tracking-normal text-brand-navy">{g.cn}</span>}
                    </h3>
                    <MenuList items={g.items} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* ORDER / PDF CTA */}
        <section aria-labelledby="order-h" className="bg-brand-navy py-11 text-brand-cream md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 sm:px-6 md:gap-5">
            <h2 id="order-h" className="display text-[40px] leading-none md:text-[48px]">Hungry now?</h2>
            <p className="max-w-[620px] text-base leading-relaxed opacity-95 md:text-[17px]">
              Walk in at {site.address.unit}, Terminal 3 — we&apos;re open daily 10:30 AM to 10:30 PM.{delivery.url ? ` Or get it delivered islandwide on ${delivery.partner}.` : ""}
            </p>
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
              {delivery.url && (
                <a href={delivery.url} target="_blank" rel="noopener" className="btn btn-red">Order on {delivery.partner}</a>
              )}
              <Link href="/find-us" className="btn btn-cream">Find us in T3</Link>
              <a href={site.menuPdf} className="btn btn-ghost" download>
                <IconDownload size={20} /> Download PDF menu
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
