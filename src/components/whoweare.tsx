// src/components/whoweare.tsx

"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhoWeAre() {
  return (
    <section id="whoweare" className="container px-4 py-16 mx-auto bg-blue-50/50 dark:bg-blue-900">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-100">Qui Sommes-Nous</h2>

          <p className="leading-relaxed text-blue-700 dark:text-blue-200">
            Nous sommes une équipe unique de professionnels dentaires qui ont fait la transition vers le développement
            de logiciels, apportant une compréhension approfondie des opérations de cabinet dentaire et des solutions
            technologiques modernes.
          </p>

          <p className="leading-relaxed text-blue-700 dark:text-blue-200">
            Notre mission est de révolutionner la gestion des cabinets dentaires grâce à des solutions logicielles
            innovantes, conçues par des dentistes pour des dentistes.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-800 dark:text-blue-200">Expertise en gestion de cabinet</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-800 dark:text-blue-200">Optimisation des flux de travail dentaires</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-800 dark:text-blue-200">Approche centrée sur le patient</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-800 dark:text-blue-200">Solutions SaaS modernes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-800 dark:text-blue-200">Technologie basée sur le cloud</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-800 dark:text-blue-200">Intégration transparente</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <Image
            src="/img/blog3.jpg"
            alt="Installation d'examen dentaire montrant la technologie dentaire moderne"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}

