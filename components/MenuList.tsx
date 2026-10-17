import type { MenuItem } from "@/lib/menu";
import { Price } from "./Price";
import { Tags } from "./Tags";

/** Compact text rows for items without photos (drinks, cold plates…). */
export function MenuList({ items, onDark = false, columns = 2 }: { items: MenuItem[]; onDark?: boolean; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-10 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it.id} id={`item-${it.id}`} className={`flex items-baseline justify-between gap-4 border-b py-3 ${onDark ? "border-brand-cream/30" : "border-brand-sand"}`}>
          <div className="flex flex-col gap-1">
            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className={`font-semibold ${onDark ? "text-brand-cream" : "text-brand-ink"}`}>{it.name}</span>
              <span lang="zh-Hans" className={`font-cn text-[13px] font-bold ${onDark ? "text-brand-cream" : "text-brand-red"}`}>{it.cn}</span>
              <Tags tags={it.tags} onDark={onDark} />
            </span>
            {it.desc && <span className={`text-[13px] ${onDark ? "text-brand-cream/80" : "text-brand-muted"}`}>{it.desc}</span>}
          </div>
          <Price item={it} className={`text-xl ${onDark ? "text-brand-cream" : ""}`} />
        </li>
      ))}
    </ul>
  );
}
