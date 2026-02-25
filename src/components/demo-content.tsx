"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, TreePine, Shovel, Fence } from "lucide-react";

const services = [
  { icon: Leaf, title: "Lawn Maintenance", desc: "Weekly mowing, edging, and seasonal treatments to keep your property pristine." },
  { icon: TreePine, title: "Tree & Shrub Care", desc: "Expert pruning, removal, and planting for healthy, beautiful landscapes." },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart watering solutions that conserve water and keep everything green." },
  { icon: Sun, title: "Landscape Design", desc: "Custom designs that transform your outdoor space into something extraordinary." },
  { icon: Shovel, title: "Hardscaping", desc: "Patios, walkways, retaining walls — built to last." },
  { icon: Fence, title: "Fencing & Borders", desc: "Define your space with quality materials and expert installation." },
];

export function DemoContent() {
  return (
    <div className="min-h-[200vh]">
      {/* Hero placeholder */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-ap-forest via-ap-forest/90 to-ap-green">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-6 text-center"
        >
          <p className="mb-4 font-medium tracking-[0.2em] text-ap-lime uppercase text-sm">Professional Landscaping Services</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Your Landscape,<br />Our Craft
          </h1>
          <p className="max-w-lg mx-auto text-white/70 text-lg">
            Scroll down to see how this navbar behaves. This is a demo page to preview navigation styles.
          </p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="bg-ap-warm py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-ap-green font-medium tracking-[0.15em] uppercase text-sm mb-3">What We Do</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ap-bark">Our Services</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-ap-sand bg-white p-8 transition-all hover:shadow-lg hover:shadow-ap-green/5 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-xl bg-ap-forest/5 p-3">
                  <service.icon className="size-6 text-ap-forest" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ap-bark">{service.title}</h3>
                <p className="text-ap-stone text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for scroll testing */}
      <section className="bg-white py-24 px-6 text-center">
        <p className="text-ap-stone text-sm tracking-widest uppercase">End of demo content</p>
      </section>
    </div>
  );
}
