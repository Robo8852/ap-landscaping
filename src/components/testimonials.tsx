"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "AP Landscaping completely transformed our backyard. They were professional, on time, and the new patio is exactly what we wanted for summer barbecues.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Local Business Owner",
    text: "We use them for our commercial property maintenance. The grass is always perfectly cut, and the seasonal flower beds look fantastic. Highly recommended.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    text: "The team was incredibly respectful of our property. They cleaned up every day before leaving and the final landscape design exceeded our expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ap-green font-bold tracking-wider uppercase text-sm mb-2">
            Client Stories
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-ap-bark mb-4">
            What Our Neighbors Say
          </h3>
          <p className="text-ap-stone text-lg">
            Don&apos;t just take our word for it. Here&apos;s what homeowners in
            our community have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100 shadow-sm relative"
            >
              {/* Quote Icon Decoration */}
              <div className="text-ap-green mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-20"
                >
                  <path d="M14.017 21L16.41 14.592C16.634 13.92 16.746 13.227 16.746 12.525V3H24V12.525C24 16.634 22.333 20.574 19.426 23.481L14.017 21ZM0 21L2.393 14.592C2.617 13.92 2.729 13.227 2.729 12.525V3H10V12.525C10 16.634 8.333 20.574 5.426 23.481L0 21Z" />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="text-[#F2A900] fill-[#F2A900]"
                  />
                ))}
              </div>

              <p className="text-ap-stone italic mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-ap-forest/10 rounded-full flex items-center justify-center text-ap-forest font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-ap-bark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-ap-stone">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
