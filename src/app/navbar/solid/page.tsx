"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Menu, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav, navLinks } from "@/components/mobile-nav";
import { DemoContent } from "@/components/demo-content";

export default function SolidNavPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Back link — repositioned above sticky bottom bar on mobile */}
      <Link
        href="/"
        className="fixed bottom-24 left-4 z-[60] flex items-center gap-2 rounded-full bg-ap-bark/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm hover:bg-ap-bark transition-colors md:bottom-6 md:left-6"
      >
        <ArrowLeft className="size-3.5" /> All Navbars
      </Link>

      {/* ── Top Navbar ── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md shadow-ap-forest/5"
            : "bg-ap-forest"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo — compact on mobile, expanded on desktop */}
          <Link href="#" className="flex items-center gap-3 py-3">
            <Image
              src="/logo.png"
              alt="AP Landscaping"
              width={40}
              height={40}
              className="rounded-full md:h-11 md:w-11"
            />
            <div className="hidden md:block">
              <span
                className={`font-serif text-xl leading-none transition-colors ${
                  scrolled ? "text-ap-bark" : "text-white"
                }`}
              >
                AP Landscaping
              </span>
              <span
                className={`block text-[11px] tracking-widest uppercase transition-colors ${
                  scrolled ? "text-ap-stone" : "text-white/50"
                }`}
              >
                EST. 2020
              </span>
            </div>
          </Link>

          {/* Center nav — desktop only */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative group"
              >
                <span
                  className={`block px-4 py-6 text-sm font-medium tracking-wide transition-colors lg:px-5 ${
                    scrolled
                      ? "text-ap-bark/70 group-hover:text-ap-forest"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                {/* Underline indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-8 ${
                    scrolled ? "bg-ap-green" : "bg-ap-lime"
                  } ${i === 0 ? "w-8" : ""}`}
                />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Phone — desktop only */}
            <a
              href="tel:5551234567"
              className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-ap-forest" : "text-white"
              }`}
            >
              <span
                className={`rounded-full p-1.5 ${
                  scrolled ? "bg-ap-forest/10" : "bg-white/10"
                }`}
              >
                <Phone className="size-3.5" />
              </span>
              (555) 123-4567
            </a>

            {/* Quote button — desktop only */}
            <Button
              className={`hidden md:inline-flex rounded-full px-5 font-medium transition-all text-sm ${
                scrolled
                  ? "bg-ap-forest text-white hover:bg-ap-forest/90"
                  : "bg-white text-ap-forest hover:bg-ap-warm"
              }`}
            >
              Free Quote
            </Button>

            {/* Hamburger — mobile only, 44px tap target */}
            <div className="md:hidden">
              <MobileNav
                trigger={
                  <button
                    className={`flex items-center justify-center rounded-lg min-h-[44px] min-w-[44px] transition-colors ${
                      scrolled ? "text-ap-bark" : "text-white"
                    }`}
                    aria-label="Open menu"
                  >
                    <Menu className="size-6" />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Sticky Bottom CTA Bar — mobile only ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="border-t border-ap-forest/10 bg-white/95 backdrop-blur-md px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-3">
            {/* Tap-to-call */}
            <a
              href="tel:5551234567"
              className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full border border-ap-forest/20 bg-white text-ap-forest text-sm font-medium transition-colors active:bg-ap-forest/5"
            >
              <Phone className="size-4" />
              <span>(555) 123-4567</span>
            </a>

            {/* Free quote */}
            <Link
              href="#quote"
              className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-ap-forest text-white text-sm font-semibold transition-colors active:bg-ap-forest/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <DemoContent />
    </div>
  );
}
