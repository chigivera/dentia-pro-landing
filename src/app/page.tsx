// src/app/page.tsx

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { PricingTable } from "@/components/pricing-table"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <Features />
        <Testimonials />
        <PricingTable />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

