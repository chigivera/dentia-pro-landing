import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { PricingTable } from "@/components/pricing-table"
import { Footer } from "@/components/footer"
import Saas from "@/components/saas"
import WhoWeAre from "@/components/whoweare"
import Contact from "@/components/contact"
import MetricsSection from "@/components/metrics-section"
import FeatureDetails from "@/components/features-details"
import { FloatingPaths } from "@/components/floating-paths"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <WhoWeAre />
        <div className="relative">
          <FloatingPaths />
          <MetricsSection />
        </div>
        <Saas />
        <div className="relative">
          <FloatingPaths />
          <Features />
        </div>
        <FeatureDetails />
        <div className="relative">
          <FloatingPaths />
          <PricingTable />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

