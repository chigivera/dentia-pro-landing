// src/hooks/use-scroll-spy.ts

"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: `${-offset}px 0px 0px 0px`,
        threshold: 0.2,
      },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}

