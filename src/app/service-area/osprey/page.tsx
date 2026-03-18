import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, Phone, MapPin, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Services Osprey FL | ACP Landscaping",
  description:
    "Professional landscaping, lawn care, hardscaping, and tree services in Osprey, FL. Serving The Oaks, Pine Ranch, Casey Key, and the Intracoastal corridor between Venice and Sarasota.",
};

export default function OspreyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-ap-lime mb-3">
              <MapPin size={16} />
              <span className="font-semibold uppercase tracking-wider text-sm">Osprey, FL</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Landscaping Services in Osprey, FL
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mb-8">
              ACP Landscaping serves the quiet coastal community of Osprey with the attention to
              detail that upscale properties in The Oaks, Pine Ranch, and Casey Key demand. We
              bring estate-level care to every property we maintain along the Intracoastal
              corridor.
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
                  Estate-Quality Landscaping for Osprey's Exclusive Properties
                </h2>
                <p className="text-ap-stone mb-4">
                  Osprey occupies a premier stretch of the Sarasota County coast — tucked between
                  Venice and Sarasota along the Intracoastal Waterway. The community is home to
                  some of the most exclusive estates in the region, from the prestigious golf and
                  country club enclave of The Oaks to the barrier island privacy of Casey Key,
                  one of Florida's last undeveloped barrier islands.
                </p>
                <p className="text-ap-stone mb-6">
                  Properties here require the highest level of landscape care. ACP Landscaping
                  understands that detail matters — from perfectly edged turf lines to
                  thoughtfully pruned specimen trees, every element of your outdoor space should
                  reflect the quality of the property itself. We bring that standard of excellence
                  to every visit.
                </p>
                <ul className="space-y-3">
                  {[
                    "Estate property maintenance with meticulous attention to detail",
                    "Coastal and Intracoastal-adjacent plant selection expertise",
                    "Specimen tree care and structural pruning",
                    "Discreet, professional service for private and gated properties",
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
                <h3 className="font-bold text-ap-bark text-lg mb-4">Osprey Service Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-ap-bark">ZIP Codes Served:</span>
                    <p className="text-ap-stone mt-1">34229</p>
                  </div>
                  <div>
                    <span className="font-semibold text-ap-bark">Neighborhoods Served:</span>
                    <p className="text-ap-stone mt-1">
                      Osprey, South Venice, The Oaks, Pine Ranch, Casey Key area
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
              Services Available in Osprey
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
              "ACP maintains our Osprey estate property and the attention to detail is
              exceptional."
            </blockquote>
            <p className="text-ap-stone font-medium">— Catherine B., Osprey</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Get a Free Landscaping Estimate in Osprey
            </h2>
            <p className="text-stone-300 mb-8">
              Ready to bring estate-level care to your Osprey property? Contact ACP Landscaping
              today.
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
