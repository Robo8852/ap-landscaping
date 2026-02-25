"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav, navLinks } from "@/components/mobile-nav";
import { DemoContent } from "@/components/demo-content";

export default function FloatingNavPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Back to index */}
      <Link
        href="/"
        className="fixed bottom-20 left-4 z-[60] flex items-center gap-2 rounded-full bg-ap-bark/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm hover:bg-ap-bark transition-colors md:bottom-6 md:left-6"
      >
        <ArrowLeft className="size-3.5" /> All Navbars
      </Link>

      {/* Floating Glass Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-2 md:px-4 md:pt-4"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 md:px-6 md:py-3 ${
            scrolled
              ? "border-white/20 bg-white/80 shadow-lg shadow-ap-forest/5 backdrop-blur-xl"
              : "border-white/10 bg-white/5 backdrop-blur-md"
          }`}
        >
          {/* Logo — compact on mobile */}
          <Link href="#" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="AP Landscaping"
              width={34}
              height={34}
              className="rounded-full md:w-[38px] md:h-[38px]"
            />
            <AnimatePresence>
              {scrolled && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="hidden font-serif text-ap-bark text-lg sm:block"
                >
                  AP Landscaping
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop links — hidden below md */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-ap-bark/70 hover:text-ap-forest hover:bg-ap-forest/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Phone — desktop only */}
            <a
              href="tel:5551234567"
              className={`hidden lg:flex items-center gap-1.5 text-sm transition-colors ${
                scrolled ? "text-ap-stone" : "text-white/60"
              }`}
            >
              <Phone className="size-3.5" />
              (555) 123-4567
            </a>

            {/* Quote button — desktop only */}
            <Button
              className={`hidden md:inline-flex rounded-full text-sm font-medium transition-all ${
                scrolled
                  ? "bg-ap-forest text-white hover:bg-ap-forest/90"
                  : "bg-white/15 text-white border border-white/20 hover:bg-white/25 backdrop-blur-sm"
              }`}
            >
              Get a Free Quote
            </Button>

            {/* Hamburger — mobile only, 44px min tap target */}
            <div className="md:hidden">
              <MobileNav
                trigger={
                  <button
                    className={`flex items-center justify-center rounded-lg min-h-[44px] min-w-[44px] transition-colors ${
                      scrolled
                        ? "text-ap-bark hover:bg-ap-forest/5"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Menu className="size-5" />
                  </button>
                }
              />
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Sticky bottom CTA bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ap-sand/40 bg-white/95 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <div className="flex items-center gap-3">
          <a
            href="tel:5551234567"
            className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-ap-forest/20 bg-ap-warm text-ap-forest text-sm font-medium transition-colors hover:bg-ap-forest/10"
          >
            <Phone className="size-4" />
            (555) 123-4567
          </a>
          <Button className="flex-1 min-h-[44px] rounded-xl bg-ap-forest text-white text-sm font-medium hover:bg-ap-forest/90 shadow-sm">
            Get a Free Quote
          </Button>
        </div>
      </div>

      <DemoContent />
    </div>
  );
}
