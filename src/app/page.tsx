// src/app/page.tsx

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import NotreSolution from "@/components/notre-solution"
// import WhoWeAre from "@/components/whoweare"
import Contact from "@/components/contact"
// import MetricsSection from "@/components/metrics-section"
import FeatureDetails from "@/components/features-details"
import { FloatingPaths } from "@/components/floating-paths"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <StatsSection/>

      
        {/* <div className="relative">
        <FloatingPaths position={1} />
        <WhoWeAre />
        </div> */}
        <NotreSolution />
        <div className="relative">
        <FloatingPaths position={-1} />
          <Features />
        </div>
        <FeatureDetails />
      
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

