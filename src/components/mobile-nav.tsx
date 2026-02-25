"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

const linkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.3, ease: "easeOut" as const },
  }),
};

const bottomVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.08, duration: 0.35, ease: "easeOut" as const },
  }),
};

export function MobileNav({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-[85vw] max-w-sm bg-ap-warm border-ap-sand flex flex-col"
      >
        {/* Top: Logo + brand */}
        <SheetHeader className="border-b border-ap-sand/60 pb-5 flex-shrink-0">
          <SheetTitle className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AP Landscaping"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="font-serif text-ap-bark text-xl tracking-tight">
              AP Landscaping
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Middle: Nav links */}
        <nav className="flex-1 flex flex-col justify-center gap-1 py-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link
                href={link.href}
                className="flex items-center rounded-xl px-4 py-3 min-h-[44px] text-lg font-medium text-ap-bark transition-colors active:bg-ap-forest/10 hover:bg-ap-forest/5 hover:text-ap-forest"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bottom: CTAs — thumb-friendly zone */}
        <div className="flex-shrink-0 border-t border-ap-sand/60 pt-5 pb-2 flex flex-col gap-3">
          <motion.div custom={0} initial="hidden" animate="visible" variants={bottomVariants}>
            <a
              href="tel:5551234567"
              className="flex items-center justify-center gap-3 rounded-xl bg-ap-forest/10 px-4 py-4 min-h-[52px] text-ap-forest font-semibold text-lg transition-colors active:bg-ap-forest/20"
            >
              <Phone className="size-5" strokeWidth={2} />
              (555) 123-4567
            </a>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={bottomVariants}>
            <Button
              asChild
              className="w-full bg-ap-forest hover:bg-ap-forest/90 active:bg-ap-bark text-white rounded-xl text-lg font-semibold min-h-[52px] py-4 shadow-md shadow-ap-forest/20"
            >
              <Link href="#quote">Get a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { navLinks };
