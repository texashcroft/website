"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Search,
  Globe,
  MapPin,
  Building2,
  Tags,
  HomeIcon,
  Users,
  FileText,
  MessageSquare,
  BarChart2,
} from "lucide-react"
import Image from "next/image"
import { SendoraBadge } from "./sendora-badge"
import ScriptTemplates from "./script-templates"
import ChatInterface from "./chat-interface"
import TrackingTable from "./tracking-table"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const previewLeads = [
  {
    name: "Marc Jones",
    title: "CTO | TechNova Solutions",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-GxwfvgapfJ9uCnmQDu2K7IUxwUTZBP.png",
  },
  {
    name: "Sarah Smith",
    title: "CEO | BuildRight Constructions",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-KvirXww0cp8vYmqhl5pTrqpAvS874t.png",
  },
  {
    name: "Robert Brown",
    title: "CEO | Medix Pharma",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-nUusa551o6hTmMmWglR2LhJ5NUBOyA.png",
  },
  {
    name: "Emma Johnson",
    title: "VP of Sales | Green Energy Corp",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-nZRqHryf4Ul6q3iHkt7nEzu8BS2GAF.png",
  },
  {
    name: "David Lee",
    title: "COO | FinTechX",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-GxwfvgapfJ9uCnmQDu2K7IUxwUTZBP.png",
  },
]

const researchLeads = [
  {
    name: "Marc Jones",
    company: "TechNova Solutions",
    title: "CTO",
    progress: 70,
    dataPoints: 34,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-GxwfvgapfJ9uCnmQDu2K7IUxwUTZBP.png",
  },
  {
    name: "Sarah Smith",
    company: "BuildRight Constructions",
    title: "CTO",
    progress: 30,
    dataPoints: 14,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-KvirXww0cp8vYmqhl5pTrqpAvS874t.png",
  },
  {
    name: "Robert Brown",
    company: "Medix Pharma",
    title: "CEO",
    progress: 85,
    dataPoints: 45,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-nUusa551o6hTmMmWglR2LhJ5NUBOyA.png",
  },
  {
    name: "Emma Johnson",
    company: "Green Energy Corp",
    title: "VP of Sales",
    progress: 10,
    dataPoints: 9,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-nZRqHryf4Ul6q3iHkt7nEzu8BS2GAF.png",
  },
  {
    name: "David Lee",
    company: "FinTechX",
    title: "COO",
    progress: 25,
    dataPoints: 18,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-GxwfvgapfJ9uCnmQDu2K7IUxwUTZBP.png",
  },
  {
    name: "Lisa White",
    company: "SecureNet Cybersecurity",
    title: "Founder",
    progress: 90,
    dataPoints: 52,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-5ov2BSkKdotbimImgfdTtNssFmZzIR.png",
  },
]

