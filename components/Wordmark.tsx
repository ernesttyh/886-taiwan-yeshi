import Link from "next/link";

/** The typographic 886 / TAIWAN YÈ SHÌ lockup, as on the signage and the old site's nav. */
export function Wordmark({ size = "md", className = "inline-flex" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const num = size === "lg" ? "text-[64px]" : size === "md" ? "text-[52px]" : "text-[40px]";
  const sub = size === "lg" ? "text-[16px]" : size === "md" ? "text-[14px]" : "text-[11px]";
  // `className` must carry the display utility (e.g. "hidden md:inline-flex") so responsive variants work.
  return (
    <Link href="/" className={`flex-col items-center leading-none text-brand-cream no-underline ${className}`}>
      <span className={`display ${num} tracking-normal`}>886</span>
      <span className={`display ${sub} mt-1 tracking-[0.25em]`}>Taiwan Yè Shì</span>
    </Link>
  );
}
