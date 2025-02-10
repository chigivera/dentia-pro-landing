// src/components/navbar.tsx

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Fonctionnalités", href: "#features" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Tarifs", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.replace("#", "")),
    80,
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-colors",
        isScrolled ? "border-border" : "border-transparent",
      )}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold">
          Dentia Pro
        </a>

        {/* Desktop Navigation */}
        <ul className="items-center hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  activeSection === item.href.replace("#", "") ? "text-primary font-medium" : "text-muted-foreground",
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <Button>Essai gratuit</Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-background md:hidden"
          >
            <ul className="container py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm transition-colors hover:text-primary",
                      activeSection === item.href.replace("#", "")
                        ? "text-primary font-medium"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <Button className="w-full">Essai gratuit</Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

