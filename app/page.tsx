import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { ViralTemplatesSection } from "@/components/viral-templates-section"
import { PremiumPowerSection } from "@/components/premium-power-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <StatsSection />
      <ViralTemplatesSection />
      <PremiumPowerSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
