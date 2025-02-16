// src/components/features.tsx

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import icon1 from "@/assets/icons/icon-1.svg";
import icon2 from "@/assets/icons/icon-2.svg";
import icon3 from "@/assets/icons/icon-3.svg";
import icon4 from "@/assets/icons/icon-4.svg";
import icon5 from "@/assets/icons/icon-5.svg";
import icon6 from "@/assets/icons/icon-6.svg";

const features = [
  {
    title: "Créer des dossiers de santé électroniques",
    description: "Dossiers patients centralisés et sécurisés",
    icon: icon1,
  },
  {
    title: "Planifier des rendez-vous",
    description: "Gestion avancée des rendez-vous et rappels automatiques",
    icon: icon2,
  },
  {
    title: "Envoyer des rappels automatisés",
    description: "Notifications automatiques pour réduire les absences",
    icon: icon3,
  },
  {
    title: "Élaborer des plans de traitement",
    description: "Création et suivi des plans de soins personnalisés",
    icon: icon4,
  },
  {
    title: "Gérer votre inventaire",
    description: "Suivi et gestion des stocks en temps réel",
    icon: icon5,
  },
  {
    title: "Suivre vos revenus",
    description: "Facturation intégrée et suivi des paiements",
    icon: icon6,
  },
];


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
        <div className="grid gap-10 px-20 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="items-center h-full text-center transition-shadow bg-white hover:shadow-lg dark:bg-blue-800">
                <CardHeader>
                  <feature.icon className="self-center w-24 h-24 mb-5 text-blue-600 dark:text-blue-300" />
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

