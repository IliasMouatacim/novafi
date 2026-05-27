import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import ServicesHero from "@/components/services/ServicesHero";
import WhyChoose from "@/components/WhyChoose";
import Pricing from "@/components/services/Pricing";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NovaFi services: smart budgeting, investment planning, card management, real-time analytics, and enterprise-grade security for your finances.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesHero />
      <WhyChoose />
      <Pricing />
      <Newsletter />
    </PageTransition>
  );
}
