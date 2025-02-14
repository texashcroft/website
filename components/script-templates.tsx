"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Brain } from "lucide-react"
import { useState, useEffect } from "react"

const initialOptions = [
  "Knowledge Base",
  "Killer Offer Doc",
  "Winning Script Templates",
  "Prospect Research",
  "Best Email Practices",
]

const coldCallScript = [
  "Hey Am I reaching out to John?",
  "Wait for Response",
  "Awesome John, I was recently checking out your google review by Mark, great job with the Porsche man",
  "Wait for Response",
  "Actually the reason for the call was that I saw you have 101 google reviews as of now, and your competitor Albert Shine is crushing with 567 reviews.",
  "Do you have sec, to know more about how we can get you more reviews....",
]

const emailTemplate = [
  "Morning Dr. Smith",
  "Saw your practice while exploring LA clinics and had to reach out!",
  "Just like your Telehealth services save patients time, our AI saves you 12+ hours/week by streamlining admin tasks—so you can focus on care.",
  "We helped Harmony Family Health (8 miles from you) boost patient adherence by 35%—happy to share how.",
  "Would Tuesday morning or Thursday afternoon work for a quick chat?",
]

export default function ScriptTemplates() {
  const [showInitial, setShowInitial] = useState(true)
  const [showTemplates, setShowTemplates] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitial(false)
      setTimeout(() => setShowTemplates(true), 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-[600px] lg:min-h-[700px]">
      <AnimatePresence>
        {showInitial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          >
            {/* Left side - Options */}
            <div className="space-y-6 w-full max-w-2xl">
              {initialOptions.map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 text-white cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-xl lg:text-2xl font-medium">{option}</span>
                </motion.div>
              ))}
            </div>

            {/* Right side - Brain Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative"
            >
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl transform scale-110" />

              {/* Brain container */}
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <Brain className="w-24 h-24 lg:w-32 lg:h-32 text-white" />

                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
                <div
                  className="absolute inset-[-10px] rounded-full border border-white/10 animate-pulse"
                  style={{ animationDelay: "500ms" }}
                />
                <div
                  className="absolute inset-[-20px] rounded-full border border-white/5 animate-pulse"
                  style={{ animationDelay: "1000ms" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTemplates && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Cold Call Script */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 lg:p-8"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6 lg:mb-8">Cold Call Script Template</h3>
              <div className="space-y-4 text-lg lg:text-xl">
                <div>
                  {coldCallScript.map((line, index) => (
                    <div
                      key={index}
                      className={line.includes("Wait for Response") ? "text-white/60 italic mb-6" : "text-white mb-6"}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Email Template */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 lg:p-8"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6 lg:mb-8">Email Template</h3>
              <div className="space-y-4 text-lg lg:text-xl">
                <div>
                  {emailTemplate.map((line, index) => (
                    <div key={index} className="text-white mb-6">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

