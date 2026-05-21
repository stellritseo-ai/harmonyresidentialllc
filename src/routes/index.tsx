import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harmony Residential Care LLC — Trusted Home Health Care in Round Rock, TX" },
      { name: "description", content: "20 years of compassionate in-home nursing, physical therapy, speech therapy, occupational therapy, and medical social services across Round Rock, Austin, and Georgetown." },
      { property: "og:title", content: "Harmony Residential Care LLC — Trusted Home Health Care" },
      { property: "og:description", content: "Skilled nursing and therapy at home for seniors and individuals with disabilities in Central Texas." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
