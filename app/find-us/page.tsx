import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { OpenNowBadge } from "@/components/OpenNowBadge";
import { IconBus, IconTrain, IconTruck } from "@/components/Icons";
import { faqs } from "@/lib/faq";
import { breadcrumb, faqGraph, graph } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Us — Changi Airport Terminal 3, #B2-40",
  description:
    "886 Taiwan Yè Shì is at #B2-40/40A, Changi Airport Terminal 3 (public area, Basement 2). Open daily 10:30am–10:30pm. Directions from the MRT and car park.",
  alternates: { canonical: "/find-us" },
  openGraph: {
    title: `Find Us in Terminal 3 | ${site.name}`,
    description: "Basement 2, #B2-40/40A, Changi Airport Terminal 3 — public area, open daily 10:30 AM – 10:30 PM.",
    url: "/find-us",
  },
};

const steps = [
  <>From the Departure or Arrival Hall, take the escalators or lifts down to <strong>Basement 2</strong>.</>,
  <>Head towards the B2 shops and eateries. Coming from the MRT? Exit towards Terminal 3 and you&apos;re already on B2.</>,
  <>Look for the <strong>yellow Taipei train carriage</strong> and the red 886 sign at <strong>{site.address.unit}</strong>.</>,
];

const card = "flex flex-col gap-3.5 rounded-card border-2 border-brand-sand bg-white p-[18px] md:p-6";
const cardNavy = "flex flex-col gap-3.5 rounded-card border-2 border-brand-navy bg-brand-navy p-[18px] text-brand-cream md:p-6";

export default function FindUsPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumb([{ name: "Home", path: "/" }, { name: "Find Us", path: "/find-us" }]), faqGraph())} />
      <Header current="/find-us" />
      <main id="main" className="flex-1">
        {/* HERO */}
        <section aria-labelledby="find-h" className="relative flex min-h-[380px] items-end overflow-hidden bg-brand-maroon md:min-h-[420px]">
          <Image src="/images/storefront-changi-t3-signage.webp" alt="886 Taiwan Yè Shì storefront at Changi Airport Terminal 3 Basement 2, with its Taipei-style train carriage" fill priority sizes="100vw" className="object-cover object-[22%_40%] md:object-[center_40%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-ink/10 to-brand-ink/85" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-7 pt-16 sm:px-6 md:gap-3.5 md:pb-10 md:pt-20">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="display inline-flex items-center rounded-full bg-brand-cream px-3.5 py-2 text-sm tracking-[0.14em] text-brand-red md:text-base">Basement 2 · {site.address.unit}</span>
              <OpenNowBadge />
            </div>
            <h1 id="find-h" className="display max-w-[800px] text-[42px] leading-[0.95] text-brand-cream md:text-[68px]">Find us at Changi Airport Terminal 3</h1>
            <p className="max-w-[620px] text-base leading-relaxed text-brand-cream/95 md:text-lg">Public area, Basement 2 — no boarding pass needed. Look for the Taipei train carriage.</p>
          </div>
        </section>

        {/* DETAILS + MAP */}
        <section aria-labelledby="details-h" className="py-9 md:py-14">
          <div className="mx-auto grid max-w-6xl items-start gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 id="details-h" className="display text-[34px] leading-none text-brand-navy md:text-[48px]">Address &amp; hours</h2>
              <div className={card}>
                <address className="text-base leading-relaxed md:text-lg">
                  <strong>{site.name}</strong>
                  <br />
                  {site.address.street}, {site.address.unit}
                  <br />
                  {site.address.venue}
                  <br />
                  Singapore {site.address.postal}
                </address>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <a href={site.mapsSearchUrl} target="_blank" rel="noopener" className="btn btn-red">Get directions</a>
                  <a href={`tel:${site.phoneE164}`} className="btn btn-outline">Call {site.phoneDisplay}</a>
                </div>
              </div>
              <div className={card}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <h3 className="display text-2xl text-brand-navy md:text-[26px]">Opening hours</h3>
                  <OpenNowBadge tone="dark" />
                </div>
                <dl className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2.5 text-[15px] md:text-base">
                  <dt className="font-semibold">Monday – Friday</dt><dd className="tabular-nums">10:30 AM – 10:30 PM</dd>
                  <dt className="font-semibold">Saturday – Sunday</dt><dd className="tabular-nums">10:30 AM – 10:30 PM</dd>
                  <dt className="font-semibold">Public holidays</dt><dd className="tabular-nums">10:30 AM – 10:30 PM</dd>
                  <dt className="font-semibold text-brand-red">Last order</dt><dd className="tabular-nums text-brand-red">9:30 PM daily</dd>
                </dl>
              </div>
              <div className={cardNavy}>
                <h3 className="display text-2xl md:text-[26px]">Getting here</h3>
                <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                  <li className="flex gap-3"><IconTrain size={24} className="shrink-0" /><span><strong>MRT</strong> — Changi Airport station (East-West Line). Follow signs to Terminal 3; we&apos;re in the Basement 2 shops.</span></li>
                  <li className="flex gap-3"><IconTruck size={24} className="shrink-0" /><span><strong>Car &amp; taxi</strong> — Terminal 3 car park; take the lift down to Basement 2. Taxi and ride-hail drop-off at the T3 Arrival Hall.</span></li>
                  <li className="flex gap-3"><IconBus size={24} className="shrink-0" /><span><strong>Bus</strong> — public buses stop at the Terminal 3 basement bus bays, a short walk away.</span></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              <h2 className="display text-[34px] leading-none text-brand-navy md:text-[48px]">On the map</h2>
              <div className="overflow-hidden rounded-card border-2 border-brand-sand bg-brand-cream-dark">
                <iframe
                  title={`Map: ${site.name}, Changi Airport Terminal 3 Basement 2`}
                  src={site.mapsEmbedUrl}
                  width="100%"
                  height="380"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block w-full border-0"
                />
              </div>
              <div className={card}>
                <h3 className="display text-2xl text-brand-navy md:text-[26px]">Once you&apos;re in Terminal 3</h3>
                <ol className="flex flex-col gap-3.5">
                  {steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span aria-hidden="true" className="display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-2xl text-brand-cream">{i + 1}</span>
                      <p className="pt-2 text-[15px] leading-relaxed">{s}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-h" className="bg-white py-9 md:py-14">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-[1fr_2fr] md:gap-8">
            <div className="flex flex-col gap-2.5">
              <h2 id="faq-h" className="display text-[34px] leading-none text-brand-navy md:text-[48px]">Good to know</h2>
              <p className="text-[15px] leading-relaxed text-brand-muted">Answers to what people ask before they come.</p>
            </div>
            <FaqList items={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-h" className="bg-brand-red py-10 text-brand-cream md:py-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-5">
            <div className="flex flex-col gap-2">
              <h2 id="cta-h" className="display text-[36px] leading-none md:text-[44px]">Decide what to eat on the way</h2>
              <p className="text-[15px] opacity-95 md:text-base">Hand-pulled la mian, lu rou fan, XXL fried chicken, bubble tea.</p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link href="/menu" className="btn btn-cream">See the menu</Link>
              <a href={`tel:${site.phoneE164}`} className="btn btn-navy">Call us</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
