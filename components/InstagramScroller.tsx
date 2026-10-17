"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Horizontal snap-scroller with prev/next buttons (buttons hide at either end; touch users just swipe). */
export function InstagramScroller({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 260), behavior: "smooth" });
  };

  const btn =
    "absolute top-[38%] z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand-navy text-2xl text-brand-cream shadow-lg transition-opacity hover:bg-brand-navy-dark sm:flex";

  return (
    <div className="relative">
      <ul ref={ref} aria-label={label} className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0">
        {children}
      </ul>
      <button type="button" aria-label="Previous posts" onClick={() => go(-1)} className={`${btn} -left-3 ${atStart ? "pointer-events-none opacity-0" : "opacity-100"}`}>
        ‹
      </button>
      <button type="button" aria-label="Next posts" onClick={() => go(1)} className={`${btn} -right-3 ${atEnd ? "pointer-events-none opacity-0" : "opacity-100"}`}>
        ›
      </button>
    </div>
  );
}
