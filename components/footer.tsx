"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Youtube, MapPin } from "lucide-react"
import FloatingObjects from "./floating-objects"
import { keyframes } from "@emotion/react"

const rotateAnimation = keyframes`
  from {
    transform: translate(-50%, 50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, 50%) rotate(360deg);
  }
`

export default function Footer() {
  return (
    <footer className="relative bg-black/90 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 1px x 1px Circle Pattern Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full grid grid-cols-[repeat(auto-fill,1px)] grid-rows-[repeat(auto-fill,1px)] gap-4">
          {Array.from({ length: 1000 }).map((_, index) => (
            <div key={index} className="w-1 h-1 rounded-full bg-[#ffffff] opacity-25"></div>
          ))}
        </div>
      </div>

      {/* Floating 3D Objects Background */}
      <FloatingObjects />

      {/* Background Gradient Circle */}
      <div
        className="absolute left-1/2 bottom-0 w-[1200px] h-[1200px] pointer-events-none origin-center"
        style={{
          animation: `${rotateAnimation} 25s linear infinite`,
          transform: "translate(-50%, 50%)",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellipse%206-x3LGFqIGMdx1zKWLMeX19nGRScdLXI.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Gradient Circle */}
      <div
        className="absolute left-1/2 bottom-0 w-[1200px] h-[1200px] pointer-events-none origin-center"
        style={{
          animation: `${rotateAnimation} 20s linear infinite`,
          transform: "translate(-50%, 50%)",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce968309-469c-486c-bcb0-83421acd0bc1-GKIQjqPDTYa8Ay8Lc3USQkfmDeMLO4.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Logo Panel */}
            <div className="bg-black/35 backdrop-blur-md rounded-full px-10 py-5 inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610460%20(2)-d5bvt8wiCvlW9bkxDHV9aMAJR77bIQ.png"
                alt="Sendora"
                width={300}
                height={66}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            {/* Quicklinks Panel */}
            <div className="bg-black/35 backdrop-blur-md rounded-3xl p-6 border border-white/10 -mt-2">
              <h3 className="text-white text-xl font-semibold mb-4">Quicklinks</h3>
              <nav className="space-y-3">
                <Link
                  href="#hero-section"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("hero-section")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Book a Demo
                </Link>
                <Link
                  href="#form-section"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("form-section")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Try for Yourself
                </Link>
                <Link
                  href="#faq-section"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("faq-section")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  FAQ
                </Link>
                <Link
                  href="#use-cases"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("use-cases")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Use Cases
                </Link>
              </nav>
            </div>
          </div>

          {/* Center Section - Empty for spacing */}
          <div className="hidden lg:block" />

          {/* Right Section */}
          <div className="space-y-6 pt-8 lg:pt-12">
            {/* Address Panel */}
            <div className="bg-black/35 backdrop-blur-md rounded-full px-6 py-4 flex items-center gap-3 w-full sm:w-auto ml-auto">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white text-sm whitespace-nowrap">30 N Gould St STE R, Sheridan, WY, 82801</span>
              </div>
            </div>

            {/* Social and Legal Panels Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Social Media Panel */}
              <div className="bg-black/35 backdrop-blur-md rounded-2xl p-4 flex items-center justify-center">
                <div className="flex items-center gap-6">
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
                    <Youtube className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Legal Links Panel */}
              <div className="bg-black/35 backdrop-blur-md rounded-2xl p-4">
                <nav className="flex flex-col items-start gap-2">
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                    AI Calling Laws
                  </Link>
                </nav>
              </div>
            </div>

            {/* Copyright Panel */}
            <div className="bg-black/35 backdrop-blur-md rounded-2xl p-4 w-full">
              <p className="text-white text-sm text-center">© All rights reserved 2024 Sendora AI LLC.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

