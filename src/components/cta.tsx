"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-ap-forest relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-ap-green rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-ap-bark rounded-full opacity-20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white mb-6">
          Ready to upgrade your outdoors?
        </h2>
        <p className="text-xl text-stone-200 mb-10 max-w-2xl mx-auto">
          Contact us today for a free, no-obligation consultation and estimate.
          Let&apos;s bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
          >
            Request an Estimate
          </a>
          <a
            href="tel:+15551234567"
            className="bg-white text-ap-forest hover:bg-stone-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center"
          >
            <Phone className="mr-2" size={20} />
            (555) 123-4567
          </a>
        </div>
      </motion.div>
    </section>
  );
}
