"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Footer Branding */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-ap-green bg-white">
                <span className="text-xl font-black text-ap-forest tracking-tighter">
                  ACP
                </span>
                <Leaf
                  className="absolute -bottom-1 -right-1 text-ap-green fill-ap-green"
                  size={16}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-none tracking-tight">
                  ACP
                </span>
                <span className="text-xs font-bold text-ap-green leading-none tracking-widest uppercase">
                  Landscaping
                </span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Professional landscaping services dedicated to making your outdoor
              spaces beautiful, functional, and sustainable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-ap-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ap-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="hover:text-ap-green transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ap-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-ap-green transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ap-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ap-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/lawn-care" className="hover:text-ap-green transition-colors">
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services/landscape-design" className="hover:text-ap-green transition-colors">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link href="/services/hardscaping" className="hover:text-ap-green transition-colors">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/services/tree-shrub-care" className="hover:text-ap-green transition-colors">
                  Tree &amp; Shrub Care
                </Link>
              </li>
              <li>
                <Link href="/services/tree-removal" className="hover:text-ap-green transition-colors">
                  Tree Removal
                </Link>
              </li>
              <li>
                <Link href="/services/seasonal-cleanup" className="hover:text-ap-green transition-colors">
                  Seasonal Cleanup
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service-area/bradenton" className="hover:text-ap-green transition-colors">
                  Bradenton
                </Link>
              </li>
              <li>
                <Link href="/service-area/ellenton" className="hover:text-ap-green transition-colors">
                  Ellenton
                </Link>
              </li>
              <li>
                <Link href="/service-area/palmetto" className="hover:text-ap-green transition-colors">
                  Palmetto
                </Link>
              </li>
              <li>
                <Link href="/service-area/sarasota" className="hover:text-ap-green transition-colors">
                  Sarasota
                </Link>
              </li>
              <li>
                <Link href="/service-area/venice" className="hover:text-ap-green transition-colors">
                  Venice
                </Link>
              </li>
              <li>
                <Link href="/service-area/osprey" className="hover:text-ap-green transition-colors">
                  Osprey
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} ACP Landscaping. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
