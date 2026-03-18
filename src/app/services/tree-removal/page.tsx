import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tree Removal Services Bradenton FL | ACP Landscaping",
  description:
    "Safe, professional tree removal services in Bradenton, FL. Stump grinding, emergency tree removal, full cleanup, and lot clearing. Serving Manatee and Sarasota counties.",
};

const included = [
  "Safe removal of trees of all sizes from any location",
  "Stump grinding and root removal",
  "Emergency tree removal after storms or damage",
  "Full debris cleanup and haul-away after every job",
  "Lot clearing for new construction or renovation",
  "Free on-site assessment before any work begins",
];

const whyUs = [
  {
    title: "Safety is Our Priority",
    body: "Our crew uses professional-grade equipment and proven techniques to remove trees safely — protecting your home, fence, and landscaping.",
  },
  {
    title: "Licensed & Insured",
    body: "Every tree removal project is fully insured, so you're protected from liability from the moment we arrive.",
  },
  {
    title: "Emergency Response",
    body: "Storm damage doesn't wait for business hours. We offer emergency response to clear dangerous trees and limbs quickly.",
  },
  {
    title: "Complete Cleanup Included",
    body: "We don't just cut it down and leave — every job ends with full debris removal so your property is clean and ready.",
  },
];

const serviceAreas = ["Bradenton", "Ellenton", "Palmetto", "Sarasota", "Venice", "Osprey"];

export default function TreeRemovalPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ap-warm">
        {/* Hero */}
        <section className="relative py-20 bg-ap-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">
              Our Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Tree Removal Services in Bradenton, FL
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mb-8">
              From hazardous limbs to full lot clearing, ACP Landscaping provides safe, efficient
              tree removal across Bradenton and the surrounding Gulf Coast communities.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Get a Free Estimate <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-6">
                  What's Included
                </h2>
                <ul className="space-y-4 mb-8">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2
                        className="text-ap-green mr-3 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-ap-stone">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="/images/service-removal.jpeg"
                  alt="Tree removal services in Bradenton FL"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why ACP Landscaping */}
        <section className="py-20 bg-ap-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-12 text-center">
              Why ACP Landscaping?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUs.map((point, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                  <h3 className="font-serif text-xl font-bold text-ap-forest mb-2">
                    {point.title}
                  </h3>
                  <p className="text-ap-stone">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-4">
              Service Areas
            </h2>
            <p className="text-ap-stone mb-8">
              We provide tree removal services throughout Manatee and Sarasota counties.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((city) => (
                <Link
                  key={city}
                  href={`/service-area/${city.toLowerCase()}`}
                  className="bg-white border border-stone-200 px-5 py-2 rounded-full text-ap-forest font-medium hover:bg-ap-forest hover:text-white transition-colors"
                >
                  {city}, FL
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Need a Tree Removed Safely?
            </h2>
            <p className="text-stone-300 mb-8">
              Contact ACP Landscaping today for a free tree removal estimate. Emergency services
              available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-ap-forest transition-all"
              >
                <Phone size={18} className="mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
