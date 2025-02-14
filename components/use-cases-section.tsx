"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { CTAButton } from "@/components/ui/cta-button"

const industries = [
  "SAAS",
  "Agencies",
  "Cybersecurity",
  "Online Coaching",
  "Automobile Dealers",
  "Wholesalers",
  "Consultants",
]

type UseCaseContent = {
  [key: string]: {
    cases: {
      title: string
      description: string
    }[]
  }
}

const useCaseContent: UseCaseContent = {
  SAAS: {
    cases: [
      {
        title: "Immediate Lead Qualification",
        description:
          "As soon as a prospect signs up for a free trial or demo on your SaaS website or through ads, Sendora triggers an AI call to qualify the lead and schedule a demo instantly.",
      },
      {
        title: "Reactivating Dormant Trials",
        description:
          "Automatically calls users who signed up for a trial but haven't engaged, offering personalized assistance and booking a call with sales.",
      },
      {
        title: "Multi-Channel Outbound Campaigns",
        description:
          "Combines email, SMS, and AI calls for enterprise prospects, ensuring follow-ups until an appointment is scheduled.",
      },
      {
        title: "Retargeting Paid Ad Leads",
        description:
          "Integrates with Meta/Google Ads to immediately call leads who clicked on ads, providing tailored information and booking a meeting.",
      },
    ],
  },
  Agencies: {
    cases: [
      {
        title: "Client Lead Generation",
        description:
          "Automatically qualify and schedule meetings with potential clients who express interest in your agency's services through your website or ads.",
      },
      {
        title: "Project Discovery Automation",
        description:
          "AI-powered calls to understand client requirements and project scope before the first meeting, ensuring more productive consultations.",
      },
      {
        title: "Client Onboarding Assistance",
        description:
          "Streamline the onboarding process with automated follow-ups and requirement gathering calls to new clients.",
      },
      {
        title: "Portfolio Showcase Calls",
        description:
          "Proactively reach out to prospects with personalized portfolio presentations and case studies relevant to their industry.",
      },
    ],
  },
  Cybersecurity: {
    cases: [
      {
        title: "Security Assessment Scheduling",
        description:
          "Automatically schedule security assessments and penetration testing consultations with qualified leads who show interest in your cybersecurity services.",
      },
      {
        title: "Incident Response Coordination",
        description:
          "Streamline emergency response communication by automatically coordinating calls between security teams and affected clients during incidents.",
      },
      {
        title: "Compliance Audit Planning",
        description:
          "Automate the scheduling of compliance audits and security reviews with clients, ensuring regular security maintenance and updates.",
      },
      {
        title: "Security Training Follow-ups",
        description:
          "Conduct automated follow-up calls after security awareness training sessions to ensure implementation of security practices.",
      },
    ],
  },
  "Online Coaching": {
    cases: [
      {
        title: "Discovery Call Automation",
        description:
          "Automatically schedule and conduct initial discovery calls with potential clients to understand their goals and explain your coaching methodology.",
      },
      {
        title: "Program Enrollment Support",
        description:
          "Follow up with leads who showed interest in your coaching programs, providing personalized information and facilitating enrollment decisions.",
      },
      {
        title: "Session Reminder & Prep",
        description:
          "Send automated voice reminders for upcoming coaching sessions and gather pre-session information to maximize session effectiveness.",
      },
      {
        title: "Progress Check-ins",
        description:
          "Conduct automated check-in calls between sessions to track client progress, provide encouragement, and address any challenges early.",
      },
    ],
  },
  "Automobile Dealers": {
    cases: [
      {
        title: "Lead Response Automation",
        description:
          "Instantly respond to online vehicle inquiries with AI-powered calls to qualify buyers, verify preferences, and schedule test drives with available sales representatives.",
      },
      {
        title: "Service Appointment Scheduling",
        description:
          "Automate service department scheduling by calling customers due for maintenance, confirming appointments, and sending reminders to reduce no-shows.",
      },
      {
        title: "Trade-In Valuations",
        description:
          "Proactively reach out to previous customers approaching end of lease or loan terms to discuss trade-in opportunities and schedule vehicle appraisals.",
      },
      {
        title: "Post-Purchase Follow-up",
        description:
          "Conduct automated satisfaction surveys and maintenance reminders through personalized calls to strengthen customer relationships and encourage referrals.",
      },
    ],
  },
  Wholesalers: {
    cases: [
      {
        title: "Bulk Order Inquiries",
        description:
          "Qualifies leads from ad campaigns or inbound forms and books meetings for bulk order discussions.",
      },
      {
        title: "Trade Fair Lead Management",
        description: "Calls leads collected from trade fairs and schedules business meetings.",
      },
      {
        title: "Distributor Onboarding",
        description: "Automates outreach to potential distributors, qualifying them and scheduling onboarding calls.",
      },
      {
        title: "Retargeting Dormant Retailers",
        description: "Reaches out to past retail partners, requalifies them, and books reactivation meetings.",
      },
    ],
  },
  Consultants: {
    cases: [
      {
        title: "Immediate Discovery Calls",
        description: "Calls leads from ads or website inquiries, booking discovery calls instantly.",
      },
      {
        title: "Proposal Follow-Ups",
        description: "Follows up on sent proposals, qualifying continued interest, and booking strategy sessions.",
      },
      {
        title: "Upselling Existing Clients",
        description: "Calls current clients to propose additional services and books upselling meetings.",
      },
      {
        title: "Event Lead Management",
        description: "Calls attendees of consulting workshops and books one-on-one consultations.",
      },
    ],
  },
  default: {
    cases: [
      {
        title: "Immediate Lead Qualification",
        description:
          "As soon as a prospect signs up for a free trial or demo on your SaaS website or through ads, Closi.ai triggers an AI call to qualify the lead and schedule a demo instantly.",
      },
      {
        title: "Reactivating Dormant Trials",
        description:
          "Automatically calls users who signed up for a trial but haven't engaged, offering personalized assistance and booking a call with sales.",
      },
      {
        title: "Multi-Channel Outbound Campaigns",
        description:
          "Combines email, SMS, and AI calls for enterprise prospects, ensuring follow-ups until an appointment is scheduled.",
      },
      {
        title: "Retargeting Paid Ad Leads",
        description:
          "Integrates with Meta/Google Ads to immediately call leads who clicked on ads, providing tailored information and booking a meeting.",
      },
    ],
  },
}

