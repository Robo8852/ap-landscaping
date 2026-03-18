import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, Phone, MapPin, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Services Venice FL | ACP Landscaping",
  description:
    "Professional landscaping, lawn care, hardscaping, and tree services in Venice, FL. Serving Venice Gardens, Southwood, Pelican Pointe, Nokomis, and south Sarasota County.",
};

export default function VenicePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-ap-lime mb-3">
              <MapPin size={16} />
              <span className="font-semibold uppercase tracking-wider text-sm">Venice, FL</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Landscaping Services in Venice, FL
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mb-8">
              ACP Landscaping brings reliable, high-quality lawn care and landscaping to Venice and
              south Sarasota County. We understand the curb appeal expectations of Venice Gardens,
              Pelican Pointe, and the historic downtown Venice community.
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
                  Consistent, Dependable Landscaping for Venice's Retirement Community
                </h2>
                <p className="text-ap-stone mb-4">
                  Venice is known for its well-kept neighborhoods, charming historic downtown, and
                  community pride. Many Venice homeowners — particularly in active adult and
                  retirement communities — place a premium on consistent, well-executed lawn
                  maintenance that keeps properties looking their best without requiring hands-on
                  involvement from the owner.
                </p>
                <p className="text-ap-stone mb-6">
                  ACP Landscaping provides that dependability. We show up on schedule, communicate
                  clearly, and deliver results that meet the high standards Venice neighborhoods
                  expect. Whether it's regular mowing and edging in Southwood, seasonal color
                  rotations in Venice Gardens, or shrub trimming around Pelican Pointe's gated
                  entrances, we've got it handled.
                </p>
                <ul className="space-y-3">
                  {[
                    "Consistent weekly and biweekly maintenance schedules",
                    "Seasonal color plantings and annual bed refreshes",
                    "Clean, sharp edging to maintain neighborhood standards",
                    "Shrub shaping and pruning for gated community entrances",
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
                <h3 className="font-bold text-ap-bark text-lg mb-4">Venice Service Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-ap-bark">ZIP Codes Served:</span>
                    <p className="text-ap-stone mt-1">34285, 34292, 34293</p>
                  </div>
                  <div>
                    <span className="font-semibold text-ap-bark">Neighborhoods Served:</span>
                    <p className="text-ap-stone mt-1">
                      Downtown Venice, Venice Gardens, Southwood, Pelican Pointe, Nokomis
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
              Services Available in Venice
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
              "Reliable, professional, and always on time. ACP keeps our Venice Gardens property
              looking its best year-round."
            </blockquote>
            <p className="text-ap-stone font-medium">— Tom W., Venice</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Get a Free Landscaping Estimate in Venice
            </h2>
            <p className="text-stone-300 mb-8">
              Ready to keep your Venice property looking its best? Contact ACP Landscaping today.
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
