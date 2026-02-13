import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PricingPreview } from "@/components/landing/pricing-preview";
import { FAQ } from "@/components/landing/faq";
import { Waitlist } from "@/components/landing/waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PricingPreview />
      <FAQ />
      <Waitlist />
    </>
  );
}
