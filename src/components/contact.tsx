"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-ap-green font-bold tracking-wider uppercase text-sm mb-2">
              Get In Touch
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-ap-bark mb-6">
              Let&apos;s Discuss Your Project
            </h3>
            <p className="text-ap-stone text-lg mb-8">
              Fill out the form with details about your landscaping needs, and
              our team will get back to you within 24 hours to schedule a site
              visit.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-ap-forest mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-ap-bark">Our Office</h4>
                  <p className="text-ap-stone">
                    123 Greenery Lane
                    <br />
                    Springfield, ST 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-ap-forest mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-ap-bark">Phone</h4>
                  <p className="text-ap-stone">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-ap-forest mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-ap-bark">Business Hours</h4>
                  <p className="text-ap-stone">
                    Mon - Sat: 7:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-ap-bark mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-ap-bark mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ap-bark mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-ap-bark mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-ap-bark mb-1"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="lawn">Lawn Care & Maintenance</option>
                  <option value="design">Landscape Design</option>
                  <option value="hardscape">Hardscaping</option>
                  <option value="tree-care">Tree & Shrub Care</option>
                  <option value="tree-removal">Tree Removal</option>
                  <option value="cleanup">Seasonal Cleanups</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ap-bark mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-ap-forest hover:bg-ap-forest/90 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
