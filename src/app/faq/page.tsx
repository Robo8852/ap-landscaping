import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Landscaping FAQs | ACP Landscaping Bradenton FL",
  description: "Frequently asked questions about landscaping services, lawn care, and pricing from ACP Landscaping in Bradenton, Florida.",
};

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Bradenton, Ellenton, Palmetto, Sarasota, Venice, and Osprey — covering Manatee and Sarasota counties. If you're not sure if we cover your area, give us a call.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill out our contact form or give us a call. We'll schedule a free on-site visit to assess your property and provide a detailed estimate within 24 hours.",
  },
  {
    q: "How often should I have my lawn mowed in Florida?",
    a: "During the growing season (spring through fall), most Florida lawns need mowing every 7-10 days. During winter, growth slows and you may only need service every 2-3 weeks. We can set up a schedule that matches your lawn's needs.",
  },
  {
    q: "What grass types do you work with in the Bradenton/Sarasota area?",
    a: "The most common turf types in our area are St. Augustine (especially Floratam), Zoysia, and Bermuda. Each has different mowing heights, fertilization schedules, and care needs — we know all of them.",
  },
  {
    q: "Do you offer one-time services or only recurring contracts?",
    a: "Both. We offer one-time cleanups, seasonal services, and ongoing maintenance contracts. There's no pressure to sign a long-term contract — though recurring customers do get priority scheduling.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. ACP Landscaping is fully licensed and carries general liability insurance. We're happy to provide proof of insurance before any job.",
  },
  {
    q: "Do you work with HOA communities?",
    a: "Yes. We're very familiar with HOA landscape requirements in communities throughout Manatee and Sarasota counties. We can review your HOA guidelines and make sure all work meets their standards.",
  },
  {
    q: "What's included in a seasonal cleanup?",
    a: "Our seasonal cleanup service includes debris and leaf removal, trimming overgrown shrubs, clearing flower beds, re-edging borders, and mulching. We can also add fertilization and pre-emergent weed control.",
  },
  {
    q: "How do you handle payment?",
    a: "We accept check, credit card, and ACH bank transfer. Invoices are sent after each service for one-time jobs. Recurring customers are billed monthly.",
  },
  {
    q: "Do you remove tree stumps?",
    a: "Yes. Stump grinding is available as an add-on to tree removal or as a standalone service if you have existing stumps you'd like removed.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-ap-lime font-semibold uppercase tracking-wider text-sm mb-3">Got Questions?</p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl">
              Everything you need to know about our landscaping services in Bradenton, FL and the surrounding area.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-stone-200 rounded-xl p-6">
                  <h2 className="font-bold text-ap-bark text-lg mb-3">{faq.q}</h2>
                  <p className="text-ap-stone leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-stone-50 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-extrabold text-ap-bark mb-4">
              Still Have Questions?
            </h2>
            <p className="text-ap-stone mb-8">
              Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-ap-forest hover:bg-ap-forest/90 text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Contact Us <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
