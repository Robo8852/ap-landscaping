import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Landscaping Service Areas in Florida | AYC Landscaping",
  description:
    "AYC Landscaping serves Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL. Professional lawn care and landscaping throughout Manatee and Sarasota counties.",
  alternates: {
    canonical: "/service-area",
  },
};

const cities = [
  {
    name: "Bradenton",
    slug: "bradenton",
    desc: "Our home base — serving all of Bradenton and Manatee County.",
  },
  {
    name: "Ellenton",
    slug: "ellenton",
    desc: "Ellenton and surrounding communities along the Manatee River.",
  },
  {
    name: "Palmetto",
    slug: "palmetto",
    desc: "Palmetto and north Manatee County residential and commercial properties.",
  },
  {
    name: "Sarasota",
    slug: "sarasota",
    desc: "All of Sarasota city and surrounding neighborhoods.",
  },
  {
    name: "Venice",
    slug: "venice",
    desc: "Venice and south Sarasota County properties.",
  },
  {
    name: "Osprey",
    slug: "osprey",
    desc: "Osprey and the Intracoastal corridor south of Sarasota.",
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">
              Where We Work
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Landscaping Services Across the Gulf Coast
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl">
              AYC Landscaping proudly serves homeowners and businesses throughout Manatee and
              Sarasota counties, Florida.
            </p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-area/${city.slug}`}
                  className="group bg-stone-50 border border-stone-100 rounded-2xl p-8 hover:border-ap-green hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-ap-green" size={22} />
                    <h2 className="text-xl font-bold text-ap-bark group-hover:text-ap-forest transition-colors">
                      {city.name}, FL
                    </h2>
                  </div>
                  <p className="text-ap-stone text-sm">{city.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
