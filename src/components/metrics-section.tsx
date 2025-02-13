// src/components/metrics-section.tsx

"use client"

import { Card } from "@/components/ui/card"
import { Users, UserPlus, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

export default function MetricsSection() {
  return (
    <div className="relative py-16 overflow-hidden bg-blue-600">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("/img/bread-bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon={<Users className="w-8 h-8" />} value="3,468" label="Patients Actifs" />
          <MetricCard icon={<UserPlus className="w-8 h-8" />} value="557" label="Nouveaux Patients par Mois" />
          <MetricCard icon={<Calendar className="w-8 h-8" />} value="4,379" label="Rendez-vous Programmés" />
          <MetricCard icon={<Clock className="w-8 h-8" />} value="32" label="Heures Économisées par Semaine" />
        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
  icon: React.ReactNode
  value: string
  label: string
}

function MetricCard({ icon, value, label }: MetricCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full p-6 text-center text-white border-none bg-blue-700/50 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-white/10">{icon}</div>
          <div>
            <div className="mb-2 text-4xl font-bold">{value}</div>
            <div className="text-blue-100">{label}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

