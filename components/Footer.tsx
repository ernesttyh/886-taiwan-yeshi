import Link from "next/link";
import { IconFacebook, IconInstagram, IconTikTok } from "./Icons";
import { nav, site } from "@/lib/site";

const social = [
  { href: site.social.instagram, label: "Instagram", Icon: IconInstagram },
  { href: site.social.facebook, label: "Facebook", Icon: IconFacebook },
  { href: site.social.tiktok, label: "TikTok", Icon: IconTikTok },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy pb-24 pt-12 text-brand-cream md:pb-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-9 px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
          <div className="flex flex-col gap-4">
            <div className="leading-none">
              <span className="display block text-[52px] tracking-normal">886</span>
              <span className="display mt-1 block text-[14px] tracking-[0.25em]">Taiwan Yè Shì</span>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed opacity-90">
              Taiwanese night-market restaurant at Changi Airport Terminal 3, Singapore. {site.tagline}
            </p>
            <ul className="flex gap-2.5">
              {social.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} target="_blank" rel="noopener" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red text-brand-cream hover:bg-brand-red-dark">
                    <Icon size={22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <span className="display text-lg tracking-[0.14em] opacity-70">Explore</span>
            <Link href="/" className="text-brand-cream no-underline hover:underline">Home</Link>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-brand-cream no-underline hover:underline">
                {n.label}
              </Link>
            ))}
            <Link href="/menu#drinks" className="text-brand-cream no-underline hover:underline">Bubble tea &amp; drinks</Link>
          </nav>
          <div className="flex flex-col gap-2.5">
            <span className="display text-lg tracking-[0.14em] opacity-70">Visit</span>
            <address className="leading-relaxed">
              {site.address.street}, {site.address.unit}
              <br />
              {site.address.venue}
              <br />
              Singapore {site.address.postal}
            </address>
            <span>{site.hours.display}</span>
            <a href={`tel:${site.phoneE164}`} className="font-semibold text-brand-cream no-underline hover:underline">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-brand-cream/20 pt-4 text-[13px] opacity-80 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Prices subject to GST and service charge.</span>
        </div>
      </div>
    </footer>
  );
}
