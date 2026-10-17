import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { IconBurger, IconClose } from "./Icons";
import { delivery, nav, site } from "@/lib/site";

const linkCls =
  "display text-[22px] tracking-[0.1em] text-brand-cream no-underline hover:opacity-80 aria-[current=page]:border-b-[3px] aria-[current=page]:border-brand-cream";

export function Header({ current }: { current?: string }) {
  const orderHref = delivery.url || "/menu";
  return (
    <header className="w-full bg-brand-red text-brand-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-cream focus:px-4 focus:py-2 focus:text-brand-navy">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        {/* Desktop: links · wordmark · links */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.slice(0, 2).map((n) => (
            <Link key={n.href} href={n.href} className={linkCls} aria-current={current === n.href ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Wordmark size="md" className="hidden md:inline-flex" />
        <Wordmark size="sm" className="inline-flex md:hidden" />
        <nav aria-label="Secondary" className="hidden items-center gap-8 md:flex">
          <Link href="/promotions" className={linkCls} aria-current={current === "/promotions" ? "page" : undefined}>
            Promotions
          </Link>
          <a href={orderHref} className="btn btn-cream min-h-11 text-lg" {...(delivery.url ? { target: "_blank", rel: "noopener" } : {})}>
            Order now
          </a>
        </nav>

        {/* Mobile: no-JS disclosure menu */}
        <details className="group relative md:hidden">
          <summary
            className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full text-brand-cream marker:hidden [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <IconBurger size={28} className="group-open:hidden" />
            <IconClose size={28} className="hidden group-open:block" />
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 top-14 z-40 w-[min(88vw,320px)] rounded-2xl bg-brand-navy p-3 shadow-xl">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="display block rounded-xl px-4 py-3 text-2xl tracking-[0.08em] text-brand-cream no-underline hover:bg-white/10" aria-current={current === n.href ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneE164}`} className="display block rounded-xl px-4 py-3 text-2xl tracking-[0.08em] text-brand-cream no-underline hover:bg-white/10">
              Call {site.phoneDisplay}
            </a>
            <a href={orderHref} className="btn btn-red mt-2 w-full" {...(delivery.url ? { target: "_blank", rel: "noopener" } : {})}>
              Order now
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
