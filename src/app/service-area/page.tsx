import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Landscaping Service Areas in Florida | ACP Landscaping",
  description:
    "ACP Landscaping serves Bradenton, Sarasota, Palmetto, Ellenton, Venice, and Osprey, FL. Professional lawn care and landscaping throughout Manatee and Sarasota counties.",
};

const cities = [
  {
    name: "Bradenton",
    slug: "bradenton",
    desc: "Our home base — serving all of Bradenton and Manatee County.",
    zips: "34201, 34202, 34203, 34205, 34208, 34209, 34210, 34211",
  },
  {
    name: "Ellenton",
    slug: "ellenton",
    desc: "Ellenton and surrounding communities along the Manatee River.",
    zips: "34222",
  },
  {
    name: "Palmetto",
    slug: "palmetto",
    desc: "Palmetto and north Manatee County residential and commercial properties.",
    zips: "34220, 34221",
  },
  {
    name: "Sarasota",
    slug: "sarasota",
    desc: "All of Sarasota city and surrounding neighborhoods.",
    zips: "34230, 34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238, 34239, 34241, 34242",
  },
  {
    name: "Venice",
    slug: "venice",
    desc: "Venice and south Sarasota County properties.",
    zips: "34285, 34292, 34293",
  },
  {
    name: "Osprey",
    slug: "osprey",
    desc: "Osprey and the Intracoastal corridor south of Sarasota.",
    zips: "34229",
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
              ACP Landscaping proudly serves homeowners and businesses throughout Manatee and
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
                  <p className="text-ap-stone text-sm mb-3">{city.desc}</p>
                  <p className="text-xs text-ap-stone/70">ZIP: {city.zips}</p>
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
