"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function FormSection() {
  const [emailError, setEmailError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailInput = e.currentTarget.email as HTMLInputElement
    if (emailInput.validity.patternMismatch) {
      setEmailError("Please enter a valid company email address")
    } else {
      setEmailError("")
      // Process the form submission
      console.log("Form submitted")
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 3000)
    }
  }

  return (
    <section id="form-section" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] backdrop-blur-xl border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 p-8 sm:p-12 md:p-16">
            {/* Left side - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[750px] w-full overflow-hidden rounded-3xl bg-white/5"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610462%20(1)-ozds35jdk6XKQUU0GlVgTl8FvwAuXG.png"
                alt="Sendora Dashboard Analytics"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl font-semibold text-white"
                >
                  Ready to Scale?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-300"
                >
                  Book a demo to see how Sendora can transform your sales process
                </motion.p>
              </div>

              <form className="space-y-6 custom-scrollbar" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-lg text-gray-300 mb-2">
                      Name
                    </label>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#7c40ff]/60 focus:ring-[#7c40ff]/60 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg text-gray-300 mb-2">
                      Email
                    </label>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#7c40ff]/60 focus:ring-[#7c40ff]/60 transition-all duration-300"
                        placeholder="john@company.com"
                        pattern="^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!.*\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid company email address"
                      />
                    </motion.div>
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-lg text-gray-300 mb-2">
                      Website
                    </label>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        id="website"
                        type="url"
                        required
                        className="w-full bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#7c40ff]/60 focus:ring-[#7c40ff]/60 transition-all duration-300"
                        placeholder="https://example.com"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-lg text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="country"
                        className="w-1/3 bg-white/10 border-gray-700 text-white rounded-md focus:border-[#7c40ff]/60 focus:ring-[#7c40ff]/60 transition-all duration-300"
                      >
                        <option value="+1">US (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+91">IN (+91)</option>
                        <option value="+61">AU (+61)</option>
                        <option value="+33">FR (+33)</option>
                        <option value="+49">DE (+49)</option>
                        <option value="+81">JP (+81)</option>
                        <option value="+86">CN (+86)</option>
                        <option value="+7">RU (+7)</option>
                        <option value="+55">BR (+55)</option>
                        <option value="+52">MX (+52)</option>
                        <option value="+34">ES (+34)</option>
                        <option value="+39">IT (+39)</option>
                        <option value="+31">NL (+31)</option>
                        <option value="+46">SE (+46)</option>
                      </select>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="w-2/3 bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#7c40ff]/60 focus:ring-[#7c40ff]/60 transition-all duration-300"
                          placeholder="(555) 123-4567"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#7c40ff] text-white hover:bg-[#7c40ff]/80 text-lg font-medium transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </Button>
              </form>
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full"
                  >
                    Thank you! We'll be in touch soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

