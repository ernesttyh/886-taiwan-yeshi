import Image from "next/image";
import type { MenuItem } from "@/lib/menu";
import { Price, formatSgd } from "./Price";
import { Tags } from "./Tags";

/** Menu card: photo on a red plate, EN name, CN name, blurb, tags and price. */
export function DishCard({ item, priority = false }: { item: MenuItem; priority?: boolean }) {
  return (
    <article id={`item-${item.id}`} className="grid grid-cols-[104px_1fr] items-center gap-3.5 rounded-card border-2 border-brand-sand bg-white p-3.5 sm:flex sm:flex-col sm:items-stretch sm:gap-2.5 sm:p-[18px]">
      {item.image ? (
        <div className="aspect-square w-[104px] overflow-hidden rounded-xl bg-brand-red sm:aspect-[376/300] sm:w-full sm:rounded-[14px]">
          <Image src={item.image} alt={`${item.name} — ${item.cn}`} width={376} height={356} sizes="(max-width: 640px) 104px, (max-width: 1024px) 45vw, 370px" className="h-full w-full object-contain" priority={priority} />
        </div>
      ) : (
        <div aria-hidden="true" className="flex aspect-square w-[104px] items-center justify-center rounded-xl bg-brand-navy font-brush text-3xl text-brand-cream sm:aspect-[376/300] sm:w-full sm:text-5xl">{item.cn}</div>
      )}
      <div className="flex flex-col gap-1.5 sm:flex-1">
        <h3 className="display text-[22px] leading-[1.05] tracking-[0.03em] text-brand-ink sm:text-[26px]">{item.name}</h3>
        <span lang="zh-Hans" className="font-cn text-[15px] font-bold text-brand-red">{item.cn}</span>
        {item.desc && <p className="text-sm leading-relaxed text-brand-muted">{item.desc}</p>}
        {item.variants && (
          <p className="text-[13px] text-brand-muted">
            {item.variants.map((v, i) => (
              <span key={v.name}>
                {i > 0 && " · "}
                {v.name}
                {v.price != null && ` ${formatSgd(v.price)}`}
              </span>
            ))}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <Tags tags={item.tags} />
          <Price item={item} />
        </div>
      </div>
    </article>
  );
}
