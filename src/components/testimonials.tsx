// src/components/testimonials.tsx

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Dr. Sophie Martin",
    role: "Dentiste à Paris",
    content: "Dentia Pro a révolutionné la gestion de mon cabinet. Je gagne un temps précieux chaque jour.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Dr. Thomas Bernard",
    role: "Directeur de clinique dentaire",
    content: "Un outil indispensable pour notre réseau de cliniques. La centralisation des données est un vrai plus.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Marie Dubois",
    role: "Assistante dentaire",
    content: "L'interface est intuitive et nous permet de gérer efficacement les rendez-vous et les dossiers patients.",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ils nous font confiance</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Découvrez ce que nos utilisateurs disent de Dentia Pro
          </p>
        </motion.div>
        <div className="flex items-center justify-center mt-16">
          <Button variant="ghost" size="icon" className="mr-4" onClick={prev} aria-label="Témoignage précédent">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="relative w-full max-w-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                    </Avatar>
                    <blockquote className="mt-6 text-xl">`&quot;`{testimonials[currentIndex].content}`&quot;`</blockquote>
                    <div className="mt-4">
                      <cite className="not-italic font-semibold">{testimonials[currentIndex].name}</cite>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          <Button variant="ghost" size="icon" className="ml-4" onClick={next} aria-label="Témoignage suivant">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