const inputFields = [
  { icon: Building2, placeholder: "Job Title (e.g. CTO, CEO, VP of Sales)" },
  { icon: Globe, placeholder: "Country (e.g. United States, United Kingdom)" },
  { icon: MapPin, placeholder: "State (e.g. New York, California)" },
  { icon: Building2, placeholder: "Industry (e.g. Technology, Healthcare)" },
  { icon: Tags, placeholder: "Industry Keywords (e.g. SaaS, Cybersecurity)" },
  { icon: HomeIcon, placeholder: "City (e.g. San Francisco, New York)" },
]

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-white transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
    </div>
    <span className="text-sm text-white/90 whitespace-nowrap">{progress}% Complete</span>
  </div>
)

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("find")
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-[1rem] sm:rounded-[2rem] bg-[#7C40FF]"
        aria-label="Features Section"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-600" />

        <div className="relative z-20 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 h-[calc(200vh-200px)] sm:h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
          <Tabs defaultValue="find" className="w-full relative z-10">
            <div className="relative overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="find" className="h-full overflow-y-auto">
                    <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        Tap Into 250M+ B2B Leads with Ease
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {/* Left Column - Input Fields */}
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          {inputFields.map((field, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 group"
                            >
                              <field.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white/90 transition-colors" />
                              <input
                                type="text"
                                placeholder={field.placeholder}
                                className="bg-transparent border-none text-white placeholder-white/70 w-full focus:outline-none text-sm sm:text-base font-medium"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Right Column - Preview */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 sm:p-4 md:p-6 border border-white/20 shadow-lg">
                          <h3 className="text-base sm:text-lg md:text-xl text-white mb-3 sm:mb-4">Preview Leads</h3>
                          <div className="space-y-2 sm:space-y-3">
                            {previewLeads.map((lead, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                              >
                                <div className="relative">
                                  <Image
                                    src={lead.avatar || "/placeholder.svg"}
                                    alt={lead.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                                  />
                                  <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-white font-medium text-sm sm:text-base group-hover:text-white/90 transition-colors">
                                    {lead.name}
                                  </p>
                                  <p className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors">
                                    {lead.title}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="research" className="h-full overflow-y-auto">
                    <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        Researching Leads
                      </h2>
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
                        <div className="custom-scrollbar pr-4 relative">
                          <div className="overflow-x-auto">
                            <table className="w-[calc(100%+16px)] table-auto">
                              <thead>
                                <tr className="text-white/70 text-sm text-left">
                                  <th className="pb-4 font-normal">Name</th>
                                  <th className="pb-4 font-normal hidden md:table-cell">Company Name</th>
                                  <th className="pb-4 font-normal hidden lg:table-cell">Job Title</th>
                                  <th className="pb-4 font-normal">Research Status</th>
                                  <th className="pb-4 font-normal text-right">Data Points</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5">
                                {researchLeads.map((lead, index) => (
                                  <tr key={index} className="group">
                                    <td className="py-3">
                                      <div className="flex items-center gap-2">
                                        <Image
                                          src={lead.avatar || "/placeholder.svg"}
                                          alt={lead.name}
                                          width={32}
                                          height={32}
                                          className="rounded-full w-8 h-8"
                                        />
                                        <span className="text-white font-medium text-sm">{lead.name}</span>
                                      </div>
                                    </td>
                                    <td className="py-3 hidden md:table-cell">
                                      <span className="text-white">{lead.company}</span>
                                    </td>
                                    <td className="py-3 hidden lg:table-cell">
                                      <span className="text-white">{lead.title}</span>
                                    </td>
                                    <td className="py-3 pr-4">
                                      <ProgressBar progress={lead.progress} />
                                    </td>
                                    <td className="py-3 text-right">
                                      <span className="text-white font-medium">{lead.dataPoints}</span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="scripts" className="h-full overflow-y-auto">
                    <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        AI Generated Scripts
                      </h2>
                      <ScriptTemplates />
                    </div>
                  </TabsContent>
                  <TabsContent value="chat" className="h-full overflow-y-auto">
                    <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        Smart Conversations That Convert
                      </h2>
                      <ChatInterface />
                    </div>
                  </TabsContent>
                  <TabsContent value="track" className="h-full overflow-y-auto">
                    <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                        Track Every Interaction
                      </h2>
                      <TrackingTable />
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 overflow-x-auto">
              <TabsList className="flex justify-between items-center p-1 mt-4 sm:mt-8 bg-white/20 backdrop-blur-md rounded-full w-full max-w-[700px] mx-auto">
                {[
                  { value: "find", icon: Search, label: "Find Leads" },
                  { value: "research", icon: Users, label: "Research" },
                  { value: "scripts", icon: FileText, label: "Scripts" },
                  { value: "chat", icon: MessageSquare, label: "Chat" },
                  { value: "track", icon: BarChart2, label: "Track" },
                ].map(({ value, icon: Icon, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 rounded-full py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-purple-700 hover:bg-white/10"
                    onClick={() => setActiveTab(value)}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="hidden sm:inline">{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-50">
        <SendoraBadge />
      </div>
    </section>
  )
}

