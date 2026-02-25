import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import About from "@/components/about";
import CTA from "@/components/cta";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-ap-warm pb-24 md:pb-0">
        <Hero />
        <TrustBar />

        <Services />

        <About />

        <CTA />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
