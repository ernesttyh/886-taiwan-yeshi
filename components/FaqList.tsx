import type { Faq } from "@/lib/faq";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <dl className="divide-y divide-brand-sand">
      {items.map((f) => (
        <div key={f.q} className="flex flex-col gap-1.5 py-4 first:pt-0">
          <dt className="text-lg font-bold text-brand-navy">{f.q}</dt>
          <dd className="text-[15px] leading-relaxed text-brand-muted">{f.a}</dd>
        </div>
      ))}
    </dl>
  );
}
