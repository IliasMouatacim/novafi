import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import Newsletter from "@/components/Newsletter";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AppShowcase />
      <Newsletter />
    </PageTransition>
  );
}
