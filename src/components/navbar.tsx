// src/components/navbar.tsx

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Notre Solution", href: "#notre-solution" },
  { name: "Fonctionnalités", href: "#features" },
  { name: "Contact", href: "#contact" },
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
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-white/80 dark:bg-blue-900/80 backdrop-blur-md transition-colors",
        isScrolled ? "border-blue-200 dark:border-blue-700" : "border-transparent",
      )}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center text-xl font-bold text-blue-900 dark:text-blue-100">
        <Avatar className="mr-3">
  <AvatarImage src="/logo.png" />
  <AvatarFallback>DP</AvatarFallback>
</Avatar>
        <span className="text-blue-700">
        Dentia
        </span>
          Pro
        </a>

        {/* Desktop Navigation */}
        <ul className="items-center hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-600 dark:text-blue-300 font-medium"
                    : "text-blue-700 dark:text-blue-200",
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <Button onClick={() => scrollToSection("#contact")} className="text-white bg-blue-600 hover:bg-blue-700">
            Profiter dès maintenant

            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-blue-900 dark:text-blue-100" />
          ) : (
            <Menu className="w-6 h-6 text-blue-900 dark:text-blue-100" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-t border-blue-200 dark:border-blue-700 dark:bg-blue-900 md:hidden"
          >
            <ul className="container py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-300",
                      activeSection === item.href.replace("#", "")
                        ? "text-blue-600 dark:text-blue-300 font-medium"
                        : "text-blue-700 dark:text-blue-200",
                    )}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700"
                >
                    Profiter dès maintenant
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

