import fs from "node:fs";
import path from "node:path";
import { formatPressDate, outletByName, outlets, press, type Outlet } from "@/lib/press";
import { IconArrow } from "./Icons";

/** True when the outlet's logo file is present in /public — checked at build time (server component). */
function hasLogo(o: Outlet) {
  return fs.existsSync(path.join(process.cwd(), "public", o.logo));
}

/** Logo if the file exists, otherwise the outlet name set in the display face. */
function OutletMark({ outlet, height = 32, className = "" }: { outlet: Outlet; height?: number; className?: string }) {
  if (hasLogo(outlet)) {
    // Cap very wide wordmarks so every logo carries similar visual weight in the strip.
    const width = Math.min(Math.round(height * (outlet.aspect ?? 3.5)), Math.round(height * 5));
    // Plain <img>: SVG logos should not go through the image optimizer, and the box is fixed by height.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={outlet.logo} alt={outlet.name} width={width} height={height} loading="lazy" decoding="async" className={`object-contain ${className}`} style={{ height, width }} />;
  }
  return <span className={`display text-[22px] tracking-[0.08em] text-brand-navy/70 md:text-[26px] ${className}`}>{outlet.short ?? outlet.name}</span>;
}

/** "As featured in" — outlet logo strip + article cards (horizontal snap-scroll on phones, grid on desktop). */
export function PressSection() {
  if (press.length === 0) return null;
  return (
    <section id="press" aria-labelledby="press-h" className="bg-white py-12 md:py-[72px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" lang="zh-Hans" className="font-brush text-5xl leading-none text-brand-red sm:text-6xl">报道</span>
            <h2 id="press-h" className="display text-[40px] leading-none text-brand-navy sm:text-[52px]">As featured in</h2>
          </div>
          <p className="text-[15px] text-brand-muted md:max-w-xs md:text-right">What Singapore&apos;s food press made of the night market in Terminal 3.</p>
        </div>

        {/* Outlet strip — logos where the files exist, names otherwise */}
        <ul aria-label="Publications that have featured 886" className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-brand-sand py-5 md:justify-between md:gap-x-10">
          {outlets.map((o) => (
            <li key={o.name} className="flex items-center">
              <a href={o.url} target="_blank" rel="noopener" aria-label={`${o.name} (opens in a new tab)`} className="inline-flex items-center opacity-90 transition-opacity hover:opacity-100">
                <OutletMark outlet={o} height={30} />
              </a>
            </li>
          ))}
        </ul>

        {/* Article cards */}
        <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {press.map((p) => {
            const outlet = outletByName(p.outlet);
            return (
              <li key={p.id} className="w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <article className="flex h-full flex-col gap-3 rounded-card border-2 border-brand-sand bg-brand-cream p-5">
                  <div className="flex min-h-7 items-center justify-between gap-3">
                    {outlet && hasLogo(outlet) ? (
                      <OutletMark outlet={outlet} height={22} />
                    ) : (
                      <span className="display rounded-full bg-brand-red px-3 py-1 text-[14px] tracking-[0.12em] text-brand-cream">{p.outletShort ?? p.outlet}</span>
                    )}
                    <time dateTime={p.date} className="shrink-0 text-[13px] font-semibold text-brand-muted">{formatPressDate(p.date)}</time>
                  </div>
                  <h3 className="text-[17px] font-bold leading-snug text-brand-navy">
                    <a href={p.url} target="_blank" rel="noopener" className="text-brand-navy no-underline hover:underline">
                      {p.title}
                    </a>
                  </h3>
                  <p className="text-[14px] leading-relaxed text-brand-muted">{p.summary}</p>
                  <a href={p.url} target="_blank" rel="noopener" className="display mt-auto inline-flex items-center gap-1.5 text-base tracking-[0.1em] text-brand-red no-underline hover:underline">
                    Read on {p.outlet} <IconArrow size={18} />
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
