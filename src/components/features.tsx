// src/components/features.tsx

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, BarChartIcon as ChartBar, Shield, Clock, CreditCard } from "lucide-react"

const features = [
  {
    title: "Gestion des patients",
    description: "Dossiers patients centralisés et sécurisés",
    icon: Users,
  },
  {
    title: "Planification intelligente",
    description: "Gestion avancée des rendez-vous et rappels automatiques",
    icon: Calendar,
  },
  {
    title: "Analyses détaillées",
    description: "Tableaux de bord et statistiques de performance",
    icon: ChartBar,
  },
  {
    title: "Sécurité RGPD",
    description: "Protection des données conforme aux normes en vigueur",
    icon: Shield,
  },
  {
    title: "Gain de temps",
    description: "Automatisation des tâches administratives",
    icon: Clock,
  },
  {
    title: "Gestion financière",
    description: "Facturation intégrée et suivi des paiements",
    icon: CreditCard,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-blue-50/50 dark:bg-blue-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-blue-900 dark:text-blue-100 sm:text-4xl md:text-5xl">
            Fonctionnalités clés
          </h2>
          <p className="mt-4 text-xl text-blue-700 dark:text-blue-200">
            Tout ce dont vous avez besoin pour gérer efficacement votre cabinet dentaire
          </p>
        </motion.div>
        <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-shadow bg-white hover:shadow-lg dark:bg-blue-800">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-blue-600 dark:text-blue-300" />
                  <CardTitle className="mt-4 text-blue-900 dark:text-blue-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 dark:text-blue-200">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

