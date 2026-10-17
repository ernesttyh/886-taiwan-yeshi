import type { Tag } from "@/lib/menu";

const style: Record<Tag, { label: string; cls: string }> = {
  signature: { label: "Signature", cls: "border-brand-navy text-brand-navy" },
  bestseller: { label: "Best seller", cls: "border-brand-red bg-brand-red text-brand-cream" },
  spicy: { label: "Spicy", cls: "border-brand-red text-brand-red" },
  veg: { label: "Veg", cls: "border-brand-green text-brand-green" },
};

export function Tags({ tags, onDark = false }: { tags?: Tag[]; onDark?: boolean }) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Dietary and popularity tags">
      {tags.map((t) => (
        <li
          key={t}
          className={`inline-flex items-center rounded-full border-[1.5px] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] ${onDark ? "border-brand-cream text-brand-cream" : style[t].cls}`}
        >
          {style[t].label}
        </li>
      ))}
    </ul>
  );
}
