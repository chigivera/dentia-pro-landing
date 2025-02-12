"use client"

import { motion } from "framer-motion"

export function FloatingPaths() {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    d: `M${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 200} ${Math.random() * 200}, ${Math.random() * 300} ${Math.random() * 300}`,
    color: `rgba(59, 130, 246, ${0.05 + i * 0.02})`, // Blue color with varying opacity
    width: 0.5 + i * 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 10 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </svg>
    </div>
  )
}

