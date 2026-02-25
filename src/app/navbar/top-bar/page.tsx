"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav, navLinks } from "@/components/mobile-nav";
import { DemoContent } from "@/components/demo-content";

export default function TopBarNavPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Back link — desktop */}
      <Link
        href="/"
        className="fixed bottom-6 left-6 z-[60] hidden md:flex items-center gap-2 rounded-full bg-ap-bark/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm hover:bg-ap-bark transition-colors"
      >
        <ArrowLeft className="size-3.5" /> All Navbars
      </Link>

      {/* Back link — mobile, above bottom CTA */}
      <Link
        href="/"
        className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom)+0.75rem)] left-4 z-[60] flex md:hidden items-center gap-2 rounded-full bg-ap-bark/90 px-3 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm hover:bg-ap-bark transition-colors"
      >
        <ArrowLeft className="size-3" /> All Navbars
      </Link>

      {/* ===== GREEN UTILITY BAR ===== */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            exit={{ y: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-ap-forest text-white"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm lg:px-8">
              <div className="flex items-center gap-8">
                <a
                  href="tel:5551234567"
                  className="flex items-center gap-2 font-medium text-white hover:text-white/80 transition-colors"
                >
                  <Phone className="size-3.5" />
                  (555) 123-4567
                </a>
                <span className="flex items-center gap-2 text-white/90">
                  <MapPin className="size-3.5" />
                  Serving the Greater Metro Area
                </span>
              </div>
              <span className="flex items-center gap-2 text-white/90">
                <Clock className="size-3.5" />
                Mon–Sat: 7am - 6pm
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MAIN NAV BAR (white) ===== */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed left-0 right-0 z-40 bg-white border-b border-gray-100 transition-all duration-300 ${
          scrolled
            ? "top-0 shadow-md shadow-black/5"
            : "top-0 md:top-[40px]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AP Landscaping"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg text-ap-forest font-bold tracking-tight">
                AP
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] text-ap-forest/70 uppercase">
                Landscaping
              </span>
            </div>
          </Link>

          {/* Desktop nav links + CTA */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-ap-bark/70 transition-colors hover:text-ap-forest"
              >
                {link.label}
              </Link>
            ))}
            <Button className="ml-4 bg-ap-green text-white hover:bg-ap-green/90 rounded-full px-7 py-2.5 font-semibold text-sm shadow-sm">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <MobileNav
              trigger={
                <button className="flex items-center justify-center rounded-lg min-h-[44px] min-w-[44px] text-ap-bark hover:bg-ap-forest/5 transition-colors">
                  <Menu className="size-6" />
                </button>
              }
            />
          </div>
        </div>
      </motion.header>

      {/* ===== MOBILE: Sticky bottom CTA bar ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-ap-sand bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center gap-2 px-3 py-2">
          <a
            href="tel:5551234567"
            className="flex flex-1 items-center justify-center gap-2 rounded-full min-h-[44px] border border-ap-green/20 bg-white text-ap-forest font-medium text-sm transition-colors hover:bg-ap-green/5"
          >
            <Phone className="size-4" />
            (555) 123-4567
          </a>
          <Button className="flex-1 min-h-[44px] bg-ap-green text-white hover:bg-ap-green/90 rounded-full font-medium shadow-sm text-sm">
            Get a Free Quote
          </Button>
        </div>
      </div>

      {/* Spacer for nav height */}
      <div className="h-[56px] md:h-[40px]" />

      <DemoContent />

      {/* Bottom spacer for mobile CTA bar */}
      <div className="h-20 md:h-0" />
    </div>
  );
}
