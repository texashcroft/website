import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import type React from "react"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // 400 for regular text, 600 for semi-bold (headings)
})

export const metadata = {
  title: "Sendora",
  description: "AI Sells, You Close.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'