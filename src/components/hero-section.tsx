// src/components/hero-section.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative py-20 overflow-hidden md:py-32">
      <div className="container">
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
              Optimisez votre cabinet dentaire avec Dentia Pro
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
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600"
          
              >
                Essai gratuit 14 jours
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
            <Image src="/placeholder.svg" alt="Dashboard Dentia Pro" fill className="object-contain" priority />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/50 dark:to-background" />
    </section>
  )
}

