import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | ACP Landscaping",
  description:
    "Explore ACP Landscaping's full range of professional services in Bradenton, Sarasota, and the Gulf Coast of Florida — from lawn care and landscape design to tree removal and hardscaping.",
};

const services = [
  {
    slug: "lawn-care",
    name: "Lawn Care & Maintenance",
    description:
      "Regular mowing, edging, fertilization, weed control, and aeration to keep your lawn lush and healthy year-round.",
    image: "/images/service-lawn.jpeg",
    alt: "Lawn care services in Bradenton FL",
  },
  {
    slug: "landscape-design",
    name: "Landscape Design",
    description:
      "Custom landscape designs using native Florida plants, garden beds, and seasonal color tailored to your property.",
    image: "/images/service-design.jpeg",
    alt: "Landscape design services in Bradenton FL",
  },
  {
    slug: "hardscaping",
    name: "Hardscaping",
    description:
      "Beautiful patios, walkways, retaining walls, fire pits, and pavers that extend your outdoor living space.",
    image: "/images/service-hardscape.jpeg",
    alt: "Hardscaping services in Bradenton and Sarasota FL",
  },
  {
    slug: "tree-shrub-care",
    name: "Tree & Shrub Care",
    description:
      "Expert pruning, trimming, health assessments, disease treatment, and fertilization for your trees and shrubs.",
    image: "/images/service-tree.jpeg",
    alt: "Tree and shrub care services in Florida",
  },
  {
    slug: "tree-removal",
    name: "Tree Removal",
    description:
      "Safe and efficient tree removal, stump grinding, emergency service, and full site cleanup for any property.",
    image: "/images/service-removal.jpeg",
    alt: "Tree removal services in Bradenton FL",
  },
  {
    slug: "seasonal-cleanup",
    name: "Seasonal Cleanup",
    description:
      "Spring and fall cleanup, debris removal, mulching, bed renewal, and winter prep to keep your property pristine.",
    image: "/images/service-cleanup.jpeg",
    alt: "Seasonal cleanup services in Southwest Florida",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ap-warm">
        {/* Hero */}
        <section className="py-20 bg-ap-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">
              What We Do
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Comprehensive Landscaping Services in Florida
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              From routine lawn maintenance to full outdoor transformations, ACP Landscaping delivers
              expert results across Manatee and Sarasota counties.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-ap-warm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="overflow-hidden h-52">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl font-extrabold text-ap-bark mb-2 group-hover:text-ap-green transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-ap-stone text-sm mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-ap-green font-semibold text-sm group-hover:text-ap-forest transition-colors">
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-stone-300 mb-8">
              Contact ACP Landscaping for a free consultation and estimate. We'll help you figure out
              exactly what your property needs.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Get a Free Estimate <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
