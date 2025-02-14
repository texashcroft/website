"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FileText, Check, Users, Database, Pen, Mail, CheckCircle, Snowflake, Flame } from "lucide-react"
import { Plus_Jakarta_Sans } from "next/font/google"
import { useState, useEffect, useRef, useCallback } from "react"
import type React from "react"
import dynamic from "next/dynamic"
import { SendoraBadge } from "./sendora-badge"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

// Base Panel Container
const BasePanel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.25, ease: "easeInOut" }}
    className="relative w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-[20px] rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 md:p-12 border border-white/20 shadow-lg overflow-hidden"
    style={{
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    }}
  >
    {children}
  </motion.div>
)

// Loading dots animation
const LoadingDots = () => (
  <motion.span className="inline-flex text-white text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        className="mx-0.5"
      >
        .
      </motion.span>
    ))}
  </motion.span>
)

const Dashboard = dynamic(() => import("@/components/dashboard"), { ssr: false })

export default function AnimationSequence() {
  const [step, setStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [showButtons, setShowButtons] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [clickOutreach, setClickOutreach] = useState(false)
  const [showFinding, setShowFinding] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showResearching, setShowResearching] = useState(false)
  const [showDataPoints, setShowDataPoints] = useState(false)
  const [showCrafting, setShowCrafting] = useState(false)
  const [showVariations, setShowVariations] = useState(false)
  const [showWritingEmails, setShowWritingEmails] = useState(false)
  const [showEmailVariations, setShowEmailVariations] = useState(false)
  const [showPreparing, setShowPreparing] = useState(false)
  const [showDone, setShowDone] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom, showFinding])

  const resetAnimation = useCallback(() => {
    setStep(0)
    setTypedText("")
    setShowButtons(false)
    setIsUploaded(false)
    setClickOutreach(false)
    setShowFinding(false)
    setShowResults(false)
    setShowResearching(false)
    setShowDataPoints(false)
    setShowCrafting(false)
    setShowVariations(false)
    setShowWritingEmails(false)
    setShowEmailVariations(false)
    setShowPreparing(false)
    setShowDone(false)
    setShowDashboard(false)
  }, [])

  const startAnimation = useCallback(() => {
    resetAnimation()
    setTimeout(() => {
      setStep(1)
    }, 2000)
  }, [resetAnimation])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  const handleTypingComplete = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    setShowButtons(true)
    scrollToBottom()

    await new Promise((resolve) => setTimeout(resolve, 300))
    setIsUploaded(true)
    scrollToBottom()

    await new Promise((resolve) => setTimeout(resolve, 800))
    setClickOutreach(true)
    scrollToBottom()

    await new Promise((resolve) => setTimeout(resolve, 300))
    setShowFinding(true)
    scrollToBottom()
  }, [scrollToBottom])

  useEffect(() => {
    if (showFinding) {
      const timer = setTimeout(() => {
        setShowResults(true)
        scrollToBottom()

        setTimeout(() => {
          setShowResearching(true)
          scrollToBottom()

          setTimeout(() => {
            setShowDataPoints(true)
            scrollToBottom()

            setTimeout(() => {
              setShowCrafting(true)
              scrollToBottom()

              setTimeout(() => {
                setShowVariations(true)
                scrollToBottom()

                setTimeout(() => {
                  setShowWritingEmails(true)
                  scrollToBottom()

                  setTimeout(() => {
                    setShowEmailVariations(true)
                    scrollToBottom()

                    setTimeout(() => {
                      setShowPreparing(true)
                      scrollToBottom()

                      setTimeout(() => {
                        setShowDone(true)
                        scrollToBottom()

                        setTimeout(() => {
                          setShowDashboard(true)
                          scrollToBottom()
                        }, 300)
                      }, 1000)
                    }, 300)
                  }, 1000)
                }, 300)
              }, 1000)
            }, 300)
          }, 1000)
        }, 300)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [showFinding, scrollToBottom])

  const handleLoopComplete = useCallback(() => {
    startAnimation()
  }, [startAnimation])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.25, ease: "easeInOut" },
  }

  return (
    <div className="w-[92%] mx-auto h-[680px] overflow-hidden relative">
      {" "}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="initial-options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What Do You Choose Today?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                {[
                  {
                    icon: Snowflake,
                    title: "Reach Out to Cold Leads",
                    description: "Leads that you have never contacted before",
                  },
                  {
                    icon: Flame,
                    title: "Reach Out to Warm Leads",
                    description: "Run a Reactivation Campaign or reach out to leads Instantly from your Ads/Funnels",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, ease: "easeInOut", delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-[20px] rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer border border-white/20"
                    onClick={() => setStep(1)}
                  >
                    <item.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 1 && !showDashboard && (
          <motion.div
            key="typing-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <div ref={containerRef} className="w-full h-full p-4 overflow-y-auto relative custom-scrollbar">
              <div className="space-y-6">
                <div className="text-lg sm:text-xl md:text-2xl text-white">
                  <div className="bg-white/5 backdrop-blur-[8px] rounded-xl p-6 border border-white/10 mt-8 flex items-center justify-center min-h-[160px]">
                    <div className="text-center">
                      {typedText ? (
                        <div>{typedText}</div>
                      ) : (
                        <div>
                          <p>
                            I want to reach out to Realtors in New York to help them get more leads. Here are all the
                            details about my offer
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {showButtons && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-4"
                    >
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full text-sm w-full sm:w-auto border border-white/20"
                        >
                          <FileText className="w-4 h-4 flex-shrink-0" />
                          <span>Knowledge Base</span>
                        </motion.button>

                        {isUploaded && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-1 text-white text-sm whitespace-nowrap"
                          >
                            Uploaded
                            <Check className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>

                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                          scale: clickOutreach ? 0.95 : 1,
                          opacity: 1,
                        }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full text-sm w-full sm:w-auto text-center border border-white/20"
                      >
                        Start Outreaching
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
                {showFinding && (
                  <motion.div {...fadeInUp} className="mt-4">
                    <div className="bg-white/10 backdrop-blur-[20px] rounded-lg p-4 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-white text-center">
                        <span>Finding Realtors in New York</span>
                        {!showResults && <LoadingDots />}
                      </div>

                      <AnimatePresence>
                        {showResults && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex justify-center mt-4"
                          >
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full w-full sm:w-auto border border-white/20"
                            >
                              <Users className="w-5 h-5 flex-shrink-0" />
                              <span>3800 Realtors Found</span>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
                {showResearching && (
                  <motion.div {...fadeInUp} className="mt-4">
                    <div className="bg-white/10 backdrop-blur-[20px] rounded-lg p-4 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-white text-center">
                        <span>Researching Each Lead</span>
                        {!showDataPoints && <LoadingDots />}
                      </div>

                      <AnimatePresence>
                        {showDataPoints && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex justify-center mt-4"
                          >
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full w-full sm:w-auto border border-white/20"
                            >
                              <Database className="w-5 h-5 flex-shrink-0" />
                              <span>45 Data Points Found</span>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
                {showCrafting && (
                  <motion.div {...fadeInUp} className="mt-4">
                    <div className="bg-white/10 backdrop-blur-[20px] rounded-lg p-4 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-white text-center">
                        <span>Crafting Cold Calling Scripts</span>
                        {!showVariations && <LoadingDots />}
                      </div>

                      <AnimatePresence>
                        {showVariations && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex justify-center mt-4"
                          >
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full w-full sm:w-auto border border-white/20"
                            >
                              <Pen className="w-5 h-5 flex-shrink-0" />
                              <span>3 Variations Written</span>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
                {showWritingEmails && (
                  <motion.div {...fadeInUp} className="mt-4">
                    <div className="bg-white/10 backdrop-blur-[20px] rounded-lg p-4 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-white text-center">
                        <span>Writing Cold Emails</span>
                        {!showEmailVariations && <LoadingDots />}
                      </div>

                      <AnimatePresence>
                        {showEmailVariations && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex justify-center mt-4"
                          >
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full w-full sm:w-auto border border-white/20"
                            >
                              <Mail className="w-5 h-5 flex-shrink-0" />
                              <span>2 Variations Written</span>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
                {showPreparing && (
                  <motion.div {...fadeInUp} className="mt-4">
                    <div className="bg-white/10 backdrop-blur-[20px] rounded-lg p-4 border border-white/20 shadow-lg">
                      <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-white text-center">
                        <span>Preparing For Launch</span>
                        {!showDone && <LoadingDots />}
                      </div>

                      <AnimatePresence>
                        {showDone && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex justify-center mt-4"
                          >
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-4 py-2 rounded-full w-full sm:w-auto border border-white/20"
                            >
                              <CheckCircle className="w-5 h-5 flex-shrink-0" />
                              <span>Done</span>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
                {showDone && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="mt-8"
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      <motion.div
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-[20px] text-white px-6 py-3 rounded-full text-lg font-semibold border border-white/20"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CheckCircle className="w-6 h-6" />
                        <span>Done</span>
                      </motion.div>
                    </motion.div>

                    <div className="w-[90%] mx-auto mt-8 h-32 border-2 border-gray-400 rounded-lg"></div>
                  </motion.div>
                )}
              </div>{" "}
            </div>
          </motion.div>
        )}

        {showDashboard && (
          <div className="w-full h-full overflow-hidden">
            <Dashboard onLoopComplete={handleLoopComplete} />
          </div>
        )}
      </AnimatePresence>
      <SendoraBadge />
    </div>
  )
}

