import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { formatSgd } from "@/components/Price";
import { livePromotions, merch } from "@/lib/promotions";
import { breadcrumb, graph, offersGraph } from "@/lib/schema";
import { newsletterAction, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Promotions & Happenings",
  description:
    "Current promotions, set deals, new dishes and merch at 886 Taiwan Yè Shì, Changi Airport Terminal 3. Sign up to hear about offers first.",
  alternates: { canonical: "/promotions" },
  openGraph: {
    title: `Promotions & Happenings | ${site.name}`,
    description: "Set deals, new dishes and merch at 886, Changi Airport Terminal 3.",
    url: "/promotions",
  },
};

// Offers change; re-evaluate the live list at most once an hour.
export const revalidate = 3600;

export default function PromotionsPage() {
  const live = livePromotions();
  return (
    <>
      <JsonLd data={graph(breadcrumb([{ name: "Home", path: "/" }, { name: "Promotions", path: "/promotions" }]), offersGraph())} />
      <Header current="/promotions" />
      <main id="main" className="flex-1">
        {/* HERO BAND */}
        <section aria-labelledby="promo-h" className="bg-brand-navy py-9 text-brand-cream md:py-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6 md:gap-3.5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-[18px]">
              <span aria-hidden="true" lang="zh-Hans" className="font-brush text-[44px] leading-none md:order-2 md:text-[56px]">限时优惠</span>
              <h1 id="promo-h" className="display text-[48px] leading-[0.95] md:order-1 md:text-[72px]">Promotions &amp; happenings</h1>
            </div>
            <p className="max-w-[620px] text-base leading-relaxed opacity-95 md:text-lg">
              Set lunches, seasonal specials, new dishes and merch drops at 886, Changi Airport Terminal 3. Offers change — check back, or let us tell you.
            </p>
          </div>
        </section>

        {/* LIVE OFFERS or EMPTY STATE */}
        <section aria-labelledby="live-h" className="py-9 md:py-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:gap-6">
            <h2 id="live-h" className="display text-[34px] leading-none text-brand-navy md:text-[48px]">On now</h2>
            {live.length > 0 ? (
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {live.map((p) => (
                  <li key={p.id} id={p.id} className="flex flex-col overflow-hidden rounded-card border-2 border-brand-sand bg-white">
                    {p.image && <Image src={p.image} alt="" width={800} height={600} sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[16/9] w-full object-cover md:aspect-[4/3]" />}
                    <div className="flex flex-1 flex-col gap-2.5 p-5">
                      <span className="display self-start rounded-full bg-brand-red px-3 py-1.5 text-[15px] tracking-[0.12em] text-brand-cream">{p.kicker}</span>
                      <h3 className="display text-[28px] leading-none text-brand-navy md:text-[30px]">{p.title}</h3>
                      <p className="text-[15px] leading-relaxed text-brand-muted">{p.description}</p>
                      {p.price != null && <span className="display text-2xl text-brand-navy">{formatSgd(p.price)}</span>}
                      <span className="text-[13px] font-semibold text-brand-muted">Valid {p.validFrom} – {p.validThrough}</span>
                      {p.terms && <p className="text-xs text-brand-muted">{p.terms}</p>}
                      <Link href={p.href ?? "/menu"} className="btn btn-red mt-auto self-start">See the menu</Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col gap-4 rounded-card border-2 border-dashed border-[#C9BD8E] bg-[#FFF6CF] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div className="flex flex-col gap-1.5">
                  <h3 className="display text-[28px] leading-none text-brand-navy md:text-[34px]">Nothing on right now — but the kitchen never stops</h3>
                  <p className="max-w-[560px] text-[15px] text-brand-muted">Follow us for drops and specials, or come find your next favourite on the menu.</p>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <a href={site.social.instagram} target="_blank" rel="noopener" className="btn btn-red">Follow on Instagram</a>
                  <Link href="/menu" className="btn btn-outline">See the menu</Link>
                </div>
              </div>
            )}

            {/* MERCH — evergreen */}
            <article className="grid overflow-hidden rounded-card border-2 border-brand-sand bg-white md:grid-cols-[2fr_3fr]">
              <Image src={merch.image} alt="886 crew member in the black 886 tee and red apron" width={445} height={667} sizes="(max-width: 768px) 100vw, 40vw" className="aspect-[16/9] w-full object-cover object-[center_35%] md:aspect-auto md:h-full" />
              <div className="flex flex-col gap-2.5 p-5 md:p-7">
                <span className="display self-start rounded-full bg-brand-red px-3 py-1.5 text-[15px] tracking-[0.12em] text-brand-cream">Merch</span>
                <h3 className="display text-[28px] leading-none text-brand-navy md:text-[34px]">{merch.title}</h3>
                <p className="text-[15px] leading-relaxed text-brand-muted md:text-base">{merch.description}</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[14px] font-semibold text-brand-muted">
                  {merch.items.map((m) => (
                    <li key={m.name}>{m.name}{m.price != null && ` · ${formatSgd(m.price)}`}</li>
                  ))}
                </ul>
                <Link href="/find-us" className="btn btn-outline mt-2 self-start">Visit the counter</Link>
              </div>
            </article>
          </div>
        </section>

        {/* SIGN-UP (shown once a form endpoint is configured) */}
        {newsletterAction && (
          <section aria-labelledby="signup-h" className="bg-brand-red py-10 text-brand-cream md:py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-5 px-4 sm:px-6 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-2.5">
                <h2 id="signup-h" className="display text-[36px] leading-none md:text-[48px]">Hear about offers first</h2>
                <p className="text-[15px] leading-relaxed opacity-95 md:text-[17px]">One short message when there&apos;s a new deal or dish — nothing else. Unsubscribe any time.</p>
              </div>
              <form action={newsletterAction} method="post" className="flex flex-col gap-2.5 rounded-card bg-brand-cream p-5 md:p-6">
                <label htmlFor="email" className="text-[15px] font-bold text-brand-navy">Email address</label>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <input id="email" name="EMAIL" type="email" required autoComplete="email" placeholder="you@example.com" className="min-h-12 flex-1 rounded-full border-2 border-brand-navy bg-white px-4 text-base text-brand-ink" />
                  <button type="submit" className="btn btn-navy">Keep me posted</button>
                </div>
                <p className="text-xs text-brand-muted">By signing up you agree to receive marketing emails from {site.name}.</p>
              </form>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
