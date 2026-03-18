import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, Phone, MapPin, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Services Sarasota FL | ACP Landscaping",
  description:
    "Professional landscaping, lawn care, hardscaping, and tree services in Sarasota, FL. Serving Siesta Key, Palmer Ranch, Gulf Gate Estates, Southgate, Bee Ridge, and all of Sarasota County.",
};

export default function SarasotaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-ap-lime mb-3">
              <MapPin size={16} />
              <span className="font-semibold uppercase tracking-wider text-sm">Sarasota, FL</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Landscaping Services in Sarasota, FL
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mb-8">
              ACP Landscaping delivers premium landscape design, lawn care, and hardscaping to
              Sarasota's upscale residential market. From Siesta Key to Palmer Ranch to the
              historic downtown corridor, we create landscapes that match the sophistication of
              your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold transition-all"
              >
                Get a Free Estimate <ChevronRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:5551234567"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-ap-forest transition-all"
              >
                <Phone size={18} className="mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-4">
                  Tropical and Native Landscapes for Sarasota's Discerning Homeowners
                </h2>
                <p className="text-ap-stone mb-4">
                  Sarasota's residential market is defined by a high standard of outdoor living.
                  Homeowners here — including a large seasonal snowbird population — expect
                  landscapes that look stunning year-round, even during months when the property
                  may be unoccupied. We offer flexible seasonal service plans to keep your
                  property pristine whether you're in residence or not.
                </p>
                <p className="text-ap-stone mb-6">
                  Sarasota's deep appreciation for tropical and Florida-native plant palettes sets
                  it apart from other markets. ACP Landscaping's design team is well-versed in
                  creating lush, low-maintenance landscapes featuring bird-of-paradise, ornamental
                  grasses, live oaks, and native flowering species that thrive in Sarasota's
                  climate without excessive water use.
                </p>
                <ul className="space-y-3">
                  {[
                    "Upscale tropical and native Florida landscape design",
                    "Seasonal service plans for snowbirds and part-time residents",
                    "Irrigation audits and smart controller upgrades",
                    "Custom hardscaping for pool surrounds and outdoor living spaces",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2
                        className="text-ap-green mr-3 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-ap-stone">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                <h3 className="font-bold text-ap-bark text-lg mb-4">Sarasota Service Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-ap-bark">ZIP Codes Served:</span>
                    <p className="text-ap-stone mt-1">
                      34230, 34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238, 34239, 34241,
                      34242
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-ap-bark">Neighborhoods Served:</span>
                    <p className="text-ap-stone mt-1">
                      Downtown Sarasota, Siesta Key, Gulf Gate Estates, Southgate, Bee Ridge,
                      Palmer Ranch, Fruitville
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-ap-bark">County:</span>
                    <p className="text-ap-stone mt-1">Sarasota County</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-8 text-center">
              Services Available in Sarasota
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Lawn Care & Maintenance", href: "/services/lawn-care" },
                { name: "Landscape Design", href: "/services/landscape-design" },
                { name: "Hardscaping", href: "/services/hardscaping" },
                { name: "Tree & Shrub Care", href: "/services/tree-shrub-care" },
                { name: "Tree Removal", href: "/services/tree-removal" },
                { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center justify-between bg-white border border-stone-100 rounded-xl px-5 py-4 hover:border-ap-green hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-ap-bark group-hover:text-ap-forest">
                    {service.name}
                  </span>
                  <ChevronRight size={16} className="text-ap-green" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#F2A900] fill-[#F2A900]" />
              ))}
            </div>
            <blockquote className="font-serif text-xl text-ap-bark italic mb-4">
              "ACP transformed our Palmer Ranch property with a stunning tropical landscape that
              thrives in the Florida heat."
            </blockquote>
            <p className="text-ap-stone font-medium">— Linda K., Sarasota</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Get a Free Landscaping Estimate in Sarasota
            </h2>
            <p className="text-stone-300 mb-8">
              Ready to elevate your Sarasota property? Contact ACP Landscaping today.
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
