"use client"

import { motion } from "framer-motion"

interface Lead {
  name: string
  email: string
  phone: string
  status: "Contacted" | "Replied" | "Appointment Booked" | "Not Interested"
}

const leads: Lead[] = [
  {
    name: "John Carter",
    email: "john@acme.com",
    phone: "(312) 555-8721",
    status: "Contacted",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@techpro.com",
    phone: "(415) 555-2314",
    status: "Replied",
  },
  {
    name: "Mark Robinson",
    email: "mark@buildit.com",
    phone: "(646) 555-7834",
    status: "Appointment Booked",
  },
  {
    name: "Emily Davis",
    email: "emily@green.net",
    phone: "(305) 555-1298",
    status: "Not Interested",
  },
  {
    name: "Michael Harris",
    email: "mike@logisco.com",
    phone: "(214) 555-5642",
    status: "Not Interested",
  },
  {
    name: "Olivia Thompson",
    email: "olivia@fin.com",
    phone: "(702) 555-7845",
    status: "Replied",
  },
  {
    name: "James White",
    email: "james@trendy.com",
    phone: "(503) 555-9632",
    status: "Appointment Booked",
  },
  {
    name: "Lisa Adams",
    email: "lisa@meditech.com",
    phone: "(917) 555-4782",
    status: "Contacted",
  },
  {
    name: "David Brown",
    email: "david@smart.com",
    phone: "(858) 555-2491",
    status: "Replied",
  },
  {
    name: "Jessica Hall",
    email: "jess@auto.com",
    phone: "(832) 555-8934",
    status: "Appointment Booked",
  },
  {
    name: "Kevin Martinez",
    email: "kevin@nexttvi.com",
    phone: "(469) 555-1257",
    status: "Contacted",
  },
]

const StatusBadge = ({ status }: { status: Lead["status"] }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Contacted":
        return "bg-blue-500/10 text-blue-200"
      case "Replied":
        return "bg-yellow-500/10 text-yellow-200"
      case "Appointment Booked":
        return "bg-green-500/10 text-green-200"
      case "Not Interested":
        return "bg-red-500/10 text-red-200"
      default:
        return "bg-gray-500/10 text-gray-200"
    }
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles()} backdrop-blur-md whitespace-nowrap`}
    >
      {status}
    </span>
  )
}

export default function TrackingTable() {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md custom-scrollbar">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Email</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Phone Number</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Pipeline Stage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {leads.map((lead, index) => (
              <motion.tr
                key={lead.email}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="text-white font-medium">{lead.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white/70">{lead.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white/70">{lead.phone}</span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={lead.status} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

