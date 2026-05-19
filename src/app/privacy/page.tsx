import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy | AYC Landscaping",
  description:
    "How AYC Landscaping handles the information you share through our quote form.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ap-forest text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-4">
              Privacy
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-ap-stone text-lg leading-relaxed">
              When you submit our quote form we collect your name, phone, email,
              and service address &mdash; just enough to get back to you with a
              quote. We don&apos;t sell, share, or use your details for
              marketing.
            </p>
            <p className="text-ap-stone text-lg leading-relaxed">
              If you&apos;d like us to delete your information, call us at{" "}
              <a
                href="tel:+19416009879"
                className="text-ap-forest font-semibold hover:text-ap-green transition-colors"
              >
                (941) 600-9879
              </a>{" "}
              and we&apos;ll take care of it.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
