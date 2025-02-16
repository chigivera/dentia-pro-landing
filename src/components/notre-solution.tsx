// src/components/notre-solution.tsx

// src/components/NotreSolution.tsx

// src/components/saas.tsx

"use client"

import { motion } from "framer-motion"
import MacbookComponent from "./macbook-component"

export default function NotreSolution() {
  return (
    <div id="notre-solution" className="min-h-screen py-16 ">
      <div className="container px-4 mx-auto">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-12 text-4xl font-bold text-blue-900 dark:text-blue-100 md:text-5xl">
            <span className="relative">
              Solutions SaaS Basées sur le Cloud
              <span className="absolute left-0 w-full h-3 bottom-1 bg-blue-200/40 dark:bg-blue-700/40 -z-10"></span>
            </span>{" "}
            pour Votre <br className="md:hidden" />
            Cabinet Dentaire
          </h2>
          {/* <p className="max-w-2xl mx-auto mb-8 text-blue-700 dark:text-blue-200">
            Les solutions SaaS robustes basées sur le cloud de DentiaPro sont là pour transformer la façon dont votre
            cabinet dentaire et vos DSO fonctionnent.
          </p> */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Réserver une Démo
          </motion.button>
        </motion.div>

        {/* MacBook Mockup */}
        <div className="relative">
          {/* Side Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 -translate-y-1/2 top-1/2 -translate-x-1/4"
          >
            <img src="/placeholder.svg?height=200&width=200" alt="" className="w-48 h-auto" aria-hidden="true" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 -translate-y-1/2 top-1/2 translate-x-1/4"
          >
            <img src="/placeholder.svg?height=200&width=200" alt="" className="w-48 h-auto" aria-hidden="true" />
          </motion.div>

          {/* MacBook Component */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <MacbookComponent imageUrl="/mockup4.png" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

