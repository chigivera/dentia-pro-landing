// src/components/features-details.tsx

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function FeatureDetails() {
  return (
    <div className="px-4 py-16 bg-slate-50 dark:bg-blue-900 md:px-6 lg:px-16">
      <div className="mx-auto space-y-24 max-w-7xl">
        {/* Suivi des Réclamations */}
        <Section
          title="Suivi des Réclamations"
          description="Simplifiez le suivi des réclamations avec DentiaPro. Suivez les réclamations impayées et réduisez les refus de 80%."
          imageSrc="/mockup1.png"
          imageAlt="Interface de Suivi des Réclamations"
          features={[
            "Suivi des réclamations impayées.",
            "Réduction de 80% des refus.",
            "Téléchargement automatique des données.",
            "Rapports personnalisables.",
          ]}
        />

        {/* Affichage des Paiements */}
        <Section
          title="Affichage des Paiements"
          description="Automatisez l'affichage des paiements et économisez du temps avec notre portail intuitif."
          imageSrc="/mockup3.png"
          imageAlt="Interface d'Affichage des Paiements"
          features={[
            "Traitement automatique des paiements.",
            "Recherche réclamation intégrée.",
            "Économisez 20 heures par mois.",
            "Rapports détaillés téléchargeables.",
          ]}
          imageLeft={false}
        />

        {/* Système de Rendez-vous en Ligne */}
        <Section
          title="Rendez-vous en Ligne"
          description="Facilitez la prise de rendez-vous pour vos patients et votre équipe."
          imageSrc="/mockup2.png"
          imageAlt="Interface du Système de Rendez-vous en Ligne"
          features={[
            "Planification simplifiée.",
            "Disponibilité en temps réel.",
            "Automatisation des notifications.",
            "Gestion multi-prestataires.",
          ]}
        />
      </div>
    </div>
  )
}

interface SectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  features: string[]
  imageLeft?: boolean
}

function Section({ title, description, imageSrc, imageAlt, features, imageLeft = true }: SectionProps) {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`space-y-6 ${!imageLeft && "lg:order-2"}`}
      >
        <h2 className="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-100 sm:text-3xl">{title}</h2>
        <p className="text-blue-900 dark:text-blue-200">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="block space-x-2">
              <Check className="inline mb-1 text-xl text-blue-500 " />
              <span className="text-black dark:text-blue-200">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="text-white bg-blue-700 rounded-full">
          En savoir plus
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: imageLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`${imageLeft ? "lg:ml-auto" : "lg:order-1"}`}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  )
}