// src/components/auto-scroll-slider.tsx

"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface AutoScrollSliderProps {
  items: string[] // Array of slides (can be images, divs, etc.)
}

const AutoScrollSlider: React.FC<AutoScrollSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [items.length])

  // Update slider position based on currentIndex
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {/* Slider container */}
      <div ref={sliderRef} className="flex h-full transition-transform duration-500 ease-in-out">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-center min-w-full">
           <div
          className="relative w-full h-full"
          style={{
            backgroundImage: `url(${item})`,
            backgroundPosition: "80% center", // Positions the doctor more towards the right
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutoScrollSlider

