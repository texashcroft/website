"use client"

import { useEffect } from "react"
import { CalendarDays, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"

const performanceData = [
  { month: "Jan", value: 100000 },
  { month: "Feb", value: 180000 },
  { month: "Mar", value: 160000 },
  { month: "Apr", value: 180000 },
  { month: "May", value: 250000 },
  { month: "Jun", value: 280000 },
  { month: "Jul", value: 450000 },
  { month: "Aug", value: 380000 },
  { month: "Sep", value: 300000 },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

interface DashboardProps {
  onLoopComplete: () => void
}

const MetricCard = ({
  title,
  value,
  change,
  delay,
}: {
  title: string
  value: string
  change: string
  delay: number
}) => (
  <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay }}>
    <Card className="bg-white/10 backdrop-blur-[20px] p-6 hover:bg-white/15 transition-colors duration-300 shadow-lg border border-white/20">
      <h3 className="text-white/70 font-medium mb-4">{title}</h3>
      <p className="text-4xl font-semibold text-white mb-2">{value}</p>
      <p className="text-sm text-white/70">{change}</p>
    </Card>
  </motion.div>
)

export default function Dashboard({ onLoopComplete }: DashboardProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoopComplete()
    }, 6000)

    return () => clearTimeout(timer)
  }, [onLoopComplete])

  return (
    <div className="w-full h-full overflow-y-auto bg-transparent text-white p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Welcome, User</h1>
            <p className="text-sm text-white/70">Here's an overview of your campaigns</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs bg-white/10 backdrop-blur-[20px] border border-white/20 text-white"
            >
              <CalendarDays className="w-3 h-3 mr-1" />
              Feb 02 - Feb 09
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 bg-white/10 backdrop-blur-[20px] border border-white/20 text-white"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <MetricCard title="Total Campaigns" value="12" change="+2 Since Last Week" delay={0.2} />
          <MetricCard title="Active Channels" value="2" change="+2 Since Last Week" delay={0.3} />
          <MetricCard title="Prospects Contacted" value="4,535" change="+589 Since Last Week" delay={0.4} />
          <MetricCard title="Appointment Rate" value="3.2%" change="+0.5% Since Last Week" delay={0.5} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Card className="p-4 bg-white/10 backdrop-blur-[20px] border border-white/20">
              <h3 className="text-lg font-semibold mb-2 text-white">Campaign Performance</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c40ff" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7c40ff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#ffffff80" tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#ffffff80"
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value / 1000}K`}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white/10 backdrop-blur-[20px] p-2 border border-white/20 rounded shadow-md">
                              <p className="text-sm text-white">{`${payload[0].value.toLocaleString()}`}</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#7c40ff" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-4 bg-white/10 backdrop-blur-[20px] border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-white">Top Performing Channels</h3>
              <div className="space-y-2">
                {[
                  { name: "Calls", value: "35%", color: "bg-purple-500" },
                  { name: "SMS", value: "28%", color: "bg-blue-500" },
                  { name: "Email", value: "37%", color: "bg-green-500" },
                ].map((channel, index) => (
                  <div key={channel.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${channel.color} mr-2`} />
                      <span className="text-sm text-white">{channel.name}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{channel.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

