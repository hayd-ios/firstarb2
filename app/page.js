import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import StatsSection from "./components/stats-section";
import ServicesSection from "./components/services-section";
import TrustSection from "./components/trust-section";
import FAQSection from "./components/faq-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <StatsSection />
        <ServicesSection />
        <TrustSection />
        <FAQSection />
        <ContactSection />
       </main>
    </div>
  );
}