export default function UseCasesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState("Agencies")

  const currentUseCases = useCaseContent[selectedIndustry]?.cases || useCaseContent.default.cases

  return (
    <section id="use-cases" className="relative pt-0 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#7C40FF]">
          {/* Background Image with Multiple Blur Layers */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-xqPrBWqvPUr84RA2o2qMzEn70LJGaX.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {/* Multiple blur layers for depth */}
            <div className="absolute inset-0 bg-[#7C40FF]/30 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C40FF]/30 to-[#4C1D95]/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-sm">
            <div className="space-y-8 sm:space-y-12">
              {/* Header */}
              <div className="text-center space-y-3 sm:space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white"
                >
                  Solutions for Every Niche Imaginable
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-base sm:text-lg lg:text-xl text-white/90"
                >
                  If you are calling your customers in any way, we are built for you
                </motion.p>
              </div>

              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3"
              >
                {industries.map((industry) => (
                  <motion.button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                      selectedIndustry === industry
                        ? "bg-white/20 text-white backdrop-blur-xl"
                        : "bg-white/10 text-white/90 backdrop-blur-md hover:bg-white/15"
                    }`}
                  >
                    {industry}
                  </motion.button>
                ))}
              </motion.div>

              {/* Use Cases Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
                >
                  {currentUseCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (index + 3) }}
                      className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">
                        {useCase.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">{useCase.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center mt-8 sm:mt-12">
                <CTAButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

