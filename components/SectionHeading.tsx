import type { ReactNode } from "react";

/**
 * H2 with the brand's Chinese brush accent. The CN characters are decorative (aria-hidden) —
 * the English heading carries the meaning for screen readers and search engines.
 */
export function SectionHeading({
  id,
  cn,
  children,
  tone = "navy",
  badge = false,
  as: Tag = "h2",
  className = "",
}: {
  id?: string;
  cn?: string;
  children: ReactNode;
  tone?: "navy" | "cream" | "red";
  badge?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const color = tone === "cream" ? "text-brand-cream" : tone === "red" ? "text-brand-red" : "text-brand-navy";
  const cnColor = tone === "cream" ? "text-brand-cream" : "text-brand-red";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {cn && badge ? (
        <span aria-hidden="true" className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-brush text-[26px] leading-none tracking-[-0.04em] sm:h-[76px] sm:w-[76px] sm:text-[30px] ${tone === "cream" ? "bg-brand-cream text-brand-red" : "bg-brand-navy text-brand-cream"}`}>
          {cn}
        </span>
      ) : cn ? (
        <span aria-hidden="true" className={`font-brush text-5xl leading-none sm:text-6xl ${cnColor}`}>{cn}</span>
      ) : null}
      <Tag id={id} className={`display text-[40px] leading-none sm:text-[52px] ${color}`}>
        {children}
      </Tag>
    </div>
  );
}
