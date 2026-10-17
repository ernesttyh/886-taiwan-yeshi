import type { MenuItem } from "@/lib/menu";

export function formatSgd(n: number) {
  return `$${n.toFixed(2)}`;
}

/** Price (or "from $x" when variants differ). Renders nothing until a price is filled in lib/menu.ts. */
export function Price({ item, className = "" }: { item: MenuItem; className?: string }) {
  const prices = [item.price, ...(item.variants?.map((v) => v.price) ?? [])].filter((p): p is number => p != null);
  if (prices.length === 0) return null;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return (
    <span className={`display whitespace-nowrap text-2xl tracking-[0.04em] text-brand-navy ${className}`}>
      {min === max ? formatSgd(min) : `from ${formatSgd(min)}`}
    </span>
  );
}
