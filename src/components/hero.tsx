"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpeg"
          alt="Beautiful landscaped garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ap-forest/90 to-stone-900/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-ap-lime/20 text-ap-lime border border-ap-lime/30 font-semibold text-sm mb-6 backdrop-blur-sm">
              Voted #1 Local Landscaper
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transform Your Outdoor Space Into a{" "}
              <span className="text-ap-lime">Masterpiece</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-xl">
              Professional landscaping, lawn care, and hardscaping services
              tailored to your property&apos;s unique needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get Your Free Estimate
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
