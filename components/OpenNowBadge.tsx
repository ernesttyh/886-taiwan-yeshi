"use client";

import { useEffect, useState } from "react";
import { openState, type OpenState } from "@/lib/hours";
import { site } from "@/lib/site";

/**
 * "Open now · closes 10:30 PM" computed in the visitor's browser against Singapore time,
 * so static pages never show a stale state. Renders the plain hours until it mounts.
 */
export function OpenNowBadge({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const tick = () => setState(openState());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const shell =
    tone === "light"
      ? "border border-brand-cream/40 bg-brand-cream/15 text-brand-cream"
      : "border border-brand-navy/20 bg-white text-brand-ink";

  let dot = "bg-brand-sand";
  let text: string = site.hours.display;
  if (state?.status === "open") {
    dot = "bg-[#3DD68C]";
    text = state.lastOrderSoon ? `Open · last orders now, closes ${state.closesAt}` : `Open now · closes ${state.closesAt}`;
  } else if (state?.status === "closed") {
    dot = "bg-[#F2A33A]";
    text = `Closed · opens ${state.opensAt}`;
  }

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold ${shell} ${className}`} role="status" aria-live="polite">
      <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rounded-full ${dot}`} />
      {text}
    </span>
  );
}
