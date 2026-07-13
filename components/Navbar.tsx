"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const isWhiteTheme =
    pathname === "/menu" ||
    pathname === "/promotions";

  return (
    <nav className={`${isWhiteTheme ? "bg-[#FFFADC]" : "bg-red-brand" } w-full z-50 relative`}>
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center py-4 gap-8">
          {/* Left Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/#our-story"
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px] hover:opacity-80 transition`}
            >
              ABOUT
            </Link>
            <Link
              href="/menu"
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px] hover:opacity-80 transition`}
            >
              MENU
            </Link>
            <Link
              href="/contact"
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px] hover:opacity-80 transition`}
            >
              CONTACT
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="text-center mx-8">
            <div className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#CE2C20]" : "text-[#FFFADC]" } text-[56px] leading-none`}>
              886
            </div>
            <div className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#CE2C20]" : "text-[#FFFADC]" } text-[18px] tracking-[3px] leading-tight`}>
              TAIWAN YÈ SHÌ
            </div>
          </Link>

          {/* Right Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/promotions"
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px] hover:opacity-80 transition`}
            >
              PROMOTIONS
            </Link>
            {/* <Link
              href="/reservation"
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px] hover:opacity-80 transition`}
            >
              RESERVATION
            </Link> */}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between py-3">
          <Link href="/" className="text-center">
            <div className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#CE2C20]" : "text-[#FFFADC]" } text-3xl leading-none`}>
              886
            </div>
            <div className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#CE2C20]" : "text-[#FFFADC]" } text-[10px] tracking-[2px] leading-tight`}>
              TAIWAN YÈ SHÌ
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } p-2"`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col items-center gap-3">
            <Link
              href="/#our-story"
              onClick={() => setMobileOpen(false)}
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px]`}
            >
              ABOUT
            </Link>
            <Link
              href="/menu"
              onClick={() => setMobileOpen(false)}
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px]`}
            >
              MENU
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px]`}
            >
              CONTACT
            </Link>
            <Link
              href="/promotions"
              onClick={() => setMobileOpen(false)}
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px]`}
            >
              PROMOTIONS
            </Link>
            {/* <Link
              href="/reservation"
              onClick={() => setMobileOpen(false)}
              className={`font-dincondensed font-bold ${isWhiteTheme ? "text-[#053176]" : "text-[#FFFADC]" } text-[22px] tracking-[2px]`}
            >
              RESERVATION
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
