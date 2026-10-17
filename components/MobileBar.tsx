import Link from "next/link";
import { IconMenu, IconPhone, IconPin } from "./Icons";
import { site } from "@/lib/site";

/** Thumb-reach quick actions, fixed to the bottom of the screen on phones. */
export function MobileBar() {
  const item = "flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-2 text-xs font-semibold text-brand-cream no-underline";
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t-[3px] border-brand-red bg-brand-navy pb-[env(safe-area-inset-bottom)] md:hidden">
      <Link href="/menu" className={item}>
        <IconMenu size={22} />
        Menu
      </Link>
      <a href={site.mapsSearchUrl} target="_blank" rel="noopener" className={`${item} border-x border-brand-cream/20`}>
        <IconPin size={22} />
        Directions
      </a>
      <a href={`tel:${site.phoneE164}`} className={item}>
        <IconPhone size={22} />
        Call
      </a>
    </nav>
  );
}
