"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AutoScrollSlider from "./auto-scroll-slider"

const items = ["/img/slider.jpg", "/img/slider2.jpg", "/img/slider3.jpg"]

export function HeroSection() {
  return (
    <section id="hero" className="relative py-20 overflow-hidden md:py-32">
      {/* Background slider */}
      <AutoScrollSlider items={items} />

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            >
              Optimisez votre cabinet dentaire avec DentiaPro
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-muted-foreground"
            >
              Le CRM conçu par des dentistes, pour les dentistes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="border-blue-200 dark:border-blue-700 hover:bg-blue-600">
              Réserver une Démo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full lg:h-[600px]"
          >
            {/* This div is now empty, acting as a placeholder for layout purposes */}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-blue-50/50 to-transparent dark:from-blue-950/50 dark:to-background" />
    </section>
  )
}

