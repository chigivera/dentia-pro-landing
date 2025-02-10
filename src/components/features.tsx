// src/components/features.tsx

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, BarChartIcon as ChartBar, Shield, Clock, CreditCard } from "lucide-react"

const features = [
  {
    title: "Gestion des dossiers patients",
    description: "Accès sécurisé et centralisé aux dossiers patients",
    icon: Users,
  },
  {
    title: "Planification intelligente",
    description: "Rappels automatisés et gestion des rendez-vous",
    icon: Calendar,
  },
  {
    title: "Statistiques avancées",
    description: "Tableaux de bord et analyses de performance",
    icon: ChartBar,
  },
  {
    title: "Sécurité RGPD",
    description: "Protection des données conforme aux normes",
    icon: Shield,
  },
  {
    title: "Gain de temps",
    description: "Automatisation des tâches administratives",
    icon: Clock,
  },
  {
    title: "Gestion financière",
    description: "Facturation et suivi des paiements intégrés",
    icon: CreditCard,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fonctionnalités clés</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Tout ce dont vous avez besoin pour gérer votre cabinet efficacement
          </p>
        </motion.div>
        <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-blue-500" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t dark:bg-gray-900/50">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Restez informé des dernières fonctionnalités et mises à jour
            </p>
            <form className="flex max-w-sm gap-2 mt-4">
              <Input type="email" placeholder="Votre email" className="max-w-[240px]" />
              <Button type="submit">S&apos;abonner</Button>
            </form>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Produit</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Démonstration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Contact commercial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center border-t text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dentia Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

