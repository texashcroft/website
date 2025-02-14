"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const features = [
  {
    title: "Hyper Personalized Script",
    description:
      "AI makes hyper-personalized, high‑converting sales script tailored to- individual prospects, each platform with your brand tone.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610434%20(3)-p3TSiQW8sPIVZCKRsIveIPFTRlGq8c.png",
    align: "right",
  },
  {
    title: "Appointments On Autopilot",
    description:
      "Let Sendora take off 80% of the Workload from your SDRs, while doing it more efficiently so they can focus on more high value task - Closing Deals.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610434%20(1)-VK2PQrYWYXzpZ0gBP73zKUOCbTCUE8.png",
    align: "left",
  },
  {
    title: "Sendora qualify your leads",
    description:
      "We identify high-intent buyers by analyzing engagement, responses, and behavior. Our AI filters prospects, nurtures interest through personalized outreach, and qualifies them before booking—ensuring your pipeline is filled with ready-to-buy leads.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201000004501-W79lJwsT5FE8wiZOUv0qYNTVCru1eb.png",
    align: "right",
  },
  {
    title: "Messaging Back & Forth Until Booked Appointments",
    description:
      "We handle back-and-forth messaging across calls, emails, and SMS—answering objections, nurturing interest, and guiding prospects seamlessly until they book an appointment.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610434%20(2)-cPlOlqeamVsD2G7z6EWAm90she8Ltc.png",
    align: "left",
  },
]

export default function AIEmployeesSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.clientHeight
      const progress = (scrollPosition / (fullHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />
      <div className="absolute inset-0 opacity-5 bg-gradient-radial from-purple-500 to-transparent animate-gradient-shift" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-shift" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading mb-4">
            <span className="text-gray-900">AI Employees for</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Everything You Need
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                feature.align === "right" ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16 hover:bg-gray-50 rounded-3xl transition-colors duration-300 p-6 sm:p-8`}
            >
              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-gray-900 text-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-base sm:text-lg text-gray-600 text-shadow-sm">{feature.description}</p>
              </div>

              {/* Image */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-full md:w-1/2">
                <motion.div
                  className="relative aspect-[16/9] w-full"
                  initial={{ y: 0 }}
                  whileInView={{ y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

