"use client";

import { Leaf } from "lucide-react";

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
                  AP
                </span>
                <Leaf
                  className="absolute -bottom-1 -right-1 text-ap-green fill-ap-green"
                  size={16}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-none tracking-tight">
                  AP
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

          {/* Footer Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-ap-green transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-ap-green transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-ap-green transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-ap-green transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Lawn Care
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Landscape Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Hardscaping
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Tree & Shrub Care
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Tree Removal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-ap-green transition-colors"
                >
                  Seasonal Cleanups
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Links Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-ap-green transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ap-green transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ap-green transition-colors">
                  Yelp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ap-green transition-colors">
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} AP Landscaping. All rights
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
