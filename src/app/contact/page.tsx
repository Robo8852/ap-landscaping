import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | AYC Landscaping",
  description:
    "Get in touch with AYC Landscaping for a free estimate on lawn care, landscape design, hardscaping, and tree services across Bradenton, Sarasota, and surrounding areas.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ap-warm">
        {/* Hero */}
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Contact AYC Landscaping
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
                      <a href="tel:9416009879" className="text-ap-stone hover:text-ap-forest transition-colors">(941) 600-9879</a>
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
