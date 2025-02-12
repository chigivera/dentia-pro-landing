"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="container px-4 py-12 pb-0 mx-auto bg-blue-50 dark:bg-blue-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-2 text-2xl font-semibold text-blue-900 dark:text-blue-100 md:text-3xl">
          Nous Sommes Toujours Prêts à Vous Aider
        </h2>
        <h3 className="mb-4 text-xl font-semibold text-blue-800 dark:text-blue-200 md:text-2xl">
          Prenez un Rendez-vous
        </h3>
        <p className="max-w-2xl mx-auto text-blue-700 dark:text-blue-300">
          Contactez-nous pour découvrir comment DentiaPro peut transformer votre cabinet dentaire.
        </p>
      </motion.div>

      <div className="grid items-center max-w-6xl gap-8 mx-auto lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Card className="bg-white border-0 shadow-none dark:bg-blue-800">
            <CardContent className="p-6">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input type="text" placeholder="Nom" className="bg-blue-50 dark:bg-blue-700" />
                  <Input type="email" placeholder="Email" className="bg-blue-50 dark:bg-blue-700" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input type="tel" placeholder="Téléphone" className="bg-blue-50 dark:bg-blue-700" />
                  <Input type="date" className="bg-blue-50 dark:bg-blue-700" />
                </div>
                <Textarea
                  placeholder="Écrivez votre message ici..."
                  className="bg-blue-50 dark:bg-blue-700 min-h-[120px]"
                />
                <div className="space-y-2">
                  <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">Prendre un Rendez-vous</Button>
                  <p className="text-sm text-center text-blue-600 dark:text-blue-300">
                    (Nous confirmerons par un message texte)
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <Image
            src="/img/contact-img.png"
            alt="Professionnels médicaux"
            width={500}
            height={600}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}

