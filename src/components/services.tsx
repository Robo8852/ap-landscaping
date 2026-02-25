"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Lawn Care & Maintenance",
    desc: "Regular mowing, edging, fertilization, and weed control to keep your grass lush and green all season long.",
    img: "/images/service-lawn.jpeg",
  },
  {
    title: "Landscape Design",
    desc: "Custom 3D designs tailored to your property, incorporating native plants, trees, and beautiful garden beds.",
    img: "/images/service-design.jpeg",
  },
  {
    title: "Hardscaping",
    desc: "Patios, walkways, retaining walls, and fire pits built with premium stone and pavers to last a lifetime.",
    img: "/images/service-hardscape.jpeg",
  },
  {
    title: "Tree & Shrub Care",
    desc: "Professional pruning, trimming, and health assessments to ensure your larger plants thrive.",
    img: "/images/service-tree.jpeg",
  },
  {
    title: "Tree Removal",
    desc: "Safe and efficient removal of dead, damaged, or unwanted trees with full cleanup and stump grinding.",
    img: "/images/service-removal.jpeg",
  },
  {
    title: "Seasonal Cleanups",
    desc: "Spring preparation and Fall leaf removal to keep your property looking pristine year-round.",
    img: "/images/service-cleanup.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ap-green font-bold tracking-wider uppercase text-sm mb-2">
            What We Do
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-ap-bark mb-4">
            Comprehensive Landscaping Services
          </h3>
          <p className="text-ap-stone text-lg">
            From regular maintenance to complete backyard transformations, we
            have the skills and equipment to handle any project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-stone-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-ap-bark mb-2 group-hover:text-ap-forest transition-colors">
                  {service.title}
                </h4>
                <p className="text-ap-stone mb-4 line-clamp-3">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-ap-green font-semibold hover:text-ap-forest transition-colors"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
