"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MapPin, Phone, Clock, Mail, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="bg-ap-warm">
        {/* Hero */}
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Contact ACP Landscaping
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl">
              Ready to get started? Fill out the form below or give us a call. We respond to all inquiries within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Contact Info */}
              <div>
                <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-6">
                  Let's Discuss Your Project
                </h2>
                <p className="text-ap-stone text-lg mb-8">
                  Fill out the form with details about your landscaping needs and we'll get back to you within 24 hours to schedule a free site visit.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-ap-forest/10 p-3 rounded-full text-ap-forest mr-4 flex-shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ap-bark">Base Location</h3>
                      <p className="text-ap-stone">Bradenton, Florida</p>
                      <p className="text-ap-stone text-sm">Serving Manatee & Sarasota counties</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ap-forest/10 p-3 rounded-full text-ap-forest mr-4 flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ap-bark">Phone</h3>
                      <a href="tel:5551234567" className="text-ap-stone hover:text-ap-forest transition-colors">(555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-ap-forest/10 p-3 rounded-full text-ap-forest mr-4 flex-shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ap-bark">Business Hours</h3>
                      <p className="text-ap-stone">Mon – Sat: 7:00 AM – 6:00 PM</p>
                      <p className="text-ap-stone">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                  <h3 className="font-bold text-ap-bark mb-3">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Bradenton", "Ellenton", "Palmetto", "Sarasota", "Venice", "Osprey"].map((city) => (
                      <span
                        key={city}
                        className="bg-white border border-stone-200 text-ap-stone text-sm px-3 py-1 rounded-full"
                      >
                        {city}, FL
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-ap-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ChevronRight className="text-ap-green" size={32} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ap-bark mb-2">Message Sent!</h3>
                    <p className="text-ap-stone">
                      Thank you for reaching out. We'll be in touch within 24 hours to schedule your free estimate.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-ap-bark mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-ap-bark mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ap-bark mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-ap-bark mb-1">
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
                      <label htmlFor="city" className="block text-sm font-medium text-ap-bark mb-1">
                        Your City
                      </label>
                      <select
                        id="city"
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                      >
                        <option value="">Select your city...</option>
                        <option value="bradenton">Bradenton</option>
                        <option value="ellenton">Ellenton</option>
                        <option value="palmetto">Palmetto</option>
                        <option value="sarasota">Sarasota</option>
                        <option value="venice">Venice</option>
                        <option value="osprey">Osprey</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-ap-bark mb-1">
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
                        <option value="cleanup">Seasonal Cleanup</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ap-bark mb-1">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                        placeholder="Tell us about your property and what you're looking for..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-ap-forest hover:bg-ap-forest/90 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
