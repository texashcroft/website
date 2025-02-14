"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SendoraBadge } from "./sendora-badge"
import Image from "next/image"

const faqCategories = [
  {
    category: "Product & Features",
    questions: [
      {
        question: "How does your AI handle multi-channel outreach?",
        answer:
          "Our AI runs email, SMS, and voice campaigns simultaneously. It personalizes messages using your knowledge base, schedules follow-ups, and books appointments – all from one dashboard.",
      },
      {
        question: "Can I customize the AI's voice and scripts?",
        answer:
          "Yes! Choose from Nick, Darcy, or Emma for calls, or tweak scripts in the Craft Center. Train the AI with your sales playbook for hyper-relevant outreach.",
      },
      {
        question: "Is this a replacement for human SDRs?",
        answer:
          "It's a force multiplier. The AI handles repetitive tasks (cold outreach, follow-ups), while your team focuses on closing deals.",
      },
    ],
  },
  {
    category: "Setup & Integration",
    questions: [
      {
        question: "How long does it take to launch a campaign?",
        answer: "Just 15 minutes. Connect your email/SMS, upload leads, and let the AI do the rest. No coding needed!",
      },
      {
        question: "Does it integrate with my CRM?",
        answer:
          "Absolutely. Sync with HubSpot, Salesforce, or Pipedrive to automate lead handoffs and track pipeline performance.",
      },
      {
        question: "Can I white-label the platform for my clients?",
        answer: "Yes! Add your logo, domain, and branding – your clients will never know it's powered by us.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "Is my lead data secure?",
        answer: "We use AES-256 encryption and GDPR/CCPA compliance. Your data stays isolated in Supabase workspaces.",
      },
      {
        question: "Do you store credit card information?",
        answer: "Never. Payments are processed via Stripe, and we don't store sensitive financial data.",
      },
    ],
  },
  {
    category: "Pricing & Trials",
    questions: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes! Start a 14-day free trial with no credit card required. Test all features, including AI calls and white-labeling.",
      },
      {
        question: "What if I exceed my lead quota?",
        answer:
          "We'll notify you and offer flexible upgrades. Need 10,000+ leads/month? Ask about our Enterprise plan.",
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "Save 20% with annual plans. Contact sales for agency/volume pricing.",
      },
    ],
  },
  {
    category: "Results & ROI",
    questions: [
      {
        question: "What results can I expect?",
        answer: "Clients see 3x more booked meetings and 50% faster lead response times on average.",
      },
      {
        question: "How does the AI qualify leads?",
        answer:
          "It scores leads based on ICP criteria, website engagement, and response patterns, prioritizing high-intent prospects.",
      },
    ],
  },
]

export default function FAQSection() {
  return (
    <section className="relative pt-0 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          {/* Background Image with Multiple Blur Layers */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/376-SNe3lmkF3WsTY7aob6GO5mJNbxUDjz.png"
              alt="Background Pattern"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Multiple blur layers for depth */}
            <div className="absolute inset-0 backdrop-blur-[4px]" />
            <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent" />
            <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-black/10" />
          </div>

          {/* Content */}
          <div
            id="faq-section"
            className="relative z-10 p-4 sm:p-8 md:p-12 backdrop-blur-md bg-black/5 transition-opacity duration-500 ease-in-out opacity-0"
            style={{ opacity: 1 }}
          >
            {/* Header */}
            <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                Everything you need to know about our AI-powered sales automation platform
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                />
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="backdrop-blur-xl bg-white/10 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg overflow-hidden transition-all duration-300 ease-in-out opacity-0 transform translate-y-4"
                  style={{ opacity: 1, transform: "translateY(0)" }}
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`category-${categoryIndex}`} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-white/90 text-left px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl font-semibold hover:no-underline">
                        {category.category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div>
                          <Accordion type="single" collapsible className="w-full">
                            {category.questions.map((faq, faqIndex) => (
                              <div
                                key={faqIndex}
                                className="bg-white/10 backdrop-blur-xl rounded-lg p-2 transition-all duration-300 ease-in-out opacity-0 transform translate-x-4"
                                style={{ opacity: 1, transform: "translateX(0)" }}
                              >
                                <AccordionItem value={`faq-${categoryIndex}-${faqIndex}`} className="border-white/10">
                                  <AccordionTrigger className="text-white hover:text-white/90 text-left px-4 sm:px-6 py-2 sm:py-3 hover:no-underline">
                                    {faq.question}
                                  </AccordionTrigger>
                                  <AccordionContent className="text-white/80 px-4 sm:px-6 py-2 sm:py-3">
                                    {faq.answer}
                                  </AccordionContent>
                                </AccordionItem>
                              </div>
                            ))}
                          </Accordion>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <div className="flex justify-center mt-8 sm:mt-12">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl text-white transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                  Have more questions? Contact us
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Sendora Badge */}
          <SendoraBadge />
        </div>
      </div>
    </section>
  )
}

