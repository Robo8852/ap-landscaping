"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav, navLinks } from "@/components/mobile-nav";
import { DemoContent } from "@/components/demo-content";

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

export default function SplitNavPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Back link — repositioned above sticky CTA on mobile */}
      <Link
        href="/"
        className="fixed bottom-24 left-4 z-[60] flex items-center gap-2 rounded-full bg-ap-bark/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm hover:bg-ap-bark transition-colors md:bottom-6 md:left-6"
      >
        <ArrowLeft className="size-3.5" /> All Navbars
      </Link>

      {/* ===== HEADER ===== */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md shadow-ap-forest/5"
            : "bg-transparent"
        }`}
      >
        {/* --- Mobile nav (below md) --- */}
        <nav className="flex items-center justify-between px-4 py-3 md:hidden">
          {/* Hamburger — 44px tap target */}
          <MobileNav
            trigger={
              <button
                className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                  scrolled
                    ? "text-ap-bark hover:bg-ap-bark/5"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            }
          />

          {/* Centered logo */}
          <Link href="#" className="absolute left-1/2 -translate-x-1/2">
            <motion.div
              className={`flex items-center justify-center rounded-full border-[3px] transition-all duration-500 ${
                scrolled
                  ? "size-12 border-white bg-white shadow-lg"
                  : "size-14 border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"
              }`}
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/logo.png"
                alt="AP Landscaping"
                width={scrolled ? 40 : 48}
                height={scrolled ? 40 : 48}
                className="rounded-full"
              />
            </motion.div>
          </Link>

          {/* Spacer to balance hamburger */}
          <div className="w-11" />
        </nav>

        {/* --- Desktop nav (md+) --- */}
        <nav className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-3 md:flex lg:px-8">
          {/* Left links */}
          <div className="flex flex-1 items-center justify-end gap-1 pr-8">
            {leftLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    scrolled
                      ? "text-ap-bark/60 hover:text-ap-forest"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Center logo — elevated, overlapping */}
          <motion.div
            className="relative z-10 flex-shrink-0"
            animate={{ scale: scrolled ? 0.88 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="#" className="block">
              <div
                className={`flex items-center justify-center rounded-full border-4 transition-all duration-500 ${
                  scrolled
                    ? "size-14 border-white bg-white shadow-lg"
                    : "size-18 border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="AP Landscaping"
                  width={scrolled ? 48 : 60}
                  height={scrolled ? 48 : 60}
                  className="rounded-full"
                />
              </div>
            </Link>
          </motion.div>

          {/* Right links + CTA */}
          <div className="flex flex-1 items-center gap-1 pl-8">
            {rightLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (leftLinks.length + i) * 0.08 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    scrolled
                      ? "text-ap-bark/60 hover:text-ap-forest"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Button
                size="sm"
                className={`ml-4 rounded-full font-medium transition-all ${
                  scrolled
                    ? "bg-ap-forest text-white hover:bg-ap-forest/90"
                    : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
                }`}
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* ===== STICKY BOTTOM CTA BAR (mobile only) ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ap-sand/40 bg-white/95 backdrop-blur-lg md:hidden">
        <div className="flex items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          {/* Tap-to-call */}
          <a
            href="tel:5551234567"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ap-forest/20 bg-ap-warm text-sm font-medium text-ap-forest transition-colors hover:bg-ap-forest/5 active:bg-ap-forest/10"
          >
            <Phone className="size-4" />
            <span>(555) 123-4567</span>
          </a>

          {/* Get a Free Quote */}
          <Button
            className="h-11 flex-1 rounded-full bg-ap-forest text-sm font-medium text-white shadow-md hover:bg-ap-forest/90 active:bg-ap-forest/80"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>

      {/* Bottom padding spacer so content isn't hidden behind sticky CTA on mobile */}
      <DemoContent />
      <div className="h-24 md:h-0" />
    </div>
  );
}
