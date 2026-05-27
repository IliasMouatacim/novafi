import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import AboutHero from "@/components/about/AboutHero";
import Impact from "@/components/Impact";
import Team from "@/components/about/Team";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NovaFi, our mission, our impact, and the team behind the #1 finance platform trusted by over 150 million users worldwide.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <Impact />
      <Team />
      <Newsletter />
    </PageTransition>
  );
}
