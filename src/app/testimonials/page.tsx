import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | ACP Landscaping Bradenton FL",
  description: "Read reviews from homeowners and businesses across Bradenton, Sarasota, and the Gulf Coast who trust ACP Landscaping.",
};

const testimonials = [
  {
    name: "James T.",
    location: "Lakewood Ranch, Bradenton",
    service: "Lawn Care",
    text: "The ACP team has been maintaining our Lakewood Ranch lawn for two seasons now. They're always on time, the lawn looks incredible, and they've kept us compliant with our HOA requirements without any hassle.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Palmer Ranch, Sarasota",
    service: "Landscape Design",
    text: "ACP transformed our Palmer Ranch property with a stunning tropical landscape that actually thrives in the Florida heat. They recommended plants I'd never heard of that turned out to be perfect for our soil.",
    rating: 5,
  },
  {
    name: "Tom W.",
    location: "Venice Gardens, Venice",
    service: "Lawn Maintenance",
    text: "Reliable, professional, and always on time. ACP keeps our Venice Gardens property looking its best year-round. I especially appreciate that they communicate if there's ever a schedule change.",
    rating: 5,
  },
  {
    name: "Maria S.",
    location: "Ellenton",
    service: "Post-Storm Cleanup",
    text: "We hired ACP to clean up our yard after the hurricane season — they did an incredible job clearing downed branches and debris quickly. Back to normal within two days.",
    rating: 5,
  },
  {
    name: "Robert D.",
    location: "Snead Island, Palmetto",
    service: "Landscaping",
    text: "Our waterfront property needed someone who understood saltwater exposure. ACP knew exactly what plants to recommend and the result is a beautiful, low-maintenance coastal landscape.",
    rating: 5,
  },
  {
    name: "Catherine B.",
    location: "Osprey",
    service: "Estate Maintenance",
    text: "ACP maintains our Osprey property and the attention to detail is exceptional. They treat the estate like it's their own. I've recommended them to everyone in our neighborhood.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    location: "Bradenton",
    service: "Hardscaping",
    text: "We had ACP install a new paver patio and the workmanship is outstanding. It completely changed how we use our outdoor space. The project came in on budget and on schedule.",
    rating: 5,
  },
  {
    name: "Michael C.",
    location: "Sarasota",
    service: "Commercial Maintenance",
    text: "We use ACP for our commercial property in Sarasota. The grass is perfectly cut, the seasonal beds look fantastic, and they always leave the property tidy. Highly recommended for commercial work.",
    rating: 5,
  },
  {
    name: "Emily R.",
    location: "Bradenton",
    service: "Seasonal Cleanup",
    text: "The team was incredibly respectful of our property. They cleaned up every day before leaving and the final landscape design exceeded our expectations.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">Client Stories</p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              What Our Customers Say
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl">
              Homeowners and businesses across Bradenton, Sarasota, and the Gulf Coast trust ACP Landscaping.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-stone-50 rounded-2xl p-8 border border-stone-100 shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={18} className="text-[#F2A900] fill-[#F2A900]" />
                    ))}
                  </div>
                  <p className="text-ap-stone italic mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-ap-bark">{t.name}</p>
                    <p className="text-sm text-ap-stone">{t.location}</p>
                    <p className="text-xs text-ap-green font-medium mt-1">{t.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Ready to Be Our Next Happy Customer?
            </h2>
            <p className="text-stone-300 mb-8">Get a free estimate for your property today.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Get a Free Quote <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
