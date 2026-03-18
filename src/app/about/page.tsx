import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ACP Landscaping | Bradenton, FL",
  description: "Learn about ACP Landscaping — a locally owned and operated landscaping company serving Bradenton, Sarasota, and the Gulf Coast of Florida.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">Our Story</p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              About ACP Landscaping
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl">
              A locally owned and operated landscaping company rooted in the Bradenton community and dedicated to the Gulf Coast.
            </p>
          </div>
        </section>

        {/* Mission & Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-6">
                  Rooted in Quality, Growing Through Trust
                </h2>
                <p className="text-ap-stone text-lg mb-4">
                  ACP Landscaping was founded on a simple belief: every property deserves professional care. Based in Bradenton, Florida, we've built our reputation one yard at a time — through consistent results, honest pricing, and respect for the properties we maintain.
                </p>
                <p className="text-ap-stone text-lg mb-4">
                  We understand what Florida landscapes need. The subtropical heat, the hurricane season, the sandy soils, the HOA requirements — we've worked through all of it across Manatee and Sarasota counties. That local knowledge is what sets us apart.
                </p>
                <p className="text-ap-stone text-lg mb-8">
                  Whether you need weekly lawn maintenance or a complete backyard transformation, our team brings the same care and craftsmanship to every job.
                </p>
                <ul className="space-y-4">
                  {[
                    "Locally owned and operated in Bradenton, FL",
                    "Serving Manatee and Sarasota counties",
                    "Eco-friendly practices and Florida-native plant selection",
                    "Transparent pricing — no hidden fees",
                    "Reliable scheduling and prompt communication",
                    "Licensed and insured",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-ap-bark font-medium">
                      <CheckCircle2 className="text-ap-green mr-3 flex-shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="/images/about-section.jpeg"
                  alt="ACP Landscaping team at work in Bradenton FL"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-extrabold text-ap-bark">
                How We Work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Honest Assessment",
                  desc: "We visit your property, listen to what you want, and give you a clear, itemized estimate. No upselling, no vague quotes.",
                },
                {
                  title: "Quality Execution",
                  desc: "Our crews use professional-grade equipment and take pride in the results. We clean up every day before we leave.",
                },
                {
                  title: "Ongoing Partnership",
                  desc: "We keep track of your property's needs season to season and reach out when it's time for the next service.",
                },
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
                  <div className="w-12 h-12 bg-ap-green/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-ap-forest font-black text-xl">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-ap-bark text-lg mb-2">{value.title}</h3>
                  <p className="text-ap-stone">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ap-forest text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-stone-300 mb-8">
              Get in touch for a free, no-obligation estimate on any landscaping project.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-ap-green hover:bg-ap-lime text-white px-8 py-4 rounded-full font-bold transition-all"
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
