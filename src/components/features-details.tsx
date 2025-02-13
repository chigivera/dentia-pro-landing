// src/components/features-details.tsx

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function FeatureDetails() {
  return (
    <div className="px-4 py-16 bg-slate-50 dark:bg-blue-900 md:px-6 lg:px-8">
      <div className="mx-auto space-y-24 max-w-7xl">
        {/* Claims Tracker Section */}
        <Section
          title="Suivi des Réclamations"
          description="Ne manquez plus aucune réclamation avec la solution de Suivi des Réclamations de DentiaPro. Notre Suivi des Réclamations aide l'agent de réclamations à suivre auprès de la compagnie d'assurance les réclamations soumises pour n'importe lequel de leurs patients."
          imageSrc="/mockup1.png"
          imageAlt="Interface de Suivi des Réclamations"
          features={[
            "L'agent peut suivre toutes les réclamations impayées du bucket d'âge des réclamations auprès de la compagnie d'assurance.",
            "80% de réduction des refus de réclamations et des pertes de réclamations.",
            "SoT télécharge toutes les données de réclamations, y compris l'EOB pour chaque patient.",
            "Offre des rapports personnalisables pour des insights commerciaux plus approfondis.",
          ]}
        />

        {/* Payment Posting Section */}
        <Section
          title="Affichage des Paiements"
          description="Notre portail d'Affichage des Paiements aide les agents A/R à explorer les rapports bancaires et les chèques manuels des comptes bancaires à traiter par le bot."
          imageSrc="/mockup2.png"
          imageAlt="Interface d'Affichage des Paiements"
          features={[
            "SoT traite le paiement et récupère les données EOB du Portail du Payeur.",
            "Offre une recherche EOB.",
            "Écrit dans le grand livre patient TMS et le module de Comptes Clients.",
            "Rapports téléchargeables sur les paiements affichés.",
            "Économise à votre réception plus de 20 heures d'affichage manuel des paiements.",
            "Données sur les détails du patient/de la procédure, le montant facturé, les ajustements, et plus encore.",
          ]}
          imageLeft={false}
        />

        {/* Online Appointment System Section */}
        <Section
          title="Système de Rendez-vous en Ligne"
          description="Simplifiez la prise de rendez-vous pour vos patients et votre personnel avec notre système de rendez-vous en ligne intuitif."
          imageSrc="/mockup3.png"
          imageAlt="Interface du Système de Rendez-vous en Ligne"
          features={[
            "Rationalise l'ensemble du processus de planification des rendez-vous pour le personnel.",
            "Permet de réserver, reprogrammer ou annuler des rendez-vous en ligne 24h/24 et 7j/7.",
            "Fournit la disponibilité en temps réel des médecins, réduisant les conflits de réservation.",
            "S'intègre parfaitement à votre PMS existant, synchronisant les détails des rendez-vous.",
            "Permet au personnel de gérer facilement plusieurs prestataires et emplacements.",
            "Formulaires personnalisables pour capturer les détails du patient lors de la prise de rendez-vous.",
            "Aperçus rapides des horaires quotidiens, des annulations et des rendez-vous.",
            "Économise des heures à la réception en automatisant les tâches de planification manuelle.",
            "Fournit des rapports téléchargeables pour les statistiques de rendez-vous et la gestion du flux de patients.",
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
        <h2 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-100 sm:text-3xl">{title}</h2>
        <p className="text-blue-700 dark:text-blue-200">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 mt-1 text-blue-500" />
              <span className="text-blue-800 dark:text-blue-200">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="rounded-full">
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

