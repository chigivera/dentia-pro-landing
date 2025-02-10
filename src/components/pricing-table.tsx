// src/components/pricing-table.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Essentiel",
    price: "49€",
    description: "Pour les cabinets individuels",
    features: ["Jusqu'à 500 patients", "Gestion des rendez-vous", "Dossiers patients basiques", "Support par email"],
  },
  {
    name: "Pro",
    price: "99€",
    description: "Pour les cabinets en croissance",
    popular: true,
    features: [
      "Patients illimités",
      "Gestion avancée des rendez-vous",
      "Dossiers patients complets",
      "Statistiques avancées",
      "Support prioritaire",
    ],
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    description: "Pour les réseaux de cliniques",
    features: [
      "Multi-établissements",
      "API personnalisée",
      "Formations sur site",
      "Account manager dédié",
      "Support 24/7",
    ],
  },
]

export function PricingTable() {
  return (
    <section className="py-20" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tarifs simples et transparents
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Choisissez le plan qui correspond à vos besoins</p>
        </motion.div>
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative ${plan.popular ? "border-blue-500 shadow-blue-100 dark:shadow-blue-900/20" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute bg-blue-500 -top-2 right-4" variant="secondary">
                    Populaire
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600">Choisir {plan.name}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

