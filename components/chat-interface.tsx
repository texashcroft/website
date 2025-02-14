"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Message {
  id: number
  content: string
  isAI: boolean
  delay: number
}

const messages: Message[] = [
  {
    id: 1,
    content:
      "Hey, I saw your email, but I'm not sure about this. We've tried SEO before, and it didn't really bring results.",
    isAI: false,
    delay: 0,
  },
  {
    id: 2,
    content:
      "Hey James, I hear you! A lot of businesses have had bad experiences with SEO agencies that overpromise and underdeliver.\n\nQuick question—what specifically didn't work for you? Was it low traffic, poor lead quality, or just no ROI?",
    isAI: true,
    delay: 1,
  },
  {
    id: 3,
    content: "Mostly low-quality leads. We ranked for a few keywords, but they weren't converting.",
    isAI: false,
    delay: 2,
  },
  {
    id: 4,
    content:
      'Got it! That\'s actually a common problem when agencies focus on any traffic instead of buyer-intent traffic.\n\nFor example, we recently helped a fence contractor who was getting tons of traffic but barely any calls. We switched their SEO strategy to focus on high-intent keywords like "best fencing company near me" instead of just "types of fences."\n\nWithin 3 months, their inbound leads tripled.\n\nWould you be open to a quick breakdown of how we\'d tailor SEO for your business so you only get qualified leads?',
    isAI: true,
    delay: 3,
  },
  {
    id: 5,
    content: "Alright, send it over.",
    isAI: false,
    delay: 4,
  },
  {
    id: 6,
    content:
      "Great! I'll put together an audit and send it your way. In the meantime, let's set up a quick chat so I can explain everything in detail. Does 3 PM tomorrow sounds good?",
    isAI: true,
    delay: 5,
  },
  {
    id: 7,
    content:
      "3 PM tomorrow works perfectly for me. I appreciate you taking the time to put this together. Looking forward to our chat!",
    isAI: false,
    delay: 6,
  },
]

export default function ChatInterface() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleMessages([])
      messages.forEach((message) => {
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, message])
        }, message.delay * 1000)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-4">
      {visibleMessages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex items-start gap-3 ${message.isAI ? "justify-end" : ""}`}
        >
          {!message.isAI && (
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8M7sVjVY60Uu0FtsR2QUjHA3RUUPaU.png"
                alt="User Avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-2 ${
              message.isAI
                ? "bg-white/10 backdrop-blur-md text-white ml-auto"
                : "bg-white/20 backdrop-blur-md text-white"
            }`}
          >
            <p className="whitespace-pre-line">{message.content}</p>
          </div>
          {message.isAI && (
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610460-zxPPDw6Wone3NHEUW1OnvfqQxmJhZl.png"
                alt="AI Avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

