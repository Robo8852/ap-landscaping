"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Phone, MapPin, Clock, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar (Contact Info) — desktop only */}
      <div className="hidden md:flex bg-ap-forest text-white py-2 px-4 sm:px-6 lg:px-8 text-sm justify-between items-center">
        <div className="flex space-x-6">
          <a href="tel:5551234567" className="flex items-center space-x-2 hover:text-ap-lime transition-colors">
            <Phone size={14} />
            <span>(555) 123-4567</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>Serving the Greater Metro Area</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} />
          <span>Mon-Sat: 7am - 6pm</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-4 border-ap-green bg-white">
                <span className="text-2xl font-black text-ap-forest tracking-tighter">AP</span>
                <Leaf className="absolute -bottom-1 -right-1 text-ap-green fill-ap-green" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-ap-forest leading-none tracking-tight">AP</span>
                <span className="text-sm font-bold text-ap-green leading-none tracking-widest uppercase">Landscaping</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-ap-stone hover:text-ap-forest font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-ap-green hover:bg-ap-lime text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-ap-stone hover:text-ap-forest p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-ap-sand"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-ap-bark hover:text-ap-forest hover:bg-ap-warm rounded-md min-h-[44px]"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="tel:5551234567"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full mt-3 bg-white border-2 border-ap-forest text-ap-forest px-6 py-3 rounded-full font-semibold min-h-[44px]"
                >
                  <Phone size={18} />
                  (555) 123-4567
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center mt-2 bg-ap-forest text-white px-6 py-3 rounded-md font-semibold min-h-[44px]"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom CTA Bar — sticky tap-to-call + quote */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-ap-sand shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3 safe-bottom">
        <a
          href="tel:5551234567"
          className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-ap-forest text-ap-forest rounded-full py-3 font-semibold min-h-[44px]"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-ap-forest text-white rounded-lg py-3 font-semibold min-h-[44px]"
        >
          Free Quote
        </a>
      </div>
    </>
  );
}
