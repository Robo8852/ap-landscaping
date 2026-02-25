"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image with Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-ap-green/10 rounded-3xl transform -rotate-3"></div>

            <img
              src="/images/about-section.jpeg"
              alt="Landscaping team at work"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px]"
              referrerPolicy="no-referrer"
            />

            {/* Years of Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-ap-forest text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-5xl font-black mb-1">15+</div>
              <div className="text-sm font-medium uppercase tracking-wider opacity-80">
                Years of<br />Experience
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-ap-green font-bold tracking-wider uppercase text-sm mb-2">
              About AP Landscaping
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-ap-bark mb-6">
              Rooted in Quality, Growing Through Trust.
            </h3>

            <p className="text-ap-stone text-lg mb-6">
              Founded on a passion for the outdoors, AP Landscaping has been
              transforming residential and commercial properties for over a
              decade. We believe that a beautiful landscape does more than just
              improve curb appeal—it creates a space for memories, relaxation,
              and connection with nature.
            </p>

            <p className="text-ap-stone text-lg mb-8">
              Our team of dedicated professionals treats every yard as if it
              were our own. From the initial consultation to the final sweep, we
              pride ourselves on clear communication, meticulous attention to
              detail, and unparalleled craftsmanship.
            </p>

            {/* Trust Points List */}
            <ul className="space-y-4 mb-8">
              {[
                "Locally owned and operated",
                "Eco-friendly practices and materials",
                "Transparent pricing with no hidden fees",
                "Reliable scheduling and prompt service",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-ap-bark font-medium"
                >
                  <CheckCircle2
                    className="text-ap-green mr-3 flex-shrink-0"
                    size={20}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-ap-bark hover:bg-ap-forest text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Meet Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
