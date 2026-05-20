"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Phone, MapPin, Clock, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

type NavItem =
  | { kind: "link"; name: string; href: string }
  | {
      kind: "dropdown";
      name: string;
      href: string;
      items: { name: string; href: string }[];
    };

const navItems: NavItem[] = [
  {
    kind: "dropdown",
    name: "Services",
    href: "/services",
    items: [
      { name: "All Services", href: "/services" },
      { name: "Lawn Care", href: "/services/lawn-care" },
      { name: "Landscape Design", href: "/services/landscape-design" },
      { name: "Hardscaping", href: "/services/hardscaping" },
      { name: "Tree Removal", href: "/services/tree-removal" },
      { name: "Tree & Shrub Care", href: "/services/tree-shrub-care" },
      { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
    ],
  },
  {
    kind: "dropdown",
    name: "Service Areas",
    href: "/service-area",
    items: [
      { name: "All Service Areas", href: "/service-area" },
      { name: "Bradenton", href: "/service-area/bradenton" },
      { name: "Sarasota", href: "/service-area/sarasota" },
      { name: "Palmetto", href: "/service-area/palmetto" },
      { name: "Ellenton", href: "/service-area/ellenton" },
      { name: "Venice", href: "/service-area/venice" },
      { name: "Osprey", href: "/service-area/osprey" },
    ],
  },
  { kind: "link", name: "About", href: "/about" },
  { kind: "link", name: "Testimonials", href: "/testimonials" },
  { kind: "link", name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      {/* Top Bar (Contact Info) — desktop only */}
      <div className="hidden md:flex bg-ap-forest text-white py-2 px-4 sm:px-6 lg:px-8 text-sm justify-between items-center">
        <div className="flex space-x-6">
          <a href="tel:9416009879" className="flex items-center space-x-2 hover:text-ap-lime transition-colors">
            <Phone size={14} />
            <span>(941) 600-9879</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>Serving Bradenton, Sarasota &amp; the Gulf Coast</span>
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
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-4 border-ap-green bg-white">
                <span className="text-2xl font-black text-ap-forest tracking-tighter">AYC</span>
                <Leaf className="absolute -bottom-1 -right-1 text-ap-green fill-ap-green" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-ap-forest leading-none tracking-tight">AYC</span>
                <span className="text-sm font-bold text-ap-green leading-none tracking-widest uppercase">Landscaping</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {navItems.map((item) =>
                    item.kind === "link" ? (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="text-ap-stone hover:text-ap-forest font-medium transition-colors px-3 py-2"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger className="text-ap-stone hover:text-ap-forest font-medium transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:text-ap-forest">
                            {item.name}
                          </NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-[220px] p-2 bg-white shadow-lg border border-ap-sand rounded-lg">
                          <ul className="flex flex-col">
                            {item.items.map((sub) => (
                              <li key={sub.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={sub.href}
                                    className="block px-4 py-2.5 text-sm text-ap-bark hover:text-ap-forest hover:bg-ap-warm rounded-md transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/contact"
                className="bg-ap-green hover:bg-ap-lime text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
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
                {navItems.map((item) => {
                  if (item.kind === "link") {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block px-3 py-4 text-base font-medium text-ap-bark hover:text-ap-forest hover:bg-ap-warm rounded-md min-h-[44px]"
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  const isOpen = openSection === item.name;
                  return (
                    <div key={item.name}>
                      <button
                        type="button"
                        onClick={() => setOpenSection(isOpen ? null : item.name)}
                        aria-expanded={isOpen}
                        className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-ap-bark hover:text-ap-forest hover:bg-ap-warm rounded-md min-h-[44px]"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-1">
                              {item.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={closeMobileMenu}
                                  className="block pl-8 pr-3 py-3 text-base text-ap-stone hover:text-ap-forest hover:bg-ap-warm rounded-md min-h-[44px]"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                <a
                  href="tel:9416009879"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full mt-3 bg-white border-2 border-ap-forest text-ap-forest px-6 py-3 rounded-full font-semibold min-h-[44px]"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center mt-2 bg-ap-forest text-white px-6 py-3 rounded-md font-semibold min-h-[44px]"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom CTA Bar — sticky tap-to-call + quote */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-ap-sand shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3 safe-bottom">
        <a
          href="tel:9416009879"
          className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-ap-forest text-ap-forest rounded-full py-3 font-semibold min-h-[44px]"
        >
          <Phone size={18} />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-ap-forest text-white rounded-lg py-3 font-semibold min-h-[44px]"
        >
          Free Quote
        </Link>
      </div>
    </>
  );
}
