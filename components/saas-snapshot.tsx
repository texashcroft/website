"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Hyper Personalized Script",
    description:
      "AI makes hyper-personalized, high-converting sales script tailored to individual prospects, each platform with your brand tone.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2Y7sgcm3KhZ5w7yoff34ZY1Sem5Ho.png",
    align: "right",
    icon: "10X",
    iconText: "Better Scripts",
  },
  {
    title: "Appointments On Autopilot",
    description:
      "Let Sendora take off 80% of the workload from your SDRs, while doing it more efficiently so they can focus on more high value task - Closing Deals.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2Y7sgcm3KhZ5w7yoff34ZY1Sem5Ho.png",
    align: "left",
    icon: "0s",
    iconText: "Lead Response Time",
  },
  {
    title: "Sendora qualify your leads",
    description:
      "We identify high-intent buyers by analyzing engagement, responses, and behavior. Our AI filters prospects, nurtures interest through personalized outreach, and qualifies them before booking—ensuring your pipeline is filled with ready-to-buy leads.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2Y7sgcm3KhZ5w7yoff34ZY1Sem5Ho.png",
    align: "right",
    showChat: true,
  },
  {
    title: "Messaging Back & Forth Until Booked Appointments",
    description:
      "We handle back-and-forth messaging across calls, emails, and SMS—answering objections, nurturing interest, and guiding prospects seamlessly until they book an appointment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2Y7sgcm3KhZ5w7yoff34ZY1Sem5Ho.png",
    align: "left",
    showBrain: true,
  },
]

export default function SaasSnapshot() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center ${
                feature.align === "right" ? "flex-row-reverse" : "flex-row"
              } gap-12 relative`}
            >
              {/* Content */}
              <div className="w-1/2 space-y-4">
                <h3 className="text-4xl font-semibold font-heading">{feature.title}</h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>

              {/* Image/Card */}
              <div className="w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    {feature.icon && (
                      <div className="text-center mb-4">
                        <div className="text-5xl font-bold text-white mb-2">{feature.icon}</div>
                        <div className="text-lg text-white/80">{feature.iconText}</div>
                      </div>
                    )}
                    {feature.showChat && (
                      <div className="space-y-3">
                        {[1, 2, 3].map((chat) => (
                          <div key={chat} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20" />
                            <div className="flex-1 h-4 bg-white/20 rounded" />
                          </div>
                        ))}
                      </div>
                    )}
                    {feature.showBrain && (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-4 bg-white/20 rounded" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

