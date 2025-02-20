// src/components/contact.tsx

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { motion } from "framer-motion"
import { PhoneInput } from "./phone-input"
import { Loader2 } from "lucide-react"
import AnimatedCheckMark from "./AnimatedCheckMark"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  
  })
  const [showSuccessPopover, setShowSuccessPopover] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok) {
        console.log("Data saved successfully!")
        // You might want to add some user feedback here, like clearing the form or showing a success message
        // setFormData({ name: "", email: "",phone:"",date:"",address:"", message: "" }) // Clear the form after successful submission
      } else {
        throw new Error("Server responded with an error")
      }
    } catch (error) {
      console.error("Error saving data:", error)
      // You might want to show an error message to the user here
      alert("Error submitting form. Please try again later.") //Simple error handling for the user.
    } finally {
      setIsLoading(false)
      setShowSuccessPopover(true)
      setFormData({ name: "", email: "", phone: "" }) // Clear the form after successful submission
      setTimeout(() => setShowSuccessPopover(false), 5000) // Hide 
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handlePhoneChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }))
  }
  return (
    <section id="contact" className="container px-4 py-12 pb-0 mx-auto bg-blue-50 dark:bg-blue-900">
       {showSuccessPopover && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="p-20 text-center bg-white rounded-lg shadow-2xl w-[400px] lg:w-[600px]"
      >
        <div className="grid gap-6">
          <div className="mb-10 scale-150">
           
            <AnimatedCheckMark />
          </div>
          <div className="text-center">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold leading-tight"
            >
              Merci pour votre intérêt!
            </motion.h4>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-2 text-lg text-gray-600"
            >
              Nous allons vous contacter. À bientôt!
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
      )}
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
              <form onSubmit={handleSubmit} className="grid gap-4">
               
<div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Nom Complet</span>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom Complet"
                    className="mt-1 bg-blue-50 dark:bg-blue-700"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</span>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mt-1 bg-blue-50 dark:bg-blue-700"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Téléphone</span>
                  <PhoneInput
                    value={formData.phone}
                    placeholder="Téléphone"
                    defaultCountry="MA"
                    onChange={handlePhoneChange}
                    className="mt-1 bg-blue-50 dark:bg-blue-700"
                    required
                  />
                </label>
              </div>
                <div className="space-y-2">
                <Button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Prendre un Rendez-vous"
                  )}
                </Button>
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

