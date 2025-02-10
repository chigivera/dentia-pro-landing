// src/components/faq-section.tsx

"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment Dentia Pro protège-t-il les données des patients ?",
    answer:
      "Dentia Pro est entièrement conforme au RGPD et utilise un chiffrement de bout en bout. Vos données sont stockées sur des serveurs sécurisés en France.",
  },
  {
    question: "Puis-je importer mes données existantes ?",
    answer:
      "Oui, nous proposons un service d'importation de données depuis la plupart des logiciels dentaires courants. Notre équipe vous accompagne dans ce processus.",
  },
  {
    question: "Quelle est la durée d'engagement ?",
    answer:
      "Nos abonnements sont sans engagement. Vous pouvez annuler à tout moment. Nous proposons également une période d'essai gratuite de 14 jours.",
  },
  {
    question: "Le logiciel est-il accessible sur mobile ?",
    answer:
      "Oui, Dentia Pro est accessible sur tous les appareils via notre application web responsive et nos applications natives iOS et Android.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Questions fréquentes</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Tout ce que vous devez savoir sur Dentia Pro</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

