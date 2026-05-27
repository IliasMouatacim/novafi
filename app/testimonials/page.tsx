import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import Testimonials from "@/components/Testimonials";
import TrustBanner from "@/components/testimonials/TrustBanner";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what 150M+ users say about NovaFi. Read real reviews from finance managers, CEOs, and everyday users who trust NovaFi for their financial management.",
};

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <TestimonialsHero />
      <Testimonials />
      <TrustBanner />
      <Newsletter />
    </PageTransition>
  );
}
