"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

interface ScatteredDot {
  id: number
  x: number
  y: number
  size: number
  animationDelay: number
  scale: number
}

export default function ScatteredBackground() {
  const [dots, setDots] = useState<ScatteredDot[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const generateDots = () => {
      const newDots: ScatteredDot[] = []
      const numberOfDots = 200

      for (let i = 0; i < numberOfDots; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (12 - 8) + 8,
          animationDelay: Math.random() * 4,
          scale: Math.random() * (1.2 - 0.8) + 0.8,
        })
      }

      setDots(newDots)
    }

    generateDots()
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      setDots((prevDots) =>
        prevDots.map((dot) => {
          const dotX = (dot.x / 100) * rect.width
          const dotY = (dot.y / 100) * rect.height
          const dx = mouseX - dotX
          const dy = mouseY - dotY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100 // Maximum distance for repulsion effect

          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx)
            const pushDistance = ((maxDistance - distance) / maxDistance) * 20 // Maximum push of 20px
            const newX = dot.x - ((Math.cos(angle) * pushDistance) / rect.width) * 100
            const newY = dot.y - ((Math.sin(angle) * pushDistance) / rect.height) * 100

            return {
              ...dot,
              x: Math.max(0, Math.min(100, newX)),
              y: Math.max(0, Math.min(100, newY)),
            }
          }

          return dot
        }),
      )
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden h-screen">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute transition-all duration-300 ease-out"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: `scale(${dot.scale})`,
            animationDelay: `${dot.animationDelay}s`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20135-yngDNMEHs5E4RWOu3LCCxkr2ARbOGj.svg"
            alt=""
            width={dot.size}
            height={dot.size}
            className="select-none opacity-60"
          />
        </div>
      ))}
    </div>
  )
}

