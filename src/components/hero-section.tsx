// src/components/hero-section.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
// import AutoScrollSlider from "./auto-scroll-slider"

// const items = ["/img/slider3.jpg", "/img/slider3.jpg", "/img/slider3.jpg"]

export function HeroSection() {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section id="hero" className="relative py-20 overflow-hidden md:py-32"
    style={{
      backgroundImage: `url(/img/slider3.jpg)`,
      backgroundPosition: "80% center", // Positions the doctor more towards the right
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    >
      {/* Background slider */}
      {/* <AutoScrollSlider items={items} /> */}

      <div className="relative z-10 flex h-[50svh] w-full flex-col justify-center items-center lg:items-start"
     
      >
        <div className="z-10 w-full max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl py-16 mx-auto text-center lg:text-left lg:mx-0 sm:py-20 lg:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Optimisez votre cabinet dentaire avec DentiaPro
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-700 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Le CRM conçu par des dentistes, pour les dentistes
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="px-8 text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToSection("#contact")}
              >
                Réserver une Démo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block absolute inset-0 z-1 bg-gradient-to-r from-white from-20% to-60% to-transparent dark:from-blue-950/50 dark:to-background" />
    </section>
  )
}

