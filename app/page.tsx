"use client"

import AnimationSequence from "@/components/animation-sequence"
import Image from "next/image"
import Link from "next/link"
import ScatteredBackground from "@/components/scattered-background"
import InfiniteScroll from "@/components/infinite-scroll"
import AudioRecordings from "@/components/audio-recordings"
import { useState, useEffect } from "react"
import AIEmployeesSection from "@/components/ai-employees-section"
import dynamic from "next/dynamic"
import FeaturesSection from "@/components/features-section"
import UseCasesSection from "@/components/use-cases-section"
import FAQSection from "@/components/faq-section"
import FormSection from "@/components/form-section"
import Footer from "@/components/footer"
import { CTAButton } from "@/components/ui/cta-button"
import BackToTopButton from "@/components/back-to-top-button"
import { motion } from "framer-motion"

const CountUp = dynamic(() => import("react-countup"), { ssr: false })

const StatCounter = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-heading mb-2">122,789+</h2>
  }

  return (
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-heading mb-2">
      <CountUp start={115000} end={122789} duration={2.5} separator="," suffix="+" useEasing={true} />
    </h2>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white custom-scrollbar pt-16 sm:pt-20 scroll-smooth">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-white z-0"></div>
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 mx-auto px-4 pt-1">
          <div
            className="mx-auto max-w-7xl xl:max-w-5xl px-2 sm:px-4 py-2 sm:py-3"
            style={{ width: "100%", maxWidth: "69.228%" }}
          >
            <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/30 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-md shadow-lg max-w-[90%] mx-auto z-[9999]">
              {/* Logo */}
              <div className="flex items-center pr-4 sm:pr-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610460-zxPPDw6Wone3NHEUW1OnvfqQxmJhZl.png"
                  alt="Sendora Logo"
                  width={160}
                  height={160}
                  className="w-24 sm:w-28 h-auto object-contain"
                  priority
                />
              </div>
              {/* Navigation Links */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link
                  href="#"
                  className="text-xs sm:text-sm font-medium text-black hover:text-gray-700 transition-colors whitespace-nowrap"
                >
                  Case Studies
                </Link>
                <Link
                  href="#"
                  className="text-xs sm:text-sm font-medium text-black hover:text-gray-700 transition-colors whitespace-nowrap"
                >
                  Test Yourself
                </Link>
                <Link
                  href="#"
                  className="text-xs sm:text-sm font-medium text-black hover:text-gray-700 transition-colors whitespace-nowrap hidden sm:inline-block"
                >
                  See Live Demo
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <div id="hero-section" className="relative z-10 mx-auto max-w-7xl px-4 pt-4 sm:pt-6 sm:px-6 lg:px-8">
          {/* Scattered Background Layer */}
          <ScatteredBackground />
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 flex w-fit items-center justify-center rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-md border border-gray-200 relative z-50"
          >
            <span className="mr-1.5 sm:mr-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                <path d="m14 7 3 3" />
                <path d="M5 6v4" />
                <path d="M19 14v4" />
                <path d="M10 2v2" />
                <path d="M7 8H3" />
                <path d="M21 16h-4" />
                <path d="M11 3H9" />
              </svg>
            </span>
            <span className="text-xs sm:text-sm font-medium text-black">#1 in AI Voice Sales Agents</span>
          </motion.div>

          {/* Main Content */}
          <div className="relative mx-auto max-w-4xl text-center -mt-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px] lg:h-[560px] lg:w-[560px] rounded-[1000px] bg-white/10 border-2 border-white backdrop-blur-md flex flex-col items-center justify-center mx-auto mt-4 sm:mt-8"
            >
              {/* Purple Circle Background */}
              <div className="absolute w-[380px] h-[380px] sm:w-[580px] sm:h-[580px] md:w-[660px] md:h-[660px] lg:w-[740px] lg:h-[740px] -left-[40px] sm:-left-[80px] -top-[40px] sm:-top-[80px] rounded-[1000px] overflow-hidden z-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellipse%206-98lCtzyE3ahVWG0Is3w9z7nReKFDZw.png"
                  alt=""
                  fill
                  className="object-cover opacity-40"
                  priority
                />
              </div>

              {/* 3D Objects - Update positions and sizes */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/277-Ylsfhl3BLKSShpMJYbCzuR7ITsOOW4.png"
                alt="3D Object 1"
                width={252}
                height={252}
                className="absolute w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px] lg:w-[230px] lg:h-[230px] top-[-8%] left-[-8%] animate-float"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p90%201-mxDqLKWByWSeVkoegjihgAawCQK8ZH.png"
                alt="3D Object 2"
                width={150}
                height={150}
                className="absolute w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] top-[12%] right-[-12%] animate-float"
                style={{ animationDelay: "1s" }}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/278-TczTKoFDkPbrOLjkTpHTCCVElvgdJe.png"
                alt="3D Object 3"
                width={154}
                height={154}
                className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] bottom-[6%] left-[6%] animate-float z-50"
                style={{ animationDelay: "2s" }}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20162-IXtI4MbxdBpezHB3427xxvTY29W8op.png"
                alt="3D Object 4"
                width={180}
                height={180}
                className="absolute w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] bottom-[4%] right-[-6%] animate-float"
                style={{ animationDelay: "1.5s" }}
              />

              <div className="relative z-10 px-3 sm:px-5 -mt-8 sm:-mt-12">
                {" "}
                {/* Updated margin-top */}
                <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-semibold font-heading tracking-tight text-white leading-tight">
                  AI Sells,
                  <br />
                  You Close.
                </h1>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-white">
                  Scale your outreach systems way faster than
                  <br className="hidden sm:block" />
                  you ever thought was possible
                </p>
                <CTAButton />
              </div>
            </motion.div>

            {/* Stats Panel */}
            <div className="relative z-20 mx-auto w-full sm:w-[110%] -mt-8 sm:-mt-16 lg:-mt-24 sm:-ml-[5%]">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px] sm:min-h-[800px]">
                <div className="relative bg-white overflow-hidden p-4 sm:p-8">
                  {/* Background SVG */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610255-wtSot4jZOnXrIDl5AqxUwdIyNcAPGE.svg"
                      alt=""
                      width={3540}
                      height={2648}
                      className="w-full h-full object-cover opacity-50 scale-150 translate-y-[20%]"
                    />
                  </div>
                  <div className="relative z-10 text-center mb-6 sm:mb-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                    {" "}
                    {/* Updated margin-top classes */}
                    <StatCounter />
                    <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-8">AI Calls Done</p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-heading mb-4 sm:mb-8">
                      All On{" "}
                      <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                        Autopilot
                      </span>
                    </h3>
                  </div>
                  {/* Animation Sequence Container */}
                  <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-[10px] rounded-[30px] sm:rounded-[50px] border-2 border-white/30 overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610415-Z7iR41lYRYVxnpaITyIMB8Y8tYIVLU.png"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="blur-[10px]"
                      />
                    </div>
                    <div className="relative z-10">
                      <AnimationSequence />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Infinite Scroll Section */}
        <div className="relative w-full -mt-8 sm:-mt-16">
          <InfiniteScroll />
        </div>
        {/* Features Section */}
        <div className="relative z-10 mt-8 sm:mt-16">
          <FeaturesSection />
        </div>
        {/* Audio Recordings Section */}
        <div className="relative z-10 mt-4">
          <AudioRecordings />
        </div>
        {/* AI Employees Section */}
        <div className="relative z-10 mt-8 sm:mt-16 bg-white">
          <AIEmployeesSection />
        </div>
        {/* Form Section */}
        <div className="relative z-10 bg-white mt-4">
          <FormSection />
        </div>
        {/* Use Cases Section */}
        <div className="relative z-10 bg-white mt-8 sm:mt-16">
          <UseCasesSection />
        </div>
        {/* FAQ Section */}
        <div className="relative z-10 bg-white mt-8 sm:mt-14">
          <FAQSection />
        </div>
        <BackToTopButton />
      </div>
      <Footer />
    </main>
  )
}

